/**
 * utxos - interact with Bitcoin Blockchain to read utxo info
 */
//import TrezorConnect from '@trezor/connect-web';
import type { UTXO } from '$types/utxo';

export async function fetchTxHex(network:string, txid:string) {
  checkNetwork(network)
  const url = (network === 'mainnet') ? import.meta.env.VITE_MEMPOOL_EXPLORER_MAINNET : import.meta.env.VITE_MEMPOOL_EXPLORER_TESTNET;
  const response = await fetch(url + '/tx/' + txid + '/hex');
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error('Address not found - is the network correct?');
}

export async function fetchAddressDetails(network:string, address:string) {
  checkNetwork(network)
  const url = (network === 'mainnet') ? import.meta.env.VITE_MEMPOOL_EXPLORER_MAINNET : import.meta.env.VITE_MEMPOOL_EXPLORER_TESTNET;
  const response = await fetch(url + '/address/' + address);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error('Address not found - is the network correct?');
}

export async function fetchUTXOs(network:string, address:string) {
  checkNetwork(network)
  const url = (network === 'mainnet') ? import.meta.env.VITE_MEMPOOL_EXPLORER_MAINNET : import.meta.env.VITE_MEMPOOL_EXPLORER_TESTNET;
  const response = await fetch(url + '/address/' + address + '/utxo');
  if (response.status !== 200) {
    throw new Error('Bitcoin address not know - is the network correct?');
  }
  const utxos = await response.json();
  return utxos;
}

export async function fetchTxsForAddress(network:string, address:string) {
  checkNetwork(network)
  const url = (network === 'mainnet') ? import.meta.env.VITE_MEMPOOL_EXPLORER_MAINNET : import.meta.env.VITE_MEMPOOL_EXPLORER_TESTNET;
  const response = await fetch(url + '/address/' + address + '/txs');
  if (response.status !== 200) {
    throw new Error('Bitcoin address not know - is the network correct?');
  }
  const txs = await response.json();
  return txs;
}

export async function fetchTransaction(network:string, txid:string) {
  //https://api.blockcypher.com/v1/btc/test3/txs/<txID here>?includeHex=true
  //https://mempool.space/api/tx/15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521/hex
  checkNetwork(network)
  const url = (network === 'mainnet') ? import.meta.env.VITE_MEMPOOL_EXPLORER_MAINNET : import.meta.env.VITE_MEMPOOL_EXPLORER_TESTNET;
  //const response = await fetch(url + '/txs/' + txid + '?includeHex=true');
  let response = await fetch(url + '/tx/' + txid);
  if (response.status !== 200) {
    throw new Error('Bitcoin tx not found.');
  }
  const tx = await response.json();
  response = await fetch(url + '/tx/' + txid + '/hex');
  const hex = await response.text();
  tx.hex = hex
  return tx;
}

/**
 * Fetch the transaction referenced by each utxo.
 * The hex of the referenced tx is needed in the fee calculation 
 */
export async function attachTransaction(network:string, utxo:UTXO) {
  //https://api.blockcypher.com/v1/btc/test3/txs/<txID here>?includeHex=true
  //https://mempool.space/api/tx/15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521/hex
  const tx = await fetchTransaction(network, utxo.txid);
  utxo.tx = tx;
  return utxo;
}
    
/**
 * Fetch the transaction referenced by each utxo.
 * The hex of the referenced tx is needed in the fee calculation 
 */
export async function attachAllInputTransactions(network:string, utxos:[UTXO]) {
  checkNetwork(network)
  for (let utxo of utxos) {
    utxo = await attachTransaction(network, utxo);
  }  
  return utxos;
}
    
export function maxCommit(utxos:any) {
  const summ = utxos?.map((item:{value:number}) => item.value).reduce((prev:number, curr:number) => prev + curr, 0);
  return summ || 0;
}

export async function fetchFeeEstimate(network:string) {
  checkNetwork(network)
  const url = (network === 'mainnet') ? import.meta.env.VITE_BLOCKCYPHER_EXPLORER_MAINNET : import.meta.env.VITE_BLOCKCYPHER_EXPLORER_TESTNET;
  const response = await fetch(url);
  const info = await response.json();
  return info
}

function checkNetwork(network:string) {
  if (network !== 'testnet' && network !== 'mainnet') {
    throw new Error('Unknown Network')
  }
}

