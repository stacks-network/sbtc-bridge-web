<script lang="ts">
import { savePaymentRequest } from '$lib/bridge_api';
import { onMount } from 'svelte';
import { sbtcConfig } from '$stores/stores'
import type { SbtcConfig } from '$types/sbtc_config';
import QrCode from "svelte-qrcode"
import { fmtSatoshiToBitcoin } from '$lib/utils'

export let peginRequest:any;
export let amount:number;

const paymentUri = () => {
  let uri = 'bitcoin:' + peginRequest.timeBasedPegin.address
  uri += '?amount=' + fmtSatoshiToBitcoin(amount)
  uri += '&label=' + encodeURI('Wrap BTC to mint sBTC on Stacks')
  return uri
}

onMount(async () => {
  try {
    if (peginRequest.timeBasedPegin.script.length > 0) await savePaymentRequest(peginRequest)
  } catch (err) {}
  const conf:SbtcConfig = $sbtcConfig;
  conf.peginRequestState = 0;
  sbtcConfig.update(() => conf);

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
    </div>
</div>

<div class="row text-center mt-5">
    <div class="col-12">
      <span>Amount: {fmtSatoshiToBitcoin(amount)}</span>
    </div>
</div>

<div class="row text-center mb-5 pb-5 my-3 text-small">
  <div class="col-12">
    <span>{paymentUri()}</span>
  </div>
</div>
<div class="row text-center mb-5 pb-5 my-3 text-small">
  <div class="col-12">
    <span>.</span>
  </div>
</div>

<style>
</style>