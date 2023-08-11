<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { CONFIG } from '$lib/config';
  import DepositFormHeader from '$lib/components/deposit/DepositFormHeader.svelte';
  import InputTextField from '$lib/components/deposit/InputTextField.svelte';
  import BitcoinAmountField from '$lib/components/deposit/BitcoinAmountField.svelte';
  import { sbtcConfig } from '$stores/stores'
  import { verifyStacksPricipal, verifyAmount } from '$lib/stacks_connect';
  import type { SbtcConfig } from '$types/sbtc_config';
  import ScriptHashAddress from '$lib/components/deposit/ScriptHashAddress.svelte';
  import { makeFlash } from "$lib/stacks_connect";
  import { fetchPeginById, savePeginCommit, fetchPeginsByStacksAddress } from "$lib/bridge_api";
  import StatusCheck from "$lib/components/deposit/StatusCheck.svelte";
  import Button from '$lib/components/shared/Button.svelte';
  import type { PeginRequestI } from 'sbtc-bridge-lib'
  import { getOpDropPeginRequest, maxCommit } from 'sbtc-bridge-lib'
  import { fetchUtxoSet } from '$lib/bridge_api'

  const dispatch = createEventDispatcher();

  let peginRequest:PeginRequestI;
  let stacksAddress:string;
  let amount:number;

  const network = CONFIG.VITE_NETWORK;
  let inited = false;
  let amountErrored:string|undefined = undefined;
  let componentKey = 0;
  let timeLineStatus = 1;
  let addressInfo:any;

  const input1Data = {
    field: 'address',
    label: 'Stacks or Contract Address',
    hint: 'sBTC will be minted to this account or contract.',
    resetValue: '',
    value: ''
  }

  const input2Data = {
    field: 'amount',
    label: 'Amount (in Bitcoin)',
    hint: 'Amount to deposit - must be less than available balance',
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
    } else if (input.field === 'amount') {
      amountErrored = undefined;
      try {
        amount = input.valueSat;
        verifyAmount(input.value);
      } catch (err) {
        //input2Data.hint = amountErrored = 'Amount below required threshold'
        return
      }
    }
    conf.pegInMongoId = undefined;
    sbtcConfig.update(() => conf);
    initComponent();
    componentKey++;
  }

  let txWatcher:NodeJS.Timer;
  const startTxWatcher = async () => {
    const mongoId = $sbtcConfig.pegInMongoId;
    if (!mongoId) return;
    txWatcher = setInterval(async function () {
      peginRequest = await fetchPeginById(mongoId);
      if (peginRequest && peginRequest.status === 2) {
        timeLineStatus = 3;
        dispatch('time_line_status_change', { timeLineStatus });
        stopTxWatcher()
      }
    }, 60000)
  }
  const stopTxWatcher = () => {
    if (txWatcher) clearInterval(txWatcher)
  }

  const savePeginRequestToDB = async () => {
    try {
      const newPegin = await savePeginCommit(peginRequest)
      if (!newPegin) throw new Error('Unable to save - already exists');
      if (newPegin.insertedId) {
        //pegin = peginRequest;
        peginRequest._id = newPegin.insertedId;
      } else {
        peginRequest = newPegin;
      }
    } catch(err) {
      const pegins = await fetchPeginsByStacksAddress(peginRequest.originator);
      if (!pegins || pegins.length === 0) throw new Error('Pegin requestion is both found and not found');
      const peginFromList = pegins.find((p) => p.amount === peginRequest.amount)
      if (peginFromList && peginFromList._id ) {
        peginRequest = peginFromList;
      } else {
        throw new Error('Pegin requestion is both found and not found');
      }
    }
  }

  const doClicked = async (event:any) => {
    amountErrored = undefined;
    const button = event.detail;
    if (button.target === 'openInvoice') {
      try {
        const amt = input2Data.valueSat
        verifyAmount(amt);
        amount = amt;
        peginRequest = getOpDropPeginRequest(network, amount, $sbtcConfig.keys.deposits, stacksAddress, $sbtcConfig.sbtcContractData.sbtcWalletAddress, $sbtcConfig.addressObject!.cardinal);
        const conf:SbtcConfig = $sbtcConfig;
        sbtcConfig.update(() => conf);
        await savePeginRequestToDB();
        timeLineStatus = 2;
        dispatch('time_line_status_change', { timeLineStatus });
      } catch(err:any) {
        amountErrored = 'This application is only for testnet at the moment. Please use the `Settings` menu to switch network.'
        if (CONFIG.VITE_NETWORK === 'testnet') {
          amountErrored = 'Amount below required threshold.'
        }
        makeFlash(document.getElementById(input2Data.field))
        componentKey++
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
      if ($sbtcConfig.pegInMongoId) peginRequest = await fetchPeginById($sbtcConfig.pegInMongoId);
      if (!peginRequest || peginRequest.status > 1) {
        const conf:SbtcConfig = $sbtcConfig;
        conf.pegInMongoId = undefined;
        sbtcConfig.update(() => conf);
        timeLineStatus = 1;
        dispatch('time_line_status_change', { timeLineStatus });
      } else {
        goto('/transactions/' + peginRequest._id);
        return
      }
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
    input1Data.value = stacksAddress;
    input1Data.resetValue = input1Data.value;
    input2Data.valueSat = amount;
    peginRequest = getOpDropPeginRequest(network, amount, $sbtcConfig.keys.deposits, stacksAddress, $sbtcConfig.sbtcContractData.sbtcWalletAddress, $sbtcConfig.addressObject!.cardinal);
    peginRequest.originator = $sbtcConfig.addressObject!.stxAddress; // retain the sender in case the address in UI changes.

    const conf:SbtcConfig = $sbtcConfig;
    if ($sbtcConfig.pegInMongoId) {
      peginRequest = await fetchPeginById($sbtcConfig.pegInMongoId);
      if (!peginRequest || peginRequest.status > 1) {
        conf.pegInMongoId = undefined;
        sbtcConfig.update(() => conf);
      } else if (peginRequest.amount === 0) {
        timeLineStatus = 1;
      } else {
        goto('/transactions/' + peginRequest._id);
        return
      }
    }
    dispatch('time_line_status_change', { timeLineStatus });
    sbtcConfig.update(() => conf);
  }

  onDestroy(() => {
    stopTxWatcher();
  });

  onMount(async () => {
    try {
      addressInfo = await fetchUtxoSet($sbtcConfig.addressObject!.cardinal)
      stacksAddress =$sbtcConfig.addressObject!.stxAddress
      amount = maxCommit(addressInfo);
      await initComponent();
      startTxWatcher()
      inited = true;
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
    {#if timeLineStatus === 1 || peginRequest.amount === 0}
      {#key componentKey}
      <div class="space-y-6 mb-5">
        <InputTextField readonly={false} inputData={input1Data} on:updated={fieldUpdated}/>
      </div>
      <div class="space-y-6">
        <BitcoinAmountField inputData={input2Data} on:updated={fieldUpdated}/>
      </div>
      {#if amountErrored}
          <p class="text-error-500">{amountErrored}</p>
        {/if}

        <div class="my-6">
          <Button
            darkScheme={false}
            label={'Show Invoice / QR code'}
            target={'openInvoice'}
            on:clicked={(event) => doClicked(event)}
          />
        </div>
      {/key}
    {:else if timeLineStatus === 2}
      <ScriptHashAddress peginRequest={peginRequest} on:clicked={doClicked}/>
    {:else if timeLineStatus === 3}
      <StatusCheck pegin={peginRequest} on:clicked={doClicked}/>
    {/if}
  {/if}
</div>
