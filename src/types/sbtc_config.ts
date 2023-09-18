import type { BridgeTransactionType, SbtcContractDataType, AddressObject, KeySet, ExchangeRate, DepositPayloadType, WithdrawalPayloadType } from 'sbtc-bridge-lib' 

export type AuthorisationDataType = {
  signature?: string|undefined;
  publicKey?: string|undefined;
  stxAddress?:string|undefined;
  amountSats:number;
}
export type DepositPayloadUIType = {
  bitcoinAddress?:string|undefined;
  signature?: string|undefined;
  principal?:string|undefined;
  amountSats:number;
}
export type WithdrawalPayloadUIType = {
  bitcoinAddress?:string|undefined;
  signature?: string|undefined;
  publicKey?: string|undefined;
  principal?:string|undefined;
  amountSats:number;
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
  payloadDepositData: DepositPayloadUIType;
  payloadWithdrawData: WithdrawalPayloadUIType;
};

export type SbtcUserSettingI = {
  peggingIn: boolean;
  useOpDrop: boolean;
  debugMode: boolean;
  testAddresses: boolean;
  currency: {
    cryptoFirst: boolean;
    myFiatCurrency: ExchangeRate;
    denomination: string;
  }
}