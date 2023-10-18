/**
 * sbtc - interact with Stacks Blockchain to read sbtc contract info
 */
import type { SbtcConfig } from '$types/sbtc_config';
import type { SbtcContractDataType } from 'sbtc-bridge-lib';
import { CONFIG } from '$lib/config';
import * as btc from '@scure/btc-signer';
import { hex } from '@scure/base';
import { sendRawTransaction } from './bridge_api';
import type { Transaction } from '@scure/btc-signer' 

export let rates:Array<any>;

function finaliseTransaction(psbtHex:string) {
  try {
    const tx = btc.Transaction.fromPSBT(hex.decode(psbtHex));
    tx.finalize();
    return tx;
  } catch (err:any) {
    console.log('finalize error: ', err)
    let errorReason = 'Unable to create the transaction - this can happen if your wallet is connected to a different account to the one your logged in with. Try hitting the \'back\` button, switching account in the wallet and trying again?';
    errorReason += '<br/>' + err.message;
    throw new Error(errorReason);
  }
}

export async function broadcastTransaction(psbtHex:string):Promise<string> {
  const tx:Transaction = finaliseTransaction(psbtHex)
  const txHex = hex.encode(tx.extract());
	const resp = await sendRawTransaction({hex: txHex, maxFeeRate: 0 });
  console.log('resp.result:tx.id: ' + tx.id)
	if (resp && resp.tx) {
    console.log()
		return tx.id;
	} else if (resp.result && typeof resp.result === 'string') { // Transaction already in block chain
    console.log('resp.result: ' + resp.result)
		return tx.id;
	} else if (resp.error.code === -27) { // Transaction already in block chain
		return tx.id;
	} else {
    let message = 'Unable to broadcast'
    if (resp.error) message = 'Unable to broadcast: ' + resp.error.code + ' : ' + resp.error.message
		throw new Error(message);
	}
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

