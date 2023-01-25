import { Buffer } from 'buffer/';
import { Psbt, payments, networks } from 'bitcoinjs-lib';
import type { SbtcConfig } from '$types/sbtc_config';

export async function buildPegInTx(config:SbtcConfig) {
  if (!config.sbtcWalletAddress || !config.stxAddress || !config.utxos) throw new Error('wallet or inputs not defined.');
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
  const data = Buffer.from(config.stxAddress, 'utf8');
  const embed = payments.embed({ data: [data] });
  psbt.addOutput({ script: embed.output, value: 0 });
  psbt.addOutput({ address: config.sbtcWalletAddress, value: config.pegInAmount });
  psbt.addOutput({ address: config.fromBtcAddress, value: config.pegInChangeAmount });
  return psbt.toHex();
}

