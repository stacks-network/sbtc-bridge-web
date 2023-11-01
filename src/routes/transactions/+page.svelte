<script lang="ts">
  import { onMount } from 'svelte';
  import { Skeleton, Tabs, TabItem, } from 'flowbite-svelte';

  import { page } from '$app/stores';
  import { COMMS_ERROR, explorerTxUrl } from '$lib/utils.js'
  import { truncate, explorerBtcTxUrl } from '$lib/utils'
  import { findSbtcEventByBitcoinAddress, findSbtcEventsByPage } from '$lib/bridge_api'
  import { type SbtcClarityEvent } from 'sbtc-bridge-lib'
  import { sbtcConfig } from '$stores/stores';
  import { CONFIG } from '$lib/config';

  // fetch/hydrate data from local storage
  let inited = false;
  let sbtcEvents:{ results: Array<SbtcClarityEvent>, events:number}
  let errorReason:string|undefined;
  let myDepositsFilter:boolean = false;
  const limit = 20;
  let numPages = 0;

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
      <div class="text-4xl font-medium">Transaction History</div>
      {#if inited}
        <Tabs style="underline" contentClass="py-4">
          <TabItem open={true} title="All transactions">
            <div class="bg-white/5 rounded-md p-4 border border-gray-900">
              <!-- Insert TxsHistoryTable table with all txs  -->
            </div>
          </TabItem>
          <TabItem open={!true} title="Your transactions">
            <div class="bg-white/5 rounded-md p-4 border border-gray-900">
              <!-- Insert TxsHistoryTable table with logged user txs  -->
            </div>
          </TabItem>
        </Tabs>
      {:else}
        <Tabs style="underline" contentClass="mt-8">
          <TabItem open={true} title="All transactions">
            <Skeleton size="md" />
          </TabItem>
          <TabItem title="Your transactions">
            <Skeleton size="md" />
          </TabItem>
        </Tabs>
      {/if}
    </div>
  </div>
</div>

