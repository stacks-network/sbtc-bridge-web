import { Buffer } from 'buffer/';
import { Psbt, payments, networks } from 'bitcoinjs-lib';
import type { SbtcConfig } from '$types/sbtc_config';

const dustAmount = 5000;

export async function transactionData(config:SbtcConfig) {
  if (config.pegIn) {
    return buildTransaction(config);
  }
  return buildOutTransaction(config);
}

export async function transactionHex(psbt:Psbt) {
  return psbt.toHex();
  //return psbt.finalizeAllInputs().extractTransaction().toHex();
}

function buildTransaction(config:SbtcConfig) {
  if (!config.fromBtcAddress || !config.sbtcWalletAddress || !config.stxAddress || !config.utxos) throw new Error('wallet or inputs not defined.');
  console.log('utxos --> ', config);
  let network: any;
  if (config.network === 'testnet') {
    network = networks.testnet;
  } else {
    network = networks.bitcoin;
  }

  const psbt = new Psbt({ network });
  let change = 0;
  config.utxos.forEach((utxo) => {
    psbt.addInput({
      hash: utxo.txid, 
      index: utxo.vout, 
      ///witnessUtxo: {
      //  script: Buffer.from(utxo.fullout.scriptpubkey_asm, 'hex'),
      //  value: utxo.value
      //}
    });
    change += utxo.value;
  })
  if (config.pegIn) {
    addPegInOuts(config, psbt);
  } else {
    addPegOutOuts(config, psbt);
  }
  return psbt;
}

function addPegInOuts(config:SbtcConfig, psbt:Psbt) {
  const data = Buffer.from(config.stxAddress, 'utf8');
  const embed = payments.embed({ data: [data] });
  psbt.addOutput({ script: embed.output, value: 0 });
  psbt.addOutput({ address: config.sbtcWalletAddress, value: config.pegInAmount });
  if (config.pegInChangeAmount > 0) psbt.addOutput({ address: config.fromBtcAddress, value: config.pegInChangeAmount });
  return psbt;
}

function addPegOutOuts(config:SbtcConfig, psbt:Psbt) {
  const data = Buffer.from("" + config.pegOutAmount, 'utf8');
  const embed = payments.embed({ data: [data] });
  psbt.addOutput({ script: embed.output, value: 0 });
  if (config.pegOutChangeAmount < dustAmount) { throw new Error('Not enough to send dust.')}
  psbt.addOutput({ address: config.sbtcWalletAddress, value: dustAmount });
  if (config.pegOutChangeAmount > 0) psbt.addOutput({ address: config.fromBtcAddress, value: (config.pegOutChangeAmount - dustAmount) });
  return psbt;
}

