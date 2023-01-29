import { Buffer } from 'buffer/';
import { Psbt, payments, networks } from 'bitcoinjs-lib';
import type { SbtcConfig } from '$types/sbtc_config';

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
    psbt.addInput({ hash: utxo.txid, index: utxo.vout });
    change += utxo.value;
  })
  psbt.addOutput({ address: config.sbtcWalletAddress, value: config.pegInAmount });
  if (config.pegInChangeAmount > 0) psbt.addOutput({ address: config.fromBtcAddress, value: config.pegInChangeAmount });
  //const opReturns = config.stxAddress.split('.')
  const data = Buffer.from(config.stxAddress, 'utf8');
  const embed = payments.embed({ data: [data] });
  psbt.addOutput({ script: embed.output, value: 0 });
  //if (opReturns.length === 2) {
  //  data = Buffer.from(opReturns[1], 'utf8');
  //  embed = payments.embed({ data: [data] });
  //  psbt.addOutput({ script: embed.output, value: 0 });
  //}
  return psbt;
}
export async function transactionHex(psbt:Psbt) {
  return psbt.toHex();
}

export async function transactionData(config:SbtcConfig) {
  return buildTransaction(config);
}

