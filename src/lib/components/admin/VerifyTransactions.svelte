<script lang="ts">
import { uintCV, bufferCVFromString, listCV, bufferCV, serializeCV } from '@stacks/transactions';
import { tupleCV } from '@stacks/transactions/dist/esm/clarity/index.js';
import Button from "../shared/Button.svelte";
import { callContractReadOnly } from '$lib/sbtc_admin';
import { hex } from '@scure/base';
import { onMount } from 'svelte';
import { getProofParametersCM, type TxMinedParameters } from '$lib/proofs/merkle_root';
import { sha256 } from '@noble/hashes/sha256';
import { generateMerkleRoot, generateMerkleTree } from '$lib/proofs/utils-merkle-coinmonks';
	import { explorerAddressUrl } from '$lib/utils';
	import { doubleSha } from '$lib/proofs/utils-merkle';

/**
proofs = (
0x268c873b99d12a8ea0c87e05de4ac98b16398217abc97f79b94bd9bea35a5ce6 
0xa26c0adbdd5400d76e12dfc5412d08df244085f538fee7c5c5a2e419caf0450a 
0x45cc4022c36723ff1e4f9ee1a1529b5ffff1cf1121f326145505f52ae6b6ea19 
0xe6b607cb87927805a43058e0d5ddfd61249c40b622037a074ec3c76eb48a6416 
0xcba219199a82ffedd0f4582b11e05e4940cf7873c655f4225e7a88e98d883479 
0xc8409d8249608a85ce79705d7df877b12079dd6b28ad416b801844bfa9cf810a 
0xf5d5ea2d88e8f71b5e34256cc206c44e93258b301b8d94f5bed4f601377e6e36
block_header = 
0x00600120d2119865b5b567cec541f80c7657e0d956cb5934e203ade332000000000000005fe61766d52c5452bfe45ffcf0536fe7f94a84c4a1c20f300e714c9385956b0364861165c0ff3f1911761e93
  00600120d2119865b5b567cec541f80c7657e0d956cb5934e203ade332000000000000005fe61766d52c5452bfe45ffcf0536fe7f94a84c4a1c20f300e714c9385956b0364861165c0ff3f1911761e93
tx-index=40
tree-depth=7
txid=01d8467b25e1d415bf53427d4db86fe001590b280b604204f794c5ecfc923ed3
**/

export let tx:any;
export let block:any;
let showTree = false;
let contract = 'ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5.clarity-bitcoin-romeo'
let merkleTree:Array<Array<string>>
let parameters:TxMinedParameters;
let proofString:string|undefined;
let proofs:Array<any>;
let error:string|undefined;
let answer:any;
let blockHashCheck = false;
let merkleRootCheck = false;
let inited = false;
let functionName:string;

const getProofs = function () {
  const entryList = [];
  const proofsJ = []
  proofsJ.push('108f70d3c1099ce35d8d4f90aba39ad6a3cde97c26ac5489ebd47eed73ae0c5b')
  proofsJ.push('0b8ef36ee67679f9c382ebd01196f99c7638875ccf7170483ed8659a1cde8014')
  proofsJ.push('d327f83e5b363f8a20b9047661439227719bb33847e49a5091af6bf7f70cf88e')
  proofsJ.push('56a8324520dc43cb718ad61f34ec77485b39751bc5aa40e328524f5895e98a4a')
  const merkleProofs = parameters.proofElements.map(({ hash }) => hash)
  for (let i = 0; i < merkleProofs.length; i++) {
    const entry = merkleProofs[i];
    const buffProof = bufferCV(hex.decode(entry));
    entryList.push(buffProof);
  }
  const datum = tupleCV({
    'tx-index': uintCV(parameters.txIndex),
    'tree-depth': uintCV(parameters.treeDepth),
    'hashes': listCV(entryList)
  });

  return datum;
};

const wasTxMined = async () => {
  const txid = tx.txid
  const functionArgs = [
    `0x${hex.encode(serializeCV(uintCV(parameters.height)))}`,
    `0x${hex.encode(serializeCV(bufferCV(hex.decode(tx.txid))))}`,
    `0x${hex.encode(serializeCV(bufferCV(hex.decode(parameters.headerHex))))}`,
    `0x${hex.encode(serializeCV(getProofs()))}`,
  ];
  
  functionName = 'was-txid-mined'
  const params = {
    contractAddress: 'ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5',
    contractName: 'clarity-bitcoin-romeo',
    functionName: 'was-txid-mined',
    functionArgs
  }

  const res = await callContractReadOnly(params);
  if (res && res.success) {
    answer = 'Result: ' + res.value.value
  } else {
    answer = 'Result error: u' + res.value.value
  }
  console.log(answer)
}

const verifyBlockHeader = async () => {
  console.log('parameters.headerHex: ' + parameters.headerHex.length)
  console.log('parameters.headerHex: ' + hex.decode(parameters.headerHex).length)
  const txid = tx.txid
  const functionArgs = [
    `0x${hex.encode(serializeCV(bufferCV(hex.decode(parameters.headerHex))))}`,
    `0x${hex.encode(serializeCV(uintCV(parameters.height)))}`,
  ];
  
  functionName = 'verify-block-header'
  const params = {
    contractAddress: 'ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5',
    contractName: 'clarity-bitcoin-romeo',
    functionName: 'verify-block-header',
    functionArgs
  }

  const res = await callContractReadOnly(params);
  if (res && res.success) {
    answer = 'Result: ' + res.value.value
  } else {
    answer = 'Result: ' + res.value
  }
  console.log(answer)
}

