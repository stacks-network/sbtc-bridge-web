<script lang="ts">
import { onMount } from 'svelte';
import { addresses } from '$lib/stacks_connect'
import { COMMS_ERROR } from '$lib/utils.js'
import { truncate, explorerBtcTxUrl, explorerBtcAddressUrl } from '$lib/utils'
import { fetchMyWrapTransactions } from '$lib/bridge_api'
import type { PeginRequestI } from '$types/pegin_request';

// fetch/hydrate data from local storage 
let inited = false;
let peginRequests:Array<PeginRequestI>
let errorReason:string|undefined;

const getStatus = (status:number) => {
	if (status === 1) {
		return 'not seen';
	} if (status === 2) {
		return 'seen onchain'
	} if (status === 3) {
		return 'revealed'
	}
}

const getTo = (pegin:PeginRequestI):string => {
	if (pegin && pegin.timeBasedPegin && pegin.timeBasedPegin.address) {
		return pegin.timeBasedPegin.address;
	} else {
		return 'unknown';
	}
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

<section class="bg-dark text-white">
	<div class="container my-4 p-4">
	{#if inited}
		<h4 class="">Activity</h4>
		<p class="">Account: {addresses().stxAddress}</p>
		<div class="row">
			<div class="col-2"><span class="text-warning">Status</span></div>
			<div class="col-2"><span class="text-warning">From</span></div>
			<div class="col-2"><span class="text-warning">To</span></div>
			<div class="col-2"><span class="text-warning">Sats.</span></div>
			<div class="col-4"><span class="text-warning">Txid</span></div>
		</div>
		{#each peginRequests as pegin}
			<div class="row text-white">
				<div class="col-2">{getStatus(pegin.status)}</div>
				<div class="col-2">
					<a href={explorerBtcAddressUrl(pegin.fromBtcAddress)} target="_blank" rel="noreferrer">{truncate(pegin.fromBtcAddress)}</a>
				</div>
				<div class="col-2">
					<a href={explorerBtcAddressUrl(getTo(pegin))} target="_blank" rel="noreferrer">{truncate(pegin.timeBasedPegin?.address)}</a>
				</div>
				<div class="col-2">{#if pegin.status === 1}?{:else}{pegin.amount}{/if}</div>
				<div class="col-4">
					<a href={explorerBtcTxUrl(pegin.btcTxid)} target="_blank" rel="noreferrer">{truncate(pegin.btcTxid)}</a>
				</div>
			</div>	  
		{/each}
	{/if}
	</div>
</section>

<style>
</style>