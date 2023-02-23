import { beforeAll, beforeEach, expect, describe, it } from 'vitest'
import { SIGNER, MESSAGE, getSignedTransaction, buildPsbt, transactionData, transactionHex, getRedeemScript, getSigData } from "$lib/psbt";
import { verifySignedMessage } from '$lib/stacks'
import bitcoinMessage from 'bitcoinjs-message';
import { attachTxs, prepareFee, getBtcAddress, getBtcAddressLegacy, getBtcAddressP2WPKH, getBtcAddressP2SHP2WPKH } from './helper'
import { DEPLOYER_PK, sbtcConfig, tx0, utxo1, utxo0 } from './test_data';
import type { SbtcConfig } from '$types/sbtc_config';
import * as ecc from 'tiny-secp256k1';
import ECPairFactory from 'ecpair';
import assert, { fail } from 'assert';
import util from 'util'
import { networks } from 'bitcoinjs-lib';

const ECPair = ECPairFactory(ecc);

describe('suite', () => {
  beforeAll(async () => {
    //console.log("beforeAll: -----------------------------------------------");
  })

  beforeEach(async () => {
    // cant fetch mock here as only first mock is recognised
  })

  it.concurrent('psbt: getRedeemScript() returns Redeem Script object', async () => {
    const conf:SbtcConfig = sbtcConfig;
    utxo0[0].tx = tx0;
    const alice_pair = ECPair.fromWIF(SIGNER, networks.testnet);
    const res = getRedeemScript(utxo0[0], alice_pair.publicKey);
    expect(res?.toString('hex')).equals('00143e16009af8fc7edac27cd978ef590cc8e8c11240');
  })

  it.concurrent('psbt: calculateFee() tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss on peg in returns correct fee and change for high rate', async () => {
    const res = await prepareFee('high', utxo1, false);
    expect(res.pegInFeeCalc.pegInAmount).equals(6653600);
    expect(res.pegInFeeCalc.feeToApply).equals(4340);
  })

  it.concurrent('psbt: calculateFee() 2MuLrqCQds5Sz3Xenj29WeuBGFAuoLy6Z53 on peg in returns correct fee and change for high rate', async () => {
    const res = await prepareFee('high', utxo0, false)
    expect(res.pegInFeeCalc.pegInAmount).equals(148950);
    expect(res.pegInFeeCalc.feeToApply).equals(4113);
  })

  it.concurrent('psbt: calculateFee() 2MuLrqCQds5Sz3Xenj29WeuBGFAuoLy6Z53 on peg in returns correct fee and change at medium rates', async () => {
    const res = await prepareFee('medium', utxo0, false)
    expect(res.pegInFeeCalc.pegInAmount).equals(148950);
    expect(res.pegInFeeCalc.feeToApply).equals(4113);
  })

  it.concurrent('psbt: calculateFee() 2MuLrqCQds5Sz3Xenj29WeuBGFAuoLy6Z53 on peg in returns correct fee and change at low rates', async () => {
    const res = await prepareFee('low', utxo0, false)
    expect(res.pegInFeeCalc.pegInAmount).equals(148950);
    expect(res.pegInFeeCalc.feeToApply).equals(4113);
  })

  it.concurrent('psbt: transactionHex() returns hex object', async () => {
    const conf:SbtcConfig = sbtcConfig;
    conf.utxos = utxo1;
    const keyPair = ECPair.fromWIF(SIGNER, networks.testnet);
    conf.sigData = getSigData(keyPair, MESSAGE);
    const res = await transactionData(conf);
    const hex = await transactionHex(res);
    assert(typeof hex === 'string');
  })

  it.concurrent('psbt: getSigData() verifies signature for p2sh', async () => {
    const keyPair = ECPair.makeRandom();
    const sigData = getSigData(keyPair, MESSAGE, { segwitType: 'p2sh(p2wpkh)' });
    const address = getBtcAddress(keyPair.publicKey);
    if (!address) throw new Error('no address');
    assert(address.startsWith('2'))
    const valid = bitcoinMessage.verify(MESSAGE, address, sigData.signature)
    assert(valid);
  })

  it.concurrent('psbt: getSigData() verifies signature for legacy address', async () => {
    const keyPair = ECPair.makeRandom();
    const sigData = getSigData(keyPair, MESSAGE);
    const address = getBtcAddressLegacy(keyPair.publicKey);
    if (!address) throw new Error('no address');
    assert(address.startsWith('1'))
    const valid = bitcoinMessage.verify(MESSAGE, address, sigData.signature)
    assert(valid);
  })

  it.concurrent('psbt: getSigData() verifies signature for segwit p2wpkh', async () => {
    const keyPair = ECPair.makeRandom();
    const sigData = getSigData(keyPair, MESSAGE, { segwitType: 'p2wpkh' });
    const address = getBtcAddressP2WPKH(keyPair.publicKey);
    if (!address) throw new Error('no address');
    assert(address.startsWith('tb1')) 
    const valid = bitcoinMessage.verify(MESSAGE, address, sigData.signature)
    assert(valid); 
  })

  it.concurrent('psbt: getSigData() verifies signature for segwit p2sh(p2wpkh)', async () => {
    const keyPair = ECPair.makeRandom();
    const sigData = getSigData(keyPair, MESSAGE, { segwitType: 'p2sh(p2wpkh)' });
    const address = getBtcAddressP2SHP2WPKH(keyPair.publicKey);
    if (!address) throw new Error('no address');
    assert(address.startsWith('2'));
    const valid = bitcoinMessage.verify(MESSAGE, address, sigData.signature)
    assert(valid); 
  })

  it.concurrent('psbt: buildPsbt() builds output 0 with segwit p2wpkh according to \'Peg-out Request Transaction in SIP021\'', async () => {
    // prepare config object needed to build PSBT
    const conf:SbtcConfig = sbtcConfig;
    conf.utxos = await attachTxs(utxo1);
    conf.feeCalc.pegOutFeeCalc.pegOutAmount = 1999999999;
    conf.feeCalc.pegOutFeeCalc.feeToApply = 0;
    const keyPair = ECPair.makeRandom();
    const sigData = getSigData(keyPair, MESSAGE, { segwitType: 'p2wpkh' });
    const address = getBtcAddressP2WPKH(keyPair.publicKey);
    conf.sigData = sigData;

    // Build the psbt and sign to extract full transaction - check correct number of inputs and outputs
    const psbt = await buildPsbt(conf, true);
    const tx = getSignedTransaction(psbt);
    assert(tx.ins.length === 1);
    assert(tx.outs.length === 3);

    // Read the buffer containing the wire format for output 0 (see Peg-out Request Transaction in SIP021)
    const buf = Buffer.from(tx.outs[0].script);
    const pegOutAmount = buf.readUInt32LE(3);
    assert(pegOutAmount === conf.feeCalc.pegOutFeeCalc.pegOutAmount);
    const bufSig = Buffer.alloc(65); 
    buf.copy(bufSig, 0, 14, 79);
    if (!address) throw new Error('no address');
    assert(address.startsWith('tb1'));
    const valid = bitcoinMessage.verify(MESSAGE, address, sigData.signature);
    assert(valid); 

    // assert output 2 and 3 contain the expected dust and change amounts respectively.
    assert(tx.outs[1].value === 500);
    assert(tx.outs[2].value === 13306700);
  })

  it.concurrent('psbt: buildPsbt() builds output 0 with p2sh according to \'Peg-out Request Transaction in SIP021\'', async () => {
    // prepare config object needed to build PSBT
    const conf:SbtcConfig = sbtcConfig;
    conf.utxos = await attachTxs(utxo1);
    conf.feeCalc.pegOutFeeCalc.pegOutAmount = 1999999999;
    conf.feeCalc.pegOutFeeCalc.feeToApply = 0;
    const keyPair = ECPair.makeRandom();
    const sigData = getSigData(keyPair, MESSAGE, { segwitType: 'p2sh(p2wpkh)' });
    const address = getBtcAddress(keyPair.publicKey);
    conf.sigData = sigData;

    // Build the psbt and sign to extract full transaction - check correct number of inputs and outputs
    const psbt = await buildPsbt(conf, true);
    const tx = getSignedTransaction(psbt);
    assert(tx.ins.length === 1);
    assert(tx.outs.length === 3);

    // Read the buffer containing the wire format for output 0 (see Peg-out Request Transaction in SIP021)
    const buf = Buffer.from(tx.outs[0].script);
    const pegOutAmount = buf.readUInt32LE(3);
    assert(pegOutAmount === conf.feeCalc.pegOutFeeCalc.pegOutAmount);
    const bufSig = Buffer.alloc(65); 
    buf.copy(bufSig, 0, 14, 79);
    if (!address) throw new Error('no address');
    assert(address.startsWith('2'));
    const valid = bitcoinMessage.verify(MESSAGE, address, sigData.signature);
    // assert output 2 and 3 contain the expected dust and change amounts respectively.
    assert(tx.outs[1].value === 500);
    assert(tx.outs[2].value === 13306700);
    assert(valid);
  })

/**
 * TODO: more tests of the stacks signature process are needed.
 */
it.concurrent('psbt: verifySignedMessage() verify stacks message', async () => {
    const deployer = ECPair.fromWIF(DEPLOYER_PK.wif, networks.testnet);
    //const address = getBtcAddressLegacy(getNetwork(network), deployer.publicKey);
    //console.log('address:' + address);
    // msg, sig is taken from the signature produced by the ui for the deployer account.
    const sig = '3b1f051d7ef3d87069a352658d158fbc874c2255bf5acb32ac20091df95d87675091ef73a187a7cdf4b530117a9cbd47f82730fd27e11584c5f2b2f0acc64dcc01'
    const msg = {
      btcAddress: 'tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5',
      amount: 5506620,
      signature: sig
    }
    //console.log('keyPair2.publicKey:' + deployer.publicKey.toString('hex'));

    const veryif = verifySignedMessage(msg, deployer.publicKey.toString('hex'));
    assert(veryif);
  })

})
