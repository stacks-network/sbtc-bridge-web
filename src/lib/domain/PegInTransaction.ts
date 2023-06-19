import { CONFIG } from '$lib/config';
import * as btc from '@scure/btc-signer';
import { hex } from '@scure/base';
import type { PeginRequestI } from 'sbtc-bridge-lib' 
import { fetchUtxoSet } from "../bridge_api";
import { decodeStacksAddress, addresses } from '$lib/stacks_connect'
import { toStorable, buildDepositPayload, approxTxFees, MAGIC_BYTES_TESTNET, MAGIC_BYTES_MAINNET, PEGIN_OPCODE } from 'sbtc-bridge-lib' 
import type { PegInData, CommitKeysI } from 'sbtc-bridge-lib' 
import * as P from 'micro-packed';
import { c32addressDecode } from 'c32check';

const concat = P.concatBytes;

export interface PegInTransactionI {
	unconfirmedUtxos:boolean;
	net:any;
    ready:boolean;
    fromBtcAddress:string;
    commitKeys:CommitKeysI;
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

	buildData: (sigOrPrin:string, opDrop:boolean) => Uint8Array;
	calculateFees: (index:number) => void;
	maxCommit: () => number;
	setAmount: (pegInAmount:number) => void;
	setStacksAddress: (stacksAddress:string|undefined) => void;
	getChange: () => number;
	isUTXOConfirmed: (utxo:any) => boolean;
	setFeeRate: (rate:number) => void;
	getOutputsForDisplay: () => Array<any>;
	getInputsForDisplay: () => Array<any>;
	getOpDropPeginRequest: () => PeginRequestI;
	getOpReturnPeginRequest: () => PeginRequestI;
	buildOpReturnTransaction: () => btc.Transaction;
	buildOpDropTransaction: () => btc.Transaction;
	getWitnessScript?: () => any;
}


