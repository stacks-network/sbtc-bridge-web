import { CONFIG } from '$lib/config';
import * as btc from '@scure/btc-signer';
import * as secp from '@noble/secp256k1';
import { hex } from '@scure/base';
import assert from 'assert';
import { secp256k1 } from '@noble/curves/secp256k1';
import type { PegTransactionI } from './PegTransaction';
import type { PeginRequestI } from '$types/pegin_request';
import PegTransaction from './PegTransaction';
import { fetchUtxoSet, fetchCurrentFeeRates } from "../bridge_api";
import { decodeStacksAddress } from '$lib/stacks_connect'
import { MAGIC_BYTES_TESTNET, MAGIC_BYTES_MAINNET, PEGIN_OPCODE } from './PegTransaction'
import { concatByteArrays } from '$lib/structured-data.js'
export interface PegInTransactionI extends PegTransactionI {

	getOpDropPeginRequest: (mode:string, wallet:string) => PeginRequestI;
	buildOpReturnTransaction: () => btc.Transaction;
	buildData: (sigOrPrin:string) => Uint8Array;
	calculateFees: () => void;
	getChange: () => number;
	getOutputsForDisplay: () => Array<any>;
	getWitnessScript?: () => any;
}

//const pubkey2 = 'deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f'

const priv = secp.utils.randomPrivateKey()
const isMini = CONFIG.VITE_SBTC_MINI;
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
 
	public static create = async (network:string, fromBtcAddress:string, sbtcWalletAddress:string, stacksAddress:string|undefined):Promise<PegInTransactionI> => {
		const me = new PegInTransaction();
		me.net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
		me.fromBtcAddress = fromBtcAddress;
		me.pegInData = {
			amount: 0,
			stacksAddress,
			sbtcWalletAddress
		}
		// utxos have to come from a hosted indexer or external service
		// client catches errors
		me.addressInfo = await fetchUtxoSet(fromBtcAddress);
		//me.addressInfo.walletInfo = await fetchUtxoSet('tb1pf74xr0x574farj55t4hhfvv0vpc9mpgerasawmf5zk9suauckugqdppqe8');

		// extract the public key for use in multi sig script later.
		// note: the public key can't be found directly - it can be fished from the
		// redeem or witness script that was used to secure prev unspent outputs.
		// i.e. finds a vin that redeemed a utxo..
		/**
		const addr = btc.Address(me.net).decode(fromBtcAddress);
		if (addr.type === 'wpkh') {
			me.addressInfo.pubkey = me.addressInfo.utxos[0].tx.vin[0].txinwitness[1];
			const wpkh = btc.p2wpkh(hex.decode(me.addressInfo.pubkey), me.net);
			if (wpkh.address !== fromBtcAddress) throw new Error('Public key incorrect');
		} else if (addr.type === 'pkh') {
			me.addressInfo.pubkey = me.addressInfo.utxos[0].tx.vin[0].txinwitness[1];
			const pkh = btc.p2pkh(hex.decode(me.addressInfo.pubkey), me.net);
			if (pkh.address !== fromBtcAddress) throw new Error('Public key incorrect');
		} else if (addr.type === 'tr') {
			me.addressInfo.pubkey = me.addressInfo.utxos[0].tx.vin[0].txinwitness[1];
			const pkh = btc.p2tr(hex.decode(me.addressInfo.pubkey), me.net);
			if (pkh.address !== fromBtcAddress) throw new Error('Public key incorrect');
		}
		 */

		const sbtcAddr = btc.Address(me.net).decode(sbtcWalletAddress);
		if (sbtcAddr.type !== 'tr') throw new Error('sBTC address is not taproot?')
		me.addressInfo.pubkey2 = 'deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f'

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
			// throw new Error('Amount is more than available ' + this.maxCommit() + ' less the gas ' + this.fee);
		}
		this.pegInData.amount = amount;
	}

	calculateFees = ():void => {

		// random addresses for calculating the fee.
		if (!this.ready) throw new Error('Not ready!');
		const stacksAddress = 'ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN';
		// prepare random signer
		const p2Ret = btc.p2wpkh(keySetForFeeCalculation[0].ecdsaPub);
		assert('wpkh' === p2Ret.type);
		const privKey = hex.decode('0101010101010101010101010101010101010101010101010101010101010101');
		const tx = new btc.Transaction({ allowUnknowOutput: true });
		// create a set of inputs corresponding to the utxo set
		if (!this.addressInfo.utxos) return;
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
		const data = this.buildData(stacksAddress);
		tx.addOutput({ script: btc.Script.encode(['RETURN', data]), amount: 0n });
		tx.addOutputAddress(this.pegInData.sbtcWalletAddress, BigInt(this.dust), this.net);
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

	buildOpReturnTransaction = () => {
		if (!this.pegInData.stacksAddress) throw new Error('Stacks address required!');
		const tx = new btc.Transaction({ allowUnknowOutput: true });
		this.addInputs(tx);
		// create a set of inputs corresponding to the utxo set
		const data = this.buildData(this.pegInData.stacksAddress);
		tx.addOutput({ script: btc.Script.encode(['RETURN', data]), amount: 0n });
		if (isMini) {
			const asmScript = btc.Script.encode([
				'IF', 
				btc.OutScript.encode(btc.Address(this.net).decode(this.pegInData.sbtcWalletAddress)),
				'ELSE', 
				144, 'CHECKSEQUENCEVERIFY', 'DROP',
				btc.OutScript.encode(btc.Address(this.net).decode(this.fromBtcAddress)),
				'CHECKSIG',
				'ENDIF'
			])
			tx.addOutput({ script: asmScript, amount: BigInt(this.pegInData.amount) });
		} else {
			tx.addOutputAddress(this.pegInData.sbtcWalletAddress, BigInt(this.pegInData.amount), this.net);
		}
		const changeAmount = Math.floor(this.maxCommit() - this.pegInData.amount - this.fee);
		if (changeAmount > 0) tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
		return tx;
	}

	private addInputs = (tx:btc.Transaction) => {
		
		for (const utxo of this.addressInfo.utxos) {
			const script = btc.RawTx.decode(hex.decode(utxo.tx.hex))
			if (this.isUTXOConfirmed(utxo)) {
				const nextI:btc.TransactionInput = {
					txid: hex.decode(utxo.txid),
					index: utxo.vout,
					witnessUtxo: {
						script: script.outputs[utxo.vout].script,
						amount: BigInt(utxo.value)
					},
				}
				// not here - on the input of the spending tx ! 
				// if (isMini) nextI.requiredHeightLocktime = 144,
				tx.addInput(nextI);
			}
		}
	}

	/**
	1. https://medium.com/summa-technology/bitcoins-time-locks-27e0c362d7a1
	 	# Anyone can spend, so long as 256 blocks have passed since input_1's previous output.
		# Note that a separate transaction can be created to spend these coins.
		# The alternate path would specify a lock_time of at least 506321.
		# The script allows either an absolute or relative time lock, whichever is shorter.
		tx_3:
		lock_time: 0
		input_1:
			sequence_no: 0x00000100
			scriptsig:
			OP_FALSE
			script:
			OP_IF
				506321 OP_CHECKLOCKTIMEVERIFY
			OP_ELSE
				0x00000100 OP_CHECKSEQUENCEVERIFY
			OP_ENDIF
			OP_DROP

	2. https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki
	 	IF
        	2 <Alice's pubkey> <Bob's pubkey> <Escrow's pubkey> 3 CHECKMULTISIG
		ELSE
			"30d" CHECKSEQUENCEVERIFY DROP
			<Alice's pubkey> CHECKSIG
		ENDIF
	3. see also scure.lockTime https://github.com/paulmillr/scure-btc-signer/blob/d762e4bf994821c3e1b79fe99ee1c7576e323fbf/index.ts#L1755
	*/
	private getOpDropP2shScript(stacksAddress:string, sbtcWalletAddress:string) {
		const data = this.buildData(stacksAddress);
		//const walletUint8 = new TextEncoder().encode(sbtcWalletAddress);

		//const sbtcWalletUint8 = btc.OutScript.encode(btc.Address(this.net).decode(this.pegInData.sbtcWalletAddress))
		let asmScript; // = btc.Script.encode([data, 'DROP', 'DUP', 'HASH160', walletUint8, 'EQUALVERIFY', 'CHECKSIG'])
		if (isMini) {
			asmScript = btc.Script.encode([
				data, 'DROP', 'IF', 
				btc.OutScript.encode(btc.Address(this.net).decode(this.pegInData.sbtcWalletAddress)),
				'ELSE', 
				144, 'CHECKSEQUENCEVERIFY', 'DROP',
				btc.OutScript.encode(btc.Address(this.net).decode(this.fromBtcAddress)),
				'CHECKSIG',
				'ENDIF'
			])
		}
		return asmScript;
	}

	/**
	getMSWitnessScript = ():PeginRequestI => {
		if (!this.pegInData.stacksAddress) throw new Error('Stacks address is required')
		const data = this.buildData(this.pegInData.stacksAddress);
		const pubkey1 = this.addressInfo.pubkey
		const pubkey2 = this.addressInfo.pubkey2
		let script;
		try {
			const pmnt = btc.p2tr_ms(1, [pubkey1, pubkey2])
			const wsh2 = {
				type: 'wsh',
				script: btc.Script.encode([data, 'DROP', pmnt.script])
			}
			script = btc.p2wsh(wsh2, this.net);
		} catch (err) {
			try {
				const pmnt = btc.p2ms(1, [pubkey1, pubkey2])
				const wsh2 = {
					type: 'wsh',
					script: btc.Script.encode([data, 'DROP', pmnt.script])
				}
				script = btc.p2wsh(wsh2, this.net);
			} catch (err) {
				script = {
					type: 'unknown',
					script: new Uint8Array()
				};
			}
		}
		return {
			status: 1,
			mode: 'op_drop_ms',
			wallet: 'any',
			requestType: 'wrap',
			fromBtcAddress: this.fromBtcAddress,
			stacksAddress: this.pegInData.stacksAddress,
			sbtcWalletAddress: this.pegInData.sbtcWalletAddress,
			timeBasedPegin: {
				paymentType: script.type,
				address: script.address,
				script: hex.encode(script.script),
				redeemScript: (script.redeemScript) ? hex.encode(script.redeemScript) : undefined,
				witnessScript: (script.witnessScript) ? hex.encode(script.witnessScript) : undefined,
			}
		};
	}
	 */

	private getCSVScript (data:Uint8Array) {
		//const pubkey1 = this.addressInfo.pubkey
		const addrScript = btc.Address(this.net).decode(this.pegInData.sbtcWalletAddress)
		if (addrScript.type === 'wpkh') {
			return {
				type: 'wsh',
				script: btc.Script.encode([data, 'DROP', btc.p2wpkh(addrScript.hash).script])
			}
		} else if (addrScript.type === 'tr') {
			
			return {
				type: 'tr',
				//script: btc.Script.encode([data, 'DROP', btc.OutScript.encode(btc.Address(this.net).decode(this.fromBtcAddress)), 'CHECKSIG'])
				//script: btc.Script.encode([data, 'DROP', 'IF', 144, 'CHECKSEQUENCEVERIFY', 'DROP', btc.OutScript.encode(btc.Address(this.net).decode(this.fromBtcAddress)), 'CHECKSIG', 'ELSE', 'DUP', 'HASH160', sbtcWalletUint8, 'EQUALVERIFY', 'CHECKSIG', 'ENDIF'])
				//script: btc.Script.encode([data, 'DROP', btc.p2tr(hex.decode(pubkey2)).script])
				script: btc.Script.encode([data, 'DROP', btc.p2tr(addrScript.pubkey).script])
			}
		}
	}

	getOpDropPeginRequest = (mode:string, wallet:string):PeginRequestI => {
		if (!this.pegInData.stacksAddress) throw new Error('Stacks address is required')
		const data = this.buildData(this.pegInData.stacksAddress);
		const csvScript = this.getCSVScript(data)
		if (!csvScript) throw new Error('Script not allowed')
		const script = btc.p2wsh(csvScript, this.net);
		const req:PeginRequestI = {
			fromBtcAddress: this.fromBtcAddress,
			status: 1,
			tries: 0,
			mode: (mode === 'op_drop')? (mode + '_' + csvScript.type) : mode,
			amount: this.pegInData.amount,
			requestType: 'wrap',
			wallet,
			stacksAddress: this.pegInData.stacksAddress,
			sbtcWalletAddress: this.pegInData.sbtcWalletAddress,
		}
		if (mode === 'op_drop') {
			req.timeBasedPegin = {
				wsh: hex.encode(script.script),
				paymentType: script.type,
				address: script.address,
				script: hex.encode(script.script),
				redeemScript: (script.redeemScript) ? hex.encode(script.redeemScript) : undefined,
				witnessScript: (script.witnessScript) ? hex.encode(script.witnessScript) : undefined,
			}
		}
		return req;
	}

	/**
	getOpReturnPeginRequest = (wallet:string):PeginRequestI => {
		if (!this.pegInData.stacksAddress) throw new Error('Stacks address is required')
		return {
			fromBtcAddress: this.fromBtcAddress,
			status: 1,
			mode: 'op_return',
			requestType: 'wrap',
			wallet,
			stacksAddress: this.pegInData.stacksAddress,
			sbtcWalletAddress: this.pegInData.sbtcWalletAddress,
		};
	}
 	*/
	
	buildData = (sigOrPrin:string):Uint8Array => {
		//const data = new Uint8Array(78);
		const magicBuf = (this.net === btc.TEST_NETWORK) ? hex.decode(MAGIC_BYTES_TESTNET) : hex.decode(MAGIC_BYTES_MAINNET);
		const opCodeBuf = hex.decode(PEGIN_OPCODE);
		const addr = decodeStacksAddress(sigOrPrin.split('.')[0]);
		const addr0Buf = hex.decode(addr[0].toString(16));
		const addr1Buf = hex.decode(addr[1]);
		let data:Uint8Array;
		if (sigOrPrin.indexOf('.') > -1) {
			const cnameBuf = new TextEncoder().encode(sigOrPrin.split('.')[1]);
			data = concatByteArrays([magicBuf, opCodeBuf, addr0Buf, addr1Buf, cnameBuf])
			console.log(sigOrPrin.split('.')[1])
		} else {
			data = concatByteArrays([magicBuf, opCodeBuf, addr0Buf, addr1Buf])
		}
		//console.log(data);
		return data;
	}

};