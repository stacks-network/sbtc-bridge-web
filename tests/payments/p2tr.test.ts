/**
 * Examples of P2TR bitcoin scripts.
 * Thanks to Oghenovo Usiwoma
 * See https://dev.to/eunovo/a-guide-to-creating-taproot-scripts-with-bitcoinjs-lib-4oph
 */
import { beforeAll, beforeEach, expect, describe, it } from 'vitest'
import { networks, payments, Psbt, initEccLib } from 'bitcoinjs-lib';
import assert from 'assert';
import { toXOnly, tapTweakHash } from './helper'
import * as ecc from 'tiny-secp256k1';
import ECPairFactory, { type ECPairInterface } from 'ecpair';
//import tinysecp from 'tiny-secp256k1';
import type { Signer } from 'bitcoinjs-lib';
import { crypto } from 'bitcoinjs-lib';
import { privateAdd, privateNegate } from 'tiny-secp256k1';
import tinysecp from 'tiny-secp256k1';
//import { ECPairFactory } from 'ecpair';
//import type { ECPairAPI, TinySecp256k1Interface } from 'ecpair';
import { SIGNER } from "$lib/psbt";

initEccLib(tinysecp as any);
const ECPair = ECPairFactory(ecc);

import BIP32Factory from 'bip32';
import type { BIP32Interface } from 'bip32';
// You must wrap a tiny-secp256k1 compatible implementation
const bip32 = BIP32Factory(ecc);
initEccLib(ecc);
//const xpub = 'xpub6CzDCPbtLrrn4VpVbyyQLHbdSMpZoHN4iuW64VswCyEpfjM2mJGdaHJ2DyuZwtst96E16VvcERb8BBeJdHSCVmAq9RhtRQg6eAZFrTKCNqf';
//const keypair = bip32.fromBase58(xpub).derive(0).derive(1);

//const child: BIP32Interface = node.derivePath('m/0/0');

/**
 * Test data
 * p2wsh: can create address with custom locking script
 */
const network = networks.testnet;

//const keypair: BIP32Interface = bip32.fromBase58('xprv9s21ZrQH143K3QTDL4LXw2F7HEK3wJUD2nW2nRk4stbPy6cq3jPPqjiChkVvvNKmPGJxWUtg6LnF5kejMRNNU3TGtRBeJgk33yuGBxrMPHi');

export function tweakSigner(signer: Signer, opts: any = {}): Signer {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let privateKey: Uint8Array | undefined = signer.privateKey!;
  if (!privateKey) {
      throw new Error('Private key is required for tweaking signer!');
  }
  //console.log('tweakSigner: signer.publicKey: ' + signer.publicKey.toString('hex'));
  //console.log('tweakSigner: privateKey: ' + Buffer.from(privateKey).toString('hex'));
  if (signer.publicKey[0] === 3) {
      privateKey = privateNegate(privateKey);
  }
  //console.log('tweakSigner: signer.publicKey[0]: ' + signer.publicKey[0]);

  const tweakedPrivateKey = privateAdd( 
      privateKey,
      tapTweakHash(toXOnly(signer.publicKey), opts.tweakHash),
  ); 
  if (!tweakedPrivateKey) {
      throw new Error('Invalid tweaked private key!');
  }
  //console.log('tweakSigner: tweakedPrivateKey: ' + Buffer.from(tweakedPrivateKey).toString('hex'));
  //return ECPair.fromWIF(SIGNER, opts.network);
  return ECPair.fromPrivateKey(Buffer.from(tweakedPrivateKey), {
    network: opts.network,
  });

  //console.log('keypair chainCode = ' + keypair.chainCode.toString('hex'))
  //return bip32.fromPrivateKey(Buffer.from(tweakedPrivateKey), keypair.chainCode, opts.network);
  //const seed = Buffer.from('Great balls of fire', 'utf8');
  //return bip32.fromSeed(seed, opts.network );
}


