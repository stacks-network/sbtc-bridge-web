<script lang="ts">
import { onMount } from 'svelte';
import { sbtcConfig } from '$stores/stores'
import { createEventDispatcher } from "svelte";
import { maxCommit } from "$lib/utxos";
import type { SbtcConfig } from '$types/sbtc_config';

const dispatch = createEventDispatcher();
let changeErrorReason:string|undefined;

let bcInfo: {low_fee_per_kb:number, medium_fee_per_kb:number, high_fee_per_kb:number} = {
  low_fee_per_kb: 0,
  medium_fee_per_kb: 0,
  high_fee_per_kb: 0,
};

let feeToApply = 0;
const selectFee = (fee:number) => {
  const maxPeg = maxCommit($sbtcConfig.utxos);
  feeToApply = Math.round(fee / 10);
  const pegInAmount = maxPeg - feeToApply;
  const change = maxPeg - (pegInAmount + feeToApply);
  if (change < 0) {
    changeErrorReason = 'Max peg in allowed at this fee rate is ' + (maxPeg - feeToApply);
  }
  const conf:SbtcConfig = $sbtcConfig;
  conf.feeCalc.pegInFeeCalc.pegInAmount = pegInAmount;
  conf.feeCalc.pegInFeeCalc.feeToApply = Number(feeToApply);
  sbtcConfig.set(conf);
  dispatch("fee_selected");
}
onMount(async () => {
})

$: showFeeCalculation = feeToApply > 0;

</script>
    
<div class="row">
  <div class="col-12">
      {#if showFeeCalculation}
      <label for="transact-path" class="mb-3">Tx Fee Calculation (sats/kb)</label>
      <div class="d-flex justify-content-between">
        <div>Using fee rate: {feeToApply}</div>
        <div><a href="/" on:click|preventDefault={() => {feeToApply = 0; changeErrorReason = undefined}}>reset</a></div>
      </div>
      <div>Peg In: {$sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount}</div>
      {:else}
      <label for="transact-path" class="mb-3">Select Fee Rate for Fee Calculation</label>
      <div class="dropdown">
        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Choose Fee Rate (sats/kb)
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="/" on:click|preventDefault={() => selectFee(bcInfo.low_fee_per_kb)}>Low: {bcInfo.low_fee_per_kb}</a></li>
          <li><a class="dropdown-item" href="/" on:click|preventDefault={() => selectFee(bcInfo.medium_fee_per_kb)}>Medium: {bcInfo.medium_fee_per_kb}</a></li>
          <li><a class="dropdown-item" href="/" on:click|preventDefault={() => selectFee(bcInfo.high_fee_per_kb)}>High: {bcInfo.high_fee_per_kb}</a></li>
        </ul>
      </div>
      {/if}
  </div>
</div>
{#if changeErrorReason}<div class="text-danger">{changeErrorReason}</div>{/if}

        
    <style>
    </style>