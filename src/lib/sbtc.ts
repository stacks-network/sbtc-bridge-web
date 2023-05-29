/**
 * sbtc - interact with Stacks Blockchain to read sbtc contract info
 */
import type { SbtcConfig } from '$types/sbtc_config';
import type { SbtcContractDataI } from 'sbtc-bridge-lib';
import type { KeySet } from 'sbtc-bridge-lib' 

export const defaultSbtcConfig:SbtcConfig = {
  pegIn: true,
  loggedIn: false,
  balance: { balance: 0, address: '' },
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
  peginRequest: {
    _id: undefined,
    originator: '',
    status: 0,
    tries: undefined,
    updated: undefined,
    amount: 0,
    mode: '',
    requestType: '',
    wallet: undefined,
    btcTxid: undefined,
    fromBtcAddress: '',
    stacksAddress: '',
    sbtcWalletAddress: '',
    commitTxScript: undefined,
    vout: undefined
  }
}
