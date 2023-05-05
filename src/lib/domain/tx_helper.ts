import * as secp from '@noble/secp256k1';
import * as btc from '@scure/btc-signer';
import { hex } from '@scure/base';
import assert from 'assert';
import { secp256k1 } from '@noble/curves/secp256k1';
import { CONFIG } from '$lib/config';
import { MAGIC_BYTES_MAINNET, MAGIC_BYTES_TESTNET, PEGOUT_OPCODE, PEGIN_OPCODE } from '$lib/utils'
import { decodeStacksAddress } from '$lib/stacks_connect'
import { concatByteArrays } from '$lib/structured-data.js'

const privKey = hex.decode('0101010101010101010101010101010101010101010101010101010101010101');
const net = (CONFIG.VITE_NETWORK === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;

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
	let data:Uint8Array = new Uint8Array(78);
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
	view1.setUint32(0, amt, true); // Put 42 in slot 12
	const view2 = new Uint8Array(view1.buffer);
	return view2;
}

function revealFeeToUint8(amt:number):Uint8Array {
	const buffer = new ArrayBuffer(8);
	const view1 = new DataView(buffer);
	view1.setUint32(0, amt, true); // Put 42 in slot 12
	const view2 = new Uint8Array(view1.buffer);
	return view2;
}

