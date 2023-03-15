import { beforeAll, beforeEach, expect, describe, it } from 'vitest'
import * as btc from 'micro-btc-signer';
import * as secp from '@noble/secp256k1';
import { hex } from '@scure/base';
import PegOutTransaction from '$lib/domain/PegOutTransaction';
import type { PegOutTransactionI } from '$lib/domain/PegOutTransaction';
import assert, { fail } from 'assert';
import { pegout1 } from './data/data_pegout_p2wpkh'
import { sha256 } from '@noble/hashes/sha256';
import util from 'util'

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
function hexToAscii(input:string) {
	const buf = Buffer.from(input, "hex");
	return buf.toString("ascii");
}

describe('suite', () => {
  beforeAll(async () => {
    //console.log("beforeAll: -----------------------------------------------");
  })

  beforeEach(async () => {
    // cant fetch mock here as only first mock is recognised
  })

  it.concurrent('PegOutTransaction.constructor() returns pegin builder in state not ready', async () => {
    const piTx:PegOutTransactionI = new PegOutTransaction();
    expect(typeof piTx).equals('object')
    expect(!piTx.ready)
  })

  it.concurrent('PegOutTransaction.hydrate() returns pegin builder in state not ready', async () => {
    const piTx:PegOutTransactionI = await PegOutTransaction.hydrate(pegout1);
    expect(piTx.fromBtcAddress).equals('tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq');
    expect(piTx.pegInData.sbtcWalletAddress).equals('tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss');
    expect(piTx.pegInData.stacksAddress).equals('ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN');
    expect(piTx.pegInData.amount).equals(4205267);
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
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    expect(myPeg.getChange()).equals(4204767)
    myPeg.setAmount(myPeg.maxCommit() - myPeg.fee - myPeg.dust - 1)
    expect(myPeg.getChange()).equals(4204767)
  })

  it.concurrent('PegOutTransaction.setAmount() throws if amount too high', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    expect(myPeg.getChange()).equals(4204767)
    try {
      myPeg.setAmount(4204768)
      fail('error expected');
    } catch(err) { expect(err)}
  })

  it.concurrent('PegOutTransaction.setAmount() throws if amount too high', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    expect(myPeg.getChange()).equals(4204767)
    try {
      myPeg.setAmount(4204768)
      fail('error expected');
    } catch(err) { expect(err)}
  })

  it.concurrent('PegOutTransaction.setAmount() successful', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.setAmount(myPeg.maxCommit())
    expect(myPeg.getChange()).equals(myPeg.maxCommit() - myPeg.fee - myPeg.dust)
  })

  it.concurrent('PegOutTransaction.setFeeRate() sets default rate if rate passed is unknown', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.setFeeRate(4)
    expect(myPeg.fee).equals(myPeg.fees[1])
  })

  it.concurrent('PegOutTransaction.setFeeRate() auto decreases amount if balance + fee is exceeded', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.setFeeRate(0);
    expect(myPeg.fee).equals(myPeg.fees[0])
    const amount = myPeg.pegInData.amount;
    myPeg.setFeeRate(1);
    expect(myPeg.pegInData.amount < amount);
  })

  it.concurrent('PegOutTransaction.calculateFees() resets the current rate', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.setFeeRate(0);
    myPeg.calculateFees();
    myPeg.setFeeRate(1);
    expect(myPeg.fee).equals(myPeg.fees[1])
    expect(myPeg.fee).equals(600)
  })

  it.concurrent('PegOutTransaction.calculateFees() sets correct ratios of scure fee', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.calculateFees();
    myPeg.setFeeRate(1);
    expect(myPeg.fee).equals(myPeg.fees[1])
    expect(myPeg.fee * 0.8).equals(myPeg.fees[0])
    expect(myPeg.fee * 1.2).equals(myPeg.fees[2])
  })

  it.concurrent('PegOutTransaction.setStacksAddress() throws if stacks address bad format', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    try {
      myPeg.setStacksAddress(pegout1.fromBtcAddress);
      fail('should throw')
    } catch (err) {
      expect(err)
    }
  })

  it.concurrent('PegOutTransaction.setStacksAddress() throws if stacks testnet address wrong network', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    try {
      myPeg.net = btc.NETWORK;
      myPeg.setStacksAddress(pegout1.pegInData.stacksAddress);
      fail('should throw')
    } catch (err:any) {
      expect(err.message.indexOf('Please enter a valid stacks blockchain mainnet address') > -1)
    }
  })

  it.concurrent('PegOutTransaction.setStacksAddress() throws if stacks mainnet address wrong network', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    try {
      myPeg.net = btc.TEST_NETWORK;
      myPeg.setStacksAddress('SPCAQ4RCYJ30BYKJ9Z6BRGS3169PWZNN89NH4MCS');
      fail('should throw')
    } catch (err:any) {
      expect(err.message.indexOf('Please enter a valid stacks blockchain testnet address') > -1)
    }
  })

  it.concurrent('PegOutTransaction.getInputsForDisplay() returns correct data', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    const inputs = myPeg.getInputsForDisplay();
    expect(inputs.length).equals(1)
    expect(inputs[0].index).equals(0)
    expect(hex.encode(inputs[0].txid)).equals(('c40b8cd078aaa183c14d6e8f2fc28645f65006bde137a20035f5d427bbca151b'))
  })

  it.concurrent('PegOutTransaction.getOutputsForDisplay() returns correct data', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    const outputs = myPeg.getOutputsForDisplay();
    myPeg.setAmount(myPeg.maxCommit() - myPeg.fee)
    expect(myPeg.getChange()).equals(4204767)
    expect(outputs.length).equals(4);
    expect(outputs[0].script).equals('RETURN ' + myPeg.pegInData.stacksAddress)
    expect(outputs[0].amount).equals(0)
    expect(outputs[1].address).equals(myPeg.pegInData.sbtcWalletAddress)
    expect(outputs[1].amount).equals(myPeg.dust)
    expect(outputs[2].address).equals(myPeg.fromBtcAddress)
    expect(outputs[2].amount).equals(myPeg.maxCommit() - myPeg.fee - myPeg.dust)
  })

  it.concurrent('PegOutTransaction.buildTransaction() throws if signature is not passed', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    try {
      const tx = myPeg.buildTransaction(undefined);
      fail('error expecetd')
    } catch (err:any) {
      expect(err.message).equals('Signature of output 2 scriptPubKey is required');
    }
  })

  it.concurrent('PegOutTransaction.buildTransaction() returns transaction object', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    //const privKey = hex.decode('0101010101010101010101010101010101010101010101010101010101010101');
    const privKey = secp.utils.randomPrivateKey()
    const sig = await secp.sign(sha256('message'), privKey);
    const tx = myPeg.buildTransaction(Buffer.from(sig).toString('hex'));
    expect(tx.opReturn.version).equals(2);
    expect(tx.opReturn.hasWitnesses).equals(false)
  })

  it.concurrent('PegOutTransaction.buildTransaction() ensure PSBT can be estracted form tx', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    const privKey = secp.utils.randomPrivateKey()
    const sig = await secp.sign(sha256('message'), privKey);
    const tx = myPeg.buildTransaction(Buffer.from(sig).toString('hex'));
    expect(tx.opReturn.toPSBT());
  })

  it.concurrent('PegOutTransaction.getOutput2ScriptPubKey() ensure signature can be passed to builder.', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.pegInData.amount = 2500;
    const script = myPeg.getOutput2ScriptPubKey();
    console.log('script ', util.inspect(script.toString('hex'), false, null, true /* enable colors */));
    const privKey = secp.utils.randomPrivateKey();
    const sig = await secp.sign(sha256(script), privKey);
    const tx = myPeg.buildTransaction(Buffer.from(sig).toString('hex'));
    const verified = secp.verify(sig, sha256(script), secp.getPublicKey(privKey, true));
    expect(verified).equals(true);
  })

  it.concurrent('PegOutTransaction.getOutput2ScriptPubKey() returns correct buffer.', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.pegInData.amount = 2500;
    myPeg.pegInData.sbtcWalletAddress = 'tb1pf74xr0x574farj55t4hhfvv0vpc9mpgerasawmf5zk9suauckugqdppqe8';
    const data1 = myPeg.getOutput2ScriptPubKey();
		
		const amtBuf = Buffer.alloc(9);
		amtBuf.writeUInt32LE(2500, 0);
    const script = btc.OutScript.encode(btc.Address(btc.TEST_NETWORK).decode('tb1pf74xr0x574farj55t4hhfvv0vpc9mpgerasawmf5zk9suauckugqdppqe8'))
    const scriptBuf = Buffer.from(script);
		const data2 = Buffer.concat([amtBuf, scriptBuf]);
    
    expect(data2.toString('hex')).equals(data1.toString('hex'));
  })

  it.concurrent('PegOutTransaction.getOutput2ScriptPubKey() returns encodes amount.', async () => {
    const myPeg:PegOutTransactionI = await PegOutTransaction.hydrate(JSON.parse(JSON.stringify(pegout1)));
    myPeg.pegInData.amount = 2500;
    myPeg.pegInData.sbtcWalletAddress = 'tb1pf74xr0x574farj55t4hhfvv0vpc9mpgerasawmf5zk9suauckugqdppqe8';
    const data1 = myPeg.getOutput2ScriptPubKey();
    const pegOutAmount = data1.subarray(0,9).readUInt32LE();
    expect(pegOutAmount).equals(myPeg.pegInData.amount);
  })

  it.concurrent('PegOutTransaction.getOutput2ScriptPubKey() ensure signature can be passed to builder.', async () => {
		const b1 = Buffer.alloc(2);
		const amtBuf = Buffer.alloc(9);
		amtBuf.writeUInt32LE(2500, 0);
		const data = Buffer.concat([b1, amtBuf]);
    console.log('amtBuf: ' + (amtBuf.toString('hex')))
    console.log('data: ' + data.toString('hex'))
  
    const pegOutAmount = amtBuf.readUInt32LE();
    const pegOutAmount1 = data.subarray(2,11).readUInt32LE();
    console.log('decodePegOutOutputs:amtB1 ', util.inspect(amtBuf.toString('hex'), false, null, true /* enable colors */));
    console.log('decodePegOutOutputs:amtBuf3 ', util.inspect(pegOutAmount, false, null, true /* enable colors */));
    console.log('decodePegOutOutputs:amtBuf4 ', util.inspect(pegOutAmount1, false, null, true /* enable colors */));
  })
})
