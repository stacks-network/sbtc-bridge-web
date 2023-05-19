import { CONFIG } from '$lib/config';
import { sha256 } from "@noble/hashes/sha256";
import { verifyMessageSignature } from "@stacks/encryption";
import { tupleCV, bufferCV, uintCV, stringAsciiCV, serializeCV, type ClarityValue } from "@stacks/transactions";
import { hexToBytes, bytesToHex } from "@stacks/common";
import type { SignatureData as MicroStacksSignatureData } from '@stacks/connect';
import { openSignatureRequestPopup } from '@stacks/connect';
import { getStacksNetwork } from '$lib/stacks_connect'
import type { Message } from 'sbtc-bridge-lib/src/index' 

const network = CONFIG.VITE_NETWORK;
const prefix = Uint8Array.from([0x53, 0x49, 0x50, 0x30, 0x31, 0x38]); // SIP018
const enum ChainID {
    Testnet = 2147483648,
    Mainnet = 1
}

export type SignatureData = {
	signature: Uint8Array,
	public_key: Uint8Array,
};

export const domain = {
	name: CONFIG.VITE_PUBLIC_APP_NAME,
	version: CONFIG.VITE_PUBLIC_APP_VERSION,
	'chain-id': network === "mainnet" ? ChainID.Mainnet : ChainID.Testnet,
};

export const domainCV = tupleCV({
	name: stringAsciiCV(CONFIG.VITE_PUBLIC_APP_NAME),
	version: stringAsciiCV(CONFIG.VITE_PUBLIC_APP_VERSION),
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
}

function messageToTuple(message: Message) {
	return tupleCV({
		script: bufferCV(message.script)
	});
}


export function hash_cv(clarityValue: ClarityValue) {
	return sha256(serializeCV(clarityValue));
}

export function concatByteArrays(byteArrays: Uint8Array[]): Uint8Array {
	const totalSize = byteArrays.reduce((len, bytes) => len + bytes.length, 0);
	const resultArray = new Uint8Array(totalSize);
	let offset = 0;
	for (let i = 0; i < byteArrays.length; i++) {
	  resultArray.set(byteArrays[i], offset);
	  offset += byteArrays[i].length;
	}
	return resultArray;
  }
  
export function structuredDataHash(message: Message) {
	return sha256(concatByteArrays([prefix, hash_cv(domainCV), hash_cv(messageToTuple(message))]));
}

export function verifyDataSignature(message: string, publicKey: string, signature: string) {
	//const sig = bytesToHex(signature);
	return verifyMessageSignature({
		message: message,
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
