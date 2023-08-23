<script lang="ts">
import { onMount } from 'svelte';
import { createEventDispatcher } from "svelte";
import { hex, base64 } from '@scure/base';
import { openPsbtRequestPopup } from '@stacks/connect'
import * as btc from '@scure/btc-signer';
import { hexToBytes } from "@stacks/common";
import { sendRawTxDirectBlockCypher, sendRawTransaction } from '$lib/bridge_api';
import { sbtcConfig } from '$stores/stores';
import { explorerBtcTxUrl, convertOutputsBlockCypher } from "$lib/utils";
import { savePeginCommit } from '$lib/bridge_api';
import Button from '$lib/components/shared/Button.svelte';
import type { PeginRequestI } from 'sbtc-bridge-lib'
import { buildOpReturnDepositTransaction, buildOpReturnWithdrawTransaction, buildOpDropDepositTransaction, buildOpDropWithdrawTransaction } from 'sbtc-bridge-lib'
//import {buildOpReturnDepositTransaction  } from '$lib/stacks_connect_bug'
import { appDetails, getStacksNetwork } from "$lib/stacks_connect";
import Invoice from '../Invoice.svelte';
import { CONFIG } from '$lib/config';
import { isHiro } from '$lib/stacks_connect'
import { signTransaction, type InputToSign, type SignTransactionOptions } from 'sats-connect'
	import PsbtDisplay from './PsbtDisplay.svelte';

export let peginRequest:PeginRequestI;
export let addressInfo:any;
export let amount:number;

const dispatch = createEventDispatcher();
let transaction:btc.Transaction;
let psbtB64:string;
let psbtHex:string;
let currentTx:string;
let errorReason: string|undefined;
let inited = false;
let showPsbt = false;

const getExplorerUrl = () => {
  return explorerBtcTxUrl(peginRequest.btcTxid)
}
export function isWalletAddress() {
  return peginRequest.fromBtcAddress === $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal
}

export function requestShowPsbt() {
  showPsbt = !showPsbt
}

export async function requestSignPsbt() {
  if (isHiro()) {
    signPsbtHiro()
  } else {
    signPsbtXverse()
  }
}

export async function signPsbtHiro() {
  openPsbtRequestPopup({
    hex: psbtHex,
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

export async function signPsbtXverse() {
  const b64Tx = base64.encode(transaction.toPSBT());
  const inputs = []; //[{address: addressInfo.address, signingIndexes: [1] }];
  for (let index = 0; index < transaction.inputsLength; index++) {
    //const input = transaction.getInput(index);
    inputs.push({
      address: peginRequest.fromBtcAddress,
      signingIndexes: [0],
    })
  }
  const signPsbtOptions:SignTransactionOptions = {
    payload: {
      network: {
        type: (getStacksNetwork().isMainnet()) ? 'Mainnet' : 'Testnet'
      },
      message: 'Sign Transaction',
      psbtBase64: b64Tx,
      broadcast: true,
      inputsToSign: inputs,
    },
    onFinish: (response:any) => {
      console.log('signPsbtOptions: ', response)
      updatePeginRequest(response.txId)
    },
    onCancel: () => {
      return 
    },
  }
  await signTransaction(signPsbtOptions);
}

const updateTransaction = () => {
  dispatch('update_transaction', { success: true });
}

const updatePeginRequest = async (txid:string) => {
  if (!$sbtcConfig.userSettings.useOpDrop) {
    peginRequest.status = 5;
    peginRequest.btcTxid = txid;
  }
  await savePeginCommit(peginRequest);
  broadcasted = true;
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

const revealFeeWithGas = 5000;
onMount(async () => {
  if (peginRequest.requestType === 'withdrawal') {
      if ($sbtcConfig.userSettings.useOpDrop) {
        transaction = buildOpDropWithdrawTransaction(CONFIG.VITE_NETWORK, revealFeeWithGas, $sbtcConfig.sigData, addressInfo, $sbtcConfig.keys, $sbtcConfig.btcFeeRates, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress, $sbtcConfig.sbtcContractData.sbtcWalletAddress, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0!);
      } else {
        transaction = buildOpReturnWithdrawTransaction(CONFIG.VITE_NETWORK, amount, $sbtcConfig.sigData, addressInfo, $sbtcConfig.keys, $sbtcConfig.btcFeeRates, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress, $sbtcConfig.sbtcContractData.sbtcWalletAddress, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0!);
      }
  } else {
    if ($sbtcConfig.userSettings.useOpDrop) {
      transaction = buildOpDropDepositTransaction(CONFIG.VITE_NETWORK, amount, $sbtcConfig.btcFeeRates, addressInfo, peginRequest.commitTxScript!.address!, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0!);
    } else {
      transaction = buildOpReturnDepositTransaction(CONFIG.VITE_NETWORK, amount, $sbtcConfig.btcFeeRates, addressInfo, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress, $sbtcConfig.sbtcContractData.sbtcWalletAddress, peginRequest.fromBtcAddress, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0!)
    }
  }
  if (transaction.inputsLength === 0) {
    errorReason = '<p>Unable to create a signable PSBT</p><p>Change the bitcoin address on the previous screen to your Bitcoin Core or Electrum wallet and follow the instructions here for signing and broadcasting the transaction.</p><p>Alternatively switch to OP_DROP in the settings menu to deposit using commit reveal.</p>'
  }
  currentTx = hex.encode(transaction.toPSBT());
  psbtHex = hex.encode(transaction.toPSBT());
  psbtB64 = base64.encode(transaction.toPSBT());
  inited = true;
})
</script>
<div id="clipboard"></div>

{#if inited}
<div class="flex w-full flex-wrap align-baseline items-start">
  <div class="">
    {#if !broadcasted}
    <p class="text-lg mb-5">Sign and broadcast your transaction.</p>
    {/if}
  </div>
  <Invoice {peginRequest} />
  {#if showPsbt}
    <div class="flex w-full flex-wrap align-baseline items-start">
      <PsbtDisplay {psbtB64} {psbtHex} />
    </div>
  {/if}
  {#if !broadcasted && !errorReason}
  <div class="mt-8 flex">
    <Button darkScheme={false} label={'Back'} target={'back'} on:clicked={() => updateTransaction()}/>
    {#if isWalletAddress()}
    <Button darkScheme={true} label={'Sign & broadcast'} target={'sign'} on:clicked={() => requestSignPsbt()}/>
    {/if}
    <Button darkScheme={true} label={'Show PSBT'} target={'export'} on:clicked={() => requestShowPsbt()}/>
  </div>
  <!--<div>{currentTx}</div>-->
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
