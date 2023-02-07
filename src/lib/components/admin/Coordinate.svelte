<script lang="ts">
import { setCoordinator, setBtcWallet, coordinator } from "$lib/sbtc";
import { getOpenContractCall } from '@micro-stacks/svelte';

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
      <div>Coordinator: {coordinator.stxAddress}</div>
      <div><button class="btn btn-outline-light" on:click={() => coordinate()}>Set Coordinator</button></div>
    </div>
  </div>
  <div class="row">
    <div>SBTC Wallet: {coordinator.btcAddress}</div>
    <div class="col"><button class="btn btn-outline-light" on:click={() => wallet()}>Set BTC Wallet</button></div>
  </div>
  <div class="row">
    <div>Mint SBTC: {coordinator.btcAddress}</div>
    <div class="col"><button class="btn btn-outline-light" on:click={() => wallet()}>Set BTC Wallet</button></div>
  </div>
</div>

<style>
  .row {
    margin-bottom: 20px;
  }
</style>