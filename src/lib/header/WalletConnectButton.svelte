<script lang="ts">
import { logUserOut, addresses } from '$lib/stacks_connect'
import { onMount } from 'svelte';
import { setConfig } from '$lib/config';
import stx_eco_wallet_on from '$lib/assets/png-assets/stx_eco_wallet_on.png';
import stx_eco_wallet_off from '$lib/assets/png-assets/stx_eco_wallet_off.png';
import { Person } from "svelte-bootstrap-icons";
import { isCoordinator } from '$lib/sbtc_admin.js'
import { sbtcConfig } from '$stores/stores'
import type { SbtcBalance, SbtcConfig } from '$types/sbtc_config';
import { loginStacksJs, fetchSbtcBalance } from '$lib/stacks_connect'
import { CONFIG } from '$lib/config';

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

const style4 = (net:string) => {
	if (net === CONFIG.VITE_NETWORK) return 'border-bottom: 1pt solid #428bca';
	else return '';
}

const toggleNetwork = async (net:string) => {
	//let url = location.href;
	if (net === CONFIG.VITE_NETWORK) return;
	setConfig(net);
	await fetchSbtcBalance();
	sbtcConfig.update((conf:SbtcConfig) => {
		conf.stxAddress = addresses().stxAddress;
		if (conf.pegInTransaction) {
			conf.pegInTransaction.fromBtcAddress = addresses().cardinal;
			if (conf.pegInTransaction.pegInData) conf.pegInTransaction.pegInData.stacksAddress = addresses().stxAddress;
		}
		if (conf.pegOutTransaction) {
			conf.pegOutTransaction.fromBtcAddress = addresses().cardinal;
		}
		return conf;
	});
	const url = new URL(location.href);
	url.searchParams.set('net', net);
	location.assign(url.search);
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
<li class="nav-item dropdown">
	<span class="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
		<Person width={25} height={25}/>
	</span>
	<ul class="dropdown-menu dropdown-menu-end border" aria-labelledby="navbarDropdown">
		<li class="nav-item"><span class="dropdown-item"><a href="/" on:click|preventDefault={() => addresses()} class="dropdown-item">Network</a></span></li>
		<li class="nav-item px-5 text-small text-warning"><a href="/" class="dropdown-item text-warning" on:click|preventDefault={() => toggleNetwork('testnet')}><span  style={style4('testnet')}>Testnet</span></a></li>
		<li class="nav-item px-5 text-small text-warning"><a href="/" class="dropdown-item text-warning" on:click|preventDefault={() => toggleNetwork('mainnet')}><span  style={style4('mainnet')}>Mainnet</span></a></li>
		<li class="nav-item"><span class="dropdown-item"><a href="/settings" class="dropdown-item">Settings</a></span></li>
		<!--<li class="nav-item px-4 mx-4"><a href="/" class="dropdown-item" on:click|preventDefault={() => toggleNetwork('devnet')}>Devnet</a></li>-->
		{#if $sbtcConfig.loggedIn}
		<li class="nav-item"><span class="dropdown-item"><a href="/" on:click|preventDefault={() => addresses()} class="dropdown-item">Addresses</a></span></li>
		<li class="nav-item px-4 text-small text-warning"><span class="text-small">{addresses().stxAddress}</span></li>
		<li class="nav-item px-4 text-small text-warning"><span class="text-small">{addresses().cardinal}</span></li>
		{/if}
		<li class="nav-item mt-4 py-4">
		{#if webWalletNeeded}
		<span class="dropdown-item" style="position: relative; top: 2px;">
			<a href="https://wallet.hiro.so/wallet/install-web" class="pointer" target="_blank" rel="noreferrer">
				Install Web Wallet
			</a>
		</span>
		{:else if $sbtcConfig.loggedIn}
			<span class="dropdown-item">
				<a href="/" class="dropdown-item pointer" style="vertical-align: middle;" on:click|preventDefault={() => logout()}>
					<span  class=""><img src={stx_eco_wallet_on} alt="Wallet Connected" width="40" height="auto" /> disconnect</span>
				</a>
			</span>
		{:else}
			<span class="dropdown-item"><a href="/" class="pointer px-2" on:click|preventDefault={() => doLogin()} ><span  class="px-1"><img src={stx_eco_wallet_off} alt="Connect Wallet / Login" width="40" height="auto"/></span> connect</a></span>
		{/if}
		</li>
	</ul>
</li>


<style>
.border {
border: 1pt solid #fff;
}

.nav-item {
	font-weight: 700;
	font-size: 1.0rem;
}
</style>