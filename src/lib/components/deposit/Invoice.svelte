<script lang="ts">
  import { onMount } from "svelte";
  import QrCode from "svelte-qrcode"
  import { Icon, ClipboardDocument } from "svelte-hero-icons"
  import { fmtSatoshiToBitcoin } from '$lib/utils'
  import FileIcon from '$lib/components/shared/FileIcon.svelte';
  import LinkToExplorer from '$lib/components/shared/LinkToExplorer.svelte';
  import CopyClipboard from '$lib/components/common/CopyClipboard.svelte';
  import { makeFlash } from "$lib/stacks_connect";
  import type { PeginRequestI } from 'sbtc-bridge-lib'
  import { truncate, explorerBtcAddressUrl } from '$lib/utils'
  import { sbtcConfig } from '$stores/stores'


  export let peginRequest:PeginRequestI;
  // NB Its possible the user paid a different amount to the amount they entered in the UI - ths takes the on chain amount first
  let amount = 0;
  let copied = false;

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
      return (peginRequest.mode === 'op_drop') ? peginRequest.commitTxScript?.address || '' : $sbtcConfig?.addressObject?.cardinal || '';
    }
    try {
      return (peginRequest.mode === 'op_drop') ? truncate(peginRequest.commitTxScript?.address, 10) : truncate($sbtcConfig?.addressObject?.cardinal, 10);
    } catch (err) {
      return 'not connected'
    }
  }

  const getFromAddress = (full:boolean):string => {
    if (full) {
      return $sbtcConfig?.addressObject?.cardinal || peginRequest.fromBtcAddress;
    }
    try {
      return truncate($sbtcConfig?.addressObject?.cardinal, 10);
    } catch (err) {
      return 'not connected'
    }
  }

  const getCardinal = () => {
    if ($sbtcConfig?.addressObject?.cardinal) {
        return $sbtcConfig?.addressObject?.cardinal
      } else {
        return 'not connected'
      }
  }

  const paymentUri = () => {
    let uri = 'bitcoin:' + peginRequest.commitTxScript!.address
    uri += '?amount=' + fmtSatoshiToBitcoin(amount)
    uri += '&label=' + encodeURI('Deposit BTC to mint sBTC on Stacks')
    return uri
  }

  onMount(async () => {
    if (!peginRequest) throw new Error('No pegin request')
    amount = ((peginRequest.status === 2) ? peginRequest.vout?.value : peginRequest.amount) || 0;
  })
</script>

<div id="clipboard"></div>

<div class="flex justify-between rounded-xl border-[0.2px] border-gray-400 p-3 gap-y-8 bg-gray-01">
  {#if peginRequest.requestType === 'withdrawal'}
    {#if peginRequest.mode === 'op_drop'}
    <div class="rounded-lg overflow-hidden mr-4 border border-gray-600">
      <QrCode value={paymentUri()} size={144} color={'#000'} background={'#fff'} />
    </div>
    {/if}
    <div class="w-full flex flex-col gap-y-0 ">
      <div class="flex items-center text-gray-300 px-1 text-lg">
        <p>Withdraw sBTC to your Bitcoin wallet</p>
      </div>

      <div class="flex items-center text-gray-300 px-1 gap-x-2 rounded-md border border-gray-700">
          <div id="address-field" class="grow ">{getAddress(false)}</div>
          <LinkToExplorer class="h-8 w-8 bg-black-01 text-white" target={explorerBtcAddressUrl(getAddress(true))} />
          <FileIcon on:clicked={() => copy('address-field')} class={'h-5 w-5 text-white'}/>
      </div>
      <div class="flex text-gray-300 text-2xl items-baseline">
        <div id="amount-field" class="-mt-1 p-0 text-5xl">{fmtSatoshiToBitcoin(amount)}</div>
        <FileIcon on:clicked={() => copy('amount-field')} class={'h-5 w-5 text-white'}/>
      </div>
      <div class="flex text-gray-300 ">
        <div class="text-2xl font-extralight -mt-3 -mb-2">BTC</div>
      </div>
    </div>
  {:else if peginRequest.requestType === 'deposit'}
    {#if peginRequest.mode === 'op_drop'}
    <div class="rounded-lg overflow-hidden mr-4 border border-gray-600">
      <QrCode value={paymentUri()} size={144} color={'#000'} background={'#fff'} />
    </div>
    {/if}
    <div class="flex-1 flex-1 flex flex-col justify-between">
      <div class="flex items-center justify-between text-white pl-3 pr-2 py-2 gap-x-1 rounded-md border border-gray-800 bg-gray-1000/75">
        <p id="address-field" class="text-xs font-medium">{getAddress(true)}</p>
        <div class="flex items-center gap-2">
          <!-- <LinkToExplorer class="h-8 w-8 bg-black text-white rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200" target={explorerBtcAddressUrl(getAddress(true))} />-->

          <button id="copy-address" type="button" on:click={() => copy('address-field')} class="h-8 w-8 bg-black text-white rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200">
            <Icon src="{ClipboardDocument}" class="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div class="text-white leading-none">
        <span class="block font-bold text-6xl">{fmtSatoshiToBitcoin(amount)}</span>
        <span class="font-light text-3xl">BTC</span>
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
