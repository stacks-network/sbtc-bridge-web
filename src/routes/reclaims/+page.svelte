<script lang="ts">
import { onMount } from 'svelte';
import { addresses } from '$lib/stacks_connect'
import { COMMS_ERROR } from '$lib/utils.js'
import { tsToDate, truncate, explorerBtcTxUrl, explorerBtcAddressUrl } from '$lib/utils'
import { fetchPeginsByStacksAddress, fetchPegins } from '$lib/bridge_api'
import type { PeginRequestI } from 'sbtc-bridge-lib' 
import { CONFIG } from '$lib/config';
import { sbtcConfig } from '$stores/stores';
import { goto } from '$app/navigation'

// fetch/hydrate data from local storage 
let inited = false;
let peginRequests:Array<PeginRequestI>
let errorReason:string|undefined;
let myDepositsFilter:boolean;

const getReclaimUrl = (pegin:any) => {
	goto('/deposits/' + pegin._id)
}

const fetchDeposits = async (mine:boolean) => {
	myDepositsFilter = mine;
	if (myDepositsFilter) {
		peginRequests = await fetchPeginsByStacksAddress(addresses().stxAddress)
	} else {
		peginRequests = await fetchPegins()
	}
}

const fetchByStatus = (status:number) => {
	if (status === 1) {
		return 'not seen';
	} if (status === 2) {
		return 'seen onchain'
	} if (status === 3) {
		return 'revealed'
	}
}

const getTo = (pegin:PeginRequestI):string => {
	if (pegin && pegin.commitTxScript && pegin.commitTxScript.address) {
		return pegin.commitTxScript.address;
	} else {
		return 'unknown';
	}
}

onMount(async () => {
	try {
		await fetchDeposits(true);
		inited = true;
	} catch (err) {
		errorReason = COMMS_ERROR;
	}
})

</script>
<section class=" bg-secton text-white">
	<div class="my-4 p-4">
		<div class="card-width">
			<div class="row">
				<h1 class="pointer text-white"><span class="strokeme-white">sBTC</span> Transaction History</h1>
				<div class="d-flex justify-content-between">
					<div>Filter deposits:</div>
					<div>
					{#if myDepositsFilter}
						<span><a href="/" on:click|preventDefault={() => fetchDeposits(false)}>all deposits</a></span>
					{:else}
						<span><a href="/" on:click|preventDefault={() => fetchDeposits(true)}>my deposits</a></span>
					{/if}
						<ul class="dropdown-menu dropdown-menu-start" aria-labelledby="navbarDropdown">
							<li><a class="dropdown-item" href="/" on:click|preventDefault={() => fetchByStatus(0)}>Any</a></li>
							<li><a class="dropdown-item" href="/" on:click|preventDefault={() => fetchByStatus(1)}>Pending</a></li>
							<li><a class="dropdown-item" href="/" on:click|preventDefault={() => fetchByStatus(2)}>Paid</a></li>
							<li><a class="dropdown-item" href="/" on:click|preventDefault={() => fetchByStatus(3)}>Revealed</a></li>
							<li><a class="dropdown-item" href="/" on:click|preventDefault={() => fetchByStatus(4)}>Reclaimed</a></li>
						</ul>
					</div>
				</div>
			</div>
			{#if !$sbtcConfig.sbtcContractData.sbtcWalletAddress}
			<div class="my-3 d-flex justify-content-between text-white">
				No wallet currently connect to {CONFIG.VITE_NETWORK} - try a different network by clicking the account dropdown in the header.
			</div>
			{:else}
			<div class="my-4">
				{#if inited}
					<h4 class="">Activity</h4>
					<!-- <p class="">Account: {addresses().stxAddress}</p> -->
					<div class="row">
						<div class="col-2"><span class="text-info">When</span></div>
						<div class="col-2"><span class="text-info">From</span></div>
						<div class="col-2"><span class="text-info">To</span></div>
						<div class="col-2"><span class="text-info">Sats.</span></div>
						<div class="col-2"><span class="text-info">Txid</span></div>
						<div class="col-2"><span class="text-info">Status</span></div>
					</div>
					{#each peginRequests as pegin}
						<div class="row text-white">
							<div class="col-2">
								<a href="/" on:click|preventDefault={() => getReclaimUrl(pegin)}>{tsToDate(pegin.updated)}</a>
							</div>
							<div class="col-2">
								<a href={explorerBtcAddressUrl(pegin.fromBtcAddress)} target="_blank" rel="noreferrer">{truncate(pegin.fromBtcAddress)}</a>
							</div>
							<div class="col-2">
								<a href={explorerBtcAddressUrl(getTo(pegin))} target="_blank" rel="noreferrer">{truncate(pegin.commitTxScript?.address)}</a>
							</div>
							<div class="col-2">{#if pegin.status === 1}{pegin.amount}{:else}{pegin.amount}{/if}</div>
							<div class="col-2">
								{#if !pegin.btcTxid}-{:else}
								<a href={explorerBtcTxUrl(pegin.btcTxid)} target="_blank" rel="noreferrer">{truncate(pegin.btcTxid, 6)}</a>
								{/if}
							</div>
							<div class="col-2">
								{#if pegin.status === 1}pending
								{:else if pegin.status === 2}committed
								{:else if pegin.status === 3}reclaimed
								{:else if pegin.status === 4}revealed
								{/if}
							</div>
						</div>
					{/each}
				{/if}
				</div>
			{/if}
		</div>
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