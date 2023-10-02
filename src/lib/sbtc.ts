/**
 * sbtc - interact with Stacks Blockchain to read sbtc contract info
 */
import type { SbtcConfig } from '$types/sbtc_config';
import type { SbtcContractDataType } from 'sbtc-bridge-lib';
import type { KeySet } from 'sbtc-bridge-lib' 
import { CONFIG } from '$lib/config';
import * as btc from '@scure/btc-signer';
import { hex } from '@scure/base';
import { sendRawTransaction, sendRawTxDirectBlockCypher } from './bridge_api';

export let rates:Array<any>;

function finaliseTransaction(psbtHex:string) {
  try {
    const tx = btc.Transaction.fromPSBT(hex.decode(psbtHex));
    tx.finalize();
    return hex.encode(tx.extract());
  } catch (err:any) {
    console.log('finalize error: ', err)
    let errorReason = 'Unable to create the transaction - this can happen if your wallet is connected to a different account to the one your logged in with. Try hitting the \'back\` button, switching account in the wallet and trying again?';
    errorReason += '<br/>' + err.message;
    throw new Error(errorReason);
  }
}

export async function broadcastTransaction(psbtHex:string):Promise<any|undefined> {
  const txHex = finaliseTransaction(psbtHex)
  let resp
  try {
    resp = await sendRawTxDirectBlockCypher(txHex);
  } catch(err:any) {
    console.log(err)
  }
  if (!resp || resp.error) {
    resp = await sendRawTransaction({hex: txHex});
  }
  if (resp && resp.tx) {
    return resp.tx;
  } else {
    const errorReason = 'Unknown response from transaction broadcast - <a href="https://github.com/Stacks-Builders/sbtc-bridge-web/issues" target="_blank">please report ths error</a>.'
    throw new Error(errorReason)
  }
  console.log('sendRawTxDirectBlockCypher: ', resp);
}

export function openWebSocket() {
  // https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
  const socket = new WebSocket(CONFIG.VITE_BRIDGE_WS)
  socket.binaryType = "arraybuffer";

  // connected
  socket.addEventListener('open', function(event) {
    console.log('connected to ws server', event)
  })
  socket.addEventListener('message', async function(event) {
    rates =  JSON.parse(event.data)
    console.log('message', rates)
  })
}

export const defaultSbtcConfig:SbtcConfig = {
  pegIn: true,
  loggedIn: false,
  sigData: undefined,
  sbtcContractData: {} as SbtcContractDataType,
  userSettings: {
    useOpDrop: false,
    debugMode: false,
    testAddresses: false,
    currency: {
      cryptoFirst: false,
      myFiatCurrency: {
        _id: "nan",
        currency: "EUR",
        fifteen: 0,
        last: 0,
        buy: 0,
        sell: 0,
        symbol: "€",
        name: "Euro"
      },
      denomination: 'bitcoin'
    },
    peggingIn: false
  },
  keySets: {},
  revealFeeWithGas: 0,
  payloadDepositData: {
    principal: '',
    bitcoinAddress: '',
    amountSats: 0,
    sbtcWalletPublicKey: '',
    reclaimPublicKey: '',
    paymentPublicKey: ''
  },
  payloadWithdrawData: {
    principal: '',
    bitcoinAddress: '',
    signature: undefined,
    amountSats: 0,
    sbtcWalletPublicKey: '',
    reclaimPublicKey: '',
    paymentPublicKey: ''
  }
}

