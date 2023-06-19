<script lang="ts">
	import { Button, Dropdown, DropdownItem } from 'flowbite-svelte'
	import { Icon, ClipboardDocument } from "svelte-hero-icons"
	import SBtcIcon from '$lib/components/shared/sBTCIcon.svelte';
	import BitcoinIcon from '$lib/components/shared/BitcoinIcon.svelte';
	import StacksIcon from '$lib/components/shared/StacksIcon.svelte';
	import CopyClipboard from '$lib/components/common/CopyClipboard.svelte';
	import { makeFlash } from "$lib/stacks_connect";

	import { createEventDispatcher } from "svelte";
	import { truncate } from '$lib/utils'
	import { sbtcConfig } from '$stores/stores'
	import { fmtSatoshiToBitcoin, fmtMicroToStx, bitcoinBalanceFromMempool } from '$lib/utils'
	import { addresses } from '$lib/stacks_connect'
	const dispatch = createEventDispatcher();

	let copied = false;

	const handleClick = (e:any)=> {
    	e.preventDefault();
    	alert ('Clicked on: ' + e.target)
  	}
  	const copy = (event:any, ele:string, val:string) => {
		event.stopPropagation();
		let clippy = {
			target: document.getElementById('clipboard')!,
			props: { name: val },
		}
		const app = new CopyClipboard(clippy);
		app.$destroy();
		makeFlash(document.getElementById(ele))
		copied = true;
		return false;
	}

	const doLogout = () => {
		dispatch('init_logout');
	}

	const transformAddress = (address:string) => {
		if (address) {
			return truncate(address, 8).toUpperCase()
		}
		return 'not connected'
	}
</script>

<div id="clipboard"></div>

<Button btnClass=" inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
	<span style="white-space: nowrap;">My account</span>
	<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.426 8.4428L10.1782 12.9405C10.1552 12.964 10.1277 12.9828 10.0973 12.9957C10.0664 13.0089 10.0331 13.0156 9.99953 13.0156C9.96593 13.0156 9.93266 13.0089 9.90174 12.9957C9.87138 12.9828 9.84389 12.964 9.82084 12.9405L5.57304 8.4428L5.57305 8.44278L5.56984 8.43945C5.5239 8.39169 5.49879 8.32765 5.50004 8.2614C5.50129 8.19515 5.5288 8.1321 5.57651 8.08611L5.22954 7.72611L5.57619 8.08642C5.62394 8.04048 5.68798 8.01537 5.75424 8.01662C5.8198 8.01786 5.88222 8.0448 5.92807 8.09159L9.6356 12.027L9.99953 12.4133L10.3635 12.027L14.0735 8.08897L14.0735 8.08903L14.0799 8.08203C14.1023 8.05725 14.1296 8.03724 14.1599 8.02317C14.1903 8.0091 14.2232 8.00127 14.2566 8.00014C14.29 7.99901 14.3234 8.00461 14.3546 8.01659C14.3858 8.02858 14.4143 8.04671 14.4384 8.06992C14.4626 8.09313 14.4817 8.12094 14.4949 8.1517C14.5081 8.18246 14.5149 8.21555 14.515 8.24901C14.5152 8.28247 14.5086 8.31561 14.4957 8.34648C14.4828 8.37734 14.4638 8.40531 14.4399 8.4287L14.4328 8.43561L14.426 8.4428Z" fill="white" stroke="black"/>
	</svg>
