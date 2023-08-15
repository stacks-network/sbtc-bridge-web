<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { onMount } from 'svelte';
  import { Icon, InformationCircle } from "svelte-hero-icons";
  import { Tooltip } from 'flowbite-svelte';
  import LogoBitcoin from '$lib/components/shared/LogoBitcoin.svelte';
  import { sbtcConfig } from '$stores/stores'
  import { bitcoinToSats, satsToBitcoin } from '$lib/utils'
	import type { SbtcConfig } from '$types/sbtc_config';
  import type { ExchangeRate } from 'sbtc-bridge-lib';
  import { fmtNumber } from '$lib/utils'

  const dispatch = createEventDispatcher();

  export let inputData:{
    field: string;
    label: string;
    hint: string;
    valueBtc: number;
    valueSat: number;
    resetValue: number|undefined;
  }

  let value:number = inputData.valueSat;
  let reason:string|undefined;

  const reset = () => {
    value = inputData.resetValue || 0;
  }

  const updater = (e:any) => {
    try {
      reason = undefined
      const vstr = value.toString()
      if (vstr.endsWith('.') || vstr.length < 3) return
      if (denomination === 'bitcoin') {
        if (value > 100) { 
          value = 100.0
          reason = 'Deposits and withdrawals are currently capped at 100 BTC'
          return
        }
        const decimals = vstr.split('.')[1]
        const places = decimals.length
        if (places > 8) {
          value = satsToBitcoin(bitcoinToSats(value))
          return
        }
        inputData.valueSat = bitcoinToSats(value)
        inputData.valueBtc = value;
      } else {
        if (satsToBitcoin(value) > 100) {
          value = satsToBitcoin(value)
          reason = 'Deposits and withdrawals are currently capped at 100 BTC'
          return
        }
        if (vstr.indexOf('.') > -1) {
          value = Math.trunc(value)
        }

        inputData.valueBtc = satsToBitcoin(value)
        inputData.valueSat = value;
      }
      //dispatch('updated', inputData);
    } catch(err:any) {
      if (value) console.log(err.message + ' Error - is the address a valid');
    }
    document.getElementById(inputData.field + '-btcamount')?.focus();
  }

  const setDenomination = (denomination:string) => {
		const conf:SbtcConfig = $sbtcConfig;
    conf.userSettings.currency.denomination = denomination;
		sbtcConfig.update(() => conf);
    setDisplayValue()
  }

  const setDisplayValue = () => {
    denomination = $sbtcConfig.userSettings.currency.denomination;
    value = inputData.valueSat;
    if (!inputData.label) inputData.label = 'Amount (satoshis)'
    if (denomination === 'bitcoin') {
      inputData.valueBtc = satsToBitcoin(inputData.valueSat)
      inputData.label = 'Amount (bitcoin)'
      value = inputData.valueBtc;
    }
  }

  let denomination = 'satoshi';
  let currency:ExchangeRate;
  onMount(async () => {
    setDisplayValue()
    currency = $sbtcConfig.userSettings.currency.myFiatCurrency;
    reason = undefined;
  })
</script>

<div>
  <div class="flex items-center justify-between">
    <label class="inline-flex text-base font-medium mb-1.5" for="">
      {inputData.label}
      {#if inputData.hint}
      <Icon src="{InformationCircle}" mini class="ml-2 shrink-0 h-5 w-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50" aria-hidden="true" id="{inputData.field}-label" />
      {/if}
    </label>

    {#if reason || inputData.resetValue}
      <button class="px-3 py-1.5 text-primary-500 text-sm font-medium hover:underline focus:text-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50" type="button" on:click={() => reset()}>
        Reset
      </button>
    {/if}

    <Tooltip class="w-auto !font-extralight !bg-black z-20" triggeredBy="#{inputData.field}-label">
      {#if inputData.hint}
        {inputData.hint}
      {:else}
        Please enter.
      {/if}
    </Tooltip>
  </div>

  <div class="relative mb-2">
    <input
      id={inputData.field + '-btcamount'}
      type="number"
      name=""
      on:keyup={(e) => updater(e)}
      bind:value={value}
      class="text-black font-extralight text-base rounded-md pl-4 pr-20 py-3 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50"
    />
    <div class="flex items-center gap-2 absolute right-4 top-1/2 -translate-y-1/2">
      <LogoBitcoin clazz={'w-6 h-6 shrink-0'}/>
      <span class="text-sm font-bold text-black">
        {#if denomination === 'satoshi'}
        <a href="/" on:click|preventDefault={() => setDenomination('bitcoin')}>SATS</a>
        {:else}
        <a href="/" on:click|preventDefault={() => setDenomination('satoshi')}>BTC</a>
        {/if}</span>
    </div>
  </div>
  {#if currency}
  <div class="text-lg mt-1 text-left flex items-center justify-between">
    <p>{#if inputData.valueSat && inputData.valueSat > 0}{currency.symbol + ' ' + fmtNumber(currency.fifteen * inputData.valueBtc) + ' ' + currency.currency}{/if}</p>
  </div>
  {/if}

  <div class="text-xs mt-1 text-left flex items-center justify-between">
    {#if reason}
      <p class="text-error-500">
        {reason}
      </p>
    {/if}
  </div>
</div>
