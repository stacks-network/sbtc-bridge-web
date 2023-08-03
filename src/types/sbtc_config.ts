import type { PegInTransactionI } from "$lib/domain/PegInTransaction";
import type { PegOutTransactionI } from "$lib/domain/PegOutTransaction";
import type { PeginRequestI, SbtcContractDataI, AddressObject, KeySet, ExchangeRate } from 'sbtc-bridge-lib' 

export type SbtcConfig = {
  exchangeRates?: Array<ExchangeRate>;
  sbtcWalletAddressInfo?: any;
  pegInMongoId?: string;
  pegOutMongoId?: string;
  btcFeeRates?: any;
  loggedIn: boolean;
  pegInTransaction?:PegInTransactionI;
  pegOutTransaction?:PegOutTransactionI;
  addressObject?: AddressObject;
  stxAddress?: string;
  sigData:any;
  pegIn:boolean;
  peginRequest?:PeginRequestI;
  userSettings:SbtcUserSettingI;
  sbtcContractData: SbtcContractDataI;
  keys: KeySet;
};

export type SbtcUserSettingI = {
  useOpDrop: boolean;
  debugMode: boolean;
  testAddresses: boolean;
  currency: {
    cryptoFirst: boolean;
    myFiatCurrency: ExchangeRate;
    denomination: string;
  }
}