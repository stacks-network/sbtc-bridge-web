export type UTXO = {
  txid: string;
  vout: number;
  fullout: {
    scriptpubkey:string;
    scriptpubkey_address:string;
    scriptpubkey_asm:string;
    scriptpubkey_type:string;
    value:number;
  };
  tx: any;
  status: {
    confirmed: boolean;
    block_height: number;
    block_hash: string;
    block_time: number;
  };
  value: number;
};
