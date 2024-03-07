import { CONFIG } from '$lib/config';
import type { UIObject } from '$types/sbtc_ui_types';
import type { AddressObject } from 'sbtc-bridge-lib';
import { headers } from './bridge_api';
import * as btc from '@scure/btc-signer';
import { hex } from '@scure/base';
import type { Transaction } from '@scure/btc-signer' 
import type { RevealerTransaction } from '$types/revealer_types';

/**
 * /revealer-api/v1/transaction routes
 */
export async function connectRevealerTransactionPayment(commitAddress:string, txId:string):Promise<RevealerTransaction|undefined> {
  const path = CONFIG.VITE_REVEALER_API + '/transactions/connect-revealer-transaction/' + commitAddress + '/' + txId;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}
export async function checkRevealerTransactionPayment(commitAddress:string):Promise<RevealerTransaction|undefined> {
  const path = CONFIG.VITE_REVEALER_API + '/transactions/check-revealer-transaction/' + commitAddress;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}
export async function cancelRevealerTransactionPayment(commitAddress:string):Promise<RevealerTransaction|undefined> {
  const path = CONFIG.VITE_REVEALER_API + '/transactions/cancel-revealer-transaction/' + commitAddress;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}
export async function fetchRevealerTransactions(page:number, limit:number) {
  const path = CONFIG.VITE_REVEALER_API + '/transactions/get-revealer-transactions/' + page + '/' + limit;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}
export async function fetchRevealerTransactionsByCommitAddress(address:string) {
  if (!address || address.length < 5) return;
  const path = CONFIG.VITE_REVEALER_API + '/transactions/get-revealer-transactions-by-commit-address/' + address;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}
export async function fetchRevealerTransactionsByTxId(txId:string) {
  const path = CONFIG.VITE_REVEALER_API + '/transactions/get-revealer-transactions-by-txid/' + txId;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}
export async function fetchRevealerTransactionsByOriginator(address:string, page:number, limit:number) {
  if (!address || address.length < 5) return;
  const path = CONFIG.VITE_REVEALER_API + '/transactions/get-revealer-transactions-by-originator/' + address + '/' + page + '/' + limit;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}

export async function fetchRevealerTransactionsPendingByOriginator(address:string) {
  if (!address || address.length < 5) return;
  const path = CONFIG.VITE_REVEALER_API + '/transactions/get-revealer-transactions-pending-by-originator/' + address;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}



/**
 * /revealer-api/v1/sbtc routes
 */
export async function fetchUiInit():Promise<UIObject|undefined> {
  const path = CONFIG.VITE_REVEALER_API + '/sbtc/init-ui';
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}

export async function fetchBitcoinTransaction(txId:string):Promise<any> {
  const path = CONFIG.VITE_REVEALER_API + '/sbtc/bitcoin/' + txId;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}

export async function fetchBitcoinBlock(blockhash:string, verbosity:number) {
  const path = CONFIG.VITE_REVEALER_API + '/sbtc/bitcoin/block/' + blockhash + '/' + verbosity;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}

export async function fetchUserBalances(adrds:AddressObject) {
  const path = CONFIG.VITE_REVEALER_API + '/sbtc/address/balances/' + adrds.stxAddress + '/' + adrds.cardinal + '/' + adrds.ordinal;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}

/**
 * /revealer-api/v1/op_return routes
 */
export async function getPsbtForDeposit(originator:string, recipient:string, amountSats:number, paymentPublicKey:string, paymentAddress:string, feeMultiplier:number) {
  const path = CONFIG.VITE_REVEALER_API + '/op_return/get-psbt-for-deposit';
  try {
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'originator': originator
      },
      body: JSON.stringify({
        originator,
        recipient,
        amountSats,
        paymentPublicKey,
        paymentAddress,
        feeMultiplier,
      })
    });
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}

