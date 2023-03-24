import * as btc from '@scure/btc-signer';
import * as secp from '@noble/secp256k1';
import { hex } from '@scure/base';
import assert from 'assert';
import { secp256k1 } from '@noble/curves/secp256k1';
import type { PegTransactionI } from './PegTransaction';
import PegTransaction from './PegTransaction';
import { fetchUtxoSet, fetchCurrentFeeRates } from "../bridge_api";
import { MAGIC_BYTES_TESTNET, MAGIC_BYTES_MAINNET, PEGOUT_OPCODE } from './PegTransaction'

export interface PegOutTransactionI extends PegTransactionI {

	buildTransaction: (signature:string|undefined) => { opReturn: btc.Transaction, opDrop: btc.Transaction };
	calculateFees: () => void;
	getChange: () => number;
	getOutputsForDisplay: () => Array<any>;
	getDataToSign: () => Buffer;
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
 
	public static create = async (network:string, fromBtcAddress:string, sbtcWalletAddress:string):Promise<PegOutTransactionI> => {
		const me = new PegOutTransaction();
		me.net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
		me.fromBtcAddress = fromBtcAddress;
		me.pegInData = {
			amount: 0,
			stacksAddress: undefined,
			sbtcWalletAddress
		}
		// utxos have to come from a hosted indexer or external service
		// client catches errors
		me.addressInfo = await fetchUtxoSet(fromBtcAddress);
		const btcFeeRates = await fetchCurrentFeeRates();
		me.feeInfo = btcFeeRates.feeInfo;
		//me.calculateFees(network);
		me.ready = true;
		return me;
	};

