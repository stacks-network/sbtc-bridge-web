<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { fmtNumber, satsToBitcoin, truncate, type SbtcClarityEvent } from 'sbtc-bridge-lib';
	import ArrowUpRight from '../shared/ArrowUpRight.svelte';
	import { explorerBtcTxUrl, explorerTxUrl } from '$lib/utils';

    export let event:any;

    const getReclaimUrl = (pegin:any) => {
        goto('/transactions/' + pegin.bitcoinTxid.payload.value.split('x')[1])
    }

	const getType = (eventType: string | undefined) => {
		return eventType === 'mint' ? 'deposit' : 'withdrawal';
	}

</script>

<div class="w-full grid grid-cols-4 md:grid-cols-5 justify-evenly my-4 text-sm font-extralight text-gray-300">
	<div class=" max:w-1/5">{satsToBitcoin(event.payloadData.amountSats)}</div>
	<div class="md:inline-flex hidden pe-3">
		<div class="">
			<a
				class=""
				href={explorerBtcTxUrl(event.bitcoinTxid.payload.value.split('x')[1])}
				target="_blank"
				rel="noreferrer">{truncate(event.payloadData.spendingAddress, 5)}</a
			>
		</div>
		<div class="text-right pt-1">
			<ArrowUpRight
				class="h-5 w-5 text-white"
				target={explorerBtcTxUrl(event.bitcoinTxid.payload.value.split('x')[1])}
			/>
		</div>
	</div>
	<!--<div class="hidden lg:flex ">
        <div class="grow"><a href={explorerBtcAddressUrl(getTo(pegin))} target="_blank" rel="noreferrer">{truncate(pegin.commitTxScript?.address)}</a></div>
        <div class="-translate-x-[20px]"><ArrowUpRight class="h-4 w-4 text-white" target={explorerBtcAddressUrl(getTo(pegin))} /></div>
    </div>-->
	<div class="flex  justify-start">
		<div class={(getType(event.payloadData.eventType) === 'deposit') ? ' px-2 py-1 ps-3 border border-yellow-500 rounded-full text-yellow-500' : 'px-2 py-1 ps-3 border border-blue-300 rounded-full text-blue-300'}>
			<!--
            {#if pegin.status === 1}<span class="status status-1">pending</span>
            {:else if pegin.status === 2}<span class="status status-2">committed</span>
            {:else if pegin.status === 3}<span class="status status-3">reclaimed</span>
            {:else if pegin.status === 4}<span class="status status-4">revealed</span>
            {:else}{pegin.status}
            {/if}
            -->
			{getType(event.payloadData.eventType)}
		</div>
		<div class="text-right pt-1 ps-2">
			<ArrowUpRight class="h-5 w-5 text-white" target={explorerTxUrl(event.txid)} />
		</div>
	</div>
	<div class="flex max:w-1/5">{fmtNumber(event.payloadData.burnBlockHeight)}</div>
	<div class="text-end whitespace-nowrap">
		<a
			class="text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 hover:underline"
			href="/" on:click|preventDefault={() => getReclaimUrl(event)}>View details</a>
	</div>
</div>
