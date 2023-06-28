<script lang="ts">
  import { onMount } from 'svelte';
  import { Icon, CheckCircle } from 'svelte-hero-icons';

  export let timeLineStatus = 1;

  onMount(async () => {
  })
</script>

<div class="flex w-full border-[0.5px] border-gray-700 rounded-2xl items-center text-base ps-4">
  <div class="flex w-1/3 ps-6 items-center">
    <div class="flex grow items-center ps-1">
      {#if timeLineStatus === 1}
        <div class="rounded-full w-2 h-2 shadow-[0px_0px_4px_#121212,0px_0px_4px_4px_#475587] bg-blue-500"></div>
      {:else if timeLineStatus === 2 || timeLineStatus === 3}
        <Icon src={CheckCircle} solid class="w-6 h-6 shrink-0 text-blue-500" aria-hidden="true" />
      {/if}
      <div class="ps-3 {(timeLineStatus === 1) ? 'text-white' : 'text-gray-300'}">Amount</div>
    </div>
    <div>
      <svg width="21" height="64" viewBox="0 0 21 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.666504 -1.6001L20.6665 31.9999L0.666504 65.5999" stroke="#616161" stroke-width="1" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
  <div class="flex w-1/3 ps-6 items-center">
    <div class="flex grow items-center ps-4">
      <div class="rounded-full w-2 h-2 {(timeLineStatus === 2) ? 'shadow-[0px_0px_4px_#121212,0px_0px_4px_4px_#475587] bg-blue-500' : 'bg-white'}"></div>
      <div class="ps-3 {(timeLineStatus === 2) ? 'text-white' : 'text-gray-300'}">Send</div>
    </div>
    <div>
      <svg width="21" height="64" viewBox="0 0 21 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.666504 -1.6001L20.6665 31.9999L0.666504 65.5999" stroke="#616161" stroke-width="1" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
  <div class="flex w-1/3 ps-6 items-center">
    <div class="flex grow items-center ps-4">
      <div class="rounded-full w-2 h-2 {(timeLineStatus === 3) ? 'shadow-[0px_0px_4px_#121212,0px_0px_4px_4px_#475587] bg-blue-500' : 'bg-white'}"></div>
      <div class="ps-3 {(timeLineStatus === 3) ? 'text-white' : 'text-gray-300'}">Confirm</div>
    </div>
  </div>
</div>
