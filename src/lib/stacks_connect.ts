
import { CONFIG } from '$lib/config';
import { c32address, c32addressDecode } from 'c32check';
import { sbtcConfig } from '$stores/stores'
import { fetchUserBalances } from '$lib/bridge_api'
import type { SbtcConfig } from '$types/sbtc_config';
import { StacksTestnet, StacksMainnet, StacksMocknet } from '@stacks/network';
import { openSignatureRequestPopup } from '@stacks/connect';
import { AppConfig, UserSession, showConnect, getStacksProvider } from '@stacks/connect';
import type { AddressObject } from 'sbtc-bridge-lib' 

const appConfig = new AppConfig(['store_write', 'publish_data']);
export const userSession = new UserSession({ appConfig }); // we will use this export from other files

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
	const network = CONFIG.VITE_NETWORK;
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

export async function fetchSbtcBalance () {
	const adrds:AddressObject = addresses();
	let result:AddressObject;
	try {
		result = await fetchUserBalances(adrds);
		try {
			result.sBTCBalance = Number(result.stacksTokenInfo?.fungible_tokens[CONFIG.VITE_SBTC_CONTRACT_ID + '::sbtc'].balance)
		} catch (err) {
			// for testing..
			try { result.sBTCBalance = Number(result.stacksTokenInfo?.fungible_tokens['ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant::sbtc'].balance) }
			catch (err) { result.sBTCBalance = 0 }
		}

	} catch(err) {
		result = adrds;
		console.log('Network down...');
	}
	//const result = await fetchUserSbtcBalance(adrds.stxAddress);
	await sbtcConfig.update((conf:SbtcConfig) => {
		try {
			if (conf.pegInTransaction) {
				conf.pegInTransaction.pegInData.stacksAddress = adrds.stxAddress;
				conf.pegInTransaction.fromBtcAddress = adrds.cardinal;
			}
			if (conf.pegOutTransaction) {
				conf.pegOutTransaction.pegInData.stacksAddress = adrds.stxAddress;
				conf.pegOutTransaction.fromBtcAddress = adrds.cardinal;
			}
			conf.addressObject = result;
			conf.loggedIn = true;
	
		} catch (err:any) {
			console.log(err.message)
		}
		return conf;
	});
	return true;
}

export function addresses():AddressObject {
	if (!userSession) return {} as AddressObject;
	try {
		const userData = userSession.loadUserData();
		const network = CONFIG.VITE_NETWORK;
		//let something = hashP2WPKH(payload.public_keys[0])
		const stxAddress = (network === 'testnet') ? userData.profile.stxAddress.testnet : userData.profile.stxAddress.mainnet;
		const cardinal = (network === 'testnet') ? userData.profile.btcAddress.p2wpkh.testnet : userData.profile.btcAddress.p2wpkh.mainnet;
		const ordinal = (network === 'testnet') ? userData.profile.btcAddress.p2tr.testnet : userData.profile.btcAddress.p2tr.mainnet;
		return {
			stxAddress,
			cardinal,
			ordinal,
			btcPubkeySegwit0: userData.profile.btcPublicKey.p2wpkh,
			btcPubkeySegwit1: userData.profile.btcPublicKey.p2tr,
			sBTCBalance: 0,
			stxBalance: 0
		};
	} catch(err) {
		return {} as AddressObject
	}
}

export const appDetails = {
	name: 'sBTC Bridge',
	icon: window.location.origin + '/img/icon_sbtc.png',
}

export function makeFlash(el1:HTMLElement|null) {
	let count = 0;
	if (!el1) return;
	el1.classList.add("flasherize-button");
    const ticker = setInterval(function () {
		count++;
		if ((count % 2) === 0) {
			el1.classList.add("flasherize-button");
		}
		else {
			el1.classList.remove("flasherize-button");
		}
		if (count === 2) {
			el1.classList.remove("flasherize-button");
			clearInterval(ticker)
		}
	  }, 2000)
}

export function isLegal(routeId:string):boolean {
	if (userSession.isUserSignedIn()) return true;
	if (routeId.startsWith('http')) {
		if (routeId.indexOf('/deposit') > -1 || routeId.indexOf('/withdraw') > -1 || routeId.indexOf('/admin') > -1 || routeId.indexOf('/transactions') > -1) {
			return false;
		}
	} else if (['/deposit', '/withdraw', '/admin', '/transactions'].includes(routeId)) {
		return false;
	}
	return true;
}

export function loggedIn():boolean {
	return userSession.isUserSignedIn()
}

export async function loginStacksJs(callback:any):Promise<any> {
	try {
		const provider = getStacksProvider()
		console.log('provider: ', provider)
		if (!userSession.isUserSignedIn()) {
			showConnect({
				userSession,
				appDetails,
				onFinish: async () => {
					await fetchSbtcBalance();
					callback(true);
				},
				onCancel: () => {
					callback(false);
				},
			});
		} else {
			await fetchSbtcBalance();
			callback(true);
		}
	} catch (e) {
		if (window) window.location.href = "https://wallet.hiro.so/wallet/install-web";
		callback(false);
	}
}

export function signMessage(callback:any, script:string) {
	openSignatureRequestPopup({
		message: script,
		network: getStacksNetwork(), // for mainnet, `new StacksMainnet()`
		appDetails: appDetails,
		onFinish(value) {
		  console.log('Signature of the message', value.signature);
		  console.log('Use public key:', value.publicKey);
		  callback(value, script);
		},
	});
}

export function logUserOut() {
	return userSession.signUserOut();
}

const FORMAT = /[ `!@#$%^&*()_+=[\]{};':"\\|,<>/?~]/;

export function verifyStacksPricipal(stacksAddress?:string) {
	if (!stacksAddress) {
	  throw new Error('Address not found');
	} else if (FORMAT.test(stacksAddress)) {
	  throw new Error('please remove white space / special characters');
	}
	try {
	  const decoded = decodeStacksAddress(stacksAddress.split('.')[0]);
	  if ((CONFIG.VITE_NETWORK === 'testnet' || CONFIG.VITE_NETWORK === 'devnet') && decoded[0] !== 26) {
		throw new Error('Please enter a valid stacks blockchain testnet address');
	  }
	  if (CONFIG.VITE_NETWORK === 'mainnet' && decoded[0] !== 22) {
		throw new Error('Please enter a valid stacks blockchain mainnet address');
	  }
	  return stacksAddress;
	  } catch (err:any) {
		  throw new Error('Invalid stacks principal - please enter a valid ' + CONFIG.VITE_NETWORK + ' account or contract principal.');
	  }
}
  
  
export function verifyAmount(amount:number) {
	if (!amount || amount === 0) {
		throw new Error('No amount entered');
	  }
  	if (amount < 10000) {
		throw new Error('Amount less than mnimum transaction fee.');
	  }
}
export function verifySBTCAmount(amount:number, balance:number, fee:number) {
	if (!amount || amount === 0) {
		throw new Error('No amount entered');
	}
	if (amount > (balance - fee)) {
		throw new Error('No more then balance (less fee of ' + fee + ')');
	}
}
  
	