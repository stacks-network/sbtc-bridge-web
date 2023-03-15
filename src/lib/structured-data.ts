import { serializeCV, type ClarityValue } from "micro-stacks/clarity";
import { sha256 } from "@noble/hashes/sha256";
import { bytesToHex, concatByteArrays } from "micro-stacks/common";
import { recoverSignature, getPublicKeyFromSignature, verifyMessageSignature } from "micro-stacks/connect";
import { tupleCV, bufferCV, uintCV, stringAsciiCV } from "micro-stacks/clarity";
import { hexToBytes } from "micro-stacks/common";
import type { SignatureData as MicroStacksSignatureData } from "micro-stacks/connect";
import { get_client } from "$stores/client";
import { publicKeyToStxAddress, StacksNetworkVersion } from 'micro-stacks/crypto';
import { recoverPublicKey, Signature, verify } from '@noble/secp256k1';

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

export async function requestSignStructuredMessage(message: any): Promise<SignatureData | {error:boolean, reason:string}> {
	return new Promise(resolve =>
		get_client().signStructuredMessage({
			message: messageToTuple(message),
			domain: domain,
			onFinish: (result: MicroStacksSignatureData) => resolve(signatureDataBuffers(result)),
			onCancel: () => resolve(({error: true, reason:'user canceled sign operation'}))
		})
	);
}

export async function requestSignMessage(message: string): Promise<SignatureData | {error:boolean, reason:string}> {
	return new Promise(resolve =>
		get_client().signMessage({
			message,
			onFinish: (result: MicroStacksSignatureData) => resolve(signatureDataBuffers(result)),
			onCancel: () => resolve(({error: true, reason:'user canceled sign operation'}))
		})
	);
}

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

export function getStacksAddressFromSignature(message: string, signature:string) {
	//const msg = structuredDataHash(message);
	//const sig = bytesToHex(signature);
	//const s1 = Signature.fromCompact(signature) //
	const sig = recoverSignature({ signature: signature, mode: 'rsv' });
	const s1 = new Signature(sig.signature.r, sig.signature.s)
	//console.log('s1-0: ', s1) d035cb3da71b311a942259894fa60eb5b82658679967c413a1b34c199cfb5d6e
	//console.log('signature-0: ' + signature)
	//const pubkey = getPublicKeyFromSignature({ hash: Buffer.from('5ca5346af964b82de40793484f68af7a2c757735c2be73aaf6ee8a3411eb05ba'), signature: sig.signature, recoveryBytes: sig.recoveryBytes });
	//const pubkey = recoverPublicKey(sha256(message), s1, 0, true);
	const pubkey = recoverPublicKey('d035cb3da71b311a942259894fa60eb5b82658679967c413a1b34c199cfb5d6e', s1, 0, true);
	console.log('pubkey1:    ' + Buffer.from(pubkey).toString('hex'))
	console.log('signature1: ' + signature)
	console.log('message1:   ' + message)
	console.log('msgHash1:   ' + Buffer.from(sha256(message)).toString('hex'))
	const addresses = {
		tp2pkh: publicKeyToStxAddress(pubkey, StacksNetworkVersion.testnetP2PKH),
		tp2sh: publicKeyToStxAddress(pubkey, StacksNetworkVersion.testnetP2SH),
		mp2pkh: publicKeyToStxAddress(pubkey, StacksNetworkVersion.mainnetP2PKH),
		mp2sh: publicKeyToStxAddress(pubkey, StacksNetworkVersion.mainnetP2SH),
	}
	return addresses;
}
