/**
 * sbtc - interact with Stacks Blockchain to read sbtc contract info
 */
import { deserializeCV, cvToJSON, serializeCV } from "micro-stacks/clarity";
import type { SbtcConfig } from '$types/sbtc_config';
import { principalCV } from 'micro-stacks/clarity';
import { bytesToHex } from "micro-stacks/common";

export async function readEvents(network:string) {
  const path = (network === 'mainnet') ? import.meta.env.VITE_APP_STACKS_MAINNET_API : import.meta.env.VITE_APP_STACKS_TESTNET_API;
  const contractId = (network === 'mainnet') ? import.meta.env.VITE_SBTC_CONTRACT_ID_MAINNET : import.meta.env.VITE_SBTC_CONTRACT_ID_TESTNET;
  const url = path + '/extended/v1/contract/' + contractId + '/events';
  const response = await fetch(url);
  const val = await response.json();
  for (const event of val.results) {
    event.data = cvToJSON(deserializeCV(event.contract_log.value.hex));
  }
  return val.results;
}

export async function fetchSbtcWalletAddress(network:string) {
  const contractId = (network === 'mainnet') ? import.meta.env.VITE_SBTC_CONTRACT_ID_MAINNET : import.meta.env.VITE_SBTC_CONTRACT_ID_TESTNET;
	const data = {
		contractAddress: contractId.split('.')[0],
		contractName: contractId.split('.')[1],
		functionName: 'get-bitcoin-wallet-address',
		functionArgs: [],
    network
	}
	const result = await callContractReadOnly(data);
  if (result.value && result.value.value) {
    return result.value.value
  }
  if (result.type.indexOf('some') > -1) return result.value
  if (network === 'testnet') {
    return 'tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss'; // alice
  }
  return 'bc1q0pcvvu8ewfqw3p270cwxtsd5pe7us3s8kznftnrhs74w4nfl4rtqjt6hp6';
}

export async function fetchUserBalance(network:string, stxAddress:string) {
  const contractId = (network === 'mainnet') ? import.meta.env.VITE_SBTC_CONTRACT_ID_MAINNET : import.meta.env.VITE_SBTC_CONTRACT_ID_TESTNET;
	//const functionArgs = [`0x${bytesToHex(serializeCV(uintCV(1)))}`, `0x${bytesToHex(serializeCV(standardPrincipalCV(address)))}`];
	const functionArgs = [`0x${bytesToHex(serializeCV(principalCV(stxAddress)))}`];
	const data = {
		contractAddress: contractId.split('.')[0],
		contractName: contractId.split('.')[1],
		functionName: 'get-balance',
		functionArgs,
    network
	}
	const result = await callContractReadOnly(data);
  if (result.value && result.value.value) {
    return Number(result.value.value);
  }
  return 0;
}

async function callContractReadOnly(data:any) {
  const path = (data.network === 'mainnet') ? import.meta.env.VITE_APP_STACKS_MAINNET_API : import.meta.env.VITE_APP_STACKS_TESTNET_API;
  const url = path + '/v2/contracts/call-read/' + data.contractAddress + '/' + data.contractName + '/' + data.functionName
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      arguments: data.functionArgs,
      sender: data.contractAddress,
    })
  });
  const val = await response.json();
  const result = cvToJSON(deserializeCV(val.result));
  return result;
}

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
      dustAmount: 500,
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
  balance: 0,
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
  utxos: []
}
