<script lang="ts">
import "../app.scss";
import { getAuth } from "@micro-stacks/svelte";
import {tick, onMount, onDestroy} from 'svelte';
import Header from "$lib/header/Header.svelte";
import Footer from "$lib/header/Footer.svelte";
import { mountClient, getMicroStacksClient } from "@micro-stacks/svelte";
import { client } from "$stores/client";
import { sbtcConfig } from '$stores/stores'
import { StacksMocknet, StacksTestnet, StacksMainnet } from "micro-stacks/network";
import type { SbtcConfig } from '$types/sbtc_config';
import { login } from "$lib/stacks";
import stx_eco_wallet_off from '$lib/assets/png-assets/stx_eco_wallet_off.png';
import { Buffer } from 'buffer/'
import { defaultSbtcConfig } from '$lib/sbtc'

export let data:any;
const unsubscribe = sbtcConfig.subscribe(() => {
});
onDestroy(unsubscribe);

let inited = false;
let origin = import.meta.env.VITE_ORIGIN;
const network = import.meta.env.VITE_NETWORK;
if (typeof window !== 'undefined') {
  origin = window.location.origin;
}
console.log('layout.svelte: ' + process.env.NODE_ENV)
console.log('layout.svelte: ' + network)
let stxNetwork:StacksMainnet|StacksMocknet|StacksTestnet;
if (network === 'testnet') stxNetwork = new StacksTestnet();
else if (network === 'mainnet') stxNetwork = new StacksMainnet();
else stxNetwork = new StacksMocknet();

const config = {
  appName: 'sBTC Client',
  appIconUrl: origin + '/img/logo.png',
  network: stxNetwork
};
console.log('layout.svelte: ', config)
mountClient(config);
client.set(getMicroStacksClient());
const auth = getAuth();

const doLogin = () => {
  login($auth);
}

const initApplication = async () => {
  const conf = $sbtcConfig;
  conf.feeInfo = data.feeInfo;
  conf.sbtcContractData = data.sbtcContractData;
  conf.feeCalc.pegOutFeeCalc.feeToApply = conf.feeInfo.low_fee_per_kb;
  console.log('conf: ', conf);
  sbtcConfig.update(() => conf);
  return conf;
}

let bootstrap: { Tooltip: new (arg0: any) => any; Dropdown: new (arg0: any) => any; };
onMount(async () => {
  bootstrap = (await import('bootstrap'));
  let conf = defaultSbtcConfig;
  try {
    conf = await initApplication();
    inited = true;
  } catch (err) {
    console.log(err)
  }
  await tick();
  globalThis.Buffer = Buffer;
  setTimeout(function () {
    const tooltipTriggerList = window.document.querySelectorAll('[data-bs-toggle="tooltip"]');
    if (tooltipTriggerList) [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    const popoverTriggerList = window.document.querySelectorAll('[data-bs-toggle="dropdown"]');
    if (popoverTriggerList) [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Dropdown(popoverTriggerEl));
  }, 500)
})
</script>
  
  <!-- <LibLoader url="/public/bitcoinjs.js" on:loaded="{onLoaded}" />-->
{#if inited}
{#if $auth.isSignedIn}
<div class="app">
  <Header/>
  <slot />
  <Footer />
</div>
{:else}
<div class="lobby bg-dark">
  <p class="text-white">Connect your Hiro web wallet to peg in to SBTC!</p>
  <p><span class="nav-item"><a href="/" class="pointer px-2" on:click|preventDefault={doLogin} ><span  class="px-1"><img src={stx_eco_wallet_off} alt="Connect Wallet / Login" width="40" height="auto"/></span> connect</a></span></p>
  <p class="mt-5 text-warning">Currently in Beta testing - invitation only!</p>
</div>
{/if}
{/if}
  
<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.lobby {
  text-align: center;
  margin: auto;
  width: 100%;
  height: 100%;
  border: 3px solid #4786cd;
  padding-top: 200px;
}
</style>