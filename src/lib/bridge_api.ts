import type { PeginRequestI } from '$types/pegin_request';
import { CONFIG } from '$lib/config';

function addNetSelector (path:string) {
  if (CONFIG.VITE_NETWORK === 'testnet' || CONFIG.VITE_NETWORK === 'devnet') {
    return path.replace('bridge-api', 'bridge-api/testnet');
  }
  else {
    return path.replace('bridge-api', 'bridge-api/mainnet');
  }
}

export async function sendRawTxDirectMempool(hex:string) {
  //const url = CONFIG.VITE_MEMPOOL_EXPLORER + '/tx';
  const url = addNetSelector(CONFIG.VITE_BLOCKCYPHER_EXPLORER + '/txs/push');
  console.log('sendRawTx:mempoolUrl: ', url)
  const response = await fetch(url, {
    method: 'POST',
    //headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({tx: hex})
  });
  //if (response.status !== 200) throw new Error('Mempool error: ' + response.status + ' : ' + response.statusText);
  try {
    return await response.json();
  } catch (err) {
    try {
      console.log(err)
      return await response.text();
    } catch (err1) {
      console.log(err1)
    }
  }
  return 'success';
}

export async function sendRawTransaction(tx: { hex: string; }) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/tx/sendrawtx');
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tx)
  });

  if (response.status !== 200) {
    throw new Error('Bitcoin tx send error.');
  }
  try {
    return await response.text();
  } catch (err) {
    return await response.json();
  }
}

export async function fetchBurnBlockCount() {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/blocks/count');
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error('Bitcoin address not known - is the network correct?');
  }
  const txs = await response.json();
  return txs;
}

export async function fetchWalletProcessPsbt(psbt: { hex: string; }) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/wallet/walletprocesspsbt');
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(psbt)
  });
  if (response.status !== 200) {
    throw new Error('Bitcoin address not known - is the network correct?');
  }
  const signedPsbt = await response.json();
  return signedPsbt;
}

export async function savePaymentRequest(peginRequest:PeginRequestI) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/payments/request');
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(peginRequest)
  });
  if (response.status !== 200) {
    throw new Error('Bitcoin address not known - is the network correct?');
  }
  const signedPsbt = await response.json();
  return signedPsbt;
}
export async function fetchMyWrapTransactions(stxAddress:string):Promise<Array<PeginRequestI>> {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/payments/address/' + stxAddress);
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error('Bitcoin address not known - is the network correct?');
  }
  const pegins = await response.json();
  return pegins;
}

export async function fetchCurrentFeeRates() {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/blocks/fee-estimate');
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error('Bitcoin address not known - is the network correct?');
  }
  const txs = await response.json();
  return txs;
}

export async function fetchTransaction(txid:string) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/tx/' + txid);
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error('Bitcoin address not known - is the network correct?');
  }
  const txs = await response.json();
  return txs;
}

export async function fetchAddressTransactions(address:string) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/wallet/address/' + address + '/txs');
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error('Bitcoin address not known - is the network correct?');
  }
  const txs = await response.json();
  return txs;
}

export async function fetchUtxoSet(address:string) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/wallet/address/' + address + '/utxos?verbose=true');
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error('Bitcoin address not known - is the network correct?');
  }
  const txs = await response.json();
  return txs;
}

export async function fetchSbtcEvents() {
  try {
    const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/events/0');
    const response = await fetch(path);
    const result = await response.json();
    return result;
  } catch (err) {
    return [];
  }
}

export async function fetchSbtcWalletAddress() {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/wallet-address');
  const response = await fetch(path);
  const result = await response.text();
  return result;
}

export async function fetchSbtcData() {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/data');
  const response = await fetch(path);
  const result = await response.text();
  return result;
}

export async function fetchUserSbtcBalance(stxAddress:string) {
  try {
    const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/address/' + stxAddress + '/balance');
    const response = await fetch(path);
    const result = await response.json();
    return (result);
  } catch (err) {
    return { balance: 0 };
  }
}