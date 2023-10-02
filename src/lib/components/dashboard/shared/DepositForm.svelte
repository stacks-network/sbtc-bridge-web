<script lang="ts">
	import { onMount } from 'svelte';
	import BitcoinInput from '$lib/components/dashboard/shared/BitcoinInput.svelte';
	import StacksAddressField from '$lib/components/dashboard/shared/StacksAddressField.svelte';
	import BitcoinAddressField from '$lib/components/dashboard/shared/BitcoinAddressField.svelte';
	import { sbtcConfig } from '$stores/stores';

  export let showAddresses = false;
  let opReturn = !$sbtcConfig.userSettings.useOpDrop

  onMount(async () => {
  })

</script>

  <div class="mt-6 space-y-5">
    <div>
      <p class="text-base my-5 font-extralight text-gray-400">
        Please input a BTC amount to mint sBTC (minimum: 0.0001 BTC). It will be minted to your logged-in account, or you can specify <span class="cursor-pointer underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 focus:ring-4 focus:outline-none" role="button" tabindex="0" on:keyup on:click={() => showAddresses = !showAddresses}>a different address if preferred</span>.
      </p>
    </div>
    {#if showAddresses}
    {#if opReturn}<BitcoinAddressField depositFlow={true} readonly={false}/>{/if}
    <StacksAddressField depositFlow={true} readonly={false}/>
    {/if}
    <BitcoinInput depositFlow={true}/>
  </div>
