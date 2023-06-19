<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { onMount } from 'svelte';
	import { truncate } from '$lib/utils'
	import { sbtcConfig } from '$stores/stores'
	import { fmtSatoshiToBitcoin, fmtMicroToStx, bitcoinBalanceFromMempool } from '$lib/utils'
	import { addresses, logUserOut } from '$lib/stacks_connect'
	import type { SbtcConfig } from '$types/sbtc_config';

	export let menuTarget:{ offsetTop: number; offsetLeft: number } | undefined;
	let inited = false;
	let style:string;
	const dispatch = createEventDispatcher();
	
	const doLogout = () => {
		logUserOut(); 
		sbtcConfig.update((conf:SbtcConfig) => {
			conf.loggedIn = false;
			conf.addressObject = undefined;
			conf.pegInTransaction = undefined;
			conf.pegOutTransaction = undefined;
			return conf;
		});
		dispatch('init_logout', { from: 'account-menu' });
	}

	const getStxBalance = () => {
		try {
			return ($sbtcConfig?.addressObject?.stacksTokenInfo?.stx) ? fmtMicroToStx($sbtcConfig.addressObject.stacksTokenInfo.stx.balance ) : 0.000000;
		} catch(err) {
			return 0.000000
		}
	}

	const transformAddress = (address:string) => {
		if (address) {
			return truncate(address, 8).toUpperCase()
		}
		return 'not connected'
	}

	onMount(async () => {
		if (menuTarget && menuTarget.offsetLeft) {
			//style = "position: absolute; top: " + 120 + "; right: " + 120;
			style = "transform: translate3d(" + (menuTarget.offsetLeft - 280) + "px, " + (40 + menuTarget.offsetTop) + "px, 0px); position: absolute; inset: 0px auto auto 0px; margin: 0px; ";
		} else {
			style = "transform: translate3d(" + 623.636 + "px, " + 102.2727 + "px, 0px); position: absolute; inset: 0px auto auto 0px; margin: 0px; ";
		}
		inited = true;
	})

</script>

