<script lang="ts">
import { fetchSbtcEvents } from "$lib/bridge_api";
import { ArrowRepeat, SortAlphaUp } from "svelte-bootstrap-icons";
import { truncate, explorerBtcTxUrl, explorerTxUrl } from '$lib/utils'
import { onMount } from 'svelte';
import UserBalance from '$lib/components/common/UserBalance.svelte'

let events:any[] = []
let transactions = false;
const fetchTxs = async () => {
  events = await fetchSbtcEvents();
  transactions = true;
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
<div class="text-white">
  <div class="row">
    <div class="col-1">
      <div class="filter pointer "><a href="/" on:click|preventDefault={() => reorder('event')}>Type</a></div>
    </div>
    <div class="col-2">
      <div class="filter pointer"><a href="/" on:click|preventDefault={() => reorder('dst')}>Amount</a></div>
    </div>
    <div class="col-3">
      <div class="filter pointer"><a href="/" on:click|preventDefault={() => reorder('event')}>From</a></div>
    </div>
    <div class="col-3">
      <div class="filter pointer"><a href="/" on:click|preventDefault={() => reorder('dst')}>SBTC Wallet</a></div>
    </div>
    <div class="col-3">
      <div class="filter pointer"><a href="/" on:click|preventDefault={() => reorder('dst')}>Txs</a></div>
    </div>
  </div>
  {#if !transactions}
    No transactions
  {:else}
  {#each events as item}
  <div class="row tab-row my-3">
    <div class="col-1">
      {item.pegData.pegType}
    </div>
    <div class="col-2">
      {item.pegData.amountSats}
    </div>
    <div class="col-3">
      {(item.pegData.pegType === 'pegin') ? truncate(item.pegData.stxAddress) : 'from sig'}
    </div>
    <div class="col-3">
      {truncate(item.pegData.sbtcWallet)}
    </div>
    <div class="col-3">
      <a href={explorerTxUrl(item.txid)} target="_blank" rel="noreferrer">stx</a> | 
      <a href={explorerBtcTxUrl(item.bitcoinTxid)} target="_blank" rel="noreferrer">btc</a>
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