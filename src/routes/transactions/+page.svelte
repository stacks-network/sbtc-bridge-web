<script lang="ts">
import { onMount } from 'svelte';
import { addresses } from '$lib/stacks_connect'
import { COMMS_ERROR } from '$lib/utils.js'
import { compare, tsToDate, truncate, explorerBtcTxUrl, explorerBtcAddressUrl } from '$lib/utils'
import { fetchPeginsByStacksAddress, fetchPegins } from '$lib/bridge_api'
import type { PeginRequestI } from 'sbtc-bridge-lib' 
import { goto } from '$app/navigation'
import ExternalLinkIcon from '$lib/components/shared/ExternalLinkIcon.svelte';
import ArrowUpRight from '$lib/components/shared/ArrowUpRight.svelte';

// fetch/hydrate data from local storage 
let inited = false;
let peginRequests:Array<PeginRequestI>
let errorReason:string|undefined;
let myDepositsFilter:boolean;

const getReclaimUrl = (pegin:any) => {
    goto('/transactions/' + pegin._id)
}

const fetchDeposits = async (mine:boolean) => {
    myDepositsFilter = mine;
    if (myDepositsFilter) {
        peginRequests = await fetchPeginsByStacksAddress(addresses().stxAddress)
    } else {
        peginRequests = await fetchPegins()
    }
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

const getTo = (pegin:PeginRequestI):string => {
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

{#if inited}
<div class="border border-gray-700 rounded-lg lg:w-3/4 md:w-full sm:w-full sm:mx-5 xs:w-full mx-4 my-20">
    <div class="p-5">
        <div class=""><span class="text-4xl">Transaction History</span></div>
        <div class="">
            <div class=""><span class="text-2xl">Deposits</span></div>
            <div class="w-full">
                <div class="table-auto">
                    <div class="w-full">
                      <div class="grid grid-cols-4 lg:grid-cols-6 gap-2 flex-nowrap font-semibold justify-evenly content-start">
                        <div style="white-space: nowrap;">Amount sats</div>
                        <div class="hidden lg:flex">Date</div>
                        <div>From</div>
                        <div class="hidden lg:flex">To</div>
                        <div>Status</div>
                        <div class="text-end">Actions</div>
                      </div>
                    </div>
                    <div>
                    {#each peginRequests as pegin}
                    {#if pegin.status >= 0}
                    <div class="w-full grid grid-cols-4 lg:grid-cols-6 gap-2 justify-evenly content-start">
                        <div>{#if pegin.status === 1}{pegin.amount}{:else}{pegin.amount}{/if}</div>
                        <div class="hidden lg:flex">{tsToDate(pegin.updated)}</div>
                        <div class="flex">
                            <div class="sm:pe-2 md:pe-5"><a class="" href={explorerBtcAddressUrl(pegin.fromBtcAddress)} target="_blank" rel="noreferrer">{truncate(pegin.fromBtcAddress)}</a></div>
                            <div class=""><ArrowUpRight class="-mr-0.5 h-4 w-4 text-white" target={explorerBtcAddressUrl(pegin.fromBtcAddress)} /></div>
                        </div>
                        <div class="hidden lg:flex ">
                            <div class="sm:pe-2 md:pe-5"><a href={explorerBtcAddressUrl(getTo(pegin))} target="_blank" rel="noreferrer">{truncate(pegin.commitTxScript?.address)}</a></div>
                            <div class=""><ArrowUpRight class="-mr-0.5 h-4 w-4 text-white" target={explorerBtcAddressUrl(getTo(pegin))} /></div>

                        </div>
                        <div class="flex">
                            <div class="sm:pe-2 md:pe-5">
                                {#if pegin.status === 1}<span class="status status-1">pending</span>
                                {:else if pegin.status === 2}<span class="status status-2">committed</span>
                                {:else if pegin.status === 3}<span class="status status-3">reclaimed</span>
                                {:else if pegin.status === 4}<span class="status status-4">revealed</span>
                                {:else}{pegin.status}
                                {/if}
                            </div>
                            <div class="text-right">
                                {#if pegin.status > 1}
                                <ArrowUpRight class="-mr-0.5 h-4 w-4 text-white" target={explorerBtcTxUrl(pegin.btcTxid)} />
                                {/if}
                            </div>
                        </div>
                        <div class="text-end"><a class="text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 hover:underline" href="/" on:click|preventDefault={() => getReclaimUrl(pegin)}>View details</a></div>
                    </div>
                    {/if}
                    {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/if}

