import { CONFIG } from '$lib/config';
import type { UIObject } from '$types/sbtc_ui_types';
import type { AddressObject } from 'sbtc-bridge-lib';
import { headers } from './bridge_api';
import * as btc from '@scure/btc-signer';
import { hex } from '@scure/base';
import type { Transaction } from '@scure/btc-signer' 


/**
 * fetch stateless data needed in the UI;
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

export async function getPsbtForDeposit(recipient:string, amountSats:number, paymentPublicKey:string, paymentAddress:string, feeMultiplier:number) {
  const path = CONFIG.VITE_REVEALER_API + '/op_return/get-psbt-for-deposit/' + recipient + '/' + amountSats + '/' + paymentPublicKey + '/' + paymentAddress + '/' + feeMultiplier;
  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch(err) {
    return undefined;
  }
}

export async function getPsbtForWithdrawal(withdrawalAddress:string, signature:string, amountSats:number, paymentPublicKey:string, paymentAddress:string, feeMultiplier:number) {
  const path = CONFIG.VITE_REVEALER_API + '/op_return/get-psbt-for-withdrawal/' + withdrawalAddress + '/' + signature + '/' + amountSats + '/' + paymentPublicKey + '/' + paymentAddress + '/' + feeMultiplier;
  try {
    const response = await fetch(path);
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
  const path = CONFIG.VITE_REVEALER_API + '/op_return/client-broadcast-deposit'
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
