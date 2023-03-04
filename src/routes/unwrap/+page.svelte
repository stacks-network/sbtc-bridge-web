<script lang="ts">
import BuildTransaction from '$lib/components/unwrapper/BuildTransaction.svelte';
import SignTransaction from '$lib/components/common/SignTransaction.svelte';
import SbtcWalletDisplay from '$lib/components/common/SbtcWalletDisplay.svelte';
import { sbtcConfig } from '$stores/stores'
import type { PegOutTransactionI } from '$lib/domain/PegOutTransaction';
import PegOutTransaction from '$lib/domain/PegOutTransaction';

let poTx:PegOutTransactionI = ($sbtcConfig.pegOutTransaction && $sbtcConfig.pegOutTransaction.ready) ? PegOutTransaction.hydrate($sbtcConfig.pegOutTransaction) : PegOutTransaction.create1();

$: view = 'build_tx_view';

let sigData: { tx: any; outputsForDisplay: Array<any>; inputsForDisplay: Array<any>; };
const requestSignature = () => {
	sigData = {
		tx: poTx!.buildTransaction(),
		outputsForDisplay: poTx!.getOutputsForDisplay(),
		inputsForDisplay: poTx!.addressInfo.utxos
	}
  	view = 'sign_tx_view';
}

const updateTransaction = () => {
  view = 'build_tx_view';
}

</script>

<section class="bg-dark">
	<div class="my-4 p-4">
		<div class="card-width">
			<h1 class="text-warning">Unwrap <span class="strokeme-warning">sBTC</span></h1>
			<h2 class="text-warning mb-3">sBTC to BTC</h2>
			<div class="my-3 d-flex justify-content-between text-white">
				<SbtcWalletDisplay />
			</div>
			<div class="d-flex justify-content-center">
				<div class="card border p-4">
					<div>
					  {#if view === 'build_tx_view'}
					  <BuildTransaction {poTx} on:request_signature={requestSignature}/>
					  {:else}
					  {#if sigData}<SignTransaction {sigData} on:update_transaction={updateTransaction}/>{/if}
					  {/if}
					</div>
				</div>
			</div>
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