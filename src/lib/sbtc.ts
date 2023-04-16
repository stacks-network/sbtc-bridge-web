/**
 * sbtc - interact with Stacks Blockchain to read sbtc contract info
 */
import type { SbtcConfig } from '$types/sbtc_config';
import type { SbtcContractDataI } from '$types/sbtc_contract_data';

export const defaultSbtcConfig:SbtcConfig = {
  pegIn: true,
  loggedIn: false,
  balance: { balance: 0, address: '' },
  sigData: undefined,
  sbtcContractData: {} as SbtcContractDataI,
  pegInTransaction: undefined,
  pegOutTransaction: undefined,
  userSettings: {
    useOpDrop: true
  }
}
