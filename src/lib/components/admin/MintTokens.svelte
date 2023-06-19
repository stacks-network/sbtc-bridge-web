<script lang="ts">
import { mintTo } from "$lib/sbtc_admin.js";
import { sbtcConfig } from '$stores/stores'
	import Button from "../shared/Button.svelte";

let pegInAmount:number|undefined = $sbtcConfig?.pegInTransaction?.pegInData.amount;
let stxAddress:string|undefined = $sbtcConfig?.pegInTransaction?.pegInData.stacksAddress;
let btcTxid:string|undefined;
let error:string|undefined;
const mint = async () => {
  if (!stxAddress || !btcTxid) {
    error = 'Please enter the amount, stacks address and bitcoin transaction';
    return;
  }
  error = undefined;
  const res = await mintTo(pegInAmount||0, stxAddress, btcTxid);
}
</script>

<div class="row">
    <div class="col">
      {#if error}<p class="text-danger">{error}</p>{/if}
      <label for="transact-path">Mint Address</label>
      <input type="text" id="stxAddress" class="p-3 rounded-md border" bind:value={stxAddress}/>
      <label for="transact-path">Mint Amount</label>
      <input type="number" id="pegInAmount" class="p-3 rounded-md border" bind:value={pegInAmount}/>
      <label for="transact-path">Bitcoin Tx Id</label>
      <input type="text" id="btcTxid" class="p-3 rounded-md border" bind:value={btcTxid}/>
      <div class="py-0">
        <Button darkScheme={false} label={'Mint'} target={'back'} on:clicked={() => mint()}/>
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