<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { CONFIG } from '$lib/config';
  import DepositFormHeader from '$lib/components/deposit/DepositFormHeader.svelte'
	import { buildDepositPayload, getOpReturnDepositRequest, maxCommit, type PeginRequestI } from "sbtc-bridge-lib";
	import { sbtcConfig } from "$stores/stores";
	import type { SbtcConfig } from "$types/sbtc_config";
	import { minimumDeposit, makeFlash, verifyAmount, verifyStacksPricipal } from "$lib/stacks_connect";
	import { fetchPeginById, fetchUtxoSet, updatePeginCommit } from "$lib/bridge_api";
	import { userSatBtc } from "$lib/utils";
	import InputTextField from "../InputTextField.svelte";
	import Button from "$lib/components/shared/Button.svelte";
	import BitcoinAmountField from "../BitcoinAmountField.svelte";
	import Banner from "$lib/components/shared/Banner.svelte";
	import SignTransactionWeb from "./SignTransactionWeb.svelte";
	import StatusCheck from "../StatusCheck.svelte";
	import ServerError from "$lib/components/common/ServerError.svelte";
  import { bitcoinToSats, satsToBitcoin } from '$lib/utils'
//  import {calculateDepositFees } from '$lib/stacks_connect_bug'

  const dispatch = createEventDispatcher();

  let pegin:PeginRequestI;
  let balanceMsg = false;

  const network = CONFIG.VITE_NETWORK;
  let inited = false;
  let errored = false;
  let amountErrored:string|undefined = undefined;
  let componentKey = 0;
  let timeLineStatus = 1;
  let peginRequest:PeginRequestI;
  let bitcoinAddress:string;
  let stacksAddress:string;
  let amount:number;
  let addressInfo:any;

  const input0Data = {
    field: 'btcAddress',
    label: 'Your Bitcoin Address',
    hint: 'Bitcoin will be sent from this account so it needs to cover the amount and tx fees.',
    resetValue: '',
    value: ''
  }

  const input1Data = {
    field: 'address',
    label: 'Stacks or Contract Address',
    hint: 'sBTC will be minted to this account or contract.',
    resetValue: '',
    value: ''
  }

  const input2Data = {
    field: 'amount',
    label: 'Amount (bitcoin)',
    hint: 'The amount you wish to deposit',
    resetValue: undefined,
    valueBtc: 0.000010000,
    valueSat: 10000
  }

  const fieldUpdated = async (event:any) => {
    const conf:SbtcConfig = $sbtcConfig;
    const input = event.detail;
    if (input.field === 'address') {
      verifyStacksPricipal(input.value);
      stacksAddress = input.value;
    }
    conf.pegInMongoId = undefined;
    sbtcConfig.update(() => conf);
    //initComponent(piTx.pegInData.amount);
    componentKey++;
  }

  let txWatcher:NodeJS.Timer;
  const stopTxWatcher = () => {
    if (txWatcher) clearInterval(txWatcher)
  }

  const updateTransaction = () => {
    timeLineStatus = 1;
    dispatch('time_line_status_change', { timeLineStatus });
  }

  const doClicked = async (event:any) => {
    amountErrored = undefined;
    const button = event.detail;
    if (button.target === 'openInvoice') {
      try {
        bitcoinAddress = input0Data.value;
        if (bitcoinAddress !== $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal) addressInfo = await fetchUtxoSet(bitcoinAddress)
        const amt = input2Data.valueSat
        verifyAmount(amt);
        if (peginRequest && peginRequest._id && amt !== peginRequest.amount) {
          peginRequest.amount = amount = amt
          const newP = await updatePeginCommit(peginRequest)
          if (newP && newP.status !== 404) peginRequest = newP;
        } else {
          amount = amt;
        }
        const conf:SbtcConfig = $sbtcConfig;
        sbtcConfig.update(() => conf);
        peginRequest = getOpReturnDepositRequest(network, amount, $sbtcConfig.keys.deposits, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress, $sbtcConfig.sbtcContractData!.sbtcWalletAddress, bitcoinAddress);
        peginRequest.originator = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress; // retain the sender in case the address in UI changes.
        timeLineStatus = 2;
        dispatch('time_line_status_change', { timeLineStatus });
      } catch(err:any) {
        amountErrored = 'Minimum deposit is ' + satsToBitcoin(minimumDeposit) + ' btc'
        makeFlash(document.getElementById(input2Data.field))
      }
    } else if (button.target === 'back') {
      // Delete the current invoice and start a new one ?
      // const mongoId = $sbtcConfig.pegInMongoId;
      // if (mongoId) {
      // await deletePeginById(mongoId);
      // const conf:SbtcConfig = $sbtcConfig;
      // conf.pegInMongoId = undefined;
      // sbtcConfig.update(() => conf);
      // initComponent()
      timeLineStatus = 1;
      dispatch('time_line_status_change', { timeLineStatus });
    } else if (button.target === 'status-check') {
      //await doPeginScan();
      if ($sbtcConfig.pegInMongoId) pegin = await fetchPeginById($sbtcConfig.pegInMongoId);
      timeLineStatus = 3;
      dispatch('time_line_status_change', { timeLineStatus });
    } else if (button.target === 'transaction-history') {
      goto('/transactions')
    }
    //updateConfig();
  }

  /**
   * 1. Create or hydrate a deposit object.
   * 2. Check server for an existing invoice correspondng to the hydrated deposit
   */
  const initComponent = async () => {
    //const tx = buildOpReturnTransaction(network, amount, $sbtcConfig.btcFeeRates, addressInfo, stacksAddress, $sbtcConfig.sbtcContractData.sbtcWalletAddress, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal)
    input0Data.value = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal || '';
    input0Data.resetValue = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal || '';
    input0Data.hint = '';
    input1Data.value = stacksAddress;
    input1Data.resetValue = input1Data.value;
    input2Data.valueSat = amount;
    if (amount) input2Data.valueBtc = satsToBitcoin(amount);
    input2Data.hint = 'Balance: ' + userSatBtc(maxCommit(addressInfo), $sbtcConfig.userSettings.currency.denomination) + ' bitcoin - please allow for gas fees';
    const conf:SbtcConfig = $sbtcConfig;
    dispatch('time_line_status_change', { timeLineStatus });
    sbtcConfig.update(() => conf);
  }

  onDestroy(() => {
    stopTxWatcher();
  });

  onMount(async () => {
    try {
      bitcoinAddress = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal
      addressInfo = await fetchUtxoSet($sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal)
      stacksAddress =$sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress
      //const data = buildDepositPayload(network, 1000, stacksAddress, false, undefined);
      //calculateDepositFees(CONFIG.VITE_NETWORK, false, 1000, $sbtcConfig.btcFeeRates, addressInfo, $sbtcConfig.sbtcContractData.sbtcWalletAddress, data)
      await initComponent();
      inited = true;
      dispatch('inited', { inited });
    } catch(err) {
      dispatch('time_line_status_change', { timeLineStatus: -1 });
    }
  })
