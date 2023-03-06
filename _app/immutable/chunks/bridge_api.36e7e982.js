async function fetchCurrentFeeRates() {
  const path = "https://localhost:3010/bridge-api/v1" + "/btc/blocks/fee-estimate";
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error("Bitcoin address not known - is the network correct?");
  }
  const txs = await response.json();
  return txs;
}
async function fetchUtxoSet(address) {
  const path = "https://localhost:3010/bridge-api/v1" + "/btc/wallet/address/" + address + "/utxos";
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error("Bitcoin address not known - is the network correct?");
  }
  const txs = await response.json();
  return txs;
}
async function fetchSbtcEvents() {
  try {
    const path = "https://localhost:3010/bridge-api/v1" + "/sbtc/events";
    const response = await fetch(path);
    const result = await response.json();
    return result;
  } catch (err) {
    return [];
  }
}
async function fetchSbtcData() {
  const path = "https://localhost:3010/bridge-api/v1" + "/sbtc/data";
  const response = await fetch(path);
  const result = await response.text();
  return result;
}
async function fetchUserSbtcBalance(stxAddress) {
  try {
    const path = "https://localhost:3010/bridge-api/v1" + "/sbtc/address/" + stxAddress + "/balance";
    const response = await fetch(path);
    const result = await response.json();
    return result;
  } catch (err) {
    return 0;
  }
}

export { fetchSbtcData as a, fetchSbtcEvents as b, fetchUtxoSet as c, fetchCurrentFeeRates as d, fetchUserSbtcBalance as f };
