<script lang="ts">
import Button from "../shared/Button.svelte";
import { fetchBlock, fetchTransaction } from '$lib/bridge_api';
import VerifyTransactions from './VerifyTransactions.svelte';

  let blockHash:any;
  let tx:any;
  let block:any;
  let txid = '01d8467b25e1d415bf53427d4db86fe001590b280b604204f794c5ecfc923ed3';
  let error:string|undefined;
  let componentKey = 0;


  const verify = async () => {
    tx = await fetchTransaction(txid)
    blockHash = (tx.status) ? tx.status.block_hash : tx.blockhash
    //blockHeader = await fetchBlockHeader(blockHash, true)
    block = await fetchBlock(blockHash, 2)
    componentKey++
    console.log(block)
  }
</script>

<div class="flex flex-col w-full">
  <div class="mb-5 text-2xl">Verify transactions</div>
  {#if error}<p class="text-danger">{error}</p>{/if}

  <div class="pb-5">
    <label for="transact-path">Enter txid</label>
    <input type="text" class="text-black block p-3 rounded-md border w-full" bind:value={txid}/>
  </div>

  <div class="pb-5">
    <Button darkScheme={false} label={'Fetch transaction'} target={''} on:clicked={() => verify()}/>
  </div>

  {#if block}
  <div class="">
      {#key componentKey}
      <VerifyTransactions {tx} {block}/>
      {/key}
  </div>
  {/if}

</div>
