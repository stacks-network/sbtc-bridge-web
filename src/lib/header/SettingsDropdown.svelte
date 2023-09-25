<script lang="ts">
	import { onMount } from 'svelte';
	import { sbtcConfig } from '$stores/stores';
	import type { ExchangeRate } from 'sbtc-bridge-lib';

	onMount(async () => {
		if (typeof $sbtcConfig.userSettings === 'undefined') {
			$sbtcConfig.userSettings = {
				useOpDrop: false,
				debugMode: false,
				testAddresses: false,
				peggingIn: true,
				currency: {
					cryptoFirst: false,
					myFiatCurrency: { currency: 'USD' } as ExchangeRate,
					denomination: 'bitcoin'
				}
			}
		}
		if (typeof $sbtcConfig.userSettings.currency === 'undefined') {
			$sbtcConfig.userSettings.currency = {
				cryptoFirst: false,
				myFiatCurrency: { currency: 'USD' } as ExchangeRate,
				denomination: 'bitcoin'
			}
		}
		sbtcConfig.update(() => $sbtcConfig);
	})
</script>
<a href="/settings" class="block w-full md:inline-flex bg-primary-02 p-px font-normal rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
	<span class="block w-full md:inline-flex items-center gap-x-1.5 bg-gray-1000 px-4 py-2 rounded-lg h-full">
		<span class="text-transparent bg-clip-text bg-primary-02">Settings</span>
	</span>
</a>