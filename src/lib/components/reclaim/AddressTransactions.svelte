<script lang="ts">
import { createEventDispatcher } from "svelte";
import { isSupported } from "$lib/utils";
import { onMount } from 'svelte';
import { addresses } from '$lib/stacks_connect'
import { truncate, explorerBtcTxUrl } from '$lib/utils'

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

const hiroWallet = async () => {
  bitcoinAddress = addresses().ordinal;
  configureUTXOs(true);
}

const configureUTXOs = async (force:boolean) => {
  errorReason = undefined;
  if (!bitcoinAddress) return;
  try {
    isSupported(bitcoinAddress!);
  } catch (err:any) {
    bitcoinAddress = undefined;
    errorReason = 'Insufficient balance - please use a different bitcoin address';
    return;
  }
  //if (utxoData.fromBtcAddress === bitcoinAddress && $sbtcConfig.utxos) {
    //return;
  //}
  try {
    await dispatch('utxo_updated', { errored: false, opCode: 'address-change', bitcoinAddress});
  } catch(err:any) {
    errorReason = 'Insufficient balance - please use a different bitcoin address';
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
    <div class="text-small">{utxoData.info}</div>
    {#if utxoData.numbInputs > 0}
    <!--
    <div class="text-small d-flex justify-content-between  text-info">
      <div class="" title={utxoData.numbInputs + ' unspent inputs with total value: ' + utxoData.maxCommit}>BTC Balance {utxoData.maxCommit} Sats.</div>
      <div>
        <a href="/" class="text-white px-3 border-right" on:click|preventDefault={() => hiroWallet()}>hiro wallet</a>
        <a href="/" class="text-white px-3 border-right" on:click|preventDefault={() => configureUTXOs(true)}>refresh</a>
        <a href="/" class="text-white ps-3 " on:click|preventDefault={() => showUtxos = !showUtxos}>details</a>
      </div>
    </div>
    -->
    {:else}
      <div><span class="text-warning">Insufficient balance - please use a different bitcoin address</span></div>
    {/if}
    {#if bitcoinAddress && errorReason}
      <div><span class="text-warning">{errorReason}</span></div>
    {/if}
    {#if showUtxos}
    <div class="mt-3 mb-4 mx-0 px-0">
    <div class="row">
      <div class="col-2"><span class="text-warning">Vout</span></div>
      <div class="col-2"><span class="text-warning">Sats.</span></div>
      <div class="col-2"><span class="text-warning">Confs.</span></div>
      <div class="col-6"><span class="text-warning">Txid</span></div>
    </div>
    {#each utxoData.utxos as utxo}
    <div class="row text-white text-small">
      <div class="col-2"><span class="">{utxo.vout}</span></div>
      <div class="col-2"><span class="">{utxo.value}</span></div>
      <div class="col-2"><span class={(utxo.tx.confirmations < 6) ? 'text-warning' : 'text-success'}>{utxo.tx.confirmations} {(utxo.tx.confirmations < 6) ? '(of 6)' : ''}</span></div>
      <div class="col-6"><span class=""><a href={explorerBtcTxUrl(utxo.txid)} target="_blank" rel="noreferrer">{truncate(utxo.txid, 10)}</a></span></div>
    </div>
    {/each}
    </div>
    {/if}
</div>
</div>

<style>
</style>