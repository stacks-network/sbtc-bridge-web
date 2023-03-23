import * as btc from 'micro-btc-signer';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
})

const btcPrecision = 100000000

export function isSupported(address:string) {
  const network = import.meta.env.VITE_NETWORK;
  const msg = 'Please enter a valid ' + network + ' bitcoin address.'
  if (!address || address.length < 10) {
    throw new Error(msg);
  }
  const net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
  const obj = btc.Address(net).decode(address);

  if (obj.type === 'pk') {
    throw new Error('Legacy addresses are not supported in the current version. ' + msg);
  }
  if (obj.type === 'ms' || obj.type === 'tr_ms') {
    throw new Error('Multisig addresses are not supported in the current version. ' + msg);
  }
  let valid = false;
  if (obj.type === 'pkh' || obj.type === 'sh') {
    // classis non segwit
    valid = true;
  }
  if (obj.type === 'wpkh' || obj.type === 'wsh' || obj.type === 'tr') {
    // segwit
    valid = true;
  }
  if (!valid) {
    throw new Error('Addresses is neither a classic (p2pkh/p2sh) or segwit (p2wpkh/p2wsh) or taproot address. ' + msg);
  }
  return valid;
}

export function getNet(network:string) {
  if (network === 'litecoin') return { pubKeyHash: 0x30, scriptHash: 0x32 };
  if (network === 'testnet') return { bech32: 'tb', pubKeyHash: 0x6f, scriptHash: 0xc4 };
  if (network === 'regtest') return { bech32: 'bcrt', pubKeyHash: 0x6f, scriptHash: 0xc4 };
}
export function explorerAddressUrl(addr:string) {
	return import.meta.env.VITE_STACKS_EXPLORER + '/address/' + addr + '?chain=' + import.meta.env.VITE_NETWORK;
}
export function explorerBtcTxUrl(txid:string) {
	return import.meta.env.VITE_BSTREAM_EXPLORER + '/tx/' + txid;
}
export function explorerBtcAddressUrl(address:string) {
	return import.meta.env.VITE_BSTREAM_EXPLORER + '/address/' + address;
}
export function explorerTxUrl(txid:string) {
	return import.meta.env.VITE_STACKS_EXPLORER + '/txid/' + txid + '?chain=' + import.meta.env.VITE_NETWORK;
}

export function fmtSatoshiToBitcoin(amountSats:number) {
  return  Math.round(amountSats) / btcPrecision
}

export function hexToAscii(input:string) {
  const buf = Buffer.from(input, "hex");
  return buf.toString("ascii");
}

export function hexToUTF8(input:string) {
  const buf = Buffer.from(input, "hex");
  return buf.toString("utf8");
}

export function fmtAmount(amount:number, currency:string) {
  if (currency === 'stx') {
    return formatter.format(amount).replace('$', '') // &#931;
  }
}

export function fmtNumber(amount:number|undefined) {
  if (amount === 0) return 0;
  if (amount) return new Intl.NumberFormat().format(amount);
}

export function truncate(stringy:string) {
  return stringy.substring(0, 6) + '..' + stringy.substring(stringy.length - 8);
}
