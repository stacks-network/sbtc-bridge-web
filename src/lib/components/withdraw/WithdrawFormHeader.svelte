<script lang="ts">
import { onMount } from 'svelte';
import SwitchGraphic from '$lib/components/deposit/SwitchGraphic.svelte';

onMount(async () => {
})

</script>

<div class="flex w-full mt-5 gap-y-4 align-baseline items-center flex-wrap">
  <div class="grow">
    <span class="text-2xl font-medium">Withdraw BTC</span>
  </div>
  <div class="grow ">
    <SwitchGraphic reverse={true}/>
  </div>
</div>
