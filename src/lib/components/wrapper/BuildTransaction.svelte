<script lang="ts">
import { onMount } from 'svelte';
import { sbtcConfig } from '$stores/stores'
import type { SbtcConfig } from '$types/sbtc_config';
import Principal from "../common/Principal.svelte";
import PegInAmount from "./PegInAmount.svelte";
import UTXOSelection from "$lib/components/common/UTXOSelection.svelte";
import { createEventDispatcher } from "svelte";
import PegInTransaction from '$lib/domain/PegInTransaction';
import type { PegInTransactionI } from '$lib/domain/PegInTransaction';

export let piTx:PegInTransactionI;
let componentKey3 = 0;

$: principalData = {
  label: 'Stacks Address (Account or Contract)',
  info: 'sBTC will be minted to this account or contract',
  currentAddress: piTx.pegInData.stacksAddress,
}
const amtData = () => {
  return {
    label: 'Amount (Satoshis)',
    info: 'The amount to wrap cannot exceed your balance less some satoshi to pay gas fees',
    pegAmount: (piTx.pegInData.amount) ? piTx.pegInData.amount : piTx.maxCommit() - piTx.fee,
    maxCommit: piTx.maxCommit(),
    change: piTx.getChange(),
    fee: piTx.fee,
    fees: piTx.fees,
  }
}

const network = import.meta.env.VITE_NETWORK;
$: utxoData = {
  label: 'Bitcoin Address',
  info: 'You\'ll send bitcoin from here to the sBTC wallet',
  maxCommit: (piTx.ready) ? piTx.maxCommit() : 0,
  fromBtcAddress: (piTx.ready) ? piTx.fromBtcAddress : undefined,
  numbInputs: (piTx.ready) ? piTx.addressInfo.utxos.length : 0,
  network
}

console.log('piTx:', piTx);
const dispatch = createEventDispatcher();
let ready = true;

let errorReason:string|undefined;
let stxAddressOk = true;
let amountOk = false;

const updateConfig = () => {
  const conf:SbtcConfig = $sbtcConfig;
  conf.pegInTransaction = piTx;
  sbtcConfig.update(() => conf);
}

const requestSignature = () => {
  dispatch('request_signature');
}

const amountUpdated = (event:any) => {
  errorReason = undefined;
  amountOk = !event.detail.error;
  if (event.detail.opCode === 'user') {
    try {
      piTx.setAmount(event.detail.newAmount)
    } catch (err:any) {
      errorReason = err;
      piTx.setAmount(piTx.maxCommit() - piTx.fee);
    }
  } else if (event.detail.opCode === 'prio') {
    piTx.setFeeRate(event.detail.newFeeRate)
    piTx.setAmount(piTx.maxCommit() - piTx.fee)
  }
  updateConfig();
  componentKey3++;
}

const principalUpdated = (event:any) => {
  errorReason = undefined;
  stxAddressOk = !event.detail.error;
  if (stxAddressOk) {
    piTx.setStacksAddress(event.detail.currentAddress)
    updateConfig();
  }
}

const utxoUpdated = async (event:any) => {
  errorReason = undefined;
  const data:any = event.detail;
  if (data.opCode === 'address-change') {
    piTx = await PegInTransaction.create(network, data.bitcoinAddress);
    piTx.calculateFees();
    updateConfig();
  }
}

$: showStxAddress = piTx.ready;
$: showAmount = piTx.ready && stxAddressOk;
$: showButton = piTx.ready && amountOk;

let inited = false;
onMount(async () => {
  if (!piTx.pegInData.stacksAddress) stxAddressOk = false;
  if (piTx.pegInData.amount! > 0) amountOk = true;
  if (piTx.ready) piTx.calculateFees();
  updateConfig();
  inited = true;
})


</script>  
{#if inited}
  {#if errorReason}<div class="text-warning">{errorReason}</div>{/if}
  <div class="mb-4"><UTXOSelection {utxoData} on:utxo_updated={utxoUpdated} /></div>
  {#if showStxAddress}
  <div class="mb-4"><Principal {principalData} on:principal_updated={principalUpdated} /></div>
  {/if}
  {#if showAmount}
  {#key componentKey3}
  <div class="mb-4"><PegInAmount amtData={amtData()} on:amount_updated={amountUpdated} /></div>
  {/key}
  {/if}
  {#if errorReason}<div class="text-warning">{errorReason}</div>{/if}
  {#if showButton}
  <div class="row">
    <div class="col">
      <button class="btn btn-outline-info w-100" type="button" on:click={() => requestSignature()}>CONTINUE</button>
    </div>
  </div>
  {/if}
{/if}
<!--
<div class="lobby bg-dark">
  <p class="text-white">Problem Connecting to APIs</p>
  <p><span class="nav-item">Status: Bridge API currently experiencing connectivity problems.
    We are already working on this.
  <span class="mt-5 text-warning">Please report this to the core engineering team!</span></p>
</div>
-->

<style>
.row {
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>