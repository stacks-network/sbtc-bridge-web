import { serializeCV, type ClarityValue } from "micro-stacks/clarity";
import { sha256 } from "@noble/hashes/sha256";
import { concatByteArrays } from "micro-stacks/common";
//import { recoverSignature } from "micro-stacks/connect";
import { verifyMessageSignature } from "@stacks/encryption";
import { tupleCV, bufferCV, uintCV, stringAsciiCV } from "@stacks/transactions";
//import type { SignatureData as MicroStacksSignatureData } from "micro-stacks/connect";
//import type { SignatureData as MicroStacksSignatureData } from '@stacks/connect';
//import { get_client } from "$stores/client";
import { publicKeyToStxAddress, StacksNetworkVersion } from 'micro-stacks/crypto';
import { recoverPublicKey, Signature } from '@noble/secp256k1';
import { hashMessage } from '@stacks/encryption';
import { hexToBytes, bytesToHex } from "@stacks/common";
import type { SignatureData as MicroStacksSignatureData } from '@stacks/connect';
import { openSignatureRequestPopup } from '@stacks/connect';
import { addresses, getStacksNetwork } from '$lib/stacks_connect'

const network = import.meta.env.VITE_NETWORK;
const prefix = Uint8Array.from([0x53, 0x49, 0x50, 0x30, 0x31, 0x38]); // SIP018
const enum ChainID {
    Testnet = 2147483648,
    Mainnet = 1
}

export type SignatureData = {
	signature: Uint8Array,
	public_key: Uint8Array,
};

export type Message = {
	script: Uint8Array,
	signature?: Uint8Array | string
};

export const domain = {
	name: import.meta.env.VITE_PUBLIC_APP_NAME,
	version: import.meta.env.VITE_PUBLIC_APP_VERSION,
	'chain-id': network === "mainnet" ? ChainID.Mainnet : ChainID.Testnet,
};

export const domainCV = tupleCV({
	name: stringAsciiCV(import.meta.env.VITE_PUBLIC_APP_NAME),
	version: stringAsciiCV(import.meta.env.VITE_PUBLIC_APP_VERSION),
	'chain-id': uintCV(network === "mainnet" ? ChainID.Mainnet : ChainID.Testnet),
})

export function verifySignedMessage(message:Message, pubKey:string) {
	if (!message.signature)
		return false;
	const signature = typeof message.signature === "string" ? hexToBytes(message.signature): message.signature;
	return verifyStructuredDataSignature(message, hexToBytes(pubKey), signature);
}

function signatureDataBuffers(data: MicroStacksSignatureData) {
	return {
		signature: hexToBytes(data.signature),
		public_key: hexToBytes(data.publicKey),
	};
}

export async function requestSignStructuredMessage(message: any) {
		openSignatureRequestPopup({
		  message,
		  network: getStacksNetwork(), // for mainnet, `new StacksMainnet()`
		  appDetails: {
			name: 'My App',
			icon: window.location.origin + '/my-app-logo.svg',
		  },
		  onFinish(value) {
			console.log('Signature of the message', value.signature);
			console.log('Use public key:', value.publicKey);
			return value;
		  },
		});
/**	return new Promise(resolve =>
		get_client().signStructuredMessage({
			message: messageToTuple(message),
			domain: domain,
			onFinish: (result: MicroStacksSignatureData) => resolve(signatureDataBuffers(result)),
			onCancel: () => resolve(({error: true, reason:'user canceled sign operation'}))
		})
	);
	 */
}
/**
export async function requestSignMessage(message: string): Promise<SignatureData | {error:boolean, reason:string}> {
	return new Promise(resolve =>
		get_client().signMessage({
			message,
			onFinish: (result: MicroStacksSignatureData) => resolve(signatureDataBuffers(result)),
			onCancel: () => resolve(({error: true, reason:'user canceled sign operation'}))
		})
	);
}
 */

function messageToTuple(message: Message) {
	return tupleCV({
		script: bufferCV(message.script)
	});
}


export function hash_cv(clarityValue: ClarityValue) {
	return sha256(serializeCV(clarityValue));
}

export function structuredDataHash(message: Message) {
	return sha256(concatByteArrays([prefix, hash_cv(domainCV), hash_cv(messageToTuple(message))]));
}

export function verifyDataSignature(message: Buffer, publicKey: string, signature: string) {
	//const sig = bytesToHex(signature);
	return verifyMessageSignature({
		message: message.toString('hex'),
		signature: signature,
		publicKey: publicKey
	});
}

export function verifyStructuredDataSignature(message: Message, public_key: Uint8Array, signature: Uint8Array) {
	const sig = bytesToHex(signature);
	return verifyMessageSignature({
		message: structuredDataHash(message),
		signature: sig,
		publicKey: bytesToHex(public_key)
	});
}

export function getStacksAddressFromSignature(message:string, signature:string) {
	//const sig = recoverSignature({ signature: signature, mode: 'rsv' });
	//const s1 = new Signature(sig.signature.r, sig.signature.s)
	const msgHash = hashMessage(message)
	let pubkey:Uint8Array|string = recoverPublicKey(msgHash, signature, 1, true);
	pubkey = bytesToHex(pubkey);
	//const pubkey0 = getPublicKeyFromSignature({ hash: Buffer.from(msgUint8), signature: sig.signature, recoveryBytes: sig.recoveryBytes });	
	const addresses = {
		tp2pkh: publicKeyToStxAddress(pubkey, StacksNetworkVersion.testnetP2PKH),
		tp2sh: publicKeyToStxAddress(pubkey, StacksNetworkVersion.testnetP2SH),
		mp2pkh: publicKeyToStxAddress(pubkey, StacksNetworkVersion.mainnetP2PKH),
		mp2sh: publicKeyToStxAddress(pubkey, StacksNetworkVersion.mainnetP2SH),
	}
	return addresses;
}
