export type SbtcContractDataI = {
    coordinator?: { addr: { value: string }, key:string };
    sbtcWalletAddress: string;
    numKeys?: number;
    numParties?: number;
    tradingHalted?: boolean;
    tokenUri?: string;
    threshold?: number;
    totalSupply?: number;
    decimals?: number;
    name?: string;
    burnHeight?: number;
    addressValidation?: AddressValidationI;
  }
  export type AddressValidationI = {
    isvalid: boolean;
    address: string;
    scriptPubKey: string;
    isscript: boolean;
    iswitness: boolean;
    "witness_version": number;
    "witness_program": string;
}
