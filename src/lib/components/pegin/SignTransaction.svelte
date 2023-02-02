<script lang="ts">
import { onMount } from 'svelte';
import { Buffer } from "buffer/";
import { fetchPubkey, fetchAccount } from "$lib/utxos";
import { transactionHex, transactionB64, transactionData } from "$lib/psbt";
import { sbtcConfig } from '$stores/stores'
import { Tooltip } from "bootstrap";
import { createEventDispatcher } from "svelte";
import type { Psbt } from 'bitcoinjs-lib';
import { ArrowUp, ArrowDown } from "svelte-bootstrap-icons";
import WalletHelp from '$lib/components/wallets/WalletHelp.svelte';

const dispatch = createEventDispatcher();
let showTx = false;

const updateTransaction = () => {
  dispatch('update_transaction');
}
const convertUint8ToHex = (bytes: Uint8Array) => {
  let hex = Buffer.from(bytes).toString('hex');
  return hex;
}

let tzPubKey:any;
let tzAccount:any;
const fetchTzAccount = async () => {
  tzAccount = await fetchAccount(tzAccount.payload.path);
  console.log('tzAccount: ', tzAccount)
}
const fetchTzPubKey = async () => {
  tzPubKey = await fetchPubkey();
  console.log('tzPubKey: ', tzPubKey)
}

let psbt:Psbt|undefined;
let hexTx:string|undefined;
let b64Tx:string|undefined;
onMount(async () => {
  psbt = await transactionData($sbtcConfig);
  hexTx = await transactionHex(psbt);
  b64Tx = await transactionB64(psbt);
  const tzId = window.TrezorConnect;
  //if (!tzId) {
    window.TrezorConnect.init({
      lazyLoad: true, // this param will prevent iframe injection until TrezorConnect.method will be called
      manifest: {
          email: 'mike@claritylab.dev',
          appUrl: 'http://localhost:8080',
      },
    });
  //}
  console.log('TrezorConnect:', window.TrezorConnect)
  console.log('tzPubKey:', tzPubKey)
  //setTimeout(function () {
    //registerTooltips();
  //}, 500)
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
  </div>
</div>
    
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between">
          <span class="mx-3"><a href="/" on:click|preventDefault={() => fetchTzAccount()}>select account</a></span>
          <span class="mx-3"><a href="/" on:click|preventDefault={() => fetchTzPubKey()}>fetch pubkey</a></span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        {tzPubKey}
      </div>
    </div>
    <div class="row">
  <div class="col">
    {#if showTx && psbt}
    <h4>Transaction Inputs</h4>
    {#each $sbtcConfig.utxos as input}
    <div class="mx-1 row bg-light my-1 py-3 text-info">
      <div class="col-10">{input.txid}:{input.vout}</div>
      <div class="col-2">{input.value}</div>
      <!--<div>From Addr: {convertToString(input.hash)}</div>-->
    </div>
    {/each}
    <h4>Transaction Outputs</h4>
    {#each psbt?.txOutputs as output, i}
    <div class="mx-1 row bg-light my-1 py-3 text-info">
      <div class="col-2">Output {i + 1}</div>
      <div class="col-8">
          {#if i === 0}<span class="text-info">OP_RETURN:</span> {convertUint8ToHex(output.script)}
          {:else if i === 1 && psbt?.txOutputs.length > 2} <span class="text-info">To:</span> {$sbtcConfig.sbtcWalletAddress}
          {:else}<span class="text-info">Change:</span> {$sbtcConfig.fromBtcAddress}
          {/if}
      </div>
      <div class="col-2"><span class="text-info"></span> {output.value}</div>
      <!--<div>From Addr: {convertToString(input.hash)}</div>-->
    </div>
    {/each}
    {/if}
  </div>
</div>
<div class="row">
  <div class="col">
    <p>This peg in transaction can be read by your wallet where you can provide your digital signature
      and broadcast to the Bitcoin network.</p>
    <p class="text-center"><span class="text-warning">Always double check your wallet displays the correct recipient address and amount.</span></p>
    <textarea rows="6" style="padding: 10px; width: 100%;" readonly>{hexTx}</textarea>
  </div>
</div>
<div class="row">
  <div class="col">
    <textarea rows="6" style="padding: 10px; width: 100%;" readonly>{b64Tx}</textarea>
  </div>
</div>
<WalletHelp />
      
  <style>
  .row {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  </style>