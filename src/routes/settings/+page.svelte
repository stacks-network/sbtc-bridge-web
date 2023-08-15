<script lang="ts">
	import { onMount } from 'svelte';
	import { Button, Toggle } from 'flowbite-svelte'
	import { InformationCircle, Icon } from "svelte-hero-icons"
  import { Tooltip } from 'flowbite-svelte';
	import { sbtcConfig } from '$stores/stores';
	import type { SbtcConfig } from '$types/sbtc_config';
	import Currencies from '$lib/components/settings/Currencies.svelte';
	import Addresses from '$lib/components/settings/Addresses.svelte';
	import Networks from '$lib/components/settings/Networks.svelte';
	import type { ExchangeRate } from 'sbtc-bridge-lib';

	const toggleSettings = (arg:string) => {
		const conf:SbtcConfig = $sbtcConfig;
		if (arg === 'txmode') conf.userSettings.useOpDrop = !conf.userSettings.useOpDrop;
		if (arg === 'debug') conf.userSettings.debugMode = !conf.userSettings.debugMode;
		if (arg === 'testAddresses') conf.userSettings.testAddresses = !conf.userSettings.testAddresses;
		if (arg === 'cryptoFirst') conf.userSettings.currency.cryptoFirst = !conf.userSettings.currency.cryptoFirst;
		sbtcConfig.update(() => conf);
	}

	onMount(async () => {
		if (typeof $sbtcConfig.userSettings === 'undefined') {
			$sbtcConfig.userSettings = {
				useOpDrop: false,
				debugMode: false,
				testAddresses: false,
				currency: {
					cryptoFirst: false,
					myFiatCurrency: { currency: 'USD'} as ExchangeRate,
					denomination: 'bitcoin'
				}
			}
		}
		if (typeof $sbtcConfig.userSettings.currency === 'undefined') {
			$sbtcConfig.userSettings.currency = {
				cryptoFirst: false,
				myFiatCurrency: 'USD',
				denomination: 'bitcoin'
			}
		}
		sbtcConfig.update(() => $sbtcConfig);
	})
</script>

<svelte:head>
  <title>sBTC Bridge - Settings !</title>
  <meta name="description" content="The sBTC Bridge
  provides a non-custodial, permissionless way to move Bitcoin into and out of the Stacks Blockchain." />
</svelte:head>
<Tooltip class="w-80 !font-extralight !bg-black z-20" triggeredBy="#po-deposits">
  Click to get some testnet bitcoin (tBTC) from to try things out - mainnet is coming soon!
</Tooltip>
<Tooltip class="w-80 !font-extralight !bg-black z-20" triggeredBy="#po-opdrop">
  OP_DROP means you can deposit from any wallet but takes a bit longer. OP_RETURN allows you to deposit / withdraw
  more quickly using your Stacks bitcoin wallet !
</Tooltip>

<div class="md:w-3/5 sm:w-full mx-auto flex flex-col justify-center px-6 lg:px-8 py-6">
  <div class="max-w-4xl">
    <div class="w-full flex flex-col p-10 gap-6 items-start bg-gray-1000 border-[0.5px] border-gray-700 rounded-3xl">
      <h1 class="text-4xl font-normal">Settings</h1>

      <div class="w-full bg-gray-1000  py-1 text-white">

        <div class="py-2 bg-gray-1000 w-full">
          <div class="flex flex-col gap-y-5 w-full border-b border-gray-900 pb-8 mb-8">
            <Networks />
          </div>
        </div>

        <div class="py-2 bg-gray-1000 w-full">
          <div class="flex flex-col gap-y-2 w-full border-b border-gray-900 pb-8 mb-8">
            <Currencies />
          </div>
        </div>
  
        <div class="py-2 bg-gray-1000 w-full">
          <div class="flex flex-col gap-y-2 w-full border-b border-gray-900 pb-8 mb-8">
            <Addresses />
          </div>
        </div>

        <div class="py-2 bg-gray-1000 w-full">
          <div class="flex flex-col gap-y-2 w-full border-b border-gray-900 pb-8 mb-8">
            <h1 class="text-2xl font-normal">Transaction mode</h1>
            <div class="py-2 bg-gray-1000 flex gap-2">
              <p class="text-base text-white font-extralight">
                You are currently using: 
              </p>
              <p class="w-1/4  text-white font-normal">
                <span class=" bg-black rounded-xl text-whit ml-2 px-2 py-0.5 font-normal">
                  {#if $sbtcConfig.userSettings?.useOpDrop}OP_DROP{:else}OP_RETURN{/if}
                </span>
              </p>
              <div id="po-opdrop" class="">
                <Icon src="{InformationCircle}" class="text-white w-6 h-6" mini aria-hidden="true" />
              </div>
            </div>
            <div class="">
              <Button on:click={() => toggleSettings('txmode')} class="block w-full md:w-auto md:inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 shrink-0">
              Switch to {#if $sbtcConfig.userSettings?.useOpDrop}OP_RETURN{:else}OP_DROP{/if}
              </Button>
            </div>
          </div>
        </div>
  
        <div class="py-2 bg-gray-1000 w-full">
          <div class="flex flex-col gap-y-2 w-full">
            <h1 class="text-2xl font-normal">Debug mode</h1>
            <div class="py-2 bg-gray-1000 flex gap-2 align-top">
              <Toggle class=" text-white" checked={$sbtcConfig.userSettings?.debugMode} on:click={() => toggleSettings('debug')} ></Toggle>
              <p class="!font-extralight text-white">
                <span class="text-white">Debug mode {#if $sbtcConfig.userSettings?.debugMode}On{:else}Off{/if}</span>
                <br/>
                <span>{#if $sbtcConfig.userSettings?.debugMode}Show advanced info{:else}Hide advanced info{/if}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
