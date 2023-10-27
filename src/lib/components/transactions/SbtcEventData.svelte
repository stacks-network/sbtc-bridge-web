<script lang="ts">
	import { explorerBtcAddressUrl, explorerBtcTxUrl, explorerTxUrl } from '$lib/utils';
	import { fmtNumber, satsToBitcoin, truncate, type SbtcClarityEvent } from 'sbtc-bridge-lib';
import { onMount } from 'svelte';
	import ArrowUpRight from '../shared/ArrowUpRight.svelte';

export let sbtcEvent:SbtcClarityEvent;

const getType = (eventType:string|undefined) => {
    return (eventType === 'mint') ? 'deposit' : 'withdrawal'
}

onMount(() => {
})

</script>

<div class="break-words flex flex-col gap-y-3 w-full my-4 font-extralight text-gray-300">
  <div class="flex ">
    <div class="w-1/5">Contract Id:</div>
    <div class="w-4/5"><p class="">{sbtcEvent.contractId}</p></div>
  </div>
  <div class="flex">
    <div class="w-1/5">Bitcoin Tx:</div>
    <div class="w-4/5 "><a class="" href={explorerBtcTxUrl(sbtcEvent.bitcoinTxid.payload.value.split('x')[1])} target="_blank" rel="noreferrer">{(sbtcEvent.bitcoinTxid.payload.value)}</a></div>
  </div>
  <div class="flex">
    <div class="w-1/5">Stacks Tx:</div>
    <div class="w-4/5"><a class="" href={explorerTxUrl(sbtcEvent.txid)} target="_blank" rel="noreferrer">{(sbtcEvent.txid)}</a></div>
  </div>
  <div class="flex">
    <div class="w-1/5">Amount:</div>
    <div class="w-4/5">{satsToBitcoin(sbtcEvent.payloadData.amountSats)}</div>
  </div>
  <div class="flex">
    <div class="w-1/5">Type:</div>
    <div class="w-4/5">{getType(sbtcEvent.payloadData.eventType)}</div>
  </div>
  <div class="flex">
    <div class="w-1/5">Block height</div>
    <div class="w-4/5">{fmtNumber(sbtcEvent.payloadData.burnBlockHeight)}</div>
  </div>
  <div class="flex">
    <div class="w-1/5">Tx Index</div>
    <div class="w-4/5">{sbtcEvent.payloadData.txIndex}</div>
  </div>
</div>


