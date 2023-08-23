
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
import { calculateDepositFees } from 'sbtc-bridge-lib'
import { buildDepositPayloadOpReturn } from 'sbtc-bridge-lib/dist/payload_utils';
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

export function buildOpReturnDepositTransaction(network:string, amount:number, btcFeeRates:any, addressInfo:any, stacksAddress:string, sbtcWalletAddress:string, cardinal:string, userPaymentPubKey:string) {
	const net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
	if (!stacksAddress) throw new Error('Stacks address required!');
	const data = buildDepositPayloadOpReturn(network, stacksAddress);
	const txFees = calculateDepositFees(network, false, amount, btcFeeRates.feeInfo, addressInfo, sbtcWalletAddress, data)
	const tx = new btc.Transaction({ allowUnknowInput: true, allowUnknowOutput: true });
	// no reveal fee for op_return
	addInputs(network, amount, 0, tx, false, addressInfo.utxos, userPaymentPubKey);
	tx.addOutput({ script: btc.Script.encode(['RETURN', data]), amount: BigInt(0) });
	tx.addOutputAddress(sbtcWalletAddress, BigInt(amount), net);
	const changeAmount = inputAmt(tx) - (amount + txFees[1]); 
	if (changeAmount > 0) tx.addOutputAddress(cardinal, BigInt(changeAmount), net);
	return tx;
}

/**
export function addInputs (network:string, amount:number, revealPayment:number, tx:btc.Transaction, feeCalc:boolean, utxos:Array<UTXO>, userPaymentPubKey:string) {
	const net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
	const bar = revealPayment + amount;
	let amt = 0;
	for (const utxo of utxos) {
		const hexy = (utxo.tx.hex) ? utxo.tx.hex : utxo.tx
		const script = btc.RawTx.decode(hex.decode(hexy))
		if (amt < bar && utxo.status.confirmed) {
			amt += utxo.value;
			//const pubkey = '0248159447374471c5a6cfa18c296e6e297dbf125a9e6792435a87e80c4f771493'
			//const script1 = (btc.p2ms(1, [hex.decode(pubkey)]))
			const output = utxo.tx.vout[utxo.vout]
			let txType;
			// eslint-disable-next-line no-prototype-builtins
			if (output.hasOwnProperty('scriptpubkey_type')) {
				txType = output.scriptpubkey_type;
			} else {
				txType = output.scriptPubKey.type;
			}
			if (txType === 'scripthash' || txType === 'p2sh') {
				// educated guess at the p2sh wrapping based on the type of the other (non change) output...
				let p2shObj;
				// p2tr cannont be wrapped in p2sh !!!
				for (let i = 0; i < 10; i++) {
					try {
						if (i === 0) {
							p2shObj = btc.p2sh(btc.p2wpkh(hex.decode(userPaymentPubKey)), net)
						} else if (i === 1) {
							p2shObj = btc.p2sh(btc.p2wsh(btc.p2wpkh(hex.decode(userPaymentPubKey))), net)
						} else if (i === 2) {
							p2shObj = btc.p2sh(btc.p2wsh(btc.p2pkh(hex.decode(userPaymentPubKey)), net))
						} else if (i === 3) {
							p2shObj = btc.p2sh(btc.p2ms(1, [hex.decode(userPaymentPubKey)]), net)
						} else if (i === 4) {
							p2shObj = btc.p2sh(btc.p2pkh(hex.decode(userPaymentPubKey)), net)
						} else if (i === 5) {
							p2shObj = btc.p2sh(btc.p2sh(btc.p2pkh(hex.decode(userPaymentPubKey)), net))
						} else if (i === 6) {
							p2shObj = btc.p2sh(btc.p2sh(btc.p2wpkh(hex.decode(userPaymentPubKey)), net))
						}
						if (i < 3) {
							const nextI = redeemAndWitnessScriptAddInput(utxo, p2shObj, hexy)
							tx.addInput(nextI);
						} else {
							const nextI = redeemScriptAddInput(utxo, p2shObj, hexy)
							tx.addInput(nextI);
						}
						console.log('Tx type: ' + i + ' --> input added')
						break;
					} catch (err:any) {
						console.log('Error: not tx type: ' + i);
					}
				}
			} else if (txType === 'v0_p2wpkh') {
				//const p2shObj = btc.p2wpkh(hex.decode(userPaymentPubKey), net)
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
			} else if (txType === 'v0_p2wsh') {
				//const p2shObj = btc.p2wsh(btc.p2wpkh(hex.decode(userPaymentPubKey), net))
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
			} else if (txType === 'v0_p2pkh') {
				//const p2shObj = btc.p2pkh(hex.decode(userPaymentPubKey), net)
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
			} else {
				//const p2shObj = btc.p2wpkh(hex.decode(userPaymentPubKey), net)
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

function redeemAndWitnessScriptAddInput (utxo:any, p2shObj:any, hexy:any) {
	return {
		txid: hex.decode(utxo.txid),
		index: utxo.vout,
		witnessUtxo: {
		  script: p2shObj.script,
		  amount: BigInt(utxo.value),
		},
		redeemScript: p2shObj.redeemScript,
	}
}

function isUTXOConfirmed (utxo:any) {
	return utxo.tx.confirmations >= 3;
};

export function inputAmt (tx:btc.Transaction) {
	let amt = 0;
	for (let idx = 0; idx < tx.inputsLength; idx++) {
		const inp = tx.getInput(idx)
		if (inp.witnessUtxo) amt += Number(tx.getInput(idx).witnessUtxo?.amount)
		else if (inp.nonWitnessUtxo) amt += Number(inp.nonWitnessUtxo.outputs[inp.index!].amount)
	}
	return amt;
}
 */