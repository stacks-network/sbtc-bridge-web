<script lang="ts">
  import { onMount } from "svelte";
  import type { BridgeTransactionType } from 'sbtc-bridge-lib'
	import { bitcoinBalanceFromMempool } from '$lib/utils'
	import { sbtcConfig } from '$stores/stores'
	import { CONFIG } from '$lib/config';
  import Banner from '$lib/components/shared/Banner.svelte';
	import { fetchAddressTransactions, saveBridgeTransaction } from "$lib/bridge_api";
	import Invoice from "../shared/Invoice.svelte";

  export let peginRequest:BridgeTransactionType;
  // NB Its possible the user paid a different amount to the amount they entered in the UI - ths takes the on chain amount first
  let amountSats = 0;
  let cardinalBalance = 0;
  let checking = false;
  let transactions:Array<any>|undefined;

  const checkTxs = async () => {
    checking = true;
    const result = await fetchAddressTransactions(peginRequest.commitTxScript?.address!)
    if (result && result.length > 0) {
      transactions = result;
      await saveBridgeTransaction(peginRequest);
    }
    setTimeout(function () {
      checking = false;
    }, 2000);
  }

  onMount(async () => {
    if (!peginRequest) throw new Error('No pegin request')
    amountSats = ((peginRequest.status === 2) ? peginRequest.vout?.value : peginRequest.uiPayload.amountSats) || 0;
    cardinalBalance = bitcoinBalanceFromMempool($sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinalInfo)
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
  <Invoice psbtHolder={undefined} {amountSats} bitcoinAddress={peginRequest.uiPayload.bitcoinAddress} mode={'op_drop'} requestType={'deposit'}/>
  <div class="my-4">
    <Banner
      bannerType={(checking) ? 'checking' : 'waiting'}
		  message={(checking) ? 'Checking for your deposit transaction' : 'Waiting for your bitcoin to be sent...'}
    />
  </div>
  <div class="mt-6 w-full">
    <button
      type="button"
      on:click={() => checkTxs()}
      class="w-full text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50"
    >
      Check for transaction
    </button>
  </div>
  {/if}
</div>
