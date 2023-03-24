import * as btc from '@scure/btc-signer';
import * as secp from '@noble/secp256k1';
import { hex } from '@scure/base';
import { decodeStacksAddress } from "$lib/stacks_connect";

type PegInData = {
	stacksAddress?: string;
	sbtcWalletAddress: string;
	amount: number,
};

export const MAGIC_BYTES_TESTNET = '5432';
export const MAGIC_BYTES_MAINNET = '5832';
export const PEGIN_OPCODE = '3C';
export const PEGOUT_OPCODE = '3e'; // >

export interface PegTransactionI {
	unconfirmedUtxos:boolean;
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
	scureFee:number;
	dust: number;

	buildTransaction: (signature:string|undefined) => { opReturn: btc.Transaction, opDrop: btc.Transaction };
	calculateFees: () => void;
	maxCommit: () => number;
	setAmount: (pegInAmount:number) => void;
	setStacksAddress: (stacksAddress:string|undefined) => void;
	getChange: () => number;
	isUTXOConfirmed: (utxo:any) => boolean;
	setFeeRate: (rate:number) => void;
	getOutputsForDisplay: () => Array<any>;
	getDataToSign: () => Buffer;
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

export default class PegTransaction implements PegTransactionI {
	static FORMAT = /[ `!@#$%^&*()_+=[\]{};':"\\|,<>/?~]/;
	unconfirmedUtxos = false;
	requiredConfirmed = 6;
	net:any;
	ready = false;
	fromBtcAddress!: string;
	pegInData: PegInData = {
		stacksAddress: 'ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN', // default for testing
		sbtcWalletAddress: 'tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss', // default for testing
		amount: 0	
	};
	addressInfo: any = {};
	fees: Array<number> = [20000, 35000, 50000];
	fee = 0;
	scureFee = 0;
	dust = 500;
	feeInfo: {
		low_fee_per_kb: number;
		medium_fee_per_kb: number;
		high_fee_per_kb: number;
	} = {low_fee_per_kb: 20000, medium_fee_per_kb: 20000, high_fee_per_kb: 20000};

	public constructor() {
		// use create function
	}

	getDataToSign!: () => Buffer;
	setAmount = (amount:number) => {
		// overridden
		console.log(amount);
	};

	/**
	 * User's btc address is needed to fetch utxo's and calculate tx fee.
	 * This gives us the max amount they can peg as the sum of utxo amounts.
	 * @param fromBtcAddress
	 * @returns 
	 */
	public static hydrate = (o:PegTransactionI) => {
		const me = new PegTransaction();
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
		this.fee = (rate >=0 && rate < 3) ? this.fees[rate] : this.fees[1];
		if ((this.pegInData.amount + this.fee) > this.maxCommit()) {
			this.pegInData.amount = this.maxCommit() - this.fee;
		}
	};
 
	getChange = () => {
		return this.maxCommit() - this.fee - this.dust;
	};
 
	isUTXOConfirmed = (utxo:any) => {
		return utxo.tx.confirmations > 3;
	};
 
	//setAmount = (amount:number) => void;

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

	calculateFees!: () => void;

	getOutputsForDisplay!: () => Array<any>;

	getInputsForDisplay = () => {
		const inputs = [];
		for (const utxo of this.addressInfo.utxos) {
			inputs.push({ txid: hex.decode(utxo.txid), index: utxo.vout });
	  	}
		return inputs;
	}

	/**
	 * Overridden by super classes
	 */
	buildTransaction!: (signature:string|undefined) => { opReturn: btc.Transaction, opDrop: btc.Transaction };

	maxCommit() {
		if (!this.ready) return 0;
		const summ = this.addressInfo?.utxos?.map((item:{value:number}) => item.value).reduce((prev:number, curr:number) => prev + curr, 0);
		return summ || 0;
	}
};