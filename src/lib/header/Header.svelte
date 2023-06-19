<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte'
	import { createEventDispatcher } from "svelte";
	import Brand from './Brand.svelte'
	import { sbtcConfig } from '$stores/stores';
	import type { SbtcConfig } from '$types/sbtc_config';
	import { goto } from "$app/navigation";
	import { loginStacksJs } from '$lib/stacks_connect'
	import { logUserOut, addresses } from '$lib/stacks_connect'
	import { isCoordinator } from '$lib/sbtc_admin.js'
	import AccountDropdown from './AccountDropdown.svelte'
	import SettingsDropdown from './SettingsDropdown.svelte';

	const coordinator = isCoordinator(addresses().stxAddress)
	const dispatch = createEventDispatcher();

	const doLogin = async () => {
		const res = await loginStacksJs(doLoginAfter);
		console.log(res)
	}
	const doLogout = () => {
		logUserOut();
		sbtcConfig.update((conf:SbtcConfig) => {
			conf.loggedIn = false;
			conf.addressObject = undefined;
			conf.pegInTransaction = undefined;
			conf.pegOutTransaction = undefined;
			return conf;
		});
		goto('/')
	}

	const getNavActiveClass = (item:string) => {
		if (location.href.indexOf(item) > -1) return ' font-normal text-base text-warning-400 !px-4 !py-2 rounded-lg hover:bg-white/[8%] focus:bg-white/[16%]'
		return 'font-normal text-base text-white !px-4 !py-2 rounded-lg hover:bg-white/[8%] focus:bg-white/[16%]'
	}

	const doLoginAfter = async (result:boolean) => {
		if (result) dispatch('init_application', { from: 'header' });
	}
</script>

<Navbar
	class="mx-auto flex max-w-7xl items-center !px-6 lg:px-8 !bg-transparent"
	navDivClass="flex flex-nowrap justify-between md:justify-start items-center flex-1" let:hidden let:toggle fluid={true}>
  <NavBrand href="/">
	<Brand />
  </NavBrand>

	<div class="flex justify-between w-full md:w-auto mt-4 md:mt-0 md:order-2 gap-4">
		<div class="flex gap-2 md:gap-2">
			<SettingsDropdown />
			{#if $sbtcConfig.loggedIn}
				<AccountDropdown on:init_logout={() => doLogout()}/>
			{:else}
				<button class="inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50" on:keydown on:click={doLogin}>
					Connect wallet
					<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<mask id="mask0_3780_6397" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
						<rect y="0.5" width="20" height="20" fill="#D9D9D9"/>
						</mask>
						<g mask="url(#mask0_3780_6397)">
						<path d="M17.5 10.5C17.5 10.0027 17.3025 9.52581 16.9508 9.17417C16.5992 8.82254 16.1223 8.625 15.625 8.625H12.5C12.5 9.28804 12.2366 9.92393 11.7678 10.3928C11.2989 10.8616 10.663 11.125 10 11.125C9.33696 11.125 8.70107 10.8616 8.23223 10.3928C7.76339 9.92393 7.5 9.28804 7.5 8.625H4.375C3.87772 8.625 3.40081 8.82254 3.04917 9.17417C2.69754 9.52581 2.5 10.0027 2.5 10.5M17.5 10.5V15.5C17.5 15.9973 17.3025 16.4742 16.9508 16.8258C16.5992 17.1775 16.1223 17.375 15.625 17.375H4.375C3.87772 17.375 3.40081 17.1775 3.04917 16.8258C2.69754 16.4742 2.5 15.9973 2.5 15.5V10.5M17.5 10.5V8M2.5 10.5V8M17.5 8C17.5 7.50272 17.3025 7.02581 16.9508 6.67417C16.5992 6.32254 16.1223 6.125 15.625 6.125H4.375C3.87772 6.125 3.40081 6.32254 3.04917 6.67417C2.69754 7.02581 2.5 7.50272 2.5 8M17.5 8V5.5C17.5 5.00272 17.3025 4.52581 16.9508 4.17417C16.5992 3.82254 16.1223 3.625 15.625 3.625H4.375C3.87772 3.625 3.40081 3.82254 3.04917 4.17417C2.69754 4.52581 2.5 5.00272 2.5 5.5V8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</g>
					</svg>
				</button>
			{/if}
		</div>
    <NavHamburger class="text-white hover:bg-gray-1000" on:click={toggle} />
  </div>


	<NavUl
		{hidden}
		class="order-1 md:flex-1"
		ulClass="dark:bg-black dark:md:bg-transparent md:border-0 border border-black flex flex-col p-4 mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium !md:space-x-4"
	>
    <NavLi nonActiveClass={getNavActiveClass('/deposit')} href="/deposit">Deposit</NavLi>
    <NavLi nonActiveClass={getNavActiveClass('/withdraw')} href="/withdraw">Withdraw</NavLi>
    <NavLi nonActiveClass={getNavActiveClass('/transactions')} href="/transactions">History</NavLi>
    <NavLi nonActiveClass={getNavActiveClass('/faq')} href="/faq">FAQ</NavLi>
		{#if coordinator}
			<NavLi nonActiveClass={getNavActiveClass('/admin')} href="/admin">Admin</NavLi>
		{/if}
  </NavUl>
</Navbar>
