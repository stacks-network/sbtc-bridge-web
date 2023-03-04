<script lang="ts">
import OutTransaction from '$lib/components/pegout/OutTransaction.svelte';
import SignTransaction from '$lib/components/common/SignTransaction.svelte';

$: view = 'build_tx_view';
const requestSignature = () => {
  view = 'sign_tx_view';
}
const updateTransaction = () => {
  view = 'build_tx_view';
}

</script>
  
<div class="card border p-4">
  <div>
    {#if view === 'build_tx_view'}
    <OutTransaction on:request_signature={requestSignature}/>
    {/if}
  </div>
</div>

<style>
</style>