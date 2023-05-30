<script lang="ts">
import { onMount } from 'svelte';
import ReclaimOrRevealTransaction from '$lib/domain/ReclaimOrRevealTransaction';
import { goto } from "$app/navigation";
import { sbtcConfig } from '$stores/stores'
import { hex, base64 } from '@scure/base';
import * as btc from '@scure/btc-signer';
import { doPeginScan, sign, signAndBroadcast } from '$lib/bridge_api';
import { openPsbtRequestPopup } from '@stacks/connect'
import type { PeginRequestI, WrappedPSBT } from 'sbtc-bridge-lib' 
import { toStorable } from 'sbtc-bridge-lib' 
import TrCommit from '$lib/components/reclaim/TrCommit.svelte';
import TrRevealReclaim from '$lib/components/reclaim/TrRevealReclaim.svelte';
import { explorerBtcTxUrl } from '$lib/utils'

// fetch/hydrate data from local storage
export let data:any;
let peginRequest:PeginRequestI = data;
let revealTx:ReclaimOrRevealTransaction;
let reclaimTx:ReclaimOrRevealTransaction;
//let signedTx: btc.Transaction;

let inited = false;
let errorReason:string|undefined;
let reclaimBtcTx:btc.Transaction;
let revealBtcTx:btc.Transaction;
let wrappedPsbt:WrappedPSBT = {} as WrappedPSBT;

const scan = async () => {
	const scan = await doPeginScan();
	location.reload();
}

const doSign = async (tx:Uint8Array) => {
	if (!peginRequest._id) return
	wrappedPsbt = {
		txtype: 'reveal',
		depositId: peginRequest._id
	}
	wrappedPsbt = await sign(wrappedPsbt);
	if (typeof wrappedPsbt.signedTransaction === 'string') {
		console.log('hex: ', wrappedPsbt.signedTransaction)
		console.log('b64: ', wrappedPsbt.signedPsbt)
	}
}

const signReveal = async () => {
	doSign(revealBtcTx.toBytes());
}

const signReclaim = async () => {
	doSign(reclaimBtcTx.toBytes())

	/**
	const hexPsbt = hex.encode(reclaimBtcTx.toPSBT());
	console.log('Reclaim ingoing psbt (hex encoded): ', hexPsbt);
	console.log('Reclaim ingoing psbt (b64 encoded): ', base64.encode(reclaimBtcTx.toPSBT()));
	openPsbtRequestPopup({
		hex: hexPsbt,
		appDetails: {
			name: 'My App',
			icon: window.location.origin + '/my-app-logo.svg',
		},
		onFinish(data:any) {
			broadcastTransaction(data.hex);
		},
		onCancel() {
			console.log('User cancelled operation');
			return;
		}
	});
	*/
}

const broadcastTransaction = async (psbtHex:string) => {
	console.log('psbt (hex encoded): ', psbtHex);
	console.log('psbt (b64 encoded): ', base64.encode(hex.decode(psbtHex)));
	const signedTx = btc.Transaction.fromPSBT(hex.decode(psbtHex), { allowUnknowInput: true, allowUnknowOutput: true });
	//const signedTx = btc.Transaction.fromRaw(hex.decode(psbtHex))
	
	try {
		signedTx.finalize();
		console.log('finalized: ', hex.encode(signedTx.toBytes()));
	} catch (err) {
		console.log('finalize error: ', err)
		errorReason = 'Unable to create the transaction - this can happen if your wallet is connected to a different account to the one your logged in with. Try hitting the \'back\` button, switching account in the wallet and trying again?';
		return;
	}
}

$: signedTx = wrappedPsbt.signedPsbt;

onMount(async () => {
	if (!peginRequest || !peginRequest.commitTxScript || !peginRequest.commitTxScript.tapLeafScript) {
		goto('/deposits');
		return;
	}
	if (typeof peginRequest.commitTxScript.tapLeafScript[0][0].internalKey === 'string') {
		const script = toStorable(peginRequest.commitTxScript)
		peginRequest.commitTxScript = script;
	}
    revealTx = new ReclaimOrRevealTransaction(peginRequest)
    reclaimTx = new ReclaimOrRevealTransaction(peginRequest)

	await revealTx.fetchUtxos(false);
	await reclaimTx.fetchUtxos(true);
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
	inited = true;
})
</script>

<section class=" bg-dark text-white">
	<div class="container my-5 p-5">
	{#if inited}
			<div class="row">
				<div class="col">
					<h1>sBTC Deposit</h1>
				</div>
			</div>			

			<TrCommit {peginRequest}/>
			{#if signedTx}
			<div class="row">
				<div class="col">
				  <div class="d-flex justify-content-between">
					<span>Signed Raw Tx</span>
				  </div>
				  <textarea rows="6" style="padding: 10px; width: 100%;" readonly>{hex.encode(hex.decode(signedTx))}</textarea>
				  <textarea rows="6" style="padding: 10px; width: 100%;" readonly>{hex.encode(hex.decode(signedTx))}</textarea>
				</div>
			</div>
			{/if}
			{#if peginRequest.status === 4 && peginRequest.reclaim}
			<div class="row my-4">
				<div class="col-md-2 col-sm-12">Reclaimed</div>
				<div class="col-md-10 col-sm-12"><a href={explorerBtcTxUrl(peginRequest.reclaim.btcTxid)} target="_blank" rel="noreferrer">{(peginRequest.reclaim.btcTxid)}</a></div>
			</div>
			{:else if peginRequest.status === 3 && peginRequest.reveal}
			<div class="row my-4">
				<div class="col-md-2 col-sm-12">Revealed</div>
				<div class="col-md-10 col-sm-12"><a href={explorerBtcTxUrl(peginRequest.reveal.btcTxid)} target="_blank" rel="noreferrer">{(peginRequest.reveal.btcTxid)}</a></div>
			</div>
			{:else if peginRequest.status === 2}
			<div class="row my-5">
				<div class="col-6">
					<button class="btn btn-outline-info w-100" type="button" on:click={() => signReclaim()}>Reclaim Deposit</button>
				</div>
				{#if $sbtcConfig.userSettings.debugMode}
				<div class="col-6">
					<button class="btn btn-outline-info w-100" type="button" on:click={() => signReveal()}>Reveal</button>
				</div>
				{/if}
			</div>
			<TrRevealReclaim {peginRequest} {reclaimBtcTx} {revealBtcTx}/>
			{:else if peginRequest.status === 1}
			<div class="row my-5">
				<div class="col">
					Waiting for commit tx to be broadcast - <a href="/" on:click|preventDefault={() => scan()}>click to scan</a>
				</div>
			</div>
			{/if}
	{:else}
		<div class="card-width">
			<div class="my-3 d-flex justify-content-between">Loading data..</div>
		</div>
	{/if}
	{#if errorReason}
	<div class="card-width">
		<div class="my-3 d-flex justify-content-between">{@html errorReason}</div>
	</div>
	{/if}
</div>
</section>

<style>
section {
	display: flex;
	flex-direction: column;
	justify-content: top;
	align-items: center;
	flex: 0.6;
	min-height: 90vh;
}
h1 {
	width: 100%;
}
</style>