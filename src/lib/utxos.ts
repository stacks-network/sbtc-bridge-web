/**
 * utxos - interact with Bitcoin Blockchain to read utxo info
 */
//import TrezorConnect from '@trezor/connect-web';

export async function fetchAddressDetails(network:string, address:string) {
  const url = (network === 'mainnet') ? import.meta.env.VITE_MEMPOOL_EXPLORER_MAINNET : import.meta.env.VITE_MEMPOOL_EXPLORER_TESTNET;
  const response = await fetch(url + '/address/' + address);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error('Address not found - is the network correct?');
}

export async function fetchUTXOs(network:string, address:string, txs:any) {
  const url = (network === 'mainnet') ? import.meta.env.VITE_MEMPOOL_EXPLORER_MAINNET : import.meta.env.VITE_MEMPOOL_EXPLORER_TESTNET;
  const response = await fetch(url + '/address/' + address + '/utxo');
  if (response.status === 200) {
    const utxos = await response.json();
    if (txs && txs.length > 0) {
      utxos.forEach((utxo:any) => {
        const tx = txs.find((tx: { txid: any; }) => tx.txid === utxo.txid)
        if (tx) utxo.fullout = tx.vout.find((o:any) => o.value === utxo.value); 
      })
    }
    return utxos;
  }
  throw new Error('Bitcoin address not know - is the network correct?');
}

export async function fetchTxs(network:string, address:string) {
  const url = (network === 'mainnet') ? import.meta.env.VITE_MEMPOOL_EXPLORER_MAINNET : import.meta.env.VITE_MEMPOOL_EXPLORER_TESTNET;
  const response = await fetch(url + '/address/' + address + '/txs');
  if (response.status === 200) {
    const txs = await response.json();
    return txs;
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


