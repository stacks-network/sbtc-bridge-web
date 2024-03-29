import { CONFIG } from '$lib/config';
import * as btc from '@scure/btc-signer';
import * as secp from '@noble/secp256k1';
import { parseDepositPayload, type AddressMempoolObject, type PayloadType, type SbtcClarityEvent, getAddressFromOutScript, parseWithdrawPayload, MAGIC_BYTES_TESTNET, MAGIC_BYTES_MAINNET } from 'sbtc-bridge-lib'
import type { BridgeTransactionType } from 'sbtc-bridge-lib'
import { hex } from '@scure/base';
import { hash160 } from '@stacks/transactions';
import { hashSha256Sync } from '@stacks/encryption';

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

export function convertOutputsBlockCypher(blockCypherTx:any, peginRequest:BridgeTransactionType) {
  if (blockCypherTx.outputs && blockCypherTx.outputs.length > 1 && typeof blockCypherTx.outputs[0].script === 'string') {
    peginRequest.vout0 = {
      value: blockCypherTx.outputs[0].value,
      scriptpubkey_type: 'op_return',
      scriptpubkey: blockCypherTx.outputs[0].script,
      scriptpubkey_asm: '',
      scriptpubkey_address: ''
    }
    peginRequest.vout = {
      value: blockCypherTx.outputs[1].value,
      scriptpubkey_type: blockCypherTx.outputs[1].script_type,
      scriptpubkey: blockCypherTx.outputs[1].script,
      scriptpubkey_asm: '',
      scriptpubkey_address: (blockCypherTx.outputs[1].addresses && blockCypherTx.outputs[1].addresses.length > 0) ? blockCypherTx.outputs[1].addresses[0] : ''
    }
  } else if (blockCypherTx.vout && blockCypherTx.vout.length > 1) {
    peginRequest.vout0 = blockCypherTx.vout[0]
    peginRequest.vout = blockCypherTx.vout[1]
  }

  /**
   *
  {
    "block_height": -1,
    "block_index": -1,
    "hash": "15a6da6787546d9aef82991f985e21754c13b48f4ab0751311c9a81777dad5a0",
    "addresses": [
        "tb1qp8r7ln235zx6nd8rsdzkgkrxc238p6eecys2m9",
        "tb1pewpc7x6nnea8clm2vn2d8xvpdwvkhucmfdwmm0p6vk2u5xgmwlzsdx3g6w"
    ],
    "total": 8618290,
    "fees": 1000,
    "size": 281,
    "vsize": 199,
    "preference": "low",
    "relayed_by": "90.241.97.193",
    "received": "2023-06-08T21:19:43.668226497Z",
    "ver": 2,
    "double_spend": false,
    "vin_sz": 1,
    "vout_sz": 3,
    "data_protocol": "unknown",
    "confirmations": 0,
    "inputs": [
        {
            "prev_hash": "19ae245d186a78ee06951bda8079f7d7a8f1d5a531663d42d8bb9fbb76adfbcf",
            "output_index": 2,
            "output_value": 8619290,
            "sequence": 4294967295,
            "addresses": [
                "tb1qp8r7ln235zx6nd8rsdzkgkrxc238p6eecys2m9"
            ],
            "script_type": "pay-to-witness-pubkey-hash",
            "age": 2436915,
            "witness": [
                "3045022100c32d716776d38accbda216ddad9799462e52e3737a7b1b4dc093b68f5e1be05c02206d5d92a44b9dc2a5d055dc586cbb1783361741f10e7107c55ccb3953bd792d6d01",
                "03665ca3afcd61141e97aa9706d180514e28ef8fa29e0425e82a78e5e3b25f2b36"
            ]
        }
    ],
    "outputs": [
        {
            "value": 0,
            "script": "6a2354323c051a7010183fd1a76976e7b2bb67acdf57cdfe70488200000000138800000000",
            "addresses": null,
            "script_type": "null-data",
            "data_hex": "54323c051a7010183fd1a76976e7b2bb67acdf57cdfe70488200000000138800000000"
        },
        {
            "value": 45454,
            "script": "5120cb838f1b539e7a7c7f6a64d4d399816b996bf31b4b5dbdbc3a6595ca191b77c5",
            "addresses": [
                "tb1pewpc7x6nnea8clm2vn2d8xvpdwvkhucmfdwmm0p6vk2u5xgmwlzsdx3g6w"
            ],
            "script_type": "pay-to-taproot"
        },
        {
            "value": 8572836,
            "script": "001409c7efcd51a08da9b4e38345645866c2a270eb39",
            "addresses": [
                "tb1qp8r7ln235zx6nd8rsdzkgkrxc238p6eecys2m9"
            ],
            "script_type": "pay-to-witness-pubkey-hash"
        }
    ]
}
   */
}

export function parseFulfilPayloadFromOutput(network:string, tx:btc.Transaction):PayloadType {
	const out0 = tx.getOutput(0)
	let d1 = out0.script?.subarray(5) as Uint8Array // strip the op type and data length
	let witnessData = getMagicAndOpCode(d1);
	if (witnessData.opcode !== '3C' && witnessData.opcode !== '3E') {
		d1 = out0.script?.subarray(2) as Uint8Array // strip the op type and data length
		witnessData = getMagicAndOpCode(d1);
	}
	witnessData.txType = btc.OutScript.decode(out0.script as Uint8Array).type;

	let innerPayload:PayloadType = {} as PayloadType;
	if (witnessData.opcode === '3C') {
		innerPayload = parseDepositPayload(d1);
		innerPayload.sbtcWallet = getAddressFromOutScript(network, tx.getOutput(1).script as Uint8Array)
		//const inScript = btc.RawInput.encode({
		//	index: tx.getInput(0).index || 0,
		//	sequence: tx.getInput(0).sequence || 0,
		//	txid: tx.getInput(0).txid as Uint8Array,
		//	finalScriptSig: tx.getInput(0).finalScriptSig as Uint8Array,
		//});
		if (tx.outputsLength > 2) innerPayload.spendingAddress = getAddressFromOutScript(network, tx.getOutput(2).script!)
		//console.log('parsePayloadFromTransaction:spendingAddress: ' +  innerPayload.spendingAddress)
		return innerPayload;
	} else if (witnessData.opcode.toUpperCase() === '3E') {
		const recipient = getAddressFromOutScript(network, tx.getOutput(1).script as Uint8Array)
		try {
			innerPayload = parseWithdrawPayload(network, hex.encode(d1), recipient, 'vrs')
		} catch (err:any) {
			innerPayload = parseWithdrawPayload(network, hex.encode(d1), recipient, 'rsv')
		}
		innerPayload.spendingAddress = getAddressFromOutScript(network, tx.getOutput(1).script!);
		if (tx.outputsLength > 2) innerPayload.sbtcWallet = getAddressFromOutScript(network, tx.getOutput(2).script as Uint8Array)
		innerPayload.spendingAddress = recipient
		return innerPayload;
	} else {
	  throw new Error('Wrong opcode : expected: 3E or 3C :  recieved: ' + witnessData.opcode)
	}
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
