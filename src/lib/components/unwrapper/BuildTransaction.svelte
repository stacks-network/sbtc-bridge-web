<script lang="ts">
import { CONFIG } from '$lib/config';
import { onMount } from 'svelte';
import { sbtcConfig } from '$stores/stores'
import type { SbtcConfig } from '$types/sbtc_config';
import Principal from "../common/Principal.svelte";
import PegOutAmount from "./PegOutAmount.svelte";
import UTXOSelection from "$lib/components/common/UTXOSelection.svelte";
import { createEventDispatcher } from "svelte";
import PegOutTransaction from '$lib/domain/PegOutTransaction';
import type { PegOutTransactionI } from '$lib/domain/PegOutTransaction';
import { explorerAddressUrl } from "$lib/utils";
import { addresses, signMessage } from '$lib/stacks_connect'
import type { PegInData } from 'sbtc-bridge-lib/src/index' 
import { getStacksAddressFromSignature, getStacksSimpleHashOfDataToSign } from 'sbtc-bridge-lib/src/index' 
import { hex } from '@scure/base';

let poTx:PegOutTransactionI;
const dispatch = createEventDispatcher();
let errorReason:string|undefined;
let stxAddressOk = false;
let amountOk = false;
let inited = false;

const principalData = {
  label: 'Stacks Contract or Account Address',
  info: 'sBTC will be burned from this account',
  currentAddress: '',
}

$: amtData = {
  pegIn: false,
  label: 'Amount (sBTC)',
  info: 'The amount to unwrap cannot exceed your sBTC balance',
  pegAmount: 0,
  maxCommit: 0,
  change: 0,
  fee: 0,
  fees: [0, 0, 0],
  dust: 0
}
const network = CONFIG.VITE_NETWORK;
$: utxoData = {
  label: 'Your Bitcoin Address',
  info: 'Your sBTC will be burned and the equivalent bitcoin then sent to this address',
  utxos: [],
  maxCommit: 0,
  fromBtcAddress: '',
  numbInputs: 0,
  network
}

const updateConfig = () => {
  const conf:SbtcConfig = $sbtcConfig;
  conf.pegOutTransaction = poTx;
  sbtcConfig.update(() => conf);
  amountOk = poTx.pegInData.amount > 0;
}

const requestSignature = () => {
  const script = poTx.getDataToSign();
  signMessage(requestSignatureCB, script);
}

const requestSignatureCB = async (sigData:any, message:Uint8Array) => {
  //const script = hex.encode(message);
  const conf:SbtcConfig = $sbtcConfig;
  conf.sigData = sigData;
  sbtcConfig.update(() => conf);


  const hashedM = getStacksSimpleHashOfDataToSign(CONFIG.VITE_NETWORK, poTx.pegInData.amount, poTx.pegInData.sbtcWalletAddress)
  const addr = getStacksAddressFromSignature(hex.decode(hashedM), sigData.signature, 0)
  console.log('requestSignatureCB: ', addr)
  dispatch('request_signature', { poTx });
}

const amountUpdated = (event:any) => {
  amountOk = !event.detail.error;
  if (amountOk) {
    poTx.setFeeRate(event.detail.newFeeRate)
    poTx.setAmount(event.detail.newAmount)
    updateConfig();
  } else {
    //errorReason = event.detail.reason;
  }
}

const principalUpdated = (event:any) => {
  stxAddressOk = !event.detail.error;
  if (stxAddressOk) {
    poTx.setStacksAddress(event.detail.currentAddress)
    updateConfig();
  }
}

const utxoUpdated = async (event:any) => {
  errorReason = undefined;
  const data:any = event.detail;
  if (data.opCode === 'address-change') {
    try {
      const p0 = poTx?.pegInData;
      poTx = await PegOutTransaction.create(network, data.bitcoinAddress, $sbtcConfig.sbtcContractData.sbtcWalletAddress);
      poTx.calculateFees();
      if (p0.amount > 0 && p0.amount < poTx.maxCommit()) poTx.setAmount(p0.amount);
      updateConfig();
    } catch (err:any) {
      if (err.message !== 'No inputs signed') errorReason = err.message;
      else {
        if (err.message === 'No confirmed UTXOs') {

        }
        errorReason = 'Please fix above errors and try again.'
      }
    }
  }
}

$: showStxAddress = !errorReason;
$: showAmount = stxAddressOk && !errorReason;
$: showButton = amountOk && !errorReason;

onMount(async () => {
  if ($sbtcConfig.pegOutTransaction) {
    poTx = PegOutTransaction.hydrate($sbtcConfig.pegOutTransaction);
  } else {
    poTx = await PegOutTransaction.create(network, addresses().cardinal, $sbtcConfig.sbtcContractData.sbtcWalletAddress);
  }
  if (!poTx.pegInData) poTx.pegInData = {} as PegInData;
  if (!poTx.pegInData.stacksAddress && addresses().stxAddress) poTx.pegInData.stacksAddress = addresses().stxAddress;
  if (poTx.pegInData.stacksAddress) stxAddressOk = true;
  if (poTx.pegInData.amount > 0) amountOk = true;
  
  principalData.currentAddress = poTx.pegInData.stacksAddress as string;

  amtData.pegAmount = (poTx.pegInData.amount > 0) ? poTx.pegInData.amount : $sbtcConfig.balance.balance;
  amtData.maxCommit = poTx.maxCommit();
  amtData.change = poTx.getChange();
  amtData.fee = poTx.fee;
  amtData.fees = poTx.fees;
  amtData.dust = poTx.dust;

  utxoData.utxos = poTx.addressInfo.utxos;
  utxoData.maxCommit = (poTx.ready) ? poTx.maxCommit() : 0;
  utxoData.fromBtcAddress = (poTx.ready) ? poTx.fromBtcAddress : addresses().cardinal;
  utxoData.numbInputs = (poTx.ready) ? poTx.addressInfo.utxos.length : 0;

  showStxAddress = poTx.ready && !errorReason;
  showAmount = poTx.ready && stxAddressOk && !errorReason;
  showButton = poTx.ready && amountOk && !errorReason;

  updateConfig();

  inited = true;
})


</script>
{#if inited}
  <div class="mb-4"><UTXOSelection {utxoData} on:utxo_updated={utxoUpdated} /></div>
  {#if $sbtcConfig.balance.balance <= 0}
  <div class="text-center text-warning my-5">
    <p class="mb-4">No sBTC to unwrap for account: <a href={explorerAddressUrl($sbtcConfig.balance.address)}>{$sbtcConfig.balance.address}</a></p>
    <p><a href="/wrap">Get sBTC here!</a></p>
  </div>
  {:else}
  {#if showStxAddress}
  <div class="mb-4"><Principal {principalData} on:principal_updated={principalUpdated} /></div>
  {/if}
  {#if showAmount}
  <div class="mb-4"><PegOutAmount {amtData} on:amount_updated={amountUpdated} /></div>
  {/if}
  {#if showButton}
  <div class="row">
    <div class="col">
      <button class="btn btn-outline-info w-100" type="button" on:click={() => requestSignature()}>CONTINUE</button>
    </div>
  </div>
  {/if}
  {/if}
  {#if errorReason}<div class="text-danger">{errorReason}</div>{/if}
{:else}
<div class="lobby bg-dark">
  <p class="text-white">Connecting to APIs</p>
  <p><span class="nav-item">Status: Slow Bridge API connectivity.
    We are already working on this.
  <span class="mt-5 text-warning">Please report this to the core engineering team!</span></p>
</div>
{/if}

<style>
.row {
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>