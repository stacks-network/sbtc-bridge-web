<script lang="ts">
import Coordinate from '$lib/components/admin/Coordinate.svelte';
import { sbtcConfig } from '$stores/stores';

</script>
	
<section class="bg-dark">
	<div class="my-4 p-4">
		<div class="card-width">
			<h1 class="text-info"><span class="strokeme-info">Transaction</span> Coordination</h1>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<Coordinate/>
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