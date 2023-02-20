<script lang="ts">
import { onMount } from 'svelte';
import { sbtcConfig } from '$stores/stores'
import PegOutAddress from "$lib/components/pegout/PegOutAddress.svelte";
import PegOutAmount from "$lib/components/pegout/PegOutAmount.svelte";
import UTXOSelection from "$lib/components/pegin/build/UTXOSelection.svelte";
import { Tooltip } from "bootstrap";
import { createEventDispatcher } from "svelte";
import { requestSignMessage } from '$lib/stacks'
import { getAccount } from '@micro-stacks/svelte';
import type { SbtcConfig } from '$types/sbtc_config';

const dispatch = createEventDispatcher();
const account = getAccount();

let errorReason:string|undefined;
let stxAddressOk = true;

const requestSignature = async () => {
  const msg = {
    btcAddress: $sbtcConfig.fromBtcAddress,
    amount: $sbtcConfig.feeCalc.pegOutFeeCalc.pegOutAmount
  }
  const sigData = await requestSignMessage(msg);
  const conf:SbtcConfig = $sbtcConfig;
  conf.sigData = sigData;
  sbtcConfig.update(() => conf);
  console.log(sigData);
  dispatch('request_signature');
}

const amountUpdated = () => {}

$: showPegOutAmount = $sbtcConfig.fromBtcAddress;
$: showButton = $sbtcConfig.feeCalc.pegOutFeeCalc.feeToApply > 0 && $sbtcConfig.fromBtcAddress && $sbtcConfig.feeCalc.pegOutFeeCalc.pegOutAmount > 0;
$: showPegOutAddress = showPegOutAmount;

onMount(async () => {
})
</script>  
{#if errorReason}<div class="text-warning">{errorReason}</div>{/if}
<div class="mb-4"><UTXOSelection /></div>
{#if showPegOutAddress}
<div class="mb-4"><PegOutAddress/></div>
{/if}
{#if showPegOutAmount}
<div class="mb-4"><PegOutAmount on:amount_updated={amountUpdated} /></div>
{/if}
{#if showButton}
<div class="row">
  <div class="col">
    <button class="btn btn-outline-info w-100" type="button" on:click={() => requestSignature()}>CONTINUE</button>
  </div>
</div>
{/if}

<style>
.row {
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>