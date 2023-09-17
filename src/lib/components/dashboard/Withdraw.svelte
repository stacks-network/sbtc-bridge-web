<script lang="ts">
  import { onMount } from "svelte";
  import Banner from '$lib/components/shared/Banner.svelte';
	import Timeline from './shared/Timeline.svelte';
	import WithdrawHeader from './shared/WithdrawHeader.svelte';
	import { getOpDropWithdrawRequest, type BridgeTransactionType, dataToSign, getOpReturnWithdrawRequest } from "sbtc-bridge-lib";
	import { sbtcConfig } from "$stores/stores";
	import { CONFIG } from "$lib/config";
	import { initApplication, loggedIn, loginStacksJs, makeFlash, signMessage, verifyAmount, verifySBTCAmount, verifyStacksPricipal } from "$lib/stacks_connect";
	import { fetchPeginById } from "$lib/bridge_api";
	import type { SbtcConfig } from "$types/sbtc_config";
	import WithdrawForm from "./shared/WithdrawForm.svelte";
	import { goto } from "$app/navigation";
	import ScriptHashAddress from "./dd/ScriptHashAddress.svelte";
	import SignTransaction from "./wr/SignTransaction.svelte";

  export let addressInfo:any;
  let error:string|undefined;
  let amountErrored:string|undefined = undefined;
  let pegout:BridgeTransactionType;
  let hasUtxos = (addressInfo && addressInfo.utxos && addressInfo.utxos.length > 0)

  $: opReturn = !$sbtcConfig.userSettings.useOpDrop;

  const updateTimeline = (evt:any) => {
    if (evt.detail.timeline === 2) {
      invoice()
    } else {
      componentKey++;
      timeLineStatus = evt.detail.timeline;
    }
  }

  const invoice = async () => {
    try {
        const amount = $sbtcConfig.payloadWithdrawData.amountSats;
        verifySBTCAmount(amount, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].sBTCBalance, 0);
        const script = dataToSign(CONFIG.VITE_NETWORK, amount, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal);
        console.log('HASH: ' + script)
        await signMessage(async function(sigData:any, message:Uint8Array) {
          const signature = sigData.signature;
          if ($sbtcConfig.userSettings.useOpDrop) {
            peginRequest = getOpDropWithdrawRequest(CONFIG.VITE_NETWORK, amount, $sbtcConfig.sbtcContractData.sbtcWalletAddress, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress, signature, $sbtcConfig.keys, $sbtcConfig.payloadWithdrawData.bitcoinAddress!);
          } else {
            peginRequest = getOpReturnWithdrawRequest(CONFIG.VITE_NETWORK, amount, $sbtcConfig.sbtcContractData.sbtcWalletAddress, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress, signature, $sbtcConfig.keys, $sbtcConfig.payloadWithdrawData.bitcoinAddress!)
          }
          peginRequest.originator = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress;
          const conf:SbtcConfig = $sbtcConfig;
          conf.sigData = sigData.signature;
          sbtcConfig.update(() => conf);
          timeLineStatus = 2;
          if (!$sbtcConfig.userSettings?.useOpDrop) {
            timeLineStatus = 4;
          }
        }, script);
      } catch(err:any) {
        amountErrored = 'Please enter an amount - no more than your current sBTC balance.'
        makeFlash(document.getElementById('amount-btcamount'))
      }
  }

  let sBTCBalance = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].sBTCBalance;
  let showAddresses = false;
  $: timeLineStatus = 1;
  let peginRequest:BridgeTransactionType;
  let componentKey = 0;

  const login = async () => {
		await loginStacksJs(initApplication, $sbtcConfig);
    timeLineStatus = 1
	}

  const updateTransaction = () => {
    timeLineStatus = 1;
  }

  const doClicked = async (event:any) => {
    amountErrored = undefined;
    const button = event.detail;
    if (button.target === 'back') {
      timeLineStatus = 1;
    } else if (button.target === 'status-check') {
      //await doPeginScan();
      if ($sbtcConfig.pegOutMongoId) pegout = await fetchPeginById($sbtcConfig.pegOutMongoId);
      timeLineStatus = 3;
      goto('/transactions/' + peginRequest._id);
    } else if (button.target === 'transaction-history') {
      goto('/transactions')
    }
  }

  onMount(async () => {
    if (!loggedIn()) timeLineStatus = -1
  })

</script>

<WithdrawHeader />
<div class="bg-white/5 rounded-md p-4 border border-gray-900">
  {#if !hasUtxos && opReturn}
	<Banner
		bannerType={'info'}
		message={'You don\'t have any BTC in your wallet.<br/> Don\'t have testnet Bitcoin? <a class="underline" href="https://bitcoinfaucet.uo1.net/" target="_blank">Get some to get started!</a>'}
	/>
  {:else}

    {#if !sBTCBalance}
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
      <WithdrawForm {showAddresses} />
      <div class="mt-4">
        <button on:click={() => invoice()} class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">Continue</button>
      </div>
      {:else if timeLineStatus === 2}
        <ScriptHashAddress {peginRequest} on:clicked={doClicked}/>
      {:else if timeLineStatus === 4}
        <SignTransaction {addressInfo} {peginRequest} on:update_transaction={updateTransaction}/>
    {/if}

    {/if}
  {/if}
</div>



