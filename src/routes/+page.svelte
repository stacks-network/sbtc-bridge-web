<script lang="ts">
import { goto } from "$app/navigation";
import { sbtcConfig } from '$stores/stores';
import { explorerTxUrl } from '$lib/utils'
import type { SbtcConfig } from '$types/sbtc_config';

const sbtcContract = import.meta.env.VITE_SBTC_CONTRACT_ID;
const sbtcContractUrl = explorerTxUrl(sbtcContract);

const togglePeg = (pegin:boolean) => {
	const conf:SbtcConfig = $sbtcConfig;
	conf.pegIn = pegin;
	sbtcConfig.set(conf);
	(pegin) ? goto('/wrap') : goto('/unwrap');
}

</script>

<section class="bg-dark">
	<div class="my-4 p-4">
		<div class="text-center mb-5 text-center text-white">
			<div>SBTC Wallet: { $sbtcConfig.sbtcContractData.sbtcWalletAddress }</div>
			<div>Contract: <a href={sbtcContractUrl} target="_blank" rel="noreferrer">{ sbtcContract }</a></div>
		</div>
		<div class="">
			<div class="row">
				<div class="col-6 px-2">
					<div class="card-sm text-center">
						<h1 class="mt-5 text-info">Wrap <span class="strokeme-info">sBTC</span></h1>
						<h2 class="text-info mb-5">BTC to sBTC</h2>
						<div class="">
							<button on:click|preventDefault={() => togglePeg(true)} class="w-50 btn btn-outline-info">Wrap</button>
						</div>
					</div>
				</div>
				<div class="col-6 px-2">
					<div class="card-sm text-center">
						<h1 class="mt-5 text-warning">Unwrap <span class="strokeme-warning">sBTC</span></h1>
						<h2 class="text-warning mb-5">sBTC to BTC</h2>
						<button on:click|preventDefault={() => togglePeg(false)} class="w-50 btn btn-outline-warning">Unwrap</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
.card-sm {
	min-width: 40vw;
	height: 400px;
	border: 1pt solid #ccc;
	border-radius: 10px;
	padding: 10px;

}
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