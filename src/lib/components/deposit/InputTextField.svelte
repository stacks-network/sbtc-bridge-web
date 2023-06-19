<script lang="ts">
	import { createEventDispatcher } from "svelte";
import IntroFill from '$lib/components/shared/IntroFill.svelte';
import { onMount } from 'svelte';

const dispatch = createEventDispatcher();
export let readonly:Boolean;

export let inputData:{
  field: string;
  label: string;
  hint: string;
  value:string;
  resetValue:string|undefined;
}

let value:string = inputData.value;
let reason:string|undefined;

const reset = () => {
  value = inputData.resetValue || '';
  reason = undefined
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
  <div class="text-left w-full">
    <div class="w-full flex justify-between">
      <span>{inputData.label}</span>
      <span class="pointer"><IntroFill/></span>
    </div>
    {#if readonly}
    <input id={inputData.field} readonly class="text-black tracking-wide font-extralight rounded-md p-3 h-12 w-full" type='text' bind:value={value} on:input={() => updater()}>
    {:else}
    <input class="text-black tracking-wide font-extralight rounded-md p-3 h-12 w-full" type='text' bind:value={value} on:input={() => updater()}>
    {/if}
  </div>
  <div class="text-xs mt-1 text-left flex w-full items-center justify-between">
    {#if reason}
    <div class=" text-error-500 grow">
      {reason}
    </div>
    {:else}
      <div class=" grow">
      {inputData.hint}
    </div>
    {/if}
    {#if reason || (inputData.resetValue && inputData.resetValue !== inputData.value)}
    <div class=" text-gray-500 text-right">
      <a href="/" on:click|preventDefault={() => reset()}>reset</a>
    </div>
    {/if}
  </div>
</div>
