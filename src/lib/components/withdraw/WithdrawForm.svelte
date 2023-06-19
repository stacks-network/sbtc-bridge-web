<script lang="ts">
import { createEventDispatcher, onDestroy, onMount } from "svelte";
import { goto } from "$app/navigation";
import { CONFIG } from '$lib/config';
import Button from '$lib/components/shared/Button.svelte';
import WithdrawFormHeader from './WithdrawFormHeader.svelte';
import InputTextField from '../deposit/InputTextField.svelte';
import InputNumberField from '../deposit/InputNumberField.svelte';
import { sbtcConfig } from '$stores/stores'
import PegOutTransaction from '$lib/domain/PegOutTransaction';
import type { PegOutTransactionI } from '$lib/domain/PegOutTransaction';
import type { PeginRequestI, PegInData, CommitKeysI } from 'sbtc-bridge-lib' 
import { signMessage, verifyStacksPricipal, verifySBTCAmount, addresses } from '$lib/stacks_connect';
import { getTestAddresses } from 'sbtc-bridge-lib' 
import type { SbtcConfig } from '$types/sbtc_config';
import ScriptHashAddress from '$lib/components/deposit/ScriptHashAddress.svelte';
import { makeFlash } from "$lib/stacks_connect";
import { fetchPeginById, doPeginScan } from "$lib/bridge_api";
import Banner from '$lib/components/shared/Banner.svelte';
import SignTransactionWeb from "$lib/components/deposit/op_return/SignTransactionWeb.svelte";

const dispatch = createEventDispatcher();

let piTx:PegOutTransactionI;
let pegout:PeginRequestI;
let amountErrored:string|undefined = undefined;

const network = CONFIG.VITE_NETWORK;
let inited = false;
let componentKey = 0;
let timeLineStatus = 1;
let peginRequest:PeginRequestI;
let balanceMsg = false;

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
  label: 'Amount (satoshi units)',
  hint: '',
  resetValue: 0,
  value: 0
}