{#if inited}
<div role="tooltip" tabindex="-1" id="account" 
	class="menu-box rounded border-gray-100 dark:border-gray-700 shadow-md outline-none divide-y divide-gray-100 dark:divide-gray-600" 
	data-popper-placement="bottom" 
	{style}>
	<div class="menu-section my-1">
		<div class="menu-panel grid grid-cols-6 gap-3">
			<div class="col-span-6 menu-text-col1">Addresses</div>
		</div>
		<div class="menu-panel grid grid-cols-6 gap-3 border-none  py-1">
			<div class="col-span-1">
				<svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.3464 11.3332L8.08325 7.90434H11.3334V6.61067H0.666748V7.90567H3.91575L1.65341 11.3332H3.34108L6.00008 7.30484L8.65875 11.3332H10.3464ZM11.3332 5.355V4.04834H8.14925L10.3812 0.666504H8.69375L5.99992 4.74784L3.30625 0.666504H1.61875L3.85375 4.0515H0.666748V5.355H11.3332Z" fill="white"/>
				</svg>
			</div>
			<div class="col-span-4">
				<div class="menu-text-col2 mt-2">{transformAddress(addresses().stxAddress)}</div>
			</div>
			<div class="col-span-1 text-right">
				<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.5 9H8.625M5.5 11.5H8.625M5.5 14H8.625M11.125 14.625H13C13.4973 14.625 13.9742 14.4275 14.3258 14.0758C14.6775 13.7242 14.875 13.2473 14.875 12.75V4.09C14.875 3.14417 14.1708 2.34167 13.2283 2.26333C12.9167 2.23749 12.6047 2.21526 12.2925 2.19667M12.2925 2.19667C12.3478 2.3759 12.3751 2.56243 12.375 2.75C12.375 2.91576 12.3092 3.07473 12.1919 3.19194C12.0747 3.30915 11.9158 3.375 11.75 3.375H8C7.655 3.375 7.375 3.095 7.375 2.75C7.375 2.5575 7.40417 2.37167 7.45833 2.19667M12.2925 2.19667C12.0567 1.43167 11.3433 0.875 10.5 0.875H9.25C8.84937 0.875094 8.45929 1.00345 8.13688 1.24128C7.81448 1.47911 7.57669 1.81392 7.45833 2.19667M7.45833 2.19667C7.145 2.21583 6.83333 2.23833 6.52167 2.26333C5.57917 2.34167 4.875 3.14417 4.875 4.09V5.875M4.875 5.875H2.0625C1.545 5.875 1.125 6.295 1.125 6.8125V16.1875C1.125 16.705 1.545 17.125 2.0625 17.125H10.1875C10.705 17.125 11.125 16.705 11.125 16.1875V6.8125C11.125 6.295 10.705 5.875 10.1875 5.875H4.875ZM3.625 9H3.63167V9.00667H3.625V9ZM3.625 11.5H3.63167V11.5067H3.625V11.5ZM3.625 14H3.63167V14.0067H3.625V14Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</div>
		<div class="menu-panel grid grid-cols-6 gap-3 border-none py-1">
			<div class="col-span-1">
				<svg width="15" height="18" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.41 5.57486C10.61 4.24486 9.59503 3.52986 8.21003 3.05153L8.66003 1.24986L7.5617 0.97653L7.12336 2.73153C6.83503 2.65986 6.54003 2.59153 6.24503 2.52486L6.68503 0.758197L5.58837 0.484863L5.14003 2.28486L2.9267 1.7382L2.63503 2.90986C2.63503 2.90986 3.44837 3.09653 3.4317 3.1082C3.8767 3.21986 3.9567 3.5132 3.94337 3.74653L2.7117 8.6832C2.6567 8.81653 2.52003 9.01986 2.20837 8.9432C2.22003 8.95986 1.4117 8.7432 1.4117 8.7432L0.866699 9.99986L3.0767 10.5582L2.6217 12.3815L3.71837 12.6549L4.16837 10.8515C4.46837 10.9332 4.75837 11.0082 5.04337 11.0782L4.59337 12.8732L5.6917 13.1465L6.1467 11.3265C8.0167 11.6832 9.42503 11.5399 10.0167 9.84986C10.4934 8.4882 9.99337 7.70153 9.00837 7.18986C9.72503 7.0232 10.265 6.55153 10.4084 5.5782H10.41V5.57486ZM7.9017 9.09153C7.5617 10.4532 5.26837 9.71653 4.52503 9.53153L5.1267 7.11653C5.87003 7.30153 8.25503 7.66986 7.9017 9.09153ZM8.2417 5.55653C7.93336 6.79653 6.02337 6.16653 5.40337 6.01153L5.94837 3.81986C6.56837 3.97486 8.56503 4.2632 8.2417 5.55653Z" fill="white"/>
				</svg>
			</div>
			<div class="col-span-4">
				<div class="menu-text-col2 mt-2">Cardinal: {transformAddress(addresses().cardinal)}</div>
			</div>
			<div class="col-span-1 text-right">
				<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.5 9H8.625M5.5 11.5H8.625M5.5 14H8.625M11.125 14.625H13C13.4973 14.625 13.9742 14.4275 14.3258 14.0758C14.6775 13.7242 14.875 13.2473 14.875 12.75V4.09C14.875 3.14417 14.1708 2.34167 13.2283 2.26333C12.9167 2.23749 12.6047 2.21526 12.2925 2.19667M12.2925 2.19667C12.3478 2.3759 12.3751 2.56243 12.375 2.75C12.375 2.91576 12.3092 3.07473 12.1919 3.19194C12.0747 3.30915 11.9158 3.375 11.75 3.375H8C7.655 3.375 7.375 3.095 7.375 2.75C7.375 2.5575 7.40417 2.37167 7.45833 2.19667M12.2925 2.19667C12.0567 1.43167 11.3433 0.875 10.5 0.875H9.25C8.84937 0.875094 8.45929 1.00345 8.13688 1.24128C7.81448 1.47911 7.57669 1.81392 7.45833 2.19667M7.45833 2.19667C7.145 2.21583 6.83333 2.23833 6.52167 2.26333C5.57917 2.34167 4.875 3.14417 4.875 4.09V5.875M4.875 5.875H2.0625C1.545 5.875 1.125 6.295 1.125 6.8125V16.1875C1.125 16.705 1.545 17.125 2.0625 17.125H10.1875C10.705 17.125 11.125 16.705 11.125 16.1875V6.8125C11.125 6.295 10.705 5.875 10.1875 5.875H4.875ZM3.625 9H3.63167V9.00667H3.625V9ZM3.625 11.5H3.63167V11.5067H3.625V11.5ZM3.625 14H3.63167V14.0067H3.625V14Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</div>
		<div class="menu-panel grid grid-cols-6 gap-3 border-none py-3">
			<div class="col-span-1">
				<svg width="15" height="18" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.41 5.57486C10.61 4.24486 9.59503 3.52986 8.21003 3.05153L8.66003 1.24986L7.5617 0.97653L7.12336 2.73153C6.83503 2.65986 6.54003 2.59153 6.24503 2.52486L6.68503 0.758197L5.58837 0.484863L5.14003 2.28486L2.9267 1.7382L2.63503 2.90986C2.63503 2.90986 3.44837 3.09653 3.4317 3.1082C3.8767 3.21986 3.9567 3.5132 3.94337 3.74653L2.7117 8.6832C2.6567 8.81653 2.52003 9.01986 2.20837 8.9432C2.22003 8.95986 1.4117 8.7432 1.4117 8.7432L0.866699 9.99986L3.0767 10.5582L2.6217 12.3815L3.71837 12.6549L4.16837 10.8515C4.46837 10.9332 4.75837 11.0082 5.04337 11.0782L4.59337 12.8732L5.6917 13.1465L6.1467 11.3265C8.0167 11.6832 9.42503 11.5399 10.0167 9.84986C10.4934 8.4882 9.99337 7.70153 9.00837 7.18986C9.72503 7.0232 10.265 6.55153 10.4084 5.5782H10.41V5.57486ZM7.9017 9.09153C7.5617 10.4532 5.26837 9.71653 4.52503 9.53153L5.1267 7.11653C5.87003 7.30153 8.25503 7.66986 7.9017 9.09153ZM8.2417 5.55653C7.93336 6.79653 6.02337 6.16653 5.40337 6.01153L5.94837 3.81986C6.56837 3.97486 8.56503 4.2632 8.2417 5.55653Z" fill="white"/>
				</svg>
			</div>
			<div class="col-span-4">
				<div class="menu-text-col2 mt-2">Ordinal: {transformAddress(addresses().ordinal)}</div>
			</div>
			<div class="col-span-1 text-right">
				<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.5 9H8.625M5.5 11.5H8.625M5.5 14H8.625M11.125 14.625H13C13.4973 14.625 13.9742 14.4275 14.3258 14.0758C14.6775 13.7242 14.875 13.2473 14.875 12.75V4.09C14.875 3.14417 14.1708 2.34167 13.2283 2.26333C12.9167 2.23749 12.6047 2.21526 12.2925 2.19667M12.2925 2.19667C12.3478 2.3759 12.3751 2.56243 12.375 2.75C12.375 2.91576 12.3092 3.07473 12.1919 3.19194C12.0747 3.30915 11.9158 3.375 11.75 3.375H8C7.655 3.375 7.375 3.095 7.375 2.75C7.375 2.5575 7.40417 2.37167 7.45833 2.19667M12.2925 2.19667C12.0567 1.43167 11.3433 0.875 10.5 0.875H9.25C8.84937 0.875094 8.45929 1.00345 8.13688 1.24128C7.81448 1.47911 7.57669 1.81392 7.45833 2.19667M7.45833 2.19667C7.145 2.21583 6.83333 2.23833 6.52167 2.26333C5.57917 2.34167 4.875 3.14417 4.875 4.09V5.875M4.875 5.875H2.0625C1.545 5.875 1.125 6.295 1.125 6.8125V16.1875C1.125 16.705 1.545 17.125 2.0625 17.125H10.1875C10.705 17.125 11.125 16.705 11.125 16.1875V6.8125C11.125 6.295 10.705 5.875 10.1875 5.875H4.875ZM3.625 9H3.63167V9.00667H3.625V9ZM3.625 11.5H3.63167V11.5067H3.625V11.5ZM3.625 14H3.63167V14.0067H3.625V14Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</div>
	</div>
	<div class="menu-section py-1 my-1">
		<div class="menu-panel grid grid-cols-6 gap-3 border-none">
			<div class="col-span-6 menu-text-col1">Balances</div>
		</div>
		<div class="menu-panel grid grid-cols-6 gap-3 border-none py-3">
			<div class="col-span-2 menu-text-col1">
				BTC : Cardinal
			</div>
			<div class="col-span-4 menu-text-val text-right">
				{fmtSatoshiToBitcoin(bitcoinBalanceFromMempool($sbtcConfig?.addressObject?.cardinalInfo) || 0.00000000)}
			</div>
		</div>
		<div class="menu-panel grid grid-cols-6 gap-3 border-none py-3">
			<div class="col-span-2 menu-text-col1">
				BTC : Ordinal
			</div>
			<div class="col-span-4 menu-text-val text-right">
				{fmtSatoshiToBitcoin(bitcoinBalanceFromMempool($sbtcConfig?.addressObject?.ordinalInfo) || 0.00000000)}
			</div>
		</div>
		<div class="menu-panel grid grid-cols-6 gap-3 border-none py-3">
			<div class="col-span-2 menu-text-col1">
				sBTC
			</div>
			<div class="col-span-4 menu-text-val text-right">
				{fmtSatoshiToBitcoin($sbtcConfig?.addressObject?.sBTCBalance || 0.00000000)}
			</div>
		</div>
		<div class="menu-panel grid grid-cols-6 gap-3 border-none py-3">
			<div class="col-span-2 menu-text-col1">
				STX
			</div>
			<div class="col-span-4 menu-text-val text-right">
				{getStxBalance()}
			</div>
		</div>
	</div>
	<div class="menu-section">
		<div class="menu-panel grid grid-cols-6 gap-3">
			<div class="col-span-6 menu-text-logout"><a href="/" on:click|preventDefault={() => doLogout()}>Log out</a></div>
		</div>
	</div>
</div>
{/if}

<style>
.menu-text-logout {
	font-family: 'Circular Std';
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 20px;
	color: #EF4444;
}
</style>
