import varuint from "varuint-bitcoin";
import { crypto } from 'bitcoinjs-lib';

/**
 * Helper function that produces a serialized witness script
 * https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/test/integration/csv.spec.ts#L477
 */
export function witnessStackToScriptWitness(witness: Buffer[]) {
    let buffer = Buffer.allocUnsafe(0)

    function writeSlice(slice: Buffer) {
        buffer = Buffer.concat([buffer, Buffer.from(slice)])
    }

    function writeVarInt(i: number) {
        const currentLen = buffer.length;
        const varintLen = varuint.encodingLength(i)

        buffer = Buffer.concat([buffer, Buffer.allocUnsafe(varintLen)])
        varuint.encode(i, buffer, currentLen)
    }

    function writeVarSlice(slice: Buffer) {
        writeVarInt(slice.length)
        writeSlice(slice)
    }

    function writeVector(vector: Buffer[]) {
        writeVarInt(vector.length)
        vector.forEach(writeVarSlice)
    }

    writeVector(witness)

    return buffer
}

export function toXOnly(pubkey: Buffer): Buffer {
    return pubkey.subarray(1, 33)
}

export function tapTweakHash(pubKey: Buffer, h: Buffer | undefined): Buffer {
    return crypto.taggedHash(
        'TapTweak',
        Buffer.concat(h ? [pubKey, h] : [pubKey]),
    );
  }
  