</script>

<div class="flex flex-col w-full border-[0.5px] border-gray-700 rounded-2xl p-10 overflow-hidden">
  {#if !inited}
    <p class="text-2xl text-white font-medium">Fetching data... Please wait.</p>
  {:else}
    <DepositFormHeader />
    {#if timeLineStatus === 1}
      {#key componentKey}
      <div class="mb-5">
        <InputTextField
          readonly={false}
          inputData={input0Data}
          on:updated={fieldUpdated}
        />
      </div>
      {#if balanceMsg}
          <Banner class="mt-3" bannerType={'warning'} message={'Please transfer some BTC to your Web Wallet (the above address) to continue or switch the transaction mode back to "OP_DROP" in the Settings dropdown.'} />
        {:else}
        <div class="mb-5">
          <InputTextField
            readonly={false}
            inputData={input1Data}
            on:updated={fieldUpdated}
          />
        </div>
        <div class="mb-5">
          <BitcoinAmountField inputData={input2Data} on:updated={fieldUpdated}/>
        </div>
        {#if amountErrored}
            <p class="text-error-500 pb-5">
              {amountErrored}
            </p>
          {/if}

          <div class="mt-0">
            <Button
              darkScheme={false}
              label={'Continue'}
              target={'openInvoice'}
              on:clicked={(event) => doClicked(event)}
            />
          </div>
        {/if}
      {/key}
    {:else if timeLineStatus === 2}
      <SignTransactionWeb {amount} {addressInfo} {peginRequest} on:update_transaction={updateTransaction}/>
    {:else if timeLineStatus === 3}
      <StatusCheck {pegin} on:clicked={doClicked}/>
    {/if}
  {/if}

  {#if errored}
    <ServerError />
  {/if}
</div>