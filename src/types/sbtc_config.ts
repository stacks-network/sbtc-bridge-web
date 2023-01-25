import type { UTXO } from "$types/utxo";
import type { AddressDetails } from "$types/address_details";

export type SbtcConfig = {
  network: string;
  pegInAmount: number;
  pegInChangeAmount: number;
  stxAddress?: string;
  sbtcWalletAddress?: string;
  fromBtcAddress?:string;
  addressDetails:AddressDetails,
  utxos: Array<UTXO>;
};