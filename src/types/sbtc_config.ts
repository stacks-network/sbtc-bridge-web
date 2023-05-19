import type { PegInTransactionI } from "$lib/domain/PegInTransaction";
import type { PegOutTransactionI } from "$lib/domain/PegOutTransaction";
import type { PeginRequestI } from 'sbtc-bridge-lib/src/index' 
import type { SbtcContractDataI } from 'sbtc-bridge-lib/src/index';
import type { SbtcBalance } from 'sbtc-bridge-lib/src/index' 

export type SbtcConfig = {
  sbtcWalletAddressInfo?: any;
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
};

export type SbtcUserSettingI = {
  useOpDrop: boolean;
  debugMode: boolean;
  testAddresses: boolean;
}