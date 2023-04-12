<script lang="ts">
import Pegs from '$lib/components/history/Pegs.svelte';

</script>

<section class="bg-dark">
	<div class="my-4 p-4">
		<div class="card-width">
			<div class="row">
				<div class="d-flex justify-content-between">
				  <h1 class="pointer text-white"><span class="strokeme-white">sBTC</span> Transaction History</h1>
				</div>
			</div>
			<Pegs />
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