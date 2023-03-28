import { s as stringAsciiCV, p as principalCV, c as uintCV, o as openContractCall, g as getStacksNetwork, P as PostConditionMode, t as tupleCV, d as bufferCVFromString } from "./stacks_connect.44e9d878.js";
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
async function mintTo(amount, stxAddress, btcTxId) {
  const btcAddressCV = stringAsciiCV(btcTxId);
  const stxAddressCV = principalCV(stxAddress);
  const functionArgs = [uintCV(amount), stxAddressCV, btcAddressCV];
  await openContractCall({
    network: getStacksNetwork(),
    postConditions: [],
    postConditionMode: PostConditionMode.Deny,
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
async function burnFrom(amount, stxAddress, btcTxId) {
  const btcAddressCV = stringAsciiCV(btcTxId);
  const stxAddressCV = principalCV(stxAddress);
  const functionArgs = [uintCV(amount), stxAddressCV, btcAddressCV];
  await openContractCall({
    network: getStacksNetwork(),
    postConditions: [],
    postConditionMode: PostConditionMode.Allow,
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
async function setCoordinator(address) {
  const datum = tupleCV({
    addr: principalCV(address),
    key: bufferCVFromString("33 max byte buffer")
  });
  const functionArgs = [datum];
  await openContractCall({
    network: getStacksNetwork(),
    postConditions: [],
    postConditionMode: PostConditionMode.Deny,
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
async function setBtcWallet(address) {
  const datum = stringAsciiCV(address);
  const functionArgs = [datum];
  await openContractCall({
    network: getStacksNetwork(),
    postConditions: [],
    postConditionMode: PostConditionMode.Deny,
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
export {
  setBtcWallet as a,
  burnFrom as b,
  coordinators as c,
  isCoordinator as i,
  mintTo as m,
  setCoordinator as s
};
