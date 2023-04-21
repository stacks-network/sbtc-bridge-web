<script lang="ts">
import BuildTransaction from '$lib/components/unwrapper/BuildTransaction.svelte';
import SignTransaction from '$lib/components/common/SignTransaction.svelte';
import SignTransactionWeb from '$lib/components/common/SignTransactionWeb.svelte';
import { sbtcConfig } from '$stores/stores'
import type { PegOutTransactionI } from '$lib/domain/PegOutTransaction';
import PegOutTransaction from '$lib/domain/PegOutTransaction';
import SbtcWalletDisplay from '$lib/components/common/SbtcWalletDisplay.svelte';
import { CONFIG } from '$lib/config';
import { addresses } from '$lib/stacks_connect'

let poTx:PegOutTransactionI = ($sbtcConfig.pegOutTransaction && $sbtcConfig.pegOutTransaction.ready) ? PegOutTransaction.hydrate($sbtcConfig.pegOutTransaction) : new PegOutTransaction();

$: view = 'build_tx_view';

let webWallet = true;
const openSigView = () => {
	webWallet = poTx.fromBtcAddress === addresses().cardinal,

	poTx = PegOutTransaction.hydrate($sbtcConfig.pegOutTransaction!);
	if (!poTx.pegInData.stacksAddress) poTx.setStacksAddress(addresses().stxAddress);
	poTx.setSignature($sbtcConfig.sigData.signature);
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
			{#if !$sbtcConfig.sbtcContractData.sbtcWalletAddress}
			<div class="my-3 d-flex justify-content-between text-white">
				No wallet currently connect to {CONFIG.VITE_NETWORK} - try a different network by clicking the account dropdown in the header.
			</div>
			{:else}
			<div class="my-3 d-flex justify-content-between text-white">
				<SbtcWalletDisplay />
			</div>
			<div class="d-flex justify-content-center">
				<div class="card border p-4">
					<div>
					  {#if view === 'build_tx_view'}
					  <BuildTransaction {poTx} on:request_signature={openSigView}/>
					  {:else}
					  	{#if !webWallet}
					  		<SignTransaction piTx={poTx} on:update_transaction={updateTransaction}/>
						{/if}
						{#if webWallet}
							<SignTransactionWeb piTx={poTx} on:update_transaction={updateTransaction}/>
						{/if}
					  {/if}
					</div>
				</div>
			</div>
			{/if}
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