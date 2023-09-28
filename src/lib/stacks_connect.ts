
import { CONFIG } from '$lib/config';
import { c32address, c32addressDecode } from 'c32check';
import { sbtcConfig } from '$stores/stores'
import { fetchUiInit, fetchUserBalances, setAuthorisation } from '$lib/bridge_api'
import type { SbtcConfig, SbtcUserSettingI } from '$types/sbtc_config';
import { StacksTestnet, StacksMainnet, StacksMocknet } from '@stacks/network';
import { openSignatureRequestPopup, type SignatureData, type StacksProvider } from '@stacks/connect';import { AppConfig, UserSession, showConnect, getStacksProvider } from '@stacks/connect';
import { getPegWalletAddressFromPublicKey, type AddressObject, type SbtcContractDataType } from 'sbtc-bridge-lib' 
import { hashMessage, verifyMessageSignature } from '@stacks/encryption';
import { defaultSbtcConfig } from '$lib/sbtc';
import { fetchExchangeRates } from "$lib/bridge_api"
import { hex } from '@scure/base';
import type { DepositPayloadUIType, ExchangeRate, WithdrawPayloadUIType } from 'sbtc-bridge-lib';
import { schnorr } from '@noble/curves/secp256k1';
import * as btc from '@scure/btc-signer';
import { AddressPurposes, getAddress } from 'sats-connect'
import type { GetAddressOptions } from 'sats-connect'
import { getStacksAddressFromPubkey } from 'sbtc-bridge-lib/dist/payload_utils';
import { StacksMessageType, publicKeyFromSignatureVrs } from '@stacks/transactions';
import { myHashP2WPKH } from './utils';

const appConfig = new AppConfig(['store_write', 'publish_data']);
export const userSession = new UserSession({ appConfig }); // we will use this export from other files
const authMessage = 'Please sign this message to complete authentication'

export const webWalletNeeded = false;
export const minimumDeposit = 10000
export const revealPayment = 10001

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
	if (CONFIG.VITE_ENVIRONMENT === 'simnet') stxNetwork = new StacksMocknet();
	else if (network === 'testnet') stxNetwork = new StacksTestnet();
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

export async function fetchSbtcBalance (conf:SbtcConfig, fromLogin:boolean|undefined) {
	const localKs = conf.keySets[CONFIG.VITE_NETWORK];
	//const sessionStacks = getStacksAddress(); // check not switching accounts
	if (!fromLogin && localKs	&& localKs.stxAddress && localKs.cardinal) { // && sessionStacks === localKs.stxAddress) {
		conf.keySets[CONFIG.VITE_NETWORK] = await getBalances(conf.sbtcContractData.contractId, localKs)
		sbtcConfig.update(() => conf);
		return conf;
	} else {
		await addresses(async function(addr:AddressObject) {
			if (addr) {
				conf.keySets[CONFIG.VITE_NETWORK] = await getBalances(conf.sbtcContractData.contractId, addr)
				sbtcConfig.update(() => conf);
			}
			return conf;
		});
	}
}
async function getBalances(contractId:string, addressObject:AddressObject):Promise<AddressObject> {
	let result:AddressObject;
	const tempSegwit0 = addressObject.btcPubkeySegwit0
	const tempSegwit1 = addressObject.btcPubkeySegwit1
	try {
		result = await fetchUserBalances(addressObject);
		try {
			result.sBTCBalance = Number(result.stacksTokenInfo?.fungible_tokens[contractId + '::sbtc'].balance)
		} catch (err) {
			// for testing..
			try { result.sBTCBalance = Number(result.stacksTokenInfo?.fungible_tokens['ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant::sbtc'].balance) }
			catch (err) { result.sBTCBalance = 0 }
		}
	} catch(err) {
		result = addressObject;
		console.log('Network down...');
	}
	if (!result.sBTCBalance) result.sBTCBalance = 0
	result.btcPubkeySegwit0 = tempSegwit0
	result.btcPubkeySegwit1 = tempSegwit1
	return result;
}
function getStacksAddress() {
	if (loggedIn()) {
		const userData = userSession.loadUserData();
		const stxAddress = (CONFIG.VITE_NETWORK === 'testnet') ? userData.profile.stxAddress.testnet : userData.profile.stxAddress.mainnet;
		return stxAddress
	}
	return
}
function getProvider() {
	const provider:StacksProvider = getStacksProvider()
	const prod = (provider.getProductInfo) ? provider.getProductInfo() : undefined;
	if (!prod) throw new Error('Provider not found')
	return prod
}

