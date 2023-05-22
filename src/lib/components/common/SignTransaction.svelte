<script lang="ts">
import { onMount } from 'svelte';
import { createEventDispatcher } from "svelte";
import CopyClipboard from '$lib/components/common/CopyClipboard.svelte';
import PegInfo from '$lib/components/common/PegInfo.svelte';
import WalletHelp from '$lib/components/wallets/WalletHelp.svelte';
import { hex, base64 } from '@scure/base';
import type { SigData } from 'sbtc-bridge-lib' 
import type { PegInTransactionI } from '$lib/domain/PegInTransaction';
import type { PegOutTransactionI } from '$lib/domain/PegOutTransaction';
import { sbtcConfig } from '$stores/stores';
import { savePeginCommit } from '$lib/bridge_api';

export let piTx:PegInTransactionI|PegOutTransactionI;

const dispatch = createEventDispatcher();
let wallet:string;
let errorReason:string|undefined;

let sigData:SigData;
let copied = false;

let currentTx:string;

const setCurrent = () => {
  const psbt = piTx?.buildOpReturnTransaction().toPSBT();
  (wallet === 'Bitcoin Core') ? currentTx = base64.encode(psbt) : currentTx = hex.encode(psbt);
}

const updateWallet = async (newWallet:string) => {
  copied = false;
  wallet = newWallet;
  setCurrent();
  copy();
  if ($sbtcConfig.pegIn) {
    try {
      const peginRequest = piTx.getOpDropPeginRequest()
      //'op_return', (wallet === 'Bitcoin Core') ? 'bitcoin_core' : 'electrum'
      await savePeginCommit(peginRequest)
    } catch (err) {
      errorReason = 'Request already being processed with these details - change the amount to send another request.'
    }
  }
}

$: getWalletId = () => {
  if (wallet === 'Bitcoin Core') return 1;
  else if (wallet === 'Electrum') return 2;
  return 0;
}

const updateTransaction = () => {
  dispatch('update_transaction', { success: true });
}

const copy = () => {
  const app = new CopyClipboard({
    target: document.getElementById('clipboard')!,
    props: { name: currentTx },
  });
  app.$destroy();
  copied = true;
}

onMount(async () => {
	sigData = {
    webWallet: false,
		pegin: $sbtcConfig.pegIn,
		outputsForDisplay: piTx?.getOutputsForDisplay(),
		inputsForDisplay: piTx?.addressInfo.utxos
	}
  currentTx = hex.encode(piTx?.buildOpReturnTransaction().toPSBT());
})
</script>

<div id="clipboard"></div>
<section class="mb-3">
  <div class="d-flex justify-content-between">
    <h2>Step 2: Sign & Broadcast</h2>
  </div>
</section>
<PegInfo fromBtcAddress={piTx.fromBtcAddress} stacksAddress={piTx.pegInData.stacksAddress} amount={piTx.pegInData.amount} {sigData} {currentTx} on:update_transaction={updateTransaction}/>

<section>
  <!-- Select Wallet -->
{#if !errorReason}
<div class="my-3 d-flex justify-content-start">
  <div>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <span class="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          1. Select Wallet: {#if wallet}({wallet}){/if}
        </span>
        <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="/" on:click|preventDefault={() => updateWallet('Bitcoin Core')}>Bitcoin Core</a></li>
          <li><a class="dropdown-item" href="/" on:click|preventDefault={() => updateWallet('Electrum')}>Electrum</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
{#if wallet}
<div class="my-3 d-flex justify-content-start">
  <div>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <span class="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          2. Follow the Instructions Below
        </span>
      </li>
    </ul>
  </div>
</div>
{/if}

{:else}
<div class="row text-center my-5">
  <div class="col-12 text-danger mb-5">{errorReason}</div>
</div>
{/if}
  
<input bind:value={currentTx} style="visibility:hidden;" />
</section>
{#if copied}
<WalletHelp wallet={getWalletId()} />
{/if}
      
  <style>
  </style>