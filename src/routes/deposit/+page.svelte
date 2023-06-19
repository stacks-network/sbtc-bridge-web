<script lang="ts">
import { onMount } from "svelte";
import DepositForm from '$lib/components/deposit/DepositForm.svelte';
import DepositFormOpReturn from '$lib/components/deposit/op_return/DepositForm.svelte';
import TimeLine from '$lib/components/deposit/TimeLine.svelte';
import TimeLineOpReturn from '$lib/components/deposit/op_return/TimeLine.svelte';
import type { PegInTransactionI } from '$lib/domain/PegInTransaction';
import ServerError from "$lib/components/common/ServerError.svelte";
import { sbtcConfig } from '$stores/stores'

let piTx:PegInTransactionI; // = ($sbtcConfig.pegInTransaction && $sbtcConfig.pegInTransaction.ready) ? PegInTransaction.hydrate($sbtcConfig.pegInTransaction) : new PegInTransaction();
let timeLineStatus = 1;
let inited = false;
let errored = false;

$: view = 'build_tx_view';
let webWallet = true;
let componentKey = 0;

const openSigView = (e:any) => {
	piTx = e.detail.piTx
	const wallet = e.detail.wallet
	webWallet = wallet === 1; // piTx.fromBtcAddress === addresses().cardinal,
	//piTx = PegInTransaction.hydrate($sbtcConfig.pegInTransaction!);
  	view = 'sign_tx_view';
}

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
<!-- 180 or the header get overlapped -->
{#if errored}
<ServerError />
{:else}
<div class="mx-auto h-[calc(100vh-180px)] flex flex-col justify-center">
	<div class="mx-auto max-w-3xl">
		{#if inited}
		<div class="flex flex-col p-10 gap-10 items-start bg-gray-1000 xs:w-4/5">
			{#if $sbtcConfig.userSettings?.useOpDrop}
			{#key componentKey}
			<TimeLine {timeLineStatus}/>
			{/key}
			<DepositForm on:time_line_status_change={timeLineUpdate}/>
			{:else}
			{#key componentKey}
			<TimeLineOpReturn {timeLineStatus}/>
			{/key}
			<DepositFormOpReturn on:time_line_status_change={timeLineUpdate}/>
			{/if}

		</div>
		{:else if errored}
		<div class="flex flex-col p-10 gap-10 items-start bg-gray-1000 border-[0.5px] border-gray-700 rounded-3xl">
			<ServerError />
		</div>
		{/if}
	</div>
</div>
{/if}
