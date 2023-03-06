import * as btc from 'micro-btc-signer';
import * as secp from '@noble/secp256k1';
import { hex } from '@scure/base';
import assert from 'assert';
import { secp256k1 } from '@noble/curves/secp256k1';
import type { PegTransactionI } from './PegTransaction';
import PegTransaction from './PegTransaction';

export interface PegOutTransactionI extends PegTransactionI {

	buildTransaction: (signature:string|undefined) => btc.Transaction;
	calculateFees: () => void;
	getChange: () => number;
	getOutputsForDisplay: () => Array<any>;
	getOutput2ScriptPubKey: () => string;
}

const priv = secp.utils.randomPrivateKey()
type KeySet = {
	priv: Uint8Array,
	ecdsaPub: Uint8Array,
	schnorrPub: Uint8Array
}
const keySetForFeeCalculation: KeySet[] = []
keySetForFeeCalculation.push({
  priv,
  ecdsaPub: secp.getPublicKey(priv, true),
  schnorrPub: secp.schnorr.getPublicKey(priv)
})

export default class PegOutTransaction extends PegTransaction implements PegOutTransactionI {

	privKey = hex.decode('0101010101010101010101010101010101010101010101010101010101010101');

	public constructor() {
		super();
	}
 
	public static create = async (network:string, fromBtcAddress:string):Promise<PegTransactionI> => {
		const me = new PegOutTransaction();
		return super.createInternal(me, network, fromBtcAddress);
	};

	public static hydrate = (o:PegOutTransactionI) => {
		const me = new PegOutTransaction();
		me.net = o.net;
		if (!o.fromBtcAddress) throw new Error('No address - use create instead!');
		me.fromBtcAddress = o.fromBtcAddress;
		me.pegInData = o.pegInData;
		me.addressInfo = o.addressInfo;
		me.feeInfo = o.feeInfo;
		me.ready = o.ready;
		return me;
	};
 
	getChange = () => {
		return this.maxCommit() - this.fee - this.dust;
	};
 
	setAmount = (amount:number) => {
		//if (amount > this.maxCommit() - this.fee) {
		//	throw new Error('Amount is more than available ' + this.maxCommit() + ' less the gas ' + this.fee);
		//}
		this.pegInData.amount = amount;
	}

	calculateFees = ():void => {

		// random addresses for calculating the fee.
		if (!this.ready) throw new Error('Not ready!');
		const stacksAddress = 'ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN';
		const sbtcWalletAddress = 'tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss';

		// prepare random signer
		const p2Ret = btc.p2wpkh(keySetForFeeCalculation[0].ecdsaPub);
		assert('wpkh' === p2Ret.type);
		const tx = new btc.Transaction({ allowUnknowOutput: true });
		// create a set of inputs corresponding to the utxo set
		for (const utxo of this.addressInfo.utxos) {
			//const nonWitnessUtxo = globalThis.Buffer.from(utxo.tx.hex, 'hex');
			//const redeemScript = getRedeemScript(utxo, keyPairs[0].publicKey);
			tx.addInput({
				txid: hex.decode(utxo.txid),
				//txid: utxo.txid,
				index: utxo.vout,
				witnessUtxo: {
					amount: 600n,
					script: btc.p2wpkh(secp256k1.getPublicKey(this.privKey, true)).script,
				  },
			});
	  	}
		const inputsVal = this.maxCommit();
		const changeAmount = Math.floor(this.maxCommit() - (2 * this.dust));
		// internals of adding outputs - 'data length' : 'op code' : 'data'
		// const opCode = Buffer.from('2a6a', 'hex');
		// const data1 = Buffer.from(Buffer.from(this.pegInData.stacksAddress, 'utf8').toString('hex'), 'hex');
		// tx.addOutput({ script: btc.Script.encode(['RETURN', Buffer.from(this.stacksAddress, 'utf8')]), amount: 0n });
		tx.addOutput({ script: btc.Script.encode(['RETURN', globalThis.Buffer.from(stacksAddress, 'utf8')]), amount: 0n });
		tx.addOutputAddress(sbtcWalletAddress, BigInt(0), this.net);
		tx.addOutputAddress(this.fromBtcAddress, BigInt(0), this.net);
		tx.sign(this.privKey);
		tx.finalize();
		this.scureFee = Number(tx.fee);
		//const vsize = tx.vsize + this.addressInfo.utxos.length; // add 1 byte per signature
		this.fees = [
			this.scureFee * 0.8, //Math.floor((this.feeInfo.low_fee_per_kb / 1000) * vsize),
			this.scureFee * 1.0, //Math.floor((this.feeInfo.medium_fee_per_kb / 1000) * vsize),
			this.scureFee * 1.2, //Math.floor((this.feeInfo.high_fee_per_kb / 1000) * vsize),
		]
		this.fee = this.fees[1];
		if (this.pegInData.amount === 0) {
			this.pegInData.amount = this.maxCommit() - this.fee;
		}
	}

	getOutputsForDisplay = () => {
		const changeAmount = Math.floor(this.maxCommit() - this.dust - this.fee);
		const outs:Array<any> = [
			{ script: 'RETURN ' + globalThis.Buffer.from(this.pegInData.stacksAddress, 'utf8'), amount: 0 },
			{ address: this.pegInData.sbtcWalletAddress, amount: this.dust },
		]
		if (changeAmount > 0) outs.push({ address: this.fromBtcAddress, amount: changeAmount });
		outs.push({ address: 'pays ' + this.fee + ' satoshis to miner.' });
		return outs;
	}

	getOutput2ScriptPubKey = () => {
		const script = btc.OutScript.encode(btc.Address(this.net).decode(this.pegInData.sbtcWalletAddress))
		const buf1 = globalThis.Buffer.allocUnsafe(11);
		buf1.writeUInt32LE(this.pegInData.amount, 0);
		const buf2 = globalThis.Buffer.from(script);
		const data = globalThis.Buffer.concat([buf1, buf2]);
		return data.toString('hex');
	}

	buildTransaction = (signature:string|undefined) => {
		if (!this.ready) throw new Error('Not ready!');
		if (!signature) throw new Error('Signature of output 2 scriptPubKey is required');
		const tx = new btc.Transaction({ allowUnknowOutput: true });
		// create a set of inputs corresponding to the utxo set
		for (const utxo of this.addressInfo.utxos) {
			tx.addInput({
				txid: hex.decode(utxo.txid),
				index: utxo.vout,
			});
	  	}		
		const buf1 = globalThis.Buffer.allocUnsafe(11);
		buf1.writeUInt32LE(this.pegInData.amount, 0);
		if (!signature) throw new Error('Signature of the amount and output 2 scriptPubKey is missing.')
		const buf2 = globalThis.Buffer.from(signature);
		const data = globalThis.Buffer.concat([buf1, buf2]);
		tx.addOutput({ script: btc.Script.encode(['RETURN', data]), amount: 0n });
		tx.addOutputAddress(this.pegInData.sbtcWalletAddress, BigInt(this.dust), this.net);
		tx.addOutputAddress(this.fromBtcAddress, BigInt(this.getChange()), this.net);

		return tx; //hex.encode(tx.toPSBT());
	}
};