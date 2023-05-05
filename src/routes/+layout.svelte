<script lang="ts">
import { setConfig } from '$lib/config';
import "../app.scss";
import { tick, onMount, onDestroy } from 'svelte';
import { beforeNavigate, goto } from "$app/navigation";
import { page } from "$app/stores";
import Header from "$lib/header/Header.svelte";
import Footer from "$lib/header/Footer.svelte";
import { sbtcConfig } from '$stores/stores'
import type { SbtcConfig } from '$types/sbtc_config'
import { loginStacksJs, userSession } from '$lib/stacks_connect'
import stx_eco_wallet_off from '$lib/assets/png-assets/stx_eco_wallet_off.png';
import { defaultSbtcConfig } from '$lib/sbtc';
import { COMMS_ERROR } from '$lib/utils.js'
import { fetchSbtcData } from "$lib/bridge_api";
import { fetchSbtcBalance } from "$lib/stacks_connect";
import { fetchUtxoSet, fetchCurrentFeeRates } from "$lib/bridge_api";
import type { SbtcContractDataI } from '$types/sbtc_contract_data';

console.log('process.env: ', import.meta.env);
setConfig($page.url.search);
const search = $page.url.search;
beforeNavigate((nav) => {
  const next = (nav.to?.url.pathname || '') + (nav.to?.url.search || '');
	if (nav.to?.url.search.indexOf('testnet') === -1 && search.indexOf('net=testnet') > -1) {
    nav.cancel();
    goto(next + '?net=testnet')
  }
})

export let data:SbtcContractDataI;
const unsubscribe = sbtcConfig.subscribe((conf) => {});
onDestroy(unsubscribe);
//setUpMicroStacks();
//setUpStacksJs();
let inited = false;
let errorReason:string|undefined;

const doLogin = async () => {
  await loginStacksJs();
  initApplication();
}

const initApplication = async () => {
  try {
    data = await fetchSbtcData();
  } catch (err) {
    data = {} as SbtcContractDataI
  }
  await fetchSbtcBalance();
  let conf = defaultSbtcConfig as SbtcConfig;
  if ($sbtcConfig) {
    conf = $sbtcConfig;
    if (!$sbtcConfig.sbtcWalletAddressInfo) $sbtcConfig.sbtcWalletAddressInfo = await fetchUtxoSet(data.sbtcWalletAddress);
    if (!$sbtcConfig.btcFeeRates) $sbtcConfig.btcFeeRates = await fetchCurrentFeeRates();
  }
  conf.loggedIn = false;
  if (userSession.isUserSignedIn()) {
    conf.loggedIn = true;
  }
  conf.sbtcContractData = data;
  //conf.sbtcContractData.sbtcWalletAddress = 'tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq'
  sbtcConfig.update(() => conf);
}

let bootstrap: { Tooltip: new (arg0: any) => any; Dropdown: new (arg0: any) => any; };
onMount(async () => {
  bootstrap = (await import('bootstrap'));
  try {
    await tick();
    await initApplication();
  } catch (err) {
    errorReason = COMMS_ERROR
    console.log(err)
  }
  inited = true;
  setTimeout(function () {
    const tooltipTriggerList = window.document.querySelectorAll('[data-bs-toggle="tooltip"]');
    if (tooltipTriggerList) [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    const popoverTriggerList = window.document.querySelectorAll('[data-bs-toggle="dropdown"]');
    if (popoverTriggerList) [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Dropdown(popoverTriggerEl));
  }, 500)
})
</script>

{#if inited}
  {#if $sbtcConfig && $sbtcConfig.loggedIn}
    <div class="app">
      <Header/>
      <slot />
      <Footer />
    </div>
    {:else}
    <div class="lobby bg-dark">
      <p class="text-white">Connect to a Stacks Web Wallet to start Wrapping!</p>
      <p><span class="nav-item"><a href="/" class="pointer px-2" on:click|preventDefault={doLogin} ><span  class="px-1"><img src={stx_eco_wallet_off} alt="Connect Wallet / Login" width="40" height="auto"/></span> connect</a></span></p>
      <p class="mt-5 text-warning">sBTC Alpha Testing!</p>
    </div>
  {/if}
{:else}
  <div class="my-3 d-flex justify-content-between text-white">Loading application data..</div>
{/if}
{#if errorReason}
  <div class="card-width">
    <div class="my-3 d-flex justify-content-between text-white">{errorReason}</div>
  </div>
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