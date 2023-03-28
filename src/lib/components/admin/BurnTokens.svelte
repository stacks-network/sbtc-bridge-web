<script lang="ts">
import { burnFrom } from "$lib/sbtc_admin.js";
import { sbtcConfig } from '$stores/stores'

let pegOutAmount:number|undefined = $sbtcConfig?.pegOutTransaction?.pegInData.amount;
let stxAddress:string|undefined = $sbtcConfig?.pegInTransaction?.pegInData.stacksAddress;
let btcTxId:string|undefined;
let error:string|undefined;
const burn = async () => {
  if (!stxAddress || !btcTxId) {
    error = 'Please enter the amount, stacks address and bitcoin transaction';
    return;
  }
  error = undefined;
  const res = await burnFrom(pegOutAmount||0, stxAddress, btcTxId);
}
</script>

<div class="row">
    <div class="col">
      {#if error}<p class="text-danger">{error}</p>{/if}
      <label for="transact-path">Burn Address</label>
      <input type="text" id="stxAddress" class="form-control" bind:value={stxAddress}/>
      <label for="transact-path">Burn Amount</label>
      <input type="number" id="pegInAmount" class="form-control" bind:value={pegOutAmount}/>
      <label for="transact-path">Bitcoin Tx Id</label>
      <input type="text" id="btcTxId" class="form-control" bind:value={btcTxId}/>
      <div class="col"><button class="btn btn-outline-light" on:click={() => burn()}>Burn</button></div>
    </div>
</div>

<style>
  .row {
    margin-bottom: 20px;
  }
</style>