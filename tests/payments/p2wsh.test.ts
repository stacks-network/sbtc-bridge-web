/**
 * Examples of P2WSH bitcoin scripts.
 * Thanks to Oghenovo Usiwoma
 * See https://dev.to/eunovo/unlocking-the-power-of-p2wsh-a-step-by-step-guide-to-creating-and-spending-coins-with-bitcoin-scripts-using-bitcoinjs-lib-a7o
 */
import { beforeAll, beforeEach, expect, describe, it } from 'vitest'
import { networks, script, opcodes, payments, Psbt, crypto, address } from 'bitcoinjs-lib';
import assert, { fail } from 'assert';
import { witnessStackToScriptWitness } from './helper'
import util from 'util'
import { addressList } from '../test_data';
import * as ecc from 'tiny-secp256k1';
import ECPairFactory from 'ecpair';

/**
 * Test data
 * p2wsh: can create address with custom locking script
 */
const network = networks.testnet;
const ECPair = ECPairFactory(ecc);

let p2wsh: payments.Payment;

describe('suite', () => {
  beforeAll(async () => {
    //console.log("beforeAll: -----------------------------------------------");
  })

  beforeEach(async () => {
    // cant fetch mock here as only first mock is recognised
  })
  
  /**
   * Example 1: Unsigned Locking Script
   * Locking Script: OP_ADD 5 OP_EQUAL
   * Unlocking Script: script.compile([script.number.encode(1), script.number.encode(4)])
   * Bitcoin is sent from the faucet to the address output from this test (https://testnet-faucet.com/btc-testnet/)
   */
  const txid = 'f8f2b0d1983a639989907b9bb922b87713a6772bef4b06cacdd9bc157b96e5ea';
  const amount = 12019
  const lockingScript = script.compile([
    opcodes.OP_ADD,
    script.number.encode(5),
    opcodes.OP_EQUAL
  ]);
  const finalizeInput = (_inputIndex: number, input: any) => {
    const redeemPayment = payments.p2wsh({
        redeem: {
          input: script.compile([
            script.number.encode(1),
            script.number.encode(4)
          ]),
          output: input.witnessScript
        }
      });
  
      const finalScriptWitness = witnessStackToScriptWitness(
        redeemPayment.witness ?? []
      );
  
      return {
        finalScriptSig: Buffer.from(""),
        finalScriptWitness
      }
  }
    
  it.concurrent('p2wsh: can create address with custom locking script', async () => {
    p2wsh = payments.p2wsh({ redeem: { output: lockingScript, network }, network });
    assert(p2wsh.address?.startsWith('tb1'));
    console.log('test 1: p2wsh test address: ' + p2wsh.address);
    if (p2wsh.output) console.log('test 1: p2wsh output: ' + p2wsh.output.toString('hex'));
  })

  it.concurrent('p2wsh: can create tx to spend btc locked by locking script', async () => {
    const psbt = new Psbt({ network });
    psbt.addInput({
      hash: txid,
      index: 1,
      witnessUtxo: {
          script: p2wsh.output!,
          value: amount
      },
      witnessScript: lockingScript
    });
    const toAddress = addressList[1];
    const toAmount = amount - 1000;
    psbt.addOutput({
        address: toAddress,
        value: toAmount
    });
    // Note: signing the input is not required - see the simple locking script above.
    psbt.finalizeInput(0, finalizeInput);
    const tx = psbt.extractTransaction();
    expect(tx.version).equals(2);
    console.log(tx.toHex());
  })

  /**
   * Example 2: Signed Locking Script
   * Locking Script: OP_HASH160 <HASH160(<secret>)> OP_EQUALVERIFY OP_DUP OP_HASH160 <recipient_address> OP_EQUALVERIFY OP_CHECKSIG
   * Unlocking Script: <signature> <pubkey> <secret>
   * 
   * Note: to decode a bech32 address - use bitcoinjs.address module
   * const recipientAddr = address.fromBech32("<bech32 address>"); 
   */
  const preimage = Buffer.from('secret');
  const hash = crypto.hash160(preimage);
  const keypair = ECPair.makeRandom({ network });
  const publicKey = keypair.publicKey;
  const recipAddr = crypto.hash160(publicKey);
  const lockingScript2 = script.compile([
    opcodes.OP_HASH160,
    hash,
    opcodes.OP_EQUALVERIFY,
    opcodes.OP_DUP,
    opcodes.OP_HASH160,
    recipAddr,
    opcodes.OP_EQUALVERIFY,
    opcodes.OP_CHECKSIG
  ]);
  const finalizeInput2 = (_inputIndex: number, input: any) => {
    const redeemPayment = payments.p2wsh({
      redeem: {
        input: script.compile([
          input.partialSig[0].signature,
          publicKey,
          preimage
        ]),
        output: input.witnessScript
      }
    });

    const finalScriptWitness = witnessStackToScriptWitness(
      redeemPayment.witness ?? []
    );

    return {
      finalScriptSig: Buffer.from(""),
      finalScriptWitness
    }
  }

  it.concurrent('p2wsh: can create address with complex locking script', async () => {
    p2wsh = payments.p2wsh({ redeem: { output: lockingScript2, network }, network });
    assert(p2wsh.address?.startsWith('tb1'));
    console.log('test 2: p2wsh address: ' + p2wsh.address);
    if (p2wsh.output) console.log('test 2: p2wsh output: ' + p2wsh.output.toString('hex'));
  })

  it.concurrent('p2wsh: can create tx to spend btc locked by locking script', async () => {
    const psbt = new Psbt({ network });
    psbt.addInput({
      hash: txid,
      index: 1,
      witnessUtxo: {
          script: p2wsh.output!,
          value: amount
      },
      witnessScript: lockingScript2
    });
    const toAddress = addressList[1];
    const toAmount = amount - 1000;
    psbt.addOutput({
        address: toAddress,
        value: toAmount
    });
    // Note: signing the input is not required - see the simple locking script above.
    psbt.signInput(0, keypair);
    psbt.finalizeInput(0, finalizeInput2);
    const tx = psbt.extractTransaction();
    expect(tx.version).equals(2);
    console.log('test 2: tx hex: ' + tx.toHex());
  })

})
