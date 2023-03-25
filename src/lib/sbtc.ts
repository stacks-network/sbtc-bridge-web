/**
 * sbtc - interact with Stacks Blockchain to read sbtc contract info
 */
import type { SbtcConfig } from '$types/SbtcConfig';
import { bytesToHex } from "@stacks/common";

export const defaultSbtcConfig:SbtcConfig = {
  pegIn: true,
  loggedIn: false,
  balance: { balance: 0, address: '' },
  sigData: undefined,
  sbtcContractData: undefined,
  pegInTransaction: undefined,
  pegOutTransaction: undefined
}

export function opDropASM(
  data: Uint8Array,
  recipientPublicKey: Uint8Array,
  ) {
  return `${bytesToHex(data)} OP_DROP
  OP_DUP OP_HASH160 ${bytesToHex(recipientPublicKey)} OP_EQUALVERIFY OP_CHECKSIG`
    .replace(/\s+/g, ' ')
    .trim();
}
