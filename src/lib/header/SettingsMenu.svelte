<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { CONFIG, setConfig } from '$lib/config';
	import { truncate, explorerAddressUrl, explorerBtcAddressUrl } from '$lib/utils'
	import { sbtcConfig } from '$stores/stores';
	import { onMount } from 'svelte';
	import type { SbtcConfig } from '$types/sbtc_config';
	import { fetchSbtcBalance, addresses } from '$lib/stacks_connect'

	export let menuTarget:{ offsetTop: number; offsetLeft: number } | undefined;
	let inited = false;
	let style:string;
	const dispatch = createEventDispatcher();

	const getContractAddress = () => {
		const contract = CONFIG.VITE_SBTC_CONTRACT_ID
		return truncate(contract.split('.')[0]) + '.' + contract.split('.')[1]
	}
	const getCoordinator = () => {
		if ($sbtcConfig?.sbtcContractData?.coordinator) {
			return truncate($sbtcConfig?.sbtcContractData?.coordinator?.addr.value, 8)
		}
		return 'not known'
	}
	const getOwner = () => {
		if ($sbtcConfig?.sbtcContractData?.contractOwner) {
			return truncate($sbtcConfig.sbtcContractData.contractOwner, 8)
		}
		return 'not known'
	}
	const getAddress = () => {
		if ($sbtcConfig?.sbtcContractData?.sbtcWalletAddress) {
			return truncate($sbtcConfig.sbtcContractData.sbtcWalletAddress, 8).toUpperCase()
		}
		return 'not connected'
	}
	const toggleSettings = (arg:string) => {
		const conf:SbtcConfig = $sbtcConfig;
		if (typeof conf.userSettings === 'undefined') {
			conf.userSettings = {
				useOpDrop: false,
				debugMode: false,
				testAddresses: false
			}
		}
		if (arg === 'txmode') conf.userSettings.useOpDrop = !conf.userSettings.useOpDrop;
		if (arg === 'debug') conf.userSettings.debugMode = !conf.userSettings.debugMode;
		if (arg === 'testAddresses') conf.userSettings.testAddresses = !conf.userSettings.testAddresses;
		sbtcConfig.update(() => conf);
	}

	const toggleNetwork = async () => {
		let net = 'mainnet';
		if ('mainnet' === CONFIG.VITE_NETWORK) net = 'testnet';
		setConfig(net);
		await fetchSbtcBalance();
		sbtcConfig.update((conf:SbtcConfig) => {
			conf.stxAddress = addresses().stxAddress;
			if (conf.pegInTransaction) {
				conf.pegInTransaction.fromBtcAddress = addresses().ordinal;
				if (conf.pegInTransaction.pegInData) conf.pegInTransaction.pegInData.stacksAddress = addresses().stxAddress;
			}
			if (conf.pegOutTransaction) {
				conf.pegOutTransaction.fromBtcAddress = addresses().ordinal;
			}
			return conf;
		});
		const url = new URL(location.href);
		url.searchParams.set('net', net);
		location.assign(url.search);
	}

	onMount(async () => {
		if (menuTarget && menuTarget.offsetLeft) {
			//style = "position: absolute; top: " + 120 + "; right: " + 120;
			style = "transform: translate3d(" + (menuTarget.offsetLeft - 290) + "px, " + (40 + menuTarget.offsetTop) + "px, 0px); position: absolute; inset: 0px auto auto 0px; margin: 0px; ";
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
	<div class="menu-panel grid grid-cols-6 gap-1 border-none">
		<div class="col-span-2 menu-text-col1">Network:</div>
		<div class="col-span-2 menu-badge-bg grow"><div class="menu-text-col2">{CONFIG.VITE_NETWORK}</div></div>
		<div class="col-span-2 w-full text-right" style="text-align: -webkit-right;">
			<div class="menu-switcher pointer" on:keydown on:click={() => toggleNetwork()}>
				<span class="menu-switcher-text ">Switch</span>
				<span>
					<svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.50008 1.16657L8.50014 1.1665L10.8333 3.33296L10.8335 3.33323L10.8333 3.3335L8.50018 5.49993L8.50016 5.49994L8.50014 5.49995L8.50013 5.49994L8.50011 5.49993L8.5001 5.49992L8.5001 5.4999L8.50011 5.49988L8.50012 5.49987L8.50037 5.49963L9.90037 4.19963L10.8334 3.33323L9.90037 2.46684L8.50037 1.16684L8.50008 1.16657ZM3.50015 6.49984L3.50021 6.4999L3.49992 6.50017L2.09992 7.80017L1.16688 8.66657L2.09992 9.53296L3.49992 10.833L3.50018 10.8332L3.50019 10.8332L3.50019 10.8332L3.50019 10.8332L3.50018 10.8333L3.50017 10.8333L3.50015 10.8333L3.50013 10.8333L3.50012 10.8333L1.16704 8.66684L1.16675 8.66657L1.16704 8.6663L3.50015 6.49984ZM2.97861 7.66657L3.84015 6.86657L0.826813 8.2999C0.776328 8.34671 0.736052 8.40343 0.708508 8.46653C0.680965 8.52962 0.666748 8.59772 0.666748 8.66657C0.666748 8.73541 0.680965 8.80351 0.708508 8.86661C0.736052 8.9297 0.776328 8.98643 0.826813 9.03323L3.16015 11.1999C3.2083 11.2445 3.26477 11.2793 3.32634 11.3021C3.38792 11.3249 3.45338 11.3354 3.519 11.3329C3.58462 11.3304 3.64911 11.3151 3.70879 11.2877C3.76847 11.2603 3.82216 11.2214 3.86681 11.1732C3.91146 11.1251 3.94619 11.0686 3.96901 11.007C3.99184 10.9455 4.00231 10.88 3.99984 10.8144C3.99736 10.7488 3.98198 10.6843 3.95458 10.6246C3.92718 10.5649 3.8883 10.5112 3.84015 10.4666L2.97861 9.66657H2.44015V9.16657L2.78037 8.80017L3.17495 9.16657H8.16681C8.29942 9.16657 8.4266 9.11389 8.52037 9.02012C8.61413 8.92635 8.66681 8.79918 8.66681 8.66657C8.66681 8.53396 8.61413 8.40678 8.52037 8.31301C8.4266 8.21925 8.29942 8.16657 8.16681 8.16657H3.17495L2.78037 8.53296L2.44015 8.16657V7.66657H2.97861Z" fill="white" stroke="white"/>
					</svg>
				</span>
			</div>
		</div>
	</div>
	<div class="menu-panel grid grid-cols-6 gap-3 border-none">
		<div class="col-span-2 menu-text-col1">sBTC Contract:</div>
		<div class="col-span-3 menu-text-col2"><a href={explorerAddressUrl(CONFIG.VITE_SBTC_CONTRACT_ID)} target="_blank">{getContractAddress()}</a></div>
		<div class="col-span-1 text-right">
			<a href={explorerAddressUrl(CONFIG.VITE_SBTC_CONTRACT_ID)} target="_blank">
				<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0.193919 10.753C0.260005 10.8261 0.339861 10.8855 0.428917 10.9278C0.517974 10.97 0.614485 10.9943 0.712933 10.9992C0.81138 11.0041 0.909833 10.9896 1.00266 10.9565C1.09549 10.9233 1.18087 10.8722 1.25392 10.806L10.4999 2.44V5.25C10.4999 5.44891 10.5789 5.63968 10.7196 5.78033C10.8602 5.92098 11.051 6 11.2499 6C11.4488 6 11.6396 5.92098 11.7802 5.78033C11.9209 5.63968 11.9999 5.44891 11.9999 5.25V0.75C11.9999 0.551088 11.9209 0.360322 11.7802 0.21967C11.6396 0.0790175 11.4488 0 11.2499 0H6.74992C6.55101 4.19176e-09 6.36024 0.0790175 6.21959 0.21967C6.07894 0.360322 5.99992 0.551088 5.99992 0.75C5.99992 0.948912 6.07894 1.13968 6.21959 1.28033C6.36024 1.42098 6.55101 1.5 6.74992 1.5H9.30292L0.246919 9.694C0.173784 9.76009 0.114394 9.83994 0.0721438 9.929C0.029894 10.0181 0.00561402 10.1146 0.000691651 10.213C-0.00423072 10.3115 0.0103012 10.4099 0.0434568 10.5027C0.0766124 10.5956 0.127741 10.6799 0.193919 10.753Z" fill="white"/>
				</svg>
			</a>
		</div>
	</div>
	<div class="menu-panel grid grid-cols-6 gap-3 border-none">
		<div class="col-span-2 menu-text-col1">Contract Owner:</div>
		<div class="col-span-3 menu-text-col2"><a href={explorerAddressUrl(CONFIG.VITE_SBTC_CONTRACT_ID)} target="_blank">{getOwner()}</a></div>
		<div class="col-span-1 text-right">
			<a href={explorerAddressUrl(CONFIG.VITE_SBTC_CONTRACT_ID)} target="_blank">
				<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0.193919 10.753C0.260005 10.8261 0.339861 10.8855 0.428917 10.9278C0.517974 10.97 0.614485 10.9943 0.712933 10.9992C0.81138 11.0041 0.909833 10.9896 1.00266 10.9565C1.09549 10.9233 1.18087 10.8722 1.25392 10.806L10.4999 2.44V5.25C10.4999 5.44891 10.5789 5.63968 10.7196 5.78033C10.8602 5.92098 11.051 6 11.2499 6C11.4488 6 11.6396 5.92098 11.7802 5.78033C11.9209 5.63968 11.9999 5.44891 11.9999 5.25V0.75C11.9999 0.551088 11.9209 0.360322 11.7802 0.21967C11.6396 0.0790175 11.4488 0 11.2499 0H6.74992C6.55101 4.19176e-09 6.36024 0.0790175 6.21959 0.21967C6.07894 0.360322 5.99992 0.551088 5.99992 0.75C5.99992 0.948912 6.07894 1.13968 6.21959 1.28033C6.36024 1.42098 6.55101 1.5 6.74992 1.5H9.30292L0.246919 9.694C0.173784 9.76009 0.114394 9.83994 0.0721438 9.929C0.029894 10.0181 0.00561402 10.1146 0.000691651 10.213C-0.00423072 10.3115 0.0103012 10.4099 0.0434568 10.5027C0.0766124 10.5956 0.127741 10.6799 0.193919 10.753Z" fill="white"/>
				</svg>
			</a>
		</div>
	</div>
	<div class="menu-panel grid grid-cols-6 gap-3 border-none">
		<div class="col-span-2 menu-text-col1">Coordinator:</div>
		<div class="col-span-3 menu-text-col2"><a href={explorerAddressUrl(CONFIG.VITE_SBTC_CONTRACT_ID)} target="_blank">{getCoordinator()}</a></div>
		<div class="col-span-1 text-right">
			<a href={explorerAddressUrl(CONFIG.VITE_SBTC_CONTRACT_ID)} target="_blank">
				<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0.193919 10.753C0.260005 10.8261 0.339861 10.8855 0.428917 10.9278C0.517974 10.97 0.614485 10.9943 0.712933 10.9992C0.81138 11.0041 0.909833 10.9896 1.00266 10.9565C1.09549 10.9233 1.18087 10.8722 1.25392 10.806L10.4999 2.44V5.25C10.4999 5.44891 10.5789 5.63968 10.7196 5.78033C10.8602 5.92098 11.051 6 11.2499 6C11.4488 6 11.6396 5.92098 11.7802 5.78033C11.9209 5.63968 11.9999 5.44891 11.9999 5.25V0.75C11.9999 0.551088 11.9209 0.360322 11.7802 0.21967C11.6396 0.0790175 11.4488 0 11.2499 0H6.74992C6.55101 4.19176e-09 6.36024 0.0790175 6.21959 0.21967C6.07894 0.360322 5.99992 0.551088 5.99992 0.75C5.99992 0.948912 6.07894 1.13968 6.21959 1.28033C6.36024 1.42098 6.55101 1.5 6.74992 1.5H9.30292L0.246919 9.694C0.173784 9.76009 0.114394 9.83994 0.0721438 9.929C0.029894 10.0181 0.00561402 10.1146 0.000691651 10.213C-0.00423072 10.3115 0.0103012 10.4099 0.0434568 10.5027C0.0766124 10.5956 0.127741 10.6799 0.193919 10.753Z" fill="white"/>
				</svg>
			</a>
		</div>
	</div>
	<div class="menu-panel grid grid-cols-6 gap-3 border-none">
		<div class="col-span-2 menu-text-col1">sBTC Wallet:</div>
		{#if $sbtcConfig?.sbtcContractData?.sbtcWalletAddress}
		<div class="col-span-3 menu-text-col2"><a href={explorerBtcAddressUrl(getAddress())} target="_blank">{getAddress()}</a></div>
		<div class="col-span-1 text-right">
			<a href={explorerBtcAddressUrl(getAddress())} target="_blank">
				<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0.193919 10.753C0.260005 10.8261 0.339861 10.8855 0.428917 10.9278C0.517974 10.97 0.614485 10.9943 0.712933 10.9992C0.81138 11.0041 0.909833 10.9896 1.00266 10.9565C1.09549 10.9233 1.18087 10.8722 1.25392 10.806L10.4999 2.44V5.25C10.4999 5.44891 10.5789 5.63968 10.7196 5.78033C10.8602 5.92098 11.051 6 11.2499 6C11.4488 6 11.6396 5.92098 11.7802 5.78033C11.9209 5.63968 11.9999 5.44891 11.9999 5.25V0.75C11.9999 0.551088 11.9209 0.360322 11.7802 0.21967C11.6396 0.0790175 11.4488 0 11.2499 0H6.74992C6.55101 4.19176e-09 6.36024 0.0790175 6.21959 0.21967C6.07894 0.360322 5.99992 0.551088 5.99992 0.75C5.99992 0.948912 6.07894 1.13968 6.21959 1.28033C6.36024 1.42098 6.55101 1.5 6.74992 1.5H9.30292L0.246919 9.694C0.173784 9.76009 0.114394 9.83994 0.0721438 9.929C0.029894 10.0181 0.00561402 10.1146 0.000691651 10.213C-0.00423072 10.3115 0.0103012 10.4099 0.0434568 10.5027C0.0766124 10.5956 0.127741 10.6799 0.193919 10.753Z" fill="white"/>
				</svg>
			</a>
		</div>
		{:else}
		<div class="col-span-3 menu-text-col2">{getAddress()}</div>
		{/if}
	</div>
	<div class="grid grid-cols-6 gap-3 border-none pt-3">
		<div class="col-span-2 p-3">
			{#if $sbtcConfig.userSettings?.useOpDrop}
			<label class="relative inline-flex items-center cursor-pointer">
				<input  on:click|preventDefault={() => toggleSettings('txmode')} type="checkbox" value="" class="sr-only peer" checked>
				<div style="background: #ED693C;" class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
			</label>
			{:else}
			<label class="relative inline-flex items-center cursor-pointer">
				<input  on:click|preventDefault={() => toggleSettings('txmode')} type="checkbox" value="" class="sr-only peer">
				<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
			</label>
			{/if}
		</div>
		<div class="col-span-4 p-3">
			<div class="menu-settings-1">Tx Mode</div>
			<div class="menu-settings-2">{#if $sbtcConfig.userSettings?.useOpDrop}Using OP_DROP Mechanism{:else}Using OP_RETURN Mechanism{/if}</div>
		</div>
	</div>
	<div class="grid grid-cols-6 gap-3 border-none pt-3">
		<div class="col-span-2 p-3">
			{#if $sbtcConfig.userSettings?.debugMode}
			<label class="relative inline-flex items-center cursor-pointer">
				<input  on:click|preventDefault={() => toggleSettings('debug')} type="checkbox" value="" class="sr-only peer" checked>
				<div style="background: #ED693C;" class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
			</label>
			{:else}
			<label class="relative inline-flex items-center cursor-pointer">
				<input  on:click|preventDefault={() => toggleSettings('debug')} type="checkbox" value="" class="sr-only peer">
				<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
			</label>
			{/if}
		</div>
		<div class="col-span-4 p-3">
			<div class="menu-settings-1">Debug Mode</div>
			<div class="menu-settings-2">{#if $sbtcConfig.userSettings?.debugMode}Showing advanced info{:else}Advanced info off{/if}</div>
		</div>
	</div>
</div>
{/if}

<style>
	
</style>
