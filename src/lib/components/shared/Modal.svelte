<script>
import { createEventDispatcher } from "svelte";

export let showModal = false;
export let showClose = false;
const dispatch = createEventDispatcher();

const closeModal = () => {
    dispatch('close_modal');
}
scroll(0,0);
</script>

{#if showModal}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="backdrop" on:click|self>
    <div class="sv-modal">
        <slot name="title"></slot>
        <slot></slot>
    </div>
    {#if showClose}
        <div class="text-center"><button class="btn btn-outline-info" on:click={closeModal}>CLOSE</button></div>
    {/if}
</div>
{/if}

<style>
    .backdrop {
        z-index: 500;
        width: 80%;
        margin: auto;
        position: absolute;
        background-color: #fff;
        color: black;
        top: -250px;
        left: 0;
        right: 0;
        padding: 30px;
        border-radius: 40px;
    }
    .sv-modal {
        padding-bottom: 40px;
        min-height: 80%;
    }
</style>