<script lang="ts">
import trezor1 from '$lib/assets/wallets/trezor1.png';
import electrum2 from '$lib/assets/wallets/electrum2.png';
import electrum3 from '$lib/assets/wallets/electrum3.png';

</script>
  
<div class="">
  <div class="p-3 border">
    <p>Send 0.05BTC (on testnet) to trezor one address: tb1qsxj8yjqkm0fejw0f2p8uu09wj58jwuxmqakeyk</p>
    <img src={trezor1} alt="night time" />
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