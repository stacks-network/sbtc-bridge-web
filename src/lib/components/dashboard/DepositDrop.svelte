<script lang="ts">
  import { onMount } from "svelte";
	import DepositHeader from './shared/DepositHeader.svelte';
	import Timeline from './shared/Timeline.svelte';
	import { sbtcConfig } from '$stores/stores';
	import { CONFIG } from '$lib/config';
	import type { SbtcConfig } from '$types/sbtc_config';
	import DepositForm from './shared/DepositForm.svelte';
	import { isWalletAccountConnected, loggedIn, loginStacksFromHeader, verifyAmount, verifyStacksPricipal } from '$lib/stacks_connect';
	import { goto } from '$app/navigation';
	import StatusCheck from "./dd/StatusCheck.svelte";
	import ScriptHashAddress from "./dd/ScriptHashAddress.svelte";
	import { bitcoinBalanceFromMempool } from "$lib/utils";
	import { checkRevealerTransactionPayment, connectRevealerTransactionPayment, fetchRevealerTransactionsPendingByOriginator, getAddressForOpDropDeposit } from "$lib/revealer_api";
	import { CommitmentStatus, type RevealerTransaction } from "$types/revealer_types";
	import Banner from "../shared/Banner.svelte";

  let errorMessage:string|undefined;
  let showAddresses = false;
  $: timeLineStatus = 1;
  let componentKey = 0;
  let amountErrored:string|undefined = undefined;
  let commitment:{commitAddress: string};
  let amountSats = $sbtcConfig.payloadDepositData.amountSats;
  let walletBalance = 0;
  let recipient = $sbtcConfig.payloadDepositData.principal;
  let status:number = 1;
  let myTransactions:Array<RevealerTransaction>;
  let stxAddress = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress

  const checkPayment = async () => {
    const result = await checkRevealerTransactionPayment(commitment.commitAddress)
    if (result && result.status > CommitmentStatus.UNPAID) {
      timeLineStatus = 3;
    }
  }

  const payWithWebWallet = async () => {
    if (isWalletAccountConnected(stxAddress)) {
      const resp = await (window as any).btc?.request('sendTransfer', {
        network: CONFIG.VITE_NETWORK,
        address: commitment.commitAddress,
        amount: amountSats
      });
      if (resp.result.txid) {
        await connectRevealerTransactionPayment(commitment.commitAddress, resp.result.txid)
      } else {
        console.log(resp)
        errorMessage = resp.result
      }
    } else {
      errorMessage = 'Please connect your wallet to the same network and account you are logged in with - please reload this page after doing so.'
    }
  }

  const invoice = async () => {
    try {
      verifyAmount($sbtcConfig.payloadDepositData.amountSats, walletBalance);
      verifyStacksPricipal($sbtcConfig.payloadDepositData.principal)

      const conf:SbtcConfig = $sbtcConfig;
      sbtcConfig.update(() => conf);
      commitment = await getAddressForOpDropDeposit(
        $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress,
        recipient,
        amountSats,
        $sbtcConfig.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit1!,
        $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal,
      );
      timeLineStatus = 2;
      componentKey++;
    } catch(err:any) {
      errorMessage = err.message
    }
  }

  const goBack = async (event:any) => {
    timeLineStatus = 1;
  }

  const goHistory = async (event:any) => {
    goto('/transactions')
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
    if (loggedIn()) {
      walletBalance = bitcoinBalanceFromMempool($sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinalInfo)
      myTransactions = await fetchRevealerTransactionsPendingByOriginator(stxAddress) //(mypage, limit)
    } else {
      timeLineStatus = -1
    }
  })
</script>

<DepositHeader />

<div class="bg-white/5 rounded-md p-4 border border-gray-900">
  {#key componentKey}
    {#if timeLineStatus === -1}
      <button on:click={() => login()} class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
        Connect wallet
      </button>
    {:else}
      <Timeline active={timeLineStatus} confirm={false} on:update_timeline={updateTimeline} />
      {#if timeLineStatus === -1}
        <div class="mt-4">
          <button on:click={() => login()} class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
            Connect wallet
          </button>
        </div>
      {:else if timeLineStatus === 1}
        <DepositForm {showAddresses} on:amount_event={handleAmountEvent}/>
          <div class="mt-4">
            <button on:click={() => invoice()} class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
              Continue
            </button>
          </div>
      {:else if timeLineStatus === 2}
          {#if errorMessage}<div class="my-4"><Banner bannerType={'warning'} message={errorMessage}/></div>{/if}
          <ScriptHashAddress commitAddress={commitment.commitAddress} {amountSats} {walletBalance} on:check_payment={checkPayment} on:pay_web_wallet={payWithWebWallet}/>
      {:else if timeLineStatus === 3}
        <StatusCheck {status} requestType={'deposit'} on:go_back={goBack} on:go_history={goHistory} />
      {/if}
      {#if myTransactions && myTransactions.length > 0}
      <div class="my-4">
        <Banner
          bannerType={'info'}
          message={myTransactions.length + ' pending transactions - <a href="/transactions/'+stxAddress+'">view details</a>'}
        />
      </div>
      {/if}
    {/if}
  {/key}
</div>
