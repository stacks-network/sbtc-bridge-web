<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { onMount } from 'svelte';
  import { Icon, InformationCircle } from "svelte-hero-icons";
  import { Tooltip } from 'flowbite-svelte';
  import LogoBitcoin from '../shared/LogoBitcoin.svelte';


  const dispatch = createEventDispatcher();

  export let inputData:{
    field: string;
    label: string;
    hint: string;
    value: number;
    resetValue: number|undefined;
  }

  let value:number = inputData.value;
  let reason:string|undefined;

  const reset = () => {
    value = inputData.resetValue || 0;
  }

  const updater = async () => {
    try {
      inputData.value = value;
      dispatch('updated', inputData);
    } catch(err:any) {
      reason = err.message || 'Error - is the address a valid';
    }
  }
  onMount(async () => {
    reason = undefined;
  })
</script>

<div>
  <div class="flex items-center justify-between">
    <label class="inline-flex text-base font-medium mb-1.5" for="">
      {inputData.label}
      <Icon src="{InformationCircle}" mini class="ml-2 shrink-0 h-5 w-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50" aria-hidden="true" id="{inputData.field}-label" />
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
      id={inputData.field}
      type="number"
      name=""
      bind:value={inputData.value}
      class="text-black font-extralight text-base rounded-md pl-4 pr-20 py-3 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50"
    />
    <div class="flex items-center gap-2 absolute right-4 top-1/2 -translate-y-1/2">
      <LogoBitcoin clazz={'w-6 h-6 shrink-0'}/>
      <span class="text-sm font-bold text-black">BTC</span>
    </div>
  </div>

  <div class="text-xs mt-1 text-left flex items-center justify-between">
    {#if reason}
      <p class="text-error-500">
        {reason}
      </p>
    {/if}
  </div>
</div>
