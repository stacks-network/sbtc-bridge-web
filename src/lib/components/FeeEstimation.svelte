<script lang="ts">
import { fetchFeeEstimate } from "$lib/utxos";
import { onMount } from 'svelte';
import { ArrowRepeat } from "svelte-bootstrap-icons";
import { sbtcConfig } from '$stores/stores'
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();

let bcInfo: {low_fee_per_kb:number, medium_fee_per_kb:number, high_fee_per_kb:number} = {
  low_fee_per_kb: 0,
  medium_fee_per_kb: 0,
  high_fee_per_kb: 0,
};
const selectFee = (fee:number) => {
  dispatch("fee_selected", { fee });
}
onMount(async () => {
  bcInfo = await fetchFeeEstimate($sbtcConfig.network);
})
</script>

<div class="dropdown">
  <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Choose Fee Rate (sats/kb)
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="/" on:click|preventDefault={() => selectFee(bcInfo.low_fee_per_kb)}>Low: {bcInfo.low_fee_per_kb}</a></li>
    <li><a class="dropdown-item" href="/" on:click|preventDefault={() => selectFee(bcInfo.medium_fee_per_kb)}>Low: {bcInfo.medium_fee_per_kb}</a></li>
    <li><a class="dropdown-item" href="/" on:click|preventDefault={() => selectFee(bcInfo.high_fee_per_kb)}>Low: {bcInfo.high_fee_per_kb}</a></li>
  </ul>
</div>
    
<style>
</style>