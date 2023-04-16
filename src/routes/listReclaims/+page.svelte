<script lang="ts">
import { onMount } from 'svelte';
import { sbtcConfig } from '$stores/stores';
import type { SbtcConfig } from '$types/sbtc_config';
import PegInTransaction from '$lib/domain/PegInTransaction';
import type { ReclaimTransactionI } from '$lib/domain/ReclaimTransaction';
import { addresses } from '$lib/stacks_connect'
import { COMMS_ERROR } from '$lib/utils.js'
import ReclaimTransaction from '$lib/domain/ReclaimTransaction';
import { fetchMyWrapTransactions } from '$lib/bridge_api'
import type { PeginRequestI } from '$types/pegin_request';
import { goto } from "$app/navigation";

// fetch/hydrate data from local storage 
let prTx:ReclaimTransactionI = ($sbtcConfig.reclaimTransaction && $sbtcConfig.reclaimTransaction.ready) ? PegInTransaction.hydrate($sbtcConfig.reclaimTransaction) : new ReclaimTransaction();
let inited = false;
let peginRequests:Array<PeginRequestI>
let errorReason:string|undefined;

const setPegin = async (peginRequest:PeginRequestI) => {
	const conf:SbtcConfig = $sbtcConfig;
	conf.peginRequest = peginRequest;
	sbtcConfig.set(conf);
	goto('/reclaim');
}

onMount(async () => {
	try {
		peginRequests = await fetchMyWrapTransactions(addresses().stxAddress)
		if (peginRequests!.length > 0) inited = true;
	} catch (err) {
		errorReason = COMMS_ERROR;
	}
})

</script>

<section class="bg-dark">
	<div class="my-4 p-4">
	{#if inited}
		{#each peginRequests as pegin}
		<div class="row text-white">
			<div class="col">
				<a href="/" on:click|preventDefault={() => setPegin(pegin)}>{pegin.fromBtcAddress}</a>
			</div>
			<div class="col">{pegin.stacksAddress}</div>
			<div class="col">{pegin.status}</div>
			<div class="col">{pegin.vout?.value}</div>
		  </div>	  
		{/each}
	{/if}
	</div>
</section>

<style>
section {
	display: flex;
	flex-direction: column;
	justify-content: top;
	align-items: center;
	flex: 0.6;
	min-height: 90vh;
}
</style>