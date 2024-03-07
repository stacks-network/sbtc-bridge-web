<script lang="ts">
	import { onMount } from 'svelte';
	import { payloadParseDeposit, payloadParseWithdrawal } from '$lib/revealer_api';
	import { RevealerTxTypes } from '$types/revealer_types';
	import type { PayloadType } from 'sbtc-bridge-lib';
	
	let payload:PayloadType;
	export let data:any;
	export let bitcoinAddress:string;
	export let type:string;
	export let mode:string;
	
	onMount(async () => {
		if (type === RevealerTxTypes.SBTC_DEPOSIT) {
			payload = await payloadParseDeposit(data)
		} else {
			payload = await payloadParseWithdrawal(data, bitcoinAddress)
		}
	})
	
	</script>
	
	<div class="flex ">
		<div class="w-full text-2xl">Payload</div>
	</div>
	{#if payload}
	{#if type === RevealerTxTypes.SBTC_WITHDRAWAL}
	<div class="flex">
		<div class="w-1/5">Withdrawal to:</div>
		<div class="w-4/5">{bitcoinAddress}</div>
	</div>
	<!--
	<div class="flex">
		<div class="w-1/5">Signature:</div>
		<div class="w-4/5">{payload.signature}</div>
	</div>
	-->
	<div class="flex">
		<div class="w-1/5">Amount:</div>
		<div class="w-4/5">{payload.amountSats} sats</div>
	</div>
	{:else}
	<div class="flex">
		<div class="w-1/5">Deposit to:</div>
		<div class="w-4/5">{payload.stacksAddress}</div>
	</div>
	<div class="flex">
		<div class="w-1/5">Amount:</div>
		<div class="w-4/5">{payload.revealFee} sats</div>
	</div>

	{/if}

	{/if}
