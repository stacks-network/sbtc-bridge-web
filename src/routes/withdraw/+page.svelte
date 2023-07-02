<script lang="ts">
	import { onMount } from "svelte";
	import WithdrawForm from '$lib/components/withdraw/WithdrawForm.svelte';
	import TimeLine from '$lib/components/withdraw/TimeLine.svelte';
	import type { PegInTransactionI } from '$lib/domain/PegInTransaction';
	import ServerError from "$lib/components/common/ServerError.svelte";

	let piTx:PegInTransactionI; // = ($sbtcConfig.pegInTransaction && $sbtcConfig.pegInTransaction.ready) ? PegInTransaction.hydrate($sbtcConfig.pegInTransaction) : new PegInTransaction();
	let timeLineStatus = 1;
	let inited = false;
	let errored = false;

	$: view = 'build_tx_view';
	let webWallet = true;
	let componentKey = 0;

	const timeLineUpdate = (e:any) => {
		timeLineStatus = e.detail.timeLineStatus;
		if (timeLineStatus < 0) {
			inited = false;
				errored = true;
		} else {
			componentKey++;
		}
	}
	onMount(async () => {
		try {
			inited = true;
		} catch(err) {
			errored = true;
		}
	})
</script>

<svelte:head>
  <title>sBTC Bridge - Withdraw BTC</title>
  <meta name="description" content="Permissionlessly withdraw your Bitcoin at any time." />
</svelte:head>

{#if errored}
	<ServerError />
{:else}
	<div class="max-w-2xl w-full py-16">
		{#if inited}
			<div class="flex flex-col gap-6 bg-gray-1000 rounded-2xl">
				{#key componentKey}
					<TimeLine {timeLineStatus}/>
				{/key}
				<WithdrawForm on:time_line_status_change={timeLineUpdate}/>
			</div>
		{:else if errored}
			<ServerError />
		{/if}
	</div>
{/if}