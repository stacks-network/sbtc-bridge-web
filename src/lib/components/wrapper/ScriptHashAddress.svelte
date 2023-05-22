<script lang="ts">
import { savePeginCommit } from '$lib/bridge_api';
import { onMount } from 'svelte';
import { sbtcConfig } from '$stores/stores'
import type { SbtcConfig } from '$types/sbtc_config';
import QrCode from "svelte-qrcode"
import { fmtSatoshiToBitcoin } from '$lib/utils'
import type { PegInTransactionI } from '$lib/domain/PegInTransaction';
import { getTestAddresses } from 'sbtc-bridge-lib' 
import { CONFIG } from '$lib/config';

export let piTx:PegInTransactionI;
const arg1 =  ($sbtcConfig.userSettings.testAddresses) ? getTestAddresses(CONFIG.VITE_NETWORK) : undefined;
const peginRequest = piTx?.getOpDropPeginRequest();
let errorReason:string|undefined;

const paymentUri = () => {
  let uri = 'bitcoin:' + peginRequest.commitTxScript!.address
  uri += '?amount=' + fmtSatoshiToBitcoin(piTx.pegInData.amount)
  uri += '&label=' + encodeURI('Wrap BTC to mint sBTC on Stacks')
  return uri
}
onMount(async () => {
  try {
    if (peginRequest && peginRequest.commitTxScript && peginRequest.commitTxScript.script && peginRequest.commitTxScript.script.length > 0) 
      await savePeginCommit(peginRequest)
    const conf:SbtcConfig = $sbtcConfig;
    sbtcConfig.update(() => conf);
  } catch (err) {
    //errorReason = 'Request already being processed with these details - change the amount to send another request.'
  }
})
</script>

<div class="row text-center">
  <div class="col-12 my-4">
    Scan or copy the address into your Bitcoin wallet and send.
  </div>
</div>

<div class="row text-center text-warning">
    <div class="col-12">
      <QrCode value={paymentUri()} padding={'40px'} color={'#fff'} background={'#4786cd'} size={300} />
      <div class="row text-center my-3 text-small">
        <!--
        <div class="col-12">
          <span>{paymentUri()}</span>
        </div>
        -->
      </div>
    </div>
</div>

<div class="row text-small text-bold mt-5">
  <div class="col-12">
    <span>Amount: {fmtSatoshiToBitcoin(piTx.pegInData.amount)}</span>
  </div>
  <div class="col-12">
    <span>Address: {peginRequest.commitTxScript?.address}</span>
  </div>
</div>

{#if errorReason}
<div class="row text-center mt-5">
  <div class="col-12 text-danger mb-5">{errorReason}</div>
</div>
{/if}


<style>
  .text-bold {
    font-weight: 800;
  }
</style>