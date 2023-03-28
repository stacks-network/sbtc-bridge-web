import { beforeAll, beforeEach, expect, describe, it, vi } from 'vitest'
import { isAllowed, decodeStacksAddress, encodeStacksAddress } from "$lib/stacks_connect";
import { allowed } from './data/test_data';

const network = 'testnet'
describe('suite', () => {
  beforeAll(async () => {
    //console.log("beforeAll: -----------------------------------------------");
  })

  beforeEach(async () => {
    // cant fetch mock here as only first mock is recognised
  })

  it.concurrent('stacks: isAllowed() check login allowed from known address', async () => {
    const res = isAllowed(allowed[0].stx);
    expect(typeof res).equals('object');
  })

  it.concurrent('stacks: isAllowed() check login not allowed from unknown address', async () => {
    const res = isAllowed(allowed[0].stx + '1');
    expect(typeof res).equals('undefined');
  })

  it.concurrent('stacks: decodeStacksAddress() check mainnet stacks address can be decoded', async () => {
    const res = decodeStacksAddress(allowed[0].stx);
    expect(res[0]).equals(22);
    expect(res[1]).equals('7010183fd1a76976e7b2bb67acdf57cdfe704882');
  })

  it.concurrent('stacks: decodeStacksAddress() check testnet stacks address can be decoded', async () => {
    const res = decodeStacksAddress(allowed[1].stx);
    expect(res[0]).equals(26);
    expect(res[1]).equals('e594280c8eebb93598b5641b66d29e99f26f38f5');
  })

  it.concurrent('stacks: decodeStacksAddress() check testnet bitcoin address can be encoded', async () => {
    const res = encodeStacksAddress(network, allowed[1].btc);
    //console.log(res)
    expect(res).equals('ST3JS8A0CHVNVJDCRPNJ1PSPJKTCZ4VSRYNVA55TW');
  })

})
