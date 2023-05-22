import { beforeAll, beforeEach, expect, describe, it } from 'vitest'
import util from 'util'
import { domain, domainCV } from '../src/lib/structured-data'
import type { Message } from 'sbtc-bridge-lib' 

describe('suite', () => {
  beforeAll(async () => {
    //console.log("beforeAll: -----------------------------------------------");
  })

  beforeEach(async () => {
    // cant fetch mock here as only first mock is recognised
  })

  const sigHex = '89c35c02cce3511cf478175ae414868ce061b20b7b7179bca7968ecf32f22fd2564dd55fef209599c4561aeda529893394e3e1ec70d45a64616e7138d58380e701'
  const net = {bech32: "tb", pubKeyHash: 111, scriptHash: 196, wif: 239}
  const amount = 1000;
  const address = 'tb1pf74xr0x574farj55t4hhfvv0vpc9mpgerasawmf5zk9suauckugqdppqe8'
  it.concurrent('structure-data() verif.', async () => {
    const message:Message = {
      script: Buffer.from('xyz')
    }
  })
  const message = { script: 'e8030000000000000051204faa61bcd4f553d1ca945d6f74b18f60705d85191f61d76d34158b0e7798b710' }
  const publicKey = "03568e2792f422b3184a75f290a0533109e5319212c8aa01134d7a65b4914256c8"
  const signature = "0383417c35412583899e9a1c37d8c9c2eec4180dbeff275d0634d9ec862d90d758ba3e3026f7ca7e23de2e7c1823d198e7004303854e185671e3c05eff655d9d00"
  // SP3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSQP2HGT6
  it.concurrent('structure-data() verif.', async () => {
    expect(domain.name).equals('sBTC Bridge');
    expect(domainCV.data.name.data).equals('sBTC Bridge');
    expect(domainCV.data.name.type).equals(13);
    expect(domainCV.data['chain-id'].type).equals(1);
    //expect(domainCV.data['chain-id'].value).equals(2147483648n);
    expect(domainCV.data['chain-id'].value).equals(1n);
    
  })
})