export async function getAddressForOpDropDeposit(originator:string, recipient:string, amountSats:number, reclaimPublicKey:string, paymentAddress:string) {
  const path = CONFIG.VITE_REVEALER_API + '/op_drop/get-commitment-address';
  try {
    const response = await fetch(path, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'originator': originator
      },
      body: JSON.stringify({
        originator,
        recipient,
        amountSats,
        reclaimPublicKey,
        paymentAddress
      })
    });
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}

export async function getPsbtForWithdrawal(originator:string, withdrawalAddress:string, signature:string, amountSats:number, paymentPublicKey:string, paymentAddress:string, feeMultiplier:number) {
  const path = CONFIG.VITE_REVEALER_API + '/op_return/get-psbt-for-withdrawal';
  try {
    const response = await fetch(path, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'originator': originator
      },
      body: JSON.stringify({
        originator,
        recipient: withdrawalAddress,
        signature,
        amountSats,
        paymentPublicKey,
        paymentAddress,
        feeMultiplier,
      })
    });
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}

export async function broadcastDeposit(txIn: { recipient:string, amountSats:number, paymentPublicKey:string, signedPsbtHex: string; maxFeeRate: number|undefined; }) {
  if (!txIn.maxFeeRate) txIn.maxFeeRate = 0
  try {
    const tx:Transaction = finaliseTransaction(txIn.signedPsbtHex)
    const signedAndFinalPsbt = hex.encode(tx.extract());
    txIn.signedPsbtHex = signedAndFinalPsbt;
  } catch (err:any) {
    const errorReason = '<p>Unable to finalise transaction</p><p>Check you are connected to the same account as your web wallet - then click back and try again.</p>'
    throw new Error(errorReason)
  }
  const path = CONFIG.VITE_REVEALER_API + '/op_return/broadcast-deposit'
  const response = await fetch(path, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(txIn)
  });
  if (response.status !== 200) {
    const res = await response.text();
    console.log('broadcastDeposit: ' + res)
    if (res.indexOf('min relay fee not met') > -1) {
      let relayError:string|undefined;
      try {
        const jsonM = res.split('min relay fee not met, ')[1]
        relayError = jsonM.split('\\"')[0]
      } catch(err:any) {  
        //
      }
      throw new Error('<p>Minimum relay fee not met - try increasing the fee. ' + (relayError || '') + '.</p>')
    }
    throw new Error('<p>Unable to broadcast transaction</p><p>Wait for previous transactions to confirm before sending.</p>')
  }
  const res = await response.json();
  return res;
}

export async function clientBroadcastDeposit(txIn: { recipient:string, amountSats:number, paymentPublicKey:string, txId:string; }) {
  const path = CONFIG.VITE_REVEALER_API + '/op_return/update-deposit'
  const response = await fetch(path, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(txIn)
  });
  const res = await response.json();
  return res;
}

function finaliseTransaction(psbtHex:string) {
  try {
    const tx = btc.Transaction.fromPSBT(hex.decode(psbtHex));
    tx.finalize();
    return tx;
  } catch (err:any) {
    console.log('finalize error: ', err)
    const errorReason = 'Unable to create the transaction - this can happen if your wallet is connected to a different account to the one your logged in with. Try hitting the "back" button, switching account in the wallet and trying again?';
    throw new Error(errorReason);
  }
}


/**
 * /revealer-api/v1/payload routes
 */
export async function payloadParseTransaction(txid:string):Promise<any> {
  const path = CONFIG.VITE_REVEALER_API + '/payload/parse/tx/' + txid;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}

export async function payloadParseDeposit(data:string):Promise<any> {
  const path = CONFIG.VITE_REVEALER_API + '/payload/parse/deposit/' + data;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}

export async function payloadParseWithdrawal(data:string, bitcoinAddress:string):Promise<any> {
  const path = CONFIG.VITE_REVEALER_API + '/payload/parse/withdrawal/' + data + '/' + bitcoinAddress;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}

