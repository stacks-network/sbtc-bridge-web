import type { CommitmentScriptDataType, PayloadType, VoutI } from "sbtc-bridge-lib";

export enum RevealerTxTypes {
	SBTC_DEPOSIT = 'SBTC_DEPOSIT',
	SBTC_WITHDRAWAL = 'SBTC_WITHDRAWAL',
}

export enum RevealerTxModes {
	OP_RETURN = 'OP_RETURN',
	OP_DROP = 'OP_DROP',
}

export enum CommitmentStatus {
	UNPAID = 0,
	PENDING = 1,
	PAID = 2,
	REVEALED = 3,
	RECLAIMED = 4,
}
export interface RevealerTransaction {
	_id?: string;
	txId: string;
	psbt?: string;
	originator: string;
	commitment?:CommitmentScriptDataType;
	eventData?:PayloadType;
	signed: boolean;
	recipient: string;
	amountSats: number;
	confirmations: number;
	created: number;
	updated: number;
	signature?: string;
	paymentPublicKey: string;
	paymentAddress: string;
	status: CommitmentStatus;
	mode: RevealerTxModes;
	type: RevealerTxTypes;
	reclaimTxId?: string;
	revealTxId?: string;
	blockHeight:number;
}

export type ConfigI = {
	mongoDbUrl: string; 
	mongoUser: string; 
	mongoPwd: string; 
	mongoDbName: string; 
	btcNode: string; 
	btcRpcUser: string; 
	btcRpcPwd: string; 
	btcSchnorrReveal: string; 
	btcSchnorrReclaim: string; 
	btcSchnorrOracle: string; 
	host: string;
	port: number;
	walletPath: string; 
	network: string; 
	stacksApi: string; 
	stacksExplorerUrl: string;
	bitcoinExplorerUrl: string; 
	mempoolUrl: string; 
	blockCypherUrl: string;
	publicAppName: string;
	publicAppVersion: string; 
	sbtcContractId: string;
	electrumUrl: string;
};
    
export type PubKeySet = {
	stxAddress: string;
	cardinal: string;
	ordinal: string;
	btcPubkeySegwit0?: string;
	btcPubkeySegwit1?: string;
  };
  
  export type SignerType = { publicKey: string, name: string }

  export interface SignRequestI {
	psbt: string;
	inputs: Array<number>;
  }

  export type PSBTHolder = {
	hexPSBT:string;
	b64PSBT:string;
	txFee?:number;
  }

  export type TaprootScriptType = {
	address: string;
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
  
  export type UTXO = {
	txid: string;
	vout: number;
	fullout?: {
	  scriptpubkey:string;
	  scriptpubkey_address:string;
	  scriptpubkey_asm:string;
	  scriptpubkey_type:string;
	  value:number;
	};
	tx: any;
	status: {
	  confirmed: boolean;
	  block_height?: number;
	  block_hash?: string;
	  block_time?: number;
	};
	value: number;
  };
  