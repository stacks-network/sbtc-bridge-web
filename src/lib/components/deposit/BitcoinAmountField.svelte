<script lang="ts">
import { createEventDispatcher } from "svelte";
import IntroFill from '$lib/components/shared/IntroFill.svelte';
import { onMount } from 'svelte';

const dispatch = createEventDispatcher();

export let inputData:{
  field: string;
  label: string;
  hint: string;
  value:number;
  resetValue:number|undefined;
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

<div class="flex flex-col w-full items-center justify-center">
  <div class="w-full">
    <div class="text-left">
      <div class="w-full flex justify-between">
        <span>{inputData.label}</span>
        <span class="pointer"><IntroFill/></span>
      </div>
      <input id={inputData.field} type='number' class="text-black tracking-wide font-extralight rounded-md p-3 h-12 w-full" bind:value={inputData.value}>
    </div>
    <div class="text-xs mt-1 text-left flex items-center justify-between">
      {#if reason}
        <div class="text-xs text-error-500 grow">{reason}</div>
        {:else if inputData.hint}
        <div class="grid grid-cols-6">
          <div class="text-hint col-span-5">
            {inputData.hint}
          </div>
          {#if inputData.resetValue}
          <div class="col-span-1 text-hint text-gray-500">
            <a href="/" on:click|preventDefault={() => reset()}>reset</a>
          </div>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</div>
