import type { BridgeTransactionType, SbtcContractDataType, AddressObject, ExchangeRate, AuthorisationDataType, DepositPayloadUIType, WithdrawPayloadUIType } from 'sbtc-bridge-lib' 

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
  revealFeeWithGas: number;
  payloadDepositData: DepositPayloadUIType;
  payloadWithdrawData: WithdrawPayloadUIType;
};
export const defaultSbtcConfig:SbtcConfig = {
  pegIn: true,
  loggedIn: false,
  sigData: undefined,
  sbtcContractData: {} as SbtcContractDataType,
  userSettings: {
    useOpDrop: false,
    debugMode: false,
    currency: {
      cryptoFirst: false,
      myFiatCurrency: {
        _id: "nan",
        currency: "USD",
        fifteen: 0,
        last: 0,
        buy: 0,
        sell: 0,
        symbol: "$",
        name: "USD"
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


export type SbtcUserSettingI = {
  peggingIn: boolean;
  useOpDrop: boolean;
  debugMode: boolean;
  testAddress?: string;
  currency: {
    cryptoFirst: boolean;
    myFiatCurrency: ExchangeRate;
    denomination: string;
  }
}