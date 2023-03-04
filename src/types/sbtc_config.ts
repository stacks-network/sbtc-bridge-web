import type { UTXO } from "$types/utxo";
import type { AddressDetails } from "$types/address_details";
import type { PegInTransactionI } from "$lib/domain/PegInTransaction";
import type { PegOutTransactionI } from "$lib/domain/PegOutTransaction";

export type SbtcBalance = {address:string,balance:number};
export type SbtcConfig = {
  pegInTransaction:PegInTransactionI;
  pegOutTransaction:PegOutTransactionI;
  sbtcContractData:any;
  balance: SbtcBalance;
  stxAddress?: string;
  pegOutStxAddress?:string;
  fromBtcAddress?:string;
  addressDetails:AddressDetails,
  sigData:any;
  utxos: Array<UTXO>;
  feeInfo: {low_fee_per_kb:number, medium_fee_per_kb:number, high_fee_per_kb:number};
  feeCalc: { 
    pegInFeeCalc: {
      feeToApply:number;
      pegInAmount: number;
      high: { 
        change: number;
        fee: number;
      }
      medium: { 
        change: number;
        fee: number;
      }
      low: { 
        change: number;
        fee: number;
      }
    };
    pegOutFeeCalc: {
      feeToApply:number;
      pegOutAmount: number;
      DUST_AMOUNT: number;
      high: { 
        change: number;
        fee: number;
      };
      medium: { 
        change: number;
        fee: number;
      };
      low: { 
        change: number;
        fee: number;
      };
    };
  };
  pegIn:boolean;
};