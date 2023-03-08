const btcPrecision = 1e8;
function isSupported(address) {
  const network = "mainnet";
  const msg = "Please enter a valid " + network + " bitcoin address.";
  if (!address || address.length < 10) {
    throw new Error(msg);
  }
  if (address.startsWith("1") || address.startsWith("m") || address.startsWith("n")) {
    throw new Error("Legacy addresses are not supported in the current version. " + msg);
  }
  let valid = false;
  if (address.startsWith("2") || address.startsWith("3")) {
    valid = true;
  }
  if (address.startsWith("tb") || address.startsWith("bc")) {
    valid = true;
  }
  if (!valid) {
    throw new Error("Addresses is neither a classic (p2pkh/p2sh) or segwit (p2wpkh/p2wsh) address. " + msg);
  }
  return valid;
}
function explorerAddressUrl(addr) {
  return "https://explorer.stacks.co" + "/address/" + addr + "?chain=" + "mainnet";
}
function explorerBtcTxUrl(txid) {
  return "https://blockstream.info" + "/tx/" + txid;
}
function explorerBtcAddressUrl(address) {
  return "https://blockstream.info" + "/address/" + address;
}
function explorerTxUrl(txid) {
  return "https://explorer.stacks.co" + "/txid/" + txid + "?chain=" + "mainnet";
}
function fmtSatoshiToBitcoin(amountSats) {
  return Math.round(amountSats) / btcPrecision;
}
function truncate(stringy) {
  return stringy.substring(0, 6) + ".." + stringy.substring(stringy.length - 8);
}

export { explorerBtcTxUrl as a, explorerAddressUrl as b, explorerBtcAddressUrl as c, explorerTxUrl as e, fmtSatoshiToBitcoin as f, isSupported as i, truncate as t };
