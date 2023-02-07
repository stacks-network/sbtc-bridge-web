<script lang="ts">
import "../app.scss";
import { getAuth } from "@micro-stacks/svelte";
import {tick, onMount, onDestroy} from 'svelte';
import Header from "$lib/header/Header.svelte";
import Footer from "$lib/header/Footer.svelte";
import { mountClient, getMicroStacksClient } from "@micro-stacks/svelte";
import { client } from "$stores/client";
import { fetchSbtcWalletAddress } from "$lib/sbtc";
import { sbtcConfig } from '$stores/stores'
import { StacksMocknet, StacksMainnet } from "micro-stacks/network";
import type { SbtcConfig } from '$types/sbtc_config';
import { fetchFeeEstimate } from "$lib/utxos";
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
if (typeof window !== 'undefined') {
  origin = window.location.origin;
}
const config = {
  appName: 'sBTC Client',
  appIconUrl: origin + '/img/logo.png',
  network: ($sbtcConfig.network === 'mainnet') ? new StacksMainnet() : new StacksMocknet()
};
mountClient(config);
client.set(getMicroStacksClient());
const auth = getAuth();

const doLogin = () => {
  login($auth);
}

const fetchWalletAddress = async () => {
  const addr = await fetchSbtcWalletAddress($sbtcConfig.network);
  const conf = $sbtcConfig;
  conf.sbtcWalletAddress = addr;
  sbtcConfig.update(() => conf);
}

let bootstrap: { Tooltip: new (arg0: any) => any; Dropdown: new (arg0: any) => any; };
onMount(async () => {
  globalThis.Buffer = Buffer;
  bootstrap = (await import('bootstrap'));
  try {
    inited = true;
    await fetchWalletAddress();
    let conf:SbtcConfig = $sbtcConfig;
    if (!conf || !conf.feeCalc) conf = defaultSbtcConfig;
    conf.feeInfo = await fetchFeeEstimate($sbtcConfig.network);
    conf.feeCalc.pegOutFeeCalc.feeToApply = conf.feeInfo.low_fee_per_kb;
    sbtcConfig.update(() => conf);
  } catch (err) {
    console.log(err)
  }
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
  <slot/>
  {/key}
  <Footer />
</div>
{:else}
<div class="lobby bg-dark">
  <p>Connect wallet to continue...</p>
  <p><span class="nav-item"><a href="/" class="pointer px-2" on:click|preventDefault={doLogin} ><span  class="px-1"><img src={stx_eco_wallet_off} alt="Connect Wallet / Login" width="40" height="auto"/></span> connect</a></span></p>
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