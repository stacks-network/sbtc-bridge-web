<script lang="ts">
import PegIn from '$lib/components/PegIn.svelte';
import PegOut from '$lib/components/PegOut.svelte';

let pegIn = true;
</script>

<section>
	<div class="my-5 container">
		{#if pegIn}
		<h1><a href="/" on:click|preventDefault={() => pegIn = false}>sBTC Peg In</a></h1>
		<h2>Trust free swap of BTC for sBTC</h2>
		<PegIn/>
		{:else}
		<h1><a href="/" on:click|preventDefault={() => pegIn = true}>sBTC Peg Out</a></h1>
		<h2>Trust free swap of sBTC for BTC</h2>
		<PegOut/>
		{/if}
	</div>
</section>

<style>
section {
	display: flex;
	flex-direction: column;
	justify-content: top;
	align-items: center;
	flex: 0.6;
	min-height: 90vh;
}
h1 {
	width: 100%;
}
</style>
