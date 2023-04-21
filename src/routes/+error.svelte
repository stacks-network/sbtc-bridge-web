<script>
    import { page } from '$app/stores';
</script>

<section class="bg-dark text-white text-center pt-5">
    <h1>Unable to find that request!</h1>
    {#if $page?.error}
        <div class="mt-4 border-y-2">
            {#if $page?.status}
                <p>Page status: {$page?.status}</p>
            {/if}
            {#if $page?.error?.message}
                <p>Error message: {$page?.error?.message}</p>
            {/if}
        </div>
    {/if}
</section>
<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: top;
        align-items: center;
        flex: 0.6;
        min-height: 90vh;
    }
    h1 {
        width: 100%;
    }
    </style>