<script lang="ts">
import { burnFrom } from "$lib/sbtc_admin.js";
import { sbtcConfig } from '$stores/stores'
	import Button from "../shared/Button.svelte";

let pegOutAmount:number|undefined = $sbtcConfig?.pegOutTransaction?.pegInData.amount;
let stxAddress:string|undefined = $sbtcConfig?.pegInTransaction?.pegInData.stacksAddress;
let btcTxid:string|undefined;
let error:string|undefined;
const burn = async () => {
  if (!stxAddress || !btcTxid) {
    error = 'Please enter the amount, stacks address and bitcoin transaction';
    return;
  }
  error = undefined;
  const res = await burnFrom(pegOutAmount||0, stxAddress, btcTxid);
}
</script>

<div class="row">
    <div class="col">
      {#if error}<p class="text-danger">{error}</p>{/if}
      <label for="transact-path">Burn Address</label>
      <input type="text" id="stxAddress" class="p-3 rounded-md border" bind:value={stxAddress}/>
      <label for="transact-path">Burn Amount</label>
      <input type="number" id="pegInAmount" class="p-3 rounded-md border" bind:value={pegOutAmount}/>
      <label for="transact-path">Bitcoin Tx Id</label>
      <input type="text" id="btcTxid" class="p-3 rounded-md border" bind:value={btcTxid}/>
      <div class="py-0">
        <Button darkScheme={false} label={'Burn Baby Burn'} target={''} on:clicked={() => burn()}/>
      </div>
    </div>
</div>

<style>
  input {
    width: 100%;
    margin: 10px 0;
    color: #000;
  }
  .row {
    margin-bottom: 40px;
  }
</style>