<script lang="ts">
	//import { onDestroy } from 'svelte';
	import WalletConnectButton from './WalletConnectButton.svelte'
	import logoWhite from '$lib/assets/logo-white.jpeg';
	import { sbtcConfig } from '$stores/stores';
	import { fetchSbtcWalletAddress } from "$lib/sbtc";
	import type { SbtcConfig } from '$types/sbtc_config';
	import { createEventDispatcher } from "svelte";
	import { ArrowUp, ArrowDown } from "svelte-bootstrap-icons";

	const dispatch = createEventDispatcher();
	
	//const unsubscribe = sbtcConfig.subscribe(value => {
	//  console.log('myConfig: ', value)
	//});
	//onDestroy(unsubscribe);
	
	const updateNetwork = async (newNet:string) => {
		if (newNet === $sbtcConfig.network) return;
		const addr = await fetchSbtcWalletAddress(newNet);
		const currentPeg =  $sbtcConfig.pegIn;
		const feeInfo = $sbtcConfig.feeInfo;
		let conf = { network: newNet, sbtcWalletAddress: addr, pegIn: currentPeg, feeInfo } as SbtcConfig;
		sbtcConfig.update(() => conf)
		dispatch("network_change", {});
	}
	const togglePeg = () => {
		const conf:SbtcConfig = $sbtcConfig;
		conf.pegIn = !conf.pegIn;
  		sbtcConfig.set(conf);
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
				<ul class="navbar-nav text-white">
					<li class="nav-item">
						<span class="pointer nav-link">
							<span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" title="Your SBTC Transaction History"><a class="text-white" href="/history">Transactions</a></span>
						</span>
					</li>
					<li class="nav-item">
						<span class="pointer nav-link">
							<span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" title="Toggle pegging in / pegging out"><a class="text-white" href="/" on:click|preventDefault={() => togglePeg()}>{#if $sbtcConfig.pegIn}<ArrowUp width={30} height={30} class="mx-1"/> Pegging In{:else}<ArrowDown width={30} height={30} class="mx-1"/> Pegging Out{/if} </a></span>
						</span>
					</li>
					<li class="nav-item dropdown">
						<span class="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Network: {$sbtcConfig.network}
						</span>
						<ul class="dropdown-menu dropdown-menu-start" aria-labelledby="navbarDropdown">
						  <li><a class="dropdown-item" href="/" on:click|preventDefault={() => updateNetwork('testnet')}>Testnet</a></li>
						  <li><a class="dropdown-item" href="/" on:click|preventDefault={() => updateNetwork('mainnet')}>Mainnet</a></li>
						</ul>
					</li>
					<li class="nav-item mb-1">
						<WalletConnectButton />
					</li>
				</ul>
			</div>
		</div>
	</nav>
	
	<style>
	</style>