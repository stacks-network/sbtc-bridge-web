<script lang="ts">
import CheckIcon from './CheckIcon.svelte'
import CrossIcon from './CrossIcon.svelte'
import { onMount } from 'svelte';
import ExclamationIcon from './ExclamationIcon.svelte';

export let message:string;
export let bannerType = 'warning'
let clazz = '';
export {clazz as class};

let bannerClassList = 'banner bg-success-400  badge flex'
let checked = true;
onMount(async () => {
    if (bannerType === 'warning') {
        bannerClassList = clazz + ' p-3 px-5 banner bg-warning-400 badge';
        checked = false;
    } else if (bannerType === 'danger') {
        bannerClassList = clazz + ' p-3 px-5 banner bg-error-400 badge';
        checked = false;
    }
})
</script>

<div class="">
    <div class={bannerClassList}>
        <div class="flex gap-4" style="color: #000000;">
            <span class="">
                {#if checked}
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3333 1L3.91667 7.41667L1 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                {:else}
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 7V10.75M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10ZM10 13.75H10.008V13.758H10V13.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {/if}
            </span>            
            <span class="text-banner"><slot name="message">{@html message}</slot></span>
        </div>
    </div>
</div>
