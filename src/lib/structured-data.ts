import { serializeCV, type ClarityValue } from "micro-stacks/clarity";
import { sha256 } from "@noble/hashes/sha256";
import { bytesToHex, concatByteArrays } from "micro-stacks/common";
import { verifyMessageSignature } from "micro-stacks/connect";

const prefix = Uint8Array.from([0x53, 0x49, 0x50, 0x30, 0x31, 0x38]); // SIP018

export function hash_cv(clarityValue: ClarityValue) {
	return sha256(serializeCV(clarityValue));
}

export function structuredDataHash(domain: ClarityValue, message: ClarityValue) {
	return sha256(concatByteArrays([prefix, hash_cv(domain), hash_cv(message)]));
}

export function verifyStructuredDataSignature(domain: ClarityValue, message: ClarityValue, public_key: Uint8Array, signature: Uint8Array) {
	const sig = bytesToHex(signature);
	return verifyMessageSignature({
		message: structuredDataHash(domain, message),
		signature: sig,
		publicKey: bytesToHex(public_key)
	});
}
