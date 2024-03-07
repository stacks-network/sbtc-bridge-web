<script lang="ts">
  import { onMount } from "svelte";
  import Banner from '$lib/components/shared/Banner.svelte';
	import Invoice from "../shared/Invoice.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let commitAddress:string;
  export let amountSats:number;
  export let walletBalance:number;

  // NB Its possible the user paid a different amount to the amount they entered in the UI - ths takes the on chain amount first
  let checking = false;
  let transactions:Array<any>|undefined;
    
  const cancelPayment = async () => {
    dispatch('cancel_payment', { });
  }

  const payWithWebWallet = async () => {
    dispatch('pay_web_wallet', { });
  }

  const checkTxs = async () => {
    checking = true;
    dispatch('check_payment', { });
    setTimeout(function () {
      checking = false;
    }, 2000);
  }

  onMount(async () => {
  })
</script>

<div id="clipboard"></div>

<div>
  {#if transactions}
    <div class="mt-6">
      <Banner
        bannerType={'success'}
        message={'Your sBTC is on its way. It can take more than an hour depending on network traffic. <br/>Once its minted your balance in your wallet will be updated. Please check back soon.'}
      />
    </div>
  {:else}
  <div>
    <p class="text-sm my-5 font-extralight text-gray-400">Scan this QR code or copy the address and amount into your Bitcoin wallet to send Bitcoin.</p>
  </div>
  <Invoice psbtHolder={undefined} {amountSats} bitcoinAddress={commitAddress} mode={'op_drop'} requestType={'deposit'}/>
  <div class="my-4">
    <Banner
      bannerType={(checking) ? 'checking' : 'waiting'}
		  message={(checking) ? 'Checking for your deposit transaction' : 'Waiting for your bitcoin to be sent...'}
    />
  </div>
  <div class="mt-6 w-full flex gap-x-4">
    {#if walletBalance > amountSats}
    <button
      type="button"
      on:click={() => payWithWebWallet()}
      class="w-full text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50"
    >
      Pay with web wallet
    </button>
    {/if}
    <button
      type="button"
      on:click={() => checkTxs()}
      class="w-full  text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50"
    >
      Check for transaction
    </button>
    <!--
    <button
      type="button"
      on:click={() => cancelPayment()}
      class="w-full  text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50"
    >
      Cancel payment
    </button>
    -->
  </div>
  {/if}
</div>
