<script lang="ts">
  import { Icon, ArrowSmallRight } from "svelte-hero-icons"
  import { a_primary } from '$lib/css_utils';
</script>

<svelte:head>
  <title>sBTC Bridge - Welcome!</title>
  <meta name="description" content="The sBTC Bridge
  provides a non-custodial, permissionless way to move Bitcoin into and out of the Stacks Blockchain." />
</svelte:head>

<div class="mx-auto flex flex-col justify-center px-6 lg:px-8 py-6">
  <div class="max-w-2xl">
    <div class="flex flex-col p-10 gap-6 items-start bg-gray-1000 border-[0.5px] border-gray-700 rounded-lg">
      <h1 class="text-4xl font-normal">Welcome!</h1>
      <div>
        <p class="mb-2">
          The <span class="font-normal">sBTC Bridge</span> is a community-led Stacks project. The Bridge
          provides a non-custodial, permissionless way to move Bitcoin into and out of the Stacks Blockchain.
        </p>
        <p class="mb-2">
          The Bridge interacts with Bitcoin and Stacks Blockchains: it does not take
          custody of your money.
        </p>
        <p class="mb-2">
          In order to interact with this application, you will need to have a wallet that supports both BTC and STX. <a class={a_primary} href="/wallet">Don't have a wallet?</a>
        </p>
        <p class="mb-2">
          The Bridge services are free - we do not add any fees. You will however need to allow for payment of
          Bitcoin gas fees. We hope to add support for the Lightning Network in a future release to help
          reduce the overheads even further.
        </p>
        <p>For more info about the sBTC Brigde, check <a class={a_primary} href="/faq">the FAQ page</a>.</p>
      </div>
      <div class="flex items-center gap-2">
        <a href="/start" class="inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50" role="button">
          Launch app
          <Icon src="{ArrowSmallRight}" mini class="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </a>

        <a href="/faq" class="inline-flex items-center gap-x-1.5 bg-transparent px-4 py-2 font-normal text-white rounded-xl border border-transparent hover:bg-white/[8%] focus:bg-white/[16%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50" role="button">
          Learn more
        </a>
      </div>
    </div>
  </div>
</div>
