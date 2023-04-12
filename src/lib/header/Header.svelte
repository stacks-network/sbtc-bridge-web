<script lang="ts">
import { CONFIG } from '$lib/config';
import WalletConnectButton from './WalletConnectButton.svelte'
import logoWhite from '$lib/assets/logo-white.jpeg';
import { sbtcConfig } from '$stores/stores';
import type { SbtcConfig } from '$types/sbtc_config';
import { goto } from "$app/navigation";
import UserBalance from '$lib/components/common/UserBalance.svelte'

const togglePeg = (pegin:boolean) => {
	const conf:SbtcConfig = $sbtcConfig;
	conf.pegIn = pegin;
	sbtcConfig.set(conf);
	(pegin) ? goto('/wrap') : goto('/unwrap');
}
const network = CONFIG.VITE_NETWORK;

</script>
<nav class="navbar navbar-expand-md transparent">
	<div class="container-fluid mx-5">
		<a class="navbar-brand" href="/">
			<img width="40px" height="40px" class="nav-logo" src={logoWhite} alt="CityCoins Test" />
		</a>
		<div class="nav-item text-white">
			<UserBalance showAddress={false} />
			<span class="text-center px-2 bg-white text-black nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{network}</span>
		</div>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item dropdown">
					<span class="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						SBTC Exchange
					</span>
					<ul class="dropdown-menu dropdown-menu-start" aria-labelledby="navbarDropdown">
						<li><a class="dropdown-item" href="/" on:click|preventDefault={() => togglePeg(true)}>Wrap BTC</a></li>
						<li><a class="dropdown-item" href="/" on:click|preventDefault={() => togglePeg(false)}>Unwrap sBTC</a></li>
					</ul>
				</li>
				<li class="badge nav-item">
					<span class="pointer nav-link">
						<span title="Your SBTC Transaction History"><a class="" href="/history">History</a></span>
					</span>
				</li>
				<WalletConnectButton/>
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
