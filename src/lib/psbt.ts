//import { Buffer } from 'buffer';
import { Psbt, payments, networks } from 'bitcoinjs-lib';
import type { SbtcConfig } from '$types/sbtc_config';
import * as ecc from 'tiny-secp256k1';
import ECPairFactory, { type ECPairInterface } from 'ecpair';
import { maxCommit } from "$lib/utxos";
import type { UTXO } from '$types/utxo';
import bitcoinMessage from 'bitcoinjs-message';

const ECPair = ECPairFactory(ecc);

// Used in peg out - amount sent to peg out wallet
export const DUST_AMOUNT = 500;
// Used for generating the peg out transaction gas fee
export const MESSAGE = 'This is an example of a signed message.'
// Used for generating the peg out transaction gas fee
export const SIGNER = 'cN5Ciwee1NA32zD7WNG78TmXBrnAb4jfQZohmh2Zj53mQjNAZV3R';

export async function transactionData(config:SbtcConfig) {
  return buildPsbt(config, false);
}

export async function transactionHex(psbt:Psbt) {
  return psbt.toHex();
  //return psbt.finalizeAllInputs().extractTransaction().toHex();
}

export function getNetwork (network:string) {
  return (network === 'testnet') ? networks.testnet : networks.bitcoin
}

export const keyPairs = [
  ECPair.makeRandom({ network: networks.testnet }),
  ECPair.makeRandom({ network: networks.testnet }),
];

