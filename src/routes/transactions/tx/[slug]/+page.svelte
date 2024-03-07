<script lang="ts">
import { onMount } from 'svelte';
import { goto } from "$app/navigation";
	import Transaction from '$lib/components/transactions/Transaction.svelte';
	import { fetchRevealerTransactionsByTxId } from '$lib/revealer_api';
	import { page } from '$app/stores';
	import type { RevealerTransaction } from '$types/revealer_types';

let transaction:RevealerTransaction;

let inited = false;

onMount(async () => {
	transaction = await fetchRevealerTransactionsByTxId($page.params.slug);

	if (!transaction) {
		goto('/transactions');
		return;
	}
	inited = true;
})
</script>

<svelte:head>
  <title>sBTC Bridge - Transaction details</title>
  <meta name="description" content="Details of a transaction" />
</svelte:head>


<div class="py-6 mx-auto max-w-7xl md:px-6">
	<div class="flex flex-col w-full my-8">
      	<div class="flex flex-col w-full border-[0.5px] border-gray-700 rounded-lg p-6 sm:p-10 overflow-hidden bg-gray-1000">
			<div class="flex justify-between">
				<a href="/transactions" class="flex items-center mb-10">
					&lt; Back to history
				</a>
			</div>
			{#if transaction}
			<div class="flex flex-col justify-start">
				<div class="">
					<Transaction {transaction}/>
				</div>
			</div>
			{:else}
			<div class="flex flex-col justify-start">
				<div class="">
					Loading data for transaction {$page.params.slug}
				</div>
			</div>
			{/if}
		</div>
	</div>
</div>