export default class PegInTransaction implements PegInTransactionI {
	static FORMAT = /[ `!@#$%^&*()_+=[\]{};':"\\|,<>/?~]/;
	unconfirmedUtxos = false;
	requiredConfirmed = 6;
	net = (CONFIG.VITE_NETWORK === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
	ready = false;
	fromBtcAddress!: string;
    commitKeys!:CommitKeysI;
	pegInData: PegInData = {} as PegInData;
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
 
	/**
	 * Read utxo and fee information saved in a new instance.
	 * The object is saved in local storage by the caller.
	 * Note this data is more important for the op_return method so the
	 * impl here is under review.
	 * @param network 
	 * @param fromBtcAddress 
	 * @param sbtcWalletAddress 
	 * @param stacksAddress 
	 * @returns PegInTransaction object
	 */
	public static create = async (network:string, commitKeys:CommitKeysI, btcFeeRates:any):Promise<PegInTransactionI> => {
		const me = new PegInTransaction();
		me.net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
		if (commitKeys.fromBtcAddress && commitKeys.fromBtcAddress.length > 0) {
			me.fromBtcAddress = commitKeys.fromBtcAddress;
		}
		me.commitKeys = commitKeys;
		me.pegInData = {
			amount: 0,
			stacksAddress: commitKeys.stacksAddress,
			sbtcWalletAddress: commitKeys.sbtcWalletAddress,
			revealFee: 5000
		}
		// utxos have to come from a hosted indexer or external service
		me.addressInfo = await fetchUtxoSet(commitKeys.fromBtcAddress);
		console.log('CONFIG.VITE_NETWORK:' + CONFIG.VITE_NETWORK)
		console.log('addressInfo:', me.addressInfo)
		me.feeInfo = btcFeeRates.feeInfo;
		me.ready = true;
		return me;
	};

	/**
	 * hydrates the objects from the data serialised in local storage
	 */
	public static hydrate = (o:PegInTransactionI) => {
		const me = new PegInTransaction();
		me.net = o.net;
		//if (!o.fromBtcAddress) throw new Error('No address - use create instead!');
		me.fromBtcAddress = o.fromBtcAddress || addresses().cardinal;
		me.commitKeys = o.commitKeys;
		me.pegInData = o.pegInData;
		me.pegInData.sbtcWalletAddress = o.pegInData.sbtcWalletAddress; //'tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq'
		me.addressInfo = o.addressInfo;
		me.feeInfo = o.feeInfo;
		me.fees = o.fees;
		me.fee = o.fee;
		me.scureFee = o.scureFee;
		me.ready = o.ready;
		return me;
	};

	/**
	 * Build the tx with the stacks data in an unspendable op_return output
	 */
	buildOpReturnTransaction = () => {
		if (!this.pegInData.stacksAddress) throw new Error('Stacks address required!');
		const tx = new btc.Transaction({ allowUnknowInput: true, allowUnknowOutput: true });
		this.addInputs(tx);
		const data = this.buildData(this.pegInData.stacksAddress, false);
		tx.addOutput({ script: btc.Script.encode(['RETURN', data]), amount: 0n });
		tx.addOutputAddress(this.pegInData.sbtcWalletAddress, BigInt(this.pegInData.amount), this.net);
		const changeAmount = Math.floor(this.maxCommit() - this.pegInData.amount - this.fee);
		if (changeAmount > 0) tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
		return tx;
	}

	/**
	 * Build the tx with the stacks data in an spendable output behind an op_drop
	 */
	buildOpDropTransaction = () => {
		if (!this.pegInData.stacksAddress) this.pegInData.stacksAddress = addresses().stxAddress
		const tx = new btc.Transaction({ allowUnknowInput: true, allowUnknowOutput: true });
		this.addInputs(tx);
		const peginReqest = this.getOpDropPeginRequest()
		if (!peginReqest.commitTxScript || !peginReqest.commitTxScript.address ) throw new Error('buildOpDropTransaction: address required!');
		tx.addOutputAddress(peginReqest.commitTxScript.address, BigInt(this.pegInData.amount), this.net );
		const changeAmount = Math.floor(this.maxCommit() - this.pegInData.amount - this.fee);
		if (changeAmount > 0) tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
		return tx;
	}

	/**
	 * Build stacks data for the reveal tx.
	 * See https://github.com/Trust-Machines/core-eng/blob/d713861af94061b2a90695e3a5ce20602872dbe7/sbtc-planning/commit-reveal-ops.md
	 * magic bytes not needed in commit tx.
	 */
	buildData = (sigOrPrin:string, opDrop:boolean):Uint8Array => {
		if (opDrop) {
			return buildDepositPayload(this.net, this.pegInData.revealFee || this.fee, sigOrPrin, opDrop, undefined);
		}
		return this.buildDepositPayload(this.net, sigOrPrin);
	}

	buildDepositPayload(net:any, address:string):Uint8Array {
		const magicBuf = (typeof net === 'object' && net.bech32 === 'tb') ? hex.decode(MAGIC_BYTES_TESTNET) : hex.decode(MAGIC_BYTES_MAINNET);
		const opCodeBuf = hex.decode(PEGIN_OPCODE);
		const addr = c32addressDecode(address.split('.')[0])
		const addr0Buf = hex.decode(addr[0].toString(16));
		const addr1Buf = hex.decode(addr[1]);
	
		let buf1 = concat(opCodeBuf, addr0Buf, addr1Buf);
		if (address.indexOf('.') > -1) {
			const cnameBuf = new TextEncoder().encode(address.split('.')[1]);
			buf1 = concat(buf1, cnameBuf);
		}
				
		return concat(magicBuf, buf1)
	}
	
	getChange = () => {
		return this.maxCommit() - this.pegInData.amount - this.fee;
	};
 
	setFeeRate = (rate: number) => {
		this.fee = (rate >=0 && rate < 3) ? this.fees[rate] : this.fees[1];
		if ((this.pegInData.amount + this.fee) > this.maxCommit()) {
			this.pegInData.amount = this.maxCommit() - this.fee;
		}
	};
 
	isUTXOConfirmed = (utxo:any) => {
		return utxo.tx.confirmations >= 0;
	};

	maxCommit() {
		if (!this.ready) return 0;
		if (!this.addressInfo.utxos || this.addressInfo.utxos.length === 0) return 0; //this.pegInData.amount;
		const summ = this.addressInfo?.utxos?.map((item:{value:number}) => item.value).reduce((prev:number, curr:number) => prev + curr, 0);
		return summ || 0;
	}

	setPegInData = (pegInData:PegInData) => {
		this.pegInData = pegInData;
	};

	setAmount = (amount:number) => {
		if (amount > this.maxCommit() - this.fee) {
			// throw new Error('Amount is more than available ' + this.maxCommit() + ' less the gas ' + this.fee);
		}
		this.pegInData.amount = amount;
	}

	/**
	 * Gets the script data for the commit transaction. This includes the address
	 * the user pays to. This version is mode 2.
	 * 
	 * Mode 1:
	 * Pays to key path logged in users ordinal address for reclaim and 1 script path;
	 * 1. the sbtc wallet address with the drop data
	 */
	getOpDropPeginRequest2 = ():PeginRequestI => {
		if (!this.pegInData.stacksAddress) this.pegInData.stacksAddress = addresses().stxAddress
		const data = this.buildData(this.pegInData.stacksAddress, true);
		const sbtcWalletAddrScript = btc.Address(this.net).decode(this.pegInData.sbtcWalletAddress)
		if (sbtcWalletAddrScript.type !== 'tr') throw new Error('Taproot required')
		const reclaimAddr = btc.Address(this.net).decode(this.fromBtcAddress)
		if (reclaimAddr.type !== 'tr') throw new Error('No pubkey for address: ' + this.fromBtcAddress)
		const tscript = { script: btc.Script.encode([data, 'DROP', sbtcWalletAddrScript.pubkey]) }
		const script = btc.p2tr(reclaimAddr.pubkey, tscript, this.net, true);
		const req:PeginRequestI = {
			fromBtcAddress: this.fromBtcAddress,
			status: 1,
			tries: 0,
			mode: 'op_drop',
			amount: this.pegInData.amount,
			wallet: 'btc.p2tr(reclaimAddr.pubkey, { script: Script.encode([data, \'DROP\', sbtcWalletAddr.pubkey]) }, this.net, true)',
			requestType: 'deposit',
			originator: this.pegInData.stacksAddress,
			stacksAddress: this.pegInData.stacksAddress,
			sbtcWalletAddress: this.pegInData.sbtcWalletAddress,
			revealPub: '',
			reclaimPub: ''
		}
		req.commitTxScript = toStorable(script)
		return req;
	}

	/**
	 * Gets the script data for the commit transaction. This includes the address
	 * the user pays to. This version is mode 2.
	 * 
	 * Mode 2:
	 * User pays to unspendable key path. Includes 2 script paths;
	 * 1. the logged in users ordinal address
	 * 2. the sbtc wallet address with the drop data
	 */
	getOpDropPeginRequest = ():PeginRequestI => {
		if (!this.pegInData.stacksAddress) this.pegInData.stacksAddress = addresses().stxAddress

		//const sbtcWalletAddrScript = btc.Address(this.net).decode(this.pegInData.sbtcWalletAddress)
		//if (sbtcWalletAddrScript.type !== 'tr') throw new Error('Taproot required')
		//let revealPubK = sbtcWalletAddrScript.pubkey;
		

		//const reclaimAddr = btc.Address(this.net).decode(this.fromBtcAddress);
		//if (reclaimAddr.type !== 'tr') throw new Error('No pubkey for address: ' + this.fromBtcAddress)

		console.log('reclaimAddr.pubkey: ' + this.commitKeys.reclaimPub)
		console.log('revealAddr.pubkey: ' + this.commitKeys.revealPub)
		
		const data = this.buildData(this.pegInData.stacksAddress, true);
		const scripts =  [
			{ script: btc.Script.encode([data, 'DROP', hex.decode(this.commitKeys.revealPub), 'CHECKSIG']) },
			{ script: btc.Script.encode([hex.decode(this.commitKeys.reclaimPub), 'CHECKSIG']) }
		]
		const script = btc.p2tr(btc.TAPROOT_UNSPENDABLE_KEY, scripts, this.net, true);
		const req:PeginRequestI = {
			originator: this.pegInData.stacksAddress,
			fromBtcAddress: this.fromBtcAddress,
			revealPub: this.commitKeys.revealPub,
			reclaimPub: this.commitKeys.reclaimPub,
			status: 1,
			tries: 0,
			mode: 'op_drop',
			amount: this.pegInData.amount,
			requestType: 'deposit',
			wallet: 'p2tr(TAPROOT_UNSPENDABLE_KEY, [{ script: Script.encode([data, \'DROP\', revealPubK, \'CHECKSIG\']) }, { script: Script.encode([reclaimPubKey, \'CHECKSIG\']) }], this.net, true)',
			stacksAddress: this.pegInData.stacksAddress,
			sbtcWalletAddress: this.pegInData.sbtcWalletAddress,
		}
		req.commitTxScript = toStorable(script)
		return req;
	}

	getOpReturnPeginRequest = ():PeginRequestI => {
		if (!this.pegInData.stacksAddress) this.pegInData.stacksAddress = addresses().stxAddress
		const data = this.buildData(this.pegInData.stacksAddress, false);

		//const sbtcWalletAddrScript = btc.Address(this.net).decode(this.pegInData.sbtcWalletAddress)
		//if (sbtcWalletAddrScript.type !== 'tr') throw new Error('Taproot required')
		//let revealPubK = sbtcWalletAddrScript.pubkey;
		

		//const reclaimAddr = btc.Address(this.net).decode(this.fromBtcAddress);
		//if (reclaimAddr.type !== 'tr') throw new Error('No pubkey for address: ' + this.fromBtcAddress)

		console.log('reclaimAddr.pubkey: ' + this.commitKeys.reclaimPub)
		console.log('revealAddr.pubkey: ' + this.commitKeys.revealPub)
		
		const req:PeginRequestI = {
			originator: this.pegInData.stacksAddress,
			fromBtcAddress: this.fromBtcAddress,
			revealPub: this.commitKeys.revealPub,
			reclaimPub: this.commitKeys.reclaimPub,
			status: 1,
			tries: 0,
			mode: 'op_return',
			amount: this.pegInData.amount,
			requestType: 'deposit',
			wallet: hex.encode(data),
			stacksAddress: this.pegInData.stacksAddress,
			sbtcWalletAddress: this.pegInData.sbtcWalletAddress,
		}
		return req;
	}

	/**
	 * @todo used in ui display - needs updating
	 */
	getOutputsForDisplay = () => {
		const changeAmount = this.getChange();
		const outs:Array<any> = [
			{ script: 'RETURN ' + (this.pegInData.stacksAddress), amount: 0 },
			{ address: this.pegInData.sbtcWalletAddress, amount: this.pegInData.amount },
		]
		if (changeAmount > 0) outs.push({ address: this.fromBtcAddress, amount: changeAmount });
		outs.push({ address: 'pays ' + this.fee + ' satoshis to miner.' });
		return outs;
	}

	/**
	 * @todo used in ui display - needs updating
	 */
	getInputsForDisplay = () => {
		const inputs = [];
		for (const utxo of this.addressInfo.utxos) {
			inputs.push({ txid: hex.decode(utxo.txid), index: utxo.vout });
	  	}
		return inputs;
	}

	setStacksAddress(stacksAddress:string|undefined) {
		if (!stacksAddress) {
			throw new Error('Address not found');
		} else if (PegInTransaction.FORMAT.test(stacksAddress)) {
			throw new Error('please remove white space / special characters');
		}
		const decoded = decodeStacksAddress(stacksAddress.split('.')[0]);
		if ((CONFIG.VITE_NETWORK === 'testnet' || CONFIG.VITE_NETWORK === 'devnet') && decoded[0] !== 26) {
		  throw new Error('Please enter a valid stacks blockchain testnet address');
		}
		if (CONFIG.VITE_NETWORK === 'mainnet' && decoded[0] !== 22) {
			throw new Error('Please enter a valid stacks blockchain mainnet address');
		}
		this.pegInData.stacksAddress = stacksAddress;
	}

	/**
	 * @deprecated - maybe not needed with op_drop as the users wallet calculates
	 * the fees. Keep for now in case we switch back to op_return
	 * @returns
	 */
	calculateFees = (index:number):void => {
		try {
			this.scureFee = approxTxFees(CONFIG.VITE_NETWORK, this.addressInfo.utxos, this.fromBtcAddress, this.pegInData.sbtcWalletAddress);
		} catch(err) {
			// no utxos..
			this.scureFee = 4000;
		}
		this.fees = [
			this.scureFee * 8, //Math.floor((this.feeInfo.low_fee_per_kb / 1000) * vsize),
			this.scureFee * 10, //Math.floor((this.feeInfo.medium_fee_per_kb / 1000) * vsize),
			this.scureFee * 12, //Math.floor((this.feeInfo.high_fee_per_kb / 1000) * vsize),
		]
		this.fee = this.fees[index];
	}
		
	private addInputs = (tx:btc.Transaction) => {
		for (const utxo of this.addressInfo.utxos) {
			const hexy = (utxo.tx.hex) ? utxo.tx.hex : utxo.tx 
			const script = btc.RawTx.decode(hex.decode(hexy))
			if (this.isUTXOConfirmed(utxo)) {
				const nextI:btc.TransactionInput = {
					txid: hex.decode(utxo.txid),
					index: utxo.vout,
					witnessUtxo: {
						script: script.outputs[utxo.vout].script,
						amount: BigInt(utxo.value)
					},
				}
				tx.addInput(nextI);
			}
		}
	}
};