export function isHiro() {
	return getProvider().name.toLowerCase().indexOf('hiro') > -1
}

export function isLeather() {
	return getProvider().name.toLowerCase().indexOf('leather') > -1
}

async function addresses(callback:any):Promise<AddressObject|undefined> {
	if (!loggedIn()) return {} as AddressObject;
	const userData = userSession.loadUserData();
	const network = CONFIG.VITE_NETWORK;
	//let something = hashP2WPKH(payload.public_keys[0])
	const stxAddress = getStacksAddress();

	if (isHiro() || isLeather()) {
		console.log('addInputs: addresses: ' + userData.profile.btcPublicKey.p2wpkh)
		callback({
			network,
			stxAddress,
			cardinal: (network === 'testnet') ? userData.profile.btcAddress.p2wpkh.testnet : userData.profile.btcAddress.p2wpkh.mainnet,
			ordinal: (network === 'testnet') ? userData.profile.btcAddress.p2tr.testnet : userData.profile.btcAddress.p2tr.mainnet,
			btcPubkeySegwit0: (userData.profile.btcPublicKey) ? userData.profile.btcPublicKey.p2wpkh : undefined,
			btcPubkeySegwit1: (userData.profile.btcPublicKey) ? userData.profile.btcPublicKey.p2tr : undefined,
			sBTCBalance: 0,
			stxBalance: 0
		});
	} else {
		const getAddressOptions:GetAddressOptions = {
			payload: {
				purposes: [AddressPurposes.ORDINALS, AddressPurposes.PAYMENT],
				message: 'Address for receiving Ordinals and payments',
				  network: {
					type: (getStacksNetwork().isMainnet()) ? 'Mainnet' : 'Testnet'
				},
			},
			onFinish: (response:any) => {
				console.log(response)
				const obj = response.addresses;
				callback({
					network,
					stxAddress,
					cardinal: obj.find((o:any) => o.purpose === 'payment').address,
					ordinal: obj.find((o:any) => o.purpose === 'ordinals').address,
					btcPubkeySegwit0: obj.find((o:any) => o.purpose === 'payment').publicKey,
					btcPubkeySegwit1: obj.find((o:any) => o.purpose === 'ordinals').publicKey,
					sBTCBalance: 0,
					stxBalance: 0
				});
			},
			onCancel: () => {
				throw new Error('cancelled');
			}
		}
		await getAddress(getAddressOptions);
	}
}

export function appDetails() {
	return {
		name: 'sBTC Bridge',
		icon: (window) ? window.location.origin + '/img/icon_sbtc.png' : '/img/icon_sbtc.png',
	}
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
	try {
		if (userSession.isUserSignedIn()) return true;
		if (routeId.startsWith('http')) {
			if (routeId.indexOf('/deposit') > -1 || routeId.indexOf('/withdraw') > -1 || routeId.indexOf('/admin') > -1 || routeId.indexOf('/transactions') > -1) {
				return false;
			}
		} else if (['/deposit', '/withdraw', '/admin', '/transactions'].includes(routeId)) {
			return false;
		}
		return true;
	} catch (err) {
		return false
	}
}

export function loggedIn():boolean {
	try {
		return userSession.isUserSignedIn()
	} catch (err) {
		return false
	}
}

export async function authenticate($sbtcConfig:SbtcConfig):Promise<SignatureData|undefined> {
	await signMessage(async function(sigData:SignatureData, message:string) {
		const verified = verifyMessageSignature({ message, publicKey: sigData.publicKey, signature: sigData.signature });
		if (verified) {
		  console.log('sig verififed')
		}
	    const msgHash = hashMessage(message);
    	//const stxAddresses = await getStacksAddressFromSignature(msgHash, sigData.signature );
		const pubkey = publicKeyFromSignatureVrs(hex.encode(msgHash), { data: sigData.signature, type: StacksMessageType.MessageSignature })
		console.log('pubkey:', pubkey)
		//console.log('stxAddresses:', stxAddresses)
		console.log('stxAddresses:', getStacksAddressFromPubkey(hex.decode(sigData.publicKey)))

		$sbtcConfig.authHeader = { ...sigData, stxAddress: $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress, amountSats: 0 }
		setAuthorisation($sbtcConfig.authHeader)
		sbtcConfig.update(() => $sbtcConfig)
		return sigData
	}, authMessage)
	return
}

export async function loginStacksJs(callback:any, conf:SbtcConfig) {
	try {
		const provider = getStacksProvider()
		console.log('provider: ', provider)
		if (!userSession.isUserSignedIn()) {
			showConnect({
				userSession,
				appDetails: appDetails(),
				onFinish: async () => {
					authenticate(conf)
					callback(conf, true);
				},
				onCancel: () => {
					callback(conf);
				},
			});
		} else {
			callback(conf);
		}
	} catch (e) {
		if (window) window.location.href = "https://wallet.hiro.so/wallet/install-web";
		callback(conf);
	}
}

export function loginStacksFromHeader(document:any) {
	const el = document.getElementById("connect-wallet")
	if (el) return document.getElementById("connect-wallet").click();
	else return false;
}

export async function signMessage(callback:any, message:string) {
	await openSignatureRequestPopup({
		message,
		network: getStacksNetwork(), // for mainnet, `new StacksMainnet()`
		appDetails: appDetails(),
		onFinish({ publicKey, signature }) {
			let newSig = signature.substring(0, signature.length - 2);
			const recByte = signature.substring(signature.length - 2);
			newSig = recByte + newSig
			const verified1 = verifyMessageSignature({ signature: newSig, message, publicKey });
			if (!verified1) throw new Error('verifyMessageSignature - signature is not valid')
			callback({ publicKey, signature: newSig }, message);
		}
	});
}
/**

*/
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
  	//if (amount < minimumDeposit) {
	//	throw new Error('Amount must be at least 0.0001 or 10,000 satoshis');
	//  }
}
export function verifySBTCAmount(amount:number, balance:number, fee:number) {
	if (!amount || amount === 0) {
		throw new Error('No amount entered');
	}
	if (amount > (balance - fee)) {
		throw new Error('No more then balance (less fee of ' + fee + ')');
	}
}
  
export async function initApplication(conf:SbtcConfig, fromLogin:boolean|undefined) {
	const net = (CONFIG.VITE_NETWORK === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
	let privKey = btc.p2wpkh(hex.decode('03a4572841fec581e7e5370cad34b04387389e1fdf06b1814534e7203c761802da'), net);
	console.log(privKey)
	privKey = btc.p2tr(hex.decode('a4572841fec581e7e5370cad34b04387389e1fdf06b1814534e7203c761802da'), undefined, net);
	console.log(privKey)
	if (!conf) conf = defaultSbtcConfig as SbtcConfig
	let data = {} as any;
	try {
		data = await fetchUiInit();
		if (data.sbtcContractData.sbtcWalletPublicKey) data.sbtcContractData.sbtcWalletAddress = getPegWalletAddressFromPublicKey(CONFIG.VITE_NETWORK, data.sbtcContractData.sbtcWalletPublicKey);
		conf.loggedIn = false;
		if (userSession.isUserSignedIn()) {
			await fetchSbtcBalance(conf, fromLogin);
			conf.loggedIn = true;
		}
	} catch (err) {
		data = {
			sbtcContractData: {} as SbtcContractDataType
		} as any;
	}
	//conf.sbtcContractData = data.sbtcContractData;
	if (!conf.keySets) {
		if (CONFIG.VITE_NETWORK === 'testnet') {
			conf.keySets = { 'testnet': {} as AddressObject };
		} else {
			conf.keySets = { 'mainnet': {} as AddressObject };
		}
	}
	let keys;
	const mode = import.meta.env.MODE
	if (mode === 'development' || mode.startsWith('local') || !data.keys) {
		try {
			keys = {
				deposits: {
				  revealPubKey: hex.encode(schnorr.getPublicKey(hex.decode(CONFIG.VITE_BTC_SCHNORR_KEY_REVEAL))),
				  reclaimPubKey: hex.encode(schnorr.getPublicKey(hex.decode(CONFIG.VITE_BTC_SCHNORR_KEY_RECLAIM)))
				}
			}
		} catch(err) {
			keys = {
				deposits: {
				  revealPubKey: undefined,
				  reclaimPubKey: undefined
				}
			}
		}
	} else {
		keys = data.keys;
	}
	keys.deposits.revealPubKey = data.sbtcContractData.sbtcWalletPublicKey
	conf.keys = keys;

	try {
		conf.exchangeRates = await fetchExchangeRates();
		if (!conf.exchangeRates) throw new Error('no exchnage rates')
		const currency = conf.userSettings.currency?.myFiatCurrency?.currency;
		const rateNow = conf.exchangeRates.find((o:any) => o.currency === currency)
		if (rateNow) conf.userSettings.currency.myFiatCurrency = rateNow
		else conf.userSettings.currency.myFiatCurrency = (conf.exchangeRates.find((o:any) => o.currency === 'USD') || {} as ExchangeRate)
	} catch (err) {
		conf.exchangeRates = []
		conf.userSettings.currency.myFiatCurrency = {} as ExchangeRate
	}
	conf.revealFeeWithGas = revealPayment;
	conf.sbtcContractData = data.sbtcContractData;
	conf.btcFeeRates = data.btcFeeRates;
	if (!conf.userSettings) conf.userSettings = {} as SbtcUserSettingI
	if (!conf.payloadDepositData) conf.payloadDepositData = {} as WithdrawPayloadUIType
	if (!conf.payloadWithdrawData) conf.payloadWithdrawData = {} as WithdrawPayloadUIType
	if (loggedIn()) {
		try { doPayloadData(conf) }
		catch (err) {
			//
		} 
	}
	if (!conf.keySets || !conf.keySets[CONFIG.VITE_NETWORK]) {
		conf.keySets[CONFIG.VITE_NETWORK] = {} as AddressObject;
	}
	const addr = btc.Address(net).decode('tb1perzpcdw7r4xsfk5kkvy9krxgrqp0f2gufm6ygauzcs7e27rs7lxqmkkrq4')
	if (addr.type === 'tr') console.log('btc.Address(net).decode:' + hex.encode(addr.pubkey))
	sbtcConfig.update(() => conf);

}
//01d8467b25e1d415bf53427d4db86fe001590b280b604204f794c5ecfc923ed3
//d33e92fcecc594f70442600b280b5901e06fb84d7d4253bf15d4e1257b46d801

function doPayloadData(conf:SbtcConfig) {
	if (!conf.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0) throw new Error('Public Key missing from logged in user')
	console.log(myHashP2WPKH(conf.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0 as string))
	let prn = conf.keySets[CONFIG.VITE_NETWORK].stxAddress
	let amount = 0
	if (conf.payloadDepositData && conf.payloadDepositData.amountSats > 0) {
		amount = conf.payloadDepositData.amountSats
	}
	if (conf.payloadDepositData && conf.payloadDepositData.principal) {
		prn = conf.payloadDepositData.principal
	}
	const payloadDepositData:DepositPayloadUIType = {
			sbtcWalletPublicKey: conf.sbtcContractData.sbtcWalletPublicKey,
			reclaimPublicKey: conf.keys.deposits.reclaimPubKey,
			bitcoinAddress: conf.keySets[CONFIG.VITE_NETWORK].cardinal,
			paymentPublicKey: conf.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0 || '',
			principal: prn,
			amountSats: amount
	}
	conf.payloadDepositData = payloadDepositData;

	prn = conf.keySets[CONFIG.VITE_NETWORK].stxAddress
	if (!conf.payloadWithdrawData || !conf.payloadWithdrawData.sbtcWalletPublicKey) {
		amount = conf.payloadWithdrawData.amountSats
	}
	if (conf.payloadWithdrawData && conf.payloadWithdrawData.principal) {
		prn = conf.payloadDepositData.principal
	}
	const payloadWithdrawData:WithdrawPayloadUIType = {
			sbtcWalletPublicKey: conf.sbtcContractData.sbtcWalletPublicKey,
			reclaimPublicKey: conf.keys.deposits.reclaimPubKey,
			bitcoinAddress: conf.keySets[CONFIG.VITE_NETWORK].cardinal,
			paymentPublicKey: conf.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0 || '',
			principal: prn,
			amountSats: 0
	}
	conf.payloadWithdrawData = payloadWithdrawData;
	return conf;
}

/**
export function getPegWalletAddressFromPublicKey (sbtcWalletPublicKey:string) {
	if (!sbtcWalletPublicKey) return ''
	let net = (CONFIG.VITE_NETWORK === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
	const mode = import.meta.env.MODE
	if (mode === 'simnet') {
		net = { bech32: 'bcrt', pubKeyHash: 0x6f, scriptHash: 0xc4, wif: 0 }
	}
	const fullPK = hex.decode(sbtcWalletPublicKey);
	//sbtcContractData.coordinator?.key?.value?.split('x')[1];
	let xOnlyKey = fullPK;
	if (fullPK.length === 33) {
		xOnlyKey = fullPK.subarray(1)
	}
	//const trObj = btc.p2tr(xOnlyKey, undefined, net);
	//if (trObj.type === 'tr') 
	//const addr = trObj.address

	//const assumeTweakedPubKey = hex.decode(xOnlyKey);
	const addr = btc.Address(net).encode({type: 'tr', pubkey: xOnlyKey})
	return addr;
}
 */