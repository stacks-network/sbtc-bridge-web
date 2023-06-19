<script lang="ts">
import { onMount } from 'svelte';
import { goto } from "$app/navigation";
import ReclaimOrRevealTransaction from '$lib/domain/ReclaimOrRevealTransaction';
import type { PeginRequestI, WrappedPSBT } from 'sbtc-bridge-lib' 
import { signMessage } from '$lib/stacks_connect';
import { explorerBtcTxUrl } from '$lib/utils'
import { sbtcConfig } from '$stores/stores'
import Button from '$lib/components/shared/Button.svelte';
import { sign } from '$lib/bridge_api';
import * as btc from '@scure/btc-signer';
import { toStorable } from 'sbtc-bridge-lib' 
import { Popover } from 'flowbite-svelte';
import { a_primary } from '$lib/css_utils';
import Invoice from '../deposit/Invoice.svelte';

export let peginRequest:PeginRequestI;
let wrappedPsbt:WrappedPSBT = {} as WrappedPSBT;
let revealTx:ReclaimOrRevealTransaction;
let reclaimTx:ReclaimOrRevealTransaction;
let reclaiming = false;
let errorMessage:string|undefined = undefined;

let inited = false;
let reclaimBtcTx:btc.Transaction;
let revealBtcTx:btc.Transaction;

const doClicked = async (event:any) => {
}

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
	if (wrappedPsbt.broadcastResult && wrappedPsbt.broadcastResult.failed) {
		errorMessage = wrappedPsbt.broadcastResult.reason;
	}
	if (typeof wrappedPsbt.signedTransaction === 'string') {
		console.log('hex: ', wrappedPsbt.signedTransaction)
		console.log('b64: ', wrappedPsbt.signedPsbt)
	}
}

const signReveal = async () => {
  const script = 'Reclaim my deposit to ' + peginRequest.fromBtcAddress;
  await signMessage(async function(sigData:any, message:string) {
    doSign('reveal', sigData, (message), revealBtcTx.toBytes())
  }, script);
}

const signReclaim = async () => {
  const script = 'Reclaim my deposit to ' + peginRequest.fromBtcAddress;
  await signMessage(async function(sigData:any, message:string) {
    doSign('reclaim', sigData, (message), reclaimBtcTx.toBytes())
  }, script);
}


$: signedTx = wrappedPsbt.signedPsbt;

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
  	const address = btc.Address()
  	revealTx = new ReclaimOrRevealTransaction(peginRequest)
  	reclaimTx = new ReclaimOrRevealTransaction(peginRequest)

	await revealTx.fetchUtxos(false, $sbtcConfig.btcFeeRates, $sbtcConfig.sbtcWalletAddressInfo);
	await reclaimTx.fetchUtxos(true, $sbtcConfig.btcFeeRates, $sbtcConfig.sbtcWalletAddressInfo);
	if (revealTx.transaction && revealTx.transaction.vout && revealTx.transaction.vout.length > 1) {
		peginRequest.senderAddress = revealTx.transaction.vout[1].scriptPubKey.address
	}
	try {
		if (revealTx.commitTx.btcTxid) {
			revealBtcTx = revealTx.buildTransaction(false);
			reclaimBtcTx = reclaimTx.buildTransaction(true);
		}
	} catch(err) {
		console.error('Creating transaction failed: ', err)
	}
	peginRequest.requestType = 'reclaim';
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
  <div class=" " on:keyup on:click={() => goto('/transactions')}>
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
	Your sBTC will materialise in your Stacks Web Wallet within 24 hours - if not you can use the reclaim button above to get your bitcoin sent back to your Web Wallet.
	The <a class={a_primary} href="https://stacks.org" target="_blank">Stacks Foundation</a> maintains a list of accredited projects where you can put your sBTC to work.
</p>
<p class="">
	If the sBTC fails to turn up within 24 hours of your deposit you can <span id="po-sign-reclaim"><a href="/" class={a_primary} on:keyup on:click|preventDefault={() => reclaiming = !reclaiming}>click here to initiate</a></span> an automatic refund.
</p>

{#if inited && reclaiming}
<p class="">Reclaim your deposit by signing a message containing your Bitcoin address - we will return your funds - less Bitcoin transaction fees.
</p>
<Invoice {peginRequest}/>
{#if errorMessage}<p class="text-error-500">{errorMessage}</p>{/if}
<div id="po-sign-reclaim"><Button darkScheme={false} label={'Reclaim funds'} target={'signReclaim'} on:clicked={() => signReclaim()}/></div>
{/if}