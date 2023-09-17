<script lang="ts">
	import { sbtcConfig } from '$stores/stores';
  import { Tabs, TabItem } from 'flowbite-svelte';
  import { page } from "$app/stores";
	import DepositReturn from './DepositReturn.svelte';
	import Withdraw from './Withdraw.svelte';
	import DepositDrop from './DepositDrop.svelte';
	import { onMount } from 'svelte';
	import { fetchUtxoSet } from '$lib/bridge_api';
	import { CONFIG } from '$lib/config';

  let addressInfo:any;
  let errorMessage:string|undefined;
  let inited = false;

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
  }

  onMount(async () => {
    try {
      const bitcoinAddress = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal
      addressInfo = await fetchUtxoSet(bitcoinAddress)
      initData()
      inited = true;
    } catch(err:any) {
      errorMessage = err.message
    }
  })

</script>

<div class="sm:col-span-3">
  <div class="flex flex-col w-full border-[0.5px] border-gray-700 rounded-3xl p-6 overflow-hidden bg-gray-1000">
    {#if errorMessage}<div>{@html errorMessage}</div>
    {:else}
    <Tabs style="underline" contentClass="p-0">
      {#if inited}
      <TabItem open={useDeposit} on:click={() => toggle()} title="Deposit" class="grow [&>button]:w-full [&>button]:text-lg">
        {#if opDrop}
        <DepositDrop {addressInfo} />
        {:else}
        <DepositReturn {addressInfo} />
        {/if}
      </TabItem>
      <TabItem open={!useDeposit} on:click={() => toggle()} title="Withdraw" class="grow [&>button]:w-full [&>button]:text-lg">
        <Withdraw {addressInfo} />
      </TabItem>
      {:else}
      <div>Waiting for data..</div>
      {/if}
    </Tabs>
    {/if}
  </div>
</div>



