<script lang="ts">
import { onMount } from 'svelte';
import { sbtcConfig } from '$stores/stores'
import Principal from "$lib/components/pegin/build/Principal.svelte";
import PegInAmount from "$lib/components/pegin/build/PegInAmount.svelte";
import UTXOSelection from "$lib/components/pegin/build/UTXOSelection.svelte";
import { Tooltip } from "bootstrap";
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();

let errorReason:string|undefined;
let stxAddressOk = true;

const requestSignature = () => {
  dispatch('request_signature');
}

const principalUpdated = (event:any) => {
  stxAddressOk = !event.detail.error;
}

const amountUpdated = () => {}

$: showStxAddress = $sbtcConfig.fromBtcAddress && $sbtcConfig.utxos?.length > 0;
$: showPegInAmount = $sbtcConfig.fromBtcAddress && $sbtcConfig.stxAddress && stxAddressOk;
$: showButton = $sbtcConfig.feeCalc.pegInFeeCalc.feeToApply > 0 && $sbtcConfig.fromBtcAddress && $sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount > 0 && stxAddressOk;

onMount(async () => {
  //setTimeout(function () {
    //registerTooltips();
  //}, 500)
})
</script>  
{#if errorReason}<div class="text-warning">{errorReason}</div>{/if}
<div class="mb-4"><UTXOSelection /></div>
{#if showStxAddress}
<div class="mb-4"><Principal on:principal_updated={principalUpdated} /></div>
{/if}
{#if showPegInAmount}
<div class="mb-4"><PegInAmount on:amount_updated={amountUpdated} /></div>
{/if}
{#if showButton}
<div class="row">
  <div class="col">
    <button class="btn btn-outline-info w-100" type="button" on:click={() => requestSignature()}>CONTINUE</button>
  </div>
</div>
{/if}

<style>
.row {
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>