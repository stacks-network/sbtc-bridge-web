//import { Buffer } from 'buffer';
import { Psbt, payments, networks } from 'bitcoinjs-lib';
import type { SbtcConfig } from '$types/sbtc_config';
import * as ecc from 'tiny-secp256k1';
import ECPairFactory from 'ecpair';
import { maxCommit } from "$lib/utxos";
import type { UTXO } from '$types/utxo';
const ECPair = ECPairFactory(ecc);

export const dustAmount = 500;

export async function transactionData(config:SbtcConfig) {
  return buildTransaction(config);
}

export async function transactionHex(psbt:Psbt) {
  return psbt.toHex();
  //return psbt.finalizeAllInputs().extractTransaction().toHex();
}

export function getNetwork (network:string) {
  return (network === 'testnet') ? networks.testnet : networks.bitcoin
}

const signer = 'cN5Ciwee1NA32zD7WNG78TmXBrnAb4jfQZohmh2Zj53mQjNAZV3R';
//const pubkey = globalThis.Buffer.from('0275bda2b8b7b2bd65037e9fd2b8fda2d9e9a6ba3e26ea51b2313876e8c304b14b', 'hex');
const keyPairs = [
  ECPair.makeRandom({ network: networks.testnet }),
  ECPair.makeRandom({ network: networks.testnet }),
];

export function getP2SHToP2WPKH(network:string) {
  const alice_pair = ECPair.fromWIF(signer, getNetwork(network));
  const p2shObj = payments.p2sh({
    redeem: payments.p2wpkh({ pubkey: alice_pair.publicKey, network: getNetwork(network) }),
  });
  return p2shObj;
}

export function getRedeemScript(network:string, utxo:UTXO, pubKey:any) {
  // Note: Using Mempool API Tx format.
  const pk = Buffer.from(pubKey).toString('hex');
  if (!utxo.tx || !utxo.tx.vout) throw new Error('No outputs');
  let redeemScript;
  const sciptType = utxo.tx.vout[utxo.vout].scriptpubkey_type;
  if (sciptType === 'pay-to-witness-script-hash') {
    const p2w = payments.p2wpkh({ pubkey: pubKey, network: getNetwork(network) });
    redeemScript = p2w?.redeem?.output;
  } else if (sciptType === 'pay-to-script-hash' || sciptType === 'p2sh') {
    const paymentParams = {
      redeem: payments.p2wpkh({ pubkey: pubKey, network: getNetwork(network) }),
      network: getNetwork(network)
    }
    const p2sh = payments.p2sh(paymentParams);
    redeemScript = p2sh?.redeem?.output;
  } else if (sciptType === 'v0_p2wpkh') {
    const p2shObj = getP2SHToP2WPKH(network);
    redeemScript = p2shObj?.redeem?.output;
  } else {
    throw new Error('Unhandled type: ' + sciptType);
  }
  return redeemScript;
}

function getInput(unspent:any, redeemScript:any, witnessScript:any) {
  return {
    hash: unspent.txid,
    index: unspent.vout,
    nonWitnessUtxo: globalThis.Buffer.from(unspent.txHex, 'hex'),
    ...(redeemScript ? { redeemScript } : {}),
    ...(witnessScript ? { witnessScript } : {}),
  };
}

function buildTransaction(config:SbtcConfig) {
  if (!config.fromBtcAddress || !config.sbtcWalletAddress || !config.utxos) throw new Error('wallet or inputs not defined.');
  const network = getNetwork(config.network);
  const psbt = new Psbt({ network });
  config.utxos.forEach((utxo) => {
    //https://api.blockcypher.com/v1/btc/test3/txs/<txID here>?includeHex=true
    psbt.addInput({
      hash: utxo.txid, 
      index: utxo.vout, 
    });
  })
  const totalInputValue = maxCommit(config.utxos);
  if (config.pegIn) {
    if (!config.stxAddress) throw new Error('stxAddress not defined.');
    addPegInOutputs(psbt, config.fromBtcAddress, config.sbtcWalletAddress, config.stxAddress, totalInputValue, config.feeCalc.pegInFeeCalc.pegInAmount, config.feeCalc.pegInFeeCalc.feeToApply);
  } else {
    addPegOutOutputs(psbt, config.fromBtcAddress, config.sbtcWalletAddress, totalInputValue, config.feeCalc.pegOutFeeCalc.pegOutAmount, config.feeCalc.pegOutFeeCalc.feeToApply);
  }
  return psbt;
}

const validator = (
  pubkey: globalThis.Buffer,
  msghash: globalThis.Buffer,
  signature: globalThis.Buffer,
) => ECPair.fromPublicKey(pubkey).verify(msghash, signature);

export function calculateFee(config:SbtcConfig) {
  const network = getNetwork(config.network);
  const psbt = new Psbt({ network });
  config.utxos.forEach((utxo) => {
    const nonWitnessUtxo = globalThis.Buffer.from(utxo.tx.hex, 'hex');
    const redeemScript = getRedeemScript(config.network, utxo, keyPairs[0].publicKey);
    psbt.addInput({
      hash: utxo.txid, 
      index: utxo.vout,
      nonWitnessUtxo,
      redeemScript,
      //witnessUtxo: {
      //  script: globalThis.Buffer.from(utxo.fullout.scriptpubkey_asm, 'hex'),
      //  value: utxo.value
      //}
    });
  })
  const totalInputValue = maxCommit(config.utxos);
  const pegInFeeCalc = calcFeesIn(network, config, psbt, totalInputValue);
  const pegOutFeeCalc = calcFeesOut(network, config, psbt, totalInputValue);
  return { pegInFeeCalc, pegOutFeeCalc }
}

