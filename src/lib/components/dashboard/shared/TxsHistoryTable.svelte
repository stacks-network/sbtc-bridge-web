<script lang="ts">
  import { onMount } from 'svelte';
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

  import { page } from '$app/stores';
  import { COMMS_ERROR, explorerTxUrl } from '$lib/utils.js'
  import { truncate, explorerBtcTxUrl } from '$lib/utils'
  import { findSbtcEventByBitcoinAddress, findSbtcEventsByPage } from '$lib/bridge_api'
  import { fmtNumber, type SbtcClarityEvent } from 'sbtc-bridge-lib'
  import { satsToBitcoin } from '$lib/utils'
  import ArrowUpRight from '$lib/components/shared/ArrowUpRight.svelte';
  import Paging from '$lib/components/sbtc-events/Paging.svelte';
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
    return '/transactions/' + pegin.bitcoinTxid.payload.value.split('x')[1]
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


<Table>
  <TableHead class="!dark:bg-transparent !bg-transparent !text-base !text-white !normal-case border-b border-white">
    <TableHeadCell class="!px-0 !font-normal">Amount (BTC)</TableHeadCell>
    <TableHeadCell class="!px-0 !font-normal">Address</TableHeadCell>
    <TableHeadCell class="!px-0 !font-normal">Type</TableHeadCell>
    <TableHeadCell class="!px-0 !font-normal">Height</TableHeadCell>
    <TableHeadCell class="!px-0 !font-normal !text-right">Actions</TableHeadCell>
  </TableHead>
  <TableBody>
    {#each sbtcEvents.results as event}
      <TableBodyRow class="!dark:bg-transparent !bg-transparent !border-transparent">
        <TableBodyCell class="!px-0 !py-2 !font-extralight">{satsToBitcoin(event.payloadData.amountSats)}</TableBodyCell>
        <TableBodyCell class="!px-0 !py-2 !font-extralight">
          <div class="flex items-center">
            <a class="" href={explorerBtcTxUrl(event.bitcoinTxid.payload.value.split('x')[1])} target="_blank" rel="noreferrer">{truncate(event.payloadData.spendingAddress, 5)}</a>
            <div class="ms-3">
              <ArrowUpRight class="h-6 w-6 text-white" target={explorerBtcTxUrl(event.bitcoinTxid.payload.value.split('x')[1])} />
            </div>
          </div>
        </TableBodyCell>
        <TableBodyCell class="!px-0 !py-2 !font-extralight">
          <div class="flex items-center">
            {#if getType(event.payloadData.eventType) === 'deposit'}
              <span class="border px-3 py-1 rounded-2xl text-yellow-400 border-yellow-400">
                {getType(event.payloadData.eventType)}
              </span>
            {:else}
              <span class="border px-3 py-1 rounded-2xl text-blue-400 border-blue-400">
                {getType(event.payloadData.eventType)}
              </span>
            {/if}
            <div class="ms-3">
              <ArrowUpRight class="h-6 w-6 text-white" target={explorerTxUrl(event.txid)} />
            </div>
          </div>
        </TableBodyCell>
        <TableBodyCell class="!px-0 !py-2 !font-extralight">{fmtNumber(event.payloadData.burnBlockHeight)}</TableBodyCell>
        <TableBodyCell class="!px-0 !py-2 !font-extralight !text-right">
          <a
            type="button"
            class="text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 hover:underline"
            href={getReclaimUrl(event)}
          >
            View details
          </a>
        </TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>

<div class="py-6 border-t border-white flex items-center justify-between mt-6">
  <div>
    <p class="text-sm font-extralight">
      Showing
      <span class="font-normal">1</span>
      to
      <span class="font-normal">10</span>
      of
      <span class="font-normal">97</span>
      results
    </p>
  </div>
  <Paging on:fetch_page={fetchPage} {numPages} totalEvents={(sbtcEvents) ? sbtcEvents.events : 0} limit={20}/>
</div>

