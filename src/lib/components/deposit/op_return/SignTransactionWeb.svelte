<script lang="ts">
import { onMount } from 'svelte';
import { createEventDispatcher } from "svelte";
import { hex, base64 } from '@scure/base';
import type { SigData } from 'sbtc-bridge-lib' 
import { openPsbtRequestPopup } from '@stacks/connect'
import * as btc from '@scure/btc-signer';
import { hexToBytes } from "@stacks/common";
import { sendRawTxDirectBlockCypher } from '$lib/bridge_api';
import { sbtcConfig } from '$stores/stores';
import { truncate, explorerBtcAddressUrl, fmtSatoshiToBitcoin, convertOutputsBlockCypher } from "$lib/utils";
import type { PegInTransactionI } from '$lib/domain/PegInTransaction';
import type { PegOutTransactionI } from '$lib/domain/PegOutTransaction';
import { savePeginCommit } from '$lib/bridge_api';
import Button from '$lib/components/shared/Button.svelte';
import type { PeginRequestI } from 'sbtc-bridge-lib' 
import CopyClipboard from '$lib/components/common/CopyClipboard.svelte';
import { makeFlash } from "$lib/stacks_connect";
import Invoice from '../Invoice.svelte';

export let piTx: PegInTransactionI|PegOutTransactionI;
export let peginRequest:PeginRequestI;

const dispatch = createEventDispatcher();
let sigData:SigData;
let currentTx:string;
let errorReason: string|undefined;
let cypherResp: any|undefined;
let inited = false;

const getExplorerUrl = () => {
  return explorerBtcAddressUrl(piTx.pegInData.sbtcWalletAddress)
}
const getAddress = (chars:number) => {
  try {
			return truncate(piTx.pegInData.sbtcWalletAddress, chars).toUpperCase()
		} catch (err) {
      return 'not connected'
    }
	}

  const copy = (ele:string, val:string) => {
  let clippy = {
    target: document.getElementById('clipboard')!,
    props: { name: val },
  }
  const app = new CopyClipboard(clippy);
  app.$destroy();
  makeFlash(document.getElementById(ele))
}

export async function requestSignPsbt() {
  console.log(currentTx);
  openPsbtRequestPopup({
    hex: currentTx,
    appDetails: {
      name: 'sBTC Bridge',
      icon: window.location.origin + '/img/icon_sbtc.png',
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
    resp = await sendRawTxDirectBlockCypher(txHex);
    console.log('sendRawTxDirectBlockCypher: ', resp);
    if (resp && resp.tx) {
      broadcasted = true;
      try {
        if (!$sbtcConfig.userSettings.useOpDrop) {
          //peginRequest = piTx.getOpDropPeginRequest()
          //const peginRequest:PeginRequestI = piTx.getOpReturnPeginRequest()
          peginRequest.status = 5;
          peginRequest.btcTxid = (resp.tx.hash) ? resp.tx.hash : resp.tx.txid;
          convertOutputsBlockCypher(resp.tx, peginRequest)
          cypherResp = resp;
        }
        await savePeginCommit(peginRequest);
      } catch (err) {
        console.log('Error saving pegin request', err)
        // duplicate.. ok to ignore
      }
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
  inited = true;
})
</script>
<div id="clipboard"></div>

{#if inited}
<div class="flex w-full flex-wrap align-baseline items-start px-5">
  <div class="">
    {#if !broadcasted}
    <p class="text-lg">Sign and broadcast your transaction.</p>
    {/if}
  </div>
  <Invoice {peginRequest} />
  {#if !broadcasted && !errorReason}
  <div class="mt-8 flex">
    <Button darkScheme={false} label={'Make changes'} target={'back'} on:clicked={() => updateTransaction()}/>
    <Button darkScheme={true} label={'Sign & broadcast'} target={'sign'} on:clicked={() => requestSignPsbt()}/>
  </div>
  {:else if broadcasted}
  <div class="my-3 text-2xl">
    <p>View transaction on the <a class="text-warning-700" href={getExplorerUrl()} target="_blank" rel="noreferrer">Bitcoin network</a>.</p>
    {#if peginRequest.requestType === 'deposit'}
    <p>Once confirmed your sBTC will be deposited to your Stacks Wallet. </p>
    {:else}
    <p>Once confirmed your sBTC will be withdrawn from your Stacks Account and your Bitcoin returned. </p>
    {/if}
  </div>
  <Button darkScheme={false} label={'Start over'} target={'next'} on:clicked={() => updateTransaction()}/>
  {:else if errorReason}
  <div class="">
    {#if errorReason}<div class="text-warning-400"><p>{errorReason}</p></div>{/if}
  </div>
  {/if}

</div>
{/if}
