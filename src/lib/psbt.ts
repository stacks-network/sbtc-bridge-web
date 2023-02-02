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

export async function transactionB64(psbt:Psbt) {
  return psbt.toBase64();
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
      witnessUtxo: {
        script: Buffer.from(utxo.fullout.scriptpubkey, 'hex'),
        value: utxo.value
      }
      // non-segwit inputs now require passing the whole previous tx as Buffer
      // see https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/test/integration/transactions.spec.ts
      // nonWitnessUtxo: Buffer.from(
      //   '0200000001f9f34e95b9d5c8abcd20fc5bd4a825d1517be62f0f775e5f36da944d9' +
      //     '452e550000000006b483045022100c86e9a111afc90f64b4904bd609e9eaed80d48' +
      //     'ca17c162b1aca0a788ac3526f002207bb79b60d4fc6526329bf18a77135dc566020' +
      //     '9e761da46e1c2f1152ec013215801210211755115eabf846720f5cb18f248666fec' +
      //     '631e5e1e66009ce3710ceea5b1ad13ffffffff01' +
      //     // value in satoshis (Int64LE) = 0x015f90 = 90000
      //     '905f010000000000' +
      //     // scriptPubkey length
      //     '19' +
      //     // scriptPubkey
      //     '76a9148bbc95d2709c71607c60ee3f097c1217482f518d88ac' +
      //     // locktime
      //     '00000000',
      //   'hex',
      // ),
      // // If this input was segwit, instead of nonWitnessUtxo, you would add
      // // a witnessUtxo as follows. The scriptPubkey and the value only are needed.
      // witnessUtxo: {
      //   script: Buffer.from(
      //     '76a9148bbc95d2709c71607c60ee3f097c1217482f518d88ac',
      //     'hex',
      //   ),
      //   value: 90000,
      // },
      
    });
    change += utxo.value;
  })
  const data = Buffer.from(config.stxAddress, 'utf8');
  const embed = payments.embed({ data: [data] });
  psbt.addOutput({ script: embed.output, value: 0 });
  psbt.addOutput({ address: config.sbtcWalletAddress, value: config.pegInAmount });
  if (config.pegInChangeAmount > 0) psbt.addOutput({ address: config.fromBtcAddress, value: config.pegInChangeAmount });
  //const opReturns = config.stxAddress.split('.')
  //if (opReturns.length === 2) {
  //  data = Buffer.from(opReturns[1], 'utf8');
  //  embed = payments.embed({ data: [data] });
  //  psbt.addOutput({ script: embed.output, value: 0 });
  //}
  psbt.setVersion(1);

  return psbt;
}

function buildOutTransaction(config:SbtcConfig) {
  if (!config.sbtcWalletAddress || !config.fromBtcAddress || !config.utxos) throw new Error('wallet or inputs not defined.');
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
    //const witnessUtxo = getWitnessUtxo(utxo, network);
    psbt.addInput({ hash: utxo.txid, index: utxo.vout  });
    change += utxo.value;
  })
  //const opReturns = config.stxAddress.split('.')
  const data = Buffer.from("" + config.pegOutAmount, 'utf8');
  const embed = payments.embed({ data: [data] });
  psbt.addOutput({ script: embed.output, value: 0 });
  if (config.pegOutChangeAmount < dustAmount) { throw new Error('Not enough to send dust.')}
  psbt.addOutput({ address: config.sbtcWalletAddress, value: dustAmount });
  if (config.pegOutChangeAmount > 0) psbt.addOutput({ address: config.fromBtcAddress, value: (config.pegOutChangeAmount - dustAmount) });
  //if (opReturns.length === 2) {
  //  data = Buffer.from(opReturns[1], 'utf8');
  //  embed = payments.embed({ data: [data] });
  //  psbt.addOutput({ script: embed.output, value: 0 });
  //}
  //return psbt.extractTransaction().toHex();
  return psbt;
}

