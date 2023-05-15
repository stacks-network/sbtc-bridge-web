<script lang="ts">
import stx_eco_wallet_on from '$lib/assets/png-assets/stx_eco_wallet_on.png';
import stx_eco_wallet_off from '$lib/assets/png-assets/stx_eco_wallet_off.png';
import { sbtcConfig } from '$stores/stores'
import type { SbtcConfig } from '$types/sbtc_config';

const toggleMechanism = (arg:string) => {
	const conf:SbtcConfig = $sbtcConfig;
	if (typeof conf.userSettings === 'undefined') {
		conf.userSettings = {
			useOpDrop: false,
			debugMode: false,
			testAddresses: false
		}
	}
	if (arg === 'txmode') conf.userSettings.useOpDrop = !conf.userSettings.useOpDrop;
	if (arg === 'debug') conf.userSettings.debugMode = !conf.userSettings.debugMode;
	if (arg === 'testAddresses') conf.userSettings.testAddresses = !conf.userSettings.testAddresses;
	sbtcConfig.update(() => conf);
}
</script>

<section class="bg-dark text-white">
	<div class="my-4 p-4">
		<div class="card-width">
			<h1 class="pointer text-white"><span class="strokeme-white">sBTC</span> Settings</h1>
			<div class="row my-3">
				<div class="col-3">Pegin Transactions</div>
				<div class="col-1">
					<a href="/" class="text-white pointer" style="vertical-align: middle;" on:click|preventDefault={() => toggleMechanism('txmode')}>
						{#if $sbtcConfig.userSettings?.useOpDrop}
						<img src={stx_eco_wallet_on} alt="Wallet Connected" width="40" height="auto" />
						{:else}
						<img src={stx_eco_wallet_off} alt="Wallet Connected" width="40" height="auto" />
						{/if}
					</a>
				</div>
				<div class="col-7">
					{#if $sbtcConfig.userSettings?.useOpDrop}
					Use OP_DROP Mechanism - pegin data sent in spendable output
					{:else}
					Use OP_RETURN Mechanism - pegin data sent in op_return output
					{/if}
				</div>
			</div>
			<div class="row my-3">
				<div class="col-3">Debug Mode</div>
				<div class="col-1">
					<a href="/" class="text-white pointer" style="vertical-align: middle;" on:click|preventDefault={() => toggleMechanism('debug')}>
						{#if $sbtcConfig.userSettings?.debugMode}
						<img src={stx_eco_wallet_on} alt="Wallet Connected" width="40" height="auto" />
						{:else}
						<img src={stx_eco_wallet_off} alt="Wallet Connected" width="40" height="auto" />
						{/if}
					</a>
				</div>
				<div class="col-7">
					{#if $sbtcConfig.userSettings?.debugMode}
					Debug Mode On - advanced info provided
					{:else}
					Debug Mode Off - advanced info not shown
					{/if}
				</div>
			</div>
			<div class="row my-3">
				<div class="col-3">Test Addresses</div>
				<div class="col-1">
					<a href="/" class="text-white pointer" style="vertical-align: middle;" on:click|preventDefault={() => toggleMechanism('testAddresses')}>
						{#if $sbtcConfig.userSettings?.testAddresses}
						<img src={stx_eco_wallet_on} alt="Wallet Connected" width="40" height="auto" />
						{:else}
						<img src={stx_eco_wallet_off} alt="Wallet Connected" width="40" height="auto" />
						{/if}
					</a>
				</div>
				<div class="col-7">
					{#if $sbtcConfig.userSettings?.testAddresses}
					test addresses Mode On
					{:else}
					test addresses Mode Off
					{/if}
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