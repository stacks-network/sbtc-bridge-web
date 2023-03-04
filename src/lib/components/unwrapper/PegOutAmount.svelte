<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { sbtcConfig } from '$stores/stores'
  import FeeDisplay from "$lib/components/common/FeeDisplay.svelte";

  export let amtData:{pegIn:false, label:string,info:string,pegAmount:number, maxCommit:number, change:number, fees:Array<number>, fee:number, dust:number};
  
  const dispatch = createEventDispatcher();
  let reason:string|undefined;
  let pegAmount:number = amtData.pegAmount;
  
  const changePegIn = (maxValue:boolean) => {
    reason = undefined;
    try {
      if (pegAmount > $sbtcConfig.balance.balance) {
        reason = 'Can\'t unwrap more sBTC then you own';
        dispatch('amount_updated', { opCode:'user', error: true, reason: 'Can\'t unwrap more sBTC then you own' });
        return;
      }
      if (maxValue) {
        pegAmount = $sbtcConfig.balance.balance;
      }
      const rate = amtData.fees.find((o) => o === amtData.fee);
      dispatch('amount_updated', { opCode:'user', error: false, newAmount: pegAmount, newFeeRate: rate });
    } catch(err:any) {
      reason = err||'Amount is not valid';
    }
  }
  
  const changeRate = (event:any) => {
    const rate = event.detail.newFeeRate;
    dispatch('amount_updated', { opCode:'prio', error: false, newAmount: pegAmount, newFeeRate: rate });
  }
  
  $: low = amtData.fee === amtData.fees[0];
  $: medium = amtData.fee === amtData.fees[1];
  $: high = amtData.fee === amtData.fees[2];
  
  function init(el:any) {
      el.focus()
  }
  
  </script>
  
  <div class="row">
    <div class="col-12">
      <label for="transact-path" class="d-flex justify-content-between">
        <span>{amtData.label}</span>
        <span class="pointer text-info" data-bs-toggle="tooltip-ftux" data-bs-placement="top" data-bs-custom-class="custom-tooltip" title="The amount of Bitcoin you want to swap for sBTC. The bitcoin is locked in the protocol and you convert your sBTC back to Bitcoin when you peg out."></span>
      </label>
      <input use:init type="number" id="from-address" class="form-control" autocomplete="off" bind:value={pegAmount}  on:input={() => changePegIn(false)}/>
      <div class="text-small">{amtData.info}</div>
      <div class="text-small d-flex justify-content-between  text-info">
        {#if amtData.change > 0}<span><a href="/" class="" on:click|preventDefault={() => changePegIn(true)}>set max</a></span>{/if}
      </div>
    </div>

    <div class="mt-5 col-12">
      <label for="transact-path" class="d-flex justify-content-between">
        <span>sBTC Dust Amount</span>
        <span class="pointer text-info" data-bs-toggle="tooltip-ftux" data-bs-placement="top" data-bs-custom-class="custom-tooltip" title="A tiny amount of bitoin is sent to the sBTC to keep track of sBTC transactions."></span>
      </label>
      <input type="number" readonly id="dust" class="form-control" style="background:#999;" bind:value={amtData.dust}/>
      <div class="text-small" title="Required for book keeping.">Tiny amount of bitcoin is sent to the sBTC wallet for book keeping purposes</div>
    </div>
    <FeeDisplay {amtData} currentPeg={pegAmount} on:fee_rate_updated={changeRate}/>
  </div>
  
  <style>
  </style>