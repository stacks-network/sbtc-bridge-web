
export async function fetchCurrentFeeRates() {
  const path = import.meta.env.VITE_BRIDGE_API + '/btc/blocks/fee-estimate';
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error('Bitcoin address not know - is the network correct?');
  }
  const txs = await response.json();
  return txs;
}

export async function fetchUtxoSet(address:string) {
  const path = import.meta.env.VITE_BRIDGE_API + '/btc/wallet/address/' + address + '/utxos';
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error('Bitcoin address not know - is the network correct?');
  }
  const txs = await response.json();
  return txs;
}

export async function fetchSbtcEvents() {
  try {
    const path = import.meta.env.VITE_BRIDGE_API + '/sbtc/events';
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
    return Number(result.balance);
  } catch (err) {
    return 0;
  }
}

/**
export async function readTx(txid:string) {
  const url = import.meta.env.VITE_MEMPOOL_EXPLORER + '/tx/' + txid;
  const response = await fetch(url);
  const result = await response.json();
  let error = '';
  try {
    return decodePegInOutputs(result.vout);
  } catch (err:any) {
    error = err.message;
  }
  throw new Error(error);
}

function decodePegInOutputs(outputs:any) {
  if (!outputs || outputs.length < 2) throw new Error('Incorrect number of outputs for a peg in.');
  const outZeroType = outputs[0].scriptpubkey_type.toLowerCase();
  if (outZeroType !== 'op_return') throw new Error('OP_RETURN in output 0 was expected but not found.');
  const stxAddress = hexToAscii(outputs[0].scriptpubkey).substring(2);
  try {
    decodeStacksAddress(stxAddress)
    const amountSats = (outputs[1]) ? outputs[1].value : 0;
    const sbtcWallet = outputs[1].scriptpubkey_address;
    return {
      type: 'pegin',
      stxAddress,
      amountSats,
      sbtcWallet
    }
  } catch (err) {
    return decodePegOutOutputs(outputs);
  }
}

function decodePegOutOutputs(outputs:any) {
  const pegOutValue = Number(hexToAscii(outputs[0].scriptpubkey).substring(2));
  //const amountSats = outputs[1].value;
  const sbtcWallet = outputs[1].scriptpubkey_address;
  return {
    type: 'pegout',
    stxAddress: '',
    amountSats: pegOutValue,
    sbtcWallet
  }
} 
*/