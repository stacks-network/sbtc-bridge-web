import { hexToAscii } from '$lib/utils';
import { decodeStacksAddress } from "$lib/stacks";

//const TC1_TXID='6a54178bd2b94249d49199588ea5cbb52fb03a2abf065eef9eb511c6497ddd4f';

export async function readTx(txid:string, replace:boolean) {
  //if (replace) txid = TC1_TXID
  const path = import.meta.env.VITE_MEMPOOL_EXPLORER;
  const url = path + '/tx/' + txid;
  const response = await fetch(url);
  const val = await response.json();
  let error = '';
  try {
    return decodePegInOutputs(val.vout);
  } catch (err:any) {
    error = err.message;
  }
  throw new Error(error);
}

export async function fetchSbtcTransactions(address:string) {
  const url = import.meta.env.VITE_MEMPOOL_EXPLORER;
  const response = await fetch(url + '/address/' + address + '/txs');
  if (response.status !== 200) {
    throw new Error('Bitcoin address not know - is the network correct?');
  }
  const txs = await response.json();
  return txs;
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
  const amountSats = outputs[1].value;
  const sbtcWallet = outputs[1].scriptpubkey_address;
  return {
    type: 'pegout',
    stxAddress: '',
    amountSats: pegOutValue,
    sbtcWallet
  }
}