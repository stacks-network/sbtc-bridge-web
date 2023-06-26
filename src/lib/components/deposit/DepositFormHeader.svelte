<script lang="ts">
  import { onMount } from 'svelte';
  import SwitchGraphic from './SwitchGraphic.svelte';

  onMount(async () => {
  })
</script>

<div class="flex w-full items-center flex-wrap relative">
  <h2 class="text-4xl font-medium">
    Deposit BTC
  </h2>
  <SwitchGraphic reverse={false}/>
</div>
