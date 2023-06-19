<script lang="ts">
	import '../app.postcss';
	import "../sbtc.css";
	import Header from "$lib/header/Header.svelte";
	import Footer from "$lib/header/Footer.svelte";
	import { fetchSbtcData } from "$lib/bridge_api";
	import { fetchSbtcBalance, userSession, isLegal } from "$lib/stacks_connect";
	import { setConfig } from '$lib/config';
	import { afterNavigate, beforeNavigate, goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { tick, onMount, onDestroy } from 'svelte';
	import { sbtcConfig } from '$stores/stores'
	import type { SbtcContractDataI, KeySet } from 'sbtc-bridge-lib';
	import type { SbtcConfig } from '$types/sbtc_config'
	import { defaultSbtcConfig } from '$lib/sbtc';
	import { COMMS_ERROR } from '$lib/utils.js'
	import { loginStacksJs } from '$lib/stacks_connect'

	$: innerWidth = 0
	$: {
		const conf = $sbtcConfig;
		conf.innerWidth = innerWidth;
		sbtcConfig.update(() => conf);
		console.log(`the count is ${$sbtcConfig.innerWidth}`)
	}
	let componentKey = 0;
	console.log('process.env: ', import.meta.env);
	setConfig($page.url.search);
	const search = $page.url.search;
	if (!isLegal(location.href)) {
		componentKey++;
		goto('/' + '?net=testnet')
	}
	beforeNavigate((nav) => {
		if (!isLegal(nav.to?.route.id || '')) {
			nav.cancel();
			loginStacksJs(initApplication);
			componentKey++;
			return;
		}
		const next = (nav.to?.url.pathname || '') + (nav.to?.url.search || '');
			if (nav.to?.url.search.indexOf('testnet') === -1 && search.indexOf('net=testnet') > -1) {
			nav.cancel();
			goto(next + '?net=testnet')
		}
	})
	afterNavigate((nav) => {
		componentKey++;
	})
	export let data:{ sbtcContractData: SbtcContractDataI, keys: KeySet, sbtcWalletAddressInfo: any, btcFeeRates: any } ;
	const unsubscribe = sbtcConfig.subscribe((conf) => {});
	onDestroy(unsubscribe);
	//setUpMicroStacks();
	//setUpStacksJs();
	let inited = false;
	let errorReason:string|undefined;

	const initApplication = async () => {
		let conf = defaultSbtcConfig as SbtcConfig;
		if ($sbtcConfig) {
			conf = $sbtcConfig;
		}
		try {
			data = await fetchSbtcData();
			if (!data) data = {} as any;
			conf.loggedIn = false;
			if (userSession.isUserSignedIn()) {
				conf.loggedIn = true;
				await fetchSbtcBalance();
			}
		} catch (err) {
			data = {} as any;
		}
		conf.sbtcContractData = data.sbtcContractData;
		conf.keys = data.keys;
		conf.sbtcWalletAddressInfo = data.sbtcWalletAddressInfo;
		conf.btcFeeRates = data.btcFeeRates;
		sbtcConfig.update(() => conf);
	}

	onMount(async () => {
		try {
			await initApplication();
			//await tick();
		} catch (err) {
			errorReason = COMMS_ERROR
			console.log(err)
		}
		inited = true;
	})
</script>

{#if inited}
	<div class="bg-gray-1000 bg-[url('$lib/assets/bg-lines.png')] bg-cover text-white font-extralight min-h-screen">
		<div>
			{#key componentKey}
			<Header on:init_application={initApplication}></Header>
			{/key}
		</div>
		<div class="flex min-h-[calc(100vh-180px)] mx-auto lg:px-8 align-middle justify-center flex-grow">
			<slot></slot>
		</div>
		<div class="h-16 w-screen px-20">
			<Footer></Footer>
		</div>
	</div>
{/if}
<svelte:window bind:innerWidth />