</Button>
<Dropdown
	frameClass="z-30 rounded-lg !bg-black !border py-2 !border-gray-900"
	ulClass="py-1 w-full"
	placement='bottom-end'>
	<div slot="header" class="bg-gray-1000 overflow-hidden py-1 text-white">
		<div class=" divide-y divide-gray-900">
			<div>
				<div class="px-4 py-2 font-normal">Addresses</div>
				<div class="px-4 py-1 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-6 items-center">
					<div id="icon-stacks" class="flex items-center gap-3 text-sm">
						<StacksIcon clazz={'w-5 h-5'}/>
						<span>{transformAddress(addresses().stxAddress)}</span>
					</div>
					<div class="ml-auto flex items-center">
						<button on:click|preventDefault={(event) => copy(event, 'icon-stacks', addresses().stxAddress)} class="h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200">
							<Icon on:keyup on:click={(event) => handleClick(event)} src="{ClipboardDocument}" class="-mr-0.5 h-5 w-5 text-white" aria-hidden="true" />
						</button>
					</div>
				</div>
				<div class="px-4 py-1 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-6 items-center">
					<div id="bitcoin-c-stacks" class="flex items-center gap-3 text-sm">
						<BitcoinIcon clazz={'w-5 h-5'}/>

						<span><span class="font-bold">Cardinal:</span>{' '}{transformAddress(addresses().cardinal)}</span>
					</div>
					<div class="ml-auto flex items-center">
						<button on:click|preventDefault={(event) => copy(event, 'icon-stacks', addresses().cardinal)} class="h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200">
							<Icon src="{ClipboardDocument}" class="-mr-0.5 h-5 w-5 text-white" aria-hidden="true" />
						</button>
					</div>
				</div>
				<div class="px-4 py-1 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-6 items-center">
					<div id="bitcoin-o-stacks" class="flex items-center gap-3 text-sm">
						<BitcoinIcon clazz={'w-5 h-5'}/>

						<span><span class="font-bold">Ordinal:</span>{' '}{transformAddress(addresses().ordinal)}</span>
					</div>
					<div class="ml-auto flex items-center">
						<button on:click|preventDefault={(event) => copy(event, 'icon-stacks', addresses().ordinal)} class="h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200">
							<Icon src="{ClipboardDocument}" class="-mr-0.5 h-5 w-5 text-white" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>
			<div>
				<div class="mt-1 px-4 py-2 font-normal">Balances</div>
				<div class="px-4 py-2 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-4 items-center">
					<div class="flex items-center gap-3 text-sm">
						<StacksIcon clazz={'w-5 h-5'}/>
						<span class="font-bold">STX</span>
					</div>
					<div class="ml-auto flex items-center">
						{fmtMicroToStx($sbtcConfig?.addressObject?.stacksTokenInfo?.stx?.balance || 0.000000)}
					</div>
				</div>

				<div class="px-4 py-2 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-4 items-center">
					<div class="flex items-center gap-3 text-sm">
						<BitcoinIcon clazz={'w-5 h-5'}/>
						<span class="font-bold">BTC (Cardinal)</span>
					</div>
					<div class="ml-auto flex items-center">
						{fmtSatoshiToBitcoin(bitcoinBalanceFromMempool($sbtcConfig?.addressObject?.cardinalInfo) || 0.00000000)}
					</div>
				</div>
				<div class="px-4 py-2 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-4 items-center">
					<div class="flex items-center gap-3 text-sm">
						<BitcoinIcon clazz={'w-5 h-5'}/>
						<span class="font-bold">BTC (Ordinal)</span>
					</div>
					<div class="ml-auto flex items-center">
						{fmtSatoshiToBitcoin(bitcoinBalanceFromMempool($sbtcConfig?.addressObject?.ordinalInfo) || 0.00000000)}
					</div>
				</div>
				<div class="px-4 py-2 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-4 items-center">
					<div class="flex items-center gap-3 text-sm">
						<SBtcIcon clazz={'w-5 h-5'}/>

						<span class="font-bold">sBTC</span>
					</div>
					<div class="ml-auto flex items-center">
						{fmtSatoshiToBitcoin($sbtcConfig?.addressObject?.sBTCBalance || 0.00000000)}

					</div>
				</div>
			</div>
		</div>
	</div>
	<DropdownItem defaultClass="px-4 py-2 text-error-500 hover:bg-gray-1000" on:click={() => doLogout()}>Log out</DropdownItem>
</Dropdown>
