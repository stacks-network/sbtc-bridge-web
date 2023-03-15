<script lang="ts">
import { onMount } from 'svelte';
import { sbtcConfig } from '$stores/stores'
import type { SbtcConfig } from '$types/sbtc_config';
import Principal from "../common/Principal.svelte";
import PegOutAmount from "./PegOutAmount.svelte";
import UTXOSelection from "$lib/components/common/UTXOSelection.svelte";
import { createEventDispatcher } from "svelte";
import PegOutTransaction from '$lib/domain/PegOutTransaction';
import type { PegOutTransactionI } from '$lib/domain/PegOutTransaction';
import { base } from '$app/paths'
import { explorerAddressUrl } from "$lib/utils";
import { verifyDataSignature, getStacksAddressFromSignature } from '$lib/structured-data'
import { getOpenSignMessage } from '@micro-stacks/svelte';
import type { SignatureData } from "micro-stacks/connect";
import { getAuth, getAccount } from '@micro-stacks/svelte';

export let poTx:PegOutTransactionI;
  
const account = getAccount();
const auth = getAuth();
if (!poTx.pegInData.stacksAddress && $account.stxAddress) poTx.pegInData.stacksAddress = $account.stxAddress
const principalData = {
  label: 'Stacks Contract or Account Address',
  info: 'sBTC will be burned from this account',
  currentAddress: poTx.pegInData.stacksAddress,
}
$: amtData = {
  pegIn: false,
  label: 'Amount (SBTC)',
  info: 'The amount to unwrap cannot exceed your sBTC balance',
  pegAmount: (poTx.pegInData.amount > 0) ? poTx.pegInData.amount : $sbtcConfig.balance.balance,
  maxCommit: poTx.maxCommit(),
  change: poTx.getChange(),
  fee: poTx.fee,
  fees: poTx.fees,
  dust: poTx.dust
}
const network = import.meta.env.VITE_NETWORK;
$: utxoData = {
  label: 'Bitcoin Address',
  info: 'Your sBTC will be burned and the equivalent bitcoin then sent to this address',
  maxCommit: (poTx.ready) ? poTx.maxCommit() : 0,
  fromBtcAddress: (poTx.ready) ? poTx.fromBtcAddress : undefined,
  numbInputs: (poTx.ready) ? poTx.addressInfo.utxos.length : 0,
  network
}
  
const dispatch = createEventDispatcher();
let ready = true;

let errorReason:string|undefined;
let stxAddressOk = true;
let amountOk = true;

const updateConfig = () => {
  const conf:SbtcConfig = $sbtcConfig;
  conf.pegOutTransaction = poTx;
  sbtcConfig.update(() => conf);
  amountOk = poTx.pegInData.amount > 0;
}

let sigError:string|undefined;
let sigData: SignatureData | undefined;
const signMessage = getOpenSignMessage();
const onSignMessage = async (message:string):Promise<SignatureData | undefined> => {
  return await $signMessage.openSignMessage({
    message,
    onFinish: (value) => {
      (sigData = value)
      return value;
    },
    onCancel: (error) => { sigError = error; },
  });
}

const requestSignature = async () => {
  const script = poTx.getOutput2ScriptPubKey();
  sigData = await onSignMessage(script.toString('hex'));

  //const msg = { script: script.toString('hex') }
  //const sigData:any = await requestSignMessage(msg);
  if (sigError) {
    return;
  }
  if (!verifyDataSignature(script.toString('hex'), sigData!.publicKey, sigData!.signature)) {
    console.log('Unable to validate sig?')
  } else {
    console.log('Yay sig is valid')
  }
	console.log('pubkey0:    ' + sigData!.publicKey)
	console.log('signature0: ' + sigData!.signature)
	console.log('message0:   ' + script.toString('hex'))
  console.log('mshHash0:   ' + 'd035cb3da71b311a942259894fa60eb5b82658679967c413a1b34c199cfb5d6e')
  const addreObj = getStacksAddressFromSignature(script.toString('hex'), sigData!.signature)
  const conf:SbtcConfig = $sbtcConfig;
  conf.sigData = sigData;
  sbtcConfig.update(() => conf);
  console.log(addreObj);
  dispatch('request_signature');
}

const amountUpdated = (event:any) => {
  amountOk = !event.detail.error;
  if (amountOk) {
    poTx.setFeeRate(event.detail.newFeeRate)
    poTx.setAmount(event.detail.newAmount)
    updateConfig();
  } else {
    errorReason = event.detail.reason;
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
      poTx = await PegOutTransaction.create(network, data.bitcoinAddress, $sbtcConfig.sbtcContractData.sbtcWalletAddress);
      poTx.calculateFees();
      updateConfig();
    } catch (err:any) {
      errorReason = err.message;
    }
  }
}

$: showStxAddress = poTx.ready && !errorReason;
$: showAmount = poTx.ready && stxAddressOk && !errorReason;
$: showButton = poTx.ready && amountOk && !errorReason;

onMount(async () => {
  if (!poTx.pegInData.stacksAddress) stxAddressOk = false;
  if (poTx.pegInData.amount! > 0) amountOk = true;
  if (poTx.ready) poTx.calculateFees();
  updateConfig();
})


</script>  

{#if ready}
  <div class="mb-4"><UTXOSelection {utxoData} on:utxo_updated={utxoUpdated} /></div>
  {#if $sbtcConfig.balance.balance <= 0}
  <div class="text-center text-warning my-5">
    <p class="mb-4">No SBTC to unwrap for account: <a href={explorerAddressUrl($sbtcConfig.balance.address)}>{$sbtcConfig.balance.address}</a></p>
    <p><a href="{base}/wrap">Get sBTC here!</a></p>
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
  <p class="text-white">Problem Connecting to APIs</p>
  <p><span class="nav-item">Status: Bridge API currently experiencing connectivity problems.
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