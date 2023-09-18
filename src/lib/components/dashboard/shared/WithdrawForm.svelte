<script lang="ts">
	import { onMount } from 'svelte';
	import BitcoinInput from '$lib/components/dashboard/shared/BitcoinInput.svelte';
	import StacksAddressField from '$lib/components/dashboard/shared/StacksAddressField.svelte';
	import BitcoinAddressField from '$lib/components/dashboard/shared/BitcoinAddressField.svelte';
	import { sbtcConfig } from '$stores/stores';
	import { CONFIG } from '$lib/config';
	import { fmtNumber, satsToBitcoin } from 'sbtc-bridge-lib';

  export let showAddresses = false;

  onMount(async () => {
  })

</script>

  <div class="mt-6 space-y-5">
    <div>
      <p class="text-lg my-5 font-extralight text-gray-400">
        Please input the amount of BTC you wish to withdraw - up to 
        {fmtNumber(satsToBitcoin($sbtcConfig.keySets[CONFIG.VITE_NETWORK].sBTCBalance))} <span class="">sBTC</span>.
        The withdrawal will go to your bitcoin address in your web wallet - or specify <span class="cursor-pointer underline" on:keyup on:click={() => showAddresses = !showAddresses}>a different address if preferred</span>.
        </p>
    </div>
    {#if showAddresses}
    <BitcoinAddressField depositFlow={false} readonly={false}/>
    <!--
    <StacksAddressField depositFlow={false} readonly={true}/>
    -->
    {/if}
    <BitcoinInput depositFlow={false}/>
  </div>
