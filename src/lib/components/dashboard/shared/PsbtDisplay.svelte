<script lang="ts">
import { onMount } from 'svelte';
import { Tooltip } from 'flowbite-svelte';
import { Icon, InformationCircle } from "svelte-hero-icons";

export let psbtB64:string;
export let psbtHex:string;
let showHex = true;

onMount(async () => {
})
</script>
<Tooltip class="w-auto !font-extralight !bg-black z-20" triggeredBy="#b64-label">
  {#if !showHex}
  <h4 class="text-2xl">Bitcoin Core</h4>
  <p>Open your Bitcoin Core wallet</p>
  <p class="font-semibold">File -> Load PSBT from Clipboard</p>
  <p>Paste the transaction (already in the clipboard) into your Bitcoin Core wallet</p>
  {:else}
  <h4 class="text-2xl">Electrum</h4>
  <p>Open your Electrum wallet</p> 
  <p class="font-semibold">tools -> Load Transaction -> From Text</p>
  <p>Paste the transaction, sign and broadcast</p>
  {/if}
</Tooltip>

<div class="mt-10 w-full flex justify-between">
  <div>PSBT {#if !showHex}(Bitcoin Core){:else}(Electrum){/if}
    <Icon src="{InformationCircle}" mini class="inline ml-2 shrink-0 h-5 w-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50" aria-hidden="true" id="b64-label" />
  </div>
  <div aria-hidden="true" class="cursor-pointer" on:keydown on:click={() => showHex = !showHex}>switch format</div>
</div>

{#if !showHex}
<div class="my-5 flex flex-col w-full">
  <div class="text-black">
    <textarea rows="6" style="padding: 10px; width: 100%;" readonly>{psbtB64}</textarea>
  </div>
</div>
{:else}
<div class="my-5 flex flex-col w-full ">
  <div class="text-black">
    <textarea rows="6" style="padding: 10px; width: 100%;" readonly>{psbtHex}</textarea>
  </div>
</div>
{/if}
