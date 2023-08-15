<script lang="ts">
import { onMount } from 'svelte';
import { goto } from "$app/navigation";
import type { PeginRequestI } from 'sbtc-bridge-lib'
import { toStorable } from 'sbtc-bridge-lib'
import TrCommit from '$lib/components/transactions/TrCommit.svelte';
import { explorerBtcTxUrl } from '$lib/utils'
import ChevronUp from "$lib/components/shared/ChevronUp.svelte";
import PendingDeposit from '$lib/components/transactions/PendingDeposit.svelte';
import CommittedDeposit from '$lib/components/transactions/CommittedDeposit.svelte';

export let data:any;
let peginRequest:PeginRequestI = data;

let inited = false;
let errorReason:string|undefined;

onMount(async () => {
	if (!peginRequest) {
		goto('/transactions');
		return;
	}
	if (peginRequest.commitTxScript) {
		if (typeof peginRequest.commitTxScript.tapLeafScript[0][0].internalKey === 'string') {
			const script = toStorable(peginRequest.commitTxScript)
			peginRequest.commitTxScript = script;
		}
	}
	inited = true;
})
</script>

<svelte:head>
  <title>sBTC Bridge - Transaction details</title>
  <meta name="description" content="Details of a transaction" />
</svelte:head>

<div class="mx-auto flex flex-col justify-center">
	<div class="mx-auto max-w-2xl">
		<div class="flex justify-between">
			<a href="/transactions" class="flex items-center mb-10">
				&lt; Back to Transaction history
			</a>
		</div>
		<div class="flex flex-col p-5 gap-2 items-start bg-gray-1000 border-[0.5px] border-gray-700 rounded-3xl">
			{#if peginRequest.status === 1}
				<PendingDeposit {peginRequest}/>
			{:else if peginRequest.status === 2}
				<CommittedDeposit {peginRequest}/>
			{:else}
				<div class="mb-5 flex justify-between align-middle">
					<h1 class="text-3xl font-medium">Details</h1>
				</div>
				<div class="flex flex-col gap-10">
					{#if inited}
						<TrCommit {peginRequest}/>
						{#if peginRequest.status === 4 && peginRequest.reclaim}
							<div class="grid grid-cols-12 my-4">
								<div class="md:grid-cols-2 grid-cols-12">Reclaimed</div>
								<div class="md:grid-cols-10 grid-cols-12"><a href={explorerBtcTxUrl(peginRequest.reclaim.btcTxid)} target="_blank" rel="noreferrer">{(peginRequest.reclaim.btcTxid)}</a></div>
							</div>
						{:else if peginRequest.status === 3 && peginRequest.reveal}
							<div class="grid grid-cols-12 my-4">
								<div class="md:grid-cols-2 grid-cols-12">Revealed</div>
								<div class="md:grid-cols-10 grid-cols-12"><a href={explorerBtcTxUrl(peginRequest.reveal.btcTxid)} target="_blank" rel="noreferrer">{(peginRequest.reveal.btcTxid)}</a></div>
							</div>
						{/if}
					{:else}
						<div class="flex justify-between">Loading data...</div>
					{/if}
					{#if errorReason}<div class="flex justify-between">{@html errorReason}</div>{/if}
				</div>
			{/if}
		</div>
	</div>
</div>

