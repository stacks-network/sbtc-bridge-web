<script lang="ts">
import { explorerBtcAddressUrl, explorerBtcTxUrl, explorerTxUrl, parseFulfilPayloadFromOutput } from '$lib/utils';
import { fmtNumber, satsToBitcoin, truncate, type SbtcClarityEvent, getAddressFromOutScript } from 'sbtc-bridge-lib';
import { onMount } from 'svelte';
import * as btc from '@scure/btc-signer';
import { hex } from '@scure/base';
import { fetchAddressTransactions, fetchTransaction, fetchTransactionHex } from '$lib/bridge_api';
	import { CONFIG } from '$lib/config';

export let sbtcEvent:SbtcClarityEvent;
let bitcoinTxId:string;
let recipient:string;
let amount:number;

const getType = (eventType:string|undefined) => {
  const tx = getFulfil()
  return (eventType === 'mint') ? 'deposit' : 'withdrawal'
}

const getFulfil = async () => {
    if (sbtcEvent.payloadData.eventType === 'burn') {
      const txIn = await fetchTransaction(sbtcEvent.bitcoinTxid.payload.value.split('x')[1])
      const tx:btc.Transaction = btc.Transaction.fromRaw(hex.decode(txIn.hex), {allowUnknowInput:true, allowUnknowOutput: true, allowUnknownOutputs: true, allowUnknownInputs: true})
      recipient = getAddressFromOutScript(CONFIG.VITE_NETWORK, tx.getOutput(1).script as Uint8Array)
      amount = Number(tx.getOutput(1).amount)
      const txs:Array<any> = await fetchAddressTransactions(recipient);
      let fulfilTx:any;
      for (let thisTx of txs) {
        const vout0 = thisTx.vout[0]
        if (vout0.scriptpubkey_type === 'op_return' && (vout0.scriptpubkey.indexOf('543221') > -1 || vout0.scriptpubkey.indexOf('583221') > -1)) {
          const txHex = await fetchTransaction(thisTx.txid)
          const tx:btc.Transaction = btc.Transaction.fromRaw(hex.decode(txHex.hex), {allowUnknowInput:true, allowUnknowOutput: true, allowUnknownOutputs: true, allowUnknownInputs: true})
          parseFulfilPayloadFromOutput(CONFIG.VITE_NETWORK, tx)
          const vout1 = thisTx.vout[1]
        }
      }
      console.log(fulfilTx)
    }
}

onMount(() => {
  bitcoinTxId = sbtcEvent.bitcoinTxid.payload.value.split('x')[1]
})

</script>

<div class="break-words flex flex-col gap-y-3 w-full my-4 font-extralight text-gray-300">
  <div class="flex ">
    <div class="w-1/5">Contract Id:</div>
    <div class="w-4/5"><p class="">{sbtcEvent.contractId}</p></div>
  </div>
  <div class="flex">
    <div class="w-1/5">Bitcoin Tx:</div>
    <div class="w-4/5 "><a class="" href={explorerBtcTxUrl(sbtcEvent.bitcoinTxid.payload.value.split('x')[1])} target="_blank" rel="noreferrer">{(sbtcEvent.bitcoinTxid.payload.value)}</a></div>
  </div>
  <div class="flex">
    <div class="w-1/5">Stacks Tx:</div>
    <div class="w-4/5"><a class="" href={explorerTxUrl(sbtcEvent.txid)} target="_blank" rel="noreferrer">{(sbtcEvent.txid)}</a></div>
  </div>
  <div class="flex">
    {#if recipient}
    <div class="w-1/5">Recipient</div>
    <div class="w-4/5">{recipient}</div>
    {:else}
    <div class="w-1/5">Sender</div>
    <div class="w-4/5">{sbtcEvent.payloadData.spendingAddress}</div>
    {/if}
  </div>
  <div class="flex">
    <div class="w-1/5">Amount:</div>
    <div class="w-4/5">{satsToBitcoin(sbtcEvent.payloadData.amountSats)}</div>
  </div>
  <div class="flex">
    <div class="w-1/5">Type:</div>
    <div class="w-4/5">{getType(sbtcEvent.payloadData.eventType)}</div>
  </div>
  <div class="flex">
    <div class="w-1/5">Block height</div>
    <div class="w-4/5">{fmtNumber(sbtcEvent.payloadData.burnBlockHeight)}</div>
  </div>
</div>


