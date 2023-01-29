<script lang="ts">
	import PegIn from '$lib/components/pegin/PegIn.svelte';
	import PegOut from '$lib/components/pegout/PegOut.svelte';
	import { sbtcConfig } from '$stores/stores';
	
	</script>
	
	<section class="bg-dark">
		<div class="my-4 p-4">
			<div class="card-width">
				<div class="d-flex justify-content-between">
					<h1 class="text-info">
							<span class="strokeme-info">sBTC</span> Peg {#if $sbtcConfig.pegIn}In{:else}Out{/if}
					</h1>
				</div>
				<h2 class="text-info mb-3">{#if $sbtcConfig.pegIn}BTC to sBTC{:else}sBTC to BTC{/if} - no middle men!</h2>
				<div class="my-3 d-flex justify-content-between text-white">
					<span>SBTC Wallet: { $sbtcConfig.sbtcWalletAddress }</span>
					{#if $sbtcConfig.pegInAmount}<span class="text-end">Amount: { $sbtcConfig.pegInAmount }</span>{/if}
				</div>
				{#if $sbtcConfig.pegIn}
				<div class="d-flex justify-content-center">
					<PegIn/>
				</div>
				{:else}
				<div class="d-flex justify-content-center">
					<PegOut/>
				</div>
				{/if}
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