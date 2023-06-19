<script lang="ts">
import Coordinator from '$lib/components/admin/Coordinator.svelte';
import { CONFIG } from '$lib/config';

</script>

<div class="mx-auto flex flex-col justify-center">
	<div class="mx-auto max-w-2xl">
	  <div class="flex flex-col p-10 gap-10 items-start bg-gray-1000 border-[0.5px] border-gray-700 rounded-3xl">
		<div class="flex flex-col gap-10">
			<div class="">
				<div class="">
					<h1 class="text-info"><span class="strokeme-info">sBTC</span> Contract Management</h1>
					<h6>Contract ID: {CONFIG.VITE_SBTC_CONTRACT_ID}</h6>
				</div>
			</div>
			<div class="">
				<div class="">
					<Coordinator/>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
  
<section class="">
</section>
