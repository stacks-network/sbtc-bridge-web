import type { PegInTransactionI } from "$lib/domain/PegInTransaction";
import type { PegOutTransactionI } from "$lib/domain/PegOutTransaction";

export type SbtcBalance = {address:string,balance:number};
export type SbtcConfig = {
  pegInTransaction?:PegInTransactionI;
  pegOutTransaction?:PegOutTransactionI;
  sbtcContractData:any;
  balance: SbtcBalance;
  stxAddress?: string;
  sigData:any;
  pegIn:boolean;
};