function calcFeesIn(network:any, config:SbtcConfig, psbt:Psbt, totalInputValue:number) {
  const pegInAmount = Math.floor(totalInputValue/2);
  if (!config.fromBtcAddress) throw new Error('Sending Bitcoin address is missing');
  if (!config.sbtcWalletAddress) throw new Error('Receiving Bitcoin address is missing');
  addPegInOutputs(psbt, config.fromBtcAddress, config.sbtcWalletAddress, 'ST3JS8A0CHVNVJDCRPNJ1PSPJKTCZ4VSRYNVA55TW', totalInputValue, pegInAmount, 0);
  const fees = getVsizes(network, psbt, config.feeInfo, config.utxos.length);
  return {
    feeToApply: fees[0],
    pegInAmount,
    high: { change: totalInputValue - pegInAmount - fees[2], fee: fees[2] },
    medium: { change: totalInputValue - pegInAmount - fees[1], fee: fees[1] },
    low: { change: totalInputValue - pegInAmount - fees[0], fee: fees[0] },
  }
}

function calcFeesOut(network:any, config:SbtcConfig, psbt:Psbt, totalInputValue:number) {
  if (!config.fromBtcAddress) throw new Error('Receiving address not known');
  if (!config.sbtcWalletAddress) throw new Error('SBTC wallet address not known');
  // peg out 1M satoshis
  addPegOutOutputs(psbt, config.fromBtcAddress, config.sbtcWalletAddress, totalInputValue, 1000000, 0);
  const fees = getVsizes(network, psbt, config.feeInfo, config.utxos.length);
  return {
    feeToApply: fees[0],
    pegOutAmount: totalInputValue - fees[2] - dustAmount,
    dustAmount,
    high: { change: totalInputValue - fees[2] - dustAmount, fee: fees[2] },
    medium: { change: totalInputValue - fees[1] - dustAmount, fee: fees[1] },
    low: { change: totalInputValue - fees[0] - dustAmount, fee: fees[0] },
  }
}

function getVsizes(network:any, psbt:Psbt, feeInfo:any, numbInputs:number) {
  try {
    const alice = ECPair.fromWIF(signer, network);
    psbt.signAllInputs(alice);
    psbt.validateSignaturesOfInput(0, validator);
    psbt.finalizeAllInputs();
    const transaction = psbt.extractTransaction();
    let vsize = transaction.virtualSize();
    vsize = vsize + numbInputs; // add 1 byte per signature
    const feeH = Math.floor((feeInfo.high_fee_per_kb / 1000) * vsize) // where feeRate is satoshi / byte
    const feeM = Math.floor((feeInfo.medium_fee_per_kb / 1000) * vsize) // where feeRate is satoshi / byte
    const feeL = Math.floor((feeInfo.low_fee_per_kb / 1000) * vsize) // where feeRate is satoshi / byte
    return [feeL, feeM, feeH];
  } catch (err) {
    // this works if the sig corresponds to the script pub key but
    // needs a way to sign with a dummy key to get the vsize...
    // for now just return a crude estimate of the tx size based on numb input and outputs
    // see https://github.com/bitcoinjs/bitcoinjs-lib/issues/1566
    return [4113, 6727, 10586];
  }
}

function addPegInOutputs(psbt:Psbt, fromBtcAddress: string, sbtcWalletAddress: string, stxAddress:string, totalInputValue: number, pegInAmount: number, fees: number) {
  const data = globalThis.Buffer.from(stxAddress, 'utf8');
  const embed = payments.embed({ data: [data] });
  if (!embed.output) throw new Error('Output data is missing');
  psbt.addOutput({ script: embed.output, value: 0 });
  psbt.addOutput({ address: sbtcWalletAddress, value: pegInAmount });
  const change = totalInputValue - pegInAmount - fees;
  if (change > 0) psbt.addOutput({ address: fromBtcAddress, value: change });
  return psbt;
}

function addPegOutOutputs(psbt:Psbt, fromBtcAddress: string, sbtcWalletAddress: string, totalInputValue: number, pegOutAmount:number, fees: number) {
  if (!fromBtcAddress) throw new Error('Sending Bitcoin address is missing');
  if (!sbtcWalletAddress) throw new Error('Receiving Bitcoin address is missing');
  const data = globalThis.Buffer.from("" + pegOutAmount, 'utf8');
  const embed = payments.embed({ data: [data] });
  if (!embed.output) throw new Error('Output data is missing');
  psbt.addOutput({ script: embed.output, value: 0 });
  psbt.addOutput({ address: sbtcWalletAddress, value: dustAmount });
  const change = totalInputValue - fees - dustAmount;
  if (change > 0) psbt.addOutput({ address: fromBtcAddress, value: change });
  return psbt;
}

