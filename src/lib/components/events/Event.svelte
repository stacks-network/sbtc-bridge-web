<script lang="ts">
	import { goto } from '$app/navigation';
	import { satsToBitcoin, truncate } from 'sbtc-bridge-lib';
	import ArrowUpRight from '../shared/ArrowUpRight.svelte';
	import { explorerBtcTxUrl, explorerTxUrl } from '$lib/utils';
	import { onMount } from 'svelte';
	import { RevealerTxTypes, type RevealerTransaction } from '$types/revealer_types';

    export let event:RevealerTransaction;

    const getReclaimUrl = () => {
        goto('/transactions/tx/' + event.txId)
    }

	const getType = (eventType: string | undefined) => {
		return eventType === 'mint' ? RevealerTxTypes.SBTC_DEPOSIT : RevealerTxTypes.SBTC_WITHDRAWAL;
	}
	
	onMount(async () => {
		console.log(event)
	})

</script>

<div class="w-full grid grid-cols-4 md:grid-cols-5 justify-evenly my-4 text-sm font-extralight text-gray-300">
	<div class=" max:w-1/5">{satsToBitcoin(event.amountSats)}</div>
	<div class="md:inline-flex hidden pe-3">
		<div class="">
			<a
				class=""
				href={explorerBtcTxUrl(event.txId)}
				target="_blank"
				rel="noreferrer">{truncate(event.paymentAddress, 5)}</a
			>
		</div>
		<div class="text-right pt-1 ps-2">
			<ArrowUpRight
				class="h-5 w-5 text-white"
				target={explorerBtcTxUrl(event.txId)}
			/>
		</div>
	</div>
	<!--<div class="hidden lg:flex ">
        <div class="grow"><a href={explorerBtcAddressUrl(getTo(pegin))} target="_blank" rel="noreferrer">{truncate(pegin.commitTxScript?.address)}</a></div>
        <div class="-translate-x-[20px]"><ArrowUpRight class="h-4 w-4 text-white" target={explorerBtcAddressUrl(getTo(pegin))} /></div>
    </div>-->
	<div class="flex  justify-start">
		<div class={(getType(event.type) === RevealerTxTypes.SBTC_DEPOSIT) ? ' px-2 py-1 ps-3 border border-yellow-500 rounded-full text-yellow-500' : 'px-2 py-1 ps-3 border border-blue-300 rounded-full text-blue-300'}>
			<!--
            {#if pegin.status === 1}<span class="status status-1">pending</span>
            {:else if pegin.status === 2}<span class="status status-2">committed</span>
            {:else if pegin.status === 3}<span class="status status-3">reclaimed</span>
            {:else if pegin.status === 4}<span class="status status-4">revealed</span>
            {:else}{pegin.status}
            {/if}
            -->
			{getType(event.type)}
		</div>
		<div class="text-right pt-1 ps-2">
			<ArrowUpRight class="h-5 w-5 text-white" target={explorerTxUrl(event.txId)} />
		</div>
	</div>
	<div class="flex max:w-1/5">{0}</div>
	<div class="text-end whitespace-nowrap">
		<a
			class="text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 hover:underline"
			href="/" on:click|preventDefault={() => getReclaimUrl()}>View details</a>
	</div>
</div>
