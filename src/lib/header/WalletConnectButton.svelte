<script>
import { getAuth } from "@micro-stacks/svelte";
import { login } from '$lib/stacks'
// import { onNoWalletFound } from 'micro-stacks/connect';
import { onMount } from 'svelte';
import stx_eco_wallet_on from '$lib/assets/png-assets/stx_eco_wallet_on.png';
import stx_eco_wallet_off from '$lib/assets/png-assets/stx_eco_wallet_off.png';

const auth = getAuth();

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

{#if webWalletNeeded}
<span class="nav-item" style="position: relative; top: 2px;">
	<a href="https://wallet.hiro.so/wallet/install-web" class="pointer" target="_blank" rel="noreferrer">
		Install Web Wallet
	</a>
</span>
{:else if $auth.isSignedIn}
	<span class="nav-item">
		<a href="/" class="pointer" style="vertical-align: middle;" on:click|preventDefault={logout}>
			<span  class="px-2"><img src={stx_eco_wallet_on} alt="Wallet Connected" width="40" height="auto" /></span>
		</a>
	</span>
{:else if $auth.isRequestPending}
	<span class="nav-item"><a href="/" on:click|preventDefault={login}><span  class="px-2"><img src={stx_eco_wallet_off} alt="Connect Wallet / Login" width="40" height="auto"/></span> connect</a></span>
{:else}
	<span class="nav-item"><a href="/" class="pointer px-2" on:click|preventDefault={() => doLogin()} ><span  class="px-1"><img src={stx_eco_wallet_off} alt="Connect Wallet / Login" width="40" height="auto"/></span> connect</a></span>
{/if}

<style>
.nav-item {
	text-transform: lowercase;
	font-weight: 700;
	font-size: 1.0rem;
}
</style>