<script lang="ts">
	import TransactionAnalysis from '$lib/components/admin/TransactionAnalysis.svelte';
	import { sbtcConfig } from '$stores/stores';

</script>

<div class="mx-auto flex flex-col justify-center w-3/5">
	<div class="mx-auto w-full">
	  <div class="flex flex-col w-full p-5 gap-10 items-start bg-gray-1000 border-[0.5px] border-gray-700 rounded-lg">
		<TransactionAnalysis feature={'merkel-tree'} txId={$sbtcConfig.userSettings.testAddress || ''}/>
	</div>
</div>
</div>

<section class="">
</section>
