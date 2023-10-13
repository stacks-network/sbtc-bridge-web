<script lang="ts">
import { onMount } from 'svelte';
//import { parsePayloadFromTransaction } from 'sbtc-bridge-lib';
import { CONFIG } from '$lib/config';
	import { parsePayloadFromTransaction } from 'sbtc-bridge-lib';

export let tx:any;
let res:any;
let error:string|undefined;
let inited = false;

const getType = (opCode:string) => {
  if (opCode.toUpperCase() === '3E') return 'withdrawal'
  else if (opCode.toUpperCase() === '3C') return 'deposit'
  else return 'unknown'
}

onMount(async () => {
  res = parsePayloadFromTransaction(CONFIG.VITE_NETWORK, tx.hex)
  inited = true;
})

</script>

{#if inited}
<div class=" w-full">

  {#if error}<p class="text-danger">{error}</p>{/if}
  <div><h2 class="text-2xl mb-2 pb-2 border-b-2">sBTC Data</h2></div>
  <div class="flex gap-x-5 justify-start">
    <div class="w-1/5">Type</div>
    <div class="w-4/5 justify-start">{getType(res.opcode)}</div>
  </div>
  <div class="flex gap-x-5 justify-start">
    <div class="w-1/5">Amount (sats)</div>
    <div class="w-4/5 justify-start">{res.amountSats}</div>
  </div>
  <div class="flex gap-x-5 justify-start">
    <div class="w-1/5">Principle</div>
    <div class="w-4/5 justify-start">{res.stacksAddress}{#if res.lengthOfCname > 0}.{res.cname}{/if}</div>
  </div>
  <div class="flex gap-x-5 justify-start">
    <div class="w-1/5">Peg Wallet</div>
    <div class="w-4/5 justify-start">{res.sbtcWallet}</div>
  </div>
  {#if res.opcode.toUpperCase() === '3C'}
  <div class="flex gap-x-5 justify-start">
    <div class="w-1/5">Principle Type</div>
    <div class="w-4/5 justify-start">{res.prinType}</div>
  </div>
  {:else}
  <div class="flex gap-x-5 justify-start">
    <div class="w-1/5">Recipient</div>
    <div class="w-4/5 justify-start">{res.spendingAddress}</div>
  </div>
  <div class="flex gap-x-5 justify-start">
    <div class="w-1/5">Signature</div>
    <div class="w-4/5 overflow-auto">{res.signature}</div>
  </div>
  {/if}
</div>
{/if}