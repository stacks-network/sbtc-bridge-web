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
import type { CommitKeysI } from '$types/pegin_request';
import { c32address } from 'c32check';
import { addresses } from '$lib/stacks_connect';

const privKey = hex.decode('0101010101010101010101010101010101010101010101010101010101010101');
const network = CONFIG.VITE_NETWORK;

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
		"schnorrPub": "0435bbcc0b6898fc63d6e856c10b67490b153f8866a88b7e59b2229fb2dc9cf102369bdef88e0c63b560a7d5295347e6dc6cd9d2158a8edc906ba09ac1019db0f8",
	},
	{
		"privateKey": "b3fd3a7216621aa796270da8149298a6f1cbf2eba4a4fc3cc21725f289d2551d",
		"ecdsaPub": "0235bbcc0b6898fc63d6e856c10b67490b153f8866a88b7e59b2229fb2dc9cf102",
		"schnorrPub": "0435bbcc0b6898fc63d6e856c10b67490b153f8866a88b7e59b2229fb2dc9cf102369bdef88e0c63b560a7d5295347e6dc6cd9d2158a8edc906ba09ac1019db0f8"
	}
]
export const sbtcWallets = [
	{
		"sbtcAddress": "tb1pf74xr0x574farj55t4hhfvv0vpc9mpgerasawmf5zk9suauckugqdppqe8",
		"pubKey": "264bd0d3bd80ea2da383b0a2a29f53d258e05904d2279f5f223053b987a3fd56",
		"desc": "tr([760ce8cf/86'/1'/0'/0/1]264bd0d3bd80ea2da383b0a2a29f53d258e05904d2279f5f223053b987a3fd56)#j4wq04cw",
		"parent_desc": "tr([760ce8cf/86'/1'/0']tpubDDQtKohNhMryjsYgQu8hsZ1BMXJWb1h4xGDZvsQV5ZK9E5QDNgp3w1h9N2XTyz6GVDmMcbAw5YU67mcGousktHxjVTx6RmqXX6GfJJrkqqh/0/*)#kqt0kevz",
		"scriptPubKey": "51204faa61bcd4f553d1ca945d6f74b18f60705d85191f61d76d34158b0e7798b710",
		"witness_program": "4faa61bcd4f553d1ca945d6f74b18f60705d85191f61d76d34158b0e7798b710",
	},
	{
		"sbtcAddress": "tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7",
		"pubKey": "802fb08c62f33a5e074dae2fc19441e7cef96c6e5a1ffa4065e5f7a8423816a3",
		"desc": "tr([7e0bf729/86'/1'/0'/0/2]802fb08c62f33a5e074dae2fc19441e7cef96c6e5a1ffa4065e5f7a8423816a3)#d8elhne5",
		"parent_desc": "tr([7e0bf729/86'/1'/0']tpubDCzcBRDqD1G23fAdF79sTfdECnfRprb5uGKb9vKBxrH4uZbC46ZJmxtSdYHwEJykzuzZV3KUGtFSRaoNAJuZpRSCiKoC1FUxkmRjPjDrbSA/0/*)#a8uhq8yj",	
		"scriptPubKey": "5120deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f",
		"witness_program": "deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f",
	}
]
/**
 * Constructs the script hash with script paths corresponding to two internal
 * test wallets.
 */
