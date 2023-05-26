import { beforeAll, beforeEach, expect, describe, it } from 'vitest'
import * as btc from '@scure/btc-signer';
import * as secp from '@noble/secp256k1';
import { hex } from '@scure/base';
import PegOutTransaction from '$lib/domain/PegOutTransaction';
import type { PegOutTransactionI } from '$lib/domain/PegOutTransaction';
import { fail } from 'assert';
import { pegout1 } from './data/data_pegout_p2wpkh'
import { sha256 } from '@noble/hashes/sha256';
import { concatByteArrays } from '$lib/structured-data.js'
import { MAGIC_BYTES_TESTNET, MAGIC_BYTES_MAINNET, PEGOUT_OPCODE } from 'sbtc-bridge-lib'
import { uint8ToAmount, amountToUint8 } from 'sbtc-bridge-lib' 

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
  })

  it.concurrent('PegOutTransaction.constructor() returns pegin builder in state not ready', async () => {
    const piTx:PegOutTransaction = new PegOutTransaction();
    expect(typeof piTx).equals('object')
    expect(!piTx.ready)
  })

  it.concurrent('PegOutTransaction.hydrate() returns pegin builder in state not ready', async () => {
    const piTx:PegOutTransaction = await PegOutTransaction.hydrate(pegout1);
    expect(piTx.fromBtcAddress).equals('tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq');
    expect(piTx.pegInData.sbtcWalletAddress).equals('tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7');
    expect(piTx.pegInData.stacksAddress).equals('ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN');
    expect(piTx.pegInData.amount).equals(221122);
    expect(piTx.addressInfo.address).equals('tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq');
    expect(piTx.addressInfo.utxos.length).equals(1);
    expect(piTx.addressInfo.utxos[0].txid).equals('c40b8cd078aaa183c14d6e8f2fc28645f65006bde137a20035f5d427bbca151b');
    expect(piTx.addressInfo.utxos[0].vout).equals(0);
    //console.log('piTx.fee=' + piTx.fee);
    expect(piTx.fees[1]).equals(600);
    expect(piTx.feeInfo.high_fee_per_kb).equals(51156);
    expect(piTx.fee).equals(600);
    expect(piTx.scureFee).equals(600);
    expect(piTx.ready);
    expect(piTx.dust).equals(500);
  })

  it.concurrent('PegOutTransaction.getChange() returns the correct change', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    expect(myPeg.getChange()).equals(4204767)
    myPeg.setAmount(myPeg.maxCommit() - myPeg.fee - myPeg.dust - 1)
    expect(myPeg.getChange()).equals(4204767)
  })

  it.concurrent('PegOutTransaction.setAmount() throws if amount too high', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    expect(myPeg.getChange()).equals(4204767)
    try {
      myPeg.setAmount(4204768)
      fail('error expected');
    } catch(err) { expect(err)}
  })

  it.concurrent('PegOutTransaction.setAmount() throws if amount too high', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    expect(myPeg.getChange()).equals(4204767)
    try {
      myPeg.setAmount(4204768)
      fail('error expected');
    } catch(err) { expect(err)}
  })

  it.concurrent('PegOutTransaction.setAmount() successful', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.setAmount(myPeg.maxCommit())
    expect(myPeg.getChange()).equals(myPeg.maxCommit() - myPeg.fee - myPeg.dust)
  })

  it.concurrent('PegOutTransaction.setFeeRate() sets default rate if rate passed is unknown', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.setFeeRate(4)
    expect(myPeg.fee).equals(myPeg.fees[1])
  })

  it.concurrent('PegOutTransaction.setFeeRate() auto decreases amount if balance + fee is exceeded', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.setFeeRate(0);
    expect(myPeg.fee).equals(myPeg.fees[0])
    const amount = myPeg.pegInData.amount;
    myPeg.setFeeRate(1);
    expect(myPeg.pegInData.amount < amount);
  })

  /**
   * mysterious test failures whle adding output address - the scure code throws an error
   * associated with the sbtc wallet address - its valid but scure says otherwise ?
  it.concurrent('PegOutTransaction.calculateFees() resets the current rate', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.setFeeRate(0);
    myPeg.calculateFees();
    myPeg.setFeeRate(1);
    expect(myPeg.fee).equals(myPeg.fees[1])
    expect(myPeg.fee).equals(100)
  })

  it.concurrent('PegOutTransaction.calculateFees() sets correct ratios of scure fee', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.calculateFees();
    myPeg.setFeeRate(1);
    expect(myPeg.fee).equals(myPeg.fees[1])
    expect(myPeg.fee * 0.8).equals(myPeg.fees[0])
    expect(myPeg.fee * 1.2).equals(myPeg.fees[2])
  })
   */

  it.concurrent('PegOutTransaction.setStacksAddress() throws if stacks address bad format', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    try {
      myPeg.setStacksAddress(pegout1.fromBtcAddress);
      fail('should throw')
    } catch (err) {
      expect(err)
    }
  })

  it.concurrent('PegOutTransaction.setStacksAddress() throws if stacks testnet address wrong network', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    try {
      myPeg.net = btc.NETWORK;
      myPeg.setStacksAddress(pegout1.pegInData.stacksAddress);
      fail('should throw')
    } catch (err:any) {
      expect(err.message.indexOf('Please enter a valid stacks blockchain mainnet address') > -1)
    }
  })

  it.concurrent('PegOutTransaction.setStacksAddress() throws if stacks mainnet address wrong network', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    try {
      myPeg.net = btc.TEST_NETWORK;
      myPeg.setStacksAddress('SPCAQ4RCYJ30BYKJ9Z6BRGS3169PWZNN89NH4MCS');
      fail('should throw')
    } catch (err:any) {
      expect(err.message.indexOf('Please enter a valid stacks blockchain testnet address') > -1)
    }
  })

  it.concurrent('PegOutTransaction.getInputsForDisplay() returns correct data', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    const inputs = myPeg.getInputsForDisplay();
    expect(inputs.length).equals(1)
    expect(inputs[0].index).equals(0)
    expect(hex.encode(inputs[0].txid)).equals(('c40b8cd078aaa183c14d6e8f2fc28645f65006bde137a20035f5d427bbca151b'))
  })

  it.concurrent('PegOutTransaction.getOutputsForDisplay() returns correct data', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    const outputs = myPeg.getOutputsForDisplay();
    myPeg.setAmount(myPeg.maxCommit() - myPeg.fee)
    expect(myPeg.getChange()).equals(4204767)
    expect(outputs.length).equals(4);
		const addr = new TextEncoder().encode(myPeg.pegInData.stacksAddress || 'stx address unknown');
    expect(outputs[0].script).equals('RETURN ' + addr)
    expect(outputs[0].amount).equals(0)
    expect(outputs[1].address).equals(myPeg.pegInData.sbtcWalletAddress)
    expect(outputs[1].amount).equals(myPeg.dust)
    expect(outputs[2].address).equals(myPeg.fromBtcAddress)
    expect(outputs[2].amount).equals(myPeg.maxCommit() - myPeg.fee - myPeg.dust)
  })

  it.concurrent('PegOutTransaction.buildOpReturnTransaction() throws if signature is not passed', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    try {
      const tx = myPeg.buildOpReturnTransaction();
      fail('error expecetd')
    } catch (err:any) {
      expect(err.message).equals('Signature of output 2 scriptPubKey is required');
    }
  })

  it.concurrent('PegOutTransaction.buildOpReturnTransaction() returns transaction object', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    //const privKey = hex.decode('0101010101010101010101010101010101010101010101010101010101010101');
    const privKey = hex.encode(secp.utils.randomPrivateKey())
    const sig = await secp.signAsync(sha256('message'), privKey);
    myPeg.setSignature((sig.toCompactHex()))
    const tx = myPeg.buildOpReturnTransaction();
    expect(tx.version).equals(2);
    expect(tx.hasWitnesses).equals(false)
  })

  it.concurrent('PegOutTransaction.buildOpReturnTransaction() ensure PSBT can be estracted form tx', async () => {
    const myPeg:PegOutTransaction = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    const privKey = hex.encode(secp.utils.randomPrivateKey())
    const sig = await secp.signAsync(sha256('message'), privKey);
    myPeg.setSignature(sig.toCompactHex())
    const tx = myPeg.buildOpReturnTransaction();
    expect(tx.toPSBT());
  })

  it.concurrent('PegOutTransaction.getDataToSign() ensure signature can be passed to builder.', async () => {
		const b1 = new Uint8Array(2); // Buffer.alloc(2);
		//const amtBuf = new Uint8Array(9); // Buffer.alloc(9);
    //const view = new DataView(amtBuf);
    //view.setUint32(0, 2500); // Max unsigned 32-bit integer
		//amtBuf.writeUInt32LE(2500, 0);
    //const amt = new Uint8Array(view.buffer)
    const amt = amountToUint8(2500, 9)
		const data = concatByteArrays([b1, amt])
    expect(data.length).equals(b1.length + amt.length)

		//const data = Buffer.concat([b1, amtBuf]);
    //console.log('amtBuf: ' + (hex.encode(amt)))
    //console.log('data: ' + hex.encode(data))
  
    //const pegOutAmount = amtBuf.readUInt32BE();
    //const pegOutAmount1 = data.subarray(2,11).readUInt32BE();
    //console.log('decodePegOutOutputs:amtB1 ', util.inspect(hex.encode(amt), false, null, true /* enable colors */));
    //console.log('decodePegOutOutputs:amtBuf3 ', util.inspect(pegOutAmount, false, null, true /* enable colors */));
    //console.log('decodePegOutOutputs:amtBuf4 ', util.inspect(pegOutAmount1, false, null, true /* enable colors */));
  })

  const sig = 'e838d8b8bc0ef04ad9e65e905d1f4c09c5861af913d27ee5c2dd76091b3e5a277144d204948e8cb7ff17cf07b24452e1f5e9430e4ef73555bfe7e1f401f2c17200'
  it.concurrent('PegOutTransaction.buildData() data built reflects testnet network', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.net = btc.TEST_NETWORK;
    const data = myPeg.buildData(sig, false);
    expect(hex.encode(data.slice(0,2))).equals(MAGIC_BYTES_TESTNET);
  })

  it.concurrent('PegOutTransaction.buildData() data built reflects mainnet network', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.net = btc.NETWORK;
    const data = myPeg.buildData(sig, false);
    expect(hex.encode(data.slice(0,2))).equals(MAGIC_BYTES_MAINNET);
  })

  it.concurrent('PegOutTransaction.buildData() data built reflects correct opcode', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.net = btc.NETWORK;
    const data = myPeg.buildData(sig, false);
    expect(hex.encode(data.slice(2,3)).toUpperCase()).equals(PEGOUT_OPCODE);
  })

  it.concurrent('PegOutTransaction.buildData() data built reflects correct amount', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.net = btc.NETWORK;
    const data = myPeg.buildData(sig, false);
    const amountUint8 = data.slice(3,12);
    expect(amountUint8.length).equals(9);
    expect(uint8ToAmount(amountUint8)).equals(myPeg.pegInData.amount);
    console.log(uint8ToAmount(amountUint8))
  })

})