<script lang="ts">
import { onMount } from 'svelte';
import { createEventDispatcher } from "svelte";
import { hex, base64 } from '@scure/base';
import { openPsbtRequestPopup } from '@stacks/connect'
import { sbtcConfig } from '$stores/stores';
import { explorerBtcTxUrl } from "$lib/utils";
import { saveBridgeTransaction } from '$lib/bridge_api';
import { buildOpDropWithdrawTransaction, type BridgeTransactionType, buildOpReturnWithdrawTransaction } from 'sbtc-bridge-lib'
import { appDetails, getStacksNetwork, isLeather } from "$lib/stacks_connect";
import Invoice from '../shared/Invoice.svelte';
import { CONFIG } from '$lib/config';
import { isHiro } from '$lib/stacks_connect'
import { signTransaction, type SignTransactionOptions } from 'sats-connect'
import { broadcastTransaction } from '$lib/sbtc';
import type { Transaction, TransactionOutput, TransactionInput } from '@scure/btc-signer';
import { Icon, InformationCircle } from "svelte-hero-icons";
import { Tooltip } from 'flowbite-svelte';

export let peginRequest:BridgeTransactionType;
export let addressInfo:any;
let amount:number;

const dispatch = createEventDispatcher();
let transaction:Transaction;
let psbtB64:string;
let psbtHex:string;
let errorReason: string|undefined;
let inited = false;

const getExplorerUrl = () => {
  return explorerBtcTxUrl(peginRequest.btcTxid)
}
export function isWalletAddress() {
  return peginRequest.uiPayload.bitcoinAddress === $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal
}

export async function requestSignPsbt() {
  if (isHiro()) {
    signPsbtHiro()
  } else if (isLeather()) {
    signPsbtHiro()
  } else {
    signPsbtXverse()
  }
}
export async function signPsbtHiro() {
  const outputs:TransactionOutput[] = getPsbtTxOutputs(transaction);
  const inpouts:TransactionInput[] = getPsbtTxInputs(transaction);

  openPsbtRequestPopup({
    hex: psbtHex,
    appDetails: appDetails(),
    onFinish(data:any) {
      broadcast(data.hex);
    },
    onCancel() {
      console.log('User cancelled operation');
      return;
    }
  });
}
function getPsbtTxOutputs(psbtTx:Transaction) {
  const outputsLength = psbtTx.outputsLength;
  const outputs:TransactionOutput[] = [];
  if (outputsLength === 0) return outputs;
  for (let i = 0; i < outputsLength; i++) {
    outputs.push(psbtTx.getOutput(i));
  }
  return outputs;
}
function getPsbtTxInputs(psbtTx:Transaction) {
  const inputsLength = psbtTx.inputsLength;
  const inputs:TransactionInput[] = [];
  if (inputsLength === 0) return inputs;
  for (let i = 0; i < inputsLength; i++) {
    inputs.push(psbtTx.getInput(i));
  }
  return inputs;
}

export async function signPsbtXverse() {
  const b64Tx = base64.encode(transaction.toPSBT());
  const inputs = []; //[{address: addressInfo.address, signingIndexes: [1] }];
  for (let index = 0; index < transaction.inputsLength; index++) {
    //const input = transaction.getInput(index);
    inputs.push({
      address: peginRequest.uiPayload.bitcoinAddress,
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
      updateBridgeTransaction(response.txId)
    },
    onCancel: () => {
      return 
    },
  }
  await signTransaction(signPsbtOptions);
}

const updateTimeline = () => {
  dispatch('update_transaction', { success: true });
}

const updateBridgeTransaction = async (txid:string) => {
  if (!$sbtcConfig.userSettings.useOpDrop) {
    peginRequest.status = 5;
    peginRequest.btcTxid = txid;
  }
  await saveBridgeTransaction(peginRequest);
  broadcasted = true;
}

let broadcasted:boolean;
const broadcast = async (psbtHex:string) => {
  try {
      const result:any = await broadcastTransaction(psbtHex)
      if (peginRequest.mode === 'op_return') {
        peginRequest.status = 5;
      }
      peginRequest.btcTxid = (result.hash) ? result.hash : result.txid;
      await saveBridgeTransaction(peginRequest);
      broadcasted = true;
  } catch (err:any) {
    console.log('Broadcast error: ', err)
    errorReason = err.message
  }
}

const revealFeeWithGas = 5000;
onMount(async () => {
  amount = $sbtcConfig.payloadWithdrawData.amountSats;
  if (peginRequest.requestType === 'withdrawal') {
      if (peginRequest.mode === 'op_drop') {
        transaction = buildOpDropWithdrawTransaction(CONFIG.VITE_NETWORK, $sbtcConfig.payloadWithdrawData, addressInfo, $sbtcConfig.btcFeeRates, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress);
      } else {
        transaction = buildOpReturnWithdrawTransaction(CONFIG.VITE_NETWORK, $sbtcConfig.payloadWithdrawData, addressInfo, $sbtcConfig.btcFeeRates);
      }
  }
  if (transaction.inputsLength === 0) {
    errorReason = '<p>Unable to create a signable PSBT</p><p>Change the bitcoin address on the previous screen to your Bitcoin Core or Electrum wallet and follow the instructions here for signing and broadcasting the transaction.</p><p>Alternatively switch to OP_DROP in the settings menu to deposit using commit reveal.</p>'
  }
  psbtHex = hex.encode(transaction.toPSBT());
  psbtB64 = base64.encode(transaction.toPSBT());
  inited = true;
})

</script>
<div id="clipboard"></div>
<Tooltip class="w-auto !font-extralight !bg-black z-20" triggeredBy="#w-sign-label">
  Make sure your web wallet is connected to the account you are logged in with.
</Tooltip>

{#if inited}
<div class="flex w-full flex-wrap align-baseline items-start">
  <div class="">
    {#if !broadcasted}
    <p class="text-lg my-5 font-extralight text-gray-400">Sign and broadcast your transaction.</p>
    {/if}
  </div>
  <Invoice {peginRequest} {psbtHex} {psbtB64}/>
  {#if !broadcasted && !errorReason}
  <div class="flex w-full">
    <!--
    <div class="mt-6">
      <button on:click={() => updateTimeline()} class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">Back</button>
    </div>
    -->
    {#if isWalletAddress()}
    <div class="mt-6 w-full flex">
      <div class="grow"><button on:click={() => requestSignPsbt()} class=" w-full text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">Sign & broadcast</button></div>
      <!--<div class=""><Icon src="{InformationCircle}" mini class="ml-2 shrink-0 h-5 w-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50" aria-hidden="true" id="w-sign-label" /></div>-->
    </div>
    {/if}
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
  {:else if errorReason}
  <div class="my-5">
    {#if errorReason}<div class="text-warning-400"><p>{@html errorReason}</p></div>{/if}
  </div>
  <div class="mt-6">
    <button on:click={() => updateTimeline()} class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">Continue</button>
  </div>
  {/if}

</div>
{/if}
