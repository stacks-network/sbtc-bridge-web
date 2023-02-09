<script lang="ts">
import { mintTo } from "$lib/sbtc_admin";
import { getOpenContractCall } from '@micro-stacks/svelte';
import { sbtcConfig } from '$stores/stores'

const contractCall = getOpenContractCall();

let pegInAmount:number = $sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount;
let stxAddress:string|undefined = $sbtcConfig.stxAddress;
let btcTxId:string|undefined;
let error:string|undefined;
const mint = async () => {
  if (!stxAddress || !btcTxId) {
    error = 'Please enter the amount, stacks address and bitcoin transaction';
    return;
  }
  error = undefined;
  const res = await mintTo($contractCall, pegInAmount, stxAddress, btcTxId);
}
</script>

<div class="row">
    <div class="col">
      {#if error}<p class="text-danger">{error}</p>{/if}
      <label for="transact-path">Mint Address</label>
      <input type="text" id="stxAddress" class="form-control" bind:value={stxAddress}/>
      <label for="transact-path">Mint Amount</label>
      <input type="number" id="pegInAmount" class="form-control" bind:value={pegInAmount}/>
      <label for="transact-path">Bitcoin Tx Id</label>
      <input type="text" id="btcTxId" class="form-control" bind:value={btcTxId}/>
      <div class="col"><button class="btn btn-outline-light" on:click={() => mint()}>Mint</button></div>
    </div>
</div>

<style>
  .row {
    margin-bottom: 20px;
  }
</style>