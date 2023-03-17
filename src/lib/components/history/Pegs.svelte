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
const toggleDetails = (index:number) => {
  const x = document.getElementById("peg-details-" + index);
  if (!x) return;
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

onMount(async () => {
	fetchTxs();
})

</script>

<div class="text-white">
  <div class="row">
    <div class="col-2">
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
    <div class="col-2">
      <div class="filter pointer"><a href="/" on:click|preventDefault={() => reorder('dst')}>Txs</a></div>
    </div>
  </div>
  {#if !transactions}
    No transactions
  {:else}
  {#each events as item, i}
  <div class="row tab-row my-3">
    <div class="col-2">
      <a href="/" on:click|preventDefault={() => toggleDetails(i)}>{item.pegData.pegType}/{item.pegData.opType}</a>
    </div>
    <div class="col-2">
      {item.pegData.amountSats}
    </div>
    <div class="col-3">
      {truncate(item.pegData.stxAddress)}
    </div>
    <div class="col-3">
      {truncate(item.pegData.sbtcWallet)}
    </div>
    <div class="col-2">
      <a href={explorerTxUrl(item.txid)} target="_blank" rel="noreferrer">stx</a> | 
      <a href={explorerBtcTxUrl(item.bitcoinTxid)} target="_blank" rel="noreferrer">btc</a>
    </div>
  </div>
  <div id={'peg-details-' + i} class="p-3 container bg-info" style="display:none;">
  <div class="row text-small">
    <div class="col-2">contractId</div><div class="col-10">{item.contractId}</div>
    <div class="col-2">eventIndex</div><div class="col-10">{item.eventIndex}</div>
    <div class="col-2">txid</div><div class="col-10">{item.txid}</div>
    <div class="col-2">bitcoinTxid</div><div class="col-10">{item.bitcoinTxid}</div>
    <div class="col-2">pegType</div><div class="col-10">{item.pegData.pegType}</div>
    <div class="col-2">opType</div><div class="col-10">{item.pegData.opType}</div>
    <div class="col-2">stxAddress</div><div class="col-10">{item.pegData.stxAddress}</div>
    <div class="col-2">amountSats</div><div class="col-10">{item.pegData.amountSats}</div>
    <div class="col-2">burnBlockHeight</div><div class="col-10">{item.pegData.burnBlockHeight}</div>
    <div class="col-2">sbtcWallet</div><div class="col-10">{item.pegData.sbtcWallet}</div>
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