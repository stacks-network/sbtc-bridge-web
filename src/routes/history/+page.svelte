<script lang="ts">
	import PegIn from '$lib/components/pegin/PegIn.svelte';
	import PegOut from '$lib/components/pegout/PegOut.svelte';
	import { sbtcConfig } from '$stores/stores';
	
	</script>
	
	<section class="bg-dark">
		<div class="my-4 p-4">
			<div class="card-width">
				<h1 class="text-info"><span class="strokeme-info">Transaction</span> History</h1>
				<h2 class="text-info mb-3">BTC to sBTC - no middle men!</h2>
			</div>
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