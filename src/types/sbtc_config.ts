import type { PegInTransactionI } from "$lib/domain/PegInTransaction";
import type { PegOutTransactionI } from "$lib/domain/PegOutTransaction";
import type { ReclaimTransactionI } from "$lib/domain/ReclaimTransaction";
import type { PeginRequestI } from '$types/pegin_request';
import type { SbtcUserSettingI } from '$types/sbtc_user_settings';
import type { SbtcContractDataI } from '$types/sbtc_contract_data';

export type SbtcBalance = {
	cardinal?: string;
	ordinal?: string;
  address:string;
  balance:number;
};
export type SbtcConfig = {
  loggedIn: boolean;
  reclaimTransaction?:ReclaimTransactionI;
  pegInTransaction?:PegInTransactionI;
  pegOutTransaction?:PegOutTransactionI;
  balance: SbtcBalance;
  stxAddress?: string;
  sigData:any;
  pegIn:boolean;
  peginRequestState:number;
  peginRequest:PeginRequestI;
  userSettings:SbtcUserSettingI;
  sbtcContractData: SbtcContractDataI;
};