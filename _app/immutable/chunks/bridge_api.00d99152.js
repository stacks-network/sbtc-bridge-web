async function fetchCurrentFeeRates() {
  const path = "https://testnet.sbtc-bridge-api.trustmachines.dev/bridge-api/v1" + "/btc/blocks/fee-estimate";
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error("Bitcoin address not known - is the network correct?");
  }
  const txs = await response.json();
  return txs;
}
async function fetchUtxoSet(address) {
  const path = "https://testnet.sbtc-bridge-api.trustmachines.dev/bridge-api/v1" + "/btc/wallet/address/" + address + "/utxos";
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error("Bitcoin address not known - is the network correct?");
  }
  const txs = await response.json();
  return txs;
}
async function fetchSbtcEvents() {
  try {
    const path = "https://testnet.sbtc-bridge-api.trustmachines.dev/bridge-api/v1" + "/sbtc/events/0";
    const response = await fetch(path);
    const result = await response.json();
    return result;
  } catch (err) {
    return [];
  }
}
async function fetchSbtcData() {
  const path = "https://testnet.sbtc-bridge-api.trustmachines.dev/bridge-api/v1" + "/sbtc/data";
  const response = await fetch(path);
  const result = await response.text();
  return result;
}
async function fetchUserSbtcBalance(stxAddress) {
  try {
    const path = "https://testnet.sbtc-bridge-api.trustmachines.dev/bridge-api/v1" + "/sbtc/address/" + stxAddress + "/balance";
    const response = await fetch(path);
    const result = await response.json();
    return result;
  } catch (err) {
    return 0;
  }
}

export { fetchSbtcEvents as a, fetchUtxoSet as b, fetchCurrentFeeRates as c, fetchUserSbtcBalance as d, fetchSbtcData as f };
