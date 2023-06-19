<script lang="ts">
import { createEventDispatcher, onDestroy, onMount } from "svelte";
import { goto } from "$app/navigation";
import { CONFIG } from '$lib/config';
import DepositFormHeader from '$lib/components/deposit/DepositFormHeader.svelte';
import InputTextField from '$lib/components/deposit/InputTextField.svelte';
import InputNumberField from '$lib/components/deposit/InputNumberField.svelte';
import { sbtcConfig } from '$stores/stores'
import PegInTransaction from '$lib/domain/PegInTransaction';
import type { PegInTransactionI } from '$lib/domain/PegInTransaction';
import type { PeginRequestI, PegInData, CommitKeysI } from 'sbtc-bridge-lib' 
import { verifyStacksPricipal, verifyAmount, addresses } from '$lib/stacks_connect';
import { getTestAddresses, sbtcWallets } from 'sbtc-bridge-lib' 
import type { SbtcConfig } from '$types/sbtc_config';
import ScriptHashAddress from '$lib/components/deposit/ScriptHashAddress.svelte';
import { makeFlash } from "$lib/stacks_connect";
import { fetchPeginById, savePeginCommit, fetchPeginsByStacksAddress, doPeginScan } from "$lib/bridge_api";
import StatusCheck from "$lib/components/deposit/StatusCheck.svelte";
import Button from '$lib/components/shared/Button.svelte';

const dispatch = createEventDispatcher();

let piTx:PegInTransactionI;
let peginRequest:PeginRequestI;

const network = CONFIG.VITE_NETWORK;
let inited = false;
let amountErrored:string|undefined = undefined;
let componentKey = 0;
let timeLineStatus = 1;

const input1Data = {
  field: 'address',
  label: 'Stacks or Contract Address',
  hint: 'sBTC will be minted to this account or contract.',
  resetValue: '',
  value: ''
}

const input2Data = {
  field: 'amount',
  label: 'Amount (satoshis)',
  hint: '',
  resetValue: undefined,
  value: 10000
}

const fieldUpdated = async (event:any) => {
  const conf:SbtcConfig = $sbtcConfig;
  const input = event.detail;
  if (input.field === 'address') {
    verifyStacksPricipal(input.value);
    piTx.pegInData.stacksAddress = input.value;
  } else if (input.field === 'amount') {
    amountErrored = undefined;
    try {
      piTx.pegInData.amount = input.value;
      verifyAmount(input.value);
    } catch (err) {
      //input2Data.hint = amountErrored = 'Amount below required threshold'
      return
    }
  }
  conf.pegInMongoId = undefined;
  conf.pegInTransaction = piTx;
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

const doClicked = async (event:any) => {
  amountErrored = undefined;
  const button = event.detail;
  if (button.target === 'openInvoice') {
    try {
      verifyAmount(input2Data.value);
      piTx.pegInData.amount = input2Data.value;
      peginRequest = piTx.getOpDropPeginRequest();
      const conf:SbtcConfig = $sbtcConfig;
      conf.pegInTransaction = piTx;
      sbtcConfig.update(() => conf);
      await savePeginRequestToDB();
      timeLineStatus = 2;
      dispatch('time_line_status_change', { timeLineStatus });
    } catch(err:any) {
      amountErrored = 'Amount below required threshold'
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
  if (!piTx) {
    if ($sbtcConfig.pegInTransaction) {
      piTx = PegInTransaction.hydrate($sbtcConfig.pegInTransaction);
    } else {
      piTx = await PegInTransaction.create(network, commitAddresses(), $sbtcConfig.btcFeeRates);
    }
  }
  if (!piTx.pegInData) piTx.pegInData = {} as PegInData;
  if (!piTx.pegInData.stacksAddress && addresses().stxAddress) piTx.pegInData.stacksAddress = addresses().stxAddress;
  piTx.pegInData.amount = (piTx.pegInData.amount > 0) ? piTx.pegInData.amount : 0;
  input1Data.value = piTx.pegInData.stacksAddress || '';
  input1Data.resetValue = input1Data.value;
  input2Data.value = piTx.pegInData.amount;
  try {
    peginRequest = piTx.getOpDropPeginRequest();
  } catch (err) {
    piTx.commitKeys = commitAddresses(); // make sure the addresses are all hex encoded and serialisation safe.
    peginRequest = piTx.getOpDropPeginRequest();
  }
  peginRequest.originator = addresses().stxAddress; // retain the sender in case the address in UI changes.
  
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
   //if (peginRequest && peginRequest.commitTxScript && peginRequest.commitTxScript.script && peginRequest.commitTxScript.script.length > 0) 

  dispatch('time_line_status_change', { timeLineStatus });
  //conf.pegInMongoId = pegin._id
  conf.pegInTransaction = piTx;
  sbtcConfig.update(() => conf);
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
<div class="text-2xl text-warning-700 px-5">Fetching data.. won't be long</div>
{:else}
<div class="flex flex-col gap-y-2 w-full border border-gray-700 rounded-lg align-middle  text-sm justify-start px-5">
  <DepositFormHeader />
  {#if timeLineStatus === 1 || peginRequest.amount === 0}
  {#key componentKey}
  <InputTextField readonly={false} inputData={input1Data} on:updated={fieldUpdated}/>
  <InputNumberField inputData={input2Data} on:updated={fieldUpdated}/>
  {#if amountErrored}<div class="text-error-500">{amountErrored}</div>{/if}
  <div class=""><Button darkScheme={false} label={'Show Invoice / QR code'} target={'openInvoice'} on:clicked={(event) => doClicked(event)}/></div>
  
  {/key}
  {:else if timeLineStatus === 2}
  <ScriptHashAddress peginRequest={peginRequest} on:clicked={doClicked}/>
  {:else if timeLineStatus === 3}
  <StatusCheck pegin={peginRequest} on:clicked={doClicked}/>
  {/if}
</div>
{/if}
