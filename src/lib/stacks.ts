
import { c32address, c32addressDecode } from 'c32check'

export let webWalletNeeded = false;
const allowed = [
	'SP1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRCBGD7R',
	'SP1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28GBQA1W0F',
	'SP3RQ3BGRWVXSXDZZBYGW8XHMHC4MCA6EHNHCK8FE',
	'SP1ACWJC0TMD9F3Q3FJQFDWV9GSSTXN8RY31HR10B',
	'SP2E57N3DDG0CSF6XYWABZ1E7QBF8CTKJ4J1PHP0V'
]
	
export function isAllowed(address:string) {
	return allowed.indexOf(address) > -1
}

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
				if (!isAllowed(payload.addresses.mainnet)) {
					$auth.signOut();
				}
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