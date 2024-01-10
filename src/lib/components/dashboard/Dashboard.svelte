<script lang="ts">
  import { sbtcConfig } from '$stores/stores';
	import { loggedIn, loginStacksFromHeader } from '$lib/stacks_connect';
	import { CONFIG } from '$lib/config';
	import { fmtNumber, fmtSatoshiToBitcoin, satsToBitcoin } from 'sbtc-bridge-lib';

  $: connected = loggedIn()
  let showFiat = true

  $: currentBalance = () => {
    return fmtSatoshiToBitcoin($sbtcConfig.keySets[CONFIG.VITE_NETWORK].sBTCBalance || 0.00000000)
  }
  const tvl = (showFiat:boolean) => {
    if (showFiat) {
      const currency = $sbtcConfig.userSettings.currency.myFiatCurrency;
      const tvlSBTC = satsToBitcoin($sbtcConfig.sbtcContractData.totalSupply || 0)
      return currency.symbol + fmtNumber(currency.fifteen * tvlSBTC || 0) + ' ' + currency.currency
    } else {
      const tvlSBTC = satsToBitcoin($sbtcConfig.sbtcContractData.totalSupply || 0)
      return fmtNumber(tvlSBTC) + ' sBTC'
    }
  }

	const doLogin = async () => {
		const res = await loginStacksFromHeader(document)
    connected = loggedIn()
	}

</script>

