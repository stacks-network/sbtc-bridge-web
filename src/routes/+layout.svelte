<script lang="ts">
  import "../app.scss";
  import {tick, onMount, onDestroy} from 'svelte';
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/header/Footer.svelte";
  import { mountClient, getMicroStacksClient } from "@micro-stacks/svelte";
  import { client } from "$stores/client";
  import { fetchSbtcWalletAddress } from "$lib/sbtc";
  import { sbtcConfig } from '$stores/stores'
  import { StacksTestnet, StacksMainnet } from "micro-stacks/network";
  
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
    //window.Buffer = Buffer;
    origin = window.location.origin;
  }
  const config = {
    appName: 'sBTC Client',
    appIconUrl: origin + '/img/logo.png',
    network: ($sbtcConfig.network === 'mainnet') ? new StacksMainnet() : new StacksTestnet()
  };
  mountClient(config);
  client.set(getMicroStacksClient());
  
  const fetchWalletAddress = async () => {
    const addr = await fetchSbtcWalletAddress($sbtcConfig.network);
    const conf = $sbtcConfig;
    conf.sbtcWalletAddress = addr;
    sbtcConfig.update(() => conf);
  }
  
  let bootstrap: { Tooltip: new (arg0: any) => any; Dropdown: new (arg0: any) => any; };
  onMount(async () => {
    bootstrap = (await import('bootstrap'));
    try {
      await fetchWalletAddress();
    } catch (err) {
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
  <div class="app">
    <Header on:network_change={networkChange}/>
    {#key componentKey}
    <slot/>
    {/key}
    <Footer />
  </div>
  {/if}
  
  <style>
    .app {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  </style>