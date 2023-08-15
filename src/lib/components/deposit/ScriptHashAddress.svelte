<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import Button from '$lib/components/shared/Button.svelte';
  import type { PeginRequestI } from 'sbtc-bridge-lib'
  import Invoice from "$lib/components/deposit/Invoice.svelte";
	import { bitcoinBalanceFromMempool } from '$lib/utils'
	import { sbtcConfig } from '$stores/stores'
	import { CONFIG } from '$lib/config';

  export let peginRequest:PeginRequestI;
  // NB Its possible the user paid a different amount to the amount they entered in the UI - ths takes the on chain amount first
  let amount = 0;
  let cardinalBalance = 0;
  let webPayEnabled = false;
  const dispatch = createEventDispatcher();

  const forwardEv = () => {
    dispatch('clicked', { target: 'status-check' })
  }

  onMount(async () => {
    if (!peginRequest) throw new Error('No pegin request')
    amount = ((peginRequest.status === 2) ? peginRequest.vout?.value : peginRequest.amount) || 0;
    cardinalBalance = bitcoinBalanceFromMempool($sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinalInfo)
  })
</script>

<div id="clipboard"></div>

<div>
  <p class="mb-4">Scan this QR code or copy the address and amount into your Bitcoin wallet to send Bitcoin.</p>

  <Invoice {peginRequest} />

  <div class="mt-6 flex align-baseline items-center">
    <Button darkScheme={false} label={'Back'} target={'back'} on:clicked />
    {#if webPayEnabled && amount < cardinalBalance}
    <Button darkScheme={true} label={'Pay with web wallet'} target={'pay-now'} on:clicked />
    {/if}
    <a href="/" on:click|preventDefault={() => forwardEv()} class="text-warning-500">check tx status</a>
  </div>
</div>
