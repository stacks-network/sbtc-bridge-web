<script lang="ts">
  import { goto } from "$app/navigation";
  import { sbtcConfig } from '$stores/stores';
  import type { SbtcConfig } from '$types/sbtc_config'
  import { Tooltip } from 'flowbite-svelte';
  import { a_primary } from '$lib/css_utils';
  import { Icon, InformationCircle } from "svelte-hero-icons"

  const start = (pegin:boolean) => {
  const conf:SbtcConfig = $sbtcConfig;
  conf.pegIn = pegin;
  sbtcConfig.set(conf);
  (pegin) ? goto('/deposit') : goto('/withdraw');
  }
</script>

<Tooltip class="w-80 !font-extralight !bg-black z-20" triggeredBy="#po-deposits">
  Deposit Bitcoin to mint sBTC. We never take custody of your funds. The Bitcoin is held in a wallet controlled by Stackers and deposits automatically manifest as sBTC.
</Tooltip>
<Tooltip class="w-80 !font-extralight !bg-black z-20" triggeredBy="#po-withdrawals">
  Permissionlessly withdraw your Bitcoin at any time. Withdrawals take at most 2 weeks to be processed via the current mining cycle.
</Tooltip>

<div class="mx-auto flex flex-col justify-center w-full sm:max-w-4xl px-6 lg:px-8">
  <div class="sm:grid sm:grid-cols-2 sm:gap-10 space-y-5 sm:space-y-0">
    <div>
      <div role="button" tabindex="0" class="w-full bg-primary-03 cursor-pointer p-10 md:p-20 rounded-2xl relative" on:keydown on:click={() => start(true)}>
        <div id="po-deposits" class="absolute right-2 top-2">
          <Icon src="{InformationCircle}" class="text-black w-6 h-6" mini aria-hidden="true" />
        </div>
        <div class="text-center">
          <h2 class="text-3xl md:text-5xl font-semibold text-black">Deposit</h2>
          <h3 class="text-xl md:text-2xl text-gray-1000 font-medium">Deposit BTC,<br/>mint sBTC</h3>
        </div>
      </div>
    </div>
    <div>
      <div role="button" tabindex="0" class="w-full bg-primary-01 cursor-pointer p-10 md:p-20 rounded-2xl relative" on:keydown on:click={() => start(false)}>
        <div id="po-withdrawals" class="absolute right-2 top-2">
          <Icon src="{InformationCircle}" class="text-black w-6 h-6" mini aria-hidden="true" />
        </div>
        <div class="text-center">
          <h2 class="text-3xl md:text-5xl font-semibold text-black">Withdraw</h2>
          <h3 class="text-xl md:text-2xl text-gray-1000 font-medium">Withdraw BTC,<br/>burn sBTC</h3>
        </div>
      </div>
    </div>
  </div>
</div>
