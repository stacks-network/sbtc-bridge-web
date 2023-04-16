<script lang="ts">
import { onMount } from 'svelte';
import { createEventDispatcher } from "svelte";
import CopyClipboard from '$lib/components/common/CopyClipboard.svelte';
import DebugPeginInfo from '$lib/components/common/DebugPeginInfo.svelte';
import type { ReclaimTransactionI } from '$lib/domain/ReclaimTransaction';
import { addresses } from '$lib/stacks_connect'
import { openPsbtRequestPopup } from '@stacks/connect'
import { hex, base64 } from '@scure/base';
import * as btc from '@scure/btc-signer';
import { hexToBytes } from "@stacks/common";
import { sendRawTxDirectMempool } from '$lib/bridge_api';

const dispatch = createEventDispatcher();
export let prTx:ReclaimTransactionI;
let copied = false;
let errorReason: string|undefined;

const signWithWebWallet = () => {
  currentTx = reclaimPsbtHex;
  openPsbtRequestPopup({
    hex: currentTx,
    appDetails: {
      name: 'My App',
      icon: window.location.origin + '/my-app-logo.svg',
    },
    onFinish(data:any) {
      broadcastTransaction(data.hex);
    },
    onCancel() {
      console.log('User cancelled operation');
      return;
    }
  });
}

let resp:any;
let broadcasted:boolean;
const broadcastTransaction = async (psbtHex:string) => {
  try {
    const tx = btc.Transaction.fromPSBT(hexToBytes(psbtHex));
    try {
      tx.finalize();
    } catch (err) {
      console.log('finalize error: ', err)
      errorReason = 'Unable to create the transaction - this can happen if your wallet is connected to a different account to the one your logged in with. Try hitting the \'back\` button, switching account in the wallet and trying again?';
      return;
    }
    const txHex = hex.encode(tx.toBytes(true, tx.hasWitnesses));
    currentTx = txHex;
    errorReason = undefined;
    resp = await sendRawTxDirectMempool(txHex);
    console.log(resp);
    if (!resp || resp.error) {
      broadcasted = false;
      errorReason = 'Unable to broadcast transaction - please try hitting \'back\' and refreshing the bitcoin input data.'
    } else {
      broadcasted = true;
    }
  } catch (err:any) {
    errorReason = err.message + '. Unable to broadcast transaction - please try hitting \'back\' and refreshing the bitcoin input data.'
  }
}

const copy = () => {
  const app = new CopyClipboard({
    target: document.getElementById('clipboard')!,
    props: { name: currentTx },
  });
  app.$destroy();
  copied = true;
}

const formats = ['Reclaim Bitcoin Core', 'Reclaim Electrum', 'Signer Bitcoin Core', 'Signer Electrum']
let currentTx:any;
let currentFmt:string;
const updateWallet = (newWallet:string) => {
  copied = false;
  if (newWallet === 'reclaimHex') { currentTx = reclaimPsbtHex; currentFmt = formats[1]; }
  else if (newWallet === 'reclaimB64') { currentTx = reclaimPsbtB64; currentFmt = formats[0]; }
  else if (newWallet === 'signerHex') { currentTx = signerPsbtHex; currentFmt = formats[3]; }
  else if (newWallet === 'signerB64') { currentTx = signerPsbtB64; currentFmt = formats[2]; }
  copy();
}

let showDetails = true;
let signWeb = false;
let txReclaim:any;
let txSigner:any;
let reclaimPsbtB64:string;
let reclaimPsbtHex:string;
let signerPsbtB64:string;
let signerPsbtHex:string;
onMount(async () => {
  txReclaim = prTx.buildReclaimTransaction()
  reclaimPsbtB64 = base64.encode(txReclaim.toPSBT());
  reclaimPsbtHex = hex.encode(txReclaim.toPSBT());
  txSigner = prTx.buildSignerTransaction()
  signerPsbtB64 = base64.encode(txSigner.toPSBT());
  signerPsbtHex = hex.encode(txSigner.toPSBT());

  currentTx = reclaimPsbtHex;
  currentFmt = formats[1]
  copy();

  if (addresses().cardinal === prTx.fromBtcAddress) {
    signWeb = true;
  }
})
</script>

<div id="clipboard"></div>

<section class="mb-3">
  <div class="d-flex justify-content-between">
    <h2>Sign & Broadcast</h2>
  </div>
  <div class="my-3 d-flex justify-content-start">
    <div>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <span class="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Choose Format - {currentFmt}
          </span>
          <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/" on:click|preventDefault={() => updateWallet('reclaimHex')}>Reclaim Electrum</a></li>
            <li><a class="dropdown-item" href="/" on:click|preventDefault={() => updateWallet('reclaimB64')}>Reclaim Bitcoin Core</a></li>
            <li><a class="dropdown-item" href="/" on:click|preventDefault={() => updateWallet('signerB64')}>Signer Bitcoin Core</a></li>
            <li><a class="dropdown-item" href="/" on:click|preventDefault={() => updateWallet('signerHex')}>Signer Electrum</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-12">PSBT - {currentFmt}</div>
    <div class="col-12"><textarea rows="8" style="width: 100%; padding: 10px;">{currentTx}</textarea></div>
  </div>

  {#if signWeb}
  <div class="row">
    <div class="col-12">Sign with <a href="/" on:click|preventDefault={() => signWithWebWallet()}>web wallet</a></div>
  </div>
  {/if}
  <DebugPeginInfo tx={prTx} peginRequest={undefined}/>


  <input bind:value={currentTx} style="visibility:hidden;" />
</section>

<style>
</style>