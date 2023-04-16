<script lang="ts">
import { onMount } from 'svelte';
import { createEventDispatcher } from "svelte";
import { hex } from '@scure/base';
import type { SigData } from '$types/sig_data';
import { openPsbtRequestPopup } from '@stacks/connect'
import * as btc from '@scure/btc-signer';
import { hexToBytes } from "@stacks/common";
import { sendRawTxDirectMempool } from '$lib/bridge_api';
import PegInfo from '$lib/components/common/PegInfo.svelte';
import { sbtcConfig } from '$stores/stores';
import { explorerBtcAddressUrl } from "$lib/utils";

const dispatch = createEventDispatcher();
export let sigData:SigData;
export let pegInfo:any;
let currentTx = hex.encode(sigData.opReturnTx.toPSBT(2));
let errorReason: string|undefined;
let successReason: string|undefined;

const from = ($sbtcConfig.pegIn) ? $sbtcConfig?.pegInTransaction?.fromBtcAddress : $sbtcConfig?.pegOutTransaction?.fromBtcAddress;
const getExplorerUrl = () => {
  return explorerBtcAddressUrl(from!)
}

export async function requestSignPsbt() {
  console.log(currentTx);
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

const updateTransaction = () => {
  dispatch('update_transaction', { success: true });
}

const btnClass = (bb:boolean) => {
  if ($sbtcConfig.pegIn) {
    return (bb) ? 'mx-2 w-25 btn btn-outline-info' : 'mx-2 w-25 btn btn-info';
  } else {
    return (bb) ? 'mx-2 w-25 btn btn-outline-warning' : 'mx-2 w-25 btn btn-warning';
  }
}

let resp:any;
let broadcasted:boolean;
const broadcastTransaction = async (psbtHex:string) => {
  let errMessage = undefined;
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
    if (resp && resp.error) {
      errMessage = resp.error;
      broadcasted = false;
      errorReason = resp.error + ' Unable to broadcast transaction - please try hitting \'back\' and refreshing the bitcoin input data.'
    } else {
      broadcasted = true;
    }
  } catch (err:any) {
    errorReason = errMessage + '. Unable to broadcast transaction - please try hitting \'back\' and refreshing the bitcoin input data.'
  }
}

onMount(async () => {
  //requestSignPsbt();
})
</script>

<section class="mb-3">
  <div class="d-flex justify-content-between">
    <h2>Step 2: Sign with Hiro Web Wallet</h2>
  </div>
</section>
<PegInfo {pegInfo} {sigData} {currentTx} on:update_transaction={updateTransaction}/>
<section>
  {#if errorReason}
  <div class="my-5 text-center text-danger">
    <p>{errorReason}</p>
  </div>
  {/if}
  {#if broadcasted}
  <div class="my-5 text-center text-warning">
    <p>Your transaction has been sent to the <a href={getExplorerUrl()} target="_blank" rel="noreferrer">Bitcoin network</a>.
    </p>
    <p>Once confirmed your sBTC will be minted to your Stacks Wallet. 
    </p>
  </div>
  {:else}
  <div class="d-flex justify-content-center my-5">
    <button class={btnClass(false)} on:click={() => requestSignPsbt()}>Sign & Broadcast</button>
    <button class={btnClass(true)} on:click={() => updateTransaction()}>Back</button>
  </div>
  {/if}
</section>

<style>
</style>