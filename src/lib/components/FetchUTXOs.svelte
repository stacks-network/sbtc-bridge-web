<script lang="ts">
import { fetchFeeEstimate, maxCommit, fetchUTXOs, fetchAddressDetails } from "$lib/utxos";
import { buildPegInTx } from "$lib/psbt";
import { sbtcConfig } from '$stores/stores'
import type { SbtcConfig } from '$types/sbtc_config';

let bitcoinAddress:string|undefined = $sbtcConfig.fromBtcAddress;
let stxAddress:string|undefined = $sbtcConfig.stxAddress;
let pegInAmount:number = $sbtcConfig.pegInAmount;
let errorReason:string|undefined;

let bcInfo: {low_fee_per_kb:number, medium_fee_per_kb:number, high_fee_per_kb:number};
const fetchEstimate = async () => {
  bcInfo = await fetchFeeEstimate($sbtcConfig.network);
}

let maxPegIn = 0;
const fetchMaxCommit = () => {
  maxPegIn = maxCommit($sbtcConfig.utxos);
  return maxPegIn;
}

const changeStxAddress = () => {
  const conf:SbtcConfig = $sbtcConfig;
  conf.stxAddress = stxAddress;
  sbtcConfig.update(() => conf);
}

const changePegIn = (maxValue:boolean) => {
  if (pegInAmount > fetchMaxCommit()) {
    errorReason = 'Cannot commit more BTC then is available at your address';
  }
  const conf:SbtcConfig = $sbtcConfig;
  if (maxValue) {
    pegInAmount = fetchMaxCommit()
  }
  conf.pegInAmount = Number(pegInAmount);
  sbtcConfig.set(conf);
}

const configureUTXOs = async (force:boolean) => {
  errorReason = undefined;
  if (!bitcoinAddress || bitcoinAddress.length < 10) {
    errorReason = 'Invalid address';
    return;
  }
  if (!force && $sbtcConfig.fromBtcAddress === bitcoinAddress && $sbtcConfig.utxos) {
    return;
  }
  try {
    const conf:SbtcConfig = $sbtcConfig;
    let result = await fetchAddressDetails($sbtcConfig.network, bitcoinAddress);
    conf.fromBtcAddress = bitcoinAddress;
    conf.addressDetails = result;
    result = await fetchUTXOs($sbtcConfig.network, bitcoinAddress);
    console.log('utxos --> ', result.utxos);
    conf.utxos = result;
    sbtcConfig.update(() => conf);
  } catch(err:any) {
    errorReason = err||'Error - is the address a valid';
  }
}

let hexTx:string;
const buildTx = async () => {
  hexTx = await buildPegInTx($sbtcConfig);
}

$: showUtxos = bitcoinAddress && $sbtcConfig.utxos?.length > 0;
$: showStxAddress = bitcoinAddress;
$: showPegInAmount = bitcoinAddress && stxAddress;
$: showButton = bitcoinAddress && stxAddress && pegInAmount > 0;
$: showEstimates = false;
$: showHexTx = hexTx && hexTx.length > 0;

</script>
      
<div class="" style="">

  {#if errorReason}<div class="text-warning">{errorReason}</div>{/if}
  <div class="row form-group" style="width:400pt;">
    <label for="transact-path">Bitcoin {$sbtcConfig.network} Address:</label>
    <input type="text" id="from-address" class="form-control form-inline" autocomplete="off" bind:value={bitcoinAddress} on:input={() => configureUTXOs(false)} />
    {#if showUtxos}
    <div class="d-flex justify-content-between text-small text-info">
      <div>{$sbtcConfig.utxos?.length || 0} UTXO(s) Found</div>
      <div><a href="/" class="" on:click|preventDefault={() => configureUTXOs(true)}>reload</a></div>
    </div>
    {/if}
  </div>
  {#if showStxAddress}
  <div class="row form-group" style="width:400pt;">
    <label for="transact-path">Stacks {$sbtcConfig.network} Address:</label>
    <input type="text" id="from-address" class="form-control form-inline" autocomplete="off" bind:value={stxAddress} on:input={() => changeStxAddress()} />
  </div>
  {/if}
  {#if showPegInAmount}
  <div class="row form-group" style="width:400pt;">
    <label for="transact-path">Peg In Amount / Sats:</label>
    <input type="number" id="from-address" class="form-control" style="width:400pt;" autocomplete="off" bind:value={pegInAmount}  on:input={() => changePegIn(false)}/>
    <div class="d-flex justify-content-between text-small text-info">
      <div>Tx fees are additional.</div>
      <div><a href="/" class="" on:click|preventDefault={() => changePegIn(true)}>max</a></div>
    </div>
  </div>
  {/if}
  {#if showEstimates}
  <div class="row form-group" style="width:400pt;">
    <div>{#if bcInfo}Fee estimates (sats/kb) Low: {bcInfo.low_fee_per_kb}, Medium: {bcInfo.medium_fee_per_kb}, High: {bcInfo.high_fee_per_kb}{/if}</div>
    <div class="form-group">
      <button type="button" on:click={() => fetchEstimate()} class="btn btn-primary">Fetch Fee Estimate</button>
    </div>
  </div>
  {/if}
  {#if showButton}
  <div class="row form-group" style="width:400pt;">
    <button type="button" on:click={() => buildTx()} class="btn btn-primary">Build Peg In Tx</button>
  </div>
  {/if}
  {#if showHexTx}
  <div>
    <h2>Transaction</h2>
    <p>Paste this transaction into your wallet..</p>
    <textarea style="width:400pt;" rows="10" readonly>{hexTx}</textarea>
  </div>
  {/if}
</div>
    
<style>
.row {
  margin-top: 20px;
  margin-bottom: 40px;
}
label {
  text-transform: capitalize;
}
</style>