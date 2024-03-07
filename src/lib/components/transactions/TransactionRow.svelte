<script lang="ts">
	import { goto } from '$app/navigation';
	import { satsToBitcoin, truncate } from 'sbtc-bridge-lib';
	import ArrowUpRight from '../shared/ArrowUpRight.svelte';
	import { explorerBtcTxUrl, explorerTxUrl, fmtNumber, getModeAsWord, getStatusAsWord, getTypeAsWord } from '$lib/utils';
	import { onMount } from 'svelte';
	import { RevealerTxTypes, type RevealerTransaction, CommitmentStatus } from '$types/revealer_types';

    export let transaction:RevealerTransaction;

    const getReclaimUrl = () => {
        goto('/transactions/tx/' + transaction.txId)
    }

	onMount(async () => {
		console.log(transaction)
	})

</script>

<div class="w-full grid grid-cols-4 md:grid-cols-7 justify-evenly my-4 text-sm font-extralight text-gray-300">
	<div class=" max:w-1/5">{satsToBitcoin(transaction.amountSats)}</div>
	<div class="md:inline-flex hidden pe-3">
		<div class="">
			<a
				class=""
				href={explorerBtcTxUrl(transaction.txId)}
				target="_blank"
				rel="noreferrer">{truncate(transaction.paymentAddress, 5)}</a
			>
		</div>
		<div class="text-right pt-1 ps-2">
			<ArrowUpRight
				class="h-5 w-5 text-white"
				target={explorerBtcTxUrl(transaction.txId)}
			/>
		</div>
	</div>
	<!--<div class="hidden lg:flex ">
        <div class="grow"><a href={explorerBtcAddressUrl(getTo(pegin))} target="_blank" rel="noreferrer">{truncate(pegin.commitTxScript?.address)}</a></div>
        <div class="-translate-x-[20px]"><ArrowUpRight class="h-4 w-4 text-white" target={explorerBtcAddressUrl(getTo(pegin))} /></div>
    </div>-->
	<div class="flex text-[0.6rem] justify-start">
		<div class={(transaction.type === RevealerTxTypes.SBTC_DEPOSIT) ? 'px-2 py-1 ps-2 border border-yellow-500 rounded-full text-yellow-500' : 'px-2 py-1 ps-2 border border-blue-300 rounded-full text-blue-300'}>
			{getTypeAsWord(transaction.type)}
		</div>
	</div>
	<div class="flex max:w-1/5">
		{getStatusAsWord(transaction.status)}
		{#if transaction.status > CommitmentStatus.UNPAID}
		<div class="text-right pt-1 ps-2">
			<ArrowUpRight class="h-5 w-5 text-white" target={explorerBtcTxUrl(transaction.txId)} />
		</div>
		{/if}
	</div>
	<div class="md:inline-flex hidden max:w-1/5">
		{getModeAsWord(transaction.mode)}
	</div>
	<div class="md:inline-flex hidden max:w-1/5">
		{fmtNumber(transaction.blockHeight)}
	</div>
	<div class="text-end whitespace-nowrap">
		<a
			class="text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 hover:underline"
			href="/" on:click|preventDefault={() => getReclaimUrl()}>View details</a>
	</div>
</div>
