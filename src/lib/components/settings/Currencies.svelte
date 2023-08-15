<script lang="ts">
	import { onMount } from 'svelte';
	import { sbtcConfig } from '$stores/stores';
	import type { SbtcConfig } from '$types/sbtc_config';
  import type { ExchangeRate } from 'sbtc-bridge-lib';
  import { compareCurrencies } from '$lib/utils'
	import { CheckCircle, ChevronDown, Icon } from "svelte-hero-icons"
  import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';

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
        currencies.push({ value: rate.currency, name: rate.name})
      }
      currencies.sort(compareCurrencies);
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
  <h2 class="text-2xl font-normal mb-2">Currency and units</h2>
  <div class="mb-4">
    <h3 class="text-base text-white font-normal mb-3">
      Currencies
    </h3>
    <div class="md:w-1/2 sm:w-full font-normal">
      <Button class="!bg-black !border-[0.5px] !border-gray-700">
        {myCurrency.name} ({myCurrency.currency} - {myCurrency.symbol})
        <Icon src={ChevronDown} mini class=" ml-10 h-5 w-5 text-white" aria-hidden="true" />
      </Button>
      <Dropdown
        class="bg-black max-h-[400px] overflow-y-auto !border-[0.5px] !border-gray-700 z-20"
        placement="bottom-start"
      >
        <div class="bg-black p-0 border-0 border-b-[0.5px] border-gray-700">
          <div class="bg-white/[0.03]">
            <span class="block text-sm px-3 py-2 text-gray-400">Popular currencies</span>
            <div>
              <div on:keydown on:click={() => setCurrency('USD')} class="text-white px-3 py-3 text-sm hover:bg-gray-1000 cursor-pointer">
                <p>{getCurrency('USD').name}</p>
                <p>{getCurrency('USD').currency + ' - ' + getCurrency('USD').symbol}</p>
              </div>
              <div on:keydown on:click={() => setCurrency('EUR')} class="text-white px-3 py-3 text-sm hover:bg-gray-1000 cursor-pointer">
                <p>{getCurrency('EUR').name}</p>
                <p>{getCurrency('EUR').currency + ' - ' + getCurrency('EUR').symbol}</p>
              </div>
              <div on:keydown on:click={() => setCurrency('CNY')} class="text-white px-3 py-3 text-sm hover:bg-gray-1000 cursor-pointer">
                <p>{getCurrency('CNY').name}</p>
                <p>{getCurrency('CNY').currency + ' - ' + getCurrency('CNY').symbol}</p>
              </div>
            </div>
          </div>
        </div>
        {#each currencies as currency}
          <DropdownItem on:change={(e) => changeCurrency(e) } bind:value={selected} defaultClass="px-3 py-3 text-sm hover:bg-gray-1000">
            <span class="flex items-center justify-between" on:keydown on:click={() => setCurrency(currency.value)}>
              <span class="block">
                <span class="block">{currency.name}</span>
                <span class="block">{currency.value}</span>
              </span>
              <Icon src="{CheckCircle}" class="ml-10 text-success-500 w-6 h-6" aria-hidden="true" />
            </span>
          </DropdownItem>
        {/each}
      </Dropdown>
    </div>
  </div>

  <div>
    <h3 class="text-base text-white font-normal mb-3">
      Bitcoin units
    </h3>
    <div class="w-full flex gap-x-4 font-normal ">
      <div on:keydown on:click={() => setDenomination('bitcoin')} class={`cursor-pointer text-white px-3 py-2 font-normal w-1/3 flex border rounded-lg relative ${getDenomination() === 'bitcoin' ? 'border-success-400' : 'border-gray-900'}`}>
        <div class="text-white font-normal flex gap-3">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="currentColor" class={getDenomination() === 'bitcoin' ? 'text-success-300' : 'text-gray-200'}/>
            <path d="M16.5433 11.09C16.7433 9.76 15.7283 9.045 14.3433 8.56667L14.7933 6.765L13.695 6.49167L13.2567 8.24667C12.9683 8.175 12.6733 8.10667 12.3783 8.04L12.8183 6.27333L11.7217 6L11.2733 7.8L9.06 7.25333L8.76833 8.425C8.76833 8.425 9.58167 8.61167 9.565 8.62333C10.01 8.735 10.09 9.02833 10.0767 9.26167L8.845 14.1983C8.79 14.3317 8.65333 14.535 8.34167 14.4583C8.35333 14.475 7.545 14.2583 7.545 14.2583L7 15.515L9.21 16.0733L8.755 17.8967L9.85167 18.17L10.3017 16.3667C10.6017 16.4483 10.8917 16.5233 11.1767 16.5933L10.7267 18.3883L11.825 18.6617L12.28 16.8417C14.15 17.1983 15.5583 17.055 16.15 15.365C16.6267 14.0033 16.1267 13.2167 15.1417 12.705C15.8583 12.5383 16.3983 12.0667 16.5417 11.0933H16.5433V11.09ZM14.035 14.6067C13.695 15.9683 11.4017 15.2317 10.6583 15.0467L11.26 12.6317C12.0033 12.8167 14.3883 13.185 14.035 14.6067ZM14.375 11.0717C14.0667 12.3117 12.1567 11.6817 11.5367 11.5267L12.0817 9.335C12.7017 9.49 14.6983 9.77833 14.375 11.0717Z" fill="black"/>
          </svg>
          <div class="flex-grow">
            <p>Bitcoin</p>
            <p>BTC</p>
          </div>
        </div>
        {#if getDenomination() === 'bitcoin'}
          <Icon src="{CheckCircle}" class="absolute -top-3 bg-gray-1000 -right-3 text-success-500 w-6 h-6" aria-hidden="true" />
        {/if}
      </div>

      <div on:keydown on:click={() => setDenomination('satoshi')} class={`cursor-pointer text-white px-3 py-2 font-normal w-1/3 flex border rounded-lg relative ${getDenomination() === 'satoshi' ? 'border-success-400' : 'border-gray-900'}`}>
        <div class="text-white font-normal flex gap-3">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="currentColor" class={getDenomination() === 'satoshi' ? 'text-success-300' : 'text-gray-200'}/>
            <path d="M16.5433 11.09C16.7433 9.76 15.7283 9.045 14.3433 8.56667L14.7933 6.765L13.695 6.49167L13.2567 8.24667C12.9683 8.175 12.6733 8.10667 12.3783 8.04L12.8183 6.27333L11.7217 6L11.2733 7.8L9.06 7.25333L8.76833 8.425C8.76833 8.425 9.58167 8.61167 9.565 8.62333C10.01 8.735 10.09 9.02833 10.0767 9.26167L8.845 14.1983C8.79 14.3317 8.65333 14.535 8.34167 14.4583C8.35333 14.475 7.545 14.2583 7.545 14.2583L7 15.515L9.21 16.0733L8.755 17.8967L9.85167 18.17L10.3017 16.3667C10.6017 16.4483 10.8917 16.5233 11.1767 16.5933L10.7267 18.3883L11.825 18.6617L12.28 16.8417C14.15 17.1983 15.5583 17.055 16.15 15.365C16.6267 14.0033 16.1267 13.2167 15.1417 12.705C15.8583 12.5383 16.3983 12.0667 16.5417 11.0933H16.5433V11.09ZM14.035 14.6067C13.695 15.9683 11.4017 15.2317 10.6583 15.0467L11.26 12.6317C12.0033 12.8167 14.3883 13.185 14.035 14.6067ZM14.375 11.0717C14.0667 12.3117 12.1567 11.6817 11.5367 11.5267L12.0817 9.335C12.7017 9.49 14.6983 9.77833 14.375 11.0717Z" fill="black"/>
          </svg>
          <div class="flex-grow">
            <p>Satoshi</p>
            <p>SATS</p>
          </div>
        </div>
        {#if getDenomination() === 'satoshi'}
          <Icon src="{CheckCircle}" class="absolute -top-3 bg-gray-1000 -right-3 text-success-500 w-6 h-6" aria-hidden="true" />
        {/if}
      </div>
    </div>
  </div>
{:else if error}
  <div class="text-2xl font-normal">{error}</div>
{/if}