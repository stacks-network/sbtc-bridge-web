import { C as CONFIG } from "./hmac.447cb554.js";
function addNetSelector(path) {
  if (CONFIG.VITE_NETWORK === "testnet")
    return path.indexOf("?") > -1 ? path += "&net=testnet" : path += "?net=testnet";
  else if (CONFIG.VITE_NETWORK === "devnet")
    return path.indexOf("?") > -1 ? path += "&net=devnet" : path += "?net=devnet";
  else
    return path.indexOf("?") > -1 ? path += "&net=mainnet" : path += "?net=mainnet";
}
async function sendRawTxDirectMempool(hex) {
  const url = CONFIG.VITE_MEMPOOL_EXPLORER + "/tx";
  console.log("sendRawTx:mempoolUrl: ", url);
  const response = await fetch(url, {
    method: "POST",
    //headers: { 'Content-Type': 'application/json' },
    body: hex
  });
  if (response.status !== 200)
    throw new Error("Mempool error: " + response.status + " : " + response.statusText);
  try {
    return await response.json();
  } catch (err) {
    try {
      console.log(err);
      return await response.text();
    } catch (err1) {
      console.log(err1);
    }
  }
  return "success";
}
async function fetchCurrentFeeRates() {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + "/btc/blocks/fee-estimate");
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error("Bitcoin address not known - is the network correct?");
  }
  const txs = await response.json();
  return txs;
}
async function fetchUtxoSet(address) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + "/btc/wallet/address/" + address + "/utxos?verbose=true");
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error("Bitcoin address not known - is the network correct?");
  }
  const txs = await response.json();
  return txs;
}
async function fetchSbtcEvents() {
  try {
    const path = addNetSelector(CONFIG.VITE_BRIDGE_API + "/sbtc/events/0");
    const response = await fetch(path);
    const result = await response.json();
    return result;
  } catch (err) {
    return [];
  }
}
async function fetchSbtcData() {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + "/sbtc/data");
  const response = await fetch(path);
  const result = await response.text();
  return result;
}
async function fetchUserSbtcBalance(stxAddress) {
  try {
    const path = addNetSelector(CONFIG.VITE_BRIDGE_API + "/sbtc/address/" + stxAddress + "/balance");
    const response = await fetch(path);
    const result = await response.json();
    return result;
  } catch (err) {
    return 0;
  }
}
export {
  fetchSbtcEvents as a,
  fetchUtxoSet as b,
  fetchCurrentFeeRates as c,
  fetchUserSbtcBalance as d,
  fetchSbtcData as f,
  sendRawTxDirectMempool as s
};
