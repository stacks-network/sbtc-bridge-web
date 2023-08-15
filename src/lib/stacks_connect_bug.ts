
import { bytesToHex } from '@stacks/common';
import {
	createStacksPrivateKey,
	getPublicKey,
	publicKeyToString,
	signMessageHashRsv,
  } from '@stacks/transactions';
import { sha256 } from '@noble/hashes/sha256';
import * as btc from '@scure/btc-signer';
import { hex } from '@scure/base';
import * as secp from '@noble/secp256k1';
import { c32addressDecode } from 'c32check';
import * as P from 'micro-packed';
import { inputAmt, addInputs } from 'sbtc-bridge-lib'
import { MAGIC_BYTES_TESTNET, MAGIC_BYTES_MAINNET } from 'sbtc-bridge-lib'
const concat = P.concatBytes;
const privKey = hex.decode('0101010101010101010101010101010101010101010101010101010101010101');

export const keyChain = {
	"mnemonic": "foster raise devote wear great volcano spring chapter among violin bleak syrup rent sphere coyote client govern spirit good risk cruise twice trick jealous",
	"keyInfo": {
	  "privateKey": "b9a2ed36c4ba45e0cb610281dbbed9082d861b3523792b254afcb111af8765e801",
	  "publicKey": "03b5c5e9e5dee7b2237cd1b03583f410c0d784b9fd7906440f11d089ef6a4315de",
	  "address": "ST2GEN9CVCJNZPDH7Z7NPWRG6Z67GH3WWYAS4DGRA",
	  "btcAddress": "mvBoWJKijz38oTSJphUVNwRAkXtbJa6cUg",
	  "wif": "cToZ7x3Ju96xHxS8ZuEFmGxqMWJDbAQWsUgh48CG5zgtkzt1yRJj",
	  "index": 0
	}
}
const keyChainTM = {
	mnemonic: "tongue share ketchup verb online render syrup foam sock dice word indoor immune main shy parrot private roof weasel good nasty depth brass latin",
	wif: "cTUr9E29ZSU7DM2BZasiRbosSSaTxkweFDDgALq9X4HTTfeLgHj7",
	private_key: "b00359f021f31a172d0f1bdce77ff8484d826b26dcb8a87149ad0158a7fa076b",
	public_key: "0x0219d8b596270530a70ab714e3df1e2c9dc47f2c4a58f764e8d6e30f71eb5be3e4",
	stacks_address: "ST16DSD4NMCS0F1JTPR88114A9YPC86X2SM4D9K52",
	bitcoin_taproot_address_tweaked: "tb1pe5awed3ly579dg4arvfjclqwqagcvys94j4jnfzz9x0m5097yaqqp3fd47",
	bitcoin_taproot_address_untweaked: "tb1pr8vtt938q5c2wz4hzn3a783vnhz87tz2trmkf6xkuv8hr66mu0jqv889y5",
	bitcoin_p2pkh_address: "mnXN3WkULtwtVf9VvzxvwXWYbdBSYvLDb7"
}
const privateKey = 'd2c1631c08d0aaafc642a0a53f314cf48554d0f9af2208310950b77b7c4dd6a701'
const publicKey = '03e0467426af5ab7b5e480e8d0501e288bb92f610cb45c7148420915219c3f6b13'
const sig100 = '0b659f27e35942363e8e6878ea3a0ea54a53faac03bfc9af3b7a46333081c2e84b5483df558c46e5263467e846d8fe337ef3ea467ae0e0d7066aada9857029bb01'
export const address = 'ST2ACZ7DAH6EH20V36ES9SJEERBX7VWGWV0YB91PG'
export const btcAddress = 'mu5o1rDdfP6g8NKa1RweQDo1zQT58KWjdR'

export function signMessageDirect(message: string) {
	const privK = createStacksPrivateKey(keyChainTM.private_key)
	//const utf8Bytes = utf8ToBytes('0xdeadbeef')

	const arr = new Uint8Array([0xde, 0xad, 0xbe, 0xef])

	const hash = sha256(arr);
	//const hash = hashMessage(message); //hashMessage(message, '');
	console.log('hash: ' + hex.encode(hash))
	return {
	  signature: signMessageHashRsv({ privateKey: privK, messageHash: bytesToHex(hash) }).data,
	  publicKey: publicKeyToString(getPublicKey(privK)),
	};
}


