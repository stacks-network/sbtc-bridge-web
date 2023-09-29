<script lang="ts">
	import '../app.postcss';
	import "../sbtc.css";
	import Header from "$lib/header/Header.svelte";
	import Footer from "$lib/header/Footer.svelte";
	import { initApplication, isLegal, loggedIn, authenticate, loginStacksFromHeader } from "$lib/stacks_connect";
	import { setConfig } from '$lib/config';
	import { afterNavigate, beforeNavigate, goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { onMount, onDestroy } from 'svelte';
	import { sbtcConfig } from '$stores/stores'
	import type { SbtcConfig } from '$types/sbtc_config'
	import { defaultSbtcConfig } from '$lib/sbtc';
	import { COMMS_ERROR } from '$lib/utils.js'
	import { setAuthorisation } from '$lib/bridge_api';

	let componentKey = 0;
	console.log('process.env: ', import.meta.env);
	setConfig($page.url.search);
	const search = $page.url.search;
	if (!isLegal(location.href)) {
		//componentKey++;
		goto('/' + '?net=testnet')
	}
	beforeNavigate((nav) => {
		if (!isLegal(nav.to?.route.id || '')) {
			nav.cancel();
			login()
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
	const unsubscribe = sbtcConfig.subscribe((conf) => {});
	onDestroy(unsubscribe);
	let inited = false;
	let errorReason:string|undefined;

	const login = async () => {
		const res = await loginStacksFromHeader(document)
	}

	const loginEvent = () => {
		componentKey++;
	}

	const initApp = async () => {
		await initApplication(($sbtcConfig) ? $sbtcConfig : defaultSbtcConfig as SbtcConfig, undefined);
	}

	onMount(async () => {
		try {
			//openWebSocket()
			await initApp();
			if (loggedIn() && !$sbtcConfig.authHeader) {
				await authenticate($sbtcConfig)
			}
			setAuthorisation($sbtcConfig.authHeader)

		} catch (err) {
			errorReason = COMMS_ERROR
			console.log(err)
		}
		inited = true;
	})
</script>

{#if inited}
	<div class="bg-gray-1000 bg-[url('$lib/assets/bg-lines.svg')] bg-cover text-white font-extralight min-h-screen">
		{#key componentKey}
		<div>
			<Header on:init_application={initApp} on:login_event={loginEvent} />
		</div>
		<div class="flex min-h-[calc(100vh-160px)] mx-auto align-middle justify-center flex-grow">
			<slot></slot>
		</div>
		{/key}
		<Footer />
	</div>
{/if}
