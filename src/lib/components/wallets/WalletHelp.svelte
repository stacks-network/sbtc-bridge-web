<script lang="ts">
import Electrum from '$lib/components/wallets/Electrum.svelte';
import BitcoinCore from '$lib/components/wallets/BitcoinCore.svelte';
import TrezorOne from '$lib/components/wallets/TrezorOne.svelte';

export let wallet = 0;

</script>
        

<div class="row">
  <div class="col">
    <div class="menu d-flex justify-content-start">
      {#if wallet === 1}<button class="{wallet === 1 ? 'btn w-25 btn-info' : 'btn btn-outline-info w-25'}" aria-current="page">Bitcoin Core</button>{/if}
      {#if wallet === 2}<button class="{wallet === 2 ? 'btn w-25 btn-info' : 'btn btn-outline-info w-25'}" aria-current="page">Electrum</button>{/if}
      <!--
      <button class="{wallet === 3 ? 'btn w-25 btn-info' : 'btn btn-outline-info w-25'}" on:click={() => wallet = 2}>Trezor</button>
      <button class="{wallet === 4 ? 'btn w-25 btn-info' : 'btn btn-outline-info w-25'}" tabindex="-1" aria-disabled="true" on:click={() => wallet = 3}>Ledger</button>
      -->
    </div>
    <div class="" id="myTabContent">
      {#if wallet === 1}<div class="pane" id="home" role="tabpanel" aria-labelledby="home-tab"><BitcoinCore/></div>{/if}
      {#if wallet === 2}<div class="pane" id="home" role="tabpanel" aria-labelledby="home-tab"><Electrum/></div>{/if}
      {#if wallet === 3}<div class="pane" id="profile" role="tabpanel" aria-labelledby="profile-tab"><TrezorOne /></div>{/if}
      {#if wallet === 4}<div class="pane" id="contact" role="tabpanel" aria-labelledby="contact-tab">Instructions for Ledger</div>{/if}
    </div>
  </div>
</div>

<style>
.pane {
  margin: 0px;
}
.menu {
  border-bottom: 1pt dotted #4786cd;
}
</style>