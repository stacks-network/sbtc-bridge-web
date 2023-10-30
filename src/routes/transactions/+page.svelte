<script lang="ts">
import { onMount } from 'svelte';
import { page } from '$app/stores';
import { COMMS_ERROR, explorerTxUrl } from '$lib/utils.js'
import { truncate, explorerBtcTxUrl } from '$lib/utils'
import { findSbtcEventByBitcoinAddress, findSbtcEventByStacksAddress, findSbtcEventsByPage } from '$lib/bridge_api'
import { fmtNumber, type SbtcClarityEvent } from 'sbtc-bridge-lib'
import { goto } from '$app/navigation'
import { satsToBitcoin } from '$lib/utils'
import ArrowUpRight from '$lib/components/shared/ArrowUpRight.svelte';
import Paging from '$lib/components/transactions/Paging.svelte';
import { Toggle } from 'flowbite-svelte'
	import { sbtcConfig } from '$stores/stores';
	import { CONFIG } from '$lib/config';

// fetch/hydrate data from local storage
let inited = false;
let sbtcEvents:{ results: Array<SbtcClarityEvent>, events:number}
let errorReason:string|undefined;
let myDepositsFilter:boolean;
const limit = 20;
let numPages = 0;

const getReclaimUrl = (pegin:any) => {
    goto('/transactions/' + pegin.bitcoinTxid.payload.value.split('x')[1])
}

const getType = (eventType:string|undefined) => {
    return (eventType === 'mint') ? 'deposit' : 'withdrawal'
}

const getAddress = (event:any) => {
    const type = getType(event.payloadData.eventType)
    if (event.payloadData.eventType === 'mint') {
        return event.recipient
    }
}

const toggleMine = async () => {
    sbtcEvents.results = []
    sbtcEvents.events = 0
    myDepositsFilter = !myDepositsFilter
    if (!myDepositsFilter) await fetchPageCheck(0)
    else fetchMine()
}

const fetchMine = async () => {
    const mySbtcEvents = await findSbtcEventByBitcoinAddress($sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal)
    sbtcEvents.results = mySbtcEvents
    sbtcEvents.events = mySbtcEvents.length
}

const fetchPage = async (evt:any) => {
    await fetchPageCheck(evt.detail.page)
}

const fetchPageCheck = async (mypage:number) => {
    if (mypage < 0) mypage = 0
    if (mypage > numPages) mypage = numPages
    sbtcEvents = await findSbtcEventsByPage(mypage, limit)
    const resid = ((sbtcEvents.events % limit) > 0) ? 1 : 0;
    numPages = Math.floor(sbtcEvents.events / limit) + resid;
}

onMount(async () => {
    try {
        let mypage = 0;
        if ($page.url.searchParams.has('page')) {
            mypage = Number($page.url.searchParams.get('page')) - 1
        }
        await fetchPageCheck(mypage)
        inited = true;
    } catch (err) {
        errorReason = COMMS_ERROR;
    }
})
</script>

<svelte:head>
  <title>sBTC Bridge - Transactions</title>
  <meta name="description" content="A detailed table of all the transactions going through the sBTC Bridge." />
</svelte:head>

<div class="py-6 mx-auto max-w-7xl md:px-6">
    <div class="flex flex-col w-full my-8">
      <div class="flex flex-col w-full border-[0.5px] border-gray-700 rounded-lg p-6 sm:p-10 overflow-hidden bg-gray-1000">
      <div class="p-5">
        <div class=""><span class="text-4xl font-medium">Transaction History</span></div>
        {#if inited}
        <div class="my-5">
            <div class="mb-5 flex justify-between">
                <div class=""><span class="text-2xl font-normal">{(sbtcEvents) ? sbtcEvents.events : ''} Deposits & withdrawals</span></div>
                <div class="flex gap-x-5">
                    {#if !myDepositsFilter}<div class="text-1xl font-normal"><Paging on:fetch_page={fetchPage} {numPages} totalEvents={(sbtcEvents) ? sbtcEvents.events : 0} limit={20}/></div>{/if}
                    <div class="bg-gray-1000 flex gap-2 align-top">
                        <Toggle class=" text-white" checked={myDepositsFilter} on:click={() => toggleMine()} ></Toggle>
                        {#if myDepositsFilter}
                        <span class="text-warning-500 font-medium ms-[-10px] mt-[5px]">my txs</span>
                        {:else}
                        <span class="text-white font-medium ms-[-10px] mt-[5px]">all txs</span>
                        {/if}
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div class="table-auto">
                    <div class="w-full">
                      <div class="grid grid-cols-5 gap-2 border-b mb-3 pb-3 flex-nowrap font-normal justify-evenly content-start">
                        <div>Height</div>
                        <div class="hidden:sm flex w-1/5 break-words">Address</div>
                        <div>Amount</div>
                        <!--<div class="hidden lg:flex">To</div>-->
                        <div>Type</div>
                        <div class="text-end">Actions</div>
                      </div>
                    </div>
                    <div>
                    {#each sbtcEvents.results as event}
                    <div class="w-full grid grid-cols-5 justify-evenly my-4 text-sm font-extralight text-gray-300">
                        <div class="flex w-1/5">{fmtNumber(event.payloadData.burnBlockHeight)}</div>
                        <div class="hidden:sm flex w-1/5 break-words">
                            <div class="grow"><a class="" href={explorerBtcTxUrl(event.bitcoinTxid.payload.value.split('x')[1])} target="_blank" rel="noreferrer">{truncate(event.payloadData.spendingAddress, 5)}</a></div>
                            <div class="ms-3"><ArrowUpRight class="h-4 w-4 text-white" target={explorerBtcTxUrl(event.bitcoinTxid.payload.value.split('x')[1])} /></div>
                        </div>
                        <div class=" w-1/5">{satsToBitcoin(event.payloadData.amountSats)}</div>
                        <!--<div class="hidden lg:flex ">
                            <div class="grow"><a href={explorerBtcAddressUrl(getTo(pegin))} target="_blank" rel="noreferrer">{truncate(pegin.commitTxScript?.address)}</a></div>
                            <div class="-translate-x-[20px]"><ArrowUpRight class="h-4 w-4 text-white" target={explorerBtcAddressUrl(getTo(pegin))} /></div>
                        </div>-->
                        <div class="flex w-1/5">
                            <div class="sm:pe-2 md:pe-5">
                                <!--
                                {#if pegin.status === 1}<span class="status status-1">pending</span>
                                {:else if pegin.status === 2}<span class="status status-2">committed</span>
                                {:else if pegin.status === 3}<span class="status status-3">reclaimed</span>
                                {:else if pegin.status === 4}<span class="status status-4">revealed</span>
                                {:else}{pegin.status}
                                {/if}
                                -->
                                {getType(event.payloadData.eventType)}
                            </div>
                            <div class="text-right">
                                <ArrowUpRight class="h-4 w-4 text-white" target={explorerTxUrl(event.txid)} />
                            </div>
                        </div>
                        <div class="text-end whitespace-nowrap"><a class="text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 hover:underline" href="/" on:click|preventDefault={() => getReclaimUrl(event)}>View details</a></div>
                    </div>
                    {/each}
                    </div>
                </div>
                
            </div>
        </div>
        {/if}
    </div>
</div>
</div>
</div>

