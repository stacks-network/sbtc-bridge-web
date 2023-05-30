<script lang="ts">
import { CONFIG } from '$lib/config';
import WalletConnectButton from './WalletConnectButton.svelte'
import logoWhite from '$lib/assets/Stacks Logo White.png';
import { sbtcConfig } from '$stores/stores';
import type { SbtcConfig } from '$types/sbtc_config';
import { goto } from "$app/navigation";
import UserBalance from '$lib/components/common/UserBalance.svelte'
import { isCoordinator } from '$lib/sbtc_admin.js'
import { addresses } from '$lib/stacks_connect'

const coordinator = isCoordinator(addresses().stxAddress)
const isStaging = () => {
	return location.hostname.indexOf('staging') > -1 || location.hostname.indexOf('localhost') > -1;
}
const togglePeg = (pegin:boolean) => {
	const conf:SbtcConfig = $sbtcConfig;
	conf.pegIn = pegin;
	sbtcConfig.set(conf);
	(pegin) ? goto('/wrap') : goto('/unwrap');
}
const network = CONFIG.VITE_NETWORK;

</script>
<nav class="bg-secton navbar navbar-expand-md transparent">
	<div class="container-fluid mx-5">
		<div class="navbar-brand">
			<a href="/">
				<img width="100%" height="60px" class="nav-logo" src={logoWhite} alt="sBTC Bridge" />
			</a>
			<br/>
			<span class="text-gradient">sBTC Bridge</span>
		</div>
		<div class="nav-item"><a class="menu-item1" href="/" on:click|preventDefault={() => togglePeg(true)}>Deposit</a></div>
		<div class="nav-item"><a class="menu-item1" href="/" on:click|preventDefault={() => togglePeg(false)}>Withdraw</a></div>
		<div class="nav-item"><a class="menu-item1" href="/history">History</a></div>
		{#if coordinator}<div class="nav-item"><a class="menu-item1" href="/admin">Admin</a></div>{/if}
		<!--
		<div class="nav-item">
			<UserBalance showAddress={false} />
			<div class="bg-white bg-white text-black text-center px-2 nav-link">{network}</div>
			{#if isStaging()}
			<div class="bg-warning text-black text-center px-2 nav-link">staging</div>
			{/if}
		</div>
		-->
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item dropdown">
					<span class="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						sBTC Exchange
					</span>
					<ul class="dropdown-menu dropdown-menu-start" aria-labelledby="navbarDropdown">
						<li><a class="dropdown-item" href="/" on:click|preventDefault={() => togglePeg(true)}>Wrap BTC</a></li>
						<li><a class="dropdown-item" href="/" on:click|preventDefault={() => togglePeg(false)}>Unwrap sBTC</a></li>
					</ul>
				</li>
				<li class="nav-item dropdown">
					<span class="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						sBTC History
					</span>
					<ul class="dropdown-menu dropdown-menu-start" aria-labelledby="navbarDropdown">
						<li><a class="dropdown-item" href="/history">Conversions</a></li>
						<li><a class="dropdown-item" href="/deposits">Deposits</a></li>
						<li><a class="dropdown-item" href="/withdrawals">Withdrawals</a></li>
					</ul>
				</li>
				<WalletConnectButton/>
			</ul>
		</div>
	</div>
</nav>

<style>
.navbar-brand {
	width: 100px;
}
.navbar-brand > a {
	display: contents;
}
.text-gradient {
	width: 95px;
	height: 18px;

	font-family: 'Circular Std';
	font-style: normal;
	font-weight: 900;
	font-size: 18px;
	line-height: 18px;
	/* identical to box height, or 100% */
	letter-spacing: -1px;
	/* Gradients/Primary/01 */
	background: linear-gradient(306.12deg, #ED693C 21.1%, #FDC60B 84.08%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	/* Inside auto layout */
	flex: none;
	order: 1;
	flex-grow: 0;
}
.menu-item1 {
	height: 20px;

	font-family: 'Circular Std';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	/* identical to box height, or 143% */

	letter-spacing: -0.02em;

	/* Base/White */

	color: #FFFFFF;


	/* Inside auto layout */

	flex: none;
	order: 0;
	flex-grow: 0;
}
.dropdown-item {
	font-size: 0.7rem;
}
.nav-item {
	font-size: 0.9rem;
}
</style>
