<script lang="ts">
import { getAuth, getAccount } from '@micro-stacks/svelte';
import { login } from '$lib/stacks'
// import { onNoWalletFound } from 'micro-stacks/connect';
import { onMount } from 'svelte';
import stx_eco_wallet_on from '$lib/assets/png-assets/stx_eco_wallet_on.png';
import stx_eco_wallet_off from '$lib/assets/png-assets/stx_eco_wallet_off.png';
import { c32ToB58 } from "micro-stacks/crypto";
import { base } from '$app/paths'
import { isCoordinator } from '$lib/sbtc_admin'

const auth = getAuth();
const account = getAccount();
const decodeAddr = () => {
	return c32ToB58($account.stxAddress);
} 
const explorerUrl = function (address:string) {
	return import.meta.env.VITE_STACKS_EXPLORER + '/address/' + address + '/?chain=' + import.meta.env.VITE_NETWORK;
}

const logout = () => {
	$auth.signOut();
}
const doLogin = () => {
	login($auth);
}

let webWalletNeeded = false;
onMount(async () => {
	//webWalletNeeded = typeof window.StacksProvider === 'undefined';
})

</script>

{#if isCoordinator($account.stxAddress)}
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
		<a href="/" class="pointer" style="vertical-align: middle;" on:click|preventDefault={logout}>
			<span  class="px-2"><img src={stx_eco_wallet_on} alt="Wallet Connected" width="40" height="auto" /></span>
		</a>
	</span>
{:else if $auth.isRequestPending}
	<span class="nav-link"><a href="/" on:click|preventDefault={login}><span  class="px-2"><img src={stx_eco_wallet_off} alt="Connect Wallet / Login" width="40" height="auto"/></span> connect</a></span>
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