<script lang="ts">
import { createEventDispatcher } from "svelte";
import { Button } from 'flowbite-svelte'

export let darkScheme:boolean;
export let label:string;
export let target:string;

let btnClass="menu-btn" + ' h-10 px-8 rounded-md cursor-pointer';
let btnTextClass="text-black font-medium";

if (darkScheme) {
  btnClass="menu-btn-dark" + ' btn';
  btnTextClass="menu-btn-text-dark";
}

const dispatch = createEventDispatcher();

const doClicked = (event:any) => {
	const menuTarget = { offsetTop: event.target.offsetTop, offsetLeft: event.target.offsetLeft };
	dispatch('clicked', { target, menuTarget });
}

</script>
<div class="h-14 flex align-baseline items-start me-3">
  {#if darkScheme}
  <Button on:click={(event) => doClicked(event)} btnClass="inline-flex items-center gap-x-1.5 bg-black-01 px-4 py-2 font-normal text-primary-500 rounded-xl border border-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
    {label}
  </Button>
  {:else}
  <Button on:click={(event) => doClicked(event)} btnClass="inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50">
    {label}
  </Button>
  {/if}
</div>
