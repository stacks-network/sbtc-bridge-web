import { CONFIG } from '$lib/config';
import * as btc from '@scure/btc-signer';
import * as secp from '@noble/secp256k1';
import { parseDepositPayload, type AddressMempoolObject, type PayloadType, type SbtcClarityEvent, getAddressFromOutScript, parseWithdrawPayload, MAGIC_BYTES_TESTNET, MAGIC_BYTES_MAINNET } from 'sbtc-bridge-lib'
import type { BridgeTransactionType } from 'sbtc-bridge-lib'
import { hex } from '@scure/base';
import { hash160 } from '@stacks/transactions';
import { hashSha256Sync } from '@stacks/encryption';
import { RevealerTxModes, type CommitmentStatus, RevealerTxTypes } from '$types/revealer_types';

export const COMMS_ERROR = 'Error communicating with the server. Please try later.'
export const smbp = 900
export const xsbp = 700

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
})

const btcPrecision = 100000000
const stxPrecision = 1000000

export function myHashP2WPKH(publicKey:string) {
  return hex.encode(hash160(hashSha256Sync(hex.decode(publicKey))))
}

export function writeOutUnspendable() {
  console.log('UNSPENDABLE' + hex.encode(btc.TAPROOT_UNSPENDABLE_KEY))
}

export function bitcoinToSats(amountBtc:number) {
  return  Math.round(amountBtc * btcPrecision)
}

export function fmtSatoshiToBitcoin(amountSats:number) {
  return  (Math.round(amountSats) / btcPrecision).toFixed(8)
}

export function satsToBitcoin(amountSats:number):number {
  return  Number((Math.round(amountSats) / btcPrecision).toFixed(8))
}

export function userSatBtc(amount:number, denomination:string):number {
  if (denomination === 'bitcoin') {
    if (amount.toString().indexOf('.') === -1) {
      return  Number((Math.round(amount) / btcPrecision).toFixed(8))
    }
    return  amount
  } else {
    return  bitcoinToSats(amount)
  }
}

export function fmtMicroToStx(amountStx:number) {
  return  (Math.round(amountStx) / stxPrecision).toFixed(6)
}

export function tsToTime(updated:number|undefined) {
  let d = new Date();
  if (updated) d = new Date(updated);
  //return d.toLocaleDateString('en-UK');
  return d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
}

export function tsToDate(updated:number|undefined) {
  let d = new Date();
  if (updated) d = new Date(updated);
  return d.toLocaleDateString('en-UK');
  //return d.getHours() + ':' + d.getMinutes() + ' ' + d.getDate() + "/" + d.getMonth() + 1 + "/" + d.getFullYear();
}

export function isSupported(address:string) {
  const network = CONFIG.VITE_NETWORK;
  const msg = 'Please enter a valid ' + network + ' bitcoin address.'
  if (!address || address.length < 10) {
    throw new Error(msg);
  }
  const net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
  const obj = btc.Address(net).decode(address);
  if (obj.type !== 'tr' && obj.type !== 'wpkh' && obj.type !== 'wsh') throw new Error(msg)
  return true;
  /**
  if (obj.type === 'pk') {
    throw new Error('Legacy addresses are not supported in the current version. ' + msg);
  }
  if (obj.type === 'ms' || obj.type === 'tr_ms') {
    throw new Error('Multisig addresses are not supported in the current version. ' + msg);
  }
  if (obj.type === 'pkh' || obj.type === 'sh') {
    // classis non segwit
    valid = true;
  }
  if (obj.type === 'wpkh' || obj.type === 'wsh' || obj.type === 'tr') {
    // segwit
    valid = true;
  }
  if (!valid) {
    throw new Error('Addresses is neither a classic (p2pkh/p2sh) or segwit (p2wpkh/p2wsh) or taproot address. ' + msg);
  }
  return valid;
   */
}

