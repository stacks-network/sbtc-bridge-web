import { fetchUtxoSet, fetchCurrentFeeRates } from "../bridge_api";
import * as btc from 'micro-btc-signer';
import * as secp from '@noble/secp256k1';
import { hex } from '@scure/base';
import { Buffer } from "buffer/";
import { decodeStacksAddress } from "$lib/stacks";
import assert from 'assert';
import { secp256k1 } from '@noble/curves/secp256k1';

type PegInData = {
	stacksAddress: string;
	sbtcWalletAddress: string;
	amount: number,
};

export interface PegOutTransactionI {
	/**
	 * Calculating fees or building the transaction
	 * see: https://github.com/bitcoinjs/bitcoinjs-lib/issues/1566
	 */
	net:any;
    ready:boolean;
    fromBtcAddress:string;
    addressInfo:any;
	pegInData: PegInData;
	feeInfo: {
		low_fee_per_kb: number;
		medium_fee_per_kb: number;
		high_fee_per_kb: number;
	}
	fees: Array<number>;
	fee: number;
	dust: number;

	buildTransaction: () => btc.Transaction;
	calculateFees: () => void;
	maxCommit: () => number;
	setStacksAddress: (stacksAddress:string|undefined) => void;
	setAmount: (pegInAmount:number) => void;
	getChange: () => number;
	setFeeRate: (rate:number) => void;
	getOutputsForDisplay: () => Array<any>;
	getInputsForDisplay: () => Array<any>;
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

export default class PegOutTransaction implements PegOutTransactionI {
	static FORMAT = /[ `!@#$%^&*()_+=[\]{};':"\\|,<>/?~]/;
	net:any;
	ready = false;
	fromBtcAddress!: string;
	pegInData: PegInData = {
		stacksAddress: 'ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN', // default for testing
		sbtcWalletAddress: 'tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss', // default for testing
		amount: 0	
	};
	addressInfo: any;
	fees: Array<number> = [20000, 35000, 50000];
	fee = 0;
	dust = 500;
	feeInfo: {
		low_fee_per_kb: number;
		medium_fee_per_kb: number;
		high_fee_per_kb: number;
	} = {low_fee_per_kb: 20000, medium_fee_per_kb: 20000, high_fee_per_kb: 20000};

	private constructor() {
		// use create function
	}
 
	/**
	 * User's btc address is needed to fetch utxo's and calculate tx fee.
	 * This gives us the max amount they can peg as the sum of utxo amounts.
	 * @param fromBtcAddress 
	 * @returns 
	 */
	public static create = async (network:string, fromBtcAddress:string):Promise<PegOutTransactionI> => {
		const me = new PegOutTransaction();
		me.net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
		me.fromBtcAddress = fromBtcAddress;
		// utxos have to come from a hosted indexer or external service
		// client catches errors
		me.addressInfo = await fetchUtxoSet(fromBtcAddress);
		const btcFeeRates = await fetchCurrentFeeRates();
		me.feeInfo = btcFeeRates.feeInfo;
		//me.calculateFees(network);
		me.ready = true;
		return me;
	};
 
	public static create1 = (): PegOutTransactionI => {
		const me = new PegOutTransaction();
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
		me.ready = o.ready;
		return me;
	};
 
	setPegInData = (pegInData:PegInData) => {
		this.pegInData = pegInData;
	};
 
	setFeeRate = (rate: number) => {
		this.fee = (rate >=0 && rate < 3) ? this.fees[rate] : this.fees[2];
		if ((this.pegInData.amount + this.fee) > this.maxCommit()) {
			this.pegInData.amount = this.maxCommit() - this.fee;
		}
	};
 
	getChange = () => {
		return this.maxCommit() - this.fee - this.dust;
	};
 
	setAmount(amount:number) {
		if (amount > this.maxCommit() - this.fee) {
			throw new Error('Amount is more than available ' + this.maxCommit() + ' less the gas ' + this.fee);
		}
		this.pegInData.amount = amount;
	}

	setStacksAddress(stacksAddress:string|undefined) {
		if (!stacksAddress) {
			throw new Error('Address not found');
		} else if (PegTransaction.FORMAT.test(stacksAddress)) {
			throw new Error('please remove white space / special characters');
		}
		const decoded = decodeStacksAddress(stacksAddress.split('.')[0]);
		if (this.net === btc.TEST_NETWORK && decoded[0] !== 26) {
		  throw new Error('Please enter a valid stacks blockchain testnet address');
		}
		if (this.net === btc.NETWORK && decoded[0] !== 22) {
			throw new Error('Please enter a valid stacks blockchain mainnet address');
		}
		this.pegInData.stacksAddress = stacksAddress;
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

	getInputsForDisplay = () => {
		const inputs = [];
		for (const utxo of this.addressInfo.utxos) {
			inputs.push({ txid: hex.decode(utxo.txid), index: utxo.vout });
	  	}
		return inputs;
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

	maxCommit() {
		if (!this.ready) return 0;
		const summ = this.addressInfo?.utxos?.map((item:{value:number}) => item.value).reduce((prev:number, curr:number) => prev + curr, 0);
		return summ || 0;
	}
};