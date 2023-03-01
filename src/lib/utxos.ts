/**
 * utxos - interact with Bitcoin Blockchain to read utxo info
 */
//import TrezorConnect from '@trezor/connect-web';
import type { UTXO } from '$types/utxo';

export function isSupported(address:string) {
  /**
   * TODO: return once other issues are cleared up and we have reliable access to bitcoin rpc
   * 
   */
  if (address.startsWith('1') || address.startsWith('m') || address.startsWith('n')) {
    throw new Error('Legacy addresses are not supported in the current version.');
  }
  return true;
}

/**
export async function fetchTxHex(txid:string) {
  const url = import.meta.env.VITE_MEMPOOL_EXPLORER;
  const response = await fetch(url + '/tx/' + txid + '/hex');
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error('Address not found - is the network correct?');
}
export async function fetchUtxoSet(address:string) {
  const url = import.meta.env.VITE_MEMPOOL_EXPLORER;
  const response = await fetch(url + '/address/' + address);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error('Address not found - is the network correct?');
}
export async function fetchUTXOs(address:string) {
  const url = import.meta.env.VITE_MEMPOOL_EXPLORER;
  const response = await fetch(url + '/address/' + address + '/utxo');
  if (response.status !== 200) {
    throw new Error('Bitcoin address not know - is the network correct?');
  }
  const utxos = await response.json();
  return utxos;
}
 */


    
/**
 * Fetch the transaction referenced by each utxo.
 * The hex of the referenced tx is needed in the fee calculation 
export async function fetchTransaction(txid:string) {
  const url = import.meta.env.VITE_MEMPOOL_EXPLORER;
  const response = await fetch(url + '/tx/' + txid);
  if (response.status !== 200) {
    throw new Error('Bitcoin tx not found.');
  }
  const tx = await response.json();
  return tx;
}

export async function attachAllInputTransactions(utxos:[UTXO]) {
  for (let utxo of utxos) {
    utxo = await attachTransaction(utxo);
  }  
  return utxos;
}
export async function attachTransaction(utxo:UTXO) {
  //https://api.blockcypher.com/v1/btc/test3/txs/<txID here>?includeHex=true
  //https://mempool.space/api/tx/15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521/hex
  const tx = await fetchTransaction(utxo.txid);
  const hex = await fetchTransactionHex(utxo.txid);
  tx.hex = hex;
  utxo.tx = tx;
  return utxo;
}
export async function fetchTransactionHex(txid:string) {
  //https://api.blockcypher.com/v1/btc/test3/txs/<txID here>?includeHex=true
  //https://mempool.space/api/tx/15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521/hex
  const url = import.meta.env.VITE_MEMPOOL_EXPLORER;
  //const response = await fetch(url + '/txs/' + txid + '?includeHex=true');
  const response = await fetch(url + '/tx/' + txid + '/hex');
  const hex = await response.text();
  return hex;
}
export async function fetchFeeEstimate() {
  try {
    const url = import.meta.env.VITE_BLOCKCYPHER_EXPLORER;
    const response = await fetch(url);
    const info = await response.json();
    return info
  } catch (err) {
    console.log(err)
    return { low_fee_per_kb:20000, medium_fee_per_kb:30000, high_fee_per_kb:40000 }
  }
}

 */
    
export function maxCommit(utxos:any) {
  const summ = utxos?.map((item:{value:number}) => item.value).reduce((prev:number, curr:number) => prev + curr, 0);
  return summ || 0;
}

