import { fetchUtxoSet, fetchCurrentFeeRates } from "../bridge_api";
import * as btc from 'micro-btc-signer';
import * as secp from '@noble/secp256k1';
import { hex } from '@scure/base';
import { decodeStacksAddress } from "$lib/stacks";

type PegInData = {
	stacksAddress: string;
	sbtcWalletAddress: string;
	amount: number,
};

export interface PegTransactionI {
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
	scureFee:number;
	dust: number;

	buildTransaction: (signature:string|undefined) => btc.Transaction;
	calculateFees: () => void;
	maxCommit: () => number;
	setAmount: (pegInAmount:number) => void;
	setStacksAddress: (stacksAddress:string|undefined) => void;
	getChange: () => number;
	setFeeRate: (rate:number) => void;
	getOutputsForDisplay: () => Array<any>;
	getOutput2ScriptPubKey: () => string;
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

	getOutput2ScriptPubKey!: () => string;
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
	protected static createInternal = async (me:PegTransactionI, network:string, fromBtcAddress:string):Promise<PegTransactionI> => {
		//const me = new PegTransaction();
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
	buildTransaction!: (signature:string|undefined) => btc.Transaction;

	maxCommit() {
		if (!this.ready) return 0;
		const summ = this.addressInfo?.utxos?.map((item:{value:number}) => item.value).reduce((prev:number, curr:number) => prev + curr, 0);
		return summ || 0;
	}
};