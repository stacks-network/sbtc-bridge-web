import { beforeAll, beforeEach, expect, describe, it } from 'vitest'
import * as btc from '@scure/btc-signer';
import * as secp from '@noble/secp256k1';
import { hex } from '@scure/base';
import { pegin1 } from './data/data_pegin_p2wpkh'
import { schnorr } from '@noble/curves/secp256k1'; // ESM and Common.js

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

  it.concurrent('Create random schnorr keys', async () => {
    //const privSchnorr hex.encode(schnorr.getPublicKey(getConfig().btcSchnorrReclaim))
    console.log('schnorr.utils.randomPrivateKey: ')
    const privSchnorr = schnorr.utils.randomPrivateKey();
    console.log('schnorr.utils.randomPrivateKey: ' + privSchnorr)
    const pubSchnorr = schnorr.getPublicKey(privSchnorr);
    console.log('privSchnorr: ' + hex.encode(privSchnorr));
    console.log('pubSchnorr: ' + hex.encode(pubSchnorr));
  })


  it.concurrent('PegInTransaction.encodeAddress() check bitcoin address encoding', async () => {
    let obj = btc.Address(btc.TEST_NETWORK).decode(pegin1.pegInData.sbtcWalletAddress);
    expect(obj.type).equals('tr')
    obj = btc.Address(btc.TEST_NETWORK).decode(pegin1.fromBtcAddress);
    expect(obj.type).equals('wpkh')
  })



})
