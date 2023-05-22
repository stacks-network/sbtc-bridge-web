<script lang="ts">
import { onMount } from 'svelte';
import { hex } from '@scure/base';
import type { PeginRequestI } from 'sbtc-bridge-lib' 
import * as btc from '@scure/btc-signer';
import { explorerBtcTxUrl,  } from '$lib/utils'
import { CONFIG } from '$lib/config';
import { addressFromPubkey, parseDepositPayload } from 'sbtc-bridge-lib' 

export let peginRequest:PeginRequestI;
let stacksData:any;
let intid = false;

let reclaimString = '';
let revealString = '';
onMount(() => {
  try {
    const revealScript = btc.Script.decode(peginRequest.commitTxScript?.leaves[0].script);
    const reclaimScript = btc.Script.decode(peginRequest.commitTxScript?.leaves[1].script);
    for (let part of reclaimScript) {
      if (typeof part === 'object') {
        reclaimString += addressFromPubkey(CONFIG.VITE_NETWORK, part) + ' ';
      } else {
        reclaimString += part + ' ';
      }
    }
    
    let count = 0;
    for (let part of revealScript) {
      if (count === 0) {
        revealString += '<stacks_data> ';
      } else {
        if (typeof part === 'object') {
          revealString += addressFromPubkey(CONFIG.VITE_NETWORK, part) + ' ';
        } else {
          revealString += part + ' ';
        }
      }
      count++;
    }
    
    stacksData = parseDepositPayload(revealScript[0].valueOf() as Uint8Array);
    /**
    const d1U = stacksData;
    d3 = hex.encode(stacksData);
    const index = 0;
    const addr0 = parseInt(hex.encode(d1U.subarray(index + 1, index + 2)), 16);
    const addr1 = hex.encode(d1U.subarray(index + 2, index + 22));
    stacksAddress = c32address(addr0, addr1);
    cnameBuf = new TextDecoder().decode(d1U.subarray(index + 22, index + 56));
    revealFee = parseInt(hex.encode(d1U.subarray(index + 56, index + 84)), 16);
    */
  } catch(err) {
    console.log(err)
  }
  intid = true;
})

</script>

{#if intid}
<div class="row ">
  <div class="col-12 mt-0 mb-2">Commitment Data</div>
  <!--
  {#each scriptElements as element}
  <div class="col-md-2 col-sm-12 text-info">{element.key}</div>
  <div class="col-md-10 col-sm-12">{element.value}</div>
  {/each}
  -->
  <div class="col-md-2 col-sm-12 text-info">Sender Address</div><div class="col-md-10 col-sm-12">{peginRequest.senderAddress}</div>
  <div class="col-md-2 col-sm-12 text-info">Commit Address</div><div class="col-md-10 col-sm-12"><a href={explorerBtcTxUrl(peginRequest.btcTxid)} target="_blank" rel="noreferrer">{(peginRequest.commitTxScript?.address)}</a></div>
  <div class="col-md-2 col-sm-12 text-info">Reclaim Address</div><div class="col-md-10 col-sm-12">{peginRequest.fromBtcAddress}</div>
  <div class="col-md-2 col-sm-12 text-info">Sbtc Address</div><div class="col-md-10 col-sm-12">{peginRequest.sbtcWalletAddress}</div>
  <div class="col-md-2 col-sm-12 text-info">Tx Id</div>
  <div class="col-md-10 col-sm-12">
    
  </div>
  <div class="col-md-2 col-sm-12 text-info">Amount</div><div class="col-md-10 col-sm-12">{peginRequest.vout?.value}</div>
  <div class="col-md-2 col-sm-12 text-info">Reclaim Script</div><div class="col-md-10 col-sm-12">{reclaimString}</div>
  <div class="col-md-2 col-sm-12 text-info">Reveal Script</div><div class="col-md-10 col-sm-12">{revealString}</div>
  <div class="col-12 text-info"></div>
  <div class="col-md-2 col-sm-12 text-info"></div><div class="col-md-10 col-sm-12">&lt;stacks_data&gt;</div>
  <div class="col-md-2 col-sm-12 text-info">Op Code</div><div class="col-md-10 col-sm-12">{stacksData.opcode}</div>
  <div class="col-md-2 col-sm-12 text-info">Address</div><div class="col-md-10 col-sm-12">{stacksData.stacksAddress}</div>
  <div class="col-md-2 col-sm-12 text-info">Contract Name</div><div class="col-md-10 col-sm-12">{stacksData.cname || 'n/a'}</div>
  <div class="col-md-2 col-sm-12 text-info">Memo</div><div class="col-md-10 col-sm-12">{stacksData.memo || 'n/a'}</div>
  <div class="col-md-2 col-sm-12 text-info">Reveal Fee</div><div class="col-md-10 col-sm-12">{stacksData.revealFee}</div>
  <!--
  <div class="col-md-2 col-sm-12 text-info">Stacks addr</div><div class="col-md-10 col-sm-12">{stacksAddress}</div>
  <div class="col-md-2 col-sm-12 text-info">Stacks contract</div><div class="col-md-10 col-sm-12">{cnameBuf}</div>
  <div class="col-md-2 col-sm-12 text-info">Reveal Fee</div><div class="col-md-10 col-sm-12">{revealFee}</div>
  <div class="col-md-2 col-sm-12 text-info">For</div><div class="col-md-10 col-sm-12">{peginRequest.amount} Sats</div>
  <div class="col-md-2 col-sm-12 text-info">SBTC Wallet</div><div class="col-md-10 col-sm-12">{peginRequest.sbtcWalletAddress}</div>
  <div class="col-12 mt-4 mb-2">Witness Data</div>
  <div class="col-md-2 col-sm-12 text-info">Full Script</div><div class="col-md-10 col-sm-12">{peginRequest.commitTxScript?.witnessScript}</div>
  <div class="col-md-2 col-sm-12 text-info">Witness Script</div><div class="col-md-10 col-sm-12">{d1}<br/>{d2}<br/>{d3}</div>
  <div class="col-12 mt-4 mb-2">Commit Transaction</div>
  <div class="col-md-2 col-sm-12 text-info">scriptpubkey_type</div><div class="col-md-10 col-sm-12">{peginRequest.vout?.scriptpubkey_type}</div>
  <div class="col-md-2 col-sm-12 text-info">scriptpubkey</div><div class="col-md-10 col-sm-12">{peginRequest.vout?.scriptpubkey}</div>
  <div class="col-md-2 col-sm-12 text-info">scriptpubkey_asm</div><div class="col-md-10 col-sm-12">{peginRequest.vout?.scriptpubkey_asm}</div>
  <div class="col-md-2 col-sm-12 text-info">scriptpubkey_address</div><div class="col-md-10 col-sm-12">{peginRequest.vout?.scriptpubkey_address}</div>
  <div class="col-md-2 col-sm-12 text-info">value</div><div class="col-md-10 col-sm-12">{peginRequest.vout?.value}</div>
  -->
</div>
{/if}

<style>
</style>