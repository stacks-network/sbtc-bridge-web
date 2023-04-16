<script lang="ts">
import { CONFIG } from '$lib/config';
import { onMount } from 'svelte';
import { sbtcConfig } from '$stores/stores'
import type { SbtcConfig } from '$types/sbtc_config';
import Principal from "../common/Principal.svelte";
import PegInAmount from "./PegInAmount.svelte";
import ScriptHashAddress from "./ScriptHashAddress.svelte";
import UTXOSelection from "$lib/components/common/UTXOSelection.svelte";
import { createEventDispatcher } from "svelte";
import PegInTransaction from '$lib/domain/PegInTransaction';
import type { PegInTransactionI } from '$lib/domain/PegInTransaction';
import { addresses } from '$lib/stacks_connect'
import { explorerBtcAddressUrl } from "$lib/utils";
import Modal from '$lib/components/shared/Modal.svelte';

export let piTx:PegInTransactionI;
if (!piTx.fromBtcAddress) piTx.fromBtcAddress = addresses().cardinal;
let componentKey3 = 0;

const getExplorerUrl = () => {
  return explorerBtcAddressUrl(piTx.fromBtcAddress)
}

if (!piTx.pegInData.stacksAddress && addresses().stxAddress) piTx.pegInData.stacksAddress = addresses().stxAddress
const principalData = {
  label: 'Stacks Address (Account or Contract)',
  info: 'sBTC will be minted to this account or contract',
  currentAddress: piTx.pegInData.stacksAddress
}
const amtData = () => {
  return {
    pegIn: true,
    label: 'Amount (Satoshis)',
    info: 'The amount to wrap cannot exceed your balance less some satoshi to pay gas fees',
    pegAmount: (piTx.pegInData.amount) ? piTx.pegInData.amount : piTx.maxCommit() - piTx.fee,
    maxCommit: piTx.maxCommit(),
    change: piTx.getChange(),
    fee: piTx.fee,
    fees: piTx.fees,
    dust: piTx.dust
  }
}

const network = CONFIG.VITE_NETWORK;
$: utxoData = {
  label: 'Return Bitcoin Address',
  info: 'Your BTC will be returned to this address if for any reason the sBTC does not materialize',
  utxos: piTx.addressInfo.utxos,
  maxCommit: (piTx.ready) ? piTx.maxCommit() : 0,
  fromBtcAddress: piTx.fromBtcAddress,
  numbInputs: (piTx.ready && piTx.addressInfo.utxos) ? piTx.addressInfo.utxos.length : 0,
  network
}

console.log('piTx:', piTx);
const dispatch = createEventDispatcher();

let errorReason:string|undefined;
let stxAddressOk = true;
let amountOk = false;

const updateConfig = () => {
  const conf:SbtcConfig = $sbtcConfig;
  conf.pegInTransaction = piTx;
  sbtcConfig.update(() => conf);
  amountOk = piTx.pegInData?.amount > 0;
}

const amountUpdated = (event:any) => {
  errorReason = undefined;
  amountOk = !event.detail.error;
  if (event.detail.opCode === 'user') {
    try {
      piTx.setAmount(event.detail.newAmount)
    } catch (err:any) {
      errorReason = err;
      piTx.setAmount(piTx.maxCommit() - piTx.fee);
    }
  } else if (event.detail.opCode === 'prio') {
    piTx.setFeeRate(event.detail.newFeeRate)
    if (piTx.pegInData.amount > piTx.maxCommit() - piTx.fee) piTx.setAmount(piTx.maxCommit() - piTx.fee)
  }
  updateConfig();
  componentKey3++;
}

const principalUpdated = (event:any) => {
  errorReason = undefined;
  stxAddressOk = !event.detail.error;
  if (stxAddressOk) {
    piTx.setStacksAddress(event.detail.currentAddress)
    updateConfig();
  }
}

const utxoUpdated = async (event:any) => {
  errorReason = undefined;
  const data:any = event.detail;
  if (data.opCode === 'address-change') {
    try {
      const p0 = piTx.pegInData;
      const stacksAddress = (piTx.pegInData?.stacksAddress) ? piTx.pegInData?.stacksAddress : addresses().stxAddress;
      piTx = await PegInTransaction.create(network, data.bitcoinAddress, $sbtcConfig.sbtcContractData.sbtcWalletAddress, stacksAddress);
      piTx.calculateFees();
      piTx.setStacksAddress(stacksAddress);
      if (p0.amount > 0 && p0.amount < piTx.maxCommit()) piTx.setAmount(p0.amount);
      updateConfig();
    } catch (err:any) {
      errorReason = 'Your address either has no balance or there are unconfirmed transactions. You can paste another address or check this address here <a href=' + getExplorerUrl() + ' target="_blank">btc explorer</a>'
      //if (err.message !== 'No inputs signed') errorReason = err.message;
      //else errorReason = 'Please fix above errors and try again.'
    }
  }
}

$: showStxAddress = piTx.ready && !errorReason;
$: showAmount = piTx.ready && stxAddressOk && !errorReason;
$: showButton = piTx.ready && amountOk && !errorReason;

let showModal:boolean;
const nextStep = () => {
  if ($sbtcConfig.userSettings.useOpDrop) {
    showModal = !showModal;
  } else {
    dispatch('request_signature');
  }
}
const closeModal = () => {
  showModal = false;
}
const closeOnEscape = (e:any) => {
  if (e.key === 'Escape') {
    showModal = false;
  }
}


let inited = false;
onMount(async () => {
  const stacksAddress = (piTx.pegInData?.stacksAddress) ? piTx.pegInData?.stacksAddress : addresses().stxAddress;
  if (piTx.pegInData.amount! > 0) amountOk = true;
  updateConfig();
  if (!piTx.ready) piTx = await PegInTransaction.create(network, piTx.fromBtcAddress, piTx.pegInData.sbtcWalletAddress, stacksAddress);
  inited = true;
  document.addEventListener('keydown', closeOnEscape);
  //document.addEventListener('click', closeOnEscape);
})


</script>
<Modal {showModal} showClose={true} on:click={closeModal} on:close_modal={closeModal}>
  <div slot="title"></div>
  <div class="mb-4"><ScriptHashAddress {piTx}/></div>
</Modal>

{#if inited}
  <div class="mb-4"><UTXOSelection {utxoData} on:utxo_updated={utxoUpdated} /></div>
  {#if showStxAddress}
  <div class="mb-4"><Principal {principalData} on:principal_updated={principalUpdated} /></div>
  {/if}
  {#if showAmount}
  {#key componentKey3}
  <div class="mb-4"><PegInAmount amtData={amtData()} on:amount_updated={amountUpdated} /></div>
  {/key}
  {/if}
  {#if errorReason}<div class="text-danger">{@html errorReason}</div>{/if}
  {#if showButton}
  <div class="row">
    <div class="col">
      <button class="btn btn-outline-info w-100" type="button" on:click={() => nextStep()}>CONTINUE</button>
    </div>
  </div>
  {/if}
{/if}

<style>
</style>