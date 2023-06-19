<script lang="ts">
import { onMount } from 'svelte';
import ReclaimOrRevealTransaction from '$lib/domain/ReclaimOrRevealTransaction';
import { goto } from "$app/navigation";
import { sbtcConfig } from '$stores/stores'
import { hex, base64 } from '@scure/base';
import * as btc from '@scure/btc-signer';
import { sign } from '$lib/bridge_api';
import type { PeginRequestI, WrappedPSBT } from 'sbtc-bridge-lib' 
import { toStorable } from 'sbtc-bridge-lib' 
import TrCommit from '$lib/components/transactions/TrCommit.svelte';
import TrRevealReclaim from '$lib/components/transactions/TrRevealReclaim.svelte';
import { explorerBtcTxUrl } from '$lib/utils'
import Button from '$lib/components/shared/Button.svelte';
import { ChevronLeft } from 'svelte-heros-v2';
import PendingDeposit from '$lib/components/transactions/PendingDeposit.svelte';
import CommittedDeposit from '$lib/components/transactions/CommittedDeposit.svelte';

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
    revealTx = new ReclaimOrRevealTransaction(peginRequest)
    reclaimTx = new ReclaimOrRevealTransaction(peginRequest)

	/**
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
	**/
	inited = true;
})
</script>


<div class="mx-auto flex flex-col justify-center">
	<div class="mx-auto max-w-2xl">
		<div class="flex justify-between mb-10">
			<div class="flex w-2/3 align-middle cursor-pointer" on:keyup on:click={() => goto('/transactions')}>
				<ChevronLeft size="20" class=" dark:text-white"/> Back to Transaction history
			</div>
		</div>
		<div class="flex flex-col p-5 gap-2 items-start bg-gray-1000 border-[0.5px] border-gray-700 rounded-3xl">
			
			{#if peginRequest.status === 1}
				<PendingDeposit {peginRequest}/>
			{:else if peginRequest.status === 2}
				<CommittedDeposit {peginRequest}/>
			{:else}
			
			<div class="mb-5 flex justify-between align-middle">
				<div class=" " on:keyup on:click={() => goto('/transactions')}>
					<h1 class="text-3xl font-medium">Details</h1>
				</div>
				{#if peginRequest.status === 2}
				<div class="flex">
					{#if $sbtcConfig.userSettings.debugMode}
					<div class=""><Button darkScheme={false} label={'Reveal'} target={'signReveal'} on:clicked={() => signReveal()}/></div>
					{/if}
					<Button darkScheme={true} label={'Reclaim funds'} target={'signReclaim'} on:clicked={() => signReclaim()}/>
				</div>
				{/if}
			</div>
	
			<div class="flex flex-col gap-10">
				{#if inited}
				<TrCommit {peginRequest}/>
				{#if signedTx}
				<div class="grid grid-cols-12">
					<div class="col-span-12">
						<div class="d-flex justify-content-between">
							<span>Signed Raw Tx</span>
						</div>
						<textarea rows="6" style="padding: 10px; width: 100%;" readonly>{hex.encode(hex.decode(signedTx))}</textarea>
						<textarea rows="6" style="padding: 10px; width: 100%;" readonly>{hex.encode(hex.decode(signedTx))}</textarea>
					</div>
				</div>
				{/if}
				{#if peginRequest.status === 4 && peginRequest.reclaim}
				<div class="grid grid-cols-12 my-4">
					<div class="md:grid-cols-2 grid-cols-12">Reclaimed</div>
					<div class="md:grid-cols-10 grid-cols-12"><a href={explorerBtcTxUrl(peginRequest.reclaim.btcTxid)} target="_blank" rel="noreferrer">{(peginRequest.reclaim.btcTxid)}</a></div>
				</div>
				{:else if peginRequest.status === 3 && peginRequest.reveal}
				<div class="grid grid-cols-12 my-4">
					<div class="md:grid-cols-2 grid-cols-12">Revealed</div>
					<div class="md:grid-cols-10 grid-cols-12"><a href={explorerBtcTxUrl(peginRequest.reveal.btcTxid)} target="_blank" rel="noreferrer">{(peginRequest.reveal.btcTxid)}</a></div>
				</div>
				{:else if peginRequest.status === 2}
				<TrRevealReclaim {peginRequest} {reclaimBtcTx} {revealBtcTx}/>
				{/if}
				{:else}
				<div class="flex justify-between">Loading data..</div>
				{/if}
				{#if errorReason}<div class="flex justify-between">{@html errorReason}</div>{/if}
			</div>
			{/if}
		</div>
	</div>
</div>

