<script lang="ts">
  import { onMount } from 'svelte';
  import Invoice from '$lib/components/dashboard/shared/Invoice.svelte';
	import type { PSBTHolder } from '$types/revealer_types';

  export let psbtHolder:PSBTHolder|undefined;
  export let amountSats:number;
  export let bitcoinAddress:string;
  export let mode:string;
  export let requestType:string;

  onMount(() => {
  })
</script>

<h1 class="text-3xl font-medium">Details</h1>
<p class="">Waiting for your transaction to be broadcast...</p>
<Invoice {psbtHolder} {amountSats} {bitcoinAddress} {mode} {requestType} />