export function getP2SHToP2WPKH(network:string) {
  const alice_pair = ECPair.fromWIF(SIGNER, getNetwork(network));
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

export function buildPsbt(config:SbtcConfig, feeCalc:boolean) {
  if (!config.fromBtcAddress || !config.sbtcWalletAddress || !config.utxos) throw new Error('wallet or inputs not defined.');
  const network = getNetwork(config.network);
  const psbt = new Psbt({ network });
  config.utxos.forEach((utxo) => {
    if (feeCalc) {
      const nonWitnessUtxo = globalThis.Buffer.from(utxo.tx.hex, 'hex');
      const redeemScript = getRedeemScript(config.network, utxo, keyPairs[0].publicKey);
      psbt.addInput({ hash: utxo.txid, index: utxo.vout, nonWitnessUtxo, redeemScript });
    } else {
      psbt.addInput({ hash: utxo.txid, index: utxo.vout });
    }
  })
  const totalInputValue = maxCommit(config.utxos);
  if (config.pegIn) {
    if (!config.stxAddress) throw new Error('stxAddress not defined.');
    if (feeCalc) addPegInOutputs(psbt, config.fromBtcAddress, config.sbtcWalletAddress, 'ST3JS8A0CHVNVJDCRPNJ1PSPJKTCZ4VSRYNVA55TW', totalInputValue, Math.floor(totalInputValue/2), 0);
    else addPegInOutputs(psbt, config.fromBtcAddress, config.sbtcWalletAddress, config.stxAddress, totalInputValue, config.feeCalc.pegInFeeCalc.pegInAmount, config.feeCalc.pegInFeeCalc.feeToApply);
  } else {
    let sig = config.sigData.signature;
    let feeToApply = config.feeCalc.pegOutFeeCalc.feeToApply
    if (feeCalc) {
      feeToApply = 0;
      const keyPair = ECPair.fromWIF(SIGNER, network);
      sig = getSigData(keyPair, MESSAGE).signature;
    }
    addPegOutOutputs(psbt, config.fromBtcAddress, config.sbtcWalletAddress, totalInputValue, config.feeCalc.pegOutFeeCalc.pegOutAmount, feeToApply, sig);
  }
  return psbt;
}

/**
 * Used to generate a signature to be stored in op_return as part of peg out.
 * Note: this is only used for fee estimation - the signed tx is discarded once
 * the fees have been calculated. The actual signature comes from an async signing
 * process.
 * @param network - the bitcoin network.
 * @param message - the message to be signed.
 * @returns 
 */
export function getSigData(keyPair:ECPairInterface, message:string, opts?:any) {
  const privateKey = keyPair.privateKey;
  if (!privateKey) throw new Error('Private key is undefined.')
  const signature = bitcoinMessage.sign(message, privateKey, keyPair.compressed, opts)
  return { signature, keyPair };
}

const validator = (
  pubkey: globalThis.Buffer,
  msghash: globalThis.Buffer,
  signature: globalThis.Buffer,
) => ECPair.fromPublicKey(pubkey).verify(msghash, signature);

export function calculateFee(config:SbtcConfig) {
  const psbt = buildPsbt(config, true);
  const totalInputValue = maxCommit(config.utxos);
  const pegInFeeCalc = calcFeesIn(config.network, config, psbt, totalInputValue);
  const pegOutFeeCalc = calcFeesOut(config.network, config, psbt, totalInputValue);
  return { pegInFeeCalc, pegOutFeeCalc }
}

function calcFeesIn(network:string, config:SbtcConfig, psbt:Psbt, totalInputValue:number) {
  const pegInAmount = Math.floor(totalInputValue/2);
  const fees = getVsizes(network, psbt, config.feeInfo, config.utxos.length);
  return {
    feeToApply: fees[0],
    pegInAmount,
    high: { change: totalInputValue - pegInAmount - fees[2], fee: fees[2] },
    medium: { change: totalInputValue - pegInAmount - fees[1], fee: fees[1] },
    low: { change: totalInputValue - pegInAmount - fees[0], fee: fees[0] },
  }
}

function calcFeesOut(network:string, config:SbtcConfig, psbt:Psbt, totalInputValue:number) {
  // peg out 1M satoshis
  const fees = getVsizes(network, psbt, config.feeInfo, config.utxos.length);
  return {
    feeToApply: fees[0],
    pegOutAmount: totalInputValue - fees[2] - DUST_AMOUNT,
    DUST_AMOUNT,
    high: { change: totalInputValue - fees[2] - DUST_AMOUNT, fee: fees[2] },
    medium: { change: totalInputValue - fees[1] - DUST_AMOUNT, fee: fees[1] },
    low: { change: totalInputValue - fees[0] - DUST_AMOUNT, fee: fees[0] },
  }
}

export function getSignedTransaction(net:string, psbt:Psbt) {
  const network = getNetwork(net);
  const alice = ECPair.fromWIF(SIGNER, network);
  psbt.signAllInputs(alice);
  psbt.validateSignaturesOfInput(0, validator);
  psbt.finalizeAllInputs();
  const transaction = psbt.extractTransaction();
  return transaction;
}

function getVsizes(network:string, psbt:Psbt, feeInfo:any, numbInputs:number) {
  try {
    const transaction = getSignedTransaction(network, psbt);
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

function addPegOutOutputs(psbt:Psbt, fromBtcAddress: string, sbtcWalletAddress: string, totalInputValue: number, pegOutAmount:number, fees: number, signature:Uint8Array) {
  if (!fromBtcAddress) throw new Error('Sending Bitcoin address is missing');
  if (!sbtcWalletAddress) throw new Error('Receiving Bitcoin address is missing');
  const buf1 = Buffer.allocUnsafe(11);
  buf1.writeUInt32LE((pegOutAmount));
  const buf2 = Buffer.from(signature);
  const data = Buffer.concat([buf1, buf2]);
  const embed = payments.embed({ data: [data] });
  if (!embed.output) throw new Error('Output data is missing');
  psbt.addOutput({ script: embed.output, value: 0 });
  psbt.addOutput({ address: sbtcWalletAddress, value: DUST_AMOUNT });
  const change = totalInputValue - fees - DUST_AMOUNT;
  if (change > 0) psbt.addOutput({ address: fromBtcAddress, value: change });
  return psbt;
}

