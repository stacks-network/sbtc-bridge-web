import { beforeAll, beforeEach, expect, describe, it, vi } from 'vitest'
import { maxCommit, fetchUTXOs, fetchAddressDetails } from "$lib/utxos";
import { sbtcConfig1, sbtcConfig10 } from './test_data';

// The two tests marked with concurrent will be run in parallel
describe('suite', () => {
  beforeAll(async () => {
    // tell vitest we use mocked time
    //vi.useFakeTimers()
    //fetchMock.resetMocks();
    console.log("beforeAll: ");
  })

  beforeEach(async () => {
    // tell vitest we use mocked time
    //vi.useFakeTimers()
    //fetchMock.resetMocks();
    console.log("request 1: ");
    fetchMock.mockIf(/^.*tb1qkgekp2xw5yw26n0whhcutnmezxj09elxnfw39x.*$/, (req) => {
      console.log("request 3: " + req.url);
      return JSON.stringify(sbtcConfig10);
    });
    fetchMock.mockIf(/^.*tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq.*$/, (req) => {
      console.log("request 2: " + req.url);
      return JSON.stringify(sbtcConfig1);
    });
  })

  it.concurrent('can fetch 1 utxos', async () => {
    
    //fetchMock.mockResponseOnce(JSON.stringify({ data: sbtcConfig1 }));
    const res = await fetchAddressDetails('testnet', 'tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq');
    console.log("res1: " + res.utxos.length);
    //expect(res).toEqual(sbtcConfig1);
    //expect(sbtcConfig1.utxos.length).toEqual(1);
    //console.log('res: ', res);
    //expect(fetchAddressDetails(sbtcConfig.network, sbtcConfig.fromBtcAddress))
  })

  it.concurrent('can fetch 10 utxos', async () => {
    
    //fetchMock.mockResponseOnce(JSON.stringify({ data: sbtcConfig10 }));
    const res = await fetchAddressDetails('testnet', 'tb1qkgekp2xw5yw26n0whhcutnmezxj09elxnfw39x');
    console.log("res2: " + res.utxos.length);
    //expect(res).toEqual(sbtcConfig10);
    //expect(sbtcConfig10.utxos.length).toEqual(10);
    //console.log('res: ', res);
    //expect(fetchAddressDetails(sbtcConfig.network, sbtcConfig.fromBtcAddress))
  })

})
