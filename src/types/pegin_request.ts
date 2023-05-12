export type PeginRequestI = {
  _id?:string;
  status: number;
  tries?: number;
	updated?: number;
  amount: number;
  mode: string,
  requestType:string;
  wallet?: string,
  btcTxid?: string;
  senderAddress?: string;
  fromBtcAddress: string;
  stacksAddress: string;
  sbtcWalletAddress: string;
  commitTxScript?: PeginScriptI;
  vout?: VoutI;
}
export type PeginScriptI = {
  address?: string;
  script: string|Uint8Array|undefined;
  paymentType: string;
  redeemScript?: string|Uint8Array;
  witnessScript?: string|Uint8Array;
  wsh?:string;
  leaves?:any;
  tapInternalKey?:string|Uint8Array;
  tapLeafScript?:any;
  tapMerkleRoot?:string|Uint8Array;
  tweakedPubkey?:string|Uint8Array;
}
export type VoutI = {
  scriptpubkey: string;
  scriptpubkey_asm: string;
  scriptpubkey_type: string;
  scriptpubkey_address: string;
  value: number;
}
export type UtxoI = {
  txid: string;
  vout: string;
  status: {
    confirmed: boolean;
    block_height: number;
    block_hash: string;
    block_time: number;
  },
  value: number;
  tx: string;
}

export type WshI = {
  type: string;
  script: Uint8Array;
}
export type PegInData = {
	requestData?: PeginRequestI;
	confirmations?: number;
	burnHeight?: number;
	stacksAddress?: string;
	sbtcWalletAddress: string;
	amount: number,
	revealFee: number;
};

export type TestKeysI = {
  reveal: string;
  revealPub: Uint8Array;
  revealPrv: string;
  reclaim: string;
  reclaimPub: Uint8Array;
  reclaimPrv: string;
};

