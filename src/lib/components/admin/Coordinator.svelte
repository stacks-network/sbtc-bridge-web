<script lang="ts">
  import { setsBTCPublicKey } from "$lib/sbtc_admin.js";
  import MintTokens from './MintTokens.svelte'
  import BurnTokens from './BurnTokens.svelte'
  import { sbtcConfig } from '$stores/stores'
  import Button from '../shared/Button.svelte';
	import TransactionAnalysis from './TransactionAnalysis.svelte';
  
  //const contractCall = openContractCall();
  let errorReason:string|undefined;
  let pubkeying = true;
  let minting = false;
  let burning = false;
  let proofs = true;
  
  let romeoPublicKey = $sbtcConfig.sbtcContractData.sbtcWalletPublicKey || '02aaed53527e3771645a050568a3cc9820361899c36f689cac15b57cc7885f3ca1';
  if ($sbtcConfig && $sbtcConfig.sbtcContractData) {
    const s = $sbtcConfig.sbtcContractData
    //coordinator = s.coordinator?.addr?.value || '';
    //romeoPublicKey = s.sbtcWalletAddress;
  }
  
  const wallet = async () => {
    const res:any = await setsBTCPublicKey($sbtcConfig.sbtcContractData.contractId, romeoPublicKey);
    if (res && res.error) errorReason = res.reason
    console.log(res)
  }
  
  </script>
     
  <div class="p-2">
    <div class="flex justify-between">
        <div>&nbsp;</div>
        <div class="py-0">
          <a href="/" class="me-3" on:click|preventDefault={() => {pubkeying = true; burning = false; minting = false;  }}>pubkey</a>
          <a href="/" class="me-3" on:click|preventDefault={() => {minting = true; pubkeying = false; burning = false;  }}>mint</a>
          <a href="/" class="me-3" on:click|preventDefault={() => {burning = true; pubkeying = false; minting = false;  }}>burn</a>
        </div>
    </div>


    {#if pubkeying}
      <div class="">
        <div>sBTC Public Key</div>
        <input type="text" id="sbtcWallet" class="p-3 rounded-md border" bind:value={romeoPublicKey}/>
        <div class="py-0">
          <Button darkScheme={false} label={'Set BTC Wallet'} target={''} on:clicked={() => wallet()}/>
        </div>
      </div>
      {/if}

      {#if minting}
      <div class="">
          <MintTokens />
        </div>
      {/if}

      {#if burning}
      <div class="">
          <BurnTokens />
        </div>
      {/if}

    {#if errorReason}
    {@html errorReason}
    {/if}
  </div>
  
  
  <style>
    input {
      width: 100%;
      margin: 10px 0;
      color: #000;
    }
  </style>