const fieldUpdated = async (event:any) => {
  const conf:SbtcConfig = $sbtcConfig;
  const input = event.detail;
  if (input.field === 'address') {
    verifyStacksPricipal(input.value);
    piTx.pegInData.stacksAddress = input.value;
  } else if (input.field === 'amount') {
    verifySBTCAmount(input.value, $sbtcConfig.addressObject!.sBTCBalance, piTx.fee);
    piTx.pegInData.amount = input.value;
  }
  conf.pegOutMongoId = undefined;
  conf.pegInTransaction = piTx;
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

/**
const requestSignatureCB = async (sigData:any, message:Uint8Array) => {
  //const script = hex.encode(message);
  piTx.signature = sigData.signature;
  const conf:SbtcConfig = $sbtcConfig;
  conf.sigData = sigData.signature;
  sbtcConfig.update(() => conf);
  const hashedM = getStacksSimpleHashOfDataToSign(CONFIG.VITE_NETWORK, piTx.pegInData.amount, piTx.pegInData.sbtcWalletAddress)
  const addr = getStacksAddressFromSignature(hex.decode(hashedM), sigData.signature, 0)
  console.log('requestSignatureCB: ', addr)
  dispatch('request_signature', { piTx });
}
*/

const doClicked = async (event:any) => {
  amountErrored = undefined;
  const button = event.detail;
  if (button.target === 'showInvoice') {
    try {
      verifySBTCAmount(input2Data.value, $sbtcConfig.addressObject!.sBTCBalance, piTx.fee);
      piTx.pegInData.amount = input2Data.value;
      const script = piTx.getDataToSign();
      await signMessage(async function(sigData:any, message:Uint8Array) {
        piTx.signature = sigData.signature;
        try {
          if ($sbtcConfig.userSettings.useOpDrop) {
            peginRequest = piTx.getOpDropPeginRequest();
          } else {
            peginRequest = piTx.getOpReturnPeginRequest();
          }
        } catch (err) {
          piTx.commitKeys = commitAddresses(); // make sure the addresses are all hex encoded and serialisation safe.
          peginRequest = piTx.getOpDropPeginRequest();
        }
        peginRequest.originator = $sbtcConfig.addressObject!.stxAddress; // retain the sender in case the address in UI changes.
        

        const conf:SbtcConfig = $sbtcConfig;
        conf.sigData = sigData.signature;
        sbtcConfig.update(() => conf);
        //pegout = piTx.getOpDropPeginRequest();
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
    // Delete the current invoice and start a new one ?
    // const mongoId = $sbtcConfig.pegOutMongoId;
    // if (mongoId) {
    // await deletePeginById(mongoId);
    // const conf:SbtcConfig = $sbtcConfig;
    // conf.pegOutMongoId = undefined;
    // sbtcConfig.update(() => conf);
    // initComponent()
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
  //updateConfig();
}

const commitAddresses = ():CommitKeysI => {
  const addrs = addresses()
  const stacksAddress = (piTx && piTx.pegInData?.stacksAddress) ? piTx.pegInData?.stacksAddress : addrs.stxAddress;
  let fromBtcAddress = addrs.cardinal; //$sbtcConfig.peginRequest.fromBtcAddress || addrs.ordinal;
  let sbtcWalletAddress = $sbtcConfig.sbtcContractData.sbtcWalletAddress as string;
  let testAddrs;
  if ($sbtcConfig.userSettings.testAddresses) {
    testAddrs = getTestAddresses(CONFIG.VITE_NETWORK);
  }
  //const xyWebWalletPubKey = hex.decode(addrs.btcPubkeySegwit1);
  //let xOnlyPubKey = hex.encode(xyWebWalletPubKey.subarray(1));
  //const net = (network === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
  //const outTr = { type: 'tr', pubkey: hex.decode(addrs.btcPubkeySegwit1) }
  //const addrO = btc.Address(net).encode(outTr);
  //const addrScript = btc.Address(net).decode(addrs.ordinal);
  //if (addrScript.type !== 'tr') throw new Error('Expecting taproot address')
  //const xOnlyPubKey = hex.encode(addrScript.pubkey)
  return {
    fromBtcAddress,
    sbtcWalletAddress,
    revealPub: $sbtcConfig.keys.deposits.revealPubKey, //(testAddrs) ? testAddrs.revealPub : sbtcWallet.pubKey,
    reclaimPub: $sbtcConfig.keys.deposits.reclaimPubKey,
    stacksAddress
  }
}

/**
 * 1. Create or hydrate a deposit object.
 * 2. Check server for an existing invoice correspondng to the hydrated deposit
 */
const initComponent = async () => {
  const addressObject = $sbtcConfig.addressObject!; 
  if (!piTx) {
    if ($sbtcConfig.pegOutTransaction) {
      piTx = PegOutTransaction.hydrate($sbtcConfig.pegOutTransaction);
    } else {
      piTx = await PegOutTransaction.create(network, commitAddresses(), $sbtcConfig.btcFeeRates);
    }
  }
  if (!piTx.pegInData) piTx.pegInData = {} as PegInData;
  if (!piTx.pegInData.stacksAddress && addressObject.stxAddress) piTx.pegInData.stacksAddress = addressObject.stxAddress;
  input0Data.value = input0Data.resetValue = addressObject.cardinal;
  input0Data.hint = 'Bitcoin will be sent here. Current balance is ' + piTx.maxCommit() + ' sats';
  input1Data.value = input1Data.resetValue = piTx.pegInData.stacksAddress!;
  if (piTx.pegInData.amount <= 0 || piTx.pegInData.amount > (addressObject.sBTCBalance - piTx.fee)) {
    piTx.pegInData.amount = input2Data.value = input2Data.resetValue = addressObject.sBTCBalance - piTx.fee;
  }
  if (addressObject.sBTCBalance <= 0) balanceMsg = true
  input2Data.hint = 'sBTC Balance: ' + addressObject.sBTCBalance;
  input2Data.value = piTx.pegInData.amount;
  dispatch('time_line_status_change', { timeLineStatus });

  const conf:SbtcConfig = $sbtcConfig;
  conf.pegOutMongoId = undefined;
  conf.pegOutTransaction = piTx;
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
    await initComponent();
    startTxWatcher()
    inited = true;
  } catch(err) {
    dispatch('time_line_status_change', { timeLineStatus: -1 });
  }
})
</script>


{#if !inited}
<div class="text-2xl text-warning-700 py-10 px-5">Fetching data.. won't be long</div>
{:else}
<div class="mb-5 flex flex-col gap-y-2 w-full border border-gray-700 rounded-lg align-middle  text-sm justify-start px-5">
  <WithdrawFormHeader />
  {#if !balanceMsg}
    {#if timeLineStatus === 1}
    {#key componentKey}
      <InputTextField readonly={true} inputData={input0Data} on:updated={fieldUpdated}/>
      <InputTextField readonly={true} inputData={input1Data} on:updated={fieldUpdated}/>
      <InputNumberField inputData={input2Data} on:updated={fieldUpdated}/>
      {#if amountErrored}<div class="text-warning-600">{amountErrored}</div>{/if}
      <Button darkScheme={false} label={'Sign Message'} target={'showInvoice'} on:clicked={doClicked}/>
    {/key}
    {:else if timeLineStatus === 2}
    <ScriptHashAddress {peginRequest} on:clicked={doClicked}/>
    {:else if timeLineStatus === 4}
    <SignTransactionWeb {piTx} {peginRequest} on:update_transaction={updateTransaction}/>
    {/if}
  {:else}
    <Banner class="mt-10" bannerType={'danger'} message={'You don\'t have enough sBTC to withdraw.'} />
    <div class="my-3"><p class="text-gray-300">No sBTC to withdraw - <a class="text-warning-500" href="/deposit">get some here?</a></p></div>
  {/if}
</div>
{/if}
