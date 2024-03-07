<script lang="ts">
  import { onMount } from 'svelte';
  import { Skeleton, Tabs, TabItem } from 'flowbite-svelte';
  import { page } from '$app/stores';
  import { COMMS_ERROR } from '$lib/utils.js'
  import { sbtcConfig } from '$stores/stores';
  import { CONFIG } from '$lib/config';
	import TransactionRow from '$lib/components/transactions/TransactionRow.svelte';
	import Paging from '$lib/components/transactions/Paging.svelte';
	import TransactionHeader from '$lib/components/transactions/TransactionHeader.svelte';
	import { fetchRevealerTransactions, fetchRevealerTransactionsByOriginator } from '$lib/revealer_api';
	import type { RevealerTransaction } from '$types/revealer_types';
	import { goto } from '$app/navigation';

  export let mode:string;
  let inited = false;
  let transactions:Array<RevealerTransaction>
  let errorReason:string|undefined;
  let showAll:boolean = true;
  const limit = 10;
  let numPages = 0;
  let total = 0;
  let stxAddress = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress

  const fetchPage = async (evt:any) => {
    await fetchPageCheck(evt.detail.page)
    showAll = true
  }

  const fetchPageCheck = async (mypage:number) => {
    if (mypage < 0) mypage = 0
    if (mypage > numPages) mypage = numPages
    let result:any
    if (mode === 'all') {
      result = await fetchRevealerTransactions(mypage, limit) //(mypage, limit)
    } else {
      result = await fetchRevealerTransactionsByOriginator($sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress, mypage, limit)
    }
    transactions = result.txs
    total = result.total

    const resid = ((total % limit) > 0) ? 1 : 0;
    numPages = Math.floor(total / limit) + resid;
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
          <TabItem on:click={() => goto('/transactions')} open={mode === 'all'} title="All transactions">
            <div class="bg-white/5 rounded-md p-4 border border-gray-900">
              <div class="mt-5 flex justify-end">
                <div class="flex gap-x-5">
                    <div class="text-1xl font-normal"><Paging on:fetch_page={fetchPage} {numPages} totalEvents={total} {limit}/></div>
                </div>
              </div>
                <TransactionHeader/>
              {#each transactions as transaction}
              <TransactionRow {transaction} />
              {/each}
            </div>
          </TabItem>
          <TabItem on:click={() => goto('/transactions/' + stxAddress)} open={mode !== 'all'} title="Your transactions">
            <div class="bg-white/5 rounded-md p-4 border border-gray-900">
              <div class="mt-5 flex justify-end">
                <div class="flex gap-x-5">
                    <div class="text-1xl font-normal"><Paging on:fetch_page={fetchPage} {numPages} totalEvents={total} {limit}/></div>
                </div>
              </div>
              <TransactionHeader/>
              {#each transactions as transaction}
              <TransactionRow {transaction} />
              {/each}
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

