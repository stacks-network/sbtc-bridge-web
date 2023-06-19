<script lang="ts">
  import { Icon, ArrowSmallRight } from "svelte-hero-icons"
  import { a_primary } from '$lib/css_utils';
</script>

<div class="mx-auto h-[calc(100vh-280px)] flex flex-col justify-center">
  <div class="mx-auto max-w-2xl">
    <div class="flex flex-col p-10 gap-6 items-start bg-gray-1000 border-[0.5px] border-gray-700 rounded-3xl">
      <div class="flex flex-col">
        <h1 class="text-4xl font-normal">Welcome!</h1>
        <div class="flex flex-col gap-1">
          <p>
            The <span class="font-normal">sBTC Bridge</span> is a community led Stacks project. The Bridge 
            provides a non-custodial, permissionless way to move Bitcoin into and out of the Stacks Blockchain.
          </p>
          <p>
            The Bridge provides features to build and track Bitcoin and Stacks transactions: it doesn't take 
            custody of your money.
          </p>
          <p>
            In order to interact with this application, you will need to have a wallet that supports both BTC and STX. <a class={a_primary} href="/wallet">Don't have a wallet?</a>
          </p>
          <p>
            The Bridge services are free - we do not add any fees. You will however need to allow for payment of 
            Bitcoin gas fees. We hope to add support for the Lightning Network in a future release to help
            reduce the overheads even further.
          </p>
          <p class="">For more info about the sBTC Brigde, check <a class={a_primary} href="/faq">the FAQ page.</a></p>
        </div>
        <div>
          <a href="/start" class="inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50" role="button">
            Launch app
            <Icon src="{ArrowSmallRight}" mini class="-mr-0.5 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
