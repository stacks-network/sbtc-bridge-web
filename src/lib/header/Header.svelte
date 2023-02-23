<script lang="ts">
//import { onDestroy } from 'svelte';
import WalletConnectButton from './WalletConnectButton.svelte'
import logoWhite from '$lib/assets/logo-white.jpeg';
import { sbtcConfig } from '$stores/stores';
import { fetchSbtcWalletAddress } from "$lib/sbtc";
import type { SbtcConfig } from '$types/sbtc_config';
import { createEventDispatcher } from "svelte";
import { ArrowUp, ArrowDown } from "svelte-bootstrap-icons";
import { base } from '$app/paths'

const dispatch = createEventDispatcher();

//const unsubscribe = sbtcConfig.subscribe(value => {
//  console.log('myConfig: ', value)
//});
//onDestroy(unsubscribe);

const togglePeg = (pegin:boolean) => {
	const conf:SbtcConfig = $sbtcConfig;
	conf.pegIn = pegin;
	sbtcConfig.set(conf);
}
</script>
<nav class="navbar navbar-expand-md transparent">
	<div class="container-fluid mx-5">
		<a class="navbar-brand" href="{base}/">
			<img class="nav-logo" src={logoWhite} alt="CityCoins Test" />
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<span class="pointer nav-link">
						<span title="Your SBTC Transaction History"><a class="" href="{base}/history">History</a></span>
					</span>
				</li>
				<li class="nav-item dropdown">
					<span class="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Peg
					</span>
					<ul class="dropdown-menu dropdown-menu-start" aria-labelledby="navbarDropdown">
						<li><a class="dropdown-item" href="{base}/" on:click={() => togglePeg(true)}>Peg In</a></li>
						<li><a class="dropdown-item" href="{base}/" on:click={() => togglePeg(false)}>Peg Out</a></li>
					</ul>
				</li>
				<WalletConnectButton />
			</ul>
		</div>
	</div>
</nav>

<style>
	 .dropdown-item {
		font-size: 0.7rem;
	 }
	.nav-item {
		font-size: 0.9rem;
	}
</style>
