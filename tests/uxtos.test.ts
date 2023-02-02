import { beforeAll, beforeEach, expect, describe, it, vi } from 'vitest'
import { fetchAddressDetails, fetchUTXOs, fetchTxs } from "$lib/utxos";
import { addressList, addresses, txs, utxos } from './test_data';
import util from 'util'

// The two tests marked with concurrent will be run in parallel
describe('suite', () => {
  beforeAll(async () => {
    // tell vitest we use mocked time
    //vi.useFakeTimers()
    //fetchMock.resetMocks();
    console.log("beforeAll: -----------------------------------------------");
  })

  beforeEach(async () => {
    // cant fetch mock here as only first mock is recognised
    console.log("request: ===================================================");
  })

  it.concurrent('can fetch 1 utxos', async () => {
    
    fetchMock.mockIf(/^.*2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb.*$/, () => { 
      return JSON.stringify(addresses[0]); 
    });
    let res = await fetchAddressDetails('testnet', addressList[0]);
    expect(res).toEqual(addresses[0]);
    
    fetchMock.mockIf(/^.*2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb\/tx.*$/, () => {
      console.log('Mock 2', util.inspect(utxos[0], false, null, true /* enable colors */))
      return JSON.stringify(txs[0]);
    });
    const addressTxs = await fetchTxs('testnet', addressList[0]);
    //expect(res.txid).toEqual('5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508');

    fetchMock.mockIf(/^.*2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb\/utxo.*$/, () => {
      console.log('Mock 3', util.inspect(utxos[0], false, null, true /* enable colors */))
      return JSON.stringify(utxos[0]);
    });
    res = await fetchUTXOs('testnet', addressList[0]), addressTxs;
    console.log('Result 3', util.inspect(res, false, null, true /* enable colors */))
    //console.log(res);
    //expect(res).toEqual(txs[0]);

  })

})

