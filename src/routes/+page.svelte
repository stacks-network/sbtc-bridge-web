<script lang="ts">
	import PegIn from '$lib/components/PegIn.svelte';
	import PegOut from '$lib/components/PegOut.svelte';
	import { ArrowRepeat } from "svelte-bootstrap-icons";
	import { sbtcConfig } from '$stores/stores';
	
	let pegIn = true;
	</script>
	
	<section class="bg-dark">
		<div class="my-4 p-4">
			<div class="card-width">
				<div class="d-flex justify-content-between">
					<h1 class="text-white">
							<span class="strokeme-white">sBTC</span> Peg {#if pegIn}In{:else}Out{/if}
					</h1>
					<div data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" title="Toggle pegging in / pegging out"><a href="/" on:click|preventDefault={() => pegIn = !pegIn}><ArrowRepeat width={40} height={40}/></a></div>
				</div>
				<h2>Swap {#if pegIn}BTC for sBTC{:else}sBTC for BTC{/if} - no middle men!</h2>
				<p><span class="text-white">SBTC Wallet: { $sbtcConfig.sbtcWalletAddress }</span></p>
				{#if pegIn}
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