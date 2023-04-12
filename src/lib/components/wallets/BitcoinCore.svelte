<script lang="ts">
import { CONFIG } from '$lib/config';
import bitcoincore1 from '$lib/assets/wallets/bitcoincore1.png';
import bitcoincore2 from '$lib/assets/wallets/bitcoincore2.png';
import bitcoincore3 from '$lib/assets/wallets/bitcoincore3.png';
import bitcoincore4 from '$lib/assets/wallets/bitcoincore4.png';
import { explorerBtcAddressUrl } from "$lib/utils";
import { sbtcConfig } from '$stores/stores';

const network = CONFIG.VITE_NETWORK;
const from = ($sbtcConfig.pegIn) ? $sbtcConfig?.pegInTransaction?.fromBtcAddress : $sbtcConfig?.pegOutTransaction?.fromBtcAddress;
const getExplorerUrl = () => {
  return explorerBtcAddressUrl(from!)
}
</script>

<div class="">
  <div class="my-4">
    <h4>Intro.</h4>
    <p>The transaction has been copied to the clipboard.</p>
    <p>This flow tested with Bitcoin Core 22</p>
    <p>Once sent the transaction will show up on the <a href={getExplorerUrl()} target="_blank" rel="noreferrer">explorer</a></p>
    {#if network === 'testnet'}
    <p class="text-small">Testnet Hint: /Applications/Bitcoin-Qt.app/Contents/MacOS/Bitcoin-Qt -testnet -datadir=[user.home]/Library/Application\ Support/Bitcoin/testnet -conf=[user.home]/Library/Application\ Support/Bitcoin/testnet/bitcoin.conf</p>
    {/if}
  </div>
  <div class="slide">
    <h4>1. Paste the Transaction.</h4>
    <p>Open your Bitcoin Core wallet</p>
    <p>Paste the transaction (already in the clipboard) into your Bitcoin Core wallet</p>
    <img src={bitcoincore1} alt="night time" />
  </div>
  <div class="slide">
    <h4>2. Sign the Transaction.</h4>
    <img src={bitcoincore2} alt="night time" />
  </div>
  <div class="slide">
    <h4>3. Broadcast the Transaction.</h4>
    <p class=""><span class="text-warning">Note: Double check your wallet displays the correct recipient and amount.</span></p>
    <img src={bitcoincore3} alt="night time" />
  </div>
  <div class="slide">
    <p>Check the transaction is sent successfully!</p>
    <img src={bitcoincore4} alt="night time" />
  </div>
</div>

<style>
img {
  width: 100%;
}
</style>