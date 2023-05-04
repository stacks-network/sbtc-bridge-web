<script lang="ts">
import { onMount } from 'svelte';
import { hex } from '@scure/base';
import type { PeginRequestI } from '$types/pegin_request';
import * as btc from '@scure/btc-signer';
import { c32address } from 'c32check';
import { explorerBtcTxUrl } from '$lib/utils'

export let peginRequest:PeginRequestI;
let d1:string;
let d2:string;
let d3:string;
let cnameBuf:any;
let revealFee:number;
let stacksAddress:string;
let intid = false;
let scriptElements: Array<{key:string, value: any}> = [];

onMount(() => {
  const script = peginRequest.commitTxScript;
  for (const key1 in script) {
    scriptElements.push({key: key1, value: script[key1]})
  }

  try {
    const scriptDec = btc.Script.decode(hex.decode(script?.script as string));
    const d1U = hex.decode(script?.script as string);
    d2 = scriptDec[1].toString()
    const d3U = scriptDec[2].valueOf() as Uint8Array;
    d1 = (script?.script as string);
    d3 = hex.encode(d3U);
    const index = 0;
    const addr0 = parseInt(hex.encode(d1U.subarray(index + 1, index + 2)), 16);
    const addr1 = hex.encode(d1U.subarray(index + 2, index + 22));
    stacksAddress = c32address(addr0, addr1);
    cnameBuf = new TextDecoder().decode(d1U.subarray(index + 22, index + 56));
    revealFee = parseInt(hex.encode(d1U.subarray(index + 56, index + 84)), 16);
  } catch(err) {
    // 
  }
  intid = true;
})

</script>

{#if intid}
<div class="row text-small">
  <div class="col-12 mt-0 mb-2">Commitment Data</div>
  <!--
  {#each scriptElements as element}
  <div class="col-md-2 col-sm-12 text-info">{element.key}</div>
  <div class="col-md-10 col-sm-12">{element.value}</div>
  {/each}
  -->
  <div class="col-md-2 col-sm-12 text-info">Reclaim Address</div><div class="col-md-10 col-sm-12">{peginRequest.fromBtcAddress}</div>
  <div class="col-md-2 col-sm-12 text-info">Tx Id</div>
  <div class="col-md-10 col-sm-12">
    <a href={explorerBtcTxUrl(peginRequest.btcTxid)} target="_blank" rel="noreferrer">{(peginRequest.btcTxid)}</a>
  </div>
  <div class="col-md-2 col-sm-12 text-info">Descriptors</div>
  <div class="col-md-10 col-sm-12">{peginRequest.wallet}</div>
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