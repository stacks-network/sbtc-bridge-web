<script lang="ts">
import { CONFIG } from '$lib/config';
import { goto } from "$app/navigation";
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
import { getStacksAddressFromSignature, getStacksSimpleHashOfDataToSign } from 'sbtc-bridge-lib' 
import { hex } from '@scure/base';
import Modal from '$lib/components/shared/Modal.svelte';
import DebugPeginInfo from '$lib/components/common/DebugPeginInfo.svelte';
import ScriptHashAddress from "./ScriptHashAddress.svelte";
import { getTestAddresses, sbtcWallets } from 'sbtc-bridge-lib' 
import type { PegInData, CommitKeysI } from 'sbtc-bridge-lib' 

let poTx:PegOutTransactionI;
let allowPayWithWebWallet = false;
const dispatch = createEventDispatcher();
let errorReason:string|undefined;
let stxAddressOk = false;
let amountOk = false;
let inited = false;
let showModal:boolean;

const principalData = {
  label: 'Stacks Contract or Account Address',
  info: 'sBTC will be withdrawn from this account',
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

const fee = 4444;
const requestSignature = () => {
  errorReason = undefined;
  if (poTx.pegInData.amount === 0 || poTx.pegInData.amount >= $sbtcConfig.balance.balance) {
    errorReason = 'Amount must be more than 0 and less then your current sBTC balance';
    return;
  } else if (poTx.pegInData.amount >= ($sbtcConfig.balance.balance - fee)) {
    errorReason = 'Please allow at least ' + fee + ' satoshis to pay for tx fees';
    return;
  }
  if (!stxAddressOk) {
    errorReason = 'Please enter a valid Stacks Address?'
    return
  }

  const script = poTx.getDataToSign();
  signMessage(requestSignatureCB, script);
}

const requestSignatureCB = async (sigData:any, message:Uint8Array) => {
  //const script = hex.encode(message);
  poTx.signature = sigData.signature;
  const conf:SbtcConfig = $sbtcConfig;
  conf.sigData = sigData;
  sbtcConfig.update(() => conf);


  const hashedM = getStacksSimpleHashOfDataToSign(CONFIG.VITE_NETWORK, poTx.pegInData.amount, poTx.pegInData.sbtcWalletAddress)
  const addr = getStacksAddressFromSignature(hex.decode(hashedM), sigData.signature, 0)
  console.log('requestSignatureCB: ', addr)
  if (allowPayWithWebWallet) {
    dispatch('request_signature', { poTx });
  } else {
    showModal = true;
  }
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

const commitAddresses = ():CommitKeysI => {
  const addrs = addresses()
  const stacksAddress = (poTx && poTx.pegInData?.stacksAddress) ? poTx.pegInData?.stacksAddress : addrs.stxAddress;
  let fromBtcAddress = addrs.cardinal; //$sbtcConfig.peginRequest.fromBtcAddress || addrs.ordinal;
  let sbtcWalletAddress = $sbtcConfig.sbtcContractData.sbtcWalletAddress as string;
  const sbtcWallet = sbtcWallets.find((o) => o.sbtcAddress === sbtcWalletAddress);
  if (!sbtcWallet) throw new Error('No sBTC Wallet found for address: ' + sbtcWalletAddress)
  let testAddrs;
  if ($sbtcConfig.userSettings.testAddresses) {
    testAddrs = getTestAddresses(CONFIG.VITE_NETWORK);
  }
  const xyWebWalletPubKey = hex.decode(addrs.btcPubkeySegwit1);
  let xOnlyPubKey = hex.encode(xyWebWalletPubKey.subarray(1));
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

const utxoUpdated = async (event:any) => {
  errorReason = undefined;
  const data:any = event.detail;
  if (data.opCode === 'address-change') {
    try {
      const p0 = poTx?.pegInData;
      poTx = await PegOutTransaction.create(network, commitAddresses());
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

$: showStxAddress = true; //!errorReason;
$: showAmount = true; //stxAddressOk && !errorReason;
$: showButton = true; //amountOk && !errorReason;

const nextModal = () => {
  goto('/withdrawals');
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
  if ($sbtcConfig.pegOutTransaction) {
    poTx = PegOutTransaction.hydrate($sbtcConfig.pegOutTransaction);
  } else {
    poTx = await PegOutTransaction.create(network, commitAddresses());
  }
  if (!poTx.pegInData) poTx.pegInData = {} as PegInData;
  if (!poTx.pegInData.stacksAddress && addresses().stxAddress) poTx.pegInData.stacksAddress = addresses().stxAddress;
  if (poTx.pegInData.stacksAddress) stxAddressOk = true;
  if (poTx.pegInData.amount > 0) amountOk = true;
  poTx.pegInData.amount = (poTx.pegInData.amount > 0) ? poTx.pegInData.amount : $sbtcConfig.balance.balance;
  
  principalData.currentAddress = poTx.pegInData.stacksAddress as string;

  amtData.pegAmount = poTx.pegInData.amount;
  amtData.maxCommit = poTx.maxCommit();
  amtData.change = poTx.getChange();
  amtData.fee = poTx.fee;
  amtData.fees = poTx.fees;
  amtData.dust = poTx.dust;

  utxoData.utxos = poTx.addressInfo.utxos;
  utxoData.maxCommit = (poTx.ready) ? poTx.maxCommit() : 0;
  utxoData.fromBtcAddress = (poTx.ready) ? poTx.fromBtcAddress : addresses().ordinal;
  utxoData.numbInputs = (poTx.ready) ? poTx.addressInfo.utxos.length : 0;

  //showStxAddress = poTx.ready && !errorReason;
  //showAmount = poTx.ready && stxAddressOk && !errorReason;
  //showButton = poTx.ready && amountOk && !errorReason;

  updateConfig();

  inited = true;
})


</script>

{#if showModal}
<Modal {showModal} on:click={closeModal} on:close_modal={closeModal}>
  <div class="mb-4"><ScriptHashAddress {poTx}/></div>
  <div slot="title"></div>
  <div slot="close" class="d-flex justify-content-around">
    <div class="text-center"><button class="btn btn-outline-info" on:click={closeModal}>CLOSE</button></div>
    <div class="text-center"><button class="btn btn-outline-info" on:click={nextModal}>NEXT</button></div>
  </div>
  <div slot="debug">
    <div class="row my-3 text-small">
      <div class="col-12">
        <DebugPeginInfo tx={poTx}/>
      </div>
    </div>    
  </div>
</Modal>
{/if}

{#if inited}
  {#if allowPayWithWebWallet}
  <div class="mb-4"><UTXOSelection {utxoData} on:utxo_updated={utxoUpdated} /></div>
  {/if}
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
  {#if errorReason}<div class="text-danger">{errorReason}</div>{/if}
  <div class="row">
    <div class="col">
      <button class="btn btn-outline-info w-100" type="button" on:click={() => requestSignature()}>CONTINUE</button>
    </div>
  </div>
  {/if}
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