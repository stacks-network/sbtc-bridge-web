<script lang="ts">
import { CONFIG } from '$lib/config';
import { onMount } from 'svelte';
import { sbtcConfig } from '$stores/stores';
import PegInTransaction from '$lib/domain/PegInTransaction';
import SignTransaction from '$lib/components/common/SignTransaction.svelte';
import Transactions from "$lib/components/reclaim/ReclaimForm.svelte";
import type { ReclaimTransactionI } from '$lib/domain/ReclaimTransaction';
import { addresses } from '$lib/stacks_connect'
import type { SigData } from '$types/sig_data';
import { COMMS_ERROR } from '$lib/utils.js'
import ReclaimTransaction from '$lib/domain/ReclaimTransaction';
import type { PeginRequestI } from '$types/pegin_request';
import { goto } from "$app/navigation";
import { truncate, explorerBtcTxUrl, explorerTxUrl } from '$lib/utils'

// fetch/hydrate data from local storage 
if (!$sbtcConfig.peginRequest) 	goto('/listReclaims');
const peginRequest:PeginRequestI = $sbtcConfig.peginRequest;

let prTx:ReclaimTransactionI = new ReclaimTransaction();
let inited = false;
const network = CONFIG.VITE_NETWORK;

$: view = 'build_tx_view';
const openSigView = () => {
  	view = 'sign_tx_view';
}

const openBackView = () => {
	goto('/listReclaims');
}

const updateTransaction = () => {
  	view = 'build_tx_view';
}

let errorReason:string|undefined;

onMount(async () => {
	try {
		if (!prTx.ready) {
			prTx = await ReclaimTransaction.create(network, peginRequest.btcTxid!, peginRequest.fromBtcAddress, peginRequest.sbtcWalletAddress);
		}
		prTx.pegInData.requestData = peginRequest;
		prTx.calculateFees();
		prTx.setStacksAddress(addresses().stxAddress);
		prTx.pegInData.amount = peginRequest.vout?.value || 0;
		//prTx.pegInData.confirmations = (prTx.pegInData.burnHeight || 0) - peginRequest.tx.status.block_height;
		inited = true;
	} catch (err) {
		errorReason = COMMS_ERROR + '<br/><br/>This can happen when the address has unconfirmed transactions - we have this issue logged and are working to continuously improve the application.';
	}
})

</script>

<section class=" bg-dark text-white">
	<div class="container my-5 p-5">
	{#if inited}
		{#if view === 'sign_tx_view'}
			<Transactions {prTx}/>
		{:else if view === 'build_tx_view'}
			<!--<BuildTransaction {prTx} on:request_signature={openSigView}/>-->
			<div class="row">
				<div class="col">
					<h1>Reclaim Pegin Request</h1>
				</div>
			</div>

			<div class="row">
				<div class="col-2">Return Address</div><div class="col-10">{peginRequest.fromBtcAddress}</div>
				<div class="col-2">Tx Id</div>
				<div class="col-10">
					<a href={explorerBtcTxUrl(peginRequest.btcTxid)} target="_blank" rel="noreferrer">{truncate(peginRequest.btcTxid)}</a>
				</div>
				<div class="col-2">Stacks addr</div><div class="col-10">{peginRequest.stacksAddress}</div>
				<div class="col-2">For</div><div class="col-10">{prTx.pegInData.amount} Sats</div>
			</div>
			<div class="row my-5">
				<div class="col">
					<button class="btn btn-outline-info w-100" type="button" on:click={() => openSigView()}>CONTINUE</button>
				</div>
				<div class="col">
					<button class="btn btn-outline-info w-100" type="button" on:click={() => openBackView()}>BACK</button>
				</div>
			</div>
		{:else}
			<div class="card-width">
				<div class="my-3 d-flex justify-content-between">Loading data..</div>
			</div>
		{/if}
	{/if}
	{#if errorReason}
	<div class="card-width">
		<div class="my-3 d-flex justify-content-between">{@html errorReason}</div>
	</div>
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
h1 {
	width: 100%;
}
</style>