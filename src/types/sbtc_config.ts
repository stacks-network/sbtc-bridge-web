import type { PegInTransactionI } from "$lib/domain/PegInTransaction";
import type { PegOutTransactionI } from "$lib/domain/PegOutTransaction";
import type { PeginRequestI, SbtcContractDataI, SbtcBalance, KeySet } from 'sbtc-bridge-lib' 

export type SbtcConfig = {
  sbtcWalletAddressInfo?: any;
  pegInMongoId?: string;
  btcFeeRates?: any;
  loggedIn: boolean;
  pegInTransaction?:PegInTransactionI;
  pegOutTransaction?:PegOutTransactionI;
  balance: SbtcBalance;
  stxAddress?: string;
  sigData:any;
  pegIn:boolean;
  peginRequest:PeginRequestI;
  userSettings:SbtcUserSettingI;
  sbtcContractData: SbtcContractDataI;
  keys: KeySet;
};

export type SbtcUserSettingI = {
  useOpDrop: boolean;
  debugMode: boolean;
  testAddresses: boolean;
}