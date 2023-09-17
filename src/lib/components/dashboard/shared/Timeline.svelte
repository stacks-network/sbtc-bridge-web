<script lang="ts">
  import { createEventDispatcher } from "svelte";
	import SwitchGraphic from '$lib/components/dashboard/shared/SwitchGraphic.svelte';

  const dispatch = createEventDispatcher();
  export let active = 1;
  export let confirm = true;

  const updateTimeline = (timeline:number) => {
    dispatch('update_timeline', { timeline });
  }

  const aClazzes = (container:number) => {
    if (container === active) return 'rounded-full w-2 h-2 bg-primary-01'
    return 'rounded-full w-2 h-2 bg-gray-300'
  }
  const bClazzes = (container:number) => {
    if (container === active) return 'ps-3 text-white'
    return 'ps-3 text-gray-300'
  }
  const cClazzes = () => {
    if (confirm) return 'flex w-1/3 ps-3 sm:ps-6 items-center'
    return 'flex w-1/2 ps-3 sm:ps-6 items-center'
  }

</script>

<div class="flex bg-gray-1000 w-full border-[0.5px] border-gray-700 rounded-sm items-center text-base">
  <div class={cClazzes()}>
    <div class="flex grow items-center cursor-pointer" on:keypress on:click={() => updateTimeline(1)}>
      <div class={aClazzes(1)}></div>
      <div class={bClazzes(1)}>Amount</div>
    </div>
    <div>
      <svg width="21" height="48" viewBox="0 0 21 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.666504 -1.6001L20.6665 31.9999L0.666504 65.5999" stroke="#616161" stroke-width="1" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
  <div class={cClazzes()}>
    <div class="flex grow items-center cursor-pointer" on:keypress on:click={() => updateTimeline(2)}>
      <div class={aClazzes(2)}></div>
      <div class={bClazzes(2)}>Send</div>
    </div>
    {#if confirm}
    <div>
      <svg width="21" height="48" viewBox="0 0 21 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.666504 -1.6001L20.6665 31.9999L0.666504 65.5999" stroke="#616161" stroke-width="1" stroke-linejoin="round"/>
      </svg>
    </div>
    {/if}
  </div>
  {#if confirm}
  <div class={cClazzes()}>
    <div class="flex grow items-center cursor-pointer" on:keypress on:click={() => updateTimeline(3)}>
      <div class={aClazzes(3)}></div>
      <div class={bClazzes(3)}>Confirm</div>
    </div>
  </div>
  {/if}
</div>
