<script lang="ts">
  import { onMount } from 'svelte';
  import { maxCommit, fetchUTXOs, fetchAddressDetails } from "$lib/utxos";
  import { buildPegInTx } from "$lib/psbt";
  import { decodeStacksAddress } from "$lib/sbtc";
  import { sbtcConfig } from '$stores/stores'
  import type { SbtcConfig } from '$types/sbtc_config';
  import FeeEstimation from "$lib/components/FeeEstimation.svelte";
  import { PatchQuestion } from "svelte-bootstrap-icons";
  import { Tooltip } from "bootstrap";

  let bitcoinAddress:string|undefined = $sbtcConfig.fromBtcAddress;
  let stxAddress:string|undefined = $sbtcConfig.stxAddress;
  let pegInAmount:number = $sbtcConfig.pegInAmount;
  let errorReason:string|undefined;
  let changeErrorReason:string|undefined;
  
  const changeStxAddress = () => {
    if (!stxAddress) {
      errorReason = 'Please enter a valid stacks blockchain ' + $sbtcConfig.network + ' address';
      return
    }
    try {
      const decoded = decodeStacksAddress(stxAddress);
      if ($sbtcConfig.network === 'testnet' && decoded[0] !== 26) {
        errorReason = 'Please enter a valid stacks blockchain ' + $sbtcConfig.network + ' address';
        return
      }
      if ($sbtcConfig.network === 'mainnet' && decoded[0] !== 22) {
        errorReason = 'Please enter a valid stacks blockchain ' + $sbtcConfig.network + ' address';
        return
      }
      const conf:SbtcConfig = $sbtcConfig;
      conf.stxAddress = stxAddress;
      sbtcConfig.update(() => conf);
    } catch (err:any) {
      errorReason = 'Please enter a valid stacks blockchain ' + $sbtcConfig.network + ' address';
    }
  }
  
  let feeToUse = 0;
  let change = 0;
  const feeSelected = (event: { detail: any; }) => {
    const maxPeg = maxCommit($sbtcConfig.utxos);
    feeToUse = event.detail.fee;
    pegInAmount = maxPeg - feeToUse;
    change = maxPeg - (pegInAmount + feeToUse);
    if (change < 0) {
      changeErrorReason = 'Max peg in allowed at this fee rate is ' + (maxPeg - feeToUse);
    }
    const conf:SbtcConfig = $sbtcConfig;
    conf.pegInAmount = pegInAmount;
    conf.pegInChangeAmount = Number(change);
    sbtcConfig.set(conf);
  }
  
  const changePegIn = (maxValue:boolean) => {
    const maxPeg = maxCommit($sbtcConfig.utxos);
    errorReason = undefined;
    changeErrorReason = undefined;
    if (pegInAmount > maxPeg) {
      //pegInAmount = maxPeg - feeToUse;
      errorReason = 'Cannot commit more BTC then is available at your address';
      return
    }
    const conf:SbtcConfig = $sbtcConfig;
    if (maxValue) {
      //pegInAmount = maxPeg;
      pegInAmount = maxPeg - feeToUse;
    }
    change = maxPeg - (pegInAmount + feeToUse);
    if (change < 0) {
      changeErrorReason = 'Max peg in allowed at this fee rate is ' + (maxPeg - feeToUse);
    }
    conf.pegInChangeAmount = Number(change);
    conf.pegInAmount = Number(pegInAmount);
    sbtcConfig.set(conf);
  }
  
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
      result = await fetchUTXOs($sbtcConfig.network, bitcoinAddress);
      console.log('utxos --> ', result.utxos);
      conf.utxos = result;
      sbtcConfig.update(() => conf);
    } catch(err:any) {
      errorReason = err||'Error - is the address a valid';
    }
  }
  
  let hexTx:string|undefined;
  const buildTx = async () => {
    hexTx = await buildPegInTx($sbtcConfig);
  }
  
  $: showUtxos = bitcoinAddress && $sbtcConfig.utxos?.length > 0;
  $: showStxAddress = bitcoinAddress && $sbtcConfig.utxos?.length > 0;
  $: showPegInAmount = bitcoinAddress && stxAddress;
  $: showEstimates = bitcoinAddress && stxAddress;
  $: showFeeCalculation = feeToUse > 0;
  $: showButton = $sbtcConfig.pegInChangeAmount >= 0 && feeToUse > 0 && bitcoinAddress && stxAddress && pegInAmount > 0;
  $: showHexTx = hexTx && hexTx.length > 0;
  
  onMount(async () => {
    setTimeout(function () {
      const tooltipTriggerList = window.document.querySelectorAll('[data-bs-toggle="tooltip-ftux"]');
      if (tooltipTriggerList) [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
    }, 500)
  })

  </script>
        
    <div class="card border p-4">
  
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
          <div>{$sbtcConfig.utxos?.length || 0} UTXO(s) Found</div>
          <div><a href="/" class="" on:click|preventDefault={() => configureUTXOs(true)}>reload</a></div>
        </div>
        {:else if bitcoinAddress}
          <div class="text-danger">No bitcoin (transactions outputs) found at this address - please use an address with some bitcoin balance.</div>
        {/if}
      </div>
    </div>
    {#if showStxAddress}
      <div class="row">
        <div class="col">
          <label for="transact-path" class="d-flex justify-content-between">
            <span>Stacks {$sbtcConfig.network} Address:</span>
            <span class="pointer text-info" data-bs-toggle="tooltip-ftux" data-bs-placement="top" data-bs-custom-class="custom-tooltip" title="Your Stacks address. The equivalent amount of sBTC will be sent to this wallet"><PatchQuestion width={30} height={30}/></span>
          </label>
          <input type="text" id="from-address" class="form-control form-inline" autocomplete="off" bind:value={stxAddress} on:input={() => changeStxAddress()} />
        </div>
      </div>
    {/if}
    {#if showPegInAmount}
    <div class="row">
      <div class="col-12">
        <label for="transact-path" class="d-flex justify-content-between">
          <span>Peg In Amount / Sats:</span>
          <span class="pointer text-info" data-bs-toggle="tooltip-ftux" data-bs-placement="top" data-bs-custom-class="custom-tooltip" title="The amount of Bitcoin you want to swap for sBTC. The bitcoin is locked in the protocol and you convert your sBTC back to Bitcoin when you peg out."><PatchQuestion width={30} height={30}/></span>
        </label>
        <input type="number" id="from-address" class="form-control" autocomplete="off" bind:value={pegInAmount}  on:input={() => changePegIn(false)}/>
        <div class="d-flex justify-content-between  text-info">
          <div>Tx fees are additional.</div>
          <div><a href="/" class="" on:click|preventDefault={() => changePegIn(true)}>max</a></div>
        </div>
      </div>
    </div>
    {/if}
    {#if pegInAmount > 0}
    <div class="row">
      <div class="col-12">
        {#if showFeeCalculation}
          <label for="transact-path" class="mb-3">Tx Fee Calculation (sats/kb)</label>
          <div class="d-flex justify-content-between">
            <div>Using fee rate: {feeToUse}</div>
            <div><a href="/" on:click|preventDefault={() => {feeToUse = 0; hexTx = undefined; changeErrorReason = undefined}}>reset</a></div>
          </div>
          <div>Peg In: {pegInAmount}</div>
          <div>Change: {change}</div>
        {:else if showEstimates}
          <label for="transact-path" class="mb-3">Select Fee Rate for Fee Calculation</label>
          <FeeEstimation on:fee_selected={feeSelected}/>
        {/if}
      </div>
    </div>
    {/if}
    {#if changeErrorReason}<div class="text-danger">{changeErrorReason}</div>{/if}
    {#if showButton}
    <div class="row">
      <div class="col">
        <button class="btn btn-outline-warning w-100" type="button" on:click={() => buildTx()}>Build Peg In Tx</button>
      </div>
    </div>
    {/if}
    {#if showHexTx}
    <div class="row">
      <div class="col">
        <h2>Transaction</h2>
        <p>Paste this transaction into your wallet..</p>
        <textarea rows="4" style="width: 100%;" readonly>{hexTx}</textarea>
      </div>
    </div>
    {/if}
  </div>
      
  <style>
  .row {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  label {
    text-transform: capitalize;
  }
  </style>