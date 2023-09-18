<script lang="ts">
  import { onMount } from "svelte";
  import QrCode from "svelte-qrcode"
  import { Icon, ClipboardDocument } from "svelte-hero-icons"
  import { fmtSatoshiToBitcoin } from '$lib/utils'
  import FileIcon from '$lib/components/shared/FileIcon.svelte';
  import LinkToExplorer from '$lib/components/shared/LinkToExplorer.svelte';
  import CopyClipboard from '$lib/components/common/CopyClipboard.svelte';
  import { makeFlash } from "$lib/stacks_connect";
  import type { BridgeTransactionType } from 'sbtc-bridge-lib'
  import { truncate, explorerBtcAddressUrl } from '$lib/utils'
  import { sbtcConfig } from '$stores/stores'
  import { CONFIG } from '$lib/config';
	import PsbtDisplay from "$lib/components/dashboard/shared/PsbtDisplay.svelte";

  export let peginRequest:BridgeTransactionType;
  // NB Its possible the user paid a different amount to the amount they entered in the UI - ths takes the on chain amount first
  let amount = 0;
  let copied = false;
  let showPsbt = false;
  export let psbtB64:string|undefined;
  export let psbtHex:string|undefined;

  const copy = (ele:string) => {
    let nameProp = fmtSatoshiToBitcoin(amount);
    if (ele === 'address-field' && peginRequest.commitTxScript) nameProp = peginRequest.commitTxScript.address || '';
    let clippy = {
      target: document.getElementById('clipboard')!,
      props: { name: nameProp },
    }
    const app = new CopyClipboard(clippy);
    app.$destroy();
    makeFlash(document.getElementById(ele))
    copied = true;
  }
  const getAddress = (full:boolean):string => {
    if (full) {
      return (peginRequest.mode === 'op_drop') ? peginRequest.commitTxScript?.address || '' : peginRequest.fromBtcAddress || '';
    }
    try {
      return (peginRequest.mode === 'op_drop') ? truncate(peginRequest.commitTxScript?.address, 10) : truncate(peginRequest.fromBtcAddress, 10);
    } catch (err) {
      return 'not connected'
    }
  }

  const getFromAddress = (full:boolean):string => {
    if (full) {
      return peginRequest.fromBtcAddress;
    }
    try {
      return truncate(peginRequest.fromBtcAddress, 10);
    } catch (err) {
      return 'not connected'
    }
  }

  const paymentUri = () => {
    let uri = 'bitcoin:' + (peginRequest.mode === 'op_drop') ? peginRequest.commitTxScript!.address : peginRequest.fromBtcAddress;
    uri += '?amount=' + fmtSatoshiToBitcoin(amount)
    uri += '&label=' + encodeURI('Deposit BTC to mint sBTC on Stacks')
    return uri
  }

  export function allowShowPsbt() {
    return $sbtcConfig.userSettings.debugMode && !$sbtcConfig.userSettings.useOpDrop
  }

  export function requestShowPsbt() {
    showPsbt = !showPsbt
  }

  onMount(async () => {
    if (!peginRequest) throw new Error('No pegin request')
    amount = ((peginRequest.status === 2) ? peginRequest.vout?.value : peginRequest.amount) || 0;
  })
</script>

<div id="clipboard"></div>

<div class="flex w-full justify-between rounded-lg border-[0.2px] border-gray-400 p-3 gap-y-8 bg-gray-01">
    {#if peginRequest.mode === 'op_drop'}
  <div class="rounded-lg overflow-hidden mr-4 border border-gray-600">
    <QrCode value={paymentUri()} size={144} color={'#000'} background={'#fff'} />
  </div>
  {/if}

  {#if  peginRequest.requestType === 'deposit' || peginRequest.requestType === 'withdrawal'}
    <div class="flex-1 flex flex-col justify-between">
      <div class="flex items-center justify-between text-white pl-3 pr-2 py-2 gap-x-1 rounded-md border border-gray-800 bg-gray-1000/75">
        <div id="address-field" class="grow text-1xl p-1">{getAddress(false)}</div>
        <div class="flex items-center gap-2">
          <LinkToExplorer class="h-8 w-8 bg-black text-white rounded-md flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200" target={explorerBtcAddressUrl(getAddress(true))} />

          <button id="copy-address" type="button" on:click={() => copy('address-field')} class="h-8 w-8 bg-black text-white rounded-md flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200">
            <Icon src="{ClipboardDocument}" class="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div class="text-white leading-none mt-2">
        <div class="block font-bold text-5xl">{fmtSatoshiToBitcoin(amount)}</div>
        <div class="flex justify-between mt-2">
          <div class="font-light text-3xl">BTC</div>
          {#if allowShowPsbt()}
          <div class="">
            <button on:click={() => requestShowPsbt()} class="text-center focus:ring-4 focus:outline-none bg-black-01 justify-center text-base hover:bg-black dark:bg-gray-600 dark:hover:bg-gray-700 focus:ring-gray-300 dark:focus:ring-gray-800 inline-flex w-full items-center gap-x-1.5 px-4 py-2 font-normal text-yellow-400 rounded-xl border border-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">Show PSBT</button>
          </div>
          {/if}
        </div>
      </div>
    </div>
  {:else if peginRequest.requestType === 'reclaim'}
    <div class="w-full flex flex-col gap-y-0 ">
      <div class="flex items-center text-gray-300 px-1 gap-x-2 rounded-md border border-gray-700">
          <div id="address-field" class="grow ">{getFromAddress(false)}</div>
          <LinkToExplorer class="h-8 w-8 bg-black-01 text-white" target={explorerBtcAddressUrl(getFromAddress(true))} />
          <FileIcon on:clicked={() => copy('address-field')} class={'h-5 w-5 text-white'}/>
      </div>
      <div class="flex text-gray-300 text-2xl items-baseline">
        <div id="amount-field" class="-mt-1 p-0 text-5xl">{fmtSatoshiToBitcoin(amount)}</div>
      </div>
      <div class="flex text-gray-300 ">
        <div class="text-2xl font-extralight -mt-3 -mb-2 text-uppercase">BTC</div>
      </div>
    </div>
  {/if}
</div>
{#if showPsbt}
<div class="flex w-full flex-wrap align-baseline items-start">
  <PsbtDisplay {psbtB64} {psbtHex} />
</div>
{/if}
