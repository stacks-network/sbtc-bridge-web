<script lang="ts">
import { onMount } from 'svelte';
import { createEventDispatcher } from "svelte";
import { hex } from '@scure/base';
import { openPsbtRequestPopup } from '@stacks/connect'
import * as btc from '@scure/btc-signer';
import { hexToBytes } from "@stacks/common";
import { sendRawTxDirectBlockCypher, sendRawTransaction } from '$lib/bridge_api';
import { sbtcConfig } from '$stores/stores';
import { truncate, explorerBtcAddressUrl, convertOutputsBlockCypher } from "$lib/utils";
import { savePeginCommit } from '$lib/bridge_api';
import Button from '$lib/components/shared/Button.svelte';
import { fetchUtxoSet } from '$lib/bridge_api'
import type { PeginRequestI } from 'sbtc-bridge-lib'
import { buildOpDropTransaction, buildOpReturnTransaction } from 'sbtc-bridge-lib'
import CopyClipboard from '$lib/components/common/CopyClipboard.svelte';
import { makeFlash, appDetails } from "$lib/stacks_connect";
import Invoice from '../Invoice.svelte';
import { CONFIG } from '$lib/config';

export let peginRequest:PeginRequestI;
export let addressInfo:any;
export let amount:number;

const dispatch = createEventDispatcher();
let currentTx:string;
let errorReason: string|undefined;
let inited = false;

const getExplorerUrl = () => {
  return explorerBtcAddressUrl($sbtcConfig.sbtcContractData.sbtcWalletAddress)
}
const getAddress = (chars:number) => {
  try {
			return truncate($sbtcConfig.sbtcContractData.sbtcWalletAddress, chars).toUpperCase()
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
    appDetails: appDetails(),
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
    let txHex;
    try {
      tx.finalize();
      txHex = hex.encode(tx.extract());
      currentTx = txHex;
    } catch (err:any) {
      console.log('finalize error: ', err)
      errorReason = 'Unable to create the transaction - this can happen if your wallet is connected to a different account to the one your logged in with. Try hitting the \'back\` button, switching account in the wallet and trying again?';
      errorReason += '<br/>' + err.message;
      return;
    }
    //const txHex = tx.hex;
    //const txHex = hex.encode(tx.toBytes(true, tx.hasWitnesses));
    resp = await sendRawTxDirectBlockCypher(txHex);
    if (resp && resp.error) {
      resp = await sendRawTransaction({hex: txHex});
    }
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
        }
        await savePeginCommit(peginRequest);
      } catch (err) {
        console.log('Error saving pegin request', err)
        // duplicate.. ok to ignore
      }
    } else if (resp) {
      errMessage = (resp.error);
      broadcasted = false;
      errorReason = 'Unable to broadcast the transaction - <a href="https://github.com/Stacks-Builders/sbtc-bridge-web/issues" target="_blank">please report ths error</a>.'
    } else {
      broadcasted = false;
      errorReason = 'Unknown response from transaction broadcast - <a href="https://github.com/Stacks-Builders/sbtc-bridge-web/issues" target="_blank">please report ths error</a>.'
    }
  } catch (err:any) {
    console.log('Broadcast error: ', err)
    errorReason = 'Request already being processed with these details - change the amount to send another request.'
    //errorReason = errMessage + '. Unable to broadcast transaction - please try hitting \'back\' and refreshing the bitcoin input data.'
  }
}
const revealFeeWithGas = 5000
onMount(async () => {
  if ($sbtcConfig.userSettings.useOpDrop) {
    //testSignReveal(opDrop);
    const result = buildOpDropTransaction(CONFIG.VITE_NETWORK, amount, $sbtcConfig.keys.deposits, $sbtcConfig.btcFeeRates, addressInfo, $sbtcConfig.addressObject!.stxAddress, $sbtcConfig.sbtcContractData.sbtcWalletAddress, $sbtcConfig.addressObject!.cardinal, $sbtcConfig.addressObject!.ordinal);
    currentTx = hex.encode(result.tx.toPSBT());

  } else {
    try {
      const tx = buildOpReturnTransaction(CONFIG.VITE_NETWORK, amount, $sbtcConfig.btcFeeRates, addressInfo, $sbtcConfig.addressObject!.stxAddress,  $sbtcConfig.sbtcContractData!.sbtcWalletAddress, $sbtcConfig.addressObject!.cardinal);
      currentTx = hex.encode(tx.toPSBT());
    } catch (err:any) {
      console.log('Input error: ', err)
      errorReason = 'Not enough BTC in your wallet currently to cover the withdrawal fees.'
    }
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
    <Button darkScheme={false} label={'Back'} target={'back'} on:clicked={() => updateTransaction()}/>
    <Button darkScheme={true} label={'Sign & broadcast'} target={'sign'} on:clicked={() => requestSignPsbt()}/>
  </div>
  <div>{currentTx}</div>
  {:else if broadcasted}
  <div class="my-3 text-2xl">
    <p>View transaction on the <a class="text-warning-700" href={getExplorerUrl()} target="_blank" rel="noreferrer">Bitcoin network</a>.</p>
    {#if peginRequest.requestType === 'deposit'}
    <p>Once confirmed your sBTC will be deposited to your Stacks Wallet. </p>
    {:else}
    <p>Once confirmed your sBTC will be withdrawn from your Stacks Account and your Bitcoin returned. </p>
    {/if}
  </div>
  {:else if errorReason}
  <div class="my-5">
    {#if errorReason}<div class="text-warning-400"><p>{@html errorReason}</p></div>{/if}
  </div>
  <div class="">
    <Button darkScheme={false} label={'Start over'} target={'next'} on:clicked={() => updateTransaction()}/>
  </div>
  {/if}

</div>
{/if}
