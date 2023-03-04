<script lang="ts">
import { sbtcConfig } from '$stores/stores'
import { fmtSatoshiToBitcoin } from '$lib/utils'

export let showAddress = false;
</script>

{#if showAddress}
<span class="ub-address">
  {($sbtcConfig.balance.address)}
</span>
{/if}
<span>Bal. {fmtSatoshiToBitcoin($sbtcConfig.balance.balance)} sBTC</span>

<style>
</style>