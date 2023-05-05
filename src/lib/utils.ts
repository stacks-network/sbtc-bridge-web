import { CONFIG } from '$lib/config';
import * as btc from '@scure/btc-signer';
import { hex } from '@scure/base';
import { c32address } from 'c32check';
export const MAGIC_BYTES_TESTNET = '5432';
export const MAGIC_BYTES_MAINNET = '5832';
export const PEGIN_OPCODE = '3C';
export const PEGOUT_OPCODE = '3E';
import * as secp from '@noble/secp256k1';

const network = CONFIG.VITE_NETWORK;
export const COMMS_ERROR = 'Error communicating with the server. Please try later.'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
})

const btcPrecision = 100000000

export function bitcoinToSats(amountBtc:number) {
  return  Math.round(amountBtc * btcPrecision)
}

export function isSupported(address:string) {
  const network = CONFIG.VITE_NETWORK;
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

export function getNet() {
  return (CONFIG.VITE_NETWORK === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK
  //if (network === 'litecoin') return { pubKeyHash: 0x30, scriptHash: 0x32 };
  //if (network === 'testnet') return { bech32: 'tb', pubKeyHash: 0x6f, scriptHash: 0xc4 };
  //if (network === 'regtest') return { bech32: 'bcrt', pubKeyHash: 0x6f, scriptHash: 0xc4 };
}
export function explorerAddressUrl(addr:string) {
	return CONFIG.VITE_STACKS_EXPLORER + '/address/' + addr + '?chain=' + CONFIG.VITE_NETWORK;
}
export function explorerBtcTxUrl(txid:string|undefined) {
  if (!txid) return '?';
	return CONFIG.VITE_BSTREAM_EXPLORER + '/tx/' + txid;
}

export function explorerBtcAddressUrl(address:string) {
	return CONFIG.VITE_BSTREAM_EXPLORER + '/address/' + address;
}
export function explorerTxUrl(txid:string) {
	return CONFIG.VITE_STACKS_EXPLORER + '/txid/' + txid + '?chain=' + CONFIG.VITE_NETWORK;
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

export function truncate(stringy?:string, amount?:number) {
  if (!stringy) return '?';
  if (!amount) amount = 4;
  return stringy.substring(0, amount) + '..' + stringy.substring(stringy.length - amount);
}

export function recoverPegInData(peginData:string) {
  const d1 = hex.decode(peginData.split(' ')[2]);
  const magic = hex.encode(d1.subarray(0,2));
  const opcode = hex.encode(d1.subarray(2,3));
  const addr0 = parseInt(hex.encode(d1.subarray(3,4)), 16);
  const addr1 = hex.encode(d1.subarray(4,24));
  const stacksAddress = c32address(addr0, addr1);

  const magicExpected = (network === 'testnet') ? MAGIC_BYTES_TESTNET : MAGIC_BYTES_MAINNET;
  
  if (magic !== magicExpected) 
    throw new Error('Wrong magic : expected: ' +  magicExpected + '  received: ' + magic)

  if (opcode.toUpperCase() !== PEGIN_OPCODE) 
    throw new Error('Wrong magic : expected: ' +  PEGIN_OPCODE + '  received: ' + opcode)

  return {
    magic,
    opcode,
    stacksAddress,
    fromBtcAddress: recoverFromBtcAddress(peginData),
    sbtcWalletAddress: recoverSbtcWalletAddress(peginData),
  };
}

function recoverFromBtcAddress(script:string) {
  const net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
  const encscript = btc.OutScript.decode(hex.decode(script.split(' ')[16]));
  const fromWallet = btc.Address(net).encode(encscript);

  return fromWallet;
}
function recoverSbtcWalletAddress(scriptPubKey:string) {
  const net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
  const encscript = btc.OutScript.decode(hex.decode(scriptPubKey.split(' ')[7]));
  const sbtcWallet = btc.Address(net).encode(encscript);

  return sbtcWallet;
}

export function getSbtcWallet(outputs:Array<any>) {
  let sbtcWallet;
  if (outputs[0].scriptPubKey.type.toLowerCase() === 'nulldata') {
    sbtcWallet = outputs[1].scriptPubKey.address;
  } else {
    const scriptHex = outputs[0].scriptPubKey.asm.split(' ')[6];
    const encscript = btc.OutScript.decode(hex.decode(scriptHex));
    sbtcWallet = btc.Address(getNet()).encode(encscript);  
  }
  return sbtcWallet;
}

export function getPegInAmountSats(outputs:Array<any>) {
  let amountSats = 0;
  if (outputs[0].scriptPubKey.type.toLowerCase() === 'nulldata') {
    amountSats = bitcoinToSats(outputs[1].value);
  } else {
    amountSats = bitcoinToSats(outputs[0].value);
  }
  return amountSats;
}

export function getWitnessData(output0:any) {
  let d1;
  let opType;
  let realMagic;
  let opcode;
  if (output0.scriptPubKey.type.toLowerCase() === 'nonstandard') {
    d1 = Buffer.from(output0.scriptPubKey.asm.split(' ')[1], 'hex');
    opType = 'drop';
  } else {
    d1 = Buffer.from(output0.scriptPubKey.asm.split(' ')[1], 'hex');
    opType = 'return';
  }
  const magic = d1.subarray(0,2);
  const magicExpected = (CONFIG.VITE_NETWORK === 'testnet') ? MAGIC_BYTES_TESTNET : MAGIC_BYTES_MAINNET;
  if (magic.toString('hex') === magicExpected) {
    realMagic = magic.toString('hex');
    opcode = d1.subarray(2,3).toString('hex');
  } else {
    opcode = d1.subarray(0,1).toString('hex');
  }
  return {
    d1,
    opType,
    magic,
    opcode
  }
}

const priv = secp.utils.randomPrivateKey()
type KeySet = {
	priv: Uint8Array,
	ecdsaPub: Uint8Array,
	schnorrPub: Uint8Array
}
export const keySetForFeeCalculation = {
  priv,
  ecdsaPub: secp.getPublicKey(priv, true),
  schnorrPub: secp.getPublicKey(priv, false)
}
 
export function parseOutputs(output0:any, sbtcWalletAddress:string, amountSats: number) {
  const parsed = {
    pegType: 'pegin',
    compression: 0,
    sbtcWallet: sbtcWalletAddress,
  } as parsedDataType;
  const witnessData = getWitnessData(output0);
  const d1 = witnessData.d1;
  const opcode = witnessData.opcode;
  const index = (witnessData.magic) ? 2 : 0;

  if (opcode.toUpperCase() === '3C') {
    const addr0 = parseInt(d1.subarray(index + 1, index + 2).toString('hex'), 16);
    const addr1 = d1.subarray(index + 2, index + 22).toString('hex');
    parsed.stxAddress = c32address(addr0, addr1);
    parsed.cname = d1.subarray(index + 22, index + 56).toString('utf8');
    parsed.amountSats = amountSats;
    parsed.revealFee = d1.subarray(index + 56, index + 84).readUInt32LE();
    //TODO MJC: better way to do this ?
    if (parsed.cname.startsWith('\x00\x00\x00\x00\x00')) parsed.cname = undefined;
  } else if (opcode.toUpperCase() === '3E') {
    parsed.pegType = 'pegout';
    parsed.dustAmount = bitcoinToSats(output0.value);
    parsed.amountSats = d1.subarray(index + 1, index + 10).readUInt32LE();
    parsed.signature = d1.subarray(index + 10, index + 75).toString('hex');
    parsed.compression = (output0.scriptPubKey.type === 'nulldata') ? 0 : 1;
    //const dataToSign = getDataToSign(parsed.amountSats, parsed.sbtcWallet);
    //const msgHash = hashMessage(dataToSign.toString('hex'));
    //const stxAddress = getStacksAddressFromSignature(msgHash, parsed.signature, parsed.compression);
    //parsed.stxAddress = (CONFIG.VITE_NETWORK === 'testnet') ? stxAddress.tp2pkh : stxAddress.mp2pkh;
  } else { 
    throw new Error('Wrong opcode : expected: 3A or 3C :  receved: ' + opcode)
  }
  return parsed;
}
type parsedDataType = {
  pegType: string;
  opType: string;
  stxAddress?: string;
  cname?: string|undefined;
  sbtcWallet: string;
  signature: string;
  compression: number,
  amountSats: number;
  dustAmount: number;
  burnBlockHeight: number;
  revealFee: number;
};

function getDataToSign(amount:number, sbtcWalletAddress:string):Buffer {
	//console.log('getDataToSign:amount ', amount);
	//console.log('getDataToSign:sbtcWalletAddress ', sbtcWalletAddress);
	const amtBuf = Buffer.alloc(9);
	amtBuf.writeUInt32LE(amount, 0);
	const net = (CONFIG.VITE_NETWORK === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
	const script = btc.OutScript.encode(btc.Address(net).decode(sbtcWalletAddress))
	//console.log('decodePegOutOutputs ', util.inspect(Buffer.from(script).toString('hex'), false, null, true /* enable colors */));
	const scriptBuf = Buffer.from(script);
	//console.log('getDataToSign:amtBuf ', amtBuf.toString('hex'));
	//console.log('getDataToSign:scriptBuf ', scriptBuf.toString('hex'));
	const data = Buffer.concat([amtBuf, scriptBuf]);
	return data;
}

export function fromStorable(script:any) {
  if (typeof script.tweakedPubkey === 'string') return script
  return codifyScript(script, true)
}

export function toStorable(script:any) {
  //const copied = JSON.parse(JSON.stringify(script));
  return codifyScript(script, false)
}

function codifyScript(script:any, asString:boolean) {
  return {
    address: script.address,
    script: codify(script.script, asString),
    paymentType: (script.type) ? script.type : script.paymentType,
    witnessScript: codify(script.witnessScript, asString),
    redeemScript: codify(script.redeemScript, asString),
    leaves: (script.leaves) ? codifyLeaves(script.leaves, asString) : undefined,
    tapInternalKey: codify(script.tapInternalKey, asString),
    tapLeafScript: (script.tapLeafScript) ? codifyTapLeafScript(script.tapLeafScript, asString) : undefined,
    tapMerkleRoot: codify(script.tapMerkleRoot, asString),
    tweakedPubkey: codify(script.tweakedPubkey, asString),
  }

}

function codifyTapLeafScript(tapLeafScript:any, asString:boolean) {
  if (tapLeafScript[0]) {
    const level0 = tapLeafScript[0]
    if (level0[0]) tapLeafScript[0][0].internalKey = codify(tapLeafScript[0][0].internalKey, asString)
    if (level0[0]) tapLeafScript[0][0].merklePath[0] = codify(tapLeafScript[0][0].merklePath[0], asString)
    if (level0[1]) tapLeafScript[0][1] = codify(tapLeafScript[0][1], asString)
  }
  if (tapLeafScript[1]) {
    const level1 = tapLeafScript[1]
    if (level1[0]) tapLeafScript[1][0].internalKey = codify(tapLeafScript[1][0].internalKey, asString)
    if (level1[0]) tapLeafScript[1][0].merklePath[0] = codify(tapLeafScript[1][0].merklePath[0], asString)
    if (level1[1]) tapLeafScript[1][1] = codify(tapLeafScript[1][1], asString)
  }
  return tapLeafScript;
}

function codify (arg:unknown, asString:boolean) {
  if (!arg) return;
  if (typeof arg === 'string') {
    return hex.decode(arg)
  } else {
    return hex.encode(arg as Uint8Array)
  }
}
function codifyLeaves(leaves:any, asString:boolean) {
  if (leaves[0]) {
    const level1 = leaves[0]
    if (level1.controlBlock) leaves[0].controlBlock = codify(leaves[0].controlBlock, asString)
    if (level1.hash) leaves[0].hash = codify(leaves[0].hash, asString)
    if (level1.script) leaves[0].script = codify(leaves[0].script, asString)
    if (level1.path && level1.path[0]) leaves[0].path[0] = codify(leaves[0].path[0], asString)
  }
  if (leaves[1]) {
    const level1 = leaves[1]
    if (level1.controlBlock) leaves[1].controlBlock = codify(leaves[1].controlBlock, asString)
    if (level1.hash) leaves[1].hash = codify(leaves[1].hash, asString)
    if (level1.script) leaves[1].script = codify(leaves[1].script, asString)
    if (level1.path && level1.path[0]) leaves[1].path[0] = codify(leaves[1].path[0], asString)
  }
  return leaves;
}

