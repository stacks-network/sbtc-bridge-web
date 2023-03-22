
import { c32address, c32addressDecode } from 'c32check';
import { sbtcConfig } from '$stores/stores'
//import { StacksMocknet } from "micro-stacks/network";
//import { hashP2WPKH, hashP2WSH, hashP2SH, hashP2PKH, publicKeyToStxAddress, StacksNetworkVersion } from "micro-stacks/crypto";
import { fetchUserSbtcBalance } from '$lib/bridge_api'
import type { SbtcConfig } from '$types/sbtc_config';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { StacksTestnet, StacksMainnet, StacksMocknet } from '@stacks/network';
import { openSignatureRequestPopup } from '@stacks/connect';

const appConfig = new AppConfig();
export const userSession = new UserSession({ appConfig });


export const webWalletNeeded = false;

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

export function getStacksNetwork() {
	const network = import.meta.env.VITE_NETWORK;
	let stxNetwork:StacksMainnet|StacksTestnet;
	if (network === 'testnet') stxNetwork = new StacksTestnet();
	else if (network === 'mainnet') stxNetwork = new StacksMainnet();
	else stxNetwork = new StacksMocknet();
	return stxNetwork;
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

type AddressObject = {
	stxAddress: string; cardinal: string; ordinal: string;
}

async function fetchSbtcBalance () {
	const adrds:AddressObject = addresses();
	const result = await fetchUserSbtcBalance(adrds.stxAddress);
	sbtcConfig.update((conf:SbtcConfig) => {
		if (conf.pegInTransaction) conf.pegInTransaction.pegInData.stacksAddress = adrds.stxAddress;
		if (conf.pegOutTransaction) conf.pegOutTransaction.pegInData.stacksAddress = adrds.stxAddress;
		conf.loggedIn = true;
		conf.balance = result
		conf.balance.address = adrds.stxAddress;
		conf.balance.cardinal = adrds.cardinal;
		conf.balance.ordinal = adrds.ordinal;
		return conf;
	});
}

export function addresses():AddressObject {
	const userData = userSession.loadUserData();
	const network = import.meta.env.VITE_NETWORK;
	//let something = hashP2WPKH(payload.public_keys[0])
	const addr = (network === 'testnet') ? userData.profile.stxAddress.testnet : userData.profile.stxAddress.mainnet;
	const cardinal = (network === 'testnet') ? userData.profile.btcAddress.p2wpkh.testnet : userData.profile.btcAddress.p2wpkh.mainnet;
	const ordinal = (network === 'testnet') ? userData.profile.btcAddress.p2tr.testnet : userData.profile.btcAddress.p2tr.mainnet;
	return {
		stxAddress: addr,
		cardinal,
		ordinal
	};
}

export const appDetails = {
	name: 'sBTC Client',
	icon: '/img/logo.png',
}
export async function loginStacksJs() {
	try {
		if (!userSession.isUserSignedIn()) {
			showConnect({
				userSession,
				appDetails,
				onFinish: async () => {
					return await fetchSbtcBalance();
				},
				onCancel: () => {
					// handle if user closed connection prompt
				},
			});
		} else {
			return userSession;
		}
	} catch (e) {
		if (window) window.location.href = "https://wallet.hiro.so/wallet/install-web";
	}
}

export function signMessage(callback:any, script:Buffer) {
	openSignatureRequestPopup({
		message: script.toString('hex'),
		network: getStacksNetwork(), // for mainnet, `new StacksMainnet()`
		appDetails: appDetails,
		onFinish(value) {
		  console.log('Signature of the message', value.signature);
		  console.log('Use public key:', value.publicKey);
		  callback(value, script);
		},
	});
}