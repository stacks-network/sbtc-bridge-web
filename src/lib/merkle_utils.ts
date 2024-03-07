// see https://medium.com/coinmonks/merkle-tree-a-simple-explanation-and-implementation-48903442bc08#:~:text=The%20use%20of%20Merkle%20Tree,block%20or%20the%20whole%20blockchain.
import { hex } from '@scure/base';
import * as P from 'micro-packed';
import { sha256 } from '@noble/hashes/sha256';
import type { TxMinedParameters } from 'sbtc-bridge-lib';

const concat = P.concatBytes;

const LEFT = 'left';
const RIGHT = 'right';

/**
 * 
 * @param txIdNormal
 * @param txHex 
 * @param block 
 * @returns 
 */
export function getParametersForProof(txIdNormal:string, txHex:string, block:any):TxMinedParameters {
  // coinmonks...
  const txs = block.tx as string[];
  const txIndex = txs.findIndex((t:any) => t === txIdNormal);
  const reversedTxIds = txs.map(function(tx:any) {
    return hex.encode(hex.decode(tx).reverse()) //hexReverse(tx.txid)
  });
  ensureEven(reversedTxIds) 
  //const tree = generateMerkleRoot(reversedTxIds)
  const mt = generateMerkleTree(reversedTxIds);
  const proofElements = generateMerkleProof(reversedTxIds[txIndex], reversedTxIds)
  if (!proofElements) return {} as TxMinedParameters
  proofElements.splice(0,1)
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

export function headerHex(block:any) {
  const headerHex =
    hex.encode(hex.decode(block.versionHex.toString(16).padStart(8, "0")).reverse()) +
    hex.encode(hex.decode(block.previousblockhash).reverse()) +
    hex.encode(hex.decode(block.merkleroot).reverse()) +
    hex.encode(hex.decode(block.time.toString(16).padStart(8, "0")).reverse()) +
    hex.encode(hex.decode(block.bits.toString(16).padStart(8, "0")).reverse()) +
    hex.encode(hex.decode(block.nonce.toString(16).padStart(8, "0")).reverse());

  return headerHex;
}

export const doubleSha = (valueToBeHashed: string):Uint8Array => {
  return sha256(sha256(hex.decode(valueToBeHashed))) as Uint8Array;
};

export const hashPairReverse = (a:string, b:string):string => {
	const bytes = concat(hex.decode(a).reverse(), hex.decode(b).reverse());
  const hashedBytes = sha256(sha256(bytes))
  const pair = hex.encode(hashedBytes.reverse());
  return pair;
};

export const hashPair = (a:string, b:string):string => {
	const bytes = concat(hex.decode(a), hex.decode(b));
  const hashedBytes = sha256(sha256(bytes))
  const pair = hex.encode(hashedBytes);
  return pair;
};

/**
 * If the hashes length is not even, then it copies the last hash and adds it to the
 * end of the array, so it can be hashed with itself.
 * @param {Array<string>} hashes
 */
export function ensureEven(hashes:Array<string>) {
  if(hashes.length % 2 !== 0) {
      hashes.push(hashes[hashes.length - 1]);
  }
}

/**
 * Finds the index of the hash in the leaf hash list of the Merkle tree
 * and verifies if it's a left or right child by checking if its index is
 * even or odd. If the index is even, then it's a left child, if it's odd,
 * then it's a right child.
 * @param {string} hash 
 * @param {Array<Array<string>>} merkleTree 
 * @returns {string} direction
 */
export function getLeafNodeDirectionInMerkleTree(hash:string, merkleTree:Array<Array<string>>) {
  const hashIndex = merkleTree[0].findIndex((h:string) => h === hash);
  return hashIndex % 2 === 0 ? LEFT : RIGHT;
};


/**
 * Generates the Merkle root of the hashes passed through the parameter.
 * Recursively concatenates pair of hashes and calculates each sha256 hash of the
 * concatenated hashes until only one hash is left, which is the Merkle root, and returns it.
 * @param {Array<string>} hashes
 * @returns merkleRoot
 */
export function generateMerkleRoot(hashes:Array<string>):any {
  if(!hashes || hashes.length == 0) {
      return '';
  }
  ensureEven(hashes);
  const combinedHashes = [];
  for(let i = 0; i < hashes.length; i += 2) {
      const hashPairConcatenated = hashPair(hashes[i], hashes[i + 1]);
      combinedHashes.push(hashPairConcatenated);
  }
  // If the combinedHashes length is 1, it means that we have the merkle root already
  // and we can return
  if(combinedHashes.length === 1) {
      return combinedHashes.join('');
  }
  return generateMerkleRoot(combinedHashes);
}

/**
 * Creates a Merkle tree, recursively, from the provided hashes, represented
 * with an array of arrays of hashes/nodes. Where each array in the array, or hash list,
 * is a tree level with all the hashes/nodes in that level.
 * In the array at position tree[0] (the first array of hashes) there are
 * all the original hashes.
 * In the array at position tree[1] there are the combined pair or sha256 hashes of the
 * hashes in the position tree[0], and so on.
 * In the last position (tree[tree.length - 1]) there is only one hash, which is the
 * root of the tree, or Merkle root.
 * @param {Array<string>} hashes 
 * @returns {Array<Array<string>>} merkleTree
 */
export function generateMerkleTree(hashes:Array<string>) {
  if(!hashes || hashes.length === 0) {
      return [];
  }
  const tree = [hashes];
  let leaves = true;
  const generate = (hashes:Array<string>, tree:Array<Array<string>>):Array<string> => {
      if(hashes.length === 1) {
          return hashes;
      }
      ensureEven(hashes);
      const combinedHashes = [];
      for(let i = 0; i < hashes.length; i += 2) {
          //const hashesConcatenated = hashes[i] + hashes[i + 1];
          //const hash = hex.encode(doubleSha(hashesConcatenated));
          let hashPairConcatenated;
          if (leaves) {
            hashPairConcatenated = hashPair(hashes[i], hashes[i + 1]);
          } else {
            hashPairConcatenated = hashPair(hashes[i], hashes[i + 1]);
          }
          combinedHashes.push(hashPairConcatenated);
      }
      tree.push(combinedHashes);
      leaves = false;
      return generate(combinedHashes, tree);
  }
  generate(hashes, tree);
  return tree;
}

/**
 * Generates the Merkle proof by first creating the Merkle tree,
 * and then finding the hash index in the tree and calculating if it's a 
 * left or right child (since the hashes are calculated in pairs, 
 * hthe dash at index 0 would be a left child, the hash at index 1 would be a right child.
 * Even indices are left children, odd indices are right children),
 * then it finds the sibling node (the one needed to concatenate and hash it with the child node)
 * and adds it to the proof, with its direction (left or right)
 * then it calculates the position of the next node in the next level, by
 * dividing the child index by 2, so this new index can be used in the next iteration of the
 * loop, along with the level.
 * If we check the result of this representation of the Merkle tree, we notice that
 * The first level has all the hashes, an even number of hashes.
 * All the levels have an even number of hashes, except the last one (since is the 
 * Merkle root)
 * The next level have half or less hashes than the previous level, which allows us
 * to find the hash associated with the index of a previous hash in the next level in constant time.
 * Then we simply return this Merkle proof.
 * @param {string} hash 
 * @param {Array<string>} hashes 
 * @returns {Array<node>} merkleProof
 */
export function generateMerkleProof(hash:string, hashes:Array<string>) {
  if(!hash || !hashes || hashes.length === 0) {
      return null;
  }
  const tree = generateMerkleTree(hashes);
  const merkleProof = [{
      hash,
      direction: getLeafNodeDirectionInMerkleTree(hash, tree)
  }];
  let hashIndex = tree[0].findIndex(h => h === hash);
  for(let level = 0; level < tree.length - 1; level++) {
      const isLeftChild = hashIndex % 2 === 0;
      const siblingDirection = isLeftChild ? RIGHT : LEFT;
      const siblingIndex = isLeftChild ? hashIndex + 1 : hashIndex - 1;
      const siblingNode = {
          hash: tree[level][siblingIndex],
          direction: siblingDirection
      };
      merkleProof.push(siblingNode);
      hashIndex = Math.floor(hashIndex / 2);
  }
  return merkleProof;
}
