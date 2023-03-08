import { beforeAll, beforeEach, expect, describe, it } from 'vitest'
import * as btc from 'micro-btc-signer';
import * as secp from '@noble/secp256k1';
import { hex } from '@scure/base';
import PegInTransaction from '$lib/domain/PegInTransaction';
import type { PegInTransactionI } from '$lib/domain/PegInTransaction';
import assert, { fail } from 'assert';
import { pegin1 } from './data/data_pegin_p2wpkh'
import { sha256 } from '@noble/hashes/sha256';

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
  schnorrPub: secp.schnorr.getPublicKey(priv)
})

describe('suite', () => {
  beforeAll(async () => {
    //console.log("beforeAll: -----------------------------------------------");
  })

  beforeEach(async () => {
    // cant fetch mock here as only first mock is recognised
  })

  it.concurrent('PegInTransaction.constructor() returns pegin builder in state not ready', async () => {
    const piTx:PegInTransactionI = new PegInTransaction();
    expect(typeof piTx).equals('object')
    expect(!piTx.ready)
  })

  it.concurrent('PegInTransaction.hydrate() returns pegin builder in state not ready', async () => {
    const piTx:PegInTransactionI = await PegInTransaction.hydrate(pegin1);
    expect(piTx.fromBtcAddress).equals('tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq');
    expect(piTx.pegInData.sbtcWalletAddress).equals('tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss');
    expect(piTx.pegInData.stacksAddress).equals('ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN');
    expect(piTx.pegInData.amount).equals(4203951);
    expect(piTx.addressInfo.address).equals('tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq');
    expect(piTx.addressInfo.utxos.length).equals(1);
    expect(piTx.addressInfo.utxos[0].txid).equals('c40b8cd078aaa183c14d6e8f2fc28645f65006bde137a20035f5d427bbca151b');
    expect(piTx.addressInfo.utxos[0].vout).equals(0);
    //console.log('piTx.fee=' + piTx.fee);
    expect(piTx.fees[1]).equals(4629);
    expect(piTx.feeInfo.high_fee_per_kb).equals(51156);
    expect(piTx.fee).equals(1916);
    expect(piTx.scureFee).equals(600);
    expect(piTx.ready);
    expect(piTx.dust).equals(500);
  })

  it.concurrent('PegInTransaction.getChange() returns the correct change', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    expect(myPeg.getChange()).equals(0)
    myPeg.setAmount(4203950)
    expect(myPeg.getChange()).equals(1)
  })

  it.concurrent('PegInTransaction.setAmount() throws if amount too high', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    expect(myPeg.getChange()).equals(0)
    try {
      myPeg.setAmount(4203952)
      fail('error expected');
    } catch(err) { expect(err)}
  })

  it.concurrent('PegInTransaction.setAmount() throws if amount too high', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    expect(myPeg.getChange()).equals(0)
    try {
      myPeg.setAmount(4203952)
      fail('error expected');
    } catch(err) { expect(err)}
  })

  it.concurrent('PegInTransaction.setAmount() successful', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    expect(myPeg.getChange()).equals(0)
    try {
      myPeg.setAmount(4203949)
      expect(myPeg.getChange()).equals(2)
    } catch(err) { fail('error expected') }
  })

  it.concurrent('PegInTransaction.setFeeRate() sets default rate if rate passed is unknown', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    myPeg.setFeeRate(4)
    expect(myPeg.fee).equals(myPeg.fees[1])
  })

  it.concurrent('PegInTransaction.setFeeRate() auto decreases amount if balance + fee is exceeded', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    myPeg.setFeeRate(0);
    expect(myPeg.fee).equals(myPeg.fees[0])
    const amount = myPeg.pegInData.amount;
    myPeg.setFeeRate(1);
    expect(myPeg.pegInData.amount < amount);
  })

  it.concurrent('PegInTransaction.calculateFees() resets the current rate', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    myPeg.setFeeRate(0);
    myPeg.calculateFees();
    myPeg.setFeeRate(1);
    expect(myPeg.fee).equals(myPeg.fees[1])
    expect(myPeg.fee).equals(600)
  })

  it.concurrent('PegInTransaction.calculateFees() sets correct ratios of scure fee', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    myPeg.calculateFees();
    myPeg.setFeeRate(1);
    expect(myPeg.fee).equals(myPeg.fees[1])
    expect(myPeg.fee * 0.8).equals(myPeg.fees[0])
    expect(myPeg.fee * 1.2).equals(myPeg.fees[2])
  })

  it.concurrent('PegInTransaction.setStacksAddress() throws if stacks address bad format', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    try {
      myPeg.setStacksAddress(pegin1.fromBtcAddress);
      fail('should throw')
    } catch (err) {
      expect(err)
    }
  })

  it.concurrent('PegInTransaction.setStacksAddress() throws if stacks testnet address wrong network', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    try {
      myPeg.net = btc.NETWORK;
      myPeg.setStacksAddress(pegin1.pegInData.stacksAddress);
      fail('should throw')
    } catch (err:any) {
      expect(err.message.indexOf('Please enter a valid stacks blockchain mainnet address') > -1)
    }
  })

  it.concurrent('PegInTransaction.setStacksAddress() throws if stacks mainnet address wrong network', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    try {
      myPeg.net = btc.TEST_NETWORK;
      myPeg.setStacksAddress('SPCAQ4RCYJ30BYKJ9Z6BRGS3169PWZNN89NH4MCS');
      fail('should throw')
    } catch (err:any) {
      expect(err.message.indexOf('Please enter a valid stacks blockchain testnet address') > -1)
    }
  })

  it.concurrent('PegInTransaction.getInputsForDisplay() returns correct data', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    const inputs = myPeg.getInputsForDisplay();
    expect(inputs.length).equals(1)
    expect(inputs[0].index).equals(0)
    expect(hex.encode(inputs[0].txid)).equals(('c40b8cd078aaa183c14d6e8f2fc28645f65006bde137a20035f5d427bbca151b'))
  })

  it.concurrent('PegInTransaction.getOutputsForDisplay() returns correct data with no change', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    const outputs = myPeg.getOutputsForDisplay();
    myPeg.setAmount(myPeg.maxCommit() - myPeg.fee)
    expect(myPeg.getChange()).equals(0)
    expect(outputs.length).equals(3);
    expect(outputs[0].script).equals('RETURN ' + myPeg.pegInData.stacksAddress)
    expect(outputs[0].amount).equals(0)
    expect(outputs[1].address).equals(myPeg.pegInData.sbtcWalletAddress)
    expect(outputs[1].amount).equals(myPeg.pegInData.amount)
  })

  it.concurrent('PegInTransaction.getOutputsForDisplay() returns correct data with change', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    expect(myPeg.pegInData.amount).equals(4203951)
    myPeg.setAmount(myPeg.maxCommit() - myPeg.fee - 100)
    const outputs = myPeg.getOutputsForDisplay();
    expect(myPeg.pegInData.amount).equals(4203851)
    expect(myPeg.getChange()).equals(100)
    expect(outputs.length).equals(4);
    expect(outputs[0].script).equals('RETURN ' + myPeg.pegInData.stacksAddress)
    expect(outputs[0].amount).equals(0)
    expect(outputs[1].address).equals(myPeg.pegInData.sbtcWalletAddress)
    expect(outputs[1].amount).equals(myPeg.pegInData.amount)
    expect(outputs[2].address).equals(myPeg.fromBtcAddress)
    expect(outputs[2].amount).equals(100)
  })

  it.concurrent('PegInTransaction.buildTransaction() throws if signature is passed', async () => {
    const privKey = hex.decode('0101010101010101010101010101010101010101010101010101010101010101');
    const sig = await secp.sign(sha256('message'), privKey);
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    try {
      const tx = myPeg.buildTransaction(Buffer.from(sig).toString('hex'));
      fail('error expecetd')
    } catch (err:any) {
      expect(err.message);
    }
  })

  it.concurrent('PegInTransaction.buildTransaction() returns transaction object', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    const tx = myPeg.buildTransaction(undefined);
    expect(tx.version).equals(2)
    expect(tx.hasWitnesses).equals(false)
  })

  it.concurrent('PegInTransaction.buildTransaction() ensure PSBT can be estracted form tx', async () => {
    const myPeg:PegInTransactionI = await PegInTransaction.hydrate(JSON.parse(JSON.stringify(pegin1)));
    const tx = myPeg.buildTransaction(undefined);
    expect(tx.toPSBT());
  })

  //02c1176d0095ebfe3019d1b3488a0015eeb01d793f58379c08f5099bf2bbc40131
  it.concurrent('PegInTransaction.encodeAddress() ', async () => {
    //const addr = btc.Address(btc.TEST_NETWORK).encode(btc.OutScript.decode())
    //expect(addr).equals('tb1qyxeczljl4g744py6u37r0csr2q4grlh7yhp9km');
  })

})
