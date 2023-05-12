import { beforeAll, beforeEach, expect, describe, it } from 'vitest'
import { hex } from '@scure/base';
import { taprootTweakPrivKey } from '@scure/btc-signer';

const data = {
    _id: ("645b717472adcbdf5e1ba4b2"),
    fromBtcAddress: 'tb1pvzcsdlw38rz9lxe4tdekfy040w00wjl0xnpnw7j32gzk0kfz67hq6j3tng',
    status: 2,
    tries: 1,
    mode: 'op_drop',
    amount: 7531,
    requestType: 'wrap',
    wallet: "p2tr(TAPROOT_UNSPENDABLE_KEY, [{ script: Script.encode([data, 'DROP', sbtcWalletAddr.pubkey]) }, { script: Script.encode([reclaimAddr.pubkey]) }], this.net, true)",
    stacksAddress: 'ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5',
    sbtcWalletAddress: 'tb1p5yh4frytaszrkng0xs0tjdnmg9806d4arrl9emxdtaxj9g8zrgjqxpunh0',
    commitTxScript: {
      address: 'tb1pt0vl4c86z20mkgzh6fhqlslxx2zvkxc269y68f4cwk8p44nnmewqvx4lz9',
      script: '51205bd9fae0fa129fbb2057d26e0fc3e63284cb1b0ad149a3a6b8758e1ad673de5c',
      paymentType: 'tr',
      leaves: [
        {
          type: 'leaf',
          script: '1e3c1a7010183fd1a76976e7b2bb67acdf57cdfe70488288130000000000007520a12f548c8bec043b4d0f341eb9367b414efd36bd18fe5ceccd5f4d22a0e21a24',
          hash: '987e502b6d0afb0502b2a26ff4d3d08057d45fc2dc01133108a5beaac559ad46',
          path: [
            '0515c04eca0681b7800eb7b8fa43a8b20795e2e7b72e27995e0c31d7a29a9546'
          ],
          controlBlock: 'c150929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac00515c04eca0681b7800eb7b8fa43a8b20795e2e7b72e27995e0c31d7a29a9546'
        },
        {
          type: 'leaf',
          script: '2060b106fdd138c45f9b355b736491f57b9ef74bef34c3377a51520567d922d7ae',
          hash: '0515c04eca0681b7800eb7b8fa43a8b20795e2e7b72e27995e0c31d7a29a9546',
          path: [
            '987e502b6d0afb0502b2a26ff4d3d08057d45fc2dc01133108a5beaac559ad46'
          ],
          controlBlock: 'c150929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0987e502b6d0afb0502b2a26ff4d3d08057d45fc2dc01133108a5beaac559ad46'
        }
      ],
      tapInternalKey: '50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0',
      tapLeafScript: [
        [
          {
            version: 193,
            internalKey: '50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0',
            merklePath: [
              '0515c04eca0681b7800eb7b8fa43a8b20795e2e7b72e27995e0c31d7a29a9546'
            ]
          },
          '1e3c1a7010183fd1a76976e7b2bb67acdf57cdfe70488288130000000000007520a12f548c8bec043b4d0f341eb9367b414efd36bd18fe5ceccd5f4d22a0e21a24c0'
        ],
        [
          {
            version: 193,
            internalKey: '50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0',
            merklePath: [
              '987e502b6d0afb0502b2a26ff4d3d08057d45fc2dc01133108a5beaac559ad46'
            ]
          },
          '2060b106fdd138c45f9b355b736491f57b9ef74bef34c3377a51520567d922d7aec0'
        ]
      ],
      tapMerkleRoot: '16ff6226374abcdf78472f9c0a17bff5cddb459e4d5e144358d2ebf04757262c',
      tweakedPubkey: '5bd9fae0fa129fbb2057d26e0fc3e63284cb1b0ad149a3a6b8758e1ad673de5c'
    },
    updated: 1683714420013,
    btcTxid: '745a6576e349af9e187709106899a2495f86cd3357f42dc0f3c526a999c25437',
    vout: {
      scriptpubkey: '51205bd9fae0fa129fbb2057d26e0fc3e63284cb1b0ad149a3a6b8758e1ad673de5c',
      scriptpubkey_asm: 'OP_PUSHNUM_1 OP_PUSHBYTES_32 5bd9fae0fa129fbb2057d26e0fc3e63284cb1b0ad149a3a6b8758e1ad673de5c',
      scriptpubkey_type: 'v1_p2tr',
      scriptpubkey_address: 'tb1pt0vl4c86z20mkgzh6fhqlslxx2zvkxc269y68f4cwk8p44nnmewqvx4lz9',
      value: 7531
    }
  }

