<script lang="ts">
import BuildTransaction from '$lib/components/unwrapper/BuildTransaction.svelte';
import SignTransaction from '$lib/components/common/SignTransaction.svelte';
import SignTransactionWeb from '$lib/components/common/SignTransactionWeb.svelte';
import SbtcWalletDisplay from '$lib/components/common/SbtcWalletDisplay.svelte';
import { sbtcConfig } from '$stores/stores'
import type { PegOutTransactionI } from '$lib/domain/PegOutTransaction';
import PegOutTransaction from '$lib/domain/PegOutTransaction';
import type { SigData } from '$types/sig_data';
import { addresses } from '$lib/stacks_connect'

let poTx:PegOutTransactionI = ($sbtcConfig.pegOutTransaction && $sbtcConfig.pegOutTransaction.ready) ? PegOutTransaction.hydrate($sbtcConfig.pegOutTransaction) : new PegOutTransaction();

$: view = 'build_tx_view';

let sigData: SigData;
const openSigView = () => {
	poTx = PegOutTransaction.hydrate($sbtcConfig.pegOutTransaction!);
	if (!poTx.pegInData.stacksAddress) poTx.setStacksAddress(addresses().stxAddress);
	const signature = $sbtcConfig.sigData.signature;
	const txs = poTx!.buildTransaction(signature);
	sigData = {
		pegin: false,
		webWallet: poTx.fromBtcAddress === addresses().cardinal,
		txs,
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
					  <BuildTransaction {poTx} on:request_signature={openSigView}/>
					  {:else}
					  	{#if sigData && !sigData.webWallet}
					  		<SignTransaction {sigData} pegInfo={JSON.parse(JSON.stringify(poTx))} on:update_transaction={updateTransaction}/>
						{/if}
						{#if sigData && sigData.webWallet}
							<SignTransactionWeb {sigData} pegInfo={JSON.parse(JSON.stringify(poTx))} on:update_transaction={updateTransaction}/>
						{/if}
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