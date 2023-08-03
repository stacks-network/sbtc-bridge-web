<script lang="ts">
	import { onMount } from 'svelte';
	import { sbtcConfig } from '$stores/stores';
	import type { SbtcConfig } from '$types/sbtc_config';
  import { Select, Label } from 'flowbite-svelte';
  import type { ExchangeRate } from 'sbtc-bridge-lib';
  import { fmtNumber } from '$lib/utils'
	import { CheckCircle, Icon } from "svelte-hero-icons"
	import BtcGray from '$lib/assets/btc_gray.png'
	import BtcGreen from '$lib/assets/btc_green.png'

  let myCurrency:ExchangeRate;
  let selected:string|undefined;
  let error:string|undefined;
  let inited = false;
  let currencies:Array<{value:string; name:string;}> = [
    {value:"USD", name: "USD"},
  ]

  const changeCurrency = (evt:any) => {
    if (!selected) return;
    setCurrency(selected);
	}

  const setCurrency = (currency:string) => {
    if (!$sbtcConfig.exchangeRates) return;
    const rateNow = $sbtcConfig.exchangeRates.find((o:any) => o.currency === currency)
    if (!rateNow) return;
		const conf:SbtcConfig = $sbtcConfig;
    conf.userSettings.currency.myFiatCurrency = myCurrency = rateNow
		sbtcConfig.update(() => conf);
	}

  $: getBorder = (caller:string) => {
    let baseClasses = 'cursor-pointer text-white bg-gray-1000 px-5 py-2 font-normal w-1/2 flex border rounded-lg '
    if (caller === 'bitcoin') {
      if ($sbtcConfig.userSettings.currency.denomination === 'bitcoin') {
        return baseClasses + 'border-success-700'
      } else {
        return baseClasses + 'border-gray-700'
      }
    } else {
      if ($sbtcConfig.userSettings.currency.denomination === 'satoshi') {
        return baseClasses + 'border-success-700'
      } else {
        return baseClasses + 'border-gray-700'
      }
    }
  }

  const setDefaultCurrency = (defC:ExchangeRate) => {
		const conf:SbtcConfig = $sbtcConfig;
    conf.userSettings.currency.myFiatCurrency = defC
		sbtcConfig.update(() => conf);
	}

  $: getDenomination = () => {
		return $sbtcConfig.userSettings.currency.denomination;
	}

  const setDenomination = (denomination:string) => {
		const conf:SbtcConfig = $sbtcConfig;
    conf.userSettings.currency.denomination = denomination;
		sbtcConfig.update(() => conf);
  }

  const getCurrency = (currency:string) => {
    return $sbtcConfig.exchangeRates?.find((o:any) => o.currency === currency) || $sbtcConfig.userSettings.currency.myFiatCurrency
  }

  onMount(async () => {
    if ($sbtcConfig.exchangeRates) {
      const exchangeRates = $sbtcConfig.exchangeRates!;
      currencies = []
      for (var rate of exchangeRates) {
        currencies.push({ value: rate.currency, name: rate.name + ' ' + rate.currency})
      }
      const currency = $sbtcConfig.userSettings.currency.myFiatCurrency.currency;
      const rateNow = exchangeRates.find((o:any) => o.currency === currency)
      if (rateNow) setDefaultCurrency(rateNow)
      else setDefaultCurrency(exchangeRates.find((o:any) => o.currency === 'USD') || {} as ExchangeRate)
      myCurrency = $sbtcConfig.userSettings.currency.myFiatCurrency
      inited = true;
    } else {
      error = 'Exchange rates are not available'
    }
  })
</script>

