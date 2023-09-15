<script lang="ts">
import { CONFIG } from '$lib/config';
import { setCoordinator, setsBTCPublicKey } from "$lib/sbtc_admin.js";
import MintTokens from './MintTokens.svelte'
import BurnTokens from './BurnTokens.svelte'
import { sbtcConfig } from '$stores/stores'
import Button from '../shared/Button.svelte';

//const contractCall = openContractCall();
let errorReason:string|undefined;

let romeoPublicKey = $sbtcConfig.sbtcContractData.sbtcWalletPublicKey;
if ($sbtcConfig && $sbtcConfig.sbtcContractData) {
  const s = $sbtcConfig.sbtcContractData
  //coordinator = s.coordinator?.addr?.value || '';
  //romeoPublicKey = s.sbtcWalletAddress;
}

const wallet = async () => {
  const res:any = await setsBTCPublicKey($sbtcConfig.sbtcContractData.contractId, romeoPublicKey);
  if (res.error) errorReason = res.reason
  console.log(res)
}

</script>
   
<div class="card border p-4">
  <!--
  <div class="row">
    <div class="col">
      <div>Coordinator: {coordinator}</div>
      <input type="text" id="stxAddress" class="p-3 rounded-md border" bind:value={coordinator}/>
      <div class="py-0">
        <Button darkScheme={false} label={'Set Coordinator'} target={''} on:clicked={() => coordinate()}/>
      </div>
    </div>
  </div>
  -->
  <div class="row">
    <div class="col">
      <div>sBTC Public Key</div>
      <input type="text" id="sbtcWallet" class="p-3 rounded-md border" bind:value={romeoPublicKey}/>
      <div class="py-0">
        <Button darkScheme={false} label={'Set BTC Wallet'} target={''} on:clicked={() => wallet()}/>
      </div>
    </div>
  </div>
  {#if romeoPublicKey}
  <MintTokens />
  <BurnTokens />
  {/if}
  {#if errorReason}
  {@html errorReason}
  {/if}
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