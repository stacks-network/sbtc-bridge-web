  <script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { CONFIG } from '$lib/config';
  import Button from '$lib/components/shared/Button.svelte';
  import WithdrawFormHeader from './WithdrawFormHeader.svelte';
  import InputTextField from '../deposit/InputTextField.svelte';
  import BitcoinAmountField from '../deposit/BitcoinAmountField.svelte';
  import { sbtcConfig } from '$stores/stores'
  import type { BridgeTransactionType, PegInData, CommitKeysI } from 'sbtc-bridge-lib'
  import { signMessage, verifyStacksPricipal, verifySBTCAmount } from '$lib/stacks_connect';
  import type { SbtcConfig } from '$types/sbtc_config';
  import ScriptHashAddress from '$lib/components/deposit/ScriptHashAddress.svelte';
  import { makeFlash } from "$lib/stacks_connect";
  import { fetchPeginById, fetchUtxoSet } from "$lib/bridge_api";
  import Banner from '$lib/components/shared/Banner.svelte';
  import SignTransactionWeb from "$lib/components/deposit/op_return/SignTransactionWeb.svelte";
  import { userSatBtc, satsToBitcoin } from '$lib/utils'
  import { signMessageDirect, btcAddress, address } from '$lib/stacks_connect_bug';
	import { maxCommit } from "sbtc-bridge-lib";
	import { calculateWithdrawFees, dataToSign, getOpDropWithdrawRequest, getOpReturnWithdrawRequest } from "sbtc-bridge-lib";
  import { fmtSatoshiToBitcoin, fmtMicroToStx, bitcoinBalanceFromMempool } from '$lib/utils'

  const dispatch = createEventDispatcher();

  let pegout:BridgeTransactionType;
  let amountErrored:string|undefined = undefined;
  let bitcoinAddress:string;
  let stacksAddress:string;
  let amount:number;
  let addressInfo:any;

  const network = CONFIG.VITE_NETWORK;
  let inited = false;
  let componentKey = 0;
  let timeLineStatus = 1;
  let peginRequest:BridgeTransactionType;
  let balanceMsg = false;
  let txFees:Array<number>;

  const input0Data = {
    field: 'btcAddress',
    label: 'Your Bitcoin Address',
    hint: 'Bitcoin will be sent from this account so it needs to cover the amount and tx fees.',
    resetValue: '',
    value: ''
  }

  const input1Data = {
    field: 'address',
    label: 'Stacks Address',
    hint: 'sBTC will be withdraw from this account.',
    resetValue: '',
    value: ''
  }

  const input2Data = {
    field: 'amount',
    label: 'Amount (sBTC)',
    hint: '',
    resetValue: 0,
    valueBtc: 0.0,
    valueSat: 0
  }

  const fieldUpdated = async (event:any) => {
    const conf:SbtcConfig = $sbtcConfig;
    const input = event.detail;
    if (input.field === 'address') {
      verifyStacksPricipal(input.value);
      stacksAddress = input.value;
    } else if (input.field === 'amount') {
      verifySBTCAmount(input.value, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].sBTCBalance, txFees[1]);
      amount = input.value;
    }
    conf.pegOutMongoId = undefined;
    sbtcConfig.update(() => conf);
    initComponent();
    componentKey++;
  }

  let txWatcher:NodeJS.Timer;
  const startTxWatcher = async () => {
    const mongoId = $sbtcConfig.pegOutMongoId;
    if (!mongoId) return;
    txWatcher = setInterval(async function () {
      pegout = await fetchPeginById(mongoId);
      if (pegout.status === 2) {
        timeLineStatus = 3;
        dispatch('time_line_status_change', { timeLineStatus });
        stopTxWatcher()
      }
    }, 60000)
  }
  const stopTxWatcher = () => {
    if (txWatcher) clearInterval(txWatcher)
  }

  const doClickShowInvoice = async () => {
    const amt = input2Data.valueSat
    verifySBTCAmount(amt, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].sBTCBalance, 0);
    stacksAddress = address;
    amount = amt;
    const script = dataToSign(CONFIG.VITE_NETWORK, amount, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal);
    console.log('message: ' + script)
    const noPrefixSignature = signMessageDirect(script);
    let signature = noPrefixSignature.signature
    peginRequest = getOpReturnWithdrawRequest(network, amount, $sbtcConfig.sbtcContractData.sbtcWalletAddress, stacksAddress, signature, $sbtcConfig.keys, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal)
    peginRequest.originator = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress; // retain the sender in case the address in UI changes.
    const conf:SbtcConfig = $sbtcConfig;
    conf.sigData = signature;
    sbtcConfig.update(() => conf);
    timeLineStatus = 2;
    if (!$sbtcConfig.userSettings?.useOpDrop) {
      timeLineStatus = 4;
    }
    dispatch('time_line_status_change', { timeLineStatus });
  }

  const doClicked = async (event:any) => {
    amountErrored = undefined;
    const button = event.detail;
    if (button.target === 'showInvoice') {
      try {
        const amt = input2Data.valueSat
        verifySBTCAmount(amt, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].sBTCBalance, 0);
        amount = amt;
        const script = dataToSign(CONFIG.VITE_NETWORK, amount, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal);
        console.log('HASH: ' + script)
        await signMessage(async function(sigData:any, message:Uint8Array) {
          const signature = sigData.signature;
          try {
            if ($sbtcConfig.userSettings.useOpDrop) {
              peginRequest = getOpDropWithdrawRequest(network, amount, $sbtcConfig.sbtcContractData.sbtcWalletAddress, stacksAddress, signature, $sbtcConfig.keys, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal);
            } else {
              peginRequest = getOpReturnWithdrawRequest(network, amount, $sbtcConfig.sbtcContractData.sbtcWalletAddress, stacksAddress, signature, $sbtcConfig.keys, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal)
            }
          } catch (err) {
            peginRequest = getOpDropWithdrawRequest(network, amount, $sbtcConfig.sbtcContractData.sbtcWalletAddress, stacksAddress, signature, $sbtcConfig.keys, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal);
          }
          peginRequest.originator = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress;
          const conf:SbtcConfig = $sbtcConfig;
          conf.sigData = sigData.signature;
          sbtcConfig.update(() => conf);
          timeLineStatus = 2;
          if (!$sbtcConfig.userSettings?.useOpDrop) {
            timeLineStatus = 4;
          }
          dispatch('time_line_status_change', { timeLineStatus });
        }, script);
      } catch(err:any) {
        amountErrored = 'Please enter an amount - no more than your current sBTC balance.'
        makeFlash(document.getElementById(input2Data.field))
      }
    } else if (button.target === 'back') {
      timeLineStatus = 1;
      dispatch('time_line_status_change', { timeLineStatus });
    } else if (button.target === 'status-check') {
      //await doPeginScan();
      if ($sbtcConfig.pegOutMongoId) pegout = await fetchPeginById($sbtcConfig.pegOutMongoId);
      timeLineStatus = 3;
      goto('/transactions/' + peginRequest._id);
    } else if (button.target === 'transaction-history') {
      goto('/transactions')
    }
  }

  /**
   * 1. Create or hydrate a deposit object.
   * 2. Check server for an existing invoice correspondng to the hydrated deposit
   */
  const initComponent = async () => {
    const addressObject = $sbtcConfig.keySets[CONFIG.VITE_NETWORK];
    input0Data.value = input0Data.resetValue = addressObject.cardinal;
    const cardinalBal = fmtSatoshiToBitcoin(bitcoinBalanceFromMempool($sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinalInfo) || 0.00000000)
    input0Data.hint = 'Your bitcoin will be sent to this address. Current balance is ' + cardinalBal + ' bitcoin';
    
    input1Data.value = input1Data.resetValue = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress;
    
    if (amount <= 0 || amount > (addressObject.sBTCBalance - txFees[1])) {
      input2Data.resetValue = addressObject.sBTCBalance;
    }
    if (addressObject.sBTCBalance <= 0) balanceMsg = true
    input2Data.label = 'sBTC amount to withdraw';
    input2Data.hint = 'sBTC Balance: ' + addressObject.sBTCBalance + ' satoshis';
    input2Data.valueSat = amount;
    input2Data.valueBtc = satsToBitcoin(amount);
    
    dispatch('time_line_status_change', { timeLineStatus });
    const conf:SbtcConfig = $sbtcConfig;
    conf.pegOutMongoId = undefined;
    sbtcConfig.update(() => conf);
}

  const updateTransaction = () => {
    timeLineStatus = 1;
    dispatch('time_line_status_change', { timeLineStatus });
  }

  onDestroy(() => {
    stopTxWatcher();
  });

  onMount(async () => {
    try {
      bitcoinAddress = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal
      addressInfo = await fetchUtxoSet($sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal)
      stacksAddress =$sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress;
      txFees = calculateWithdrawFees(network, true, addressInfo, amount, $sbtcConfig.btcFeeRates, $sbtcConfig.sbtcContractData.sbtcWalletAddress, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal, $sbtcConfig.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0, undefined)
      amount = $sbtcConfig.keySets[CONFIG.VITE_NETWORK].sBTCBalance;
      await initComponent();
      startTxWatcher();
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
    <WithdrawFormHeader />
    {#if !balanceMsg}
      {#if timeLineStatus === 1}
        {#key componentKey}
          <div class="mb-5"><InputTextField readonly={true} inputData={input0Data} on:updated={fieldUpdated}/></div>
          <div class="mb-5"><InputTextField readonly={true} inputData={input1Data} on:updated={fieldUpdated}/></div>
          <div class="mb-5"><BitcoinAmountField inputData={input2Data} on:updated={fieldUpdated}/></div>

          {#if amountErrored}<div class="text-warning-600 py-5">{amountErrored}</div>{/if}
          <div class="mb-5">
            <Button
              darkScheme={false}
              label={'Sign Message'}
              target={'showInvoice'}
              on:clicked={doClicked}
            />
          </div>
        {/key}
      {:else if timeLineStatus === 2}
        <ScriptHashAddress {peginRequest} on:clicked={doClicked}/>
      {:else if timeLineStatus === 4}
        <SignTransactionWeb {amount} {addressInfo} {peginRequest} on:update_transaction={updateTransaction}/>
      {/if}
    {:else}
      <Banner
        bannerType={'info'}
        message={'You don\'t have any sBTC to withdraw.<p>You can easily get some sBTC by <a href="/deposit" class="underline">depositing BTC</a>.'}
      />
    {/if}
  {/if}
</div>
