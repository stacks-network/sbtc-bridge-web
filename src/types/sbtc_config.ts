import type { PegInTransactionI } from "$lib/domain/PegInTransaction";
import type { PegOutTransactionI } from "$lib/domain/PegOutTransaction";
import type { ReclaimTransactionI } from "$lib/domain/ReclaimTransaction";
import type { PeginRequestI } from '$types/pegin_request';

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
  sbtcContractData:any;
  balance: SbtcBalance;
  stxAddress?: string;
  sigData:any;
  pegIn:boolean;
  peginRequestState:number;
  peginRequest:PeginRequestI;
};