<script lang="ts">
import Coordinator from '$lib/components/admin/Coordinator.svelte';
import { sbtcConfig } from '$stores/stores';

</script>
	
<section class="bg-dark">
	<div class="my-4 p-4">
		<div class="card-width">
			<h1 class="text-info"><span class="strokeme-info">Devnet</span> Coordinator</h1>
			<h6>{$sbtcConfig.sbtcWalletAddress}</h6>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<Coordinator/>
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