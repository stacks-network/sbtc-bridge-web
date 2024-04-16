import { CONFIG } from '$lib/config';
import { getAddressFromOutScript, parseDepositPayload, parseWithdrawPayload, type WrappedPSBT } from 'sbtc-bridge-lib' 
import type { SbtcClarityEvent } from 'sbtc-bridge-lib/dist/types/sbtc_types';
import { getMagicAndOpCode } from './utils';

let authHeader:any;

export async function setAuthorisation(auth:any) {
  authHeader = auth
}
export function headers() {
  if (authHeader) {
    return { 'Content-Type': 'application/json', 'Authorization': JSON.stringify(authHeader) }
  }
  return { 'Content-Type': 'application/json', 'Authorization': '' }
}

function addNetSelector (path:string) {
  return path
}

async function fetchCatchErrors(path:string) {
  try {
    const response = await fetch(path);
    return response;
  } catch (err:any) {
    console.log('fetchCatchErrors: ', err)
    return new Response(undefined, {
      status: 505,
    }) 
  }
}

async function extractResponse(response:any) {
  try {
    return await response.json();
  } catch(err) {
    try {
      return await response.text();
    } catch(err) {
      console.log('error fetching response.. ', err)
    }
  }
}

export async function findSbtcEventByBitcoinTxId(bitcoinTxid:string):Promise<Array<SbtcClarityEvent>> {
  const path = addNetSelector(CONFIG.VITE_REVEALER_API + '/events/find-by/bitcoin-txid/' + bitcoinTxid);
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    console.log('Request failed to url: ' + path);
    return [];
  }
  const pegins = await extractResponse(response);
  return pegins;
}

export async function findSbtcEventByBitcoinAddress(bitcoinAddress:string):Promise<Array<SbtcClarityEvent>> {
  const path = addNetSelector(CONFIG.VITE_REVEALER_API + '/events/find-by/bitcoin/' + bitcoinAddress);
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    console.log('Request failed to url: ' + path);
    return [];
  }
  const pegins = await extractResponse(response);
  return pegins;
}

export async function findSbtcEventsByPage(page:number, limit:number):Promise<{ results: Array<SbtcClarityEvent>, events:number}> {
  const path = addNetSelector(CONFIG.VITE_REVEALER_API + '/events/find-by/page/' + page + '/' + limit);
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    console.log('Request failed to url: ' + path);
    return { results: [], events:0};
  }
  const pegins = await extractResponse(response);
  return pegins;
}

export async function fetchTransaction(txid:string) {
  const path = addNetSelector(CONFIG.VITE_REVEALER_API + '/btc/tx/' + txid);
  const response = await fetchCatchErrors(path);
  return await extractResponse(response);
}

export async function fetchAddressTransactions(address:string) {
  if (!address || address.length < 5) return;
  const path = addNetSelector(CONFIG.VITE_REVEALER_API + '/btc/wallet/address/' + address + '/txs');
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    console.log('Bitcoin address not known - is the network correct?');
  }
  return await extractResponse(response);
}

export async function fetchUtxoSet(address:string) {
  if (!address || address.length < 5) return;
  const path = addNetSelector(CONFIG.VITE_REVEALER_API + '/btc/wallet/address/' + address + '/utxos?verbose=true');
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    console.log('Bitcoin address not known - is the network correct?');
  }
  return await extractResponse(response);
}

export async function sign(wrappedPsbt:WrappedPSBT) {
  const path = addNetSelector(CONFIG.VITE_REVEALER_API + '/btc/tx/sign');
  const response = await fetch(path, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(wrappedPsbt)
  });
  let res:any;
  try {
    res = await response.json();
  } catch (err) {
    try {
      console.log(err)
      res = await response.text();
    } catch (err1) {
      console.log(err1)
    }
  }
  return res;
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
