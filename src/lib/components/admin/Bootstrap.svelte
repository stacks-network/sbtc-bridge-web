<script lang="ts">
import { openContractCall, type ContractCallRegularOptions } from '@stacks/connect';
import { CONFIG } from '$lib/config'
import {
	boolCV,
  contractPrincipalCV,
  listCV,
  tupleCV
} from '@stacks/transactions';
import { appDetails, getStacksNetwork } from '$lib/stacks_connect';
import { explorerTxUrl } from '$lib/utils';
import { sbtcMiniContracts, type SbtcMiniContractsI } from 'sbtc-bridge-lib';

let txId:string;

function getValue(key: keyof SbtcMiniContractsI) {
    return sbtcMiniContracts[key]
}

const getContracts = function () {
	const entryList = [];
	for (let key in sbtcMiniContracts) {
		const tupCV = tupleCV({
			enabled: boolCV(true),
			contract: contractPrincipalCV(CONFIG.VITE_SBTC_MINI_DEPLOYER, getValue(key)),
		});
    	entryList.push(tupCV);
	}
  	return [listCV(entryList)];
};

const bootstrap = async () => {
	const options:ContractCallRegularOptions = {
		contractAddress: CONFIG.VITE_SBTC_MINI_DEPLOYER,
		contractName: sbtcMiniContracts.controller,
		functionName: 'upgrade',
		functionArgs: getContracts(),
		appDetails: appDetails(),
		network: getStacksNetwork(),
		onFinish: (data:any) => {
			console.log('Stacks Transaction:', data.stacksTransaction);
			txId = data.txId;
			console.log('Raw transaction:', data.txRaw);
		},
	};
	await openContractCall(options);
}

</script>

<div class="flex gap-2 mb-2 items-center justify-center">
	{#if txId}
	<div class="text-base text-white font-extralight">
		<a href={explorerTxUrl(txId)} target="_blank">open in explorer</a>
	</div>
	{:else}
	<div class="text-base text-white font-extralight">
		<button on:click={() => bootstrap()} class="inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 shrink-0">
			Bootstrap sBTC Mini
		</button>
	</div>
	{/if}
</div>

<!--
{#if CONFIG.VITE_NETWORK === "testnet"}
	<Banner
		bannerType={'info'}
		message={'Don\'t have testnet Bitcoin? <a class="underline" href="https://bitcoinfaucet.uo1.net/" target="_blank">Get some to get started!</a>'}
	/>
{/if}
<div class="mt-4">
  <Button on:click={() => toggleNetwork()} class="block w-full md:w-auto md:inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 shrink-0">
  	Switch network
  </Button>
</div>
-->