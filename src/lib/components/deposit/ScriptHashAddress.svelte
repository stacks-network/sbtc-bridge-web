<script lang="ts">
import { createEventDispatcher, onMount } from "svelte";
import Button from '$lib/components/shared/Button.svelte';
import type { PeginRequestI } from 'sbtc-bridge-lib' 
import Invoice from "$lib/components/deposit/Invoice.svelte";

export let peginRequest:PeginRequestI;
// NB Its possible the user paid a different amount to the amount they entered in the UI - ths takes the on chain amount first
let amount = 0;
const dispatch = createEventDispatcher();

onMount(async () => {
  if (!peginRequest) throw new Error('No pegin request')
  amount = ((peginRequest.status === 2) ? peginRequest.vout?.value : peginRequest.amount) || 0;
})
</script>
<div id="clipboard"></div>

<div class="flex w-full flex-wrap align-baseline items-start px-5">
    <div class="">
      <p>Scan this QR code or copy the address and amount into your Bitcoin wallet to send Bitcoin.</p>
    </div>
    <Invoice {peginRequest} />
    <div class="mt-5 flex">
      <Button darkScheme={false} label={'Make changes'} target={'back'} on:clicked />
      <Button darkScheme={true} label={'Check status'} target={'status-check'} on:clicked />
    </div>
</div>
