<script lang="ts">
import "../app.scss";
import { getAuth } from "@micro-stacks/svelte";
import {tick, onMount, onDestroy} from 'svelte';
import Header from "$lib/header/Header.svelte";
import Footer from "$lib/header/Footer.svelte";
import { sbtcConfig } from '$stores/stores'
import { login } from "$lib/stacks";
import stx_eco_wallet_off from '$lib/assets/png-assets/stx_eco_wallet_off.png';
import { Buffer } from 'buffer/'
import { defaultSbtcConfig } from '$lib/sbtc'
import { setUpMicroStacks } from '$lib/stacks'

// data - imported from layout.ts
export let data:any;
const unsubscribe = sbtcConfig.subscribe(() => {});
onDestroy(unsubscribe);
setUpMicroStacks();
let inited = false;
const auth = getAuth();

const doLogin = () => {
  login($auth);
}

const initApplication = async () => {
  const conf = $sbtcConfig;
  conf.sbtcContractData = data.sbtcContractData;
  sbtcConfig.update(() => conf);
  return conf;
}

let bootstrap: { Tooltip: new (arg0: any) => any; Dropdown: new (arg0: any) => any; };
onMount(async () => {
  bootstrap = (await import('bootstrap'));
  let conf = defaultSbtcConfig;
  try {
    conf = await initApplication();
    globalThis.Buffer = Buffer;
    inited = true;
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