const verifyMerkleProof = async () => {
  const txid = tx.txid
  const functionArgs = [
    `0x${hex.encode(serializeCV(bufferCV(hex.decode(tx.txid).reverse())))}`,
    `0x${hex.encode(serializeCV(bufferCV(hex.decode(block.merkleroot))))}`,
    `0x${hex.encode(serializeCV(getProofs()))}`,
  ];
  
  functionName = 'verify-merkle-proof'
  const params = {
    contractAddress: 'ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5',
    contractName: 'clarity-bitcoin-romeo',
    functionName: 'verify-merkle-proof',
    functionArgs
  }

  const res = await callContractReadOnly(params);
  if (res && res.success) {
    answer = 'Result: ' + res.value.value
  } else {
    answer = 'Result: ' + res.value
  }

  console.log(answer)
}

onMount(async () => {
  const txIds = block.tx.map(function(tx:any) {
    return hex.encode(hex.decode(tx.txid).reverse()) //hexReverse(tx.txid)
  });
  answer = undefined
  console.log('tx0-r: ' + txIds[0])

  const mrT = generateMerkleRoot(txIds)
  //if (hex.encode(hex.decode(mrT).reverse()) !== block.merkleroot) throw new Error('Merkle root error')
  merkleTree = generateMerkleTree(txIds)
  console.log('mr0: ' + block.merkleroot)
  console.log('mrT: ' + mrT)
  parameters = getProofParametersCM(tx.txid, tx.hex, block)
  proofs = parameters.proofElements
  blockHashCheck = block.hash === hex.encode( sha256(sha256(hex.decode(parameters.headerHex))).reverse() )
  merkleRootCheck = block.merkleroot === mrT

  proofString = parameters.proofElements.map(({ hash }) => hash).join(' ')
  answer = undefined
  inited = true;
})

</script>

{#if inited}
<div class=" w-full">
  <div class="mb-5 text-2xl">Verify transactions</div>
  {#if error}<p class="text-danger">{error}</p>{/if}
  <div class="pb-5">
    <label for="transact-path">Merkle root (block.merkleroot === calcMerkleRoot(txs))</label>
    <div class={(blockHashCheck) ? 'bg-success-500 text-white px-4 py-2 rounded border-success-500' : 'bg-gray-600 text-white px-4 py-2 rounded border-white'}>{block.merkleroot}</div>
  </div>
  {#if answer}
    <div class="mb-5">{functionName}</div>
    <div class="mb-5">{@html answer}</div>
  {/if}


  <div class="pb-5">
    <label for="transact-path">Block hash = reverse(sha(sha(header)))</label>
    <div  class={(blockHashCheck) ? 'bg-success-500 text-white px-4 py-2 rounded border-success-500' : 'bg-gray-600 text-white px-4 py-2 rounded border-white'}>{block.hash}</div>
  </div>
  <div class="pb-5">
    <label for="transact-path">header</label>
    <input type="text"  class="text-black block p-3 rounded-md border w-full" bind:value={parameters.headerHex}/>
  </div>
  <div class="pb-5">
    <label for="transact-path">height</label>
    <input type="number" class="text-black block p-3 rounded-md border w-full" bind:value={parameters.height}/>
  </div>

  <div class="pb-5">
    <label for="transact-path">txIndex</label>
    <input type="text"  class="text-black block p-3 rounded-md border w-full" bind:value={parameters.txIndex}/>
  </div>

  <div class="pb-5">
    <label for="transact-path">treeDepth</label>
    <input type="number"  class="text-black block p-3 rounded-md border w-full" bind:value={parameters.treeDepth}/>
  </div>

  <div class="p-5 bg-gray-200 text-black rounded-lg border-gray-700">
    <div class="text-2xl">Proof:</div>
    {#each parameters.proofElements as node}
    <div class="">{node.direction} : {node.hash}</div>
    {/each}
    <!--<textarea rows="8" class="text-black block p-3 rounded-md border w-full" bind:value={proofString} />-->
  </div>

  <div class="my-5 flex gap-x-5">
    <div class=""><Button darkScheme={false} label={'Was Tx Mined'} target={''} on:clicked={() => wasTxMined()}/></div>
    <div class=""><Button darkScheme={false} label={'Verify Block Header'} target={''} on:clicked={() => verifyBlockHeader()}/></div>
    <div class=""><Button darkScheme={false} label={'Verify Merkle Proof'} target={''} on:clicked={() => verifyMerkleProof()}/></div>
    <div class=""><Button darkScheme={false} label={'Show full tree'} target={''} on:clicked={() => showTree = !showTree}/></div>
    <div class=""><a href={explorerAddressUrl(contract)} target="_blank">contract</a></div>
  </div>
  {#if answer}
    <div class="mb-5">{functionName}</div>
      <div class="mb-5">{@html answer}</div>
  {/if}


  {#if showTree}
  <div class="p-5 bg-gray-200 text-black rounded-lg border-gray-700">
    <div class="text-2xl">Tree:</div>
    {#each merkleTree.reverse() as nodes, index}
      {#each nodes as node}
        <div>{index} : {node}</div>
      {/each}
    {/each}
    <!--<textarea rows="8" class="text-black block p-3 rounded-md border w-full" bind:value={proofString} />-->
  </div>
  {/if}


</div>
{/if}