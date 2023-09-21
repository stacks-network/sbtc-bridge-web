<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from "$app/navigation";
  import type { BridgeTransactionType } from 'sbtc-bridge-lib'
  import { tsToDate, explorerBtcTxUrl, explorerBtcAddressUrl } from '$lib/utils'
  import { doPeginScan } from '$lib/bridge_api';
  import Invoice from '$lib/components/dashboard/shared/Invoice.svelte';
	import Banner from '../shared/Banner.svelte';

  export let peginRequest:BridgeTransactionType;

  const scan = async () => {
    doPeginScan();
    location.reload();
  }

  onMount(() => {
  })
</script>

<h1 class="text-3xl font-medium">Details</h1>
<p class="">Waiting for your transaction to be broadcast...</p>
<Invoice {peginRequest} />
