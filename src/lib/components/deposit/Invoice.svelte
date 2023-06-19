<script lang="ts">
import { onMount } from "svelte";
import QrCode from "svelte-qrcode"
import { fmtSatoshiToBitcoin } from '$lib/utils'
import FileIcon from '$lib/components/shared/FileIcon.svelte';
import ArrowUpRight from '$lib/components/shared/ArrowUpRight.svelte';
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
    return (peginRequest.mode === 'op_drop') ? truncate(peginRequest.commitTxScript?.address, 10).toUpperCase() : truncate($sbtcConfig?.addressObject?.cardinal, 10).toUpperCase();
	} catch (err) {
    return 'not connected'
  }
}

const getFromAddress = (full:boolean):string => {
  if (full) {
    return $sbtcConfig?.addressObject?.cardinal || peginRequest.fromBtcAddress;
  }
  try {
    return truncate($sbtcConfig?.addressObject?.cardinal, 10).toUpperCase();
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

<div class="qr-frame p-3 flex flex-col md:flex-row gap-y-8 w-full align-baseline items-start md:items-end">
  {#if peginRequest.requestType === 'withdrawal'}
    {#if peginRequest.mode === 'op_drop'}
    <div class="pe-5">
      <QrCode value={paymentUri()} padding={'40px'} color={'#000'} background={'#fff'} />
    </div>
    {/if}
    <div class="w-full flex flex-col gap-y-0 ">
      <div class="flex items-center text-gray-300 px-1 text-lg">
        <p>Withdraw sBTC to your Bitcoin wallet</p>
      </div>

      <div class="flex items-center text-gray-300 px-1 gap-x-2 rounded-md border border-gray-700">
          <div id="address-field" class="grow ">{getAddress(false)}</div>
          <ArrowUpRight class="-mr-0.5 h-8 w-8 bg-black-01 text-white" target={explorerBtcAddressUrl(getAddress(true))} />
          <FileIcon on:clicked={() => copy('address-field')} class={'-mr-0.5 h-5 w-5 text-white'}/>
      </div>
      <div class="flex text-gray-300 text-2xl items-baseline">
        <div id="amount-field" class="-mt-1 p-0 text-5xl">{fmtSatoshiToBitcoin(amount)}</div>
        <FileIcon on:clicked={() => copy('amount-field')} class={'-mr-0.5 h-5 w-5 text-white'}/>
      </div>
      <div class="flex text-gray-300 ">
        <div class="text-2xl font-extralight -mt-3 -mb-2">BITCOIN</div>
      </div>
    </div>
  {:else if peginRequest.requestType === 'deposit'}
    {#if peginRequest.mode === 'op_drop'}
    <div class="pe-5">
      <QrCode value={paymentUri()} padding={'40px'} color={'#000'} background={'#fff'} />
    </div>
    {/if}
    <div class="w-full flex flex-col gap-y-0 ">
      <div class="flex items-center text-gray-300 px-1 gap-x-2 rounded-md border border-gray-700">
          <div id="address-field" class="grow ">{getAddress(false)}</div>
          <ArrowUpRight class="-mr-0.5 h-8 w-8 bg-black-01 text-white" target={explorerBtcAddressUrl(getAddress(true))} />
          <FileIcon on:clicked={() => copy('address-field')} class={'-mr-0.5 h-5 w-5 text-white'}/>
      </div>
      <div class="flex text-gray-300 text-2xl items-baseline">
        <div id="amount-field" class="-mt-1 p-0 text-5xl">{fmtSatoshiToBitcoin(amount)}</div>
        <FileIcon on:clicked={() => copy('amount-field')} class={'-mr-0.5 h-5 w-5 text-white'}/>
      </div>
      <div class="flex text-gray-300 ">
        <div class="text-2xl font-extralight -mt-3 -mb-2">BITCOIN</div>
      </div>
    </div>
  {:else if peginRequest.requestType === 'reclaim'}
    <div class="w-full flex flex-col gap-y-0 ">
      <div class="flex items-center text-gray-300 px-1 gap-x-2 rounded-md border border-gray-700">
          <div id="address-field" class="grow ">{getFromAddress(false)}</div>
          <ArrowUpRight class="-mr-0.5 h-8 w-8 bg-black-01 text-white" target={explorerBtcAddressUrl(getFromAddress(true))} />
          <FileIcon on:clicked={() => copy('address-field')} class={'-mr-0.5 h-5 w-5 text-white'}/>
      </div>
      <div class="flex text-gray-300 text-2xl items-baseline">
        <div id="amount-field" class="-mt-1 p-0 text-5xl">{fmtSatoshiToBitcoin(amount)}</div>
        <FileIcon on:clicked={() => copy('amount-field')} class={'-mr-0.5 h-5 w-5 text-white'}/>
      </div>
      <div class="flex text-gray-300 ">
        <div class="text-2xl font-extralight -mt-3 -mb-2">BITCOIN</div>
      </div>
    </div>
  {/if}
</div>
