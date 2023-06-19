<script lang="ts">
import { sbtcConfig } from '$stores/stores'
import { CONFIG } from '$lib/config';
import { goto } from "$app/navigation";
import Button from '$lib/components/shared/Button.svelte';

const launchApp = () => {
    goto('/?net=' + CONFIG.VITE_NETWORK)
}
</script>
<div class="mx-auto h-[calc(100vh-280px)] flex flex-col justify-center">
    <div class="mx-auto max-w-2xl">
        <div class="flex flex-col p-10 gap-0 items-start bg-gray-1000 border-[0.5px] border-gray-700 rounded-3xl">
            <div class="flex flex-col gap-0">
                {#if !$sbtcConfig?.sbtcContractData?.sbtcWalletAddress}
                <h1 class="font-medium text-2xl">Error: sBTC Wallet</h1>
                {:else}
                <h1 class="font-medium text-2xl">Server Error!</h1>
                {/if}
                {#if !$sbtcConfig?.sbtcContractData?.sbtcWalletAddress}
                <p class="text-sm font-light">The sBTC wallet is undefined in the sBTC Contract.</p>
                <p class="text-sm font-light">The Bridge is waiting for configuration data to be setup.</p>
                {:else if CONFIG.VITE_NETWORK === 'mainnet'}
                <p class="text-sm font-light">Mainnet is not yet fully supported.</p>
                <p class="text-sm font-light">Please use the settings menu to switch to testnet.</p>
                {:else}
                <p class="text-sm font-light">Temporarily problems connecting to the bridge.</p>
                <p class="text-sm font-light">Please try later.</p>
                {/if}
                <p class="text-sm font-light">For more info about the sBTC Bridge, check <a class="text-hint-link" href="/faq">the FAQ page.</a></p>
                <Button darkScheme={false} label={'Back home'} target={'launchApp'} on:clicked={() => launchApp()}/>
            </div>
        </div>
    </div>
</div>
      