<script lang="ts">
	import { sbtcConfig } from '$stores/stores';
  import { Skeleton, Tabs, TabItem } from 'flowbite-svelte';
  import { page } from "$app/stores";
	import DepositReturn from './DepositReturn.svelte';
	import Withdraw from './Withdraw.svelte';
	import DepositDrop from './DepositDrop.svelte';
	import { onMount } from 'svelte';
	import { CONFIG } from '$lib/config';
  import Banner from '$lib/components/shared/Banner.svelte';

  let errorMessage:string|undefined;
  let inited = false;
  let connected = false;

  $: opDrop = $sbtcConfig.userSettings.useOpDrop;
  let useDeposit = $sbtcConfig.userSettings.peggingIn;
  if ($page.route.id === '/withdrawals') useDeposit = false

  const toggle = () => {
    $sbtcConfig.userSettings.peggingIn = !$sbtcConfig.userSettings.peggingIn;
    sbtcConfig.update(() => $sbtcConfig)
  }

  const initData = () => {
    if (!$sbtcConfig.payloadDepositData.amountSats) {
      $sbtcConfig.payloadDepositData.amountSats = 10000
    }
    if (!$sbtcConfig.payloadDepositData.principal) {
      $sbtcConfig.payloadDepositData.principal = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress
    }
    if (!$sbtcConfig.payloadDepositData.bitcoinAddress) {
      $sbtcConfig.payloadDepositData.bitcoinAddress = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal
    }
    if (!$sbtcConfig.payloadWithdrawData.amountSats) {
      $sbtcConfig.payloadWithdrawData.amountSats = 10000
    }
    if (!$sbtcConfig.payloadWithdrawData.principal) {
      $sbtcConfig.payloadWithdrawData.principal = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress
    }
    if (!$sbtcConfig.payloadWithdrawData.bitcoinAddress) {
      $sbtcConfig.payloadWithdrawData.bitcoinAddress = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal
    }
    sbtcConfig.update(() => $sbtcConfig)
  }

  onMount(async () => {
    try {
      connected = typeof $sbtcConfig.sbtcContractData.contractId === 'string'
      initData()
      inited = true;
    } catch(err:any) {
      errorMessage = err.message
    }
  })

</script>

<div class="sm:col-span-3 order-1 lg:order-2">
  <div class="flex flex-col w-full border-[0.5px] border-gray-700 rounded-lg p-6 overflow-hidden bg-gray-1000">
    {#if !connected}
	    <Banner
		    bannerType={'info'}
		    message={'sBTC wallet is not connected - go to settings and switch network. Currently on <strong>' + CONFIG.VITE_NETWORK+ '</strong>!</a>'}
      />
    {:else}
      {#if errorMessage}
        <div>{@html errorMessage}</div>
      {:else}
        {#if inited}
          <Tabs style="underline" contentClass="py-4">
            <TabItem open={useDeposit} on:click={() => toggle()} title="Deposit" class="grow [&>button]:w-full [&>button]:text-lg">
              {#if opDrop}
                <DepositDrop />
              {:else}
                <DepositReturn />
              {/if}
            </TabItem>
            <TabItem open={!useDeposit} on:click={() => toggle()} title="Withdraw" class="grow [&>button]:w-full [&>button]:text-lg">
              <Withdraw />
            </TabItem>
          </Tabs>
        {:else}
          <Tabs style="underline" contentClass="mt-8">
            <TabItem open={true} title="Deposit" class="grow [&>button]:w-full [&>button]:text-lg">
              <Skeleton size="md" />
            </TabItem>
            <TabItem title="Withdraw" class="grow [&>button]:w-full [&>button]:text-lg">
              <Skeleton size="md" />
            </TabItem>
          </Tabs>
        {/if}
      {/if}
    {/if}
  </div>
</div>



