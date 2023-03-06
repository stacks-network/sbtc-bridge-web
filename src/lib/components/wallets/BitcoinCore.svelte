<script lang="ts">
import bitcoincore1 from '$lib/assets/wallets/bitcoincore1.png';
import bitcoincore2 from '$lib/assets/wallets/bitcoincore2.png';
import bitcoincore3 from '$lib/assets/wallets/bitcoincore3.png';
import bitcoincore4 from '$lib/assets/wallets/bitcoincore4.png';
import { explorerBtcAddressUrl } from "$lib/utils";
import { sbtcConfig } from '$stores/stores';

const network = import.meta.env.VITE_NETWORK;

const getExplorerUrl = () => {
  if ($sbtcConfig.pegIn) {
    return explorerBtcAddressUrl($sbtcConfig.pegInTransaction.fromBtcAddress)
  } else {
    return explorerBtcAddressUrl($sbtcConfig.pegOutTransaction.fromBtcAddress)
  }
}
</script>

<div class="">
  <div class="p-3 border">
    <p>Open your Bitcoin Core wallet</p>
    {#if network === 'testnet'}
    <p>Hint: /Applications/Bitcoin-Qt.app/Contents/MacOS/Bitcoin-Qt -testnet -datadir=[user.home]/Library/Application\ Support/Bitcoin/testnet -conf=[user.home]/Library/Application\ Support/Bitcoin/testnet/bitcoin.conf</p>
    {/if}
  </div>
  <div class="p-3 border">
    <p>Copy / paste the transaction above into your Bitcoin Core (v22 or above) wallet</p>
    <img src={bitcoincore1} alt="night time" />
  </div>
  <div class="p-3 border">
    Sign the transaction
    <img src={bitcoincore2} alt="night time" />
  </div>
  <div class="p-3 border">
    <p>Broadcast the transaction</p>
    <p>Always check the amount and recipient address!</p>
    <img src={bitcoincore3} alt="night time" />
  </div>
  <div class="p-3 border">
    <p>Check the transaction is sent successfully!</p>
    <p>View on <a href={getExplorerUrl()} target="_blank" rel="noreferrer">{$sbtcConfig.balance.address}</a></p>
    <img src={bitcoincore4} alt="night time" />
  </div>
</div>

<style>
img {
  width: 100%;
}
</style>