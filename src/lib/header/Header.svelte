<script lang="ts">
	//import { onDestroy } from 'svelte';
	//import WalletConnectButton from './WalletConnectButton.svelte'
	import logoWhite from '$lib/assets/logo-white.jpeg';
	import { sbtcConfig } from '$stores/stores';
	import { fetchSbtcWalletAddress } from "$lib/sbtc";
	import type { SbtcConfig } from '$types/sbtc_config';
	import { createEventDispatcher } from "svelte";
	
	const dispatch = createEventDispatcher();
	
	//const unsubscribe = sbtcConfig.subscribe(value => {
	//  console.log('myConfig: ', value)
	//});
	//onDestroy(unsubscribe);
	
	const updateNetwork = async (newNet:string) => {
		if (newNet === $sbtcConfig.network) return;
		const addr = await fetchSbtcWalletAddress(newNet);
		let conf = { network: newNet, sbtcWalletAddress: addr } as SbtcConfig;
		sbtcConfig.update(() => conf)
		dispatch("network_change", {});
	}
	</script>
	<nav class="navbar navbar-expand-md transparent">
		<div class="container-fluid mx-5">
			  <a class="navbar-brand" href="/">
				<img class="nav-logo" src={logoWhite} alt="CityCoins Test" />
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item dropdown">
						<span class="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Network: {$sbtcConfig.network}
						</span>
						<ul class="dropdown-menu dropdown-menu-start" aria-labelledby="navbarDropdown">
						  <li><a class="dropdown-item" href="/" on:click|preventDefault={() => updateNetwork('testnet')}>Testnet</a></li>
						  <li><a class="dropdown-item" href="/" on:click|preventDefault={() => updateNetwork('mainnet')}>Mainnet</a></li>
						</ul>
					</li>
					<!--
					<li class="nav-item mb-1">
						<WalletConnectButton />
					</li>
					-->
				</ul>
			</div>
		</div>
	</nav>
	
	<style>
	</style>