<script lang="ts">
import { sbtcConfig } from '$stores/stores'
import { fetchUserSbtcBalance } from '$lib/bridge_api'
import { getAccount } from "@micro-stacks/svelte";
import { onMount} from 'svelte';
import { fmtSatoshiToBitcoin, truncate } from '$lib/utils'

export let showAddress = false;
const account = getAccount();

let balanceObjs: any[] = [];
let inited = false;
onMount(async () => {
  const stxAddressAuth = $account.stxAddress;
  const stxAddressForm = $sbtcConfig.stxAddress;
  if (stxAddressAuth) {
    const balance = await fetchUserSbtcBalance(stxAddressAuth);
    if (balance > 0) {
      balanceObjs.push({
        address: stxAddressAuth,
        balance
      })
    }
  }
  if (stxAddressForm && stxAddressForm !== stxAddressAuth) {
    const balance = await fetchUserSbtcBalance(stxAddressForm);
    if (balance > 0) {
      balanceObjs.push({
        address: stxAddressForm,
        balance
      })
    }
  }
  inited = true;
})
</script>

{#if inited}
<div class="row my-4">
  {#each balanceObjs as bal}
  <div class="col-8">
    {#if showAddress}{(bal.address)}{/if}
  </div>
  <div class="col-4 text-end">
    Bal. {fmtSatoshiToBitcoin(bal.balance)} sBTC
  </div>
  {/each}
</div>
{/if}

<style>
</style>