<script lang="ts">
import { addresses } from '$lib/stacks_micro_stacks.js'
import { onMount } from 'svelte';
import stx_eco_wallet_on from '$lib/assets/png-assets/stx_eco_wallet_on.png';
import stx_eco_wallet_off from '$lib/assets/png-assets/stx_eco_wallet_off.png';
import { base } from '$app/paths'
import { isCoordinator } from '$lib/sbtc_admin.js'
import { sbtcConfig } from '$stores/stores'
import type { SbtcConfig } from '$types/sbtc_config';
import { getAccount } from '@micro-stacks/svelte';
import { login } from '$lib/stacks_micro_stacks'
import { getAuth } from '@micro-stacks/svelte';
const auth = getAuth();
const account = getAccount();

const coordinator = isCoordinator(addresses($account).stxAddress)
const logout = () => {
	$auth.signOut();
	sbtcConfig.update((conf:SbtcConfig) => {
		conf.loggedIn = false;
		return conf;
	});
}
const doLogin = () => {
	login($auth);
}

let webWalletNeeded = false;
onMount(async () => {
	//webWalletNeeded = typeof window.StacksProvider === 'undefined';
})

</script>

{#if coordinator}
<li class="nav-item mb-1">
	<span class="nav-link">
	<a href="{base}/admin" class="pointer px-2">Admin</a> 
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
{:else if $auth.isSignedIn}
	<span class="nav-link">
		<a href="{base}/" class="pointer" style="vertical-align: middle;" on:click|preventDefault={() => logout()}>
			<span  class="px-2"><img src={stx_eco_wallet_on} alt="Wallet Connected" width="40" height="auto" /></span>
		</a>
	</span>
{:else if $auth.isRequestPending}
	<span class="nav-link"><a href="{base}/" on:click|preventDefault={login}><span  class="px-2"><img src={stx_eco_wallet_off} alt="Connect Wallet / Login" width="40" height="auto"/></span> connect</a></span>
{:else}
	<span class="nav-link"><a href="{base}/" class="pointer px-2" on:click|preventDefault={() => doLogin()} ><span  class="px-1"><img src={stx_eco_wallet_off} alt="Connect Wallet / Login" width="40" height="auto"/></span> connect</a></span>
{/if}
</li>

<style>
.nav-item {
	text-transform: lowercase;
	font-weight: 700;
	font-size: 1.0rem;
}
</style>