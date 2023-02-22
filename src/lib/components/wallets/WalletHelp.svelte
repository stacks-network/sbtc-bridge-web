<script lang="ts">
import Electrum from '$lib/components/wallets/Electrum.svelte';
import TrezorOne from '$lib/components/wallets/TrezorOne.svelte';

let wallet = 0;

</script>
        

<div class="row">
  <div class="col">
    <div class="d-flex justify-content-between">
      <button class="{wallet === 1 ? 'btn w-100 btn-info' : 'btn w-100'}" aria-current="page" on:click={() => (wallet === 1) ? wallet = 0 : wallet = 1}>Electrum</button>
      <!--
      <button class="{wallet === 2 ? 'btn w-100 btn-info' : 'btn w-100'}" on:click={() => wallet = 2}>Trezor</button>
      <button class="{wallet === 3 ? 'btn w-100 btn-info' : 'btn w-100'}" tabindex="-1" aria-disabled="true" on:click={() => wallet = 3}>Ledger</button>
      -->
    </div>
    <div class="" id="myTabContent">
      {#if wallet === 1}<div class="pane" id="home" role="tabpanel" aria-labelledby="home-tab"><Electrum/></div>{/if}
      {#if wallet === 2}<div class="pane" id="profile" role="tabpanel" aria-labelledby="profile-tab"><TrezorOne /></div>{/if}
      {#if wallet === 3}<div class="pane" id="contact" role="tabpanel" aria-labelledby="contact-tab">Instructions for Ledger</div>{/if}
    </div>
  </div>
</div>

<style>
.pane {
  margin: 0px;
}
</style>