{#if inited}
<div class="text-2xl font-normal">Currency and units</div>
<div class="py-2  gap-0">
  <h2 class="text-base text-white font-normal mb-0">
    Currencies 
  </h2>
  <div class="md:w-1/2 sm:w-full  font-normal">
    <Label class="text-black font-normal">
      <Select on:change={(e) => changeCurrency(e) } bind:value={selected} class="mt-2 text-white bg-black p-5 border  border-gray-700 rounded-lg" items={currencies} placeholder={'Select your currency'} />
    </Label>
  </div>
  <div class="md:w-1/2 sm:w-full  bg-black my-5 font-normal border-[0.5px] border-gray-700 rounded-lg">
    <div class="text-white font-normal">
      <h1 class="text-gray-700 m-2 p-2">Popular currencies</h1>
      <div class="text-white bg-gray-1000 px-5 py-2 font-normal my-5 flex">
        <div class="flex-grow">
          <p>{myCurrency.name}</p>
          <p>{myCurrency.symbol + ' ' + fmtNumber(myCurrency.fifteen) + ' ' + myCurrency.currency}</p>
        </div>
        <div class="">
          <Icon src="{CheckCircle}" class="bg-transparent text-success-500 border-none border-success-500 rounded-full w-6 h-6" mini aria-hidden="true" />
        </div>
      </div>
      {#if myCurrency.currency !== 'EUR'}
      <div on:keydown on:click={() => setCurrency('EUR')} class="text-white font-normal my-5  px-5 py-2 cursor-pointer">
        <p>{getCurrency('EUR').name}</p>
        <p>{getCurrency('EUR').symbol + ' ' + fmtNumber(getCurrency('EUR').fifteen) + ' ' + getCurrency('EUR').currency}</p>
      </div>
      {/if}
      {#if myCurrency.currency !== 'USD'}
      <div on:keydown on:click={() => setCurrency('USD')} class="text-white font-normal my-5  px-5 py-2 cursor-pointer">
        <p>{getCurrency('USD').name}</p>
        <p>{getCurrency('USD').symbol + ' ' + fmtNumber(getCurrency('USD').fifteen) + ' ' + getCurrency('USD').currency}</p>
      </div>
      {/if}
      {#if myCurrency.currency !== 'CNY'}
      <div on:keydown on:click={() => setCurrency('CNY')} class="text-white font-normal my-5  px-5 py-2 cursor-pointer">
        <p>{getCurrency('CNY').name}</p>
        <p>{getCurrency('CNY').symbol + ' ' + fmtNumber(getCurrency('CNY').fifteen) + ' ' + getCurrency('CNY').currency}</p>
      </div>
      {/if}
    </div>
  </div>

  <h2 class="text-base text-white font-normal mb-3">
    Bitcoin units 
  </h2>
  <div class="w-full flex gap-x-4 font-normal ">
    <div on:keydown on:click={() => setDenomination('bitcoin')} class={getBorder('bitcoin')}>
      <div class="text-white bg-gray-1000 px-5 py-2 font-normal flex">
        <div class="">
          {#if getDenomination() === 'bitcoin'}
          <img src={BtcGreen} alt="satoshi units selected" />
          {:else}
          <img src={BtcGray} alt="bitcoin units selected" />
          {/if}
        </div>
      </div>
      <div class="flex-grow">
        <p>Bitcoin</p>
        <p>BTC</p>
      </div>
      {#if getDenomination() === 'bitcoin'}
      <div class="" >
        <Icon src="{CheckCircle}" class="bg-transparent text-success-500 border-none border-success-500 rounded-full w-6 h-6" mini aria-hidden="true" />
      </div>
      {/if}
    </div>
    <div on:keydown on:click={() => setDenomination('satoshi')} class={getBorder('satoshi')}>
      <div class="text-white bg-gray-1000 px-5 py-2 font-normal flex">
        <div class="">
          {#if getDenomination() === 'bitcoin'}
          <img src={BtcGray} alt="bitcoin units selected" />
          {:else}
          <img src={BtcGreen} alt="satoshi units selected" />
          {/if}
        </div>
      </div>
      <div class="flex-grow">
        <p>Satoshi</p>
        <p>SATS</p>
      </div>
      {#if getDenomination() === 'satoshi'}
      <div class="">
        <Icon src="{CheckCircle}" class="bg-transparent text-success-500 border-none border-success-500 rounded-full w-6 h-6" mini aria-hidden="true" />
      </div>
      {/if}
    </div>
</div>

</div>
{:else if error}
  <div class="text-2xl font-normal">{error}</div>
{/if}