<script lang="ts">
import { Icon, ArrowUpRight } from "svelte-hero-icons"

let clazz = '';
export {clazz as class};
export let target:string;
let anchorClass = clazz + ' rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200'
</script>
  
<div class="ml-auto flex items-center">
    <a title="show in explorer" href={target} class={anchorClass} target="_blank" >
      <Icon src="{ArrowUpRight}" mini {clazz} aria-hidden="true" />
    </a>
</div>
