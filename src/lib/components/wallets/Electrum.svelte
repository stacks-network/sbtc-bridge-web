<script lang="ts">
import electrum1 from '$lib/assets/wallets/electrum1.png';
import electrum2 from '$lib/assets/wallets/electrum2.png';
import electrum3 from '$lib/assets/wallets/electrum3.png';

const network = import.meta.env.VITE_NETWORK;
</script>

<div class="">
  <div class="p-3 border">
    <p>Open your Electrum wallet</p>
    {#if network === 'testnet'}
    <p>Hint: /Applications/Electrum.app/Contents/MacOS/run_electrum --testnet</p>
    {/if}
  </div>
  <div class="p-3 border">
    <p>Copy / paste the transaction above into your Electrum wallet</p>
    <img src={electrum1} alt="night time" />
  </div>
  <div class="p-3 border">
    <img src={electrum2} alt="night time" />
  </div>
  <div class="p-3 border">
    <p>Sign and broadcast the transaction</p>
    <p>Always check the amount and recipient address!</p>
    <img src={electrum3} alt="night time" />
  </div>
</div>

<style>
img {
  width: 100%;
}
</style>