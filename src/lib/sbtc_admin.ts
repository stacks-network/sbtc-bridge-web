/**
 * sbtc - interact with Stacks Blockchain to read sbtc contract info
 */
import { uintCV, stringAsciiCV, tupleCV, bufferCVFromString, principalCV } from 'micro-stacks/clarity';
import { PostConditionMode } from 'micro-stacks/transactions';

export const coordinators = [
  { stxAddress: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM', btcAddress: 'tb1q6ue638m4t5knwxl4kwhwyuffttlp0ffee3zn3e' }, // devnet + electrum bob
  { stxAddress: 'SP3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSQP2HGT6', btcAddress: 'tb1q6ue638m4t5knwxl4kwhwyuffttlp0ffee3zn3e' }, // mijoco staging + electrum bob
  { stxAddress: 'ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN', btcAddress: 'tb1q6ue638m4t5knwxl4kwhwyuffttlp0ffee3zn3e' }, // mijoco production + electrum bob
]

export function getCoordinator(address:string) {
	return coordinators.find((o) => o.stxAddress === address);
}

export function isCoordinator(address:string) {
	return coordinators.find((o) => o.stxAddress === address);
}

export async function mintTo(contractCall:any, amount:number, stxAddress: string, btcTxId: string) {
  //data {addr: principal, key: (buff 33)}
  const btcAddressCV = stringAsciiCV(btcTxId);
  const stxAddressCV = principalCV(stxAddress);
  const functionArgs = [uintCV(amount), stxAddressCV, btcAddressCV]
  await contractCall.openContractCall({
    postConditions: [],
    postConditionMode: PostConditionMode.Deny,
    contractAddress: import.meta.env.VITE_SBTC_CONTRACT_ID.split('.')[0],
    contractName: import.meta.env.VITE_SBTC_CONTRACT_ID.split('.')[1],
    functionName: 'mint!',
    functionArgs: functionArgs,
    onFinish: (data: any) => {
      console.log('TX Data: ', data);
      return data;
    },
    onCancel: () => {
      console.log('popup closed!');
    }
  });
}

export async function burnFrom(contractCall:any, amount:number, stxAddress: string, btcTxId: string) {
  //data {addr: principal, key: (buff 33)}
  const btcAddressCV = stringAsciiCV(btcTxId);
  const stxAddressCV = principalCV(stxAddress);
  const functionArgs = [uintCV(amount), stxAddressCV, btcAddressCV]
  await contractCall.openContractCall({
    postConditions: [],
    postConditionMode: PostConditionMode.Allow,
    contractAddress: import.meta.env.VITE_SBTC_CONTRACT_ID.split('.')[0],
    contractName: import.meta.env.VITE_SBTC_CONTRACT_ID.split('.')[1],
    functionName: 'burn!',
    functionArgs: functionArgs,
    onFinish: (data: any) => {
      console.log('TX Data: ', data);
      return data;
    },
    onCancel: () => {
      console.log('popup closed!');
    }
  });
}

export async function setCoordinator(address:string, contractCall:any) {
  //data {addr: principal, key: (buff 33)}
  const datum = tupleCV({
    addr: principalCV(address),
    key: bufferCVFromString('33 max byte buffer')
  });
  const functionArgs = [datum]
  await contractCall.openContractCall({
    postConditions: [],
    postConditionMode: PostConditionMode.Deny,
    contractAddress: import.meta.env.VITE_SBTC_CONTRACT_ID.split('.')[0],
    contractName: import.meta.env.VITE_SBTC_CONTRACT_ID.split('.')[1],
    functionName: 'set-coordinator-data',
    functionArgs: functionArgs,
    onFinish: (data: any) => {
      console.log('TX Data: ', data);
      return data;
    },
    onCancel: () => {
      console.log('popup closed!');
    }
  });
}

export async function setBtcWallet(address:string, contractCall:any) {
  const datum = stringAsciiCV(address)
  const functionArgs = [datum]
  await contractCall.openContractCall({
    postConditions: [],
    postConditionMode: PostConditionMode.Deny,
    contractAddress: import.meta.env.VITE_SBTC_CONTRACT_ID.split('.')[0],
    contractName: import.meta.env.VITE_SBTC_CONTRACT_ID.split('.')[1],
    functionName: 'set-bitcoin-wallet-address',
    functionArgs: functionArgs,
    onFinish: (data: any) => {
      console.log('TX Data: ', data);
      return data;
    },
    onCancel: () => {
      console.log('popup closed!');
    }
  });
}

