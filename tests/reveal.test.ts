import { beforeAll, beforeEach, expect, describe, it, vi } from 'vitest'
import * as btc from '@scure/btc-signer';
import * as secp from '@noble/secp256k1';
import { hex } from '@scure/base';
import { setConfig } from '$lib/config';
import { commitTx } from './reveal.data';
import { MAGIC_BYTES_TESTNET, PEGIN_OPCODE } from 'sbtc-bridge-lib'
import { c32address } from 'c32check';

const priv = secp.utils.randomPrivateKey()
type KeySet = {
	priv: Uint8Array,
	ecdsaPub: Uint8Array,
	schnorrPub: Uint8Array
}
const keySetForFeeCalculation: KeySet[] = []
keySetForFeeCalculation.push({
  priv,
  ecdsaPub: secp.getPublicKey(priv, true),
  schnorrPub: secp.getPublicKey(priv, false)
})

describe('suite', () => {
  beforeAll(async () => {
    //console.log("beforeAll: -----------------------------------------------");
  })

  beforeEach(async () => {
    // cant fetch mock here as only first mock is recognised
    setConfig('devnet')
  })

  it.concurrent('Decode the commit tx script', async () => {
    const wit = commitTx.commitTxScript?.witnessScript as string
    const script = hex.decode(wit);
    const scriptDec = btc.Script.decode(script);

    const d1:Uint8Array = (scriptDec[0]) as Uint8Array;
    const d2 = scriptDec[1].toString()
    const d3:Uint8Array = (scriptDec[2].valueOf()) as Uint8Array;

    const magic = d1.subarray(0,2);
    expect(hex.encode(magic)).equals(MAGIC_BYTES_TESTNET)
    const opCode = d1.subarray(2,3);
    expect(hex.encode(opCode).toUpperCase()).equals(PEGIN_OPCODE);
    expect(scriptDec[1].toString()).equals('DROP');

    const index = 2;
    const addr0 = parseInt(hex.encode(d1.subarray(index + 1, index + 2)), 16);
    const addr1 = hex.encode(d1.subarray(index + 2, index + 22));
    const stxAddress = c32address(addr0, addr1);
    const cnameBuf = new TextDecoder().decode(d1.subarray(index + 22, index + 56));
    const revealFee = parseInt(hex.encode(d1.subarray(index + 56, index + 84)), 16);

    console.log('d1: ', hex.encode(d1));
    console.log('OP: ', d2);
    console.log('d3: ', hex.encode(d3));
    console.log('- d1 parsed --------------');
    console.log('stxAddress: ', stxAddress);
    console.log('cnameBuf: ', cnameBuf);
    console.log('revealFee: ', revealFee);
    
    expect(stxAddress).equals(stxAddress)
    expect(d2).equals('DROP')
    expect(hex.encode(d1)).equals('54323c1a935113b2b705cc6de6c8a5c5b07a92e0b515ddb6')
    expect(hex.encode(d3)).equals('51201b13a556a9ec7ba01e48c80e18e8268ae8f8d33eb61e3c80a693450ceb77f672')
  })
/**
 * todo - fix - not working - mocking error
  it.concurrent('Check the utxo set after the initial commit transaction', async () => {
    // the first vout was spent to a wsh commit address.
    // see https://mempool.space/testnet/tx/72d1cebc1bb22757f549063926006f680fd5cb9e3388a214244735d8dd124533
    fetchMock.mockIf(/^.*tb1qxj5tpfsz836fyh5c3gfu2t9spjpzf924etnrsp\/utxo.*$/, () => {
      return JSON.stringify(utxos_nrsp);
    });

    const commitTx:PegInTransactionI = await PegInTransaction.create(CONFIG.VITE_NETWORK, testCommitKeys);
    expect(commitTx.addressInfo.ischange).equals(utxos_nrsp.ischange)
    expect(commitTx.addressInfo.utxos.length).equals(utxos_nrsp.utxos.length)
    expect(commitTx.addressInfo.utxos[0].value).equals(utxos_nrsp.utxos[0].value)
    expect(commitTx.addressInfo.utxos[0].txid).equals(utxos_nrsp.utxos[0].txid)
  })
 */

  /**
 * todo - fix - not working - mocking error

  it.concurrent('Build commit transaction', async () => {
    // the first vout was spent to a wsh commit address.
    // see https://mempool.space/testnet/tx/72d1cebc1bb22757f549063926006f680fd5cb9e3388a214244735d8dd124533
    fetchMock.mockIf(/^.*tb1qxj5tpfsz836fyh5c3gfu2t9spjpzf924etnrsp\/utxo.*$/, () => {
      return JSON.stringify(utxos_nrsp);
    });

    //const mock = vi.fn().mockImplementation(addresses)

    const pegin:PegInTransactionI = await PegInTransaction.create(CONFIG.VITE_NETWORK, testCommitKeys);
    
    //expect(mock).toHaveBeenCalledTimes(1)

    pegin.addressInfo = utxos_nrsp;
    
    expect(pegin.addressInfo.ischange).equals(utxos_nrsp.ischange)
    expect(pegin.addressInfo.utxos.length).equals(utxos_nrsp.utxos.length)
    expect(pegin.addressInfo.utxos[0].value).equals(utxos_nrsp.utxos[0].value)
    expect(pegin.addressInfo.utxos[0].txid).equals(utxos_nrsp.utxos[0].txid)

    try {
      pegin.fromBtcAddress = 'tb1qp8r7ln235zx6nd8rsdzkgkrxc238p6eecys2m9'
      const tx:btc.Transaction = pegin.buildOpDropTransaction()
      fail('No pubkey for address: tb1qp8r7ln235zx6nd8rsdzkgkrxc238p6eecys2m9')
    } catch(err) {
      //
    }
    try {
      pegin.fromBtcAddress = 'tb1psz58gxdxfdyqzur04r2vmgyau7mz5xmg52ns7hg8df7dpu0mlc3sz0wtkj'
      const tx:btc.Transaction = pegin.buildOpDropTransaction()
      const res = tx.sign(keySetForFeeCalculation[0].priv)
      expect(res).equals(true)
      fail('No pubkey for address: tb1qp8r7ln235zx6nd8rsdzkgkrxc238p6eecys2m9')
    } catch(err) {
      //
    }
  })
 */

  /**
  it.concurrent('ReclaimOrRevealTransaction.constructor() creates tx object in correct state.', async () => {
    fetchMock.mockIf(/^.*tb1p4m8lyp5m3tjfwq2288429rk7sxnp5xjqslxkvatkujtsr8kkxlgqu9r4cd\/utxo.*$/, () => {
      // sbtc taproot wallet
      return JSON.stringify(utxos_pqe8);
    });
    const revealTx = new ReclaimOrRevealTransaction(commitTx);
    revealTx.fetchUtxos();
    revealTx.addressInfo = sbtcWalletAddressInfo
    expect(revealTx.addressInfo.utxos.length).equals(1)
    fetchMock.mockIf(/^.*72d1cebc1bb22757f549063926006f680fd5cb9e3388a214244735d8dd124533\/hex.*$/, () => {
      // sbtc taproot wallet
      return JSON.stringify(txHex);
    });
    revealTx.fee = 5000

    const tx = await revealTx.buildTransaction(false);
    //expect(tx.inputsLength).equals(2)
    expect(tx.outputsLength).equals(1)
 
    //const res = tx.signIdx(privKey, 0) 
    //console.log('signIdx: ' + res)

    expect(Number(tx.getOutput(0).amount)).equals(commitTx.amount + 8916780 - revealTx.fee)
    if (revealTx.tx) {
      const psbt = revealTx.tx.toPSBT();
      console.log(hex.encode(revealTx.tx.toBytes()))
      console.log('------------------------------')
      console.log(hex.encode(psbt))
      console.log('------------------------------')
      console.log(base64.encode(psbt))
    }
    const partialTx = btc.Transaction.fromPSBT(base64.decode(btcCorePartial))
    //partialTx.finalizeIdx(1)
    //partialTx.finalizeIdx(0)
  })
   */

}) 