describe('suite', () => {
  beforeAll(async () => {
    //console.log("beforeAll: -----------------------------------------------");
  })

  beforeEach(async () => {
    // cant fetch mock here as only first mock is recognised
  })

  //  if the the private key is hex string as opposed to: this.tx.sign(hex.decode(testAddrs.revealPrv));
  // sign expects bip32Derivation data ??

  // https://mempool.space/testnet/tx/07cdb4ad35315605f5f4ac7aa8153f14cb12316c8c13bb40ff4868f4ae8134ca
  it.concurrent('PegInTransaction.hydrate() returns pegin builder in state not ready', async () => {

    // 173, 17, 149, 7, 10, 85, 153, 103, 120, 47, 182, 234, 166, 34, 162, 186, 234, 237, 157, 157, 37, 72, 128, 5, 159, 159, 191, 120, 28, 247, 133, 44, buffer: ArrayBuffer(32)
    const revealPrivK = 'ad1195070a559967782fb6eaa622a2baeaed9d9d254880059f9fbf781cf7852c'
    
    //179, 253, 58, 114, 22, 98, 26, 167, 150, 39, 13, 168, 20, 146, 152, 166, 241, 203, 242, 235, 164, 164, 252, 60, 194, 23, 37, 242, 137, 210, 85, 29, buffer: ArrayBuffer(32)
    const reclaimPrivK = 'b3fd3a7216621aa796270da8149298a6f1cbf2eba4a4fc3cc21725f289d2551d'

    // 18, 234, 225, 115, 195, 153, 225, 106, 228, 107, 132, 244, 32, 223, 150, 38, 55, 81, 195, 86, 127, 247, 232, 46, 174, 205, 174, 163, 34, 151, 171, 181, buffer: ArrayBuffer(32)
    const revealSchnorrPubKey = '12eae173c399e16ae46b84f420df96263751c3567ff7e82eaecdaea32297abb5'
    
    // 39, 83, 30, 24, 140, 219, 99, 19, 200, 217, 204, 75, 152, 154, 240, 185, 232, 33, 179, 141, 81, 246, 73, 222, 79, 171, 47, 173, 93, 143, 156, 171, buffer: ArrayBuffer(32)
    const reclaimSchnorrPubKey = '27531e188cdb6313c8d9cc4b989af0b9e821b38d51f649de4fab2fad5d8f9cab'

    // 80, 146, 155, 116, 193, 160, 73, 84, 183, 139, 75, 96, 53, 233, 122, 94, 7, 138, 90, 15, 40, 236, 150, 213, 71, 191, 238, 154, 206, 128, 58, 192, buffer: ArrayBuffer(32)
    const TAPROOT_UNSPENDABLE_KEY = '50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0'
    
    // reveal script
    const sbtcWalletAddrScript = 'tb1p5yh4frytaszrkng0xs0tjdnmg9806d4arrl9emxdtaxj9g8zrgjqxpunh0'
    
    // 161, 47, 84, 140, 139, 236, 4, 59, 77, 15, 52, 30, 185, 54, 123, 65, 78, 253, 54, 189, 24, 254, 92, 236, 205, 95, 77, 34, 160, 226, 26, 36, buffer: ArrayBuffer(32)
    const sbtcWalletAddrScriptPubkey = 'a12f548c8bec043b4d0f341eb9367b414efd36bd18fe5ceccd5f4d22a0e21a24'
    
    const fromBtcAddress = 'tb1pvzcsdlw38rz9lxe4tdekfy040w00wjl0xnpnw7j32gzk0kfz67hq6j3tng'
    // 96,177,6,253,209,56,196
    const fromBtcAddressPubkey = '60b106fdd138c45f9b355b736491f57b9ef74bef34c3377a51520567d922d7ae'
    // 30, 60, 26, 112, 16, 24, 63, 209, 167
    const script0 = '1e3c1a7010183fd1a76976e7b2bb67acdf57cdfe70488288130000000000007520a12f548c8bec043b4d0f341eb9367b414efd36bd18fe5ceccd5f4d22a0e21a24'
    // 32, 96, 177, 6, 253, 209, 56, 196, 95
    const script1 = '2060b106fdd138c45f9b355b736491f57b9ef74bef34c3377a51520567d922d7ae'
    
    
    // 22,255,98,38,55,74,188
    const tapMerkleRoot = '2060b106fdd138c45f9b355b736491f57b9ef74bef34c3377a51520567d922d7ae'

    // where scripts exist the pubkey is the UNSPENDABLE key and merkle root is the root of the merkle tree
    // formed by the script hashes. With no scripts (pay to key path the merkel root is null)
    // 
    // const [tweakedPubkey, parity] = taprootTweakPubkey(pubKey, tapMerkleRoot || P.EMPTY);

    // *******************************
    // Reclaim Path
    // const msg = this.preimageWitnessV1(idx,prevOutScript,sighash,amount,undefined,script,ver);
    const msg = '916005c0f75399bed4fe7e2910e82959d109f181c18a24f0ef30e10da1f216fd'
    // const sig = concat(schnorr.sign(msg, privKey, _auxRand),sighash !== SignatureHash.DEFAULT ? new Uint8Array([sighash]) : P.EMPTY);
    const sig = 'c2078d43f01ab69901326d087fff07ad2a1d66c8215334cd3b63852012c0c7c3338830acda4b4144263b21e2c167683ea5bcaef6ba9023de903e06d211718f16'
    // this.updateInput(idx,{ tapScriptSig: [[{ pubKey: pubKey, leafHash: hash }, sig]] } true);
    // tx.finalize
    const rawReclaimTx = '0200000001ca3481aef46848ff40bb138c6c3112cb143f15a87aacf4f505563135adb4cd070000000000ffffffff011b2500000000000022512060b106fdd138c45f9b355b736491f57b9ef74bef34c3377a51520567d922d7ae00000000'

    const rawRevealTx =  '0200000001ca3481aef46848ff40bb138c6c3112cb143f15a87aacf4f505563135adb4cd070000000000ffffffff011b25000000000000225120a12f548c8bec043b4d0f341eb9367b414efd36bd18fe5ceccd5f4d22a0e21a2400000000'

    // *******************************
    // Reveal Path
  })
})

/**
  * Sends 0.00007387 BTC to tb1p5yh4frytaszrkng0xs0tjdnmg9806d4arrl9emxdtaxj9g8zrgjqxpunh0
  * Pays transaction fee: 0.00000500 BTC
  * Total Amount: 0.00007387 BTC
  * (=0.07387 mBTC or 73.87 bits or 7387 sat)
  * 
  * 
  * Reveal
  * https://mempool.space/testnet/address/tb1p5yh4frytaszrkng0xs0tjdnmg9806d4arrl9emxdtaxj9g8zrgjqxpunh0
  */
