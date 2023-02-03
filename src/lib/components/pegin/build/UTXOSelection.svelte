<script lang="ts">
import { sbtcConfig } from '$stores/stores'
import type { SbtcConfig } from '$types/sbtc_config';
import { fetchUTXOs, fetchTxs, fetchAddressDetails } from "$lib/utxos";
import { PatchQuestion } from "svelte-bootstrap-icons";
import { maxCommit } from "$lib/utxos";

let bitcoinAddress:string|undefined = $sbtcConfig.fromBtcAddress;
let errorReason:string|undefined;

const configureUTXOs = async (force:boolean) => {
  errorReason = undefined;
  if (!bitcoinAddress || bitcoinAddress.length < 10) {
    errorReason = 'Invalid address';
    return;
  }
  if (!force && $sbtcConfig.fromBtcAddress === bitcoinAddress && $sbtcConfig.utxos) {
    return;
  }
  try {
    const conf:SbtcConfig = $sbtcConfig;
    let result = await fetchAddressDetails($sbtcConfig.network, bitcoinAddress);
    conf.fromBtcAddress = bitcoinAddress;
    conf.addressDetails = result;
    const txSet = await fetchTxs($sbtcConfig.network, bitcoinAddress);
    result = await fetchUTXOs($sbtcConfig.network, bitcoinAddress, txSet);
    console.log('utxos --> ', result);
    conf.utxos = result;
    sbtcConfig.update(() => conf);
  } catch(err:any) {
    errorReason = err||'Error - is the address a valid';
  }
}

$: showUtxos = bitcoinAddress && $sbtcConfig.utxos?.length > 0;

</script>
    
{#if errorReason}<div class="text-warning">{errorReason}</div>{/if}
<div class="row">
  <div class="col">
    <label for="transact-path" class="d-flex justify-content-between">
      <span>Bitcoin {$sbtcConfig.network} Address:</span>
      <span class="pointer text-info" data-bs-toggle="tooltip-ftux" data-bs-placement="top" data-bs-custom-class="custom-tooltip" title="Your bitcoin address. Funds you send from this wallet will be exchanged for sBTC"><PatchQuestion width={30} height={30}/></span>
    </label>
    <input type="text" id="from-address" class="form-control" autocomplete="off" bind:value={bitcoinAddress} on:input={() => configureUTXOs(false)} />
    {#if showUtxos}
    <div class="d-flex justify-content-between  text-info">
      <div>{$sbtcConfig.utxos?.length || 0} UTXO(s) Found (Value: {maxCommit($sbtcConfig.utxos)})</div>
      <div><a href="/" class="" on:click|preventDefault={() => configureUTXOs(true)}>reload</a></div>
    </div>
    {:else if bitcoinAddress}
      <div class="text-danger">No bitcoin (transactions outputs) found at this address - please use an address with some bitcoin balance.</div>
    {/if}
  </div>
</div>
        
<style>
</style>