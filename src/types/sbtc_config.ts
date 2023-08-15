import type { PeginRequestI, SbtcContractDataI, AddressObject, KeySet, ExchangeRate } from 'sbtc-bridge-lib' 

export type SbtcConfig = {
  exchangeRates?: Array<ExchangeRate>;
  sbtcWalletAddressInfo?: any;
  pegInMongoId?: string;
  pegOutMongoId?: string;
  btcFeeRates?: any;
  loggedIn: boolean;
  keySets: { [key: string]: AddressObject; };
  stxAddress?: string;
  sigData:any;
  pegIn:boolean;
  peginRequest?:PeginRequestI;
  userSettings:SbtcUserSettingI;
  sbtcContractData: SbtcContractDataI;
  keys: KeySet;
  revealFeeWithGas: number;
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