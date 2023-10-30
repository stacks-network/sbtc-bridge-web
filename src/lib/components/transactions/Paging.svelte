<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
import { page } from '$app/stores';
import { Pagination } from 'flowbite-svelte';
import { ChevronLeftOutline, ChevronRightOutline, ListMusicOutline } from 'flowbite-svelte-icons';
import { createEventDispatcher, onMount } from "svelte";

const dispatch = createEventDispatcher();

export let totalEvents:number;
export let limit:number;
export let numPages:number;
let inited = false;

let pages:Array<{name:string, href:string, active:boolean}> = [];

$: activeUrl = $page.url.searchParams.get('page');

$: {
  pages.forEach((page) => {
    let splitUrl = page.href.split('?');
    let queryString = splitUrl.slice(1).join('?');
    const hrefParams = new URLSearchParams(queryString);
    let hrefValue = hrefParams.get('page');
    if (hrefValue === activeUrl) {
      page.active = true;
    } else {
      page.active = false;
    }
  });
  pages = pages;
}

const previous = () => {
  const current = ($page.url.searchParams.has('page')) ? Number($page.url.searchParams.get('page')) : 1;
  if (current <= 1) return
  goto('/transactions?page=' + (current - 1))
};
const next = () => {
  const current = ($page.url.searchParams.has('page')) ? Number($page.url.searchParams.get('page')) : 0;
  if (current >= numPages) return
  goto('/transactions?page=' + (current + 1))
};
afterNavigate((nav) => {
  const mypage = ($page.url.searchParams.size === 0) ? 0 : Number($page.url.searchParams.get('page'))
  dispatch("fetch_page", { page: mypage - 1 });
})

onMount(async () => {
  let active = false;
  for (let i=0; i < numPages; i++) {
    let name = Number(i+1)
    if ((i === 0 && ($page.url.searchParams.size === 0))) active = true
    else if ((i+1) === Number($page.url.searchParams.get('page'))) active = true
    pages.push({name: String(name), href: '/transactions?page=' + (i+1), active})
    active = false;
  }
  inited = true;
})

</script>

{#if totalEvents > 0 && inited}
<div class="">
  <div class="">
    <Pagination {pages} on:previous={previous} on:next={next} icon>
      <svelte:fragment slot="prev">
        <span class="sr-only">Previous</span>
        <ChevronLeftOutline class="w-2.5 h-2.5" />
      </svelte:fragment>
      <svelte:fragment slot="next">
        <span class="sr-only">Next</span>
        <ChevronRightOutline class="w-2.5 h-2.5" />
      </svelte:fragment>
    </Pagination>
  </div>
</div>
{/if}
