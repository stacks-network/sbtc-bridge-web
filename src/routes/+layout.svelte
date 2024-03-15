<script lang="ts">
	import '../app.postcss';
	import "../sbtc.css";
	import Header from "$lib/header/Header.svelte";
	import Footer from "$lib/header/Footer.svelte";
	import { initApplication, isLegal, loggedIn, authenticate, loginStacksFromHeader } from "$lib/stacks_connect";
	import { CONFIG, setConfig } from '$lib/config';
	import { afterNavigate, beforeNavigate, goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { onMount, onDestroy } from 'svelte';
	import { sbtcConfig } from '$stores/stores'
    import { authConfig } from '$stores/authConfig'
	import type { SbtcConfig } from '$types/sbtc_config'
	import { defaultSbtcConfig } from '$types/sbtc_config';
	import { COMMS_ERROR, tsToDate, tsToTime } from '$lib/utils.js'
	import { setAuthorisation } from '$lib/events_api';
	import type { AddressObject } from 'sbtc-bridge-lib';

	let componentKey = 0;
	let componentKey1 = 0;
	console.log('process.env: ', import.meta.env);
	setConfig($page.url.search);
	const search = $page.url.search;
	if (!isLegal(location.href)) {
		//componentKey++;
		goto('/' + '?chain=testnet')
	}
	beforeNavigate((nav) => {
		if (!isLegal(nav.to?.route.id || '')) {
			nav.cancel();
			login()
			return;
		}
		const next = (nav.to?.url.pathname || '') + (nav.to?.url.search || '');
		if (nav.to?.url.search.indexOf('testnet') === -1 && search.indexOf('chain=testnet') > -1) {
			nav.cancel();
			goto(next + '?chain=testnet')
		} else if (nav.to?.url.search.indexOf('devnet') === -1 && search.indexOf('chain=devnet') > -1) {
			nav.cancel();
			goto(next + '?chain=devnet')
		}
		console.debug('beforeNavigate: ' + nav.to?.route.id + ' : ' + tsToTime(new Date().getTime()))
	})
	afterNavigate((nav) => {
		//componentKey++;
		console.debug('afterNavigate: ' + nav.to?.route.id + ' : ' + tsToTime(new Date().getTime()))
	})
	const unsubscribe = sbtcConfig.subscribe((conf) => {});
	onDestroy(unsubscribe);
	let inited = false;
	let errorReason:string|undefined;

	const login = async () => {
		const res = await loginStacksFromHeader(document)
	}

	const loginEvent = () => {
		componentKey++;
		componentKey1++;
	}

	const initApp = async () => {
		await initApplication(($sbtcConfig) ? $sbtcConfig : defaultSbtcConfig as SbtcConfig, undefined);
		if (loggedIn() && !$sbtcConfig.authHeader) {
			await authenticate($sbtcConfig)
		}
		setAuthorisation($sbtcConfig.authHeader)
	}

	let resizing = false;
	let windowWidth:string|undefined;
	const debounce = () => {
		let timer:any;
		resizing = true
		windowWidth = `${window.innerWidth}px`;
		timer = setTimeout(() => {
			resizing = false;
			clearTimeout(timer);
		}, 250);
	};
	//const debouncedSetWindowWidth = debounce(300);

	onMount(async () => {
		try {
			const conf = $sbtcConfig;
			if (!conf.keySets) {
				if (CONFIG.VITE_NETWORK === 'testnet') {
					conf.keySets = { 'testnet': {} as AddressObject };
				} else if (CONFIG.VITE_NETWORK === 'devnet') {
					conf.keySets = { 'testnet': {} as AddressObject };
				} else {
					conf.keySets = { 'mainnet': {} as AddressObject };
				}
				conf.keySets[CONFIG.VITE_NETWORK] = {} as AddressObject;
				sbtcConfig.update(() => conf);
			}
			inited = true;

			initApp();
			window.addEventListener('resize', debounce);
		
		} catch (err) {
			errorReason = COMMS_ERROR
			console.log(err)
		}
	})
</script>
	{#if resizing}
	<div class="bg-gray-1000 bg-[url('$lib/assets/bg-lines.svg')] bg-cover text-white font-extralight min-h-screen">
		<Header on:login_event={loginEvent} />
	</div>
	{:else}
	<div class="bg-gray-1000 bg-[url('$lib/assets/bg-lines.svg')] bg-cover text-white font-extralight min-h-screen">
			{#if inited}
			<Header on:login_event={loginEvent} />
			<div class="min-h-[calc(100vh-160px)] mx-auto px-6">
				{#key componentKey1}
					<slot></slot>
				{/key}
			</div>
			<Footer />
			{/if}
	</div>
	{/if}
