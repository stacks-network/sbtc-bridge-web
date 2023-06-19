<script lang="ts">
import { addresses } from '$lib/stacks_connect'
import { createEventDispatcher } from "svelte";
//import { ArrowUp, ArrowDown, CheckCircle } from "svelte-bootstrap-icons";
import { sbtcConfig } from '$stores/stores';

const dispatch = createEventDispatcher();
export let fromBtcAddress:string;
export let stacksAddress:string|undefined;
export let amount:number;
export let sigData:any;
export let currentTx:string;
const webWallet = fromBtcAddress === addresses().ordinal;
let showTx = false;
let showHex = false;

const updateTransaction = () => {
  dispatch('update_transaction', { success: true });
}


</script>

<section class="">

  <div class="row">
    <div class="col-4">Request</div>
    <div class="col-8">{#if $sbtcConfig.pegIn}Deposit{:else}Withdraw{/if} Bitcoin</div>
  </div>
  <div class="row">
    <div class="col-4">From</div>
    <div class="col-8">{fromBtcAddress}</div>
  </div>
  <div class="row">
    <div class="col-4">Wallet</div>
    <div class="col-8">{(webWallet) ? 'Stacks Web Wallet' : 'Other Wallet'}</div>
  </div>
  <div class="row">
    <div class="col-4">Stacks Address</div>
    <div class="col-8">{stacksAddress}</div>
  </div>
  <div class="row">
    <div class="col-4">Amount</div>
    <div class="col-8">{amount}</div>
  </div>
  <div class="row">
    <div class="col-4">Details</div>
    <div class="col-8">
      <div class="">
        <span class="mx-1"><a class="text-info" href="/" on:click|preventDefault={() => {showHex = !showHex; showTx = false;}}>{#if showHex}^{:else}&lt;{/if} show raw tx</a></span>
        <span class="mx-1 me-4"><a class="text-info"  href="/" on:click|preventDefault={() => {showTx = !showTx; showHex = false;}}>{#if showTx}^{:else}&lt;{/if} show tx details</a></span>
        <span><a class="text-info"  href="/" on:click|preventDefault={() => updateTransaction()}>back</a></span>
      </div>    
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      {#if showTx && sigData}
      <section class="mb-4">
        <h4>Transaction Inputs</h4>
      {#each sigData.inputsForDisplay as input}
      <div class="info-panel text-small mx-1 row bg-light my-1 py-1 text-dark">
        <div class="col-10">{input.txid}:<span class="text-dark">{input.vout}</span></div>
        <div class="col-2">{input.value}</div>
      </div>
      {/each}
      </section>
    <section>
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
    </section>
      {:else if showHex}
        <textarea rows="6" style="padding: 10px; width: 100%;" readonly>{currentTx}</textarea>
      {/if}
    </div>
  </div>
</section>

<style>
</style>