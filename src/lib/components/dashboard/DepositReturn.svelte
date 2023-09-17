<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
	import DepositHeader from './shared/DepositHeader.svelte';
	import Timeline from './shared/Timeline.svelte';
  import Banner from '$lib/components/shared/Banner.svelte';
	import { sbtcConfig } from '$stores/stores';
	import { CONFIG } from '$lib/config';
	import { getOpReturnDepositRequest, satsToBitcoin, type BridgeTransactionType } from 'sbtc-bridge-lib';
	import type { SbtcConfig } from '$types/sbtc_config';
	import DepositForm from './shared/DepositForm.svelte';
	import { initApplication, loggedIn, loginStacksJs, verifyAmount, verifyStacksPricipal } from '$lib/stacks_connect';
	import { goto } from '$app/navigation';
	import { fetchPeginById, updateBridgeTransaction } from "$lib/bridge_api";
	import StatusCheck from "./dd/StatusCheck.svelte";
	import SignTransaction from "./dr/SignTransaction.svelte";

  const dispatch = createEventDispatcher();
  export let addressInfo:any;
  let error:string|undefined;
  let showAddresses = false;
  $: timeLineStatus = 1;
  let peginRequest:BridgeTransactionType;
  let componentKey = 0;

  let hasUtxos = (addressInfo && addressInfo.utxos && addressInfo.utxos.length > 0)

  const invoice = async () => {
    try {
      verifyAmount($sbtcConfig.payloadDepositData.amountSats);
      verifyStacksPricipal($sbtcConfig.payloadDepositData.principal)

      let amount = $sbtcConfig.payloadDepositData.amountSats;

      if (peginRequest && peginRequest._id) {
        peginRequest.amount = $sbtcConfig.payloadDepositData.amountSats
        const newP = await updateBridgeTransaction(peginRequest)
        if (newP && newP.status !== 404) peginRequest = newP;
      }

      const conf:SbtcConfig = $sbtcConfig;
      sbtcConfig.update(() => conf);
      peginRequest = getOpReturnDepositRequest(CONFIG.VITE_NETWORK, amount, $sbtcConfig.keys.deposits, $sbtcConfig.payloadDepositData.principal!, $sbtcConfig.sbtcContractData!.sbtcWalletAddress, $sbtcConfig.payloadDepositData.bitcoinAddress!);
      peginRequest.originator = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress; // retain the sender in case the address in UI changes.
      timeLineStatus = 2;
      componentKey++;
    } catch(err:any) {
      error = err.message
    }
  }

  const doClicked = async (event:any) => {
    const button = event.detail;
    if (button.target === 'back') {
      timeLineStatus = 1;
    } else if (button.target === 'status-check') {
      //await doPeginScan();
      if ($sbtcConfig.pegInMongoId) peginRequest = await fetchPeginById($sbtcConfig.pegInMongoId);
      timeLineStatus = 3;
    } else if (button.target === 'transaction-history') {
      goto('/transactions')
    }
  }

  const updateTimeline = (evt:any) => {
    if (evt.detail.timeline === 2) {
      invoice()
    } else {
      componentKey++;
      timeLineStatus = evt.detail.timeline;
    }
  }

  const login = async () => {
		await loginStacksJs(initApplication, $sbtcConfig);
    timeLineStatus = 1
	}

  onMount(async () => {
    if (!loggedIn()) timeLineStatus = -1
  })

</script>

<DepositHeader />
<div class="bg-white/5 rounded-md p-4 border border-gray-900">
  {#if !hasUtxos}
	<Banner
		bannerType={'info'}
		message={'You don\'t have any BTC in your wallet.<br/> Don\'t have testnet Bitcoin? <a class="underline" href="https://bitcoinfaucet.uo1.net/" target="_blank">Get some to get started!</a>'}
	/>
  {:else}
  {#key componentKey}
  <Timeline active={timeLineStatus} confirm={false} on:update_timeline={updateTimeline}/>
  {/key}
  {#if timeLineStatus === -1}
  <div class="mt-4">
    <button on:click={() => login()} class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">Connect wallet</button>
  </div>
  {:else if timeLineStatus === 1}
  <DepositForm {showAddresses} />
  <div class="mt-4">
    <button on:click={() => invoice()} class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">Continue</button>
  </div>
  {:else if timeLineStatus === 2}
  <SignTransaction {addressInfo} {peginRequest} on:update_transaction={updateTimeline}/>
  {:else if timeLineStatus === 3}
  <StatusCheck pegin={peginRequest} on:clicked={doClicked}/>
  {/if}
  {/if}
</div>
