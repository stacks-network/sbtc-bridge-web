<script lang="ts">
import { onMount } from 'svelte';
import { tsToDate } from '$lib/utils'
import * as btc from '@scure/btc-signer';
import type { PeginRequestI } from 'sbtc-bridge-lib' 
import { parseDepositPayload } from 'sbtc-bridge-lib' 
import TxExport from './TxExport.svelte';
import { sbtcConfig } from '$stores/stores'

export let peginRequest:PeginRequestI;
export let reclaimBtcTx:btc.Transaction;
export let revealBtcTx:btc.Transaction;
let stacksData:any;
let intid = false;
let showCommitDetails = false;

let reclaimString = '';
let revealString = '';
onMount(() => {
  try {
    const revealScript = btc.Script.decode(peginRequest.commitTxScript?.leaves[0].script);
    const reclaimScript = btc.Script.decode(peginRequest.commitTxScript?.leaves[1].script);
    for (let part of reclaimScript) {
      reclaimString += part + ' ';
    }
    
    let count = 0;
    for (let part of revealScript) {
      if (count === 0) {
        revealString += '<stacks_data> ';
      } else {
        revealString += part + ' ';
      }
      count++;
    }
    const amt = (peginRequest.vout && peginRequest.vout.value) ? peginRequest.vout.value : peginRequest.amount;
    stacksData = parseDepositPayload(revealScript[0].valueOf() as Uint8Array, amt);
  } catch(err) {
    console.log(err)
  }
  intid = true;
})

</script>

{#if intid}
<div class="row ">
  <!--
  {#each scriptElements as element}
  <div class="col-md-2 col-sm-12 text-info">{element.key}</div>
  <div class="col-md-10 col-sm-12">{element.value}</div>
  {/each}
  -->
  <div class="col-12 text-start"><span class="pointer" on:keypress on:click={() => showCommitDetails = !showCommitDetails}>show details</span></div>
  {#if showCommitDetails}
  <div class="mt-4 col-12">Reclaim Data</div>
  <div class="col-md-2 col-sm-12 text-info">Refunds to</div><div class="col-md-10 col-sm-12">{peginRequest.senderAddress}</div>
  {#if stacksData && $sbtcConfig.userSettings.debugMode}
  <div class="col-md-2 col-sm-12 text-info">Reclaim Pub Key</div><div class="col-md-10 col-sm-12">{peginRequest.reclaimPub}</div>
  {/if}
  {#if peginRequest.status < 3}
  <TxExport btcTx={reclaimBtcTx} txtype={'reclaim'} amount={peginRequest.vout?.value || 0}/>
  {/if}
  <div class="mt-4 col-12">Reveal Data</div>
  <div class="col-md-2 col-sm-12 text-info">Sbtc Address</div><div class="col-md-10 col-sm-12">{peginRequest.sbtcWalletAddress}</div>
  {#if stacksData && $sbtcConfig.userSettings.debugMode}
  <div class="col-md-2 col-sm-12 text-info">Reveal Pub Key</div><div class="col-md-10 col-sm-12">{peginRequest.revealPub}</div>
  {/if}
  <div class="mt-4 col-12 text-info"></div>
  {#if peginRequest.status < 3}
  <TxExport btcTx={revealBtcTx} txtype={'reveal'} amount={peginRequest.vout?.value || 0}/>
  {/if}
    {#if stacksData && $sbtcConfig.userSettings.debugMode}
    <div class="mt-4 col-12">Stacks Data</div>
    <div class="col-md-2 col-sm-12 text-info">Op Code</div><div class="col-md-10 col-sm-12">{stacksData.opcode}</div>
    <div class="col-md-2 col-sm-12 text-info">Address</div><div class="col-md-10 col-sm-12">{stacksData.stacksAddress}</div>
    <div class="col-md-2 col-sm-12 text-info">Contract Name</div><div class="col-md-10 col-sm-12">{stacksData.cname || 'n/a'}</div>
    <div class="col-md-2 col-sm-12 text-info">Memo</div><div class="col-md-10 col-sm-12">{stacksData.memo || 'n/a'}</div>
    <div class="col-md-2 col-sm-12 text-info">Reveal Fee</div><div class="col-md-10 col-sm-12">{stacksData.revealFee}</div>
    {/if}
  {/if}
</div>
{/if}

<style>
</style>