<script lang="ts">
import { maxCommit } from "$lib/utxos";
import { sbtcConfig } from '$stores/stores'
import { createEventDispatcher } from "svelte";
import type { SbtcConfig } from '$types/sbtc_config';
import { PatchQuestion } from "svelte-bootstrap-icons";
import { DUST_AMOUNT } from "$lib/psbt";
import { fetchUserSbtcBalance } from '$lib/bridge_api'
import { getAccount } from "@micro-stacks/svelte";
import UserBalance from '$lib/components/UserBalance.svelte'

const account = getAccount();

const dispatch = createEventDispatcher();
let pegOutAmount:number = $sbtcConfig.feeCalc.pegOutFeeCalc.pegOutAmount;
let errorReason:string|undefined;
let changeErrorReason:string|undefined;

let change = maxCommit($sbtcConfig.utxos) - $sbtcConfig.feeCalc.pegOutFeeCalc.feeToApply - $sbtcConfig.feeCalc.pegOutFeeCalc.DUST_AMOUNT;
const changePegOut = async (maxValue:boolean) => {
  const maxPeg = maxCommit($sbtcConfig.utxos);
  errorReason = undefined;
  changeErrorReason = undefined;
  if ($sbtcConfig.stxAddress) {
    const balance = await fetchUserSbtcBalance($sbtcConfig.stxAddress);
    if (pegOutAmount > balance) {
      //pegOutAmount = maxPeg - feeToUse;
      errorReason = 'Cannot commit more BTC then is available at your address';
      return
    }
  }
  const conf:SbtcConfig = $sbtcConfig;
  conf.feeCalc.pegOutFeeCalc.pegOutAmount = Number(pegOutAmount);
  sbtcConfig.set(conf);
}

let componentKey = 0;
const changeRate = (rate:string) => {
  const conf:SbtcConfig = $sbtcConfig;
  if (rate === 'low') conf.feeCalc.pegOutFeeCalc.feeToApply = $sbtcConfig.feeInfo.low_fee_per_kb;
  else if (rate === 'medium') conf.feeCalc.pegOutFeeCalc.feeToApply = $sbtcConfig.feeInfo.medium_fee_per_kb;
  else if (rate === 'high') conf.feeCalc.pegOutFeeCalc.feeToApply = $sbtcConfig.feeInfo.high_fee_per_kb;
  sbtcConfig.set(conf);
  if ($sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount > 0) {
    changePegOut(true)
  }
  componentKey++;
}
$: low = $sbtcConfig.feeInfo.low_fee_per_kb === $sbtcConfig.feeCalc.pegOutFeeCalc.feeToApply
$: medium = $sbtcConfig.feeInfo.medium_fee_per_kb === $sbtcConfig.feeCalc.pegOutFeeCalc.feeToApply
$: high = $sbtcConfig.feeInfo.high_fee_per_kb === $sbtcConfig.feeCalc.pegOutFeeCalc.feeToApply

</script>

<div class="row">
  <div class="col-12">
    <label for="transact-path" class="d-flex justify-content-between">
      <span>Peg Out Amount / Sats:</span>
      <span class="pointer text-info" data-bs-toggle="tooltip-ftux" data-bs-placement="top" data-bs-custom-class="custom-tooltip" title="The amount of Bitcoin you want to swap for sBTC. The bitcoin is locked in the protocol and you convert your sBTC back to Bitcoin when you peg out."><PatchQuestion width={30} height={30}/></span>
    </label>
    {#if errorReason}<div class="text-danger">{errorReason}</div>{/if}
    <input type="number" id="from-address" class="form-control" autocomplete="off" bind:value={pegOutAmount}  on:input={() => changePegOut(false)}/>
    <div class="d-flex justify-content-between  text-info">
      <div>Fee rate <span class="text-success">{$sbtcConfig.feeCalc.pegOutFeeCalc.feeToApply}</span> (sats/kb):
        {#key componentKey}
        <span  class="mx-2 border-right"><a href="/" class={(low) ? 'text-success' : 'text-info'} on:click|preventDefault={() => changeRate('low')}>low</a></span>
        <span  class="mx-2 border-right"><a href="/" class={(medium) ? 'text-success' : 'text-info'} on:click|preventDefault={() => changeRate('medium')}>medium</a></span>
        <span  class="mx-2"><a href="/" class={(high) ? 'text-success' : 'text-info'} on:click|preventDefault={() => changeRate('high')}>high</a></span>
        {/key}
      </div>
      <div><a href="/" class="" on:click|preventDefault={() => changePegOut(true)}>max</a></div>
    </div>
    {#if $sbtcConfig.feeCalc.pegOutFeeCalc.pegOutAmount && $sbtcConfig.feeCalc.pegOutFeeCalc.pegOutAmount > 0}
    <div class="d-flex justify-content-center">
      <div class="text-center w-50 bg-light text-dark py-3 px-4 my-4 border-radius">
        <p>Pegging out {$sbtcConfig.feeCalc.pegOutFeeCalc.pegOutAmount} satoshi</p>
        <p>Dust to the SBTC wallet - {DUST_AMOUNT} satoshi</p>
        <p>Fee will be calculated at {$sbtcConfig.feeCalc.pegOutFeeCalc.feeToApply} sats/kb</p>
        {#if change > 0}<p>{change} sats, will be sent back to your sending address.</p>{/if}
      </div>
    </div>
    {/if}
  </div>
</div>
<UserBalance showAddress={false}/>

<style>
</style>