<script lang="ts">
	import { Button, Dropdown, DropdownItem, Toggle, Helper } from 'flowbite-svelte'
	import { Icon, ArrowsRightLeft, ClipboardDocument, ArrowUpRight } from "svelte-hero-icons"

	import { CONFIG, setConfig } from '$lib/config';
	import { truncate, explorerAddressUrl, explorerBtcAddressUrl } from '$lib/utils'
	import { sbtcConfig } from '$stores/stores';
	import type { SbtcConfig } from '$types/sbtc_config';
	import { fetchSbtcBalance, addresses } from '$lib/stacks_connect'

	const getContractAddress = () => {
		const contract = CONFIG.VITE_SBTC_CONTRACT_ID
		return truncate(contract.split('.')[0]) + '.' + contract.split('.')[1]
	}
	const getCoordinator = (full:boolean) => {
		if ($sbtcConfig?.sbtcContractData?.coordinator) {
			if (full) return $sbtcConfig.sbtcContractData.coordinator?.addr.value
			return truncate($sbtcConfig?.sbtcContractData?.coordinator?.addr.value, 8)
		}
		return 'not known'
	}
	const getOwner = (full:boolean) => {
		if ($sbtcConfig?.sbtcContractData?.contractOwner) {
			if (full) return $sbtcConfig.sbtcContractData.contractOwner
			return truncate($sbtcConfig.sbtcContractData.contractOwner, 8)
		}
		return 'not known'
	}
	const getAddress = (full:boolean) => {
		if ($sbtcConfig?.sbtcContractData?.sbtcWalletAddress) {
			if (full) return $sbtcConfig.sbtcContractData.sbtcWalletAddress
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
</script>

<Button btnClass="bg-primary-02 p-px font-normal rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
	<span class="inline-flex items-center gap-x-1.5 bg-gray-1000 px-4 py-2 rounded-xl">
		<span class="text-transparent bg-clip-text bg-primary-02">Settings</span>

		<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.426 8.4428L10.1782 12.9405C10.1552 12.964 10.1277 12.9828 10.0973 12.9957C10.0664 13.0089 10.0331 13.0156 9.99953 13.0156C9.96593 13.0156 9.93266 13.0089 9.90174 12.9957C9.87138 12.9828 9.84389 12.964 9.82084 12.9405L5.57304 8.4428L5.57305 8.44278L5.56984 8.43945C5.5239 8.39169 5.49879 8.32765 5.50004 8.2614C5.50129 8.19515 5.5288 8.1321 5.57651 8.08611L5.22954 7.72611L5.57619 8.08642C5.62394 8.04048 5.68798 8.01537 5.75424 8.01662C5.8198 8.01786 5.88222 8.0448 5.92807 8.09159L9.6356 12.027L9.99953 12.4133L10.3635 12.027L14.0735 8.08897L14.0735 8.08903L14.0799 8.08203C14.1023 8.05725 14.1296 8.03724 14.1599 8.02317C14.1903 8.0091 14.2232 8.00127 14.2566 8.00014C14.29 7.99901 14.3234 8.00461 14.3546 8.01659C14.3858 8.02858 14.4143 8.04671 14.4384 8.06992C14.4626 8.09313 14.4817 8.12094 14.4949 8.1517C14.5081 8.18246 14.5149 8.21555 14.515 8.24901C14.5152 8.28247 14.5086 8.31561 14.4957 8.34648C14.4828 8.37734 14.4638 8.40531 14.4399 8.4287L14.4328 8.43561L14.426 8.4428Z" fill="white" stroke="url(#paint0_linear_3780_6393)"/>
			<defs>
			<linearGradient id="paint0_linear_3780_6393" x1="3.38889" y1="10.5078" x2="8.08358" y2="16.2123" gradientUnits="userSpaceOnUse">
			<stop stop-color="#ED693C"/>
			<stop offset="0.9036" stop-color="#FEDB63"/>
			</linearGradient>
			</defs>
		</svg>
	</span>
</Button>
<Dropdown
	frameClass="z-30 rounded-lg !bg-black !border py-2 !border-gray-900"
	ulClass="py-1 w-full"
	placement='bottom-end'
>
	<div slot="header" class="bg-gray-1000 overflow-hidden py-1 text-white">
		<div class="px-4 py-2 bg-gray-1000 grid grid-cols-2 gap-2">
			<p class="text-sm text-white font-normal">
				Network:
				<span class="text-sm bg-primary-500 rounded-xl text-black ml-2 px-2 py-0.5 font-normal">
					{CONFIG.VITE_NETWORK}
				</span>
			</p>
			<div class="ml-auto">
				<button class="border border-white bg-black px-3 py-0.5 rounded-xl text-xs inline-flex items-center text-white font-normal gap-1 hover:text-black hover:bg-white transition duration-200" on:click={() => toggleNetwork()}>
					Switch
					<Icon src="{ArrowsRightLeft}" mini class="-mr-0.5 h-4 w-4" aria-hidden="true" />
				</button>
			</div>
		</div>
		<div class="px-4 py-2 bg-gray-1000 grid grid-cols-2 gap-2 items-center">
			<p class="text-sm text-white font-normal">
				sBTC wallet:
				<span class="text-sm inline-block font-extralight text-gray-100">{getAddress(false)}</span>
			</p>
			<div class="ml-auto flex items-center">
				<a title="show in explorer" href={explorerBtcAddressUrl(getAddress(true))} target="_blank" class="h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200">
					<Icon src="{ArrowUpRight}" mini class="-mr-0.5 h-5 w-5 text-white" aria-hidden="true" />
				</a>
			</div>
		</div>
		<div class="px-4 py-2 bg-gray-1000 grid grid-cols-2 gap-2 items-center">
			<p class="text-sm text-white font-normal">
				sBTC contract:
				<span class="text-sm inline-block font-extralight text-gray-100">{getContractAddress()}</span>
			</p>
			<div class="ml-auto flex items-center">
				<a title="show in explorer" href={explorerAddressUrl(CONFIG.VITE_SBTC_CONTRACT_ID)} target="_blank" class="h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200">
					<Icon src="{ArrowUpRight}" mini class="-mr-0.5 h-5 w-5 text-white" aria-hidden="true" />
				</a>
			</div>
		</div>
		<div class="px-4 py-2 bg-gray-1000 grid grid-cols-2 gap-2 items-center">
			<p class="text-sm text-white font-normal">
				Contract owner:
				<span class="text-sm inline-block font-extralight text-gray-100">{getOwner(false)}</span>
			</p>
			<div class="ml-auto flex items-center">
				<a title="show in explorer" href={explorerAddressUrl(getOwner(true))} target="_blank" class="h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200">
					<Icon src="{ArrowUpRight}" mini class="-mr-0.5 h-5 w-5 text-white" aria-hidden="true" />
				</a>
			</div>
		</div>
		<div class="px-4 py-2 bg-gray-1000 grid grid-cols-2 gap-2 items-center">
			<p class="text-sm text-white font-normal">
				Coordinator:
				<span class="text-sm inline-block font-extralight text-gray-100">{getCoordinator(false)}</span>
			</p>
			<div class="ml-auto flex items-center">
				<a title="show in explorer" href={explorerAddressUrl(getOwner(true))} target="_blank" class="h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200">
					<Icon src="{ArrowUpRight}" mini class="-mr-0.5 h-5 w-5 text-white" aria-hidden="true" />
				</a>
			</div>
		</div>
  </div>
	<DropdownItem defaultClass="hover:bg-black">
		<li class="px-4 py-2 hover:bg-gray-900 text-white">
			<Toggle class=" text-white" checked={$sbtcConfig.userSettings?.useOpDrop} on:click={() => toggleSettings('txmode')}>Transaction mode</Toggle>
			<Helper helperClass="pl-14 !font-extralight text-white">{#if $sbtcConfig.userSettings?.useOpDrop}Using OP_DROP Mechanism{:else}Using OP_RETURN Mechanism{/if}</Helper>
		</li>
		<li class="px-4 py-2 hover:bg-gray-900">
			<Toggle class=" text-white" checked={$sbtcConfig.userSettings?.debugMode} on:click={() => toggleSettings('debug')} >Debug mode</Toggle>
			<Helper helperClass="pl-14 !font-extralight text-white">{#if $sbtcConfig.userSettings?.debugMode}Show advanced info{:else}Hide advanced info{/if}</Helper>
		</li>
	</DropdownItem>
</Dropdown>

