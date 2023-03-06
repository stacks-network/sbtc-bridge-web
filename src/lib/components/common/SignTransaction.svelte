<script lang="ts">
import { onMount } from 'svelte';
import { createEventDispatcher } from "svelte";
import { ArrowUp, ArrowDown, CheckCircle } from "svelte-bootstrap-icons";
import CopyClipboard from '$lib/components/common/CopyClipboard.svelte';
import WalletHelp from '$lib/components/wallets/WalletHelp.svelte';
import { hex, base64 } from '@scure/base';

const dispatch = createEventDispatcher();
let wallet:string;

export let sigData: { tx: any; outputsForDisplay: Array<any>; inputsForDisplay: Array<any>; };
let hexTx:string;
let b64Tx:string;
let psbt:Uint8Array;
let showTx = false;
let showHex = false;
let copied = false;

const updateWallet = (newWallet:string) => {
  wallet = newWallet;
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
  let txSer = hexTx;
  if (wallet === 'Bitcoin Core') txSer = b64Tx;
  const app = new CopyClipboard({
    target: document.getElementById('clipboard')!,
    props: { name: txSer },
  });
  app.$destroy();
  copied = true;
}

onMount(async () => {
  try {
    psbt = sigData.tx.toPSBT()
    hexTx = hex.encode(psbt);
    b64Tx = base64.encode(psbt);
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
  <div class="text-small d-flex justify-content-end">
    <span class="mx-1"><a href="/" on:click|preventDefault={() => {showHex = !showHex; showTx = false;}}>{#if showHex}<ArrowUp/>{:else}<ArrowDown/>{/if} show raw tx</a></span>
    <span class="mx-1 me-4"><a href="/" on:click|preventDefault={() => {showTx = !showTx; showHex = false;}}>{#if showTx}<ArrowUp/>{:else}<ArrowDown/>{/if} show tx details</a></span>
    <span><a href="/" on:click|preventDefault={() => updateTransaction()}>back</a></span>
  </div>
</section>
  {#if showTx && hexTx}
  <section class="mb-4">
    <h4>Transaction Inputs</h4>
  {#each sigData.inputsForDisplay as input}
  <div class="info-panel text-small mx-1 row bg-light my-1 py-1 text-dark">
    <div class="col-10">{input.txid}:<span class="text-dark">{input.vout}</span></div>
    <div class="col-2">{input.value}</div>
  </div>
  {/each}
  </section>
<section>
  <h4>Transaction Outputs</h4>
  {#each sigData.outputsForDisplay as output, i}
  <div class="info-panel text-small mx-1 row bg-light my-1 py-1 text-danger">
    <div class="col-2">{#if typeof output.amount === 'number'}Output {i + 1}{/if}</div>
    <div class="col-8">
      {#if output.address}<span class="text-dark">{output.address}</span>{/if}
      {#if output.script}<span class="text-dark">{output.script}</span>{/if}
    </div>
    <div class="col-2">{#if output.amount}<span class="text-dark">{output?.amount}</span>{/if}</div>
  </div>
  {/each}
</section>
  {:else if showHex}
    <textarea rows="6" style="padding: 10px; width: 100%;" readonly>{hexTx}</textarea>
  {/if}

<!-- Select Wallet -->
<section>
  <div class="my-5 d-flex justify-content-center">
    <div>
			<ul class="navbar-nav">
				<li class="nav-item dropdown">
					<span class="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Select Wallet
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
    <!-- 
    <div class="my-5 d-flex justify-content-center">
      <div><button class="px-5 btn btn-outline-warning border-radius" on:click={copy}>copy transaction {#if copied}<span class="mx-2"><CheckCircle fill="green" /></span>{/if}</button></div>
    </div>
    -->
    {/if}
  {#if copied}
  <h6>{wallet}</h6>
    <ol>
      <li>Follow the instructions to paste the transaction.</li>
      <li>Sign your transaction.</li>
      <li>Broadcast your transaction.</li>
    </ol>
    <p class=""><span class="text-warning">Note: Double check your wallet displays the correct recipient and amount.</span></p>
    {/if}
    <input bind:value={hexTx} style="visibility:hidden;" />
</section>
{#if copied}
<WalletHelp wallet={getWalletId()} />
{/if}
      
  <style>
  .row {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .btn {
    border-radius: 20px!important;

  }
  </style>