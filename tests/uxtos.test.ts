import { beforeAll, beforeEach, expect, describe, it, vi } from 'vitest'
import { fetchTransactionHex, fetchTransaction, fetchAddressDetails, fetchUTXOs, maxCommit, fetchFeeEstimate } from "$lib/utxos";
import { addressList, addresses, tx0, tx0Hex, tx1, tx1Hex, utxo0, utxo1, feeData } from './test_data';
import util from 'util'
import { fail } from 'assert';

const network = 'testnet';
// The two tests marked with concurrent will be run in parallel
describe('suite', () => {
  beforeAll(async () => {
    // cant fetch mock here as only first mock is recognised
    //console.log("beforeAll: -----------------------------------------------");
  })

  beforeEach(async () => {
    // cant fetch mock here as only first mock is recognised
  })

  it.concurrent('uxto: check network defined', async () => {
    try {
      await fetchAddressDetails('unknown', addressList[0]);
      fail();
    } catch(err:any) {
      expect(err.message);
    }
    try {
      await fetchUTXOs('network', addressList[0]);
      fail();
    } catch(err:any) {
      expect(err.message);
    }
    try {
      await fetchFeeEstimate('network');
      fail();
    } catch(err:any) {
      expect(err.message);
    }
  })

  it.concurrent('uxto: fetchAddressDetails() returns correct details for address 0', async () => {
    fetchMock.mockIf(/^.*2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb.*$/, () => {
      return JSON.stringify(addresses[0]);
    });
    const res = await fetchAddressDetails(network, addressList[0]);
    expect(res).toEqual(addresses[0]);
  })

  it.concurrent('uxto: fetchAddressDetails() returns correct details for address 1', async () => {
    fetchMock.mockIf(/^.*tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5.*$/, () => {
      return JSON.stringify(addresses[1]);
    });
    const res = await fetchAddressDetails(network, addressList[1]);
    expect(res).toEqual(addresses[1]);
  })

  it.concurrent('uxto: fetchUTXOs() returns correct utxo set for address 0', async () => {
    fetchMock.mockIf(/^.*2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb.*$/, () => {
      return JSON.stringify(utxo0);
    });
    const res = await fetchUTXOs(network, addressList[0]);
    expect(res).toEqual(utxo0);
  })

  it.concurrent('uxto: fetchUTXOs() returns correct utxo set for address 1', async () => {
    fetchMock.mockIf(/^.*tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5.*$/, () => {
      return JSON.stringify(utxo1);
    });
    const res = await fetchUTXOs(network, addressList[1]);
    expect(res).toEqual(utxo1);
  })

  it.concurrent('uxto: maxCommit() returns correct max commit for address 0', async () => {
    fetchMock.mockIf(/^.*2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb.*$/, () => {
      return JSON.stringify(utxo0);
    });
    const total = 297900;
    const outputs = await fetchUTXOs(network, addressList[0]);
    const res = await maxCommit(outputs);
    expect(res).toEqual(total);
  })

  it.concurrent('uxto: maxCommit() returns correct max commit for address 1', async () => {
    fetchMock.mockIf(/^.*tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5.*$/, () => {
      return JSON.stringify(utxo1);
    });
    const total = 13307200;
    let res = await fetchUTXOs(network, addressList[1]);
    //res = await attachAllInputTransactions(network, res);
    res = await maxCommit(res);
    expect(res).toEqual(total);
  })

  it.concurrent('uxto: fetchFeeEstimate() returns correct max commit for address 0', async () => {
    fetchMock.mockIf(/^.*api\.blockcypher\.com\/v1\/btc\/test3.*$/, () => {
      return JSON.stringify(feeData);
    });
    const res = await fetchFeeEstimate('testnet');
    expect(res).toEqual(feeData);
  })

  it.concurrent('uxto: fetchUTXOs() returns correct transaction format for address 0 and attaches the right tx data', async () => {
    fetchMock.mockIf(/^.*2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb\/utxo.*$/, () => {
      return JSON.stringify(utxo0);
    });
    const utxoSet = await fetchUTXOs(network, addressList[0]);
    expect(utxoSet).toEqual(utxo0);
    fetchMock.mockIf(/^.*5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508\/hex/, () => {
      return (tx0Hex);
    });
    const hex = await fetchTransactionHex(network, utxoSet[0].txid);
    expect(hex).toEqual('02000000000101ffc03fce3598a85918b1e7ccb9cbcd88557b0766d247edfb2eab88aacf1a362f0100000017160014dc14b9f045dc9714fced41ea8f86ec1ea5383007fdffffff02b3eb30000000000017a914b591db0e42d7bb1e0630dce5e95c5671c3e9adc587ac8b04000000000017a914a91a74e9ff3101b0e56169e744d9f1e9ff5305bf870247304402203ed494a82388e04c5d9de8719b140dac32ae90e349e35fcc95efab3f8341b4db02204bfeb4dd6a782b2cd5431e2fbb4380f667c5463e17221b0bee5024b44515a266012102a367e9b28b83d7efc282159c404d4ad74a1faae26a683abd675ac3f3312f232c28812100');
  })
    
  it.concurrent('uxto: fetchUTXOs() returns correct transaction format for address 1 and attaches the right tx data', async () => {
    fetchMock.mockIf(/^.*tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5\/utxo.*$/, () => {
      return JSON.stringify(utxo1);
    });
    const utxoSet = await fetchUTXOs(network, addressList[1]);
    expect(utxoSet).toEqual(utxo1);
    fetchMock.mockIf(/^.*894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04$/, () => {
      return JSON.stringify(tx1);
    });
    fetchMock.mockIf(/^.*894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04\/hex/, () => {
      return (tx1Hex);
    });
    const hex = await fetchTransactionHex(network, utxoSet[0].txid);
    expect(hex).toEqual('020000000001039e72459244c7fc25f3f071e590da3d024b5390c729a6767ce2d5ae2ab766c51c0000000000fdffffff933fe6105afc7791bd6cf38b5f45539b9b0403b89ca5d9046529f8103d7bcfab0000000000fdffffff78866f700e7a77b35aeaaf80cf308e694f496365da7aa466e596c1520fc547c80000000000fdffffff02404b4c000000000016001481a4724816dbd39939e9504fce3cae950f2770db400dcb00000000001600143e16009af8fc7edac27cd978ef590cc8e8c11240024730440220039d5ceec2f09bbaa36d8b11906375c5666c54b60cd81c67f180e0ccad392f2102203774a9807131e42c4422aa3f74c61017e4f39e7488a7c2f2fc4083bde5ee79a0012103068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d102473044022078d567912f5174ceea349eeaba6516686b17eb215ef6168805242c3fbf94d10f02201a8be63ae9a9adbad47364bbaf6118cee4b3ee3212b4a191276abd848baaad8a012103068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1024730440220094a366d1c6f06e9eec4a94087634cd0c2780c623f0c131b6e1b60f4b82c4ebf022017204254442375cdfba84440de3b2efe238b0cdc92f4583bad71939a6a49e909012103068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d107e72400');
  })
})

