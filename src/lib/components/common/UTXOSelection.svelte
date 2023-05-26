<script lang="ts">
import { createEventDispatcher } from "svelte";
import { isSupported } from "$lib/utils";
import { onMount } from 'svelte';
import { addresses } from '$lib/stacks_connect'
import { truncate, explorerBtcTxUrl, explorerTxUrl } from '$lib/utils'
import { sbtcConfig } from '$stores/stores';

const dispatch = createEventDispatcher();

export let utxoData:{label:string,info:string,utxos:Array<any>,maxCommit:number,fromBtcAddress:string|undefined,numbInputs: number,network:string} = {
  label: '',
  info: '',
  utxos: [],
  maxCommit: 0,
  fromBtcAddress: undefined,
  numbInputs: 0,
  network: 'testnet'
};

let bitcoinAddress:string|undefined = utxoData.fromBtcAddress;
let errorReason:string|undefined;
let showUtxos:boolean;
let showDebugInfo = $sbtcConfig.userSettings.debugMode;

const useWebWallet = async () => {
  bitcoinAddress = addresses().cardinal;
  configureUTXOs(true);
}

const isWebWallet = async () => {
  return (bitcoinAddress === addresses().cardinal);
}

const configureUTXOs = async (force:boolean) => {
  errorReason = undefined;
  if (!bitcoinAddress) return;
  try {
    isSupported(bitcoinAddress);
  } catch (err:any) {
    //bitcoinAddress = addresses().cardinal;
    errorReason = 'Unsupported bitcoin address - the reclaim feature currently requires a taproot (segwit v1) bitcoin addresses.';
    return;
  }
  //if (utxoData.fromBtcAddress === bitcoinAddress && $sbtcConfig.utxos) {
    //return;
  //}
  try {
    await dispatch('utxo_updated', { errored: false, opCode: 'address-change', bitcoinAddress});
  } catch(err:any) {
    //errorReason = 'Insufficient balance - please use a different bitcoin address';
    return;
  }
}

onMount(async () => {
  configureUTXOs(true)
})

</script>


<div class="row">
  <div class="col">
    <label for="transact-path" class="d-flex justify-content-between">
      <span>{utxoData.label}</span>
      <span class="pointer text-info" data-bs-toggle="tooltip-ftux" data-bs-placement="top" data-bs-custom-class="custom-tooltip" title="Your bitcoin address. Funds you send from this wallet will be exchanged for sBTC"></span>
    </label>
    <input type="text" id="from-address" class="form-control" autocomplete="off" bind:value={bitcoinAddress} on:input={() => configureUTXOs(false)} />
    <div class="d-flex justify-content-between">
      <div class="text-small">{utxoData.info}</div>
    </div>
    {#if $sbtcConfig.userSettings.useOpDrop || utxoData.numbInputs > 0}
    <div class="text-small d-flex justify-content-between  text-info">
      <div class="" title={utxoData.numbInputs + ' unspent inputs with total value: ' + utxoData.maxCommit}>BTC Balance {utxoData.maxCommit} Sats.</div>
      {#if showDebugInfo}
      <div>
        <a href="/" class="text-white px-3 border-right" on:click|preventDefault={() => configureUTXOs(true)}>reload utxos</a>
        <a href="/" class="text-white ps-3 " on:click|preventDefault={() => showUtxos = !showUtxos}>show details</a>
      </div>
      {/if}
    </div>
    {:else}
      <div><span class="text-warning">Insufficient balance - please use a different bitcoin address</span></div>
    {/if}
    {#if bitcoinAddress && errorReason}
      <div>
        <div class="text-warning">{errorReason}
          <a href="/" class="text-underline text-warning" style="text-transform: uppercase" on:click|preventDefault={() => useWebWallet()}>reset address to your web wallet cardinal (taproot) address</a>
        </div>
      </div>
    {/if}
    {#if showDebugInfo}
    {#if showUtxos}
    <div class="mt-3 mb-4 mx-0 border p-3">
      <h6>UTXOs</h6>
      <div class="row">
        <div class="col-2"><span class="text-white">Sats.</span></div>
        <div class="col-2"><span class="text-white">Confs.</span></div>
        <div class="col-8"><span class="text-white">Txid</span></div>
      </div>
      {#each utxoData.utxos as utxo}
      <div class="row text-white text-small">
        <div class="col-2"><span class="">{utxo.value}</span></div>
        <div class="col-2"><span class={(utxo.tx.confirmations < 6) ? 'text-warning' : 'text-success'}>{utxo.tx.confirmations} {(utxo.tx.confirmations < 6) ? '(of 6)' : ''}</span></div>
        <div class="col-8"><span class=""><a class="text-white" href={explorerBtcTxUrl(utxo.txid)} target="_blank" rel="noreferrer">{truncate(utxo.txid, 16)} : {utxo.vout}</a></span></div>
      </div>
      {/each}
    </div>
    {/if}
    {/if}
</div>
</div>

<style>
</style>