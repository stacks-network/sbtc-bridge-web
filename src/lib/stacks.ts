
export let webWalletNeeded = false;
const allowed = [
  'SP1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28GBQA1W0F',
  'SP3RQ3BGRWVXSXDZZBYGW8XHMHC4MCA6EHNHCK8FE'
]

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