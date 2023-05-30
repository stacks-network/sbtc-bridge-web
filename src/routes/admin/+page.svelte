<script lang="ts">
import Coordinator from '$lib/components/admin/Coordinator.svelte';
import { CONFIG } from '$lib/config';

</script>
	
<section class=" bg-secton">
	<div class="my-4 p-4">
		<div class="card-width">
			<h1 class="text-info"><span class="strokeme-info">sBTC</span> Coordinator</h1>
			<h6>{CONFIG.VITE_SBTC_CONTRACT_ID}</h6>
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