<div class="flex flex-col sm:col-span-3 gap-y-4 order-2 lg:order-1">
  <div class="space-y-4">
    <div class="p-[1.2px] bg-[linear-gradient(126.12deg,rgba(237,105,60,0.5)11.8%,rgba(254,219,99,0.2)72.43%)] rounded-lg">
      <div
        class="relative flex items-center p-6 bg-[linear-gradient(126.12deg,rgba(0,0,0,0.95)21.1%,rgba(18,18,18,0.5)53.58%);] rounded-lg"
      >
        <dl class="min-w-0 flex-1" on:mouseenter={() => showFiat = false}  on:mouseleave={() => showFiat = true}>
          <dt class="text-xl font-bold leading-none text-yellow-500">Total value locked</dt>
          <dd class="mt-1 text-4xl font-bold leading-none text-transparent bg-clip-text bg-primary-02">
            {#if showFiat}{tvl(showFiat)}{:else}{tvl(showFiat)}{/if}
          </dd>
        </dl>
      </div>
    </div>
    <div
      class="relative flex items-center p-6 bg-white border-[0.5px] border-gray-500/50 rounded-lg"
    >
      <dl class="min-w-0 flex-1">
        <dt class="text-lg font-bold leading-6 text-gray-800">Your balance</dt>
        <dd class="text-4xl font-bold leading-none text-gray-900">
          {#if !connected}
            — <span class="text-xl">sBTC</span>
            <button on:keydown on:click={doLogin} class=" gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-gray-500 py-1 px-3 text-gray-200 hover:bg-gray-600 inline-block ml-2">Connect your wallet</button>
            <span class="block text-base font-normal text-gray-800">~$—</span>
          {:else}
            {currentBalance()} <span class="text-xl">sBTC</span>
          {/if}
        </dd>
      </dl>
    </div>
  </div>

  <div class="mt-6">
    <h2 class="text-3xl font-bold">Resources</h2>
    <div class="mt-4">
      <div class="space-y-4">
        <a class="flex items-center gap-x-4 p-6 bg-gray-100/5 backdrop-blur-md backdrop-blur border-[0.5px] border-gray-400/20 rounded-lg transition relative group" href="https://stacks-network.github.io/sbtc-docs/introduction.html" target="_blank">
          <div class="absolute bottom-[-12px] sm:bottom-[-14px] z-[-1] left-0 md:group-hover:animate-slideinout">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503 14" fill="none" class="w-[324px] h-[14px] md:w-[503px] md:h-[14px]">
              <mask id="doc-a" width="503" height="14" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                <path fill="#C4C4C4" d="M502.73 13.3333H.22998V-.00008106H502.73V13.3333Z"></path>
              </mask>
              <g filter="url(#doc-b)" mask="url(#doc-a)">
                <path fill="url(#doc-c)" d="M457.73 3.3335H45.23v-6.66667h412.5V3.3335Z"></path>
              </g>
              <defs>
                <linearGradient id="doc-c" x1="457.73" x2="45.23" y1="3.3335" y2="3.3335" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#ED693C" stop-opacity="0"></stop>
                  <stop offset=".323" stop-color="#ED693C"></stop>
                  <stop offset=".672" stop-color="#FEDB63" stop-opacity=".3"></stop>
                  <stop offset="1" stop-color="#FDC60B" stop-opacity="0"></stop>
                </linearGradient>
                <filter id="doc-b" width="414.5" height="8.66675" x="44.23" y="-4.33325" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur result="effect1_foregroundBlur_4879_4861" stdDeviation=".5"></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>
          <div>
            <div class="flex items-center gap-x-4">
              <h3 class="text-xl text-gray-100 leading-6">Documentation</h3>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-0.5 text-gray-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transform group-hover:text-primary-500 transition" viewBox="0 0 24 24" fill="none">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
              </svg>
            </div>
            <p class="mt-3 text-base text-gray-300">Unlock the Power of sBTC: Explore the comprehensive documentation and understand the functionality of the core product.</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 shrink-0 text-gray-100" viewBox="0 0 48 48" fill="none">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M24 14.5653c-2.5642-2.3001-5.8887-3.57-9.3333-3.5653-1.6365 0-3.2076.28-4.6667.7965v22.1666c1.499-.5288 3.0771-.7982 4.6667-.7964 3.5855 0 6.8569 1.3486 9.3333 3.5653m0-22.1667c2.5641-2.3002 5.8887-3.5702 9.3333-3.5653 1.6365 0 3.2076.28 4.6667.7965v22.1666c-1.499-.5288-3.0771-.7982-4.6667-.7964-3.4446-.0048-6.7691 1.2652-9.3333 3.5653m0-22.1667V36.732"></path>
          </svg>
        </a>
        <a class="flex items-center gap-x-4 p-6 bg-gray-100/5 backdrop-blur-md backdrop-blur border-[0.5px] border-gray-400/20 rounded-lg transition relative group" href="https://explorer.hiro.so/?chain=mainnet" target="_blank">
          <div class="absolute bottom-[-12px] sm:bottom-[-14px] z-[-1] left-0 md:group-hover:animate-slideinout">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503 14" fill="none" class="w-[324px] h-[14px] md:w-[503px] md:h-[14px]">
              <mask id="expl-b" width="503" height="14" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                <path fill="#C4C4C4" d="M502.73 13.333H.23V0h502.5v13.333Z"></path>
              </mask>
              <g filter="url(#expl-a)" mask="url(#expl-b)">
                <path fill="url(#expl-c)" d="M457.73 3.333H45.23v-6.666h412.5v6.667Z"></path>
              </g>
              <defs>
                <linearGradient id="expl-c" x1="457.73" x2="45.23" y1="3.333" y2="3.333" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6287DD" stop-opacity="0"></stop>
                  <stop offset=".323" stop-color="#6287DD"></stop>
                  <stop offset=".672" stop-color="#E7485C" stop-opacity=".3"></stop>
                  <stop offset="1" stop-color="#E7485C" stop-opacity="0"></stop>
                </linearGradient>
                <filter id="expl-a" width="414.5" height="8.667" x="44.23" y="-4.333" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur result="effect1_foregroundBlur_4879_4889" stdDeviation=".5"></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>
          <div>
            <div class="flex items-center gap-x-4">
              <h3 class="text-xl text-gray-100 leading-6">Stacks Explorer</h3>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-0.5 text-gray-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transform group-hover:text-primary-500 transition" viewBox="0 0 24 24" fill="none">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
              </svg>
            </div>
            <p class="mt-3 text-base text-gray-300">Explorer transactions, contracts and accounts on the Stacks blockchain using the Stacks Explorer by Hiro.</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" class="w-12 h-12 shrink-0 text-gray-100">
            <path fill="currentColor" d="m15.33 11.197 6.596 10.25-6.596-10.25Zm6.596 10.25H10.339h11.587Zm0 0h4.278-4.278Z"></path>
            <path stroke="currentColor" stroke-linejoin="bevel" stroke-width="1.909" d="m15.33 11.197 6.596 10.25m0 0H10.339m11.587 0h4.278m6.594-10.25-6.595 10.25H37.79"></path>
            <path fill="currentColor" d="m15.33 37.288 6.596-10.25-6.596 10.25Zm6.596-10.25H10.339h11.587Zm0 0h4.278-4.278Z"></path>
            <path stroke="currentColor" stroke-linejoin="bevel" stroke-width="1.909" d="m15.33 37.288 6.596-10.25m0 0H10.339m11.587 0h4.278m6.594 10.25-6.595-10.25H37.79"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>

</div>
