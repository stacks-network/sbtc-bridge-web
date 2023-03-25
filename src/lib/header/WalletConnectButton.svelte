<script lang="ts">
import { logUserOut, addresses } from '$lib/stacks_connect'
import { onMount } from 'svelte';
import stx_eco_wallet_on from '$lib/assets/png-assets/stx_eco_wallet_on.png';
import stx_eco_wallet_off from '$lib/assets/png-assets/stx_eco_wallet_off.png';
import { isCoordinator } from '$lib/sbtc_admin.js'
import { sbtcConfig } from '$stores/stores'
import type { SbtcConfig } from '$types/SbtcConfig';
import { loginStacksJs } from '$lib/stacks_connect'

const coordinator = isCoordinator(addresses().stxAddress)
const logout = () => {
	logUserOut();
	sbtcConfig.update((conf:SbtcConfig) => {
		conf.loggedIn = false;
		return conf;
	});
}
const doLogin = async () => {
	await loginStacksJs();
}

let webWalletNeeded = false;
onMount(async () => {
	//webWalletNeeded = typeof window.StacksProvider === 'undefined';
})

</script>

{#if coordinator}
<li class="nav-item mb-1">
	<span class="nav-link">
	<a href="/admin" class="pointer px-2">Admin</a> 
</span>
</li>
{/if}
<li class="nav-item mb-1">
{#if webWalletNeeded}
<span class="nav-link" style="position: relative; top: 2px;">
	<a href="https://wallet.hiro.so/wallet/install-web" class="pointer" target="_blank" rel="noreferrer">
		Install Web Wallet
	</a>
</span>
{:else if $sbtcConfig.loggedIn}
	<span class="nav-link">
		<a href="/" class="pointer" style="vertical-align: middle;" on:click|preventDefault={() => logout()}>
			<span  class="px-2"><img src={stx_eco_wallet_on} alt="Wallet Connected" width="40" height="auto" /></span>
		</a>
	</span>
{:else}
	<span class="nav-link"><a href="/" class="pointer px-2" on:click|preventDefault={() => doLogin()} ><span  class="px-1"><img src={stx_eco_wallet_off} alt="Connect Wallet / Login" width="40" height="auto"/></span> connect</a></span>
{/if}
</li>

<style>
.nav-item {
	text-transform: lowercase;
	font-weight: 700;
	font-size: 1.0rem;
}
</style>