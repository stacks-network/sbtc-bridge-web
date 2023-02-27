<script lang="ts">
import { setCoordinator, setBtcWallet, coordinators, mintTo } from "$lib/sbtc_admin";
import { getOpenContractCall } from '@micro-stacks/svelte';
import MintTokens from './MintTokens.svelte'
import BurnTokens from './BurnTokens.svelte'
import { sbtcConfig } from '$stores/stores'

const contractCall = getOpenContractCall();

const coordinate = async () => {
  const res = await setCoordinator($contractCall);
}
const wallet = async () => {
  const res = await setBtcWallet($contractCall);
}

</script>
   
<div class="card border p-4">
  <div class="row">
    <div class="col">
      <div>Coordinator: {coordinators[0].stxAddress}</div>
      <div><button class="btn btn-outline-light" on:click={() => coordinate()}>Set Coordinator</button></div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div>SBTC Wallet: {coordinators[0].btcAddress}</div>
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