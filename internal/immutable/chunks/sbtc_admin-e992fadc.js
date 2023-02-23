import { I as Ir, K, v as ve, p as pe, j as ur, S } from './stores-c1b5a995.js';

const coordinator = {
  stxAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
  btcAddress: "tb1q6ue638m4t5knwxl4kwhwyuffttlp0ffee3zn3e"
  //'2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb''tb1qnzqsylm7xv2svujkqunj20t7zs7l67n85pj8qf'  // electrum1
};
async function mintTo(contractCall, amount, stxAddress, btcTxId) {
  const btcAddressCV = S(btcTxId);
  const stxAddressCV = Ir(stxAddress);
  const functionArgs = [K(amount), stxAddressCV, btcAddressCV];
  await contractCall.openContractCall({
    postConditions: [],
    postConditionMode: ve.Deny,
    contractAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    contractName: "sbtc-alpha",
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
    contractAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    contractName: "sbtc-alpha",
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
async function setCoordinator(contractCall) {
  const datum = pe({
    addr: Ir(coordinator.stxAddress),
    key: ur("33 max byte buffer")
  });
  const functionArgs = [datum];
  await contractCall.openContractCall({
    postConditions: [],
    postConditionMode: ve.Deny,
    contractAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    contractName: "sbtc-alpha",
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
async function setBtcWallet(contractCall) {
  const datum = S(coordinator.btcAddress);
  const functionArgs = [datum];
  await contractCall.openContractCall({
    postConditions: [],
    postConditionMode: ve.Deny,
    contractAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    contractName: "sbtc-alpha",
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

export { setBtcWallet as a, burnFrom as b, coordinator as c, mintTo as m, setCoordinator as s };
