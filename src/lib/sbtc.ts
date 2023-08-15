/**
 * sbtc - interact with Stacks Blockchain to read sbtc contract info
 */
import type { SbtcConfig } from '$types/sbtc_config';
import type { SbtcContractDataI } from 'sbtc-bridge-lib';
import type { KeySet } from 'sbtc-bridge-lib' 
import { CONFIG } from '$lib/config';
import * as btc from '@scure/btc-signer';

export let rates:Array<any>;

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
  sbtcContractData: {} as SbtcContractDataI,
  keys: {} as KeySet,
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
    }
  },
  keySets: {},
  revealFeeWithGas: 0
}

