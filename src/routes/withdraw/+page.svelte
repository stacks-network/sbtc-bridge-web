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

{#if errored}
<ServerError />
{:else}
<div class="mx-auto md:h-[calc(100vh-180px)] lg:h-[calc(100vh-180px)] flex flex-col justify-center">
	<div class="w-full mx-auto max-w-2xl">
		{#if inited}
		<div class="flex flex-col p-2 gap-10 items-start bg-gray-1000">
			{#key componentKey}<TimeLine {timeLineStatus}/>{/key}
			<WithdrawForm on:time_line_status_change={timeLineUpdate}/>
			</div>
		{:else if errored}
			<ServerError />
		{/if}
	</div>
</div>
{/if}