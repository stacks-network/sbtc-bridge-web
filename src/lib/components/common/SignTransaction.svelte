<script lang="ts">
import { onMount } from 'svelte';
import { createEventDispatcher } from "svelte";
import CopyClipboard from '$lib/components/common/CopyClipboard.svelte';
import PegInfo from '$lib/components/common/PegInfo.svelte';
import WalletHelp from '$lib/components/wallets/WalletHelp.svelte';
import { hex, base64 } from '@scure/base';
import type { SigData } from '$types/sig_data';

const dispatch = createEventDispatcher();
let wallet:string;
let opMechanism:string|undefined;

export let sigData:SigData;
export let pegInfo:any;
let copied = false;

let currentTx = hex.encode(sigData.txs.opDrop.toPSBT(2));

const setCurrent = () => {
  if (opMechanism === 'return') {
    const psbt = sigData.txs.opReturn.toPSBT(2);
    (wallet === 'Bitcoin Core') ? currentTx = base64.encode(psbt) : currentTx = hex.encode(psbt);
  } else if (opMechanism === 'drop') {
    const psbt = sigData.txs.opDrop.toPSBT(2);
    (wallet === 'Bitcoin Core') ? currentTx = base64.encode(psbt) : currentTx = hex.encode(psbt);
  }
}

const updateWallet = (newWallet:string) => {
  copied = false;
  opMechanism = undefined;
  wallet = newWallet;
  setCurrent();
}

const updateOpMechanism = (newOpMechanism:string) => {
  opMechanism = newOpMechanism;
  setCurrent();
  copy();
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
  try {
    if (sigData.webWallet) {
      console.log('Using web wallet psbt request')
    }
  } catch(err:any) {
    dispatch('update_transaction', { success: false, reason: err.message });
  }
})
</script>

<div id="clipboard"></div>
<section class="mb-3">
  <div class="d-flex justify-content-between">
    <h2>Step 2: Sign & Broadcast</h2>
  </div>
</section>
<PegInfo {pegInfo} {sigData} {currentTx} on:update_transaction={updateTransaction}/>

<!-- Select Wallet -->
<section>
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
						2. Select Mechanism: {#if opMechanism}({opMechanism}){/if}
					</span>
					<ul class="dropdown-menu dropdown-menu-start" aria-labelledby="navbarDropdown">
						<li><a class="dropdown-item" href="/" on:click|preventDefault={() => updateOpMechanism('return')}>OP Return</a></li>
						<li><a class="dropdown-item" href="/" on:click|preventDefault={() => updateOpMechanism('drop')}>OP Drop</a></li>
					</ul>
				</li>
			</ul>
    </div>
  </div>
  {/if}
  {#if wallet && opMechanism}
  <div class="my-3 d-flex justify-content-start">
    <div>
			<ul class="navbar-nav">
				<li class="nav-item dropdown">
					<span class="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						3. Follow the Instructions Below
					</span>
				</li>
			</ul>
    </div>
  </div>
  {/if}
  <input bind:value={currentTx} style="visibility:hidden;" />
</section>
{#if copied}
<WalletHelp wallet={getWalletId()} />
{/if}
      
  <style>
  </style>