describe('suite', () => {
  beforeAll(async () => {
    //console.log("beforeAll: -----------------------------------------------");
  })

  beforeEach(async () => {
    // cant fetch mock here as only first mock is recognised
  })
  
  /**
   * Example 1: Simple Locking Script
   * Locking Script: 
   * Unlocking Script: 
   * Bitcoin is sent from the faucet to the address output from this test (https://testnet-faucet.com/btc-testnet/)
   * to this address: tb1pjr2agu0n6s5jnxr3mjrtgtu7xm66sgtjt8ujdhngzhttycy87pps4s60gz
   * See https://live.blockcypher.com/btc-testnet/tx/bf54693524bca6d456278708137b09438d146da89772df1997d0911807e1f087/
   * to this address: tb1pq5x7d2kque7xlxemjsxnash4hssex3cd7lcwjszkqm8kdu8k57ns0pw7rq
   * See https://live.blockcypher.com/btc-testnet/tx/a93d94b54b1cc19c8550732f688512d7ac5d79f9a713c68621eaa3515cc28a26/
   * to this address: tb1pa8mrd9npfnz6p3g827nl5wvwum5u92v8cq8aj2xt2avlkrlvk48sf65t09
   * See https://live.blockcypher.com/btc-testnet/tx/b292597c21bc3ba20e390a74f6756be521d3e5585d0d56404445da344c621620/
   */
  const txid = 'b292597c21bc3ba20e390a74f6756be521d3e5585d0d56404445da344c621620';
  const amount = 14065;
  const vout = 1;
  
  const keypair1 = ECPair.makeRandom({ network });
  //console.log('test 1: keypair1 privateKey: ' + keypair1.privateKey!.toString('hex'));

  const keypair = ECPair.fromWIF(SIGNER, networks.testnet);
  const tweakedSigner = tweakSigner(keypair, { network });
  let p2pktr: payments.Payment;

  it.concurrent('p2tr: can generate taproot key-spend address', async () => {
    p2pktr = payments.p2tr({
      pubkey: toXOnly(tweakedSigner.publicKey),
      network
    });
    assert(p2pktr.address?.startsWith('tb1p'));
    //console.log('test 1: p2tr test address: ' + p2pktr.address);
    //console.log('test 1: p2tr test address length: ' + p2pktr.address!.length);
    //console.log('test 1: p2tr output: ' + p2pktr.output!.toString('hex'));
  })
  /**
  it.concurrent('p2tr: can generate taproot key-spend transaction', async () => {
    const psbt = new Psbt({ network });
    psbt.addInput({
            hash: txid,
            index: vout,
            witnessUtxo: { value: amount, script: p2pktr.output! },
            tapInternalKey: toXOnly(tweakedSigner.publicKey)
    });
    
    psbt.addOutput({
            address: "tb1qvg648kruqq7yqmp7njhdgvmh8zecav3t24azle", // faucet address
            value: amount - 150
    });
    
    psbt.signTaprootInput(0, tweakedSigner);
    psbt.finalizeAllInputs();
    const tx = psbt.extractTransaction();
    console.log('test 2: tx hex: ' + tx.toHex());
    expect(tx.version).equals(2);
    //console.log(`Broadcasting Transaction Hex: ${tx.toHex()}`);
    //const txid = await broadcast(tx.toHex());
    //console.log(`Success! Txid is ${txid}`);
  })
   */

  /**
   * Example 2: Signed Locking Script
   * Locking Script: OP_HASH160 <HASH160(<secret>)> OP_EQUALVERIFY OP_DUP OP_HASH160 <recipient_address> OP_EQUALVERIFY OP_CHECKSIG
   * Unlocking Script: <signature> <pubkey> <secret>
   * 
   * Note: to decode a bech32 address - use bitcoinjs.address module
   * const recipientAddr = address.fromBech32("<bech32 address>"); 
   */

})
