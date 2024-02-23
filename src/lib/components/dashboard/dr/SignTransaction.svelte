<script lang="ts">
import { onMount } from 'svelte';
import { createEventDispatcher } from "svelte";
import { hex } from '@scure/base';
import { openPsbtRequestPopup } from '@stacks/connect'
import { sbtcConfig } from '$stores/stores';
import { explorerBtcTxUrl } from "$lib/utils";
import type { BridgeTransactionType } from 'sbtc-bridge-lib'
import { appDetails, getStacksNetwork, isLeather } from "$lib/stacks_connect";
import Invoice from '../shared/Invoice.svelte';
import { CONFIG } from '$lib/config';
import { isHiro } from '$lib/stacks_connect'
import { BitcoinNetworkType, signTransaction, type SignTransactionOptions } from 'sats-connect'
import { Tooltip } from 'flowbite-svelte';
import Banner from '$lib/components/shared/Banner.svelte';
import { broadcastDeposit, clientBroadcastDeposit, getPsbtForDeposit } from '$lib/revealer_api';
import type { PSBTHolder } from '$types/revealer_types';
import * as btc from '@scure/btc-signer';
import { Icon, InformationCircle } from 'svelte-hero-icons';

export let bitcoinAddress:string;
export let recipient:string;
export let amountSats:number;
export let paymentPublicKey:string;

const dispatch = createEventDispatcher();
let psbtHolder:PSBTHolder|undefined;
let errorReason: string|undefined;
let inited = false;
let broadcastedTxId:string;
let feeMultiplier = 1;

const getExplorerUrl = () => {
  return explorerBtcTxUrl(broadcastedTxId)
}
export function isWalletAddress() {
  return bitcoinAddress === $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal
}

export async function requestSignPsbt() {
  if (!psbtHolder) return
  if (isHiro()) {
    signPsbtHiro()
  } else if (isLeather()) {
    signPsbtHiro()
  } else {
    signPsbtXverse()
  }
}
export async function signPsbtHiro() {
  if (!psbtHolder) return
  openPsbtRequestPopup({
    hex: psbtHolder.hexPSBT,
    appDetails: appDetails(),
    async onFinish(data:any) {
      try {
        const result = await broadcastDeposit({
          recipient, 
          amountSats, 
          paymentPublicKey, 
          signedPsbtHex: data.hex, 
          maxFeeRate: 0 
        })
        broadcastedTxId = result.txId
      } catch(err:any) {
        errorReason = err.message
      }
    },
    onCancel() {
      console.log('User cancelled operation');
      return;
    }
  });
}

const getBbMessage = () => {
  let msg = '<p>View transaction on the <a class="text-black underline" href=' + getExplorerUrl() + ' target="_blank" rel="noreferrer">Bitcoin network</a>.</p>'
  msg += ' <p>Once confirmed your sBTC will be deposited to your Stacks Wallet. </p>'
  return msg
}

const increaseFee = async(fm:number) => {
  errorReason = undefined
  feeMultiplier = fm
  psbtHolder = await getPsbtForDeposit(recipient, amountSats, paymentPublicKey, bitcoinAddress, feeMultiplier)
}

export async function signPsbtXverse() {
  if (!psbtHolder) return
  const b64Tx = psbtHolder.b64PSBT;
  const inputs = []; //[{address: addressInfo.address, signingIndexes: [1] }];
  const tx = btc.Transaction.fromPSBT(hex.decode(psbtHolder.hexPSBT))
  for (let index = 0; index < tx.inputsLength; index++) {
    //const input = transaction.getInput(index);
    inputs.push({
      address: bitcoinAddress,
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
    onFinish: async(response:any) => {
      console.log('signPsbtOptions: ', response)
      const result = await clientBroadcastDeposit({
        recipient, 
        amountSats, 
        paymentPublicKey, 
        txId: response.txId,
      })
      broadcastedTxId = result.txId
    },
    onCancel: () => {
      return
    },
  }
  await signTransaction(signPsbtOptions);
}

const updateTimeline = (timeline:number) => {
    dispatch('update_timeline', { timeline });
}

onMount(async () => {
  try {
    psbtHolder = await getPsbtForDeposit(recipient, amountSats, paymentPublicKey, bitcoinAddress, feeMultiplier)
    if (!psbtHolder) {
      errorReason = '<p>Unable to create / sign transaction</p><p>You can change the bitcoin address on the previous screen to your Bitcoin Core or Electrum wallet and then copy paste the PSBT before signing and broadcasting the transaction.</p>'
    }
  } catch(err:any) {
    console.log(err)
    errorReason = '<p>Unable to create transaction please check you have enough funds in your wallet</p>'
  }
  inited = true;
})

</script>
<div id="clipboard"></div>

{#if inited}
<Tooltip class="w-auto !font-extralight !bg-black z-20" triggeredBy="#wallet-account-label">
  Your web wallet must be connected to the account you are logged in with.
</Tooltip>
<div class="flex w-full flex-wrap align-baseline items-start">
  <div class="">
    {#if !broadcastedTxId}
    <p class="text-sm my-5 font-extralight text-gray-400">Sign and broadcast your transaction
      <Icon src="{InformationCircle}" mini class="inline ml-2 shrink-0 h-5 w-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50" aria-hidden="true" id="wallet-account-label" />
    </p>
    {/if}
  </div>
  <Invoice {psbtHolder} {amountSats} {bitcoinAddress} mode={'op_return'} requestType={'deposit'}/>
  {#if !broadcastedTxId}
  <div class="flex  flex-col w-full gap-y-4">
    {#if psbtHolder}
    {#if isWalletAddress()}
    <div class="mt-6 w-full flex">
      <div class="grow"><button on:click={() => requestSignPsbt()} class=" w-full text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">Sign & broadcast</button></div>
    </div>
    <div class="flex gap-x-3 justify-end text-md ">
      Fee {(psbtHolder.txFee || 0) * feeMultiplier} sats: &gt;&gt; 
      <a class="text-warning-400" href="/" on:click|preventDefault={() => increaseFee(1)}>1x</a>
      <a class="text-warning-400" href="/" on:click|preventDefault={() => increaseFee(2)}>2x</a>
      <a class="text-warning-400" href="/" on:click|preventDefault={() => increaseFee(4)}>4x</a>
      <a class="text-warning-400" href="/" on:click|preventDefault={() => increaseFee(10)}>10x</a>
      increase
    </div>
    {/if}
    {:else}
    <div class="mt-6">
      <Banner bannerType={'info'} message={'Building transaction...'}/>
    </div>
    {/if}
  </div>
  {:else}
  <div class="my-3 text-2xl">
    <Banner bannerType={'info'} message={getBbMessage()}/>
  </div>
  <div class="mt-5">
    <button on:click={() => updateTimeline(1)} class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">Back</button>
  </div>
  {/if}
  {#if errorReason}
  <div class="mt-5 flex flex-col">
    <div class="">
      <Banner bannerType={'warning'} message={errorReason}/>
    </div>
  </div>
  {/if}

</div>
{/if}