	public static hydrate = (o:PegOutTransactionI) => {
		const me = new PegOutTransaction();
		me.net = o.net;
		if (!o.fromBtcAddress) throw new Error('No address - use create instead!');
		me.fromBtcAddress = o.fromBtcAddress;
		me.pegInData = o.pegInData;
		me.addressInfo = o.addressInfo;
		me.feeInfo = o.feeInfo;
		me.fees = o.fees;
		me.fee = o.fee;
		me.scureFee = o.scureFee;
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
			//const nonWitnessUtxo = Buffer.from(utxo.tx.hex, 'hex');
			//const redeemScript = getRedeemScript(utxo, keyPairs[0].publicKey);
			if (this.isUTXOConfirmed(utxo)) {
				tx.addInput({
					txid: hex.decode(utxo.txid),
					//txid: utxo.txid,
					index: utxo.vout,
					witnessUtxo: {
						amount: 600n,
						script: btc.p2wpkh(secp256k1.getPublicKey(this.privKey, true)).script,
					  },
				});
			} else {
				this.unconfirmedUtxos = true;
			}
	  	}
		if (tx.inputsLength === 0) throw new Error('No confirmed UTXOs (4 confirmations are required)')
		// internals of adding outputs - 'data length' : 'op code' : 'data'
		// const opCode = Buffer.from('2a6a', 'hex');
		// const data1 = Buffer.from(Buffer.from(this.pegInData.stacksAddress, 'utf8').toString('hex'), 'hex');
		// tx.addOutput({ script: btc.Script.encode(['RETURN', Buffer.from(this.stacksAddress, 'utf8')]), amount: 0n });
		tx.addOutput({ script: btc.Script.encode(['RETURN', Buffer.from(stacksAddress, 'utf8')]), amount: 0n });
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
		const addr = this.pegInData.stacksAddress || 'stx address unknown'
		const outs:Array<any> = [
			{ script: 'RETURN ' + Buffer.from(addr), amount: 0 },
			{ address: this.pegInData.sbtcWalletAddress, amount: this.dust },
		]
		if (changeAmount > 0) outs.push({ address: this.fromBtcAddress, amount: changeAmount });
		outs.push({ address: 'pays ' + this.fee + ' satoshis to miner.' });
		return outs;
	}

	getDataToSign = () => {
		const amtBuf = Buffer.alloc(9);
		amtBuf.writeUInt32LE(this.pegInData.amount, 0);
		const script = btc.OutScript.encode(btc.Address(this.net).decode(this.pegInData.sbtcWalletAddress))
		const scriptBuf = Buffer.from(script);
		const data = Buffer.concat([amtBuf, scriptBuf]);
		console.log('getDataToSign: ' + data.toString('hex'))
		return data;
	}

	buildTransaction = (signature:string|undefined) => {
		if (!this.ready) throw new Error('Not ready!');
		if (!signature) throw new Error('Signature of output 2 scriptPubKey is required');
		console.log('buildTransaction:signature: ', signature.length + ' : ' + signature)
		return { opReturn: this.buildOpReturn(signature), opDrop: this.buildOpDrop(signature) };
	}

	private addInputs = (tx:btc.Transaction) => {
		for (const utxo of this.addressInfo.utxos) {
			const script = btc.RawTx.decode(hex.decode(utxo.tx.hex))
			tx.addInput({
				txid: hex.decode(utxo.txid),
				index: utxo.vout,
				witnessUtxo: {
					script: script.outputs[utxo.vout].script,
					amount: BigInt(utxo.value)
				},
			});
		}
	}

	private buildOpReturn = (signature:string|undefined) => {
		if (!this.ready) throw new Error('Not ready!');
		if (!signature) throw new Error('Signature of output 2 scriptPubKey is required');
		const tx = new btc.Transaction({ allowUnknowOutput: true });
		this.addInputs(tx);
		if (!signature) throw new Error('Signature of the amount and output 2 scriptPubKey is missing.')
		const data = this.buildData(signature)
		tx.addOutput({ script: btc.Script.encode(['RETURN', data]), amount: 0n });
		tx.addOutputAddress(this.pegInData.sbtcWalletAddress, BigInt(this.dust), this.net);
		if (this.getChange() > 0) tx.addOutputAddress(this.fromBtcAddress, BigInt(this.getChange()), this.net);

		return tx;
	}

	private buildOpDrop = (signature:string|undefined) => {
		if (!signature) throw new Error('Signature of the amount and output 2 scriptPubKey is missing.')
		const tx = new btc.Transaction({ allowUnknowOutput: true });
		this.addInputs(tx);
		const asmScript = this.getOpDropP2shScript(signature);
		tx.addOutput({ script: asmScript, amount: BigInt(this.dust) });
		if (this.getChange() > 0) tx.addOutputAddress(this.fromBtcAddress, BigInt(this.getChange()), this.net);
		return tx;
	}

	private getOpDropP2shScript(signature:string) {
		const script = btc.OutScript.encode(btc.Address(this.net).decode(this.pegInData.sbtcWalletAddress))	
		const data = this.buildData(signature)
		const asmScript = btc.Script.encode([data, 'DROP', 'DUP', 'HASH160', script, 'EQUALVERIFY', 'CHECKSIG'])
		console.log('getOpDropP2shScript:asmScript: ', btc.Script.decode(asmScript))
		return asmScript;
	}

	private buildData = (signature:string):Buffer => {
		const magicBuf = (this.net === btc.TEST_NETWORK) ? Buffer.from(MAGIC_BYTES_TESTNET, 'hex') : Buffer.from(MAGIC_BYTES_MAINNET, 'hex');
		const opCodeBuf = Buffer.from(PEGOUT_OPCODE, 'hex');
		const amtBuf = Buffer.allocUnsafe(9);
		amtBuf.writeUInt32LE(this.pegInData.amount, 0);
		const sigBuf = Buffer.from(signature, 'hex');
		console.log('getOpDropP2shScript:signature : ', sigBuf.length);
		console.log('getOpDropP2shScript:signature : ', sigBuf.toString('hex'));
		const data = Buffer.concat([magicBuf, opCodeBuf, amtBuf, sigBuf]);
		console.log(data);
		console.log('getOpDropP2shScript:data : ', data.toString('hex'));
		return data;
	}
};