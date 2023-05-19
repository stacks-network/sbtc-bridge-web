<script lang="ts">
import { onMount } from 'svelte';
import ReclaimOrRevealTransaction from '$lib/domain/ReclaimOrRevealTransaction';
import { goto } from "$app/navigation";
import { hexToBytes } from "@stacks/common";
import { sbtcConfig } from '$stores/stores'
import { hex, base64 } from '@scure/base';
import * as btc from '@scure/btc-signer';
import { doPeginScan } from '$lib/bridge_api';
import { openPsbtRequestPopup } from '@stacks/connect'
import type { PeginRequestI } from 'sbtc-bridge-lib/src/index' 
import TrCommit from '$lib/components/reclaim/TrCommit.svelte';
import { toStorable } from '$lib/utils'

// fetch/hydrate data from local storage
export let data:any;
let peginRequest:PeginRequestI = data;
let revealTx:ReclaimOrRevealTransaction;
let reclaimTx:ReclaimOrRevealTransaction;

let inited = false;
let errorReason:string|undefined;
let reclaimBtcTx:btc.Transaction;
let revealBtcTx:btc.Transaction;

const scan = () => {
	doPeginScan();
}

const b64Reveal = () => {
	try {
		return base64.encode(revealBtcTx.toPSBT());
	} catch (err:any) {
		return err.message
	}
}

const b64Reclaim = () => {
	try {
		return base64.encode(reclaimBtcTx.toPSBT());
	} catch (err:any) {
		return err.message
	}
}

const rawReveal = () => {
	try {
		return hex.encode(revealBtcTx.toBytes());
	} catch (err:any) {
		return err.message
	}
}

const rawReclaim = () => {
	try {
		return hex.encode(reclaimBtcTx.toBytes());
	} catch (err:any) {
		return err.message
	}
}

const openBackView = () => {
	goto('/listReclaims');
}

const signReclaim = async () => {
	const hexPsbt = hex.encode(reclaimBtcTx.toPSBT());
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
}

const signReveal = async () => {
	const hexPsbt = hex.encode(revealBtcTx.toPSBT());
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
}

const broadcastTransaction = async (psbtHex:string) => {
	const tx = btc.Transaction.fromPSBT(hexToBytes(psbtHex));
	const psbt = tx.toPSBT();
	//const psbtBytes = hex.encode(revealTx.tx.toBytes());
	console.log('hex: ' + hex.encode(psbt));
	console.log('base64: ' + base64.encode(psbt));
	try {
		//tx.finalize();
		console.log('finalized: ', tx);
	} catch (err) {
		console.log('finalize error: ', err)
		errorReason = 'Unable to create the transaction - this can happen if your wallet is connected to a different account to the one your logged in with. Try hitting the \'back\` button, switching account in the wallet and trying again?';
		return;
	}
}

onMount(async () => {
	if (!peginRequest || !peginRequest.commitTxScript) {
		goto('/listReclaims');
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
			{#if peginRequest.status === 2}
			<div class="row my-5">
				{#if $sbtcConfig.userSettings.debugMode}
				<div class="col">
					<button class="btn btn-outline-info w-100" type="button" on:click={() => signReveal()}>Sign Reveal</button>
				</div>
				{/if}
				<div class="col">
					<button class="btn btn-outline-info w-100" type="button" on:click={() => signReclaim()}>Sign Reclaim</button>
				</div>
			</div>
			{/if}
			{#if peginRequest.status < 3}
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
	{#if revealBtcTx}
	<div class="row my-4">
		<div class="col">
			<h2>Reveal PSBT (Base 64)</h2>
			<textarea rows="6" style="padding: 10px; width: 100%;" readonly>{b64Reveal()}</textarea>
		</div>
	</div>
	<div class="row my-4">
		<div class="col">
			<h2>Reveal Tx (Raw Hex)</h2>
			<textarea rows="6" style="padding: 10px; width: 100%;" readonly>{rawReveal()}</textarea>
		</div>
	</div>
	<div class="row my-4">
		<div class="col">
			<h2>Reclaim Tx (Base 64)</h2>
			<textarea rows="6" style="padding: 10px; width: 100%;" readonly>{b64Reclaim()}</textarea>
		</div>
	</div>
	<div class="row my-4">
		<div class="col">
			<h2>Reclaim Tx (Raw Hex)</h2>
			<textarea rows="6" style="padding: 10px; width: 100%;" readonly>{rawReclaim()}</textarea>
		</div>
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