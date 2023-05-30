import * as btc from '@scure/btc-signer';
import type {Transaction } from '@scure/btc-signer';
import type { PeginRequestI } from 'sbtc-bridge-lib' 
import { hex } from '@scure/base';
import { approxTxFees } from 'sbtc-bridge-lib' 
import { fetchUtxoSet, fetchCurrentFeeRates, fetchTransaction } from "../bridge_api";
import * as P from 'micro-packed';
import type { UTXO } from 'sbtc-bridge-lib' 
import { CONFIG } from '$lib/config';

export default class ReclaimOrRevealTransaction {
	addressInfo:any;
	btcFeeRates:any;
	commitTx:PeginRequestI;
	transaction:any;
	feeInfo:any;
	fee = 500;
	net:any;
	fees: Array<number> = [];
	scureFee = 0;

	public constructor(commitTx:PeginRequestI) {
		(commitTx.sbtcWalletAddress.startsWith('tb')) ? this.net = btc.TEST_NETWORK : this.net = btc.NETWORK;
		this.commitTx = commitTx;
	}
 
	fetchUtxos = async (reclaim:boolean):Promise<boolean> => {
		if (reclaim) {
			this.addressInfo = await fetchUtxoSet(this.commitTx.fromBtcAddress);
		} else {
			this.addressInfo = await fetchUtxoSet(this.commitTx.sbtcWalletAddress);
		}
		this.transaction = (this.commitTx.btcTxid) ? await fetchTransaction(this.commitTx.btcTxid as string) : undefined;
		const btcFeeRates = await fetchCurrentFeeRates();
		this.feeInfo = btcFeeRates.feeInfo;
		return true;
	};

	setAmount = (amount:number) => {
		// overridden
		console.log(amount);
	};

	calculateFees = ():void => {
		this.scureFee = approxTxFees(CONFIG.VITE_NETWORK, this.addressInfo.utxos, this.commitTx.fromBtcAddress, 'tb1pf74xr0x574farj55t4hhfvv0vpc9mpgerasawmf5zk9suauckugqdppqe8');
		this.fees = [
			this.scureFee * 0.8, //Math.floor((this.feeInfo.low_fee_per_kb / 1000) * vsize),
			this.scureFee * 1.0, //Math.floor((this.feeInfo.medium_fee_per_kb / 1000) * vsize),
			this.scureFee * 1.2, //Math.floor((this.feeInfo.high_fee_per_kb / 1000) * vsize),
		]
		this.fee = this.fees[1];
	}

