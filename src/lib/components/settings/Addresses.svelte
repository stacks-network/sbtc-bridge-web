<script lang="ts">
	import { onMount } from 'svelte';
	import { Icon, ArrowUpRight } from "svelte-hero-icons"
	import { sbtcConfig } from '$stores/stores';
	import { truncate, explorerAddressUrl, explorerBtcAddressUrl } from '$lib/utils'
	import { CONFIG } from '$lib/config';

	const getContractAddress = () => {
		const contract = CONFIG.VITE_SBTC_CONTRACT_ID
		return truncate(contract.split('.')[0], 8) + '.' + contract.split('.')[1]
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


  onMount(async () => {
  })
</script>

<h1 class="text-2xl font-normal">Addresses and Contracts</h1>
<div class="text-lg py-2 bg-gray-1000 flex gap-6 items-center">
  <p class=" text-white font-extralight w-1/5">
    sBTC wallet:
  </p>
  <div class="  font-extralight text-gray-100 w-1/2">{getAddress(false)}</div>
  <div class="text-lg ml-auto flex items-center">
    <a title="Show in Explorer" href={explorerBtcAddressUrl(getAddress(true))} target="_blank" class="h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
      <Icon src="{ArrowUpRight}" mini class="h-5 w-5 text-white" aria-hidden="true" />
    </a>
  </div>
</div>
<div class="text-lg py-2 bg-gray-1000 flex gap-6 items-start">
  <p class=" text-white font-extralight w-1/5">
    sBTC contract:
  </p>
  <div class="  font-extralight text-gray-100 w-1/2">{getContractAddress()}</div>
  <div class="ml-auto flex items-start">
    <a title="Show in Explorer" href={explorerAddressUrl(CONFIG.VITE_SBTC_CONTRACT_ID)} target="_blank" class="h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
      <Icon src="{ArrowUpRight}" mini class="h-5 w-5 text-white" aria-hidden="true" />
    </a>
  </div>
</div>
<div class="text-lg py-2 bg-gray-1000 flex gap-6 items-start">
  <p class=" text-white font-extralight w-1/5">
    Contract owner:
  </p>
  <div class="font-extralight text-gray-100 w-1/2">{getOwner(false)}</div>
  <div class="ml-auto flex items-start">
    <a title="Show in Explorer" href={explorerAddressUrl(getOwner(true))} target="_blank" class="h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
      <Icon src="{ArrowUpRight}" mini class="h-5 w-5 text-white" aria-hidden="true" />
    </a>
  </div>
</div>
<div class="py-2 bg-gray-1000 flex gap-6 items-start">
  <p class=" text-white font-extralight w-1/5">
    Coordinator:
  </p>
  <div class="font-extralight text-gray-100 w-1/2">{getCoordinator(false)}</div>
  <div class="ml-auto flex items-start">
    <a title="Show in Explorer" href={explorerAddressUrl(getOwner(true))} target="_blank" class="h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
      <Icon src="{ArrowUpRight}" mini class="h-5 w-5 text-white" aria-hidden="true" />
    </a>
  </div>
</div>
