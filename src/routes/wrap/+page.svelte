<script lang="ts">
import BuildTransaction from '$lib/components/wrapper/BuildTransaction.svelte';
import SignTransaction from '$lib/components/common/SignTransaction.svelte';
import SignTransactionWeb from '$lib/components/common/SignTransactionWeb.svelte';
import { sbtcConfig } from '$stores/stores';
import PegInTransaction from '$lib/domain/PegInTransaction';
import type { PegInTransactionI } from '$lib/domain/PegInTransaction';
import SbtcWalletDisplay from '$lib/components/common/SbtcWalletDisplay.svelte';
import { addresses } from '$lib/stacks_connect'
import { CONFIG } from '$lib/config';

let piTx:PegInTransactionI = ($sbtcConfig.pegInTransaction && $sbtcConfig.pegInTransaction.ready) ? PegInTransaction.hydrate($sbtcConfig.pegInTransaction) : new PegInTransaction();

$: view = 'build_tx_view';
let webWallet = true;
const openSigView = (e:any) => {
	const wallet = e.detail.wallet
	webWallet = wallet === 1; // piTx.fromBtcAddress === addresses().cardinal,
	piTx = PegInTransaction.hydrate($sbtcConfig.pegInTransaction!);
  	view = 'sign_tx_view';
}
const updateTransaction = () => {
  	view = 'build_tx_view';
}

</script>

<section class="bg-dark">
	<div class="my-4 p-4">
		<div class="card-width">
			<h1 class="text-info">Wrap <span class="strokeme-info">BTC</span></h1>
			<h2 class="mb-3">BTC to sBTC</h2>
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
							<BuildTransaction {piTx} on:request_signature={openSigView}/>
						{:else}
							{#if !webWallet}
								<SignTransaction {piTx} on:update_transaction={updateTransaction}/>
							{/if}
							{#if webWallet}
								<SignTransactionWeb {piTx} on:update_transaction={updateTransaction}/>
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