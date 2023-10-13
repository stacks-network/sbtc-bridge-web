<script lang="ts">
import Button from "../shared/Button.svelte";
import { fetchBlock, fetchTransaction } from '$lib/bridge_api';
import VerifyTransactions from './VerifyTransactions.svelte';
	import DecodeSbtc from "./DecodeSbtc.svelte";
	import { sbtcConfig } from "$stores/stores";

  let blockHash:any;
  let tx:any;
  let block:any;
  let txid = $sbtcConfig.userSettings.testAddress // = '01d8467b25e1d415bf53427d4db86fe001590b280b604204f794c5ecfc923ed3';
  let error:string|undefined;
  let componentKey = 0;
  let feature = 'sbtcDecode'

  const clazzOn =  'bg-white relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[\'\'] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[\'\'] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[\'\'] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]'
  const clazzOff = '         relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[\'\'] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[\'\'] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[\'\'] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]'
  const verify = async () => {
    if (!txid) return;
    tx = await fetchTransaction(txid)
    $sbtcConfig.userSettings.testAddress = txid
    sbtcConfig.update(() => $sbtcConfig)
    try {
      blockHash = (tx.status) ? tx.status.block_hash : tx.blockhash
      if (blockHash) {
        block = await fetchBlock(blockHash, 2)
        console.log(block)
      }
    } catch(err:any) {
      block = true
    }
    componentKey++
  }
</script>

<div class="flex flex-col w-full">
  <div class="mb-5 text-2xl">Verify transactions</div>
  {#if error}<p class="text-danger">{error}</p>{/if}

  <div class="pb-5">
    <label for="transact-path">Enter txid</label>
    <input type="text" class="text-black block p-3 rounded-md border w-full" bind:value={txid}/>
  </div>

  <div class="flex gap-x-5 pb-5">
    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
      <input
      class={feature === 'sbtcDecode' ? clazzOn : clazzOff}
      type="radio"
        name="sbtcDecode"
        id="radioDefault02"
        on:click={() => {feature = 'sbtcDecode'; verify()}}
        bind:value={feature}
        checked />
      <label
        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
        for="radioDefault02">
        sBTC decode
      </label>
    </div>
    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
      <input
        class={feature === 'sbtcDecode' ? clazzOff : clazzOn}
        type="radio"
        name="merkleProof"
        on:click={() => {feature = 'merkleProof'; verify()}}
        bind:value={feature}
        id="radioDefault01" />
      <label
        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
        for="radioDefault01">
        Merkle proofs
      </label>
    </div>
  </div>

  <div class="pb-5">
    <Button darkScheme={false} label={(feature === 'sbtcDecode') ? 'Decode sBTC' : 'Merkle Proof'} target={''} on:clicked={() => verify()}/>
  </div>

  {#if block}
  <div class="">
    {#if tx}
      {#if feature === 'sbtcDecode'}
      <DecodeSbtc {tx}/>
      {:else if block}
      <VerifyTransactions {tx} {block}/>
      {/if}
    {/if}
  </div>
  {/if}

</div>
