import * as secp from '@noble/secp256k1';
import * as btc from '@scure/btc-signer';
import { hex } from '@scure/base';
import assert from 'assert';
import { secp256k1 } from '@noble/curves/secp256k1';
import { CONFIG } from '$lib/config';
import { MAGIC_BYTES_MAINNET, MAGIC_BYTES_TESTNET, PEGOUT_OPCODE, PEGIN_OPCODE } from '$lib/utils'
import { decodeStacksAddress } from '$lib/stacks_connect'
import { concatByteArrays } from '$lib/structured-data.js'
import { secp256k1 as _secp, schnorr } from '@noble/curves/secp256k1';
import type { TestKeysI } from '$types/pegin_request';

const privKey = hex.decode('0101010101010101010101010101010101010101010101010101010101010101');

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
  schnorrPub: secp.getPublicKey(priv, false)
})

const testWallets = [
	{
		"privateKey": "ad1195070a559967782fb6eaa622a2baeaed9d9d254880059f9fbf781cf7852c",
		"ecdsaPub": "0235bbcc0b6898fc63d6e856c10b67490b153f8866a88b7e59b2229fb2dc9cf102",
		"schnorrPub": "0435bbcc0b6898fc63d6e856c10b67490b153f8866a88b7e59b2229fb2dc9cf102369bdef88e0c63b560a7d5295347e6dc6cd9d2158a8edc906ba09ac1019db0f8"
	},
	{
		"privateKey": "b3fd3a7216621aa796270da8149298a6f1cbf2eba4a4fc3cc21725f289d2551d",
		"ecdsaPub": "0235bbcc0b6898fc63d6e856c10b67490b153f8866a88b7e59b2229fb2dc9cf102",
		"schnorrPub": "0435bbcc0b6898fc63d6e856c10b67490b153f8866a88b7e59b2229fb2dc9cf102369bdef88e0c63b560a7d5295347e6dc6cd9d2158a8edc906ba09ac1019db0f8"
	}
]
/**
 * Constructs the script hash with script paths corresponding to two internal
 * test wallets.
 */