/**
export function calculateDepositFees (network:string, opDrop:boolean, amount:number, btcFeeRates:any, addressInfo:any, commitTxScriptAddress:string, data:Uint8Array|undefined) {
	try {
		const net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
		let vsize = 0;
		const tx = new btc.Transaction({ allowUnknowInput: true, allowUnknowOutput: true });
		addInputs(network, amount, 50000, tx, true, addressInfo.utxos, hex.encode(secp.getPublicKey(privKey, true)));
		if (!opDrop) {
			if (data) tx.addOutput({ script: btc.Script.encode(['RETURN', data]), amount: BigInt(0) });
			tx.addOutputAddress(commitTxScriptAddress, BigInt(amount), net);
		} else {
			tx.addOutputAddress(commitTxScriptAddress, BigInt(amount), net );
		}
		const changeAmount = inputAmt(tx) - (amount); 
		if (changeAmount > 0) tx.addOutputAddress(addressInfo.address, BigInt(changeAmount), net);
		//tx.sign(privKey);
		//tx.finalize();
		vsize = tx.vsize;
		const fees = [
			Math.floor(vsize * btcFeeRates.feeInfo['low_fee_per_kb'] / 1024),
			Math.floor(vsize * btcFeeRates.feeInfo['medium_fee_per_kb'] / 1024),
			Math.floor(vsize * btcFeeRates.feeInfo['high_fee_per_kb'] / 1024),
		]
		return fees;
	} catch (err:any) {
		return [ 850, 1000, 1150]
	}
}
export function buildOpReturnDepositTransaction(network:string, amount:number, btcFeeRates:any, addressInfo:any, stacksAddress:string, sbtcWalletAddress:string, cardinal:string, userPaymentPubKey:string) {
	const net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
	if (!stacksAddress) throw new Error('Stacks address required!');
	const data = buildDepositPayloadOpReturn(network, stacksAddress);
	const txFees = calculateDepositFees(network, false, amount, btcFeeRates.feeInfo, addressInfo, sbtcWalletAddress, data)
	const tx = new btc.Transaction({ allowUnknowInput: true, allowUnknowOutput: true });
	addInputs(network, amount, 5000, tx, false, addressInfo.utxos, userPaymentPubKey);
	tx.addOutput({ script: btc.Script.encode(['RETURN', data]), amount: BigInt(0) });
	tx.addOutputAddress(sbtcWalletAddress, BigInt(amount), net);
	const changeAmount = 1000; 
	if (changeAmount > 0) tx.addOutputAddress(cardinal, BigInt(changeAmount), net);
	return tx;
}

function addInputs (network:string, amount:number, revealPayment:number, tx:btc.Transaction, feeCalc:boolean, utxos:Array<UTXO>, userPaymentPubKey:string, userSchnorrPubKey:string) {
	const bar = revealPayment + amount;
	let amt = 0;
	for (const utxo of utxos) {
		const hexy = (utxo.tx.hex) ? utxo.tx.hex : utxo.tx 
		const script = btc.RawTx.decode(hex.decode(hexy))
		if (amt < bar && utxo.status.confirmed) {
			amt += utxo.value;
			//const pubkey = '0248159447374471c5a6cfa18c296e6e297dbf125a9e6792435a87e80c4f771493'
			//const script1 = (btc.p2ms(1, [hex.decode(pubkey)]))
			const txType = utxo.tx.vout[utxo.vout].scriptPubKey.type;
			if (txType === 'scripthash') {
				// educated guess at the p2sh wrapping based on the type of the other (non change) output...
				const net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
				let p2shObj;
				// p2tr cannont be wrapped in p2sh !!!
				const txTypes = ['witness_v0_keyhash', 'pubkeyhash', 'witness_v0_scripthash']
				for (const txType of txTypes) {
					try {
						if (txType === 'witness_v0_keyhash') {
							p2shObj = btc.p2sh(btc.p2wpkh(hex.decode(userPaymentPubKey)), net)
						} else if (txType === 'witness_v1_taproot') {
							p2shObj = btc.p2sh(btc.p2tr(hex.decode(userSchnorrPubKey)), net)
						} else if (txType.indexOf('multi') > -1) {
							p2shObj = btc.p2sh(btc.p2ms(1, [hex.decode(userPaymentPubKey)]), net)
						} else if (txType.indexOf('pubkeyhash') > -1) {
							p2shObj = btc.p2sh(btc.p2pkh(hex.decode(userPaymentPubKey)), net)
						} else if (txType.indexOf('witness_v0_scripthash') > -1) {
							p2shObj = btc.p2sh(btc.p2wsh(btc.p2wpkh(hex.decode(userPaymentPubKey))), net)
						}
						const nextI = redeemScriptAddInput(utxo, p2shObj, hexy)
						tx.addInput(nextI);
						console.log('Tx type: ' + txType + ' --> input added')
					} catch (err:any) {
						console.log('Error: not tx type: ' + txType)
					}
				}
			} else {
				let witnessUtxo = {
					script: script.outputs[utxo.vout].script,
					amount: BigInt(utxo.value)
				}
				if (feeCalc) {
					witnessUtxo = {
						amount: BigInt(utxo.value),
						script: btc.p2wpkh(secp.getPublicKey(privKey, true)).script,
					}		
				}
				const nextI:btc.TransactionInput = {
					txid: hex.decode(utxo.txid),
					index: utxo.vout,
					nonWitnessUtxo: hexy,
					witnessUtxo
				}
				tx.addInput(nextI);
			}
		}
	}
}

function redeemScriptAddInput (utxo:any, p2shObj:any, hexy:any) {
	return {
		txid: hex.decode(utxo.txid),
		index: utxo.vout,
		nonWitnessUtxo: hexy,
		redeemScript: p2shObj.redeemScript
	}

}
const PEGIN_OPCODE = '3C';

function buildDepositPayloadOpReturn(net:any, address:string):Uint8Array {
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
 */