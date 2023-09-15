import type { BridgeTransactionType, SbtcContractDataType, AddressObject, KeySet, ExchangeRate } from 'sbtc-bridge-lib' 

export type AuthorisationDataType = {
  signature: string;
  publicKey: string;
  stxAddress:string;
}
export type SbtcConfig = {
  exchangeRates?: Array<ExchangeRate>;
  pegInMongoId?: string;
  pegOutMongoId?: string;
  btcFeeRates?: any;
  loggedIn: boolean;
  authHeader?:AuthorisationDataType|undefined;
  keySets: { [key: string]: AddressObject; };
  stxAddress?: string;
  sigData:any;
  pegIn:boolean;
  peginRequest?:BridgeTransactionType;
  userSettings:SbtcUserSettingI;
  sbtcContractData: SbtcContractDataType;
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