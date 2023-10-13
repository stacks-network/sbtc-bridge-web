<script lang="ts">
import { onMount } from 'svelte';
import { goto } from "$app/navigation";
import { CONFIG } from '$lib/config';
import type { BridgeTransactionType, WrappedPSBT } from 'sbtc-bridge-lib' 
import { signMessage } from '$lib/stacks_connect';
import { explorerBtcTxUrl } from '$lib/utils'
import { sbtcConfig } from '$stores/stores'
import Button from '$lib/components/shared/Button.svelte';
import { sign } from '$lib/bridge_api';
import type { Transaction } from '@scure/btc-signer';
import { toStorable, buildRevealOrReclaimTransaction, getPegWalletAddressFromPublicKey } from 'sbtc-bridge-lib' 
import { Popover } from 'flowbite-svelte';
import { a_primary } from '$lib/css_utils';
import Invoice from '$lib/components/dashboard/shared/Invoice.svelte';
import { fetchUtxoSet, fetchTransaction } from '$lib/bridge_api'

export let peginRequest:BridgeTransactionType;
let wrappedPsbt:WrappedPSBT = {} as WrappedPSBT;
let revealTx:Transaction;
let reclaimTx:Transaction;
let reclaiming = false;
let errorMessage:string|undefined = undefined;

const network = CONFIG.VITE_NETWORK;
let inited = false;
//let addressInfoReclaim: any;
//let addressInfoReveal: any;
let commitTransaction:any;

const doSign = async (txtype:string, sigData:any, message:string, tx:Uint8Array) => {
	if (!peginRequest._id) return
	wrappedPsbt = {
		txtype,
		stxSignature: {
			signature: sigData.signature,
			publicKey: sigData.publicKey,
			message: message
		},
		depositId: peginRequest._id
	}
	wrappedPsbt = await sign(wrappedPsbt);
	if (wrappedPsbt.broadcastResult) {
		if (wrappedPsbt.broadcastResult.failed) {
			errorMessage = wrappedPsbt.broadcastResult.reason;
		} else if (wrappedPsbt.broadcastResult.error) {
			errorMessage = 'Commitment transaction is not yet confirmed.. try again in 60 minutes.' //wrappedPsbt.broadcastResult.error;
		}
	}
	if (typeof wrappedPsbt.signedTransaction === 'string') {
		console.log('hex: ', wrappedPsbt.signedTransaction)
		console.log('b64: ', wrappedPsbt.signedPsbt)
	}
}

const signReveal = async () => {
  const script = 'Reclaim my deposit to ' + peginRequest.uiPayload.bitcoinAddress;
  await signMessage(async function(sigData:any, message:string) {
    doSign('reveal', sigData, (message), revealTx.toBytes())
  }, script);
}

const signReclaim = async () => {
  const script = 'Reclaim my deposit to ' + peginRequest.uiPayload.bitcoinAddress;
  await signMessage(async function(sigData:any, message:string) {
    doSign('reclaim', sigData, (message), reclaimTx.toBytes())
  }, script);
}

onMount(async () => {
	if (!peginRequest) {
		goto('/transactions');
		return;
	}
	if (peginRequest.commitTxScript) {
		if (typeof peginRequest.commitTxScript.tapLeafScript[0][0].internalKey === 'string') {
			const script = toStorable(peginRequest.commitTxScript)
			peginRequest.commitTxScript = script;
		}
	}
	//addressInfoReveal = await fetchUtxoSet(peginRequest.uiPayload.bitcoinAddress)
	//addressInfoReclaim = await fetchUtxoSet(getPegWalletAddressFromPublicKey(CONFIG.VITE_NETWORK, $sbtcConfig.sbtcContractData.sbtcWalletPublicKey)!)
	if (peginRequest.btcTxid) commitTransaction = await fetchTransaction(peginRequest.btcTxid);
	peginRequest.originator = commitTransaction.vout[1].scriptPubKey.address
	reclaimTx = buildRevealOrReclaimTransaction(network, 100, true, peginRequest, commitTransaction)
	revealTx = buildRevealOrReclaimTransaction(network, 100, true, peginRequest, commitTransaction)

	//peginRequest.requestType = 'reclaim';
	//reclaimBtcTx.fee;
	inited = true;
})
</script>
<Popover class="w-64 text-sm font-light " title="Reclaims" triggeredBy="#po-sign-reclaim">
  If you haven't received you're sBTC within 144 blocks (approx 1 day) you can reclaim your deposit.
</Popover>
<Popover class="w-64 text-sm font-light " title="Reclaims" triggeredBy="#po-sign-reveal">
  For testing the reveal process.
</Popover>

<div class="w-full flex justify-between align-middle">
  <div aria-hidden="true" class=" " on:keyup on:click={() => goto('/transactions')}>
    <h1 class="text-3xl font-medium">Details</h1>
  </div>
  <div class="flex gap-x-2 justify-end">
    {#if $sbtcConfig.userSettings.debugMode}
    <div id="po-sign-reveal"><Button darkScheme={false} label={'Reveal'} target={'signReveal'} on:clicked={() => signReveal()}/></div>
    {/if}
  </div>
</div>
<p class="">
	Thanks for <a href={explorerBtcTxUrl(peginRequest.btcTxid)} target="_blank" rel="noreferrer" class={a_primary}>depositing</a> Bitcoin.
</p>
<p class="">
	Your sBTC will materialise in your Stacks Web Wallet within 24 hours - if not you can <a href="/" class={a_primary} on:keyup on:click|preventDefault={() => reclaiming = !reclaiming}>reclaim</a> your bitcoin and have it sent back to your Web Wallet.
	The <a class={a_primary} href="https://stacks.org" target="_blank">Stacks Foundation</a> maintains a list of accredited projects where you can put your sBTC to work.
</p>
<p class="">
	If the sBTC fails to turn up within 24 hours of your deposit you can <span id="po-sign-reclaim"><a href="/" class={a_primary} on:keyup on:click|preventDefault={() => reclaiming = !reclaiming}>click here to initiate</a></span> an automatic refund.
</p>

{#if inited && reclaiming}
<p class="">Reclaim your deposit by signing a message containing your Bitcoin address - we will return your funds - less Bitcoin transaction fees.
</p>
<Invoice {peginRequest} psbtB64={undefined} psbtHex={undefined}/>
{#if errorMessage}<p class="text-error-500">{errorMessage}</p>{/if}
<div id="po-sign-reclaim" class="mb-5"><Button darkScheme={false} label={'Reclaim funds'} target={'signReclaim'} on:clicked={() => signReclaim()}/></div>
{/if}