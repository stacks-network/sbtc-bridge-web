/**
 * sbtc - interact with Stacks Blockchain to read sbtc contract info
 */
import { deserializeCV, cvToJSON } from "micro-stacks/clarity";

export async function fetchSbtcWalletAddress(network:string) {
  const contractId = (network === 'mainnet') ? import.meta.env.VITE_SBTC_CONTRACT_ID_MAINNET : import.meta.env.VITE_SBTC_CONTRACT_ID_TESTNET;
	//const functionArgs = [`0x${bytesToHex(serializeCV(uintCV(1)))}`, `0x${bytesToHex(serializeCV(standardPrincipalCV(address)))}`];
	const data = {
		contractAddress: contractId.split('.')[0],
		contractName: contractId.split('.')[1],
		functionName: 'get-bitcoin-wallet-address',
		functionArgs: [],
    network
	}
	const result = await callContractReadOnly(data);
  if (result.type.indexOf('some') > -1) return result.value
  if (network === 'testnet') {
    return 'tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss'; // alice
  }
  return 'bc1q0pcvvu8ewfqw3p270cwxtsd5pe7us3s8kznftnrhs74w4nfl4rtqjt6hp6';
}

async function callContractReadOnly(data:any) {
  const path = (data.network === 'mainnet') ? import.meta.env.VITE_APP_STACKS_MAINNET_API : import.meta.env.VITE_APP_STACKS_MAINNET_API;
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