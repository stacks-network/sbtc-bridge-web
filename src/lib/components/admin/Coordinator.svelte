<script lang="ts">
import { CONFIG } from '$lib/config';
import { setCoordinator, setBtcWallet } from "$lib/sbtc_admin.js";
import MintTokens from './MintTokens.svelte'
import BurnTokens from './BurnTokens.svelte'
import { sbtcConfig } from '$stores/stores'
	import Button from '../shared/Button.svelte';

//const contractCall = openContractCall();

let coordinator:string = CONFIG.VITE_SBTC_COORDINATOR //VITE_SBTC_CONTRACT_ID.split('.')[0];
if ($sbtcConfig.sbtcContractData.sbtcWalletAddress) {
  coordinator = $sbtcConfig?.sbtcContractData?.coordinator?.addr.value || '';
}

let sbtcWallet:string = CONFIG.VITE_SBTC_WALLET;
if ($sbtcConfig?.sbtcContractData?.sbtcWalletAddress) {
  sbtcWallet = $sbtcConfig.sbtcContractData.sbtcWalletAddress;
}

const coordinate = async () => {
  const res = await setCoordinator(coordinator);
}
const wallet = async () => {
  const res = await setBtcWallet(sbtcWallet);
}

</script>
   
<div class="card border p-4">
  <div class="row">
    <div class="col">
      <div>Coordinator: {coordinator}</div>
      <input type="text" id="stxAddress" class="p-3 rounded-md border" bind:value={coordinator}/>
      <div class="py-0">
        <Button darkScheme={false} label={'Set Coordinator'} target={''} on:clicked={() => coordinate()}/>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div>sBTC Wallet: {$sbtcConfig.sbtcContractData.sbtcWalletAddress}</div>
      <input type="text" id="sbtcWallet" class="p-3 rounded-md border" bind:value={sbtcWallet}/>
      <div class="py-0">
        <Button darkScheme={false} label={'Set BTC Wallet'} target={''} on:clicked={() => wallet()}/>
      </div>
    </div>
  </div>
  <MintTokens />
  <BurnTokens />
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