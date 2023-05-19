<script lang="ts">
import { onMount } from 'svelte';
import { createEventDispatcher } from "svelte";
import { hex, base64 } from '@scure/base';
import type { SigData } from 'sbtc-bridge-lib/src/index' 
import { openPsbtRequestPopup } from '@stacks/connect'
import * as btc from '@scure/btc-signer';
import { hexToBytes } from "@stacks/common";
import { sendRawTxDirectMempool } from '$lib/bridge_api';
import PegInfo from '$lib/components/common/PegInfo.svelte';
import { sbtcConfig } from '$stores/stores';
import { explorerBtcAddressUrl, keySetForFeeCalculation } from "$lib/utils";
import type { PegInTransactionI } from '$lib/domain/PegInTransaction';
import type { PegOutTransactionI } from '$lib/domain/PegOutTransaction';
import { savePeginCommit } from '$lib/bridge_api';

export let piTx: PegInTransactionI|PegOutTransactionI;

const dispatch = createEventDispatcher();
let sigData:SigData;
let currentTx:string;
let errorReason: string|undefined;

const getExplorerUrl = () => {
  return explorerBtcAddressUrl(piTx.pegInData.sbtcWalletAddress)
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
    console.log('sendRawTxDirectMempool: ', resp);
    if (resp && resp.tx) {
      const peginRequest = piTx.getOpDropPeginRequest(undefined)
      try {
        await savePeginCommit(peginRequest)
      } catch (err) {
        // duplicate.. ok to ignore
      }
      broadcasted = true;
    } else if (resp && resp.error) {
      errMessage = resp.error;
      broadcasted = false;
      errorReason = resp.error + ' Unable to broadcast transaction - please try hitting \'back\' and refreshing the bitcoin input data.'
    }
  } catch (err:any) {
    console.log('Broadcast error: ', err)
    errorReason = 'Request already being processed with these details - change the amount to send another request.'
    //errorReason = errMessage + '. Unable to broadcast transaction - please try hitting \'back\' and refreshing the bitcoin input data.'
  }
}
onMount(async () => {
	sigData = {
    webWallet: true,
		pegin: $sbtcConfig.pegIn,
		outputsForDisplay: piTx?.getOutputsForDisplay(),
		inputsForDisplay: piTx?.addressInfo.utxos
	}
  if ($sbtcConfig.userSettings.useOpDrop) {
    //testSignReveal(opDrop);
    const tx = piTx?.buildOpDropTransaction();
    currentTx = hex.encode(tx.toPSBT());
  } else {
    currentTx = hex.encode(piTx?.buildOpReturnTransaction().toPSBT());
  }
})
</script>

<section class="mb-3">
  <div class="d-flex justify-content-between">
    <h2>Step 2: Sign with Hiro Web Wallet</h2>
  </div>
</section>
<PegInfo fromBtcAddress={piTx.fromBtcAddress} stacksAddress={piTx.pegInData.stacksAddress} amount={piTx.pegInData.amount} {sigData} {currentTx} on:update_transaction={updateTransaction}/>
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
  {#if !errorReason}
  <div class="d-flex justify-content-center my-5">
    <button class={btnClass(false)} on:click={() => requestSignPsbt()}>Sign & Broadcast</button>
    <button class={btnClass(true)} on:click={() => updateTransaction()}>Back</button>
  </div>
  {/if}
  {/if}
  {#if $sbtcConfig.userSettings.debugMode && resp}
  <div class="my-5 text-center text-warning">
    <p>Response: {resp}</p>
  </div>
  {/if}
</section>

<style>
</style>