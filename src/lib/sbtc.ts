/**
 * sbtc - interact with Stacks Blockchain to read sbtc contract info
 */
import type { SbtcConfig } from '$types/sbtc_config';

export const defaultSbtcConfig:SbtcConfig = {
  network: 'mainnet',
  feeInfo: {
    high_fee_per_kb: 48783,
    low_fee_per_kb: 20000,
    medium_fee_per_kb: 30998,
  },
  feeCalc: {
    pegInFeeCalc: {
      feeToApply: 20000,
      pegInAmount: 0,
      high: {
        change: 0,
        fee: 500000,
      },
      medium: {
        change: 0,
        fee: 500000,
      },
      low: {
        change: 0,
        fee: 500000,
      },
    },
    pegOutFeeCalc: {
      feeToApply: 20000,
      pegOutAmount: 0,
      DUST_AMOUNT: 500,
      high: {
        change: 0,
        fee: 500000,
      },
      medium: {
        change: 0,
        fee: 500000,
      },
      low: {
        change: 0,
        fee: 500000,
      },
    }
  },
  pegIn: true,
  balance: { balance:0, address:''},
  addressDetails: {
    address: "",
    chain_stats: {
      funded_txo_count: 0,
      funded_txo_sum: 0,
      spent_txo_count: 0,
      spent_txo_sum: 0,
      tx_count: 0
    },
    mempool_stats: {
      funded_txo_count: 0,
      funded_txo_sum: 0,
      spent_txo_count: 0,
      spent_txo_sum: 0,
      tx_count: 0
    }
  },
  utxos: [],
  sigData: undefined,
  sbtcContractData: undefined
}
