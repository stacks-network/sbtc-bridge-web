<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
	import DepositHeader from './shared/DepositHeader.svelte';
	import Timeline from './shared/Timeline.svelte';
  import Banner from '$lib/components/shared/Banner.svelte';
	import { sbtcConfig } from '$stores/stores';
	import { CONFIG } from '$lib/config';
	import { getBridgeDeposit, type BridgeTransactionType } from 'sbtc-bridge-lib';
	import type { SbtcConfig } from '$types/sbtc_config';
	import DepositForm from './shared/DepositForm.svelte';
	import { loggedIn, loginStacksFromHeader, verifyAmount, verifyStacksPricipal } from '$lib/stacks_connect';
	import { goto } from '$app/navigation';
	import { fetchPeginById, updateBridgeTransaction } from "$lib/bridge_api";
	import StatusCheck from "./dd/StatusCheck.svelte";
	import SignTransaction from "./dr/SignTransaction.svelte";
	import { bitcoinBalanceFromMempool } from "$lib/utils";

  const dispatch = createEventDispatcher();
  export let addressInfo:any;
  let error:string|undefined;
  let showAddresses = false;
  $: timeLineStatus = 1;
  $: opReturn = !$sbtcConfig.userSettings.useOpDrop;
  let peginRequest:BridgeTransactionType;
  let componentKey = 0;
  let amountErrored:string|undefined = undefined;

  let hasUtxos = (addressInfo && addressInfo.utxos && addressInfo.utxos.length > 0)

  const invoice = async () => {
    try {
      const bal = bitcoinBalanceFromMempool($sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinalInfo)
      verifyAmount($sbtcConfig.payloadDepositData.amountSats, bal);
      verifyStacksPricipal($sbtcConfig.payloadDepositData.principal)

      if (peginRequest && peginRequest._id) {
        peginRequest.uiPayload.amountSats = $sbtcConfig.payloadDepositData.amountSats
        const newP = await updateBridgeTransaction(peginRequest)
        if (newP && newP.status !== 404) peginRequest = newP;
      }

      const conf:SbtcConfig = $sbtcConfig;
      sbtcConfig.update(() => conf);
      peginRequest = getBridgeDeposit(CONFIG.VITE_NETWORK, $sbtcConfig.payloadDepositData, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress);
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
		const res = await loginStacksFromHeader(document)
    timeLineStatus = 1
	}

  const handleAmountEvent = (e:any) => {
    const event = e.detail
    amountErrored = event.reason;
  }

  onMount(async () => {
    if (!loggedIn()) timeLineStatus = -1
  })

</script>

<DepositHeader />
<div class="bg-white/5 rounded-md p-4 border border-gray-900">
  {#key componentKey}
  {#if timeLineStatus === -1}
    <div class="mt-4">
      <button on:click={() => login()} class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">Connect wallet</button>
    </div>
  {:else if opReturn && !hasUtxos}
    <Banner
      bannerType={'info'}
      message={'You don\'t have any BTC in your wallet.<br/> Don\'t have testnet Bitcoin? <a class="underline" href="https://bitcoinfaucet.uo1.net/" target="_blank">Get some to get started!</a>'}/>
  {:else}
    <Timeline active={timeLineStatus} confirm={false} on:update_timeline={updateTimeline}/>
    {#if timeLineStatus === 1}
    <DepositForm {showAddresses} on:amount_event={handleAmountEvent}/>
    <div class="mt-4">
      <button style={(amountErrored) ? '' : ''} title={(amountErrored) ? amountErrored : 'Click to continue'} disabled={typeof amountErrored === 'string'} on:click={() => invoice()} class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
        Continue
      </button>
    </div>
    {:else if timeLineStatus === 2}
    <SignTransaction {addressInfo} {peginRequest} on:update_timeline={updateTimeline}/>
    {:else if timeLineStatus === 3}
    <StatusCheck pegin={peginRequest} on:clicked={doClicked}/>
    {/if}
  {/if}
  {/key}
</div>
