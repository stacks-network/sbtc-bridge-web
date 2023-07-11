/**
 * sbtc - interact with Stacks Blockchain to read sbtc contract info
 */
import type { SbtcConfig } from '$types/sbtc_config';
import type { SbtcContractDataI } from 'sbtc-bridge-lib';
import type { KeySet } from 'sbtc-bridge-lib' 
import { CONFIG } from '$lib/config';

//let socket:WebSocket;

export function openWebSocket() {
			// https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
			const socket = new WebSocket(CONFIG.VITE_BRIDGE_WS)
			// connected
			socket.addEventListener('open', function(event) {
				console.log('connected to ws server')
			})
			socket.addEventListener('message', function(event) {
				console.log(event.data)
			})
}


export const defaultSbtcConfig:SbtcConfig = {
  pegIn: true,
  loggedIn: false,
  sigData: undefined,
  sbtcContractData: {} as SbtcContractDataI,
  pegInTransaction: undefined,
  pegOutTransaction: undefined,
  keys: {} as KeySet,
  userSettings: {
    useOpDrop: true,
    debugMode: false,
    testAddresses: false
  },
}