export function getTestAddresses ():CommitKeysI {
	const net = (CONFIG.VITE_NETWORK === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
	/**
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
	 */

	return {
		fromBtcAddress: btc.getAddress('tr', hex.decode(testWallets[0].privateKey), net) as string,
		reveal: btc.getAddress('tr', hex.decode(testWallets[0].privateKey), net) as string,
		revealPub: hex.encode(schnorr.getPublicKey(testWallets[0].privateKey) as Uint8Array),
		revealPrv: testWallets[0].privateKey,
		reclaim: btc.getAddress('tr', hex.decode(testWallets[1].privateKey), net) as string,
		reclaimPub: hex.encode(schnorr.getPublicKey(testWallets[1].privateKey) as Uint8Array),
		reclaimPrv: testWallets[1].privateKey,
		stacksAddress: addresses().stxAddress
	}
}

export function recoverAddress(pubkey:Uint8Array) {
	const net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
	try {
		// needs to be a 33 byte public key - doesnot work for schnorr pub keys.
		const encscript = btc.OutScript.decode(pubkey);
		const fromWallet = btc.Address(net).encode(encscript);
		return fromWallet;
	} catch(err) {
		console.error('needs to be a 33 byte public key - doesnot work for schnorr pub keys.')
		return hex.encode(pubkey)
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

export function recoverPegInData(d1:Uint8Array) {
	//const magic = hex.encode(d1.subarray(0,2));
	const opcode = hex.encode(d1.subarray(0,1));
	const addr0 = parseInt(hex.encode(d1.subarray(1,2)), 16);
	const addr1 = hex.encode(d1.subarray(2,22));
	const stacksAddress = c32address(addr0, addr1);
	const lengthOfCname = parseInt(hex.encode(d1.subarray(22,23)), 16);
	let cname;
	if (lengthOfCname > 0) {
	  cname = hex.encode(d1.subarray(23, 23 + lengthOfCname - 1))
	}
	let current = 23 + lengthOfCname - 1
	let memo;
	const lengthOfMemo = parseInt(hex.encode(d1.subarray(23 + lengthOfCname - 1, 23 + lengthOfCname)), 16);
	if (lengthOfMemo > 0) {
		memo = hex.encode(d1.subarray(current,lengthOfMemo - 1))
	}
	current = current + lengthOfMemo - 1
	const revealFee = uint8ToAmount(d1.subarray(current, current + 8));
  
	//const magicExpected = (network === 'testnet') ? MAGIC_BYTES_TESTNET : MAGIC_BYTES_MAINNET;
	
	//if (magic !== magicExpected) 
	//  throw new Error('Wrong magic : expected: ' +  magicExpected + '  received: ' + magic)
  
	if (opcode.toUpperCase() !== PEGIN_OPCODE) 
	  throw new Error('Wrong OPCODE : expected: ' +  PEGIN_OPCODE + '  received: ' + opcode)
  
	return {
	  opcode,
	  stacksAddress,
	  cname,
	  memo,
	  revealFee
	};
}
  
export function buildDataIn(net:any, fee:number, sigOrPrin:string, opDrop:boolean):Uint8Array {
	const magicBuf = (net === btc.TEST_NETWORK) ? hex.decode(MAGIC_BYTES_TESTNET) : hex.decode(MAGIC_BYTES_MAINNET);
	const opCodeBuf = hex.decode(PEGIN_OPCODE);
	const addr = decodeStacksAddress(sigOrPrin.split('.')[0]);
	const addr0Buf = hex.decode(addr[0].toString(16));
	const addr1Buf = hex.decode(addr[1]);
	let data:Uint8Array;

	const memoLength = new Uint8Array(1);
	memoLength.fill(0);
	const cnameLength = memoLength;
	try {
		if (sigOrPrin.indexOf('.') > -1) {
			const principalType = hex.decode('06'); // contract prin
			const cnameBuf = new TextEncoder().encode(sigOrPrin.split('.')[1]);
			const cnameLen = hex.decode(cnameBuf.length.toString(16));
			data = concatByteArrays([opCodeBuf, principalType, addr0Buf, addr1Buf, cnameLen, cnameBuf, memoLength])
			if (!opDrop) data = concatByteArrays([magicBuf, opCodeBuf, principalType, addr0Buf, addr1Buf, cnameLen, cnameBuf, memoLength]);
			console.log(sigOrPrin.split('.')[1])
		} else {
			const principalType = hex.decode('05'); // standard prin
			data = concatByteArrays([opCodeBuf, principalType, addr0Buf, addr1Buf, cnameLength, memoLength])
			if (!opDrop) data = concatByteArrays([magicBuf, opCodeBuf, principalType, addr0Buf, addr1Buf, cnameLength, memoLength ]);
		}
	} catch (err) {
		throw new Error('Too much data! Is it a very long contract name?');
	}
	//const padds = new Uint8Array(78 - data.length);
	//padds.fill(0);
	//data = concatByteArrays([data, padds])

	const revealFee:Uint8Array = new Uint8Array(8);
	revealFee.set(amountToUint8(fee, 8));
	//console.log(data);
	return concatByteArrays([data, revealFee]);
}

export function buildDataOut(net:any, amount:number, sigOrPrin:string, opDrop:boolean):Uint8Array {
	const magicBuf = (net === btc.TEST_NETWORK) ? hex.decode(MAGIC_BYTES_TESTNET) : hex.decode(MAGIC_BYTES_MAINNET);
	const opCodeBuf = hex.decode(PEGOUT_OPCODE);
	const view2 = amountToUint8(amount, 9);
	const sigBuf = hex.decode(sigOrPrin);
	let data = concatByteArrays([opCodeBuf, view2, sigBuf])
	if (!opDrop) data = concatByteArrays([magicBuf, opCodeBuf, view2, sigBuf]);
	return data;
}

export function amountToUint8(amt:number, size:number):Uint8Array {
	const buffer = new ArrayBuffer(size);
	const view1 = new DataView(buffer);
	view1.setUint32(0, amt, false);
	const view2 = new Uint8Array(view1.buffer);
	return view2;
}
export function uint8ToAmount(buf:Uint8Array):number {
	const view1 = new DataView(buf.buffer);
	const amt = view1.getUint32(0);
	return amt;
}
