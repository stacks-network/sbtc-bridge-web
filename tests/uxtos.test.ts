import { beforeAll, beforeEach, expect, describe, it, vi } from 'vitest'
import { attachAllInputTransactions, fetchAddressDetails, fetchUTXOs, fetchTxsForAddress, maxCommit, fetchFeeEstimate } from "$lib/utxos";
import { addressList, addresses, txs0, txs1, utxo0, utxo1, feeData } from './test_data';
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
    try {
      await fetchTxsForAddress('network', addressList[0]);
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
    res = await attachAllInputTransactions(network, res);
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

  it.concurrent('uxto: fetchTxsForAddress() returns correct tx set for address 0', async () => {
    fetchMock.mockIf(/^.*2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb.*$/, () => {
      return JSON.stringify(txs0);
    });
    const res = await fetchTxsForAddress(network, addressList[0]);
    expect(res).toEqual(txs0);
  })

  it.concurrent('uxto: fetchTxsForAddress() returns correct utxo set for address 1', async () => {
    fetchMock.mockIf(/^.*tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5.*$/, () => {
      return JSON.stringify(txs1);
    });
    const res = await fetchTxsForAddress(network, addressList[1]);
    expect(res).toEqual(txs1);
  })

  it.concurrent('uxto: fetchUTXOs() returns correct utxo set for address 0 and attaches the right tx data', async () => {
    
    fetchMock.mockIf(/^.*2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb.*$/, () => {
      return JSON.stringify(addresses[0]);
    });
    let res = await fetchAddressDetails(network, addressList[0]);
    expect(res).toEqual(addresses[0]);
    
    fetchMock.mockIf(/^.*2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb\/txs.*$/, () => {
      return JSON.stringify(txs0);
    });
    const addressTxs = await fetchTxsForAddress(network, addressList[0]);
    expect(addressTxs[0].txid).toEqual('5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508');

    fetchMock.mockIf(/^.*2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb\/utxo.*$/, () => {
      return JSON.stringify(utxo0);
    });
    res = await fetchUTXOs(network, addressList[0]), addressTxs;
    res = await attachAllInputTransactions(network, res);
    expect(res[0].fullout).toEqual(addressTxs[0].vout[1]);

  })

  it.concurrent('uxto: fetchUTXOs() returns correct utxo set for address 1 and attaches the right tx data', async () => {
    
    fetchMock.mockIf(/^.*tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5.*$/, () => {
      return JSON.stringify(addresses[1]);
    });
    let res = await fetchAddressDetails(network, addressList[1]);
    expect(res).toEqual(addresses[1]);
    
    fetchMock.mockIf(/^.*tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5\/txs.*$/, () => {
      return JSON.stringify(txs1);
    });
    const addressTxs = await fetchTxsForAddress(network, addressList[1]);
    //console.log('addressTxs: ', util.inspect(addressTxs, false, null, true /* enable colors */))
    expect(addressTxs[0].txid).toEqual('894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04');

    fetchMock.mockIf(/^.*tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5\/utxo.*$/, () => {
      return JSON.stringify(utxo1);
    });
    res = await fetchUTXOs(network, addressList[1]), addressTxs;
    res = await attachAllInputTransactions(network, res);
    //console.log('res: ', util.inspect(res, false, null, true /* enable colors */))
    expect(res[0].fullout).toEqual(addressTxs[0].vout[1]);

  })
})

