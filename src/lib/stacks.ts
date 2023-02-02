
import { c32address, c32addressDecode } from 'c32check'

export let webWalletNeeded = false;
const allowed = [
  'SP1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28GBQA1W0F',
  'SP3RQ3BGRWVXSXDZZBYGW8XHMHC4MCA6EHNHCK8FE',
  'SPSZBCB3XMNCHJ2T1ECJDTBVJ02FKSQF4HMP7RGF'
]

export function decodeStacksAddress(stxAddress:string) {
	if (!stxAddress) throw new Error('Needs a stacks address');
	const decoded = c32addressDecode(stxAddress)
	return decoded
  }
  
  export function encodeStacksAddress (network:string, b160Address:string) {
	let version = 26
	if (network === 'mainnet') version = 22
	const address = c32address(version, b160Address) // 22 for mainnet
	return address
  }
  
  
export async function login($auth: any) {
	try {
		$auth.openAuthRequest({
			onFinish: (payload: any) => {
				console.log('payload:', payload);
        if (allowed.indexOf(payload.addresses.mainnet) === -1) {
          $auth.signOut();
        }
				//if (window) window.location.reload();
			},
			onCancel: () => {
				console.log('canceled');
			}
  		}).catch((err) => {
          console.log(err);
          // https://www.hiro.so/wallet/install-web
          webWalletNeeded = false;
        });
	} catch (e) {
		if (window) window.location.href = "https://wallet.hiro.so/wallet/install-web";
	}
}