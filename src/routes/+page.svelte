<script lang="ts">
	import SwitchGraphic from '$lib/components/deposit/SwitchGraphic.svelte';
  import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<svelte:head>
  <title>sBTC Bridge - Dashboard</title>
  <meta name="description" content="The sBTC Bridge
  provides a non-custodial, permissionless way to move Bitcoin into and out of the Stacks Blockchain." />
</svelte:head>

<div class="mx-auto max-w-7xl px-6 py-6">
  <div class="my-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-6">
      <div class="flex flex-col sm:col-span-3 gap-y-4">
        <div class="space-y-4">
          <div class="p-[1.2px] bg-[linear-gradient(126.12deg,rgba(237,105,60,0.5)11.8%,rgba(254,219,99,0.2)72.43%)] rounded-lg">
            <div
              class="relative flex items-center p-6 bg-[linear-gradient(126.12deg,rgba(0,0,0,0.95)21.1%,rgba(18,18,18,0.5)53.58%);] rounded-lg"
            >
              <dl class="min-w-0 flex-1">
                <dt class="text-xl font-bold leading-6 leading-none text-yellow-500">Total value locked</dt>
                <dd class="mt-1 text-4xl font-bold leading-none text-transparent bg-clip-text bg-primary-02">$99,728,707</dd>
              </dl>
            </div>
          </div>
          <div
            class="relative flex items-center p-6 bg-white border-[0.5px] border-gray-500/50 rounded-lg"
          >
            <dl class="min-w-0 flex-1">
              <dt class="text-lg font-bold leading-6 text-gray-800">Your balance</dt>
              <dd class="text-4xl font-bold leading-none text-gray-900">
                — <span class="text-xl">sBTC</span>
                <button class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-gray-500 py-1 px-3 text-gray-200 hover:bg-gray-600 inline-block ml-2">Connect your wallet</button>
                <span class="block text-base font-normal text-gray-800">~$—</span>
              </dd>
            </dl>
          </div>
        </div>

        <div class="mt-auto">
          <h2 class="text-3xl font-bold">Resources</h2>
          <div class="mt-4">
            <div class="space-y-4">
              <a class="flex items-center gap-x-4 p-6 bg-gray-100/5 backdrop-blur-md backdrop-blur border-[0.5px] border-gray-400/20 rounded-lg transition relative group" href="#">
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
              <a class="flex items-center gap-x-4 p-6 bg-gray-100/5 backdrop-blur-md backdrop-blur border-[0.5px] border-gray-400/20 rounded-lg transition relative group" href="https://explorer.hiro.so/?chain=mainnet">
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
                    <h3 class="text-xl text-gray-100 leading-6">Hiro Explorer</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-0.5 text-gray-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transform group-hover:text-primary-500 transition" viewBox="0 0 24 24" fill="none">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                    </svg>
                  </div>
                  <p class="mt-3 text-base text-gray-300">Uncover the world of transactions and accounts on the Stacks blockchain using our intuitive Hiro Explorer.</p>
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
      <div class="sm:col-span-3">
        <div class="flex flex-col w-full border-[0.5px] border-gray-700 rounded-3xl p-6 overflow-hidden bg-gray-1000">

          <Tabs style="underline" contentClass="p-0">
            <TabItem open title="Deposit" class="grow [&>button]:w-full [&>button]:text-lg">
              <div class="flex w-full items-center justify-between flex-wrap my-6">
                <h2 class="text-2xl font-medium">
                  Deposit BTC, mint sBTC
                </h2>
                <SwitchGraphic reverse={true}/>
              </div>
              <div class="bg-white/5 rounded-md p-4 border border-gray-900">
                <div class="flex bg-gray-1000 w-full border-[0.5px] border-gray-700 rounded-sm items-center text-base">
                  <div class="flex w-1/3 ps-6 items-center h-12">
                    <div class="flex grow items-center">
                        <div class="rounded-full w-2 h-2 bg-primary-01"></div>
                      <div class="ps-3 text-white">Amount</div>
                    </div>
                    <div>
                      <svg width="21" height="48" viewBox="0 0 21 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.666504 -1.6001L20.6665 31.9999L0.666504 65.5999" stroke="#616161" stroke-width="1" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div class="flex w-1/3 ps-6 items-center">
                    <div class="flex grow items-center">
                      <div class="rounded-full w-2 h-2 bg-gray-300"></div>
                      <div class="ps-3 text-gray-300">Send</div>
                    </div>
                    <div>
                      <svg width="21" height="48" viewBox="0 0 21 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.666504 -1.6001L20.6665 31.9999L0.666504 65.5999" stroke="#616161" stroke-width="1" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div class="flex w-1/3 ps-6 items-center">
                    <div class="flex grow items-center">
                      <div class="rounded-full w-2 h-2 bg-gray-300"></div>
                      <div class="ps-3 text-gray-300">Confirm</div>
                    </div>
                  </div>
                </div>

                <div class="mt-6 space-y-5">
                  <div>
                    <label class="inline-flex text-base font-medium mb-1.5" for="">
                      Your Bitcoin address
                    </label>
                    <input
                      class="text-black font-extralight text-base rounded-md px-4 py-3 mb-2 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50"
                      type="text"
                      name=""
                      value="bc1q7t6z5rnnwkpj4enuepg5pwtlgh2rgtzzm0syd4"
                    />
                  </div>
                  <div>
                    <label class="inline-flex text-base font-medium mb-1.5" for="">
                      Stacks or Contract address
                    </label>
                    <input
                      class="text-black font-extralight text-base rounded-md px-4 py-3 mb-2 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50"
                      type="text"
                      name=""
                      value="SP3AKK2FZKMVAGTKG2TTB7Y6NMDBQE4QDTY7WPR3D"
                    />
                  </div>
                  <div>
                    <label class="inline-flex text-base font-medium mb-1.5" for="">
                      Amount (in Bitcoin) &nbsp; <button class="text-sm text-primary-500">Switch to Satoshis</button>
                    </label>
                    <div class="relative mb-2"><input value="0.001" id="amount-btcamount" type="number" name="" class="text-black font-extralight text-base rounded-md pl-4 pr-20 py-3 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50"> <div class="flex items-center gap-2 absolute right-4 top-1/2 -translate-y-1/2"><svg class="w-6 h-6 shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7001 12.4198C19.3824 13.6937 18.8168 14.8925 18.0358 15.9477C17.2547 17.003 16.2734 17.8941 15.148 18.5702C14.0225 19.2462 12.7749 19.6939 11.4764 19.8877C10.1779 20.0815 8.85393 20.0177 7.5801 19.6998C5.66184 19.2211 3.92859 18.1843 2.59955 16.7206C1.2705 15.2568 0.405334 13.4318 0.113452 11.4764C-0.178429 9.52096 0.116081 7.52289 0.959742 5.73483C1.8034 3.94677 3.15832 2.44903 4.85318 1.431C6.54803 0.412971 8.5067 -0.0796316 10.4815 0.0154847C12.4563 0.110601 14.3586 0.789164 15.9477 1.96537C17.5369 3.14157 18.7416 4.7626 19.4095 6.62346C20.0774 8.48432 20.1786 10.5015 19.7001 12.4198Z" fill="#F7931A"></path><path d="M14.41 8.57486C14.61 7.24486 13.595 6.52986 12.21 6.05153L12.66 4.24986L11.5617 3.97653L11.1234 5.73153C10.835 5.65986 10.54 5.59153 10.245 5.52486L10.685 3.7582L9.58837 3.48486L9.14003 5.28486L6.9267 4.7382L6.63503 5.90986C6.63503 5.90986 7.44837 6.09653 7.4317 6.1082C7.8767 6.21986 7.9567 6.5132 7.94337 6.74653L6.7117 11.6832C6.6567 11.8165 6.52003 12.0199 6.20837 11.9432C6.22003 11.9599 5.4117 11.7432 5.4117 11.7432L4.8667 12.9999L7.0767 13.5582L6.6217 15.3815L7.71837 15.6549L8.16837 13.8515C8.46837 13.9332 8.75837 14.0082 9.04337 14.0782L8.59337 15.8732L9.6917 16.1465L10.1467 14.3265C12.0167 14.6832 13.425 14.5399 14.0167 12.8499C14.4934 11.4882 13.9934 10.7015 13.0084 10.1899C13.725 10.0232 14.265 9.55153 14.4084 8.5782H14.41V8.57486ZM11.9017 12.0915C11.5617 13.4532 9.26837 12.7165 8.52503 12.5315L9.1267 10.1165C9.87003 10.3015 12.255 10.6699 11.9017 12.0915ZM12.2417 8.55653C11.9334 9.79653 10.0234 9.16653 9.40337 9.01153L9.94837 6.81986C10.5684 6.97486 12.565 7.2632 12.2417 8.55653Z" fill="white"></path></svg><!--<LogoBitcoin>--> <span class="text-sm font-bold text-black"><a href="/">BTC</a></span></div></div>
                      <p class="text-sm text-gray-300">~$27.36 (USD)</p>
                  </div>
                </div>
                <div class="mt-6">
                  <button class="text-center focus:ring-4 focus:outline-none justify-center text-base hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex w-full items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">Continue</button>
                </div>
              </div>
            </TabItem>
            <TabItem title="Withdraw" class="grow [&>button]:w-full [&>button]:text-lg">
              <div class="flex w-full items-center justify-between flex-wrap my-4">
                <h2 class="text-2xl font-medium">
                  Withdraw BTC, burn sBTC
                </h2>
                <SwitchGraphic reverse={false}/>
              </div>
            </TabItem>
          </Tabs>

        </div>
      </div>
    </div>
  </div>

</div>
