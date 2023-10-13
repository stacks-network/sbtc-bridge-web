<script lang="ts">
import { onMount } from 'svelte';
import { CONFIG } from '$lib/config';
import { sbtcConfig } from '$stores/stores';
import { COMMS_ERROR } from '$lib/utils.js'
import { compare, tsToDate, truncate, explorerBtcTxUrl, explorerBtcAddressUrl } from '$lib/utils'
import { fetchPeginsByStacksAddress, fetchPegins } from '$lib/bridge_api'
import type { BridgeTransactionType } from 'sbtc-bridge-lib'
import { goto } from '$app/navigation'
import { satsToBitcoin } from '$lib/utils'
import ArrowUpRight from '$lib/components/shared/ArrowUpRight.svelte';

// fetch/hydrate data from local storage
let inited = false;
let peginRequests:Array<BridgeTransactionType>
let errorReason:string|undefined;
let myDepositsFilter:boolean;

const getReclaimUrl = (pegin:any) => {
    goto('/transactions/' + pegin._id)
}

const fetchDeposits = async (mine:boolean) => {
    myDepositsFilter = mine;
    if (myDepositsFilter) {
        peginRequests = await fetchPeginsByStacksAddress($sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress)
    } else {
        peginRequests = await fetchPegins()
    }
    // note this end point recovers the status 2 commitments from bitcoin - using the cardinal to find utxo's.
    //peginRequests = await fetchCommitments($sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal!, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress!, $sbtcConfig?.sbtcContractData.sbtcWalletAddress!, 5000)

    peginRequests.sort(compare)
}

const fetchByStatus = (status:number) => {
    if (status === 1) {
        return 'not seen';
    } if (status === 2) {
        return 'seen onchain'
    } if (status === 3) {
        return 'revealed'
    }
}

const getTo = (pegin:BridgeTransactionType):string => {
    if (pegin && pegin.commitTxScript && pegin.commitTxScript.address) {
        return pegin.commitTxScript.address;
    } else {
        return 'unknown';
    }
}

onMount(async () => {
    try {
        await fetchDeposits(true);
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

<div class="border border-gray-700 rounded-lg lg:w-3/4 md:w-full sm:w-full sm:mx-5 xs:w-full mx-4 my-20">
    <div class="p-5">
        <div class=""><span class="text-4xl font-medium">Transaction History</span></div>
        <div class="">
            <div class=" my-5"><span class="text-2xl font-normal">Deposits & withdrawals</span></div>
            <div class="w-full">
                <div class="table-auto">
                    <div class="w-full">
                      <div class="grid grid-cols-5 gap-2 border-b mb-3 pb-3 flex-nowrap font-normal justify-evenly content-start">
                        <div>Date</div>
                        <div>From</div>
                        <div>Amount</div>
                        <!--<div class="hidden lg:flex">To</div>-->
                        <div>Type</div>
                        <div class="text-end">Actions</div>
                      </div>
                    </div>
                    <div>
                        {#if inited}
                        {#each peginRequests as pegin}
                    {#if pegin.status >= 0}
                    <div class="w-full grid grid-cols-5 justify-evenly my-4 text-sm font-extralight text-gray-300">
                        <div class="hidden lg:flex">{tsToDate(pegin.updated)}</div>
                        <div class="flex">
                            <div class="grow"><a class="" href={explorerBtcAddressUrl(pegin.fromBtcAddress)} target="_blank" rel="noreferrer">{truncate(pegin.fromBtcAddress, 7)}</a></div>
                            <div class="-translate-x-[20px]"><ArrowUpRight class="h-4 w-4 text-white" target={explorerBtcAddressUrl(pegin.fromBtcAddress)} /></div>
                        </div>
                        <div class="">{satsToBitcoin(pegin.amount)}</div>
                        <!--<div class="hidden lg:flex ">
                            <div class="grow"><a href={explorerBtcAddressUrl(getTo(pegin))} target="_blank" rel="noreferrer">{truncate(pegin.commitTxScript?.address)}</a></div>
                            <div class="-translate-x-[20px]"><ArrowUpRight class="h-4 w-4 text-white" target={explorerBtcAddressUrl(getTo(pegin))} /></div>
                        </div>-->
                        <div class="flex">
                            <div class="sm:pe-2 md:pe-5">
                                <!--
                                {#if pegin.status === 1}<span class="status status-1">pending</span>
                                {:else if pegin.status === 2}<span class="status status-2">committed</span>
                                {:else if pegin.status === 3}<span class="status status-3">reclaimed</span>
                                {:else if pegin.status === 4}<span class="status status-4">revealed</span>
                                {:else}{pegin.status}
                                {/if}
                                -->
                                {pegin.requestType}
                            </div>
                            <div class="text-right">
                                {#if pegin.btcTxid}
                                <ArrowUpRight class="h-4 w-4 text-white" target={explorerBtcTxUrl(pegin.btcTxid)} />
                                {/if}
                            </div>
                        </div>
                        <div class="text-end"><a class="text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 hover:underline" href="/" on:click|preventDefault={() => getReclaimUrl(pegin)}>View details</a></div>
                    </div>
                    {/if}
                    {/each}
                    {/if}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>

