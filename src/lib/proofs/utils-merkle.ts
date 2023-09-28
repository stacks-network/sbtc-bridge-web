import { sha256 } from '@noble/hashes/sha256';
import { hex } from '@scure/base';

export const doubleSha = (valueToBeHashed: string):Uint8Array => {
    return sha256(sha256(valueToBeHashed)) as Uint8Array;
};
export function hexReverseScure(hexString: string) {
    return hex.encode(hex.decode(hexString).reverse());
}
/**
 * If the hashes length is not even, then it copies the last hash and adds it to the
 * end of the array, so it can be hashed with itself.
 * @param {Array<string>} hashes
 */
export function hexToBytes(hexString: string) {
  if (hexString) {
    return Uint8Array.from(
      hexString.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))
    );
  } else {
    return new Uint8Array(0);
  }
}

const byteToHexCache: string[] = new Array(0xff);
for (let n = 0; n <= 0xff; ++n) {
  byteToHexCache[n] = n.toString(16).padStart(2, "0");
}

export function bytesToHex(uint8a: Uint8Array) {
  const hexOctets = new Array(uint8a.length);
  for (let i = 0; i < uint8a.length; ++i)
    hexOctets[i] = byteToHexCache[uint8a[i]];
  return hexOctets.join("");
}

export function hexReverse(hexString: string) {
  return bytesToHex(hexToBytes(hexString).reverse());
}



export interface IMerkleHashes {
  level: number;
  hashes: string[];
}
export class MerkleTree {
  private hashes: IMerkleHashes[] = [];
  public constructor(array: any[]) {
    this.generateTree(array);
  }

  public verify(
    proof: string[] | number[],
    leaf: string | number,
    rootHash: string | number,
    index: number
  ) {
    let hash = leaf;
    for (let i = 0; i < proof.length; i++) {
      if (index % 2 === 0) {
        hash = hex.encode(doubleSha(`${hash}${proof[i]}`));
      } else {
        hash = hex.encode(doubleSha(`${proof[i]}${hash}`));
      }
      index = Math.floor(index / 2);
    }
    return hash === rootHash;
  }

  public getRootHash(): string {
    return this.hashes.filter(
      (e: IMerkleHashes) =>
        e.level === this.hashes[this.hashes.length - 1].level
    )[0].hashes[0];
  }

  public getTreeDepth() {
    return this.hashes[this.hashes.length - 1].level;
  }
  public getProofElements(investigatedEntryIndex: number): string[] {
    let level = 0;
    const levels = this.hashes[this.hashes.length - 1].level;
    let relevantIndex = investigatedEntryIndex;
    const proofElements: string[] = [];
    while (level < levels) {
      relevantIndex =
        level === 0
          ? investigatedEntryIndex
          : this.getRelevantIndex(relevantIndex);
      const isLeftNode = relevantIndex % 2 === 0;
      if (isLeftNode) {
        proofElements.push(
          this.hashes.filter((e: IMerkleHashes) => e.level === level)[0].hashes[
            relevantIndex + 1
          ]
        );
        // same level proof comes from right
      } else {
        proofElements.push(
          this.hashes.filter((e: IMerkleHashes) => e.level === level)[0].hashes[
            relevantIndex - 1
          ]
        );
        // same level proof comes from left
      }
      level++;
    }
    return proofElements;
  }

  public getHashes(): IMerkleHashes[] {
    return this.hashes;
  }

  public getRelevantIndex(previousIndex: number): number {
    return Math.floor(previousIndex / 2);
  }
  private generateTree(array: any[]) {
    let level = 0;
    let itemsOnThisLevel = array;

    while (itemsOnThisLevel.length > 1) {
      itemsOnThisLevel = this.getHashesForLevel(level, itemsOnThisLevel);
      this.hashes.push({ level, hashes: itemsOnThisLevel });
      level++;
    }
  }

  private getHashesForLevel(level: number, array: any[]): string[] {
    const hashesOnThisLevel: string[] = [];
    if (array.length % 2 == 1) {
      array.push(array[array.length - 1]);
    }
    for (let i = 0; i < array.length; i++) {
      if (level === 0) {
        hashesOnThisLevel.push(array[i]);
      } else if (i % 2 === 0) {
        const hash = hex.encode(doubleSha(`${array[i]}${array[i + 1]}`));
        hashesOnThisLevel.push(hash);
      }
    }
    return hashesOnThisLevel;
  }
}