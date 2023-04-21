<script>

export let showModal = false;

scroll(0,0);
</script>

{#if showModal}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="backdrop" on:click|self>
    <div class="sv-modal">
        <slot name="title"></slot>
        <slot></slot>
        <slot name="close"></slot>
        <slot name="debug"></slot>
    </div>
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