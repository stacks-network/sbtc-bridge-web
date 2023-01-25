/**
 * utxos - interact with Bitcoin Blockchain to read utxo info
 */

export async function fetchAddressDetails(network:string, address:string) {
  const url = (network === 'mainnet') ? import.meta.env.VITE_MEMPOOL_EXPLORER_MAINNET : import.meta.env.VITE_MEMPOOL_EXPLORER_TESTNET;
  const response = await fetch(url + '/address/' + address);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error('Address not found - is the network correct?');
}

export async function fetchUTXOs(network:string, address:string) {
  const url = (network === 'mainnet') ? import.meta.env.VITE_MEMPOOL_EXPLORER_MAINNET : import.meta.env.VITE_MEMPOOL_EXPLORER_TESTNET;
  const response = await fetch(url + '/address/' + address + '/utxo');
  if (response.status === 200) {
    const utxos = await response.json();
    return utxos;
  }
  throw new Error('Bitcoin address not know - is the network correct?');
}

export function maxCommit(utxos:any) {
  const summ = utxos?.map((item:{value:number}) => item.value).reduce((prev:number, curr:number) => prev + curr, 0);
  return summ || 0;
}

export async function fetchFeeEstimate(network:string) {
  const url = (network === 'mainnet') ? import.meta.env.VITE_BLOCKCYPHER_EXPLORER_MAINNET : import.meta.env.VITE_BLOCKCYPHER_EXPLORER_TESTNET;
  const response = await fetch(url);
  const info = await response.json();
  return info
}


