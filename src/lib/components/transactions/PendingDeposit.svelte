<script lang="ts">
import { onMount } from 'svelte';
import { goto } from "$app/navigation";
import type { PeginRequestI } from 'sbtc-bridge-lib' 
import { tsToDate, explorerBtcTxUrl, explorerBtcAddressUrl } from '$lib/utils'
import { doPeginScan } from '$lib/bridge_api';
import Invoice from "$lib/components/deposit/Invoice.svelte";

export let peginRequest:PeginRequestI;

const doClicked = async (event:any) => {
}

const scan = async () => {
	doPeginScan();
	location.reload();
}

onMount(() => {
})

</script>

<div class="flex justify-between align-middle">
  <div class=" " on:keyup on:click={() => goto('/transactions')}>
    <h1 class="text-3xl font-medium">Details</h1>
  </div>
</div>
<p class="">Waiting for your transaction to be broadcast - <a class="text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 hover:underline decoration-primary-500/80" href="/" on:click|preventDefault={() => scan()}>click here to scan.</a></p>
<Invoice {peginRequest} on:clicked={doClicked}/>
