/**
 * sbtc - interact with Stacks Blockchain to read sbtc contract info
 */
import type { SbtcConfig } from '$types/sbtc_config';

export const defaultSbtcConfig:SbtcConfig = {
  pegIn: true,
  balance: { balance: 0, address: '' },
  sigData: undefined,
  sbtcContractData: undefined,
  pegInTransaction: undefined,
  pegOutTransaction: undefined
}
