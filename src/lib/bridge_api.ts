
export async function sendRawTransaction(tx: { hex: string; }) {
  const path = import.meta.env.VITE_BRIDGE_API + '/btc/tx/sendrawtx';
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

export async function fetchCurrentFeeRates() {
  const path = import.meta.env.VITE_BRIDGE_API + '/btc/blocks/fee-estimate';
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error('Bitcoin address not known - is the network correct?');
  }
  const txs = await response.json();
  return txs;
}

export async function fetchUtxoSet(address:string) {
  const path = import.meta.env.VITE_BRIDGE_API + '/btc/wallet/address/' + address + '/utxos';
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error('Bitcoin address not known - is the network correct?');
  }
  const txs = await response.json();
  return txs;
}

export async function fetchSbtcEvents() {
  try {
    const path = import.meta.env.VITE_BRIDGE_API + '/sbtc/events/0';
    const response = await fetch(path);
    const result = await response.json();
    return result;
  } catch (err) {
    return [];
  }
}

export async function fetchSbtcWalletAddress() {
  const path = import.meta.env.VITE_BRIDGE_API + '/sbtc/wallet-address';
  const response = await fetch(path);
  const result = await response.text();
  return result;
}

export async function fetchSbtcData() {
  const path = import.meta.env.VITE_BRIDGE_API + '/sbtc/data';
  const response = await fetch(path);
  const result = await response.text();
  return result;
}

export async function fetchUserSbtcBalance(stxAddress:string) {
  try {
    const path = import.meta.env.VITE_BRIDGE_API + '/sbtc/address/' + stxAddress + '/balance';
    const response = await fetch(path);
    const result = await response.json();
    return (result);
  } catch (err) {
    return 0;
  }
}