import { I as Ir, K, v as ve, p as pe, u as ur, S } from './index.227a7d99.js';

const coordinators = [
  { stxAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM", btcAddress: "tb1q6ue638m4t5knwxl4kwhwyuffttlp0ffee3zn3e" },
  // devnet + electrum bob
  { stxAddress: "SP3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSQP2HGT6", btcAddress: "tb1q6ue638m4t5knwxl4kwhwyuffttlp0ffee3zn3e" },
  // mijoco staging + electrum bob
  { stxAddress: "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN", btcAddress: "tb1q6ue638m4t5knwxl4kwhwyuffttlp0ffee3zn3e" }
  // mijoco production + electrum bob
];
function isCoordinator(address) {
  return coordinators.find((o) => o.stxAddress === address);
}
async function mintTo(contractCall, amount, stxAddress, btcTxId) {
  const btcAddressCV = S(btcTxId);
  const stxAddressCV = Ir(stxAddress);
  const functionArgs = [K(amount), stxAddressCV, btcAddressCV];
  await contractCall.openContractCall({
    postConditions: [],
    postConditionMode: ve.Deny,
    contractAddress: "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant".split(".")[0],
    contractName: "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant".split(".")[1],
    functionName: "mint!",
    functionArgs,
    onFinish: (data) => {
      console.log("TX Data: ", data);
      return data;
    },
    onCancel: () => {
      console.log("popup closed!");
    }
  });
}
async function burnFrom(contractCall, amount, stxAddress, btcTxId) {
  const btcAddressCV = S(btcTxId);
  const stxAddressCV = Ir(stxAddress);
  const functionArgs = [K(amount), stxAddressCV, btcAddressCV];
  await contractCall.openContractCall({
    postConditions: [],
    postConditionMode: ve.Allow,
    contractAddress: "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant".split(".")[0],
    contractName: "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant".split(".")[1],
    functionName: "burn!",
    functionArgs,
    onFinish: (data) => {
      console.log("TX Data: ", data);
      return data;
    },
    onCancel: () => {
      console.log("popup closed!");
    }
  });
}
async function setCoordinator(address, contractCall) {
  const datum = pe({
    addr: Ir(address),
    key: ur("33 max byte buffer")
  });
  const functionArgs = [datum];
  await contractCall.openContractCall({
    postConditions: [],
    postConditionMode: ve.Deny,
    contractAddress: "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant".split(".")[0],
    contractName: "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant".split(".")[1],
    functionName: "set-coordinator-data",
    functionArgs,
    onFinish: (data) => {
      console.log("TX Data: ", data);
      return data;
    },
    onCancel: () => {
      console.log("popup closed!");
    }
  });
}
async function setBtcWallet(address, contractCall) {
  const datum = S(address);
  const functionArgs = [datum];
  await contractCall.openContractCall({
    postConditions: [],
    postConditionMode: ve.Deny,
    contractAddress: "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant".split(".")[0],
    contractName: "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant".split(".")[1],
    functionName: "set-bitcoin-wallet-address",
    functionArgs,
    onFinish: (data) => {
      console.log("TX Data: ", data);
      return data;
    },
    onCancel: () => {
      console.log("popup closed!");
    }
  });
}

export { setBtcWallet as a, burnFrom as b, coordinators as c, isCoordinator as i, mintTo as m, setCoordinator as s };
