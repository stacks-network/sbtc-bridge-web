<script lang="ts">
import { onMount } from 'svelte';
import Banner from '$lib/components/shared/Banner.svelte';
import Button from '$lib/components/shared/Button.svelte';
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();

const doBack = async () => {
  dispatch('go_back')
}

const doHistory = async () => {
  dispatch('go_history')
}

export let status:number;
export let requestType:string;

onMount(async () => {
})
</script>
<div class="flex w-full flex-col gap-4 align-baseline items-start p-5">

  {#if status === 1}
  <Banner bannerType={'warning'} message={'We scan the blockchain every few minutes to check for changes. If you paid the invoice we will see the transaction and this screen will update. <br/><br/>Click back to redisplay the qr code. '} />
  {:else if status === 2}
  <Banner bannerType={'info'} message={'Your Bitcoin deposit has been detected - thank you.'} />
  <div class="">
    {#if requestType === 'deposit'}
    Your sBTC will be deposited soon.
    {:else if requestType === 'withdrawal'}
    Your sBTC will be withdrawn soon.
    {/if}
    Track updates here: <a href="/transactions">transaction history</a>.
  </div>
  {:else if status === 3}
  <Banner bannerType={'success'} message={'Your bitcoin transaction has been detected and is being preprocessed. '} />
  {:else if status === 4}
  <Banner bannerType={'danger'} message={'Deposit has been reclaimed. '} />
  {/if}
  <div class="flex">
    <button title={'Click to go back'} on:click={() => doBack()} class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
      Back
    </button>
    <button title={'Click to Transaction history'} on:click={() => doHistory()} class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
      Transaction history
    </button>

  </div>

</div>
