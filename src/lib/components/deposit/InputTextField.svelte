<script lang="ts">
	import { createEventDispatcher } from "svelte";
  import { Icon, InformationCircle } from "svelte-hero-icons";
  import { onMount } from 'svelte';
  import { Tooltip } from 'flowbite-svelte';

  const dispatch = createEventDispatcher();
  export let readonly:Boolean;

  export let inputData:{
    field: string;
    label: string;
    hint: string;
    value: string;
    resetValue: string|undefined;
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

<div>
  <div class="flex items-center justify-between">
    <label class="inline-flex text-base font-medium mb-1.5" for="">
      {inputData.label}
      {#if inputData.hint}
      <Icon src="{InformationCircle}" mini class="ml-2 shrink-0 h-5 w-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50" aria-hidden="true" id="{inputData.field}-label" />
      {/if}
    </label>

    {#if reason || (inputData.resetValue && inputData.resetValue !== inputData.value)}
      <button class="px-3 py-1.5 text-primary-500 text-sm font-medium hover:underline focus:text-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50" type="button" on:click={() => reset()}>
        Reset
      </button>
    {/if}

    <Tooltip class="w-auto !font-extralight !bg-black z-20" triggeredBy="#{inputData.field}-label">
      {inputData.hint}
    </Tooltip>
  </div>
  {#if readonly}
    <input
      id={inputData.field}
      readonly
      class="text-black font-extralight text-base rounded-md px-4 py-3 mb-2 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50"
      type="text"
      name=""
      bind:value={value}
      on:input={() => updater()}
    />
  {:else}
    <input
      id={inputData.field}
      class="text-black font-extralight text-base rounded-md px-4 py-3 mb-2 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50"
      type="text"
      name=""
      bind:value={value}
      on:input={() => updater()}
    />
  {/if}

  <div>
    {#if reason}
      <p class="text-error-500">
        {reason}
      </p>
    {/if}
  </div>
</div>

