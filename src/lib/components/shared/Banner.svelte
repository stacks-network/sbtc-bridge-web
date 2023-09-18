<script lang="ts">
  import { onMount } from 'svelte';

  import { Icon, Wifi, PhoneArrowDownLeft, InformationCircle, XCircle,ExclamationCircle, CheckCircle } from "svelte-hero-icons";

  export let message:string;
  export let bannerType = 'info'
  let clazz = '';
  export {clazz as class};

  let bannerClassList = ''
  onMount(async () => {
    if (bannerType === 'warning') {
      bannerClassList = clazz + ' bg-warning-400';
    } else if (bannerType === 'danger') {
      bannerClassList = clazz + ' bg-error-400';
    } else if (bannerType === 'success') {
      bannerClassList = clazz + ' bg-success-400';
    } else if (bannerType === 'waiting' || bannerType === 'checking') {
      bannerClassList = clazz + ' bg-blue-400';
    } else {
      bannerClassList = clazz + ' bg-gray-400';
    }
  })
</script>

<div class="flex px-4 py-3 rounded-md text-base text-black {bannerClassList}">
  <div class="flex gap-2">
    <div>
      {#if bannerType === 'warning'}
        <Icon src="{ExclamationCircle}" solid class="text-black w-5 h-5 mt-0.5" aria-hidden="true" />
      {:else if bannerType === 'danger'}
        <Icon src="{XCircle}" solid class="text-black w-5 h-5 mt-0.5" aria-hidden="true" />
      {:else if bannerType === 'success'}
        <Icon src="{CheckCircle}" solid class="text-black w-5 h-5 mt-0.5" aria-hidden="true" />
        {:else if bannerType === 'waiting'}
        <Icon src="{PhoneArrowDownLeft}"  class="text-black w-5 h-5 mt-0.5" aria-hidden="true" />
        {:else if bannerType === 'checking'}
        <Icon src="{Wifi}"  class="text-black w-5 h-5 mt-0.5" aria-hidden="true" />
      {:else}
        <Icon src="{InformationCircle}" solid class="text-black w-5 h-5 mt-0.5" aria-hidden="true" />
      {/if}
    </div>
    <div>
      <slot name="message">{@html message}</slot>
    </div>
  </div>
</div>
