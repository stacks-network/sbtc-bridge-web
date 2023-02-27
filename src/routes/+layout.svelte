<script lang="ts">
import "../app.scss";
import { getAuth } from "@micro-stacks/svelte";
import {tick, onMount, onDestroy} from 'svelte';
import Header from "$lib/header/Header.svelte";
import Footer from "$lib/header/Footer.svelte";
import { mountClient, getMicroStacksClient } from "@micro-stacks/svelte";
import { client } from "$stores/client";
import { fetchSbtcWalletAddress, fetchCurrentFeeRates } from "$lib/bridge_api";
import { sbtcConfig } from '$stores/stores'
import { StacksMocknet, StacksTestnet, StacksMainnet } from "micro-stacks/network";
import type { SbtcConfig } from '$types/sbtc_config';
import { login } from "$lib/stacks";
import stx_eco_wallet_off from '$lib/assets/png-assets/stx_eco_wallet_off.png';
import { Buffer } from 'buffer/'
import { defaultSbtcConfig } from '$lib/sbtc'

let componentKey = 0;
const unsubscribe = sbtcConfig.subscribe(() => {
});
onDestroy(unsubscribe);
const networkChange = () => {
  componentKey++;
}

let inited = false;
let origin = import.meta.env.VITE_ORIGIN;
const network = import.meta.env.VITE_NETWORK;
if (typeof window !== 'undefined') {
  origin = window.location.origin;
}
console.log(process.env.NODE_ENV)
let stxNetwork:StacksMainnet|StacksMocknet|StacksTestnet = new StacksMainnet();
if (process.env.NODE_ENV === 'development') stxNetwork = new StacksMocknet();
else if (process.env.NODE_ENV === 'testnet') stxNetwork = new StacksTestnet();

const config = {
  appName: 'sBTC Client',
  appIconUrl: origin + '/img/logo.png',
  network: stxNetwork
};
mountClient(config);
client.set(getMicroStacksClient());
const auth = getAuth();

const doLogin = () => {
  login($auth);
}

const initApplication = async () => {
  const addr = await fetchSbtcWalletAddress();
  const conf = $sbtcConfig;
  conf.sbtcWalletAddress = addr;
  const feeInfo = await fetchCurrentFeeRates();
  if (feeInfo) conf.feeInfo = feeInfo;
  conf.feeCalc.pegOutFeeCalc.feeToApply = conf.feeInfo.low_fee_per_kb;
  sbtcConfig.update(() => conf);
  return conf;
}

let bootstrap: { Tooltip: new (arg0: any) => any; Dropdown: new (arg0: any) => any; };
onMount(async () => {
  globalThis.Buffer = Buffer;
  bootstrap = (await import('bootstrap'));
  let conf;
  try {
    conf = await initApplication();
  } catch (err) {
    conf = defaultSbtcConfig;
    console.log(err)
  }
  inited = true;
  await tick();
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
  <Header on:network_change={networkChange}/>
  {#key componentKey}
  <slot />
  {/key}
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