export function getTestAddresses ():TestKeysI {
	const net = (CONFIG.VITE_NETWORK === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
	//const revealAddress0 = btc.getAddress('tr', hex.decode(testWallets[0].schnorrPub), net)
	//const revealAddress0 = btc.Address(net).decode(testWallets[0].schnorrPub)

	const revealPubkey1 = schnorr.getPublicKey(testWallets[0].privateKey)
	const revealAddress = btc.getAddress('tr', hex.decode(testWallets[0].privateKey), net)
	const revealAddress1 = btc.Address(net).encode({type: 'tr', pubkey: (revealPubkey1)})
	//console.log('revealAddr: add0: ' + revealAddress0)
	console.log('getTestAddresses: revealAddr1: pubk: ' + hex.encode(revealPubkey1))
	console.log('getTestAddresses: revealAddr: addr: ' + revealAddress)
	console.log('getTestAddresses: revealAddr: addr: ' + revealAddress1)
	console.log('getTestAddresses: revealAddr: prvk: ' + testWallets[0].privateKey)

	const reclaimPubkeySecp = secp.getPublicKey(testWallets[1].privateKey)
	const reclaimAddressSecp = btc.Address(net).encode({type: 'tr', pubkey: (reclaimPubkeySecp)})
	const reclaimPubkey1 = schnorr.getPublicKey(testWallets[1].privateKey)
	const reclaimAddress = btc.getAddress('tr', hex.decode(testWallets[1].privateKey), net)
	const reclaimAddress1 = btc.Address(net).encode({type: 'tr', pubkey: (reclaimPubkey1)})
	console.log('getTestAddresses: reclaimAddr: pubk: ' + hex.encode(reclaimPubkey1))
	console.log('getTestAddresses: reclaimAddressSecp: addr: ' + reclaimAddressSecp)
	console.log('getTestAddresses: reclaimAddr: addr: ' + reclaimAddress)
	console.log('getTestAddresses: reclaimAddr: addr: ' + reclaimAddress1)
	console.log('getTestAddresses: reclaimAddr: prvk: ' + testWallets[1].privateKey)
	
	return {
		reveal: btc.getAddress('tr', hex.decode(testWallets[0].privateKey), net) as string,
		revealPub: schnorr.getPublicKey(testWallets[0].privateKey) as Uint8Array,
		revealPrv: testWallets[0].privateKey,
		reclaim: btc.getAddress('tr', hex.decode(testWallets[1].privateKey), net) as string,
		reclaimPub: schnorr.getPublicKey(testWallets[1].privateKey) as Uint8Array,
		reclaimPrv: testWallets[1].privateKey,
	}
}
	
/**
 * @deprecated - maybe not needed with op_drop as the users wallet calculates
 * the fees. Keep for now in case we switch back to op_return
 * @returns
 */
export function approxTxFees(utxos:any, fromBtcAddress:string, walletAddress:string):number {
	const net = (walletAddress.startsWith('tb')) ? btc.TEST_NETWORK : btc.NETWORK;
	// prepare random signer
	const p2Ret = btc.p2wpkh(keySetForFeeCalculation[0].ecdsaPub);
	assert('wpkh' === p2Ret.type);
	const tx = new btc.Transaction({ allowUnknowOutput: true });
	// create a set of inputs corresponding to the utxo set
	if (!utxos) return 0;
	for (const utxo of utxos) {
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
	if (tx.inputsLength === 0) throw new Error('No confirmed UTXOs')
	const data = buildDataIn(net, 1000, 'ST1NXBK3K5YYMD6FD41MVNP3JS1GABZ8TRVX023PT', true);
	tx.addOutput({ script: btc.Script.encode(['RETURN', data]), amount: 0n });
	tx.addOutputAddress(walletAddress, BigInt(500), net);
	const changeAmount = Math.floor(0);
	if (changeAmount > 0) tx.addOutputAddress(fromBtcAddress, BigInt(changeAmount), net);

	tx.sign(privKey);
	tx.finalize();
	return Number(tx.fee);
}

export function buildDataIn(net:any, fee:number, sigOrPrin:string, opDrop:boolean):Uint8Array {
	const magicBuf = (net === btc.TEST_NETWORK) ? hex.decode(MAGIC_BYTES_TESTNET) : hex.decode(MAGIC_BYTES_MAINNET);
	const opCodeBuf = hex.decode(PEGIN_OPCODE);
	const addr = decodeStacksAddress(sigOrPrin.split('.')[0]);
	const addr0Buf = hex.decode(addr[0].toString(16));
	const addr1Buf = hex.decode(addr[1]);
	let data:Uint8Array;
	try {
		if (sigOrPrin.indexOf('.') > -1) {
			const cnameBuf = new TextEncoder().encode(sigOrPrin.split('.')[1]);
			data = concatByteArrays([opCodeBuf, addr0Buf, addr1Buf, cnameBuf])
			if (!opDrop) data = concatByteArrays([magicBuf, opCodeBuf, addr0Buf, addr1Buf, cnameBuf]);
			console.log(sigOrPrin.split('.')[1])
		} else {
			data = concatByteArrays([opCodeBuf, addr0Buf, addr1Buf])
			if (!opDrop) data = concatByteArrays([magicBuf, opCodeBuf, addr0Buf, addr1Buf]);
		}
	} catch (err) {
		throw new Error('Too much data! Is it a very long contract name?');
	}
	const padds = new Uint8Array(78 - data.length);
	padds.fill(0);
	data = concatByteArrays([data, padds])

	const revealFee:Uint8Array = new Uint8Array(8);
	revealFee.set(revealFeeToUint8(fee));
	//console.log(data);
	return concatByteArrays([data, revealFee]);
}

export function buildDataOut(net:any, amount:number, sigOrPrin:string, opDrop:boolean):Uint8Array {
	const magicBuf = (net === btc.TEST_NETWORK) ? hex.decode(MAGIC_BYTES_TESTNET) : hex.decode(MAGIC_BYTES_MAINNET);
	const opCodeBuf = hex.decode(PEGOUT_OPCODE);
	const view2 = amountToUint8(amount);
	const sigBuf = hex.decode(sigOrPrin);
	let data = concatByteArrays([opCodeBuf, view2, sigBuf])
	if (!opDrop) data = concatByteArrays([magicBuf, opCodeBuf, view2, sigBuf]);
	return data;
}

export function amountToUint8(amt:number):Uint8Array {
	const buffer = new ArrayBuffer(9);
	const view1 = new DataView(buffer);
	view1.setUint32(0, amt, false); // Put 42 in slot 12
	const view2 = new Uint8Array(view1.buffer);
	return view2;
}

function revealFeeToUint8(amt:number):Uint8Array {
	const buffer = new ArrayBuffer(8);
	const view1 = new DataView(buffer);
	view1.setUint32(0, amt, false); // Put 42 in slot 12
	const view2 = new Uint8Array(view1.buffer);
	return view2;
}

