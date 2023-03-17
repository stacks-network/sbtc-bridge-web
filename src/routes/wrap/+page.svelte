<script lang="ts">
import BuildTransaction from '$lib/components/wrapper/BuildTransaction.svelte';
import SignTransaction from '$lib/components/common/SignTransaction.svelte';
import { sbtcConfig } from '$stores/stores';
import PegInTransaction from '$lib/domain/PegInTransaction';
import type { PegInTransactionI } from '$lib/domain/PegInTransaction';
import SbtcWalletDisplay from '$lib/components/common/SbtcWalletDisplay.svelte';

let piTx:PegInTransactionI = ($sbtcConfig.pegInTransaction && $sbtcConfig.pegInTransaction.ready) ? PegInTransaction.hydrate($sbtcConfig.pegInTransaction) : new PegInTransaction();
let sigData: { txs: any; outputsForDisplay: any; inputsForDisplay: any; };

$: view = 'build_tx_view';
const openSigView = () => {
	piTx = PegInTransaction.hydrate($sbtcConfig.pegInTransaction!);
	sigData = {
		txs: piTx?.buildTransaction(undefined),
		outputsForDisplay: piTx?.getOutputsForDisplay(),
		inputsForDisplay: piTx?.addressInfo.utxos
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
			<h1 class="text-info">Wrap <span class="strokeme-info">sBTC</span></h1>
			<h2 class="text-info mb-3">BTC to sBTC</h2>
			<div class="my-3 d-flex justify-content-between text-white">
				<SbtcWalletDisplay />
			</div>
			<div class="d-flex justify-content-center">
				<div class="card border p-4">
					<div>
						{#if view === 'build_tx_view'}
							<BuildTransaction {piTx} on:request_signature={openSigView}/>
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