<script lang="ts">
import { onMount } from 'svelte';
import Banner from '$lib/components/shared/Banner.svelte';
import Button from '$lib/components/shared/Button.svelte';
import type { PeginRequestI } from 'sbtc-bridge-lib' 

export let pegin:PeginRequestI;

onMount(async () => {
})
</script>
<div class="flex w-full flex-col gap-4 align-baseline items-start p-5">

  {#if pegin.status === 1}
  <Banner bannerType={'warning'} message={'We scan the blockchain every few minutes to check for changes. If you paid the invoice we will see the transaction and this screen will update. <br/><br/>Click back to redisplay the qr code. '} />
  {:else if pegin.status === 2}
  <Banner bannerType={'info'} message={'Your Bitcoin deposit has been detected - thank you.'} />
  <div class="">
    {#if pegin.requestType === 'deposit'}
    Your sBTC will be deposited soon.
    {:else if pegin.requestType === 'deposit'}
    Your sBTC will be withdrawn soon. 
    {/if}
    Track updates here: <a href="/transactions">transaction history</a>. 
  </div>
  {:else if pegin.status === 3}
  <Banner bannerType={'success'} message={'Your Bitcoin transaction has been detected and is being preocessed. '} />
  {:else if pegin.status === 4}
  <Banner bannerType={'danger'} message={'Deposit has been reclaimed. '} />
  {/if}
  <div class="flex">
    <Button darkScheme={true} label={'Go back'} target={'back'} on:clicked/>
    <Button darkScheme={false} label={'Transaction history'} target={'transaction-history'} on:clicked/>
  </div>

</div>
