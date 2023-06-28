<script lang="ts">
  import { onMount } from 'svelte';
  import LogoBitcoin from '../shared/LogoBitcoin.svelte';
  import { Icon, ArrowRight } from 'svelte-hero-icons';
  import LogoSBTC from '../shared/LogoSBTC.svelte';

  export let reverse:boolean;
  onMount(async () => {
  })
</script>

<div class="px-3 py-2.5 rounded-s-lg border-t-[0.2px] border-b-[0.2px] border-l-[0.2px] border-t-gray-900 border-b-gray-900 border-l-gray-900 bg-black-01 shadow-[6px_2px_12px_0px_rgba(0,0,0,0.40)]">
  {#if reverse}
    <div class="flex items-center gap-2">
      <div class="flex items-center">
        <LogoSBTC class={'w-5 h-5 shrink-0 me-2'}/>
        <div class="font-bold">BTC</div>
      </div>
      <Icon src="{ArrowRight}" mini class="w-4 h-4 mx-0.5" aria-hidden="true" />
      <div class="flex items-center">
        <LogoBitcoin clazz={'w-5 h-5 shrink-0 me-2'}/>
        <div class="font-bold">sBTC</div>
      </div>
    </div>
  {:else}
    <div class="flex items-center gap-2">
      <div class="flex items-center">
        <LogoBitcoin clazz={'w-5 h-5 shrink-0 me-2'}/>
        <div class="font-bold">sBTC</div>
      </div>
      <Icon src="{ArrowRight}" mini class="w-4 h-4 mx-0.5" aria-hidden="true" />
      <div class="flex items-center">
        <LogoSBTC class={'w-5 h-5 shrink-0 me-2'}/>
        <div class="font-bold">BTC</div>
      </div>
    </div>
  {/if}
</div>
