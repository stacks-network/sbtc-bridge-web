<script lang="ts">
	import { onMount } from 'svelte';
	import { Icon, InformationCircle } from "svelte-hero-icons"
	import { Button } from 'flowbite-svelte'
	import { CONFIG, setConfig } from '$lib/config';
	import { sbtcConfig } from '$stores/stores';
	import type { SbtcConfig } from '$types/sbtc_config';
	import { fetchSbtcBalance, addresses } from '$lib/stacks_connect'

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
  })
</script>

<h1 class="text-2xl font-normal">Network</h1>
<div class="py-2 bg-gray-1000 flex gap-2">
  <p class="text-base text-white font-extralight">
    You are currently on: 
  </p>
  <p class="  text-white font-normal">
    <span class=" bg-black rounded-xl text-whit ml-2 px-2 py-0.5 font-normal">
      {CONFIG.VITE_NETWORK}
    </span>
  </p>
  <div id="po-deposits" class="">
    <a href="https://bitcoinfaucet.uo1.net/" target="_blank"><Icon src="{InformationCircle}" class="text-white w-6 h-6" mini aria-hidden="true" /></a>
  </div>
</div>
<div class="">
  <Button on:click={() => toggleNetwork()} class="block w-full md:w-auto md:inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 shrink-0">
  Switch network
  </Button>
</div>
