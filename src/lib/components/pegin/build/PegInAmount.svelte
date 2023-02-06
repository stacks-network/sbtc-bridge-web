<script lang="ts">
import { maxCommit } from "$lib/utxos";
import { sbtcConfig } from '$stores/stores'
import { createEventDispatcher } from "svelte";
import type { SbtcConfig } from '$types/sbtc_config';
import { PatchQuestion } from "svelte-bootstrap-icons";

const dispatch = createEventDispatcher();
let pegInAmount:number = $sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount;
let errorReason:string|undefined;
let changeErrorReason:string|undefined;

let change = 0;
const changePegIn = (maxValue:boolean) => {
  const fee = $sbtcConfig.feeCalc.pegInFeeCalc.feeToApply || 0;
  const maxPeg = maxCommit($sbtcConfig.utxos);
  if (maxValue) pegInAmount = maxPeg - fee;
  errorReason = undefined;
  changeErrorReason = undefined;
  if (pegInAmount > maxPeg) {
    //pegInAmount = maxPeg - feeToUse;
    errorReason = 'Cannot commit more BTC then is available at your address';
    return
  }
  const conf:SbtcConfig = $sbtcConfig;
  change = maxPeg - pegInAmount - fee;
  conf.feeCalc.pegInFeeCalc.pegInAmount = Number(pegInAmount);
  sbtcConfig.set(conf);
}

let componentKey = 0;
const changeRate = (rate:string) => {
  const conf:SbtcConfig = $sbtcConfig;
  if (rate === 'low') conf.feeCalc.pegInFeeCalc.feeToApply = $sbtcConfig.feeCalc.pegInFeeCalc.low.fee;
  else if (rate === 'medium') conf.feeCalc.pegInFeeCalc.feeToApply = $sbtcConfig.feeCalc.pegInFeeCalc.medium.fee;
  else if (rate === 'high') conf.feeCalc.pegInFeeCalc.feeToApply = $sbtcConfig.feeCalc.pegInFeeCalc.high.fee;
  sbtcConfig.set(conf);
  if ($sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount > 0) {
    changePegIn(true)
  }
  componentKey++;
}
$: low = $sbtcConfig.feeInfo.low_fee_per_kb === $sbtcConfig.feeCalc.pegInFeeCalc.feeToApply
$: medium = $sbtcConfig.feeInfo.medium_fee_per_kb === $sbtcConfig.feeCalc.pegInFeeCalc.feeToApply
$: high = $sbtcConfig.feeInfo.high_fee_per_kb === $sbtcConfig.feeCalc.pegInFeeCalc.feeToApply
</script>

<div class="row">
  <div class="col-12">
    <label for="transact-path" class="d-flex justify-content-between">
      <span>Peg In Amount / Sats:</span>
      <span class="pointer text-info" data-bs-toggle="tooltip-ftux" data-bs-placement="top" data-bs-custom-class="custom-tooltip" title="The amount of Bitcoin you want to swap for sBTC. The bitcoin is locked in the protocol and you convert your sBTC back to Bitcoin when you peg out."><PatchQuestion width={30} height={30}/></span>
    </label>
    <input type="number" id="from-address" class="form-control" autocomplete="off" bind:value={pegInAmount}  on:input={() => changePegIn(false)}/>
    <div class="d-flex justify-content-between  text-info">
      <div>Fee rate <span class="text-success">{$sbtcConfig.feeCalc.pegInFeeCalc.feeToApply}</span> (sats/kb):
        {#key componentKey}
        <span  class="mx-2 border-right"><a href="/" class={(low) ? 'text-success' : 'text-info'} on:click|preventDefault={() => changeRate('low')}>low</a></span>
        <span  class="mx-2 border-right"><a href="/" class={(medium) ? 'text-success' : 'text-info'} on:click|preventDefault={() => changeRate('medium')}>medium</a></span>
        <span  class="mx-2"><a href="/" class={(high) ? 'text-success' : 'text-info'} on:click|preventDefault={() => changeRate('high')}>high</a></span>
        {/key}
      </div>
      <div><a href="/" class="" on:click|preventDefault={() => changePegIn(true)}>max</a></div>
    </div>
    {#if $sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount && $sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount > 0}
    <div class="d-flex justify-content-center">
      <div class="text-center w-50 bg-light text-dark py-3 px-4 my-4 border-radius">
        <p>Pegging in for {$sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount} satoshi</p>
        <p>Fee will be calculated at {$sbtcConfig.feeCalc.pegInFeeCalc.feeToApply} sats/kb</p>
        {#if change > 0}<p>{change} sats, will be sent back to your sending address.</p>{/if}
      </div>
    </div>
    {/if}
  </div>
</div>

<style>
</style>