	buildTransaction = (reclaim:boolean):btc.Transaction => {
		const tx:Transaction = new btc.Transaction({ allowUnknowInput: true, allowUnknowOutput: true });
		const script = this.commitTx.commitTxScript //toStorable(this.commitTx.commitTxScript)
		if (!this.commitTx || !script) throw new Error('Incorrect data passed')
		if (!this.commitTx.btcTxid) this.commitTx.btcTxid = '72d1cebc1bb22757f549063926006f680fd5cb9e3388a214244735d8dd124533'
		if (script.paymentType === 'wsh') {
			if (!script.witnessScript) throw new Error('Incorrect data passed')
			//const script = btc.RawTx.decode(hex.decode(tx.hex));
			const nextI:btc.TransactionInput = {
				txid: hex.decode(this.commitTx.btcTxid),
				index: 0,
				witnessScript: (script.witnessScript as Uint8Array),
				witnessUtxo: {
					script: (script.script as Uint8Array), //(this.pegInData.requestData.commitTxScript.witnessScript),
					amount: BigInt(this.commitTx.amount)
				}
			}
			console.log('nextI: ', nextI)
			tx.addInput(nextI);
		} else if (script.paymentType === 'tr') {
			if (!this.commitTx.commitTxScript) throw new Error('Incorrect data passed')
			if (!this.commitTx.commitTxScript.address) throw new Error('Incorrect data passed')
			if (!script.tapMerkleRoot) throw new Error('Incorrect data passed')
			if (!script.tapInternalKey) throw new Error('Incorrect data passed')
			const sbtcWalletAddrScript = btc.Address(this.net).decode(this.commitTx.sbtcWalletAddress)
			if (sbtcWalletAddrScript.type !== 'tr') throw new Error('Taproot required')
			//const fromBtcAddressScript = btc.Address(this.net).decode(this.commitTx.fromBtcAddress);
			//if (fromBtcAddressScript.type !== 'tr') throw new Error('Taproot required')

			const commitAddressScript = btc.Address(this.net).decode(this.commitTx.commitTxScript.address);
			if (commitAddressScript.type !== 'tr') throw new Error('Taproot required')

			//const BIP32Der = P.struct({
			//	fingerprint: P.U32BE,
			//	path: P.array(null, P.U32LE),
			//  });
			  
			//tapLeafScript?: [{
			//	version: number;
			//	internalKey: Uint8Array;
			//	merklePath: Uint8Array[];
			//}, Uint8Array][]

			//[Uint8Array, { hashes: Uint8Array[]; der: { path: number[]; fingerprint: number; }; }][]
			// sparrow master fp: 6bd2008b
			// core master fp: 760ce8cf
			/**
			let scriptIndex = 0;
			let tapInternalKey = sbtcWalletAddrScript.pubkey;
			if (reclaim) {
				scriptIndex = 1;
				tapInternalKey = fromBtcAddressScript.pubkey;
			}
			const leafScript = [
				[
					{
						version: script.tapLeafScript[scriptIndex][0].version,
						internalKey: fromBtcAddressScript.pubkey, //script.tapLeafScript[scriptIndex][0].internalKey,
						merklePath: script.tapLeafScript[scriptIndex][0].merklePath,
					},
					script.tapLeafScript[scriptIndex][1],
				]
			]
			const bip32Derivation = [
				[commitAddressScript.pubkey,
				{
					der: {
						fingerprint: P.U32BE.decode(hex.decode('00000000')),
						path: [86,1,0] // P.array(null, P.U32LE),
					},
					hashes: [ script.leaves[scriptIndex].hash ]
				}]
			]
		  
			const tapBip32Derivation = [
				[script.tapLeafScript[scriptIndex][0].internalKey,
				{
					der: {
						fingerprint: P.U32BE.decode(hex.decode('6bd2008b')),
						path: [86,1,0] // P.array(null, P.U32LE),
					},
					hashes: [ script.leaves[scriptIndex].hash ]
				}]
			]
			 */
		  
			const nextI:btc.TransactionInput = {
				txid: hex.decode(this.commitTx.btcTxid),
				index: 0,
				//sighashType: btc.SignatureHash.ALL,
				nonWitnessUtxo: (this.transaction.hex),
				//tapBip32Derivation: 'tr([760ce8cf/86\'/1\'/0\'/0/1]264bd0d3bd80ea2da383b0a2a29f53d258e05904d2279f5f223053b987a3fd56)#j4wq04cw',
				//tapBip32Derivation: [script.tapInternalKey as Uint8Array, {
				//	hashes: script.leaves[0].hash,
				//}],
				//tapInternalKey: (script.tapInternalKey as Uint8Array),
				// [{
				//		//version: script.tapLeafScript[0][0].version as number,
				//		internalKey: script.tapLeafScript[0][0].internalKey as Uint8Array,
				//		merklePath: script.tapLeafScript[0][0].merklePath,
				//	
				//}, script.tapLeafScript[0][1]],
				//witnessScript: (script.leaves[1].script as Uint8Array),
				//witnessUtxo: {
				//	script: (script.leaves[1].script as Uint8Array), //(this.pegInData.requestData.commitTxScript.witnessScript),
				//	amount: BigInt(commitTx.amount)
				//}
				//bip32Derivation: tapBip32Derivation,
				//tapBip32Derivation: tapBip32Derivation,
				tapLeafScript: script.tapLeafScript,
				//tapInternalKey: script.tapInternalKey as Uint8Array,
				//tapInternalKey,
				tapMerkleRoot: script.tapMerkleRoot as Uint8Array
			}
			console.log('nextI: ', nextI)
			tx.addInput(nextI);
		}

		let outAddr = this.commitTx.sbtcWalletAddress;
		if (reclaim) outAddr = this.commitTx.senderAddress || this.commitTx.fromBtcAddress;

		const amount = this.commitTx.amount - this.fee;
		/**
		if (this.addressInfo.utxos.length === -1) { // never
			const feeUtxo = this.addInputForFee(tx);
			amount = this.commitTx.amount + feeUtxo?.value - this.fee;
		}
		 */
		tx.addOutputAddress(outAddr, BigInt(amount), this.net);

		/**
		 */
		if (CONFIG.VITE_NETWORK === 'testnet') {
			try {
				//const testAddrs = getTestAddresses(CONFIG.VITE_NETWORK);	
				if (reclaim) {
					tx.sign(hex.decode('eb80b7f63eb74a215b6947b479e154a83cf429691dceab272c405b1614efb98c'));
					tx.finalize();
				} else {
					tx.sign(hex.decode('93a7e5ecde5eccc4fd858dfcf7d92011eade103600de0e8122d6fc5ffedf962d'));
					tx.finalize();
				}
			} catch(err) {
				console.log(err)
			}
		}
		const txBytes = hex.encode(tx.toBytes());
		console.log('rawTransaction: ' + txBytes);
		return tx;
	}

	private addInputForFee = (tx:Transaction) => {
		const feeUtxo = this.addressInfo.utxos.find((utxo:UTXO) => utxo.value > this.fee)
		const script = btc.RawTx.decode(hex.decode(feeUtxo.tx.hex))
		tx.addInput({
			txid: hex.decode(feeUtxo.txid),
			index: feeUtxo.vout,
			witnessUtxo: {
				script: script.outputs[feeUtxo.vout].script,
				amount: BigInt(feeUtxo.value)
			}
		});
		return feeUtxo;
	}
};