export function getNet() {
  return (CONFIG.VITE_NETWORK === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK
  //if (network === 'litecoin') return { pubKeyHash: 0x30, scriptHash: 0x32 };
  //if (network === 'testnet') return { bech32: 'tb', pubKeyHash: 0x6f, scriptHash: 0xc4 };
  //if (network === 'regtest') return { bech32: 'bcrt', pubKeyHash: 0x6f, scriptHash: 0xc4 };
}
export function explorerAddressUrl(addr:string) {
	return CONFIG.VITE_STACKS_EXPLORER + '/address/' + addr + '?chain=' + CONFIG.VITE_NETWORK;
}
export function explorerBtcTxUrl(txid:string|undefined) {
  if (!txid) return '?';
  if (txid.startsWith('0x')) txid = txid.split('x')[1]
	return CONFIG.VITE_BSTREAM_EXPLORER + '/tx/' + txid;
}

export function explorerBtcAddressUrl(address:string|undefined) {
  if (!address) return ''
	return CONFIG.VITE_BSTREAM_EXPLORER + '/address/' + address;
}
export function explorerTxUrl(txid:string) {
	return CONFIG.VITE_STACKS_EXPLORER + '/txid/' + txid + '?chain=' + CONFIG.VITE_NETWORK;
}

export function bitcoinBalanceFromMempool(addressMempoolObject:AddressMempoolObject|undefined) {
  if (!addressMempoolObject) return 0;
   return addressMempoolObject.chain_stats.funded_txo_sum - addressMempoolObject.chain_stats.spent_txo_sum
}

export function fmtAmount(amount:number, currency:string) {
  if (currency === 'stx') {
    return formatter.format(amount).replace('$', '') // &#931;
  }
}

export function fmtNumber(amount:number|undefined) {
  if (amount === 0) return 0;
  if (amount) return new Intl.NumberFormat().format(amount);
}

export function truncate(stringy?:string, amount?:number) {
  if (!stringy) return '?';
  if (!amount) amount = 4;
  return stringy.substring(0, amount) + '...' + stringy.substring(stringy.length - amount);
}

const priv = secp.utils.randomPrivateKey()
export const keySetForFeeCalculation = {
  priv,
  ecdsaPub: secp.getPublicKey(priv, true),
  schnorrPub: secp.getPublicKey(priv, false)
}

export function compare( a:SbtcClarityEvent, b:SbtcClarityEvent ) {
  if (!a.payloadData.burnBlockHeight || !b.payloadData.burnBlockHeight) return 0
  if ( a.payloadData.burnBlockHeight < b.payloadData.burnBlockHeight || 0 ){
    return 1;
  }
  if ( a.payloadData.burnBlockHeight > b.payloadData.burnBlockHeight ){
    return -1;
  }
  return 0;
}
export function compareCurrencies( a:{ value: string; name: string; }, b:{ value: string; name: string; } ) {
  if ( a.value < b.value ){
    return -1;
  }
  if ( a.value > b.value ){
    return 1;
  }
  return 0;
}

export function getMagicAndOpCode(d1: Uint8Array): {magic?:string; opcode:string; txType? :string; } {
	if (!d1 || d1.length < 2) throw new Error('no magic data passed');
	const magic = hex.encode(d1.subarray(0,2));
	if (magic === MAGIC_BYTES_TESTNET || magic === MAGIC_BYTES_MAINNET) {
		return {
			magic: magic.toUpperCase(),
			opcode: hex.encode(d1.subarray(2,3)).toUpperCase()
		}
	}
	return {
		opcode: hex.encode(d1.subarray(0,1)).toUpperCase()
	}
}


const ADDRESS_VERSION_P2PKH =new Uint8Array([0])
const ADDRESS_VERSION_P2SH = new Uint8Array([1])
const ADDRESS_VERSION_P2WPKH = new Uint8Array([2])
const ADDRESS_VERSION_P2WSH = new Uint8Array([3])
const ADDRESS_VERSION_NATIVE_P2WPKH = new Uint8Array([4])
const ADDRESS_VERSION_NATIVE_P2WSH = new Uint8Array([5])
const ADDRESS_VERSION_NATIVE_P2TR = new Uint8Array([6])

function getVersionAsType(version:string) {
	if (version === '0x00') return 'pkh'
	else if (version === '0x01') return 'sh'
	else if (version === '0x04') return 'wpkh'
	else if (version === '0x05') return 'wsh'
	else if (version === '0x06') return 'tr'
}

export function getStatusAsWord (status:CommitmentStatus) {
  if (status === 0) return 'unpaid'
  else if (status === 1) return 'pending'
  else if (status === 2) return 'paid'
  else if (status === 3) return 'sbtc minted'
  else if (status === 4) return 'reclaimed'
}

export function getTypeAsWord (type:RevealerTxTypes) {
  return type.split('_')[1]
}

export function getModeAsWord (mode:RevealerTxModes) {
  if (mode === RevealerTxModes.OP_DROP) return 'commit/reveal'
  else if (mode === RevealerTxModes.OP_RETURN) return 'single tx'
}


export function getAddressFromHashBytes(hashBytes:string, version:string) {
	const net = (CONFIG.VITE_NETWORK === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK
	if (!version.startsWith('0x')) version = '0x' + version
	if (!hashBytes.startsWith('0x')) hashBytes = '0x' + hashBytes
	let btcAddr:string|undefined;
	try {
	  const txType = getVersionAsType(version)
	  let outType:any;
	  if (txType === 'tr') {
		outType = {
		  type: getVersionAsType(version),
		  pubkey: hex.decode(hashBytes.split('x')[1])
		}
	  } else {
		outType = {
		  type: getVersionAsType(version),
		  hash: hex.decode(hashBytes.split('x')[1])
		}
	  }
	  const addr:any = btc.Address(net);
	  btcAddr = addr.encode(outType)
	  return btcAddr
	} catch (err:any) {
	  btcAddr = err.message
	  console.error('getAddressFromHashBytes: version:hashBytes: ' + version + ':' + hashBytes)
	}
	return btcAddr
}
  
export function getHashBytesFromAddress(address:string):{version:string, hashBytes:string }|undefined {
	const net = (CONFIG.VITE_NETWORK === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK
	try {
	  const addr:any = btc.Address(net);
	  //const outScript = btc.OutScript.encode(addr.decode(address));
	  const s = btc.OutScript.encode(addr.decode(address))
	  const outScript = btc.OutScript.decode(s);
	  if (outScript.type === "ms") {
		return
	  } else if (outScript.type === "pkh") {
		return { version: hex.encode(ADDRESS_VERSION_P2PKH), hashBytes: hex.encode(outScript.hash) }
	  } else if (outScript.type === "sh") {
		return { version: hex.encode(ADDRESS_VERSION_P2SH), hashBytes: hex.encode(outScript.hash) }
	  } else if (outScript.type === "wpkh") {
		return { version: hex.encode(ADDRESS_VERSION_NATIVE_P2WPKH), hashBytes: hex.encode(outScript.hash) }
	  } else if (outScript.type === "wsh") {
		return { version: hex.encode(ADDRESS_VERSION_NATIVE_P2WSH), hashBytes: hex.encode(outScript.hash) }
	  } else if (outScript.type === "tr") {
		return { version: hex.encode(ADDRESS_VERSION_NATIVE_P2TR), hashBytes: hex.encode(outScript.pubkey) }
	  }
	  return
	} catch (err:any) {
	  console.error('getHashBytesFromAddress: un hash-byteable address: ' + address)
	}
	return
}
