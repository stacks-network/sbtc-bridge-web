<script lang="ts">
import { goto } from "$app/navigation";
import { sbtcConfig } from '$stores/stores';
import type { SbtcConfig } from '$types/sbtc_config'
import { Popover } from 'flowbite-svelte';
import IntroFill from '$lib/components/shared/IntroFill.svelte'
import { a_primary } from '$lib/css_utils';

const start = (pegin:boolean) => {
	const conf:SbtcConfig = $sbtcConfig;
	conf.pegIn = pegin;
	sbtcConfig.set(conf);
	(pegin) ? goto('/deposit') : goto('/withdraw');
}

</script>
<Popover class="w-64 text-sm font-light " title="Deposits" triggeredBy="#po-deposits">
    Deposit bitcoin to mint sBTC. We never take custody of your funds - the Bitcoin is held is a wallet controlled by Stackers and deposits automatically manifest as sBTC - <a href="https://github.com/stacksgov/sips/pull/113" target="_blank" class={a_primary}>learn more</a>.
</Popover>
<Popover class="w-64 text-sm font-light " title="Withdrawals" triggeredBy="#po-withdrawals">
    Permissionlessly withdraw your Bitcoin at any time - withdrawals take at most 2 weeks to be processed via the current mining cycle - <a href="https://stacks.org/" target="_blank" class={a_primary}>learn more</a>.
</Popover>
  
<div class="mx-auto h-[calc(100vh-280px)] flex flex-col justify-center">
    <div class="mx-auto max-w-2xl">
        <div class="text-black-01 flex flex-col md:flex-row gap-10 ">
            <div class="background-chev-up bg-blue-500 w-96 h-80 cursor-pointer flex rounded-2xl flex-col align-middle" on:keydown on:click={() => start(true)}>
                <div id="po-deposits" class="p-2 self-end grow  text-black"><IntroFill class={'bg-black border-2 border-black rounded-full w-6 h-6'}/></div>
                <div class="self-center text-center grow">
                    <div class="text-5xl font-semibold text-black">Deposit</div>
                    <div class="text-2xl text-gray-1000 font-medium">Deposit BTC<br/>mints sBTC</div>
                </div>
                <div class="p-2 self-end grow">&nbsp;</div>
            </div>
            <div class="background-chev-down bg-warning-500 text-black-900 w-96 h-80 cursor-pointer flex rounded-2xl flex-col align-middle" on:keydown on:click={() => start(false)}>
                <div id="po-withdrawals" class="p-2 self-end grow  text-black"><IntroFill  class={'bg-black border-2 border-black rounded-full w-6 h-6'}/></div>
                <div class="self-center text-center grow">
                    <div class="text-5xl font-semibold text-black">Withdraw</div>
                    <div class="text-2xl text-gray-1000 font-medium">Withdraw BTC<br/>burns sBTC</div>
                </div>
                <div class="p-2 self-end grow">&nbsp;</div>
            </div>
        </div>
    </div>
</div>
