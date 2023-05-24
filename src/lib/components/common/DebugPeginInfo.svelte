<script lang="ts">
import { sbtcConfig } from '$stores/stores';
import { hex, base64 } from '@scure/base';
import * as btc from '@scure/btc-signer';
import type { PeginRequestI } from 'sbtc-bridge-lib' 
import { getTestAddresses } from 'sbtc-bridge-lib' 
import { CONFIG } from '$lib/config';

export let tx:any;
let peginRequest:PeginRequestI = tx.getOpDropPeginRequest();

let showDebugInfo = $sbtcConfig.userSettings.debugMode;
let showDetails = false;

$: decodedScript = () => {
  if (peginRequest && peginRequest.commitTxScript && peginRequest.commitTxScript.witnessScript) {
    const script = btc.OutScript.decode(hex.decode(peginRequest.commitTxScript.witnessScript as string))
    if (script.type === 'ms' || script.type === 'tr_ms' || script.type === 'tr_ns') return script.type + ':' + script.pubkeys;
    if (script.type === 'wsh') return script.type + ':' + script.hash;
    if (script.type === 'wpkh') return script.type + ':' + script.hash;
    if (script.type === 'pkh') return script.type + ':' + script.hash;
    if (script.type === 'tr') return script.type + ':' + script.pubkey;
    if (script.type === 'unknown') return script.type + ':' + script.script;
    else return script.type + ':' + script;
  }
}
</script>
{#if showDebugInfo}
<div class="">
  <div class="row">
    <div class="col-12"><a href="/" on:click|preventDefault={() => showDetails = !showDetails}>Show transaction details</a></div>
  </div>
  {#if showDetails}
  <div class="row">
    <div class="col-2">From</div><div class="col-10">{tx.fromBtcAddress}</div>
    <div class="col-2">Amount</div><div class="col-10">{tx.pegInData.amount}</div>
    {#if peginRequest}
    <div class="col-2">Txid</div><div class="col-10">{peginRequest.btcTxid}</div>
    <div class="col-2">Stacks Address</div><div class="col-10">{peginRequest.stacksAddress}</div>
    <div class="col-2">SBTC Wallet</div><div class="col-10">{peginRequest.sbtcWalletAddress}</div>
    <div class="col-2">Pegin Status</div><div class="col-10">{peginRequest.status}</div>
    <div class="col-2">Script Hash</div><div class="col-10">{peginRequest.commitTxScript?.script}</div>
    <div class="col-2">Payment Type</div><div class="col-10">{peginRequest.commitTxScript?.paymentType}</div>
    <div class="col-2">Witness Script</div><div class="col-10">{peginRequest.commitTxScript?.witnessScript}</div>
    <div class="col-2">Decoded Script</div><div class="col-10">{decodedScript()}</div>
    {/if}
  </div>
  {/if}
</div>
{/if}

<style>
</style>