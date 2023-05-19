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
import { addresses } from '$lib/stacks_connect';
import { explorerBtcAddressUrl } from "$lib/utils";
import Modal from '$lib/components/shared/Modal.svelte';
import DebugPeginInfo from '$lib/components/common/DebugPeginInfo.svelte';
import type { PeginRequestI } from 'sbtc-bridge-lib/src/index' 
import { hex } from '@scure/base';
import { getTestAddresses, sbtcWallets } from 'sbtc-bridge-lib/src/index' 
import type { PegInData, CommitKeysI } from 'sbtc-bridge-lib/src/index' 

let piTx:PegInTransactionI;
let componentKey3 = 0;
const network = CONFIG.VITE_NETWORK;
const dispatch = createEventDispatcher();
let errorReason:string|undefined;
let stxAddressOk = true;
let amountOk = false;
let peginRequest:PeginRequestI;
let showModal:boolean;
let inited = false;

$: showStxAddress = !errorReason;
$: showAmount = stxAddressOk && !errorReason;
$: showButton = piTx && piTx.pegInData.amount > 0 && !errorReason;

const getExplorerUrl = () => {
  return explorerBtcAddressUrl(piTx.fromBtcAddress)
}

const principalData = {
  label: 'Stacks Address (Account or Contract)',
  info: 'sBTC will be minted to this account or contract',
  currentAddress: ''
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
    dust: 500
  }
}

$: utxoData = {
  label: 'Return Bitcoin Address',
  info: 'Your BTC will be returned to this address if for any reason the sBTC does not materialize',
  utxos: [],
  maxCommit: 0,
  fromBtcAddress: '',
  numbInputs: 0,
  network
}

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

const commitAddresses = ():CommitKeysI => {

  const stacksAddress = (piTx.pegInData?.stacksAddress) ? piTx.pegInData?.stacksAddress : addresses().stxAddress;
  let fromBtcAddress = $sbtcConfig.peginRequest.fromBtcAddress || addresses().ordinal;
  let sbtcWalletAddress = $sbtcConfig.sbtcContractData.sbtcWalletAddress as string;
  const sbtcWallet = sbtcWallets.find((o) => o.sbtcAddress === sbtcWalletAddress);
  if (!sbtcWallet) throw new Error('No sBTC Wallet found for address: ' + sbtcWalletAddress)
  let testAddrs;
  if ($sbtcConfig.userSettings.testAddresses) {
    testAddrs = getTestAddresses(CONFIG.VITE_NETWORK);
    fromBtcAddress = testAddrs.reclaim as string;
    sbtcWalletAddress = testAddrs.reveal as string;
  }
  const xyWebWalletPubKey = hex.decode(addresses().btcPubkeySegwit1);
  const xOnlyPubKey = xyWebWalletPubKey.subarray(1);
  return {
    fromBtcAddress,
    reveal: sbtcWalletAddress,
    revealPub: (testAddrs) ? testAddrs.revealPub : sbtcWallet.pubKey,
    reclaim: (testAddrs) ? testAddrs.reclaim as string : fromBtcAddress,
    reclaimPub: (testAddrs) ? testAddrs.reclaimPub : hex.encode(xOnlyPubKey),
    stacksAddress
  }
}

const utxoUpdated = async (event:any) => {
  errorReason = undefined;
  const data:any = event.detail;
  if (data.opCode === 'address-change') {
    try {
      const p0 = piTx.pegInData;
      piTx.fromBtcAddress = data.bitcoinAddress;
      piTx = await PegInTransaction.create(network, commitAddresses());
      piTx.calculateFees();
      //piTx.setStacksAddress(commitAddresses().stacksAddress);
      if (p0.amount > 0 && p0.amount < piTx.maxCommit()) piTx.setAmount(p0.amount);
      updateConfig();
    } catch (err:any) {
      if (!$sbtcConfig.userSettings.useOpDrop) errorReason = 'Your address either has no balance or there are unconfirmed transactions. You can paste another address or check this address here <a href=' + getExplorerUrl() + ' target="_blank">btc explorer</a>'
      //if (err.message !== 'No inputs signed') errorReason = err.message;
      //else errorReason = 'Please fix above errors and try again.'
    }
  }
}

const nextStep = (wallet:number) => {
  // 1: stacks web wallet, 2: any wallet
  if (wallet === 1) {
    dispatch('request_signature', { wallet, piTx });
  } else {
    showModal = !showModal;
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

onMount(async () => {
  if ($sbtcConfig.pegInTransaction) {
    piTx = PegInTransaction.hydrate($sbtcConfig.pegInTransaction);
  } else {
    piTx = await PegInTransaction.create(network, commitAddresses());
  }
  if (!piTx.pegInData) piTx.pegInData = {} as PegInData;
  if (!piTx.pegInData.stacksAddress && addresses().stxAddress) piTx.pegInData.stacksAddress = addresses().stxAddress;
  if (piTx.pegInData.stacksAddress) stxAddressOk = true;
  if (piTx.pegInData.amount > 0) amountOk = true;

  principalData.currentAddress = piTx.pegInData.stacksAddress as string;

  utxoData.utxos = piTx.addressInfo.utxos;
  utxoData.maxCommit = (piTx.ready) ? piTx.maxCommit() : 0;
  utxoData.fromBtcAddress = (piTx.ready) ? piTx.fromBtcAddress : addresses().cardinal;
  utxoData.numbInputs = (piTx.ready) ? piTx.addressInfo.utxos.length : 0;

  showStxAddress = piTx.ready && !errorReason;
  showAmount = piTx.ready && stxAddressOk && !errorReason;
  showButton = piTx.ready && amountOk && !errorReason;
  try {
    peginRequest = piTx.getOpDropPeginRequest();
  } catch (err) {
    piTx.commitKeys = commitAddresses(); // make sure the addresses are all hex encoded and serialisation safe.
    peginRequest = piTx.getOpDropPeginRequest();
  }
  updateConfig();
  inited = true;
  document.addEventListener('keydown', closeOnEscape);
})


</script>
{#if showModal}
<Modal {showModal} on:click={closeModal} on:close_modal={closeModal}>
  <div class="mb-4"><ScriptHashAddress {piTx}/></div>
  <div slot="title"></div>
  <div slot="close">
    <div class="text-center"><button class="btn btn-outline-info" on:click={closeModal}>CLOSE</button></div>
  </div>
  <div slot="debug">
    <div class="row my-3 text-small">
      <div class="col-12">
        <DebugPeginInfo tx={piTx}/>
      </div>
    </div>    
  </div>
</Modal>
{/if}
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
    <div class="col-6">
      <button class="btn btn-outline-info w-100" type="button" on:click={() => nextStep(1)}>Stacks Web Wallet</button>
    </div>
    <div class="col-6">
      <button class="btn btn-outline-info w-100" type="button" on:click={() => nextStep(2)}>Other Wallet</button>
    </div>
  </div>
  {/if}
{/if}

<style>
</style>