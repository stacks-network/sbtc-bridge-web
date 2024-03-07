<script lang="ts">
	import Transactions from '$lib/components/transactions/Transactions.svelte';


</script>

<svelte:head>
  <title>sBTC Bridge - Transactions</title>
  <meta name="description" content="A detailed table of all the transactions going through the sBTC Bridge." />
</svelte:head>

<Transactions mode={'mine'} />

