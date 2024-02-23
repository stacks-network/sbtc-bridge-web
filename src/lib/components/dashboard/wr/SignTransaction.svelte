<script lang="ts">
import { onMount } from 'svelte';
import { createEventDispatcher } from "svelte";
import { hex, base64 } from '@scure/base';
import * as btc from '@scure/btc-signer';
import { openPsbtRequestPopup } from '@stacks/connect'
import { sbtcConfig } from '$stores/stores';
import { explorerBtcTxUrl } from "$lib/utils";
import { appDetails, getStacksNetwork, isLeather } from "$lib/stacks_connect";
import Invoice from '../shared/Invoice.svelte';
import { CONFIG } from '$lib/config';
import { isHiro } from '$lib/stacks_connect'
import { BitcoinNetworkType, signTransaction, type SignTransactionOptions } from 'sats-connect'
import type { Transaction, TransactionOutput, TransactionInput } from '@scure/btc-signer';
import { Tooltip } from 'flowbite-svelte';
import Banner from '$lib/components/shared/Banner.svelte';
import { broadcastDeposit, getPsbtForWithdrawal } from '$lib/revealer_api';
import type { PSBTHolder } from '$types/revealer_types';

export let withdrawalRecipient:string;
export let withdrawalAmountSats:number;
export let withdrawalSignature:string;
let paymentAddress = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal;
let paymentPublicKey = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0!;

const dispatch = createEventDispatcher();
let psbtHolder:PSBTHolder;
let transaction:Transaction;
let errorReason: string|undefined;
let inited = false;
let feeMultiplier = 1;
let broadcastedTxId:string;

const increaseFee = async(fm:number) => {
  errorReason = undefined
  feeMultiplier = fm
  psbtHolder = await getPsbtForWithdrawal(withdrawalRecipient, withdrawalSignature, withdrawalAmountSats, paymentPublicKey, paymentAddress, feeMultiplier)
}

const getExplorerUrl = () => {
  return explorerBtcTxUrl(broadcastedTxId)
}

export function isWalletAddress() {
  return withdrawalRecipient === $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal
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

const getBbMessage = () => {
  let msg = '<p>View transaction on the <a class="text-black underline" href=' + getExplorerUrl() + ' target="_blank" rel="noreferrer">Bitcoin network</a>.</p>'
  msg += '<p>Once confirmed your sBTC will be withdrawn from your Stacks Account and your Bitcoin returned. </p>'
  return msg
}


export async function signPsbtHiro() {
  if (!psbtHolder) return
  openPsbtRequestPopup({
    hex: psbtHolder?.hexPSBT,
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
function getPsbtTxOutputs() {
  const psbtTx:Transaction = btc.Transaction.fromRaw(hex.decode(psbtHolder.hexPSBT), {allowUnknowInput:true, allowUnknowOutput: true, allowUnknownOutputs: true, allowUnknownInputs: true})
  const outputsLength = psbtTx.outputsLength;
  const outputs:TransactionOutput[] = [];
  if (outputsLength === 0) return outputs;
  for (let i = 0; i < outputsLength; i++) {
    outputs.push(psbtTx.getOutput(i));
  }
  return outputs;
}
function getPsbtTxInputs() {
  const psbtTx:Transaction = btc.Transaction.fromRaw(hex.decode(psbtHolder.hexPSBT), {allowUnknowInput:true, allowUnknowOutput: true, allowUnknownOutputs: true, allowUnknownInputs: true})
  const inputsLength = psbtTx.inputsLength;
  const inputs:TransactionInput[] = [];
  if (inputsLength === 0) return inputs;
  for (let i = 0; i < inputsLength; i++) {
    inputs.push(psbtTx.getInput(i));
  }
  return inputs;
}

export async function signPsbtXverse() {
  const b64Tx = psbtHolder.b64PSBT //base64.encode(transaction.toPSBT());
  const inputs = []; //[{address: addressInfo.address, signingIndexes: [1] }];
  for (let index = 0; index < transaction.inputsLength; index++) {
    //const input = transaction.getInput(index);
    inputs.push({
      address: paymentAddress,
      signingIndexes: [0],
    })
  }
  const signPsbtOptions:SignTransactionOptions = {
    payload: {
      network: {
        type: (getStacksNetwork().isMainnet()) ? BitcoinNetworkType.Mainnet : BitcoinNetworkType.Testnet
      },
      message: 'Sign Transaction',
      psbtBase64: b64Tx,
      broadcast: true,
      inputsToSign: inputs,
    },
    onFinish: (result:any) => {
      broadcastedTxId = result.txId
    },
    onCancel: () => {
      return
    },
  }
  await signTransaction(signPsbtOptions);
}

const updateTimeline = (timeline:number) => {
    dispatch('update_transaction', { timeline });
}

const broadcast = async (signedPsbtHex:string) => {
  try {
    const result = await broadcastDeposit({
        recipient: $sbtcConfig.payloadDepositData.principal, 
        amountSats: $sbtcConfig.payloadDepositData.amountSats, 
        paymentPublicKey: $sbtcConfig.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0!, 
        signedPsbtHex, 
        maxFeeRate: 0 
    })
    broadcastedTxId = result.txId
  } catch (err:any) {
    console.log('Broadcast error: ', err)
    errorReason = err.message
  }
}

onMount(async () => {
  psbtHolder = await getPsbtForWithdrawal(withdrawalRecipient, withdrawalSignature, withdrawalAmountSats, paymentPublicKey, paymentAddress, feeMultiplier)
  if (!psbtHolder) {
    errorReason = '<p>Unable to create / sign transaction</p><p>You can change the bitcoin address on the previous screen to your Bitcoin Core or Electrum wallet and then copy paste the PSBT before signing and broadcasting the transaction.</p>'
  }
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
    {#if !broadcastedTxId}
    <p class="text-sm my-5 font-extralight text-gray-400">Sign and broadcast your transaction.</p>
    {/if}
  </div>
  <Invoice {psbtHolder} amountSats={withdrawalAmountSats} bitcoinAddress={paymentAddress} mode={'op_return'} requestType={'withdrawal'}/>
  {#if !broadcastedTxId}
  <div class="flex flex-col w-full">
    {#if isWalletAddress()}
    <div class="mt-6 w-full flex">
      <div class="grow"><button on:click={() => requestSignPsbt()} class=" w-full text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">Sign & broadcast</button></div>
    </div>
    <div class="flex mt-3 gap-x-3 justify-end text-md ">
      Fee {(psbtHolder.txFee || 0) * feeMultiplier} sats: &gt;&gt; 
      <a class="text-warning-400" href="/" on:click|preventDefault={() => increaseFee(1)}>1x</a>
      <a class="text-warning-400" href="/" on:click|preventDefault={() => increaseFee(2)}>2x</a>
      <a class="text-warning-400" href="/" on:click|preventDefault={() => increaseFee(4)}>4x</a>
      <a class="text-warning-400" href="/" on:click|preventDefault={() => increaseFee(10)}>10x</a>
      increase
    </div>
    {/if}
  </div>
  {:else}
  <div class="my-3 text-2xl w-full">
    <Banner bannerType={'info'} message={getBbMessage()}/>
  </div>
  <div class="mt-5">
    <button on:click={() => updateTimeline(1)} class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">Back</button>
  </div>
  {/if}
  {#if errorReason}
  <div class="mt-5 flex flex-col w-full">
    <Banner bannerType={'warning'} message={errorReason}/>
  </div>
  {/if}

</div>
{/if}
