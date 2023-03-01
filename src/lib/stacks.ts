
import { c32address, c32addressDecode } from 'c32check';
import { tupleCV, stringUtf8CV, uintCV, stringAsciiCV } from "micro-stacks/clarity";
import { verifyStructuredDataSignature } from '$lib/structured-data';
import { hexToBytes } from "micro-stacks/common";
import type { Message } from '$types/message';
import type { SignatureData as MicroStacksSignatureData } from "micro-stacks/connect";
import { get_client } from "$stores/client";

export let webWalletNeeded = false;

const enum ChainID {
    Testnet = 2147483648,
    Mainnet = 1
}

const allowed = [
	{ btc: '2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb', stx: 'SP1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRCBGD7R'}, // devnet testing
	{ btc: '2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb', stx: 'SP1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28GBQA1W0F'}, // mike 1
	{ btc: 'bc1qfdxax8gr9lufdf4j5wzkhelczr804n89ze2rfa', stx: 'SP3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSQP2HGT6'}, // mike 2
	{ btc: '1EJboSZVgPNrKCVmhmkV2rjLW4KN2Urti', stx: 'SP1ACWJC0TMD9F3Q3FJQFDWV9GSSTXN8RY31HR10B'}, // igor
	{ btc: '1FFaqXGJPNvU28QhsCz9gsRatc1C55V33e', stx: 'SP2E57N3DDG0CSF6XYWABZ1E7QBF8CTKJ4J1PHP0V'}, // jude
	{ btc: 'bc1q8j0gh8754jd9jerlxvpvxx4kc82e4u7f8ynnvp', stx: 'SP1R3S5RB1FSKCGQGW16ZHHPK6FAN57EAQ3RD7HP9'}, // marten
]
	
export function isAllowed(address:string) {
	return allowed.find((o) => o.stx === address);
}

export const domain = {
	name: import.meta.env.VITE_PUBLIC_APP_NAME,
	version: import.meta.env.VITE_PUBLIC_APP_VERSION,
	'chain-id': import.meta.env.VITE_NETWORK === "mainnet" ? ChainID.Mainnet : ChainID.Testnet,
};

export const domainCV = tupleCV({
	name: stringAsciiCV(import.meta.env.VITE_PUBLIC_APP_NAME),
	version: stringAsciiCV(import.meta.env.VITE_PUBLIC_APP_VERSION),
	'chain-id': uintCV(import.meta.env.VITE_NETWORK === "mainnet" ? ChainID.Mainnet : ChainID.Testnet),
})

export type SignatureData = {
	signature: string, //Uint8Array,
	public_key: string //Uint8Array,
};

export function verifySignedMessage(message:any, pubKey:string) {
	if (!message.signature)
		return false;
	const signature = typeof message.signature === "string" ? hexToBytes(message.signature): message.signature;
	return verifyStructuredDataSignature(domainCV, messageToTuple(message), hexToBytes(pubKey), signature);
}

function signatureDataBuffers(data: MicroStacksSignatureData) {
	return {
		signature: data.signature, //hexToBytes(data.signature),
		public_key: data.publicKey //hexToBytes(data.publicKey),
	};
}

export async function requestSignMessage(message: any): Promise<SignatureData | false> {
	return new Promise(resolve =>
		get_client().signStructuredMessage({
			message: messageToTuple(message),
			domain: domain,
			onFinish: (result: MicroStacksSignatureData) => resolve(signatureDataBuffers(result)),
			onCancel: () => resolve(false)
		})
	);
}

function messageToTuple(message: Message) {
	return tupleCV({
		btcAddress: stringUtf8CV(message.btcAddress),
		amount: uintCV(message.amount)
	});
}

export function decodeStacksAddress(stxAddress:string) {
	if (!stxAddress) throw new Error('Needs a stacks address');
	const decoded = c32addressDecode(stxAddress)
	return decoded
}
  
export function encodeStacksAddress (network:string, b160Address:string) {
	let version = 26
	if (network === 'mainnet') version = 22
	const address = c32address(version, b160Address) // 22 for mainnet
	return address
}

export async function login($auth: any) {
	try {
		$auth.openAuthRequest({
			onFinish: (payload: any) => {
				console.log('payload:', payload);
				if (!isAllowed(payload.addresses.mainnet)) {
					$auth.signOut();
				}
			},
			onCancel: () => {
				console.log('canceled');
			}
  		}).catch((err:any) => {
          console.log(err);
          // https://www.hiro.so/wallet/install-web
          webWalletNeeded = false;
        });
	} catch (e) {
		if (window) window.location.href = "https://wallet.hiro.so/wallet/install-web";
	}
}