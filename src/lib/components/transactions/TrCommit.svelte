<script lang="ts">
import { onMount } from 'svelte';
import { tsToDate, explorerBtcTxUrl, explorerBtcAddressUrl } from '$lib/utils'
import * as btc from '@scure/btc-signer';
import type { PeginRequestI } from 'sbtc-bridge-lib' 
import { parseDepositPayload } from 'sbtc-bridge-lib' 

export let peginRequest:PeginRequestI;
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
  <div class="col-12 mt-0 mb-2">Commitment Transaction: {tsToDate(peginRequest.updated)}</div>
  {#if peginRequest.btcTxid}
    <div class="col-md-2 col-sm-12 text-info">Sent To</div><div class="col-md-10 col-sm-12">
      <a href={explorerBtcAddressUrl(peginRequest.btcTxid)} target="_blank" rel="noreferrer">{(peginRequest.commitTxScript?.address)}</a>
    </div>
    <div class="col-md-2 col-sm-12 text-info">Amount</div><div class="col-md-10 col-sm-12">{peginRequest.vout?.value}</div>
    <div class="col-md-2 col-sm-12 text-info">Sent from</div><div class="col-md-10 col-sm-12">{peginRequest.senderAddress}</div>
    {#if peginRequest.status === 3}
    <div class="col-md-2 col-sm-12 text-info">Reclaimed</div><div class="col-md-10 col-sm-12">
      <a href={explorerBtcTxUrl(peginRequest.reclaim?.btcTxid)} target="_blank" rel="noreferrer">{(peginRequest.reclaim?.btcTxid)}</a>
    </div>
    {:else if peginRequest.status === 4}
    <div class="col-md-2 col-sm-12 text-info">Revealed</div><div class="col-md-10 col-sm-12">
      <a href={explorerBtcTxUrl(peginRequest.reveal?.btcTxid)} target="_blank" rel="noreferrer">{(peginRequest.reveal?.btcTxid)}</a>
    </div>
    {/if}
    {:else}
    <div class="col-md-2 col-sm-12 text-info">Sends To</div><div class="col-md-10 col-sm-12">
      <a href={explorerBtcAddressUrl(peginRequest.commitTxScript?.address || '')} target="_blank" rel="noreferrer">{(peginRequest.commitTxScript?.address)}</a>
    </div>
  {/if}
</div>
{/if}

<style>
</style>