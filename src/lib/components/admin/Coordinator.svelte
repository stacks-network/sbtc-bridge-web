<script lang="ts">
import { setCoordinator, setBtcWallet, coordinators, mintTo } from "$lib/sbtc_admin";
import { getOpenContractCall } from '@micro-stacks/svelte';
import MintTokens from './MintTokens.svelte'
import BurnTokens from './BurnTokens.svelte'
import { sbtcConfig } from '$stores/stores'

const contractCall = getOpenContractCall();

let coordinator:string = import.meta.env.VITE_SBTC_CONTRACT_ID.split('.')[0];
if ($sbtcConfig.sbtcContractData.sbtcWalletAddress) {
  coordinator = $sbtcConfig.sbtcContractData.coordinator.addr.value;
}

let sbtcWallet:string = import.meta.env.VITE_SBTC_WALLET;
if ($sbtcConfig?.sbtcContractData?.sbtcWalletAddress) {
  sbtcWallet = $sbtcConfig.sbtcContractData.sbtcWalletAddress;
}

const coordinate = async () => {
  const res = await setCoordinator(coordinator, $contractCall);
}
const wallet = async () => {
  const res = await setBtcWallet(sbtcWallet, $contractCall);
}

</script>
   
<div class="card border p-4">
  <div class="row">
    <div class="col">
      <div>Coordinator: {coordinator}</div>
      <input type="text" id="stxAddress" class="form-control" bind:value={coordinator}/>
      <div><button class="btn btn-outline-light" on:click={() => coordinate()}>Set Coordinator</button></div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div>SBTC Wallet: {$sbtcConfig.sbtcContractData.sbtcWalletAddress}</div>
      <input type="text" id="sbtcWallet" class="form-control" bind:value={sbtcWallet}/>
      <div class="col"><button class="btn btn-outline-light" on:click={() => wallet()}>Set BTC Wallet</button></div>
    </div>
  </div>
  <MintTokens />
  <BurnTokens />
</div>


<style>
  .row {
    margin-bottom: 20px;
  }
</style>