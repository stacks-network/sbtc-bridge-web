<script lang="ts">
import { onMount } from 'svelte';
import { fetchUTXOs, fetchAddressDetails, fetchFeeEstimate } from "$lib/utxos";
import { sbtcConfig } from '$stores/stores'
import type { SbtcConfig } from '$types/sbtc_config';
import FeeEstimation from "$lib/components/pegin/build/FeeEstimation.svelte";
import Principal from "$lib/components/pegin/build/Principal.svelte";
import PegInAmount from "$lib/components/pegin/build/PegInAmount.svelte";
import { PatchQuestion } from "svelte-bootstrap-icons";
import { Tooltip } from "bootstrap";
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();

let bitcoinAddress:string|undefined = $sbtcConfig.fromBtcAddress;
let stxAddress:string|undefined = $sbtcConfig.stxAddress;
let errorReason:string|undefined;
let stxAddressOk = true;

const requestSignature = () => {
  dispatch('request_signature');
}

const principalUpdated = (event:any) => {
  stxAddressOk = !event.detail.error;
}

const amountUpdated = () => {}

const configureUTXOs = async (force:boolean) => {
  errorReason = undefined;
  if (!bitcoinAddress || bitcoinAddress.length < 10) {
    errorReason = 'Invalid address';
    return;
  }
  if (!force && $sbtcConfig.fromBtcAddress === bitcoinAddress && $sbtcConfig.utxos) {
    return;
  }
  try {
    const conf:SbtcConfig = $sbtcConfig;
    let result = await fetchAddressDetails($sbtcConfig.network, bitcoinAddress);
    conf.fromBtcAddress = bitcoinAddress;
    conf.addressDetails = result;
    result = await fetchUTXOs($sbtcConfig.network, bitcoinAddress);
    console.log('utxos --> ', result);
    conf.utxos = result;
    sbtcConfig.update(() => conf);
    registerTooltips();
  } catch(err:any) {
    errorReason = err||'Error - is the address a valid';
  }
}

$: showUtxos = bitcoinAddress && $sbtcConfig.utxos?.length > 0;
$: showStxAddress = bitcoinAddress && $sbtcConfig.utxos?.length > 0;
$: showPegInAmount = bitcoinAddress && $sbtcConfig.stxAddress && stxAddressOk;
$: showButton = $sbtcConfig.pegInChangeAmount >= 0 && $sbtcConfig.feeToApply > 0 && bitcoinAddress && stxAddress && $sbtcConfig.pegInAmount > 0 && stxAddressOk;

onMount(async () => {
  setTimeout(function () {
    registerTooltips();
  }, 500)
})
const registerTooltips = () => {
  const tooltipTriggerList = window.document.querySelectorAll('[data-bs-toggle="tooltip-ftux"]');
  if (tooltipTriggerList) [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
}
</script>  
{#if errorReason}<div class="text-warning">{errorReason}</div>{/if}
<div class="row">
  <div class="col">
    <label for="transact-path" class="d-flex justify-content-between">
      <span>Bitcoin {$sbtcConfig.network} Address:</span>
      <span class="pointer text-info" data-bs-toggle="tooltip-ftux" data-bs-placement="top" data-bs-custom-class="custom-tooltip" title="Your bitcoin address. Funds you send from this wallet will be exchanged for sBTC"><PatchQuestion width={30} height={30}/></span>
    </label>
    <input type="text" id="from-address" class="form-control" autocomplete="off" bind:value={bitcoinAddress} on:input={() => configureUTXOs(false)} />
    {#if showUtxos}
    <div class="d-flex justify-content-between  text-info">
      <div>{$sbtcConfig.utxos?.length || 0} UTXO(s) Found</div>
      <div><a href="/" class="" on:click|preventDefault={() => configureUTXOs(true)}>reload</a></div>
    </div>
    {:else if bitcoinAddress}
      <div class="text-danger">No bitcoin (transactions outputs) found at this address - please use an address with some bitcoin balance.</div>
    {/if}
  </div>
</div>
{#if showStxAddress}
<Principal on:principal_updated={principalUpdated} />
{/if}
{#if showPegInAmount}
<PegInAmount on:amount_updated={amountUpdated} />
{/if}
<!--
{#if showPegInAmount && $sbtcConfig.pegInAmount > 0}
<FeeEstimation on:fee_selected={feeSelected}/>
{/if}
-->
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
  label {
    text-transform: capitalize;
  }
  </style>