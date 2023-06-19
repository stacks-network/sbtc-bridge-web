<script lang="ts">
import { onMount } from 'svelte';
import Banner from '$lib/components/shared/Banner.svelte';
import Button from '$lib/components/shared/Button.svelte';
import type { PeginRequestI } from 'sbtc-bridge-lib' 

export let pegin:PeginRequestI;

onMount(async () => {
})
</script>

{#if pegin.status === 1}
<Banner bannerType={'warning'} message={'Click back to re-display the invoice and send your Bitcoin. '} />
{:else if pegin.status === 2}
<Banner bannerType={'info'} message={'Your Bitcoin deposit has been detected - thank you.'} />
<div class="">
  Your sBTC will be minted shortly - updates can be tracked on the <a href="/transactions">Transaction History</a> page. 
</div>
{:else if pegin.status === 3}
<Banner bannerType={'success'} message={'Your Bitcoin transaction has been detected and is being preocessed. '} />
{:else if pegin.status === 4}
<Banner bannerType={'danger'} message={'Deposit has been reclaimed. '} />
{/if}
<div class="frame28">
  <Button darkScheme={true} label={'Go back'} target={'back'} on:clicked/>
  <Button darkScheme={false} label={'Transaction history'} target={'transaction-history'} on:clicked/>
</div>

<style>
.frame28 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 242px;
  height: 36px;


  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
}
</style>