import * as btc from 'micro-btc-signer';
import * as secp from '@noble/secp256k1';
import { hex } from '@scure/base';
import { Buffer } from "buffer/";
import assert from 'assert';
import { secp256k1 } from '@noble/curves/secp256k1';
import type { PegTransactionI } from './PegTransaction';
import PegTransaction from './PegTransaction';

export interface PegInTransactionI extends PegTransactionI {

	buildTransaction: (signature:string|undefined) => btc.Transaction;
	calculateFees: () => void;
	getChange: () => number;
	getOutputsForDisplay: () => Array<any>;
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

export default class PegInTransaction extends PegTransaction implements PegInTransactionI {
	public constructor() {
		super();
	}
 
	public static create = async (network:string, fromBtcAddress:string):Promise<PegTransactionI> => {
		const me = new PegInTransaction();
		return super.createInternal(me, network, fromBtcAddress);
	};

	public static hydrate = (o:PegInTransactionI) => {
		const me = new PegInTransaction();
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
		return this.maxCommit() - this.pegInData.amount - this.fee;
	};
 
	setAmount(amount:number) {
		if (amount > this.maxCommit() - this.fee) {
			throw new Error('Amount is more than available ' + this.maxCommit() + ' less the gas ' + this.fee);
		}
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
		const privKey = hex.decode('0101010101010101010101010101010101010101010101010101010101010101');
		const tx = new btc.Transaction({ allowUnknowOutput: true });
		console.log('utxoSet: ', this.addressInfo.utxos)
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
					script: btc.p2wpkh(secp256k1.getPublicKey(privKey, true)).script,
				  },
			});
	  	}
		const inputsVal = this.maxCommit();
		const changeAmount = Math.floor(this.maxCommit() - (2 * this.dust));
		console.log('inputsVal:' + inputsVal)
		console.log('changeAmount:' + changeAmount)
		// internals of adding outputs - 'data length' : 'op code' : 'data'
		// const opCode = Buffer.from('2a6a', 'hex');
		// const data1 = Buffer.from(Buffer.from(this.pegInData.stacksAddress, 'utf8').toString('hex'), 'hex');
		// tx.addOutput({ script: btc.Script.encode(['RETURN', Buffer.from(this.stacksAddress, 'utf8')]), amount: 0n });
		tx.addOutput({ script: btc.Script.encode(['RETURN', Buffer.from(stacksAddress, 'utf8')]), amount: 0n });
		tx.addOutputAddress(sbtcWalletAddress, BigInt(0), this.net);
		tx.addOutputAddress(this.fromBtcAddress, BigInt(0), this.net);
		tx.sign(privKey);
		tx.finalize();
		this.scureFee = Number(tx.fee);

		const vsize = tx.vsize + this.addressInfo.utxos.length; // add 1 byte per signature
		this.fees = [
			Math.floor((this.feeInfo.low_fee_per_kb / 1000) * vsize),
			Math.floor((this.feeInfo.medium_fee_per_kb / 1000) * vsize),
			Math.floor((this.feeInfo.high_fee_per_kb / 1000) * vsize),
		]
		this.fee = this.fees[1];
		if (this.pegInData.amount === 0) {
			this.pegInData.amount = this.maxCommit() - this.fee;
		}
	}

	getOutputsForDisplay = () => {
		const changeAmount = Math.floor(this.maxCommit() - this.pegInData.amount - this.fee);
		const outs:Array<any> = [
			{ script: 'RETURN ' + Buffer.from(this.pegInData.stacksAddress, 'utf8'), amount: 0 },
			{ address: this.pegInData.sbtcWalletAddress, amount: this.pegInData.amount },
		]
		if (changeAmount > 0) outs.push({ address: this.fromBtcAddress, amount: changeAmount });
		outs.push({ address: 'pays ' + this.fee + ' satoshis to miner.' });
		return outs;
	}

	/**
	 * Calculating fees or building the transaction
	 * see: https://github.com/bitcoinjs/bitcoinjs-lib/issues/1566
	 */
	buildTransaction = () => {
		if (!this.ready) throw new Error('Not ready!');
		const tx = new btc.Transaction({ allowUnknowOutput: true });
		console.log('utxoSet: ', this.addressInfo.utxos)
		// create a set of inputs corresponding to the utxo set
		for (const utxo of this.addressInfo.utxos) {
			tx.addInput({
				txid: hex.decode(utxo.txid),
				index: utxo.vout,
			});
	  	}
		tx.addOutput({ script: btc.Script.encode(['RETURN', Buffer.from(this.pegInData.stacksAddress, 'utf8')]), amount: 0n });
		tx.addOutputAddress(this.pegInData.sbtcWalletAddress, BigInt(this.pegInData.amount), this.net);
		const changeAmount = Math.floor(this.maxCommit() - this.pegInData.amount - this.fee);
		if (changeAmount > 0) tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
		return tx; //hex.encode(tx.toPSBT());
	}
};