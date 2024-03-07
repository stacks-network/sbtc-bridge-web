<script lang="ts">
import { onMount } from 'svelte';
import { hex, base64 } from '@scure/base';
import type { Transaction } from '@scure/btc-signer' 
import * as btc from '@scure/btc-signer';

export let btcTx:Transaction;
export let txtype:string;
export let amount:number;
let showHex = false;

const encode = (val:Uint8Array|undefined) => {
	if (typeof val === 'object') {
		return hex.encode(val)
	}
	else return val
}

const pubKeyFromTapLeafScript = () => {
  const tapLeafScripts = btcTx.getInput(0).tapLeafScript;
  if (!tapLeafScripts) return;
  let cb:Uint8Array;
  if (txtype === 'reveal') {
    cb = tapLeafScripts[0][1]
  } else {
    cb = tapLeafScripts[1][1]
  }
  cb = cb.subarray(0, cb.length - 1); // strip out the last byte of control block
  const script = btc.Script.decode(cb);
  
  if (txtype === 'reveal') {
    return script[2].valueOf()
  } else {
    return script[0].valueOf()
  }

}

const localAddressFromPubkey = () => {
  const pubkey:any = pubKeyFromTapLeafScript()
  if (!pubkey || typeof pubkey !== 'object') return;
	return hex.encode(pubkey)
}

const b64Reveal = () => {
	try {
		return base64.encode(btcTx.toPSBT());
	} catch (err:any) {
		return err.message
	}
}

const rawReveal = () => {
	try {
		return hex.encode(btcTx.toPSBT());
	} catch (err:any) {
		return err.message
	}
}

onMount(() => {
})

</script>

<div class="col-md-2 col-sm-12 text-info"></div>
<div class="col-md-10 col-sm-12">
  <div class="row">
    {#each Array(btcTx.inputsLength) as _, index (index)}
    <div class="col-12">
      <div>Spends {amount} satoshi from output {btcTx.getInput(index).index} of tx {encode(btcTx.getInput(index).txid)}</div>
    </div>
    {/each}
  </div>
  <div class="row">
    {#each Array(btcTx.outputsLength) as _, index (index)}
    <div class="col-12">
      <div>To public key: {localAddressFromPubkey()}</div>
    </div>
    {/each}
  </div>
  {#if !showHex}
  <div class="mt-5 row">
    <div class="col">
      <div class="d-flex justify-content-between">
        <p>PSBT (Base 64)</p>
        <span class="pointer" on:keydown on:click={() => showHex = !showHex}>{#if showHex}Show Base 64{:else}Show Hex{/if}</span>
      </div>
      <textarea rows="6" style="padding: 10px; width: 100%;" readonly>{b64Reveal()}</textarea>
    </div>
  </div>
  {:else}
  <div class="row">
    <div class="col">
      <div class="d-flex justify-content-between">
        <p>PSBT (Hex)</p>
        <span class="pointer" on:keydown on:click={() => showHex = !showHex}>{#if showHex}Show Base 64{:else}Show Hex{/if}</span>
      </div>
      <textarea rows="6" style="padding: 10px; width: 100%;" readonly>{rawReveal()}</textarea>
    </div>
  </div>
  {/if}
</div>


