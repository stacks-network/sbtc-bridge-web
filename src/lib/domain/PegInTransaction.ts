import * as btc from '@scure/btc-signer';
import * as secp from '@noble/secp256k1';
import { hex } from '@scure/base';
import assert from 'assert';
import { secp256k1 } from '@noble/curves/secp256k1';
import type { PegTransactionI } from './PegTransaction';
import PegTransaction from './PegTransaction';
import { fetchUtxoSet, fetchCurrentFeeRates } from "../bridge_api";
import { decodeStacksAddress } from '$lib/stacks_connect'
import { MAGIC_BYTES_TESTNET, MAGIC_BYTES_MAINNET, PEGIN_OPCODE } from './PegTransaction'

export interface PegInTransactionI extends PegTransactionI {

	buildTransaction: (signature:string|undefined) => { opReturn: btc.Transaction, opDrop: btc.Transaction };
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
 
	public static create = async (network:string, fromBtcAddress:string, sbtcWalletAddress:string):Promise<PegInTransactionI> => {
		const me = new PegInTransaction();
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

	public static hydrate = (o:PegInTransactionI) => {
		const me = new PegInTransaction();
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
		return this.maxCommit() - this.pegInData.amount - this.fee;
	};
 
	setAmount = (amount:number) => {
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
		// create a set of inputs corresponding to the utxo set
		for (const utxo of this.addressInfo.utxos) {
			if (this.isUTXOConfirmed(utxo)) {
				tx.addInput({
					txid: hex.decode(utxo.txid),
					//txid: utxo.txid,
					index: utxo.vout,
					witnessUtxo: {
						amount: 600n,
						script: btc.p2wpkh(secp256k1.getPublicKey(privKey, true)).script,
					  },
				});
			} else {
				this.unconfirmedUtxos = true;
			}
	  	}
		if (tx.inputsLength === 0) throw new Error('No confirmed UTXOs')
		//tx.addOutput({ script: btc.Script.encode(['RETURN', Buffer.from(stacksAddress, 'utf8')]), amount: 0n });
		//tx.addOutputAddress(sbtcWalletAddress, BigInt(0), this.net);
		//tx.addOutputAddress(this.fromBtcAddress, BigInt(0), this.net);

		const asmScript = this.getOpDropP2shScript(stacksAddress, sbtcWalletAddress)
		tx.addOutput({ script: asmScript, amount: BigInt(0) });
		const changeAmount = Math.floor(0);
		if (changeAmount > 0) tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);

		tx.sign(privKey);
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
		const changeAmount = this.getChange();
		const outs:Array<any> = [
			{ script: 'RETURN ' + (this.pegInData.stacksAddress), amount: 0 },
			{ address: this.pegInData.sbtcWalletAddress, amount: this.pegInData.amount },
		]
		if (changeAmount > 0) outs.push({ address: this.fromBtcAddress, amount: changeAmount });
		outs.push({ address: 'pays ' + this.fee + ' satoshis to miner.' });
		return outs;
	}

	buildTransaction = (signature:string|undefined) => {
		if (!this.ready) throw new Error('Not ready!');
		if (signature) throw new Error('signature only for peg out!');
		return { opReturn: this.buildOpReturn(), opDrop: this.buildOpDrop() };
	}

	private addInputs = (tx:btc.Transaction) => {
		for (const utxo of this.addressInfo.utxos) {
			const script = btc.RawTx.decode(hex.decode(utxo.tx.hex))
			if (this.isUTXOConfirmed(utxo)) {
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
	}

	private buildOpReturn = () => {
		if (!this.pegInData.stacksAddress) throw new Error('Stacks address required!');
		const tx = new btc.Transaction({ allowUnknowOutput: true });
		this.addInputs(tx);
		// create a set of inputs corresponding to the utxo set
		const data = this.buildData(this.pegInData.stacksAddress);
		tx.addOutput({ script: btc.Script.encode(['RETURN', data]), amount: 0n });
		tx.addOutputAddress(this.pegInData.sbtcWalletAddress, BigInt(this.pegInData.amount), this.net);
		const changeAmount = Math.floor(this.maxCommit() - this.pegInData.amount - this.fee);
		if (changeAmount > 0) tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
		return tx;
	}

	private buildData = (pricipal:string):Uint8Array => {

		//const data = new Uint8Array(78);
		const magicBuf = (this.net === btc.TEST_NETWORK) ? hex.decode(MAGIC_BYTES_TESTNET) : hex.decode(MAGIC_BYTES_MAINNET);
		const opCodeBuf = hex.decode(PEGIN_OPCODE);
		const addr = decodeStacksAddress(pricipal.split('.')[0]);
		const addr0Buf = hex.decode(addr[0].toString(16));
		const addr1Buf = hex.decode(addr[1]);

		let data:Uint8Array;

		//magicBuf.copy(data, 0);
		//opCodeBuf.copy(data, magicBuf.length);
		//addr0Buf.copy(data, magicBuf.length + opCodeBuf.length);
		//addr1Buf.copy(data, magicBuf.length + opCodeBuf.length + addr0Buf.length);

		if (pricipal.indexOf('.') > -1) {
			const cnameBuf = new TextEncoder().encode(pricipal.split('.')[1]);
			//const cnameBuf = Buffer.from(pricipal.split('.')[1], 'utf8');		
			//cnameBuf.copy(data, magicBuf.length + opCodeBuf.length + addr0Buf.length + addr1Buf.length);
			data = new Uint8Array(magicBuf, ...opCodeBuf, ...addr0Buf, ...addr1Buf, ...cnameBuf)
			console.log(pricipal.split('.')[1])
		} else {
			data = new Uint8Array(magicBuf, ...opCodeBuf, ...addr0Buf, ...addr1Buf)
		}

		//console.log(data);
		return data;
	}

	private buildOpDrop = () => {
		if (!this.pegInData.stacksAddress) throw new Error('Stacks address required!');
		const tx = new btc.Transaction({ allowUnknowOutput: true });
		this.addInputs(tx);
		const asmScript = this.getOpDropP2shScript(this.pegInData.stacksAddress, this.pegInData.sbtcWalletAddress)
		tx.addOutput({ script: asmScript, amount: BigInt(this.pegInData.amount) });
		const changeAmount = Math.floor(this.maxCommit() - this.pegInData.amount - this.fee);
		if (changeAmount > 0) tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
		return tx;
	}

	private getOpDropP2shScript(stacksAddress:string, sbtcWalletAddress:string) {
		const data = this.buildData(stacksAddress);
		const uint8array = new TextEncoder().encode(sbtcWalletAddress);
		const asmScript = btc.Script.encode([data, 'DROP', 'DUP', 'HASH160', uint8array, 'EQUALVERIFY', 'CHECKSIG'])
		return asmScript;
	}
	  
};