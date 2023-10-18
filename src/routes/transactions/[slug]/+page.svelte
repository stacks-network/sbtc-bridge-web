<script lang="ts">
import { onMount } from 'svelte';
import { goto } from "$app/navigation";
import type { SbtcClarityEvent } from 'sbtc-bridge-lib'
import { toStorable } from 'sbtc-bridge-lib'
import TrCommit from '$lib/components/transactions/TrCommit.svelte';
import { explorerBtcTxUrl } from '$lib/utils'
import ChevronUp from "$lib/components/shared/ChevronUp.svelte";
import PendingDeposit from '$lib/components/transactions/PendingDeposit.svelte';
import CommittedDeposit from '$lib/components/transactions/CommittedDeposit.svelte';
	import SbtcEventData from '$lib/components/transactions/SbtcEventData.svelte';

export let data:any;
let sbtcEvent:SbtcClarityEvent = data;

let inited = false;
let errorReason:string|undefined;

onMount(async () => {
	if (!sbtcEvent) {
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
					&lt; Back to Transaction history
				</a>
			</div>

			<div class="flex flex-col justify-start">
				<div class="">
					<SbtcEventData {sbtcEvent}/>
				</div>
			</div>

		</div>
	</div>
</div>
