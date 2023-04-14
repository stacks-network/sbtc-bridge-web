export type PeginRequestI = {
  status: number;
	updated?: number;
  tries?: number;
  btcTxid?: string;
  fromBtcAddress: string;
  stacksAddress: string;
  sbtcWalletAddress: string;
  timeBasedPegin?: PeginScriptI;
  vout?: VoutI;
}
export type PeginScriptI = {
    paymentType: string;
    address?: string;
    script: string;
    redeemScript?: string;
    witnessScript?: string;
    wsh?:string;
  }
export type VoutI = {
  scriptpubkey: string;
  scriptpubkey_asm: string;
  scriptpubkey_type: string;
  scriptpubkey_address: string;
  value: number;
}
export type WshI = {
  type: string;
  script: Uint8Array;
}