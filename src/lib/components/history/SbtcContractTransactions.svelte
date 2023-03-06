<script lang="ts">
import { fetchSbtcEvents } from "$lib/bridge_api";
import { ArrowRepeat, SortAlphaUp } from "svelte-bootstrap-icons";
import { truncate } from '$lib/utils'
import { onMount } from 'svelte';
import UserBalance from '$lib/components/common/UserBalance.svelte'

let events:any[] = []
let transactions = false;
const fetchTxs = async () => {
  events = await fetchSbtcEvents();
  /**
  const txs = [];
  for (let event of events) {
    event.txData = await readTx(event.data.value);
  }
  console.log('events: ', events)
  transactions = true;
  */
}

let sortDir = true;
let sortField = 'title';
let componentKey = 0;
const reorder = (sf:string) => {
    sortField = sf;
    sortDir = !sortDir;
    componentKey++;
}
onMount(async () => {
	fetchTxs();
})

</script>

<div class="row">
  <div class="d-flex justify-content-between">
    <p class="strapline">Transactions can be filtered and sorted.</p>
    <a href="/" on:click|preventDefault={() => fetchTxs()} class="pointer text-info"><ArrowRepeat width={20} height={20}/></a>
  </div>
</div>
<UserBalance showAddress={true}/>
<div class="text-white">
  <div class="row">
    <div class="col-1">
      <div class="filter pointer "><a href="/" on:click|preventDefault={() => reorder('event')}>Type</a></div>
    </div>
    <div class="col-3">
      <div class="filter pointer"><a href="/" on:click|preventDefault={() => reorder('event')}>DST</a></div>
    </div>
    <div class="col-3">
      <div class="filter pointer"><a href="/" on:click|preventDefault={() => reorder('dst')}>SBTC Wallet</a></div>
    </div>
    <div class="col-2">
      <div class="filter pointer"><a href="/" on:click|preventDefault={() => reorder('dst')}>Amount</a></div>
    </div>
    <div class="col-3">
      <div class="filter pointer"><a href="/" on:click|preventDefault={() => reorder('dst')}>TXID</a></div>
    </div>
  </div>
  {#if !transactions}
    No transactions
  {:else}
  {#each events as item}
  <div class="row tab-row my-3">
    <div class="col-1">
      {item.txData.type}
    </div>
    <div class="col-3">
      {truncate(item.txData.stxAddress)}
    </div>
    <div class="col-3">
      {truncate(item.txData.sbtcWallet)}
    </div>
    <div class="col-2">
      {item.txData.amountSats}
    </div>
    <div class="col-3">
      {truncate(item.data.value)}
    </div>
  </div>
  {/each}
  {/if}
</div>

<style>
  .tab-row {
    font-size: 1rem;
  }
</style>