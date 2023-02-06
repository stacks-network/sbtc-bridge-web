import { beforeAll, beforeEach, expect, describe, it, vi } from 'vitest'
import { calculateFee, transactionData, transactionHex, getRedeemScript, getP2SHToP2WPKH } from "$lib/psbt";
import { maxCommit, attachTransaction } from "$lib/utxos";
import { sbtcConfig, tx0, tx1, utxo1, utxo0 } from './test_data';
//import { Buffer } from 'buffer';
import type { SbtcConfig } from '$types/sbtc_config';
import util from 'util'
import { assert } from 'console';
import type { UTXO } from '$types/utxo';

const network = 'testnet';

async function attachTxs(utxos:[UTXO]) {
  for (let utxo of utxos) {
    if (utxo.txid === '894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04') {
      fetchMock.mockIf(/^.*894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04.*$/, () => {
        return JSON.stringify(tx1);
      });
    } else if (utxo.txid === '5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508') {
      fetchMock.mockIf(/^.*5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508.*$/, () => {
        return JSON.stringify(tx0);
      });
    }
    utxo = await attachTransaction(network, utxo);
  }  
  return utxos;
}

async function prepareFee(rate:string, utxos:[UTXO], printme:boolean) {
  const conf:SbtcConfig = sbtcConfig;
  conf.utxos = await attachTxs(utxos);
  if (printme) console.log('tx0:', util.inspect(conf.utxos, false, null, true /* enable colors */))

  const maxPeg = maxCommit(conf.utxos);
  // fee calculation see: https://github.com/bitcoinjs/bitcoinjs-lib/issues/1566
  // create a transaction with no fee (change output value = input total - send total)
  conf.pegIn = true;
  conf.feeCalc.pegInFeeCalc.pegInAmount = maxPeg / 2;
  const change = maxPeg - conf.feeCalc.pegInFeeCalc.pegInAmount;
  assert(maxPeg === conf.feeCalc.pegInFeeCalc.pegInAmount + change)
  if (rate === 'high') conf.feeCalc.pegInFeeCalc.feeToApply = conf.feeInfo.high_fee_per_kb;
  else if (rate === 'medium') conf.feeCalc.pegInFeeCalc.feeToApply = conf.feeInfo.medium_fee_per_kb;
  else  conf.feeCalc.pegInFeeCalc.feeToApply = conf.feeInfo.low_fee_per_kb;
  const res = await calculateFee(conf);
  return res;
}

describe('suite', () => {
  beforeAll(async () => {
    //console.log("beforeAll: -----------------------------------------------");
  })

  beforeEach(async () => {
    // cant fetch mock here as only first mock is recognised
  })

  it.concurrent('stacks: getRedeemScript() returns Redeem Script object', async () => {
    const conf:SbtcConfig = sbtcConfig;
    //const addr = getP2SHToP2WPKH(conf.network);
    utxo0[0].tx = tx0;
    const res = getRedeemScript(conf.network, utxo0);
    //console.log('Redeem Script:', util.inspect(res, false, null, true /* enable colors */))
  })

  it.concurrent('stacks: calculateFee() tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss on peg in returns correct fee and change for high rate', async () => {
    const res = await prepareFee('high', utxo1, false)
    expect(res.pegInAmount).equals(6653600);
    expect(res.change).equals(6642750);
    expect(res.fee).equals(10850);
  })

  it.concurrent('stacks: calculateFee() 2MuLrqCQds5Sz3Xenj29WeuBGFAuoLy6Z53 on peg in returns correct fee and change for high rate', async () => {
    const res = await prepareFee('high', utxo0, false)
    expect(res.pegInAmount).equals(6653600);
    expect(res.change).equals(6642750);
    expect(res.fee).equals(10850);
  })

  it.concurrent('stacks: calculateFee() 2MuLrqCQds5Sz3Xenj29WeuBGFAuoLy6Z53 on peg in returns correct fee and change at medium rates', async () => {
    const res = await prepareFee('medium', utxo0, false)
    expect(res.pegInAmount).equals(6653600);
    expect(res.change).equals(6646005);
    expect(res.fee).equals(7595);
  })

  it.concurrent('stacks: calculateFee() 2MuLrqCQds5Sz3Xenj29WeuBGFAuoLy6Z53 on peg in returns correct fee and change at low rates', async () => {
    const res = await prepareFee('low', utxo0, true)
    expect(res.pegInAmount).equals(6653600);
    expect(res.change).equals(6649260);
    expect(res.fee).equals(4340);
  })

  it.concurrent('stacks: transactionData() returns psbt object', async () => {
    const conf:SbtcConfig = sbtcConfig;
    conf.utxos = utxo1;
    const res = await transactionData(conf);
    expect(res.data.inputs.length === 1);
    expect(res.data.outputs.length === 13);
    //console.log('PSBT:', util.inspect(res, false, null, true /* enable colors */))
  })

  it.concurrent('stacks: transactionHex() returns hex object', async () => {
    const conf:SbtcConfig = sbtcConfig;
    conf.utxos = utxo1;
    const res = await transactionData(conf);
    const hex = transactionHex(res);
    expect(typeof hex === 'string');
  })

})
