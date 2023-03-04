<script lang="ts">
import { onMount } from 'svelte';
import { createEventDispatcher } from "svelte";
import { ArrowUp, ArrowDown } from "svelte-bootstrap-icons";
import WalletHelp from '$lib/components/wallets/WalletHelp.svelte';
import { hex } from '@scure/base';

const dispatch = createEventDispatcher();

export let sigData: { tx: any; outputsForDisplay: Array<any>; inputsForDisplay: Array<any>; };
let hexTx:string;
let psbt:Uint8Array;
let showTx = false;

const updateTransaction = () => {
  dispatch('update_transaction', { success: true });
}

onMount(async () => {
  try {
    psbt = sigData.tx.toPSBT()
    hexTx = hex.encode(psbt);
  } catch(err:any) {
    dispatch('update_transaction', { success: false, reason: err.message });
  }
})
</script>
        

<div class="row">
  <div class="col">
    <div class="d-flex justify-content-between">
      <h2>Step 2: Sign Transaction</h2>
      <div>
        <span class="mx-3"><a href="/" on:click|preventDefault={() => showTx = ! showTx}>{#if showTx}<ArrowUp/>{:else}<ArrowDown/>{/if} show tx</a></span>
        <span><a href="/" on:click|preventDefault={() => updateTransaction()}>back</a></span>
      </div>
    </div>
    
    {#if showTx && hexTx}
    <h4>Transaction Inputs</h4>
    {#each sigData.inputsForDisplay as input}
    <div class="info-panel text-small mx-1 row bg-light my-1 py-1 text-dark">
      <div class="col-10">{input.txid}:<span class="text-dark">{input.vout}</span></div>
      <div class="col-2">{input.value}</div>
    </div>
    {/each}
    <h4>Transaction Outputs</h4>
    {#each sigData.outputsForDisplay as output, i}
    <div class="info-panel text-small mx-1 row bg-light my-1 py-1 text-danger">
      <div class="col-2">{#if typeof output.amount === 'number'}Output {i + 1}{/if}</div>
      <div class="col-8">
        {#if output.address}<span class="text-dark">{output.address}</span>{/if}
        {#if output.script}<span class="text-dark">{output.script}</span>{/if}
      </div>
      <div class="col-2">{#if output.amount}<span class="text-dark">{output?.amount}</span>{/if}</div>
    </div>
    {/each}
    {/if}
  </div>
</div>
<div class="row">
  <div class="col">
    <p>This transaction can be read by your wallet where you can provide your digital signature
      and broadcast to the Bitcoin network.</p>
    <p class="text-center"><span class="text-warning">Always double check your wallet displays the correct recipient address and amount.</span></p>
    <textarea rows="6" style="padding: 10px; width: 100%;" readonly>{hexTx}</textarea>
  </div>
</div>
<WalletHelp />
      
  <style>
  .row {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  </style>