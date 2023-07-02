<script lang="ts">
  import { onMount } from 'svelte';
  import SwitchGraphic from './SwitchGraphic.svelte';

  onMount(async () => {
  })
</script>

<div class="flex w-full items-center justify-between flex-wrap mb-10">
  <h2 class="text-4xl font-medium">
    Deposit BTC
  </h2>
  <div class="-mr-10">
    <SwitchGraphic reverse={true}/>
  </div>
</div>
