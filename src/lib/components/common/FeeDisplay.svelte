<script lang="ts">
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();

export let amtData:{pegIn:boolean,label:string,info:string,pegAmount:number, maxCommit:number, change:number, fees:Array<number>, fee:number, dust:number};
export let currentPeg:number;

const changeRate = (rate:number) => {
  dispatch('fee_rate_updated', { opCode:'prio', error: false, newAmount: currentPeg, newFeeRate: rate });
}

$: low = amtData.fee === amtData.fees[0];
$: medium = amtData.fee === amtData.fees[1];
$: high = amtData.fee === amtData.fees[2];

</script>

{#if amtData.pegIn}
<div class="mt-4 mb-5 col-12">
  <div>{#if amtData.change === 0}No change{:else}Change {amtData.change} (add change address?){/if}</div>
  <div class="d-flex justify-content-between">
    <div class="">Fee: <span class="text-success">{amtData.fee} sats/kb</span></div>
    <div>
      <span class="ms-5 text-white">priority: </span>
      <span  class="mx-0 "><a href="/" class={(low) ? 'text-success' : 'text-info'} on:click|preventDefault={() => changeRate(0)}>low</a></span>
      <span  class="mx-0"><a href="/" class={(medium) ? 'text-success' : 'text-info'} on:click|preventDefault={() => changeRate(1)}>medium</a></span>
      <span  class="mx-0"><a href="/" class={(high) ? 'text-success' : 'text-info'} on:click|preventDefault={() => changeRate(2)}>high</a></span>
    </div>
  </div>
</div>
{:else}
<div class="mb-5 col-12">
  <div>Dust {amtData.dust} BTC</div>
  <div>{#if amtData.change === 0}No change{:else}Change {amtData.change} (add change address?){/if}</div>
  <div class="d-flex justify-content-between">
    <div class="">Fee: <span class="text-success">{amtData.fee} sats/kb</span></div>
    <div>
      <span class="ms-5 text-white">priority: </span>
      <span  class="mx-0 "><a href="/" class={(low) ? 'text-success' : 'text-info'} on:click|preventDefault={() => changeRate(0)}>low</a></span>
      <span  class="mx-0"><a href="/" class={(medium) ? 'text-success' : 'text-info'} on:click|preventDefault={() => changeRate(1)}>medium</a></span>
      <span  class="mx-0"><a href="/" class={(high) ? 'text-success' : 'text-info'} on:click|preventDefault={() => changeRate(2)}>high</a></span>
    </div>
  </div>
</div>
{/if}

<style>
</style>