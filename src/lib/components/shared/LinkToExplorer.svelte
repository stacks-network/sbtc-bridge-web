<script lang="ts">
  import { Icon, ArrowUpRight } from "svelte-hero-icons"

  let clazz = '';
  export {clazz as class};
  export let target:string;
</script>

<a title="Show in Explorer" href={target} target="_blank" class={clazz} >
  <Icon src="{ArrowUpRight}" mini class="w-5 h-5" aria-hidden="true" />
</a>
