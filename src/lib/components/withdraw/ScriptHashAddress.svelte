<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import QrCode from "svelte-qrcode"
  import { fmtSatoshiToBitcoin } from '$lib/utils'
  import Button from '$lib/components/shared/Button.svelte';
  import FileIcon from '$lib/components/shared/FileIcon.svelte';
  import ArrowUpRight from '$lib/components/shared/ArrowUpRight.svelte';
  import CopyClipboard from '$lib/components/common/CopyClipboard.svelte';
  import { makeFlash } from "$lib/stacks_connect";
  import type { PeginRequestI } from 'sbtc-bridge-lib' 
  import { truncate, explorerAddressUrl, explorerBtcAddressUrl } from '$lib/utils'
  import { Icon } from "svelte-hero-icons"
  import { sbtcConfig } from '$stores/stores'
  
  export let peginRequest:PeginRequestI;
  // NB Its possible the user paid a different amount to the amount they entered in the UI - ths takes the on chain amount first
  let amount = 0;
  let copied = false;
  const dispatch = createEventDispatcher();
  
  const doClicked = (event:any, target:string) => {
    const menuTarget = { offsetTop: event.target.offsetTop, offsetLeft: event.target.offsetLeft };
    dispatch('clicked', { target, menuTarget });
  }
  
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
  const getAddress = (chars:number) => {
    try {
        return truncate(peginRequest.commitTxScript?.address, chars).toUpperCase()
      } catch (err) {
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
  
  <div class="flex w-full flex-wrap align-baseline items-start">
      <div class="">
        <p>Scan this QR code or copy the address and amount into your Bitcoin wallet to send Bitcoin.</p>
      </div>
      <div class="qr-frame p-3 flex flex-col md:flex-row gap-y-8 w-full">
        <div class="pe-5">
          <QrCode value={paymentUri()} padding={'40px'} color={'#000'} background={'#fff'} />
        </div>
        <div class="grow flex flex-col gap-4 mb-5">
          <div class="flex items-center text-gray-300 p-1 gap-x-1 rounded-md border border-gray-700">
              <div id="address-field" class="grow ">{getAddress(12)}</div>
              <ArrowUpRight class="-mr-0.5 h-5 w-5 text-white" target={explorerBtcAddressUrl(peginRequest?.commitTxScript?.address || '')} />
              <FileIcon on:clicked={() => copy('address-field')} class={'-mr-0.5 h-5 w-5 text-white'}/>
          </div>
          <div class="flex text-gray-300 text-2xl items-center">
            <div id="amount-field" class="grow ">{fmtSatoshiToBitcoin(amount)}</div>
            <FileIcon on:clicked={() => copy('amount-field')} class={'-mr-0.5 h-5 w-5 text-white'}/>
          </div>
          <div class="flex text-gray-300 text-2xl">
            <div class="grow ">BITCOIN</div>
          </div>
        </div>
      </div>
      <div class="mt-5 flex">
        <Button darkScheme={false} label={'Make changes'} target={'back'} on:clicked />
        <Button darkScheme={true} label={'Check status'} target={'status-check'} on:clicked />
      </div>
  </div>
  