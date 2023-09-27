import { MerkleTree, doubleSha, hexReverse,  } from './utils-merkle';
import { hex } from '@scure/base';
import { ensureEven, generateMerkleProof, generateMerkleTree } from './utils-merkle-coinmonks';

//const bitcoinExplorerUrl = "http://devnet:devnet@localhost:8001";

export type TxMinedParameters = {
  proofElements:Array<any>;
  height: number;
  txIndex: number;
  headerHex:string;
  txIdR:string;
  treeDepth:number;
}

export function getProofParametersCM(txIdNormal:string, txHex:string, block:any):TxMinedParameters {
  // coinmonks...
  const txs = block.tx as string[];
  const txIndex = txs.findIndex((t:any) => t.txid === txIdNormal);
  const reversedTxIds = txs.map(function(tx:any) {
    return tx.txid;
  });
  ensureEven(reversedTxIds) 
  //const tree = generateMerkleRoot(reversedTxIds)
  const mt = generateMerkleTree(reversedTxIds);
  const proofElements = generateMerkleProof(reversedTxIds[txIndex], reversedTxIds)
  if (!proofElements) return {} as TxMinedParameters
  //console.log('merkleTree: ', mt);
  //console.log('Coinmonks tree: ', tree)
  console.log('Coinmonks proof: ', proofElements)

  const parameters:TxMinedParameters = {
    proofElements,
    height:block.height,
    txIndex,
    headerHex: headerHex(block),
    txIdR: txIdNormal,
    treeDepth: mt.length - 1
  }
  return parameters
}

/**
 * Thanks due to @Setzeus and @Friedger !
 * @param txIdNormal 
 * @param txHex 
 * @param block 
 * @returns 
 */
export function getProofParameters(txIdNormal:string, txHex:string, block:any):TxMinedParameters {
  const txIdR = hexReverse(hex.encode(doubleSha(txHex)));

  // get transaction details
  //const txDetails = await fetch(`${bitcoinExplorerUrl}/api/tx/${txId}`).then(
  //  (r) => r.json()
  //);
  //const txHex = txDetails.hex;

  //if (txHex !== txIdNormal) throw new Error("Transaction not found");

  // get block details
  //const blockhash = txDetails.blockhash;
  //const block = await fetch(
  //  `${bitcoinExplorerUrl}/api/block/${blockhash}`
  //).then((r) => r.json());

  //39:9b59d65d5458f2d3b10dd4eed3099b274af74d1ff95961cded9dbd6c5c08d3ef
  //40:01d8467b25e1d415bf53427d4db86fe001590b280b604204f794c5ecfc923ed3
  //41:45ebba318f9b459d48405db30b5e1ccb465ef363a3dc11a7cf6901f2e1bf3fd1
  
  //proofs = (0x268c873b99d12a8ea0c87e05de4ac98b16398217abc97f79b94bd9bea35a5ce6 0xa26c0adbdd5400d76e12dfc5412d08df244085f538fee7c5c5a2e419caf0450a 0x45cc4022c36723ff1e4f9ee1a1529b5ffff1cf1121f326145505f52ae6b6ea19 0xe6b607cb87927805a43058e0d5ddfd61249c40b622037a074ec3c76eb48a6416 0xcba219199a82ffedd0f4582b11e05e4940cf7873c655f4225e7a88e98d883479 0xc8409d8249608a85ce79705d7df877b12079dd6b28ad416b801844bfa9cf810a 0xf5d5ea2d88e8f71b5e34256cc206c44e93258b301b8d94f5bed4f601377e6e36)

  const txs = block.tx as string[];
  const txIndex = txs.findIndex((t:any) => t.txid === txIdNormal);
  const reversedTxIds = txs.map(function(tx:any) {
    return hexReverse(tx.txid)
  });

  const merkleTree = new MerkleTree(reversedTxIds);
  const proofElements = merkleTree.getProofElements(txIndex);
  const proof = `(tuple (tx-index u${txIndex}) (hashes (list 0x${proofElements.join(
    " 0x"
  )})) (tree-depth u${merkleTree.getTreeDepth()}))`;
  // generate header hex

    const parameters:TxMinedParameters = {
        proofElements,
        height:block.height,
        txIndex,
        headerHex: headerHex(block),
        txIdR,
        treeDepth: merkleTree.getTreeDepth()
    }
    return parameters
}

export function headerHex(block:any) {
  const headerHex =
    hexReverse(block.versionHex) +
    hexReverse(block.previousblockhash) +
    hexReverse(block.merkleroot) +
    hexReverse(block.time.toString(16).padStart(8, "0")) +
    hexReverse(block.bits) +
    hexReverse(block.nonce.toString(16).padStart(8, "0"));
  return headerHex;
}

export async function getPlan(block:any, txHex:string, headerHex:string, proof:string) {
    const depPlan = `---
id: 0
name: Devnet deployment
network: devnet
stacks-node: "http://localhost:20443"
bitcoin-node: "http://devnet:devnet@localhost:18443"
plan:
  batches:
    - id: 0
      transactions:
        - contract-call:
            contract-id: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.send-to-first-input-compact
            expected-sender: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM
            method: send-to-first-input
            parameters:
              - u${block.height}
              - 0x${txHex}
              - 0x${headerHex}
              - ${proof}
            cost: 10000
        - contract-call:
            contract-id: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.send-to-first-input
            expected-sender: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM
            method: send-to-first-input
            parameters:
              - u${block.height}
              - 0x${txHex}
              - (tuple (version 0x${hexReverse(block.versionHex)}) (parent 0x${hexReverse(block.previousblockhash)}) (merkle-root 0x${hexReverse(block.merkleroot)}) (timestamp 0x${hexReverse(block.time.toString(16).padStart(8, "0"))}) (nbits 0x${hexReverse(block.bits)}) (nonce 0x${hexReverse(block.nonce.toString(16).padStart(8, "0"))}))
              - ${proof}
            cost: 10000
      epoch: "2.1"
`;
    console.log(depPlan)
    return depPlan
}









// see https://www.youtube.com/watch?v=1pasjSinXDs&t=591s&ab_channel=EddMann
// see https://www.youtube.com/watch?v=2kPFSoknlUU&ab_channel=EddMann
/**
 * 
const fetchLatestBlock = () =>
  fetch(`https://blockchain.info/q/latesthash?cors=true`)
    .then(r => r.text());

const fetchMerkleRootAndTransactions = (block: any) =>
  fetch(`https://blockchain.info/rawblock/${block}?cors=true`)
    .then(r => r.json())
    .then(d => [d.mrkl_root, d.tx.map((t: { hash: any; }) => t.hash)]);

const toBytes = (hex: string) =>
  hex.match(/../g).reduce((acc: any, hex: string) => [...acc, parseInt(hex, 16)], []);

const toHex = (bytes: any[]) =>
  bytes.reduce((acc: any, bytes: { toString: (arg0: number) => string; }) => acc + bytes.toString(16).padStart(2, '0'), '');

const toPairs = (arr: string | any[]) =>
  Array.from(Array(Math.ceil(arr.length / 2)), (_, i) => arr.slice(i * 2, i * 2 + 2));

const hashPair = (a: any, b = a) => {
  const bytes = toBytes(`${b}${a}`).reverse();
  const hashed = sha256(sha256(bytes));
  return toHex(hashed.reverse());
};

const merkleRoot = (txs: string | any[]) =>
  txs.length === 1 
  ? txs[0] 
  : merkleRoot(toPairs(txs).reduce((tree, pair) => [...tree, hashPair(...pair)], []));

fetchLatestBlock()
  .then(fetchMerkleRootAndTransactions)
  .then(([root, txs]) => {
    const isValid = merkleRoot(txs) === root;
    console.log(isValid);
  });
  **/