<script lang="ts">
import { onMount } from 'svelte';
import { tsToDate, truncate, explorerBtcTxUrl, explorerBtcAddressUrl } from '$lib/utils'
import * as btc from '@scure/btc-signer';
import type { PeginRequestI } from 'sbtc-bridge-lib' 
import { CONFIG } from '$lib/config';
import { addressFromPubkey, parseDepositPayload } from 'sbtc-bridge-lib' 
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
      if (typeof part === 'object') {
        reclaimString += addressFromPubkey(CONFIG.VITE_NETWORK, part) + ' ';
      } else {
        reclaimString += part + ' ';
      }
    }
    
    let count = 0;
    for (let part of revealScript) {
      if (count === 0) {
        revealString += '<stacks_data> ';
      } else {
        if (typeof part === 'object') {
          revealString += addressFromPubkey(CONFIG.VITE_NETWORK, part) + ' ';
        } else {
          revealString += part + ' ';
        }
      }
      count++;
    }
    const amt = (peginRequest.vout && peginRequest.vout.value) ? peginRequest.vout.value : peginRequest.amount;
    stacksData = parseDepositPayload(revealScript[0].valueOf() as Uint8Array, amt);
    /**
    const d1U = stacksData;
    d3 = hex.encode(stacksData);
    const index = 0;
    const addr0 = parseInt(hex.encode(d1U.subarray(index + 1, index + 2)), 16);
    const addr1 = hex.encode(d1U.subarray(index + 2, index + 22));
    stacksAddress = c32address(addr0, addr1);
    cnameBuf = new TextDecoder().decode(d1U.subarray(index + 22, index + 56));
    revealFee = parseInt(hex.encode(d1U.subarray(index + 56, index + 84)), 16);
    */
  } catch(err) {
    console.log(err)
  }
  intid = true;
})

</script>

{#if intid}
<div class="row ">
  <div class="col-12 mt-0 mb-2">Commitment Transaction: {tsToDate(peginRequest.updated)}</div>
  <!--
  {#each scriptElements as element}
  <div class="col-md-2 col-sm-12 text-info">{element.key}</div>
  <div class="col-md-10 col-sm-12">{element.value}</div>
  {/each}
  -->
  {#if peginRequest.btcTxid}
  <div class="col-md-2 col-sm-12 text-info">Sent To</div><div class="col-md-10 col-sm-12">
    <a href={explorerBtcTxUrl(peginRequest.btcTxid)} target="_blank" rel="noreferrer">{(peginRequest.commitTxScript?.address)}</a>
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
  <div class="col-12 text-start"><span class="pointer" on:keypress on:click={() => showCommitDetails = !showCommitDetails}>show details</span></div>
  {:else}
  <div class="col-md-2 col-sm-12 text-info">Sends To</div><div class="col-md-10 col-sm-12">
    <a href={explorerBtcAddressUrl(peginRequest.commitTxScript?.address || '')} target="_blank" rel="noreferrer">{(peginRequest.commitTxScript?.address)}</a>
  </div>
  {/if}
  
  {#if showCommitDetails}
  <div class="mt-4 col-12">Reclaim Data</div>
  <div class="col-md-2 col-sm-12 text-info">Reclaim Address</div><div class="col-md-10 col-sm-12">{peginRequest.fromBtcAddress}</div>
  {#if stacksData && $sbtcConfig.userSettings.debugMode}
  <div class="col-md-2 col-sm-12 text-info">Reclaim Pub Key</div><div class="col-md-10 col-sm-12">{peginRequest.reclaimPub}</div>
  <div class="col-md-2 col-sm-12 text-info">Reclaim Script</div><div class="col-md-10 col-sm-12">{reclaimString}</div>
  {/if}
  {#if peginRequest.status < 3}
  <TxExport btcTx={reclaimBtcTx} txtype={'reclaim'} amount={peginRequest.vout?.value || 0}/>
  {/if}
  <div class="mt-4 col-12">Reveal Data</div>
  <div class="col-md-2 col-sm-12 text-info">Sbtc Address</div><div class="col-md-10 col-sm-12">{peginRequest.sbtcWalletAddress}</div>
  {#if stacksData && $sbtcConfig.userSettings.debugMode}
  <div class="col-md-2 col-sm-12 text-info">Reveal Pub Key</div><div class="col-md-10 col-sm-12">{peginRequest.revealPub}</div>
  <div class="col-md-2 col-sm-12 text-info">Reveal Script</div><div class="col-md-10 col-sm-12">{revealString}</div>
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
  <!--
  <div class="col-md-2 col-sm-12 text-info">Stacks addr</div><div class="col-md-10 col-sm-12">{stacksAddress}</div>
  <div class="col-md-2 col-sm-12 text-info">Stacks contract</div><div class="col-md-10 col-sm-12">{cnameBuf}</div>
  <div class="col-md-2 col-sm-12 text-info">Reveal Fee</div><div class="col-md-10 col-sm-12">{revealFee}</div>
  <div class="col-md-2 col-sm-12 text-info">For</div><div class="col-md-10 col-sm-12">{peginRequest.amount} Sats</div>
  <div class="col-md-2 col-sm-12 text-info">SBTC Wallet</div><div class="col-md-10 col-sm-12">{peginRequest.sbtcWalletAddress}</div>
  <div class="col-12 mt-4 mb-2">Witness Data</div>
  <div class="col-md-2 col-sm-12 text-info">Full Script</div><div class="col-md-10 col-sm-12">{peginRequest.commitTxScript?.witnessScript}</div>
  <div class="col-md-2 col-sm-12 text-info">Witness Script</div><div class="col-md-10 col-sm-12">{d1}<br/>{d2}<br/>{d3}</div>
  <div class="col-12 mt-4 mb-2">Commit Transaction</div>
  <div class="col-md-2 col-sm-12 text-info">scriptpubkey_type</div><div class="col-md-10 col-sm-12">{peginRequest.vout?.scriptpubkey_type}</div>
  <div class="col-md-2 col-sm-12 text-info">scriptpubkey</div><div class="col-md-10 col-sm-12">{peginRequest.vout?.scriptpubkey}</div>
  <div class="col-md-2 col-sm-12 text-info">scriptpubkey_asm</div><div class="col-md-10 col-sm-12">{peginRequest.vout?.scriptpubkey_asm}</div>
  <div class="col-md-2 col-sm-12 text-info">scriptpubkey_address</div><div class="col-md-10 col-sm-12">{peginRequest.vout?.scriptpubkey_address}</div>
  <div class="col-md-2 col-sm-12 text-info">value</div><div class="col-md-10 col-sm-12">{peginRequest.vout?.value}</div>
  -->
</div>
{/if}

<style>
</style>