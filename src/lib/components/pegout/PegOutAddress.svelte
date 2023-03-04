<script lang="ts">
import { decodeStacksAddress } from "$lib/stacks";
import { sbtcConfig } from '$stores/stores'
import { createEventDispatcher } from "svelte";
import type { SbtcConfig } from '$types/sbtc_config';
import { PatchQuestion } from "svelte-bootstrap-icons";
import { getAuth, getAccount } from "@micro-stacks/svelte";
import UserBalance from '$lib/components/common/UserBalance.svelte'

const account = getAccount();
const network = import.meta.env.VITE_NETWORK;
const format = /[ `!@#$%^&*()_+=\[\]{};':"\\|,<>\/?~]/;
const dispatch = createEventDispatcher();
const auth = getAuth();
if (!$sbtcConfig.pegOutStxAddress) {
  if ($auth.isSignedIn) {
    $sbtcConfig.pegOutStxAddress = $account.stxAddress
  }
}
let stxAddress:string|undefined = $sbtcConfig.pegOutStxAddress;
const mainReason = 'Please enter a valid stacks blockchain ' + network + ' address';
let reason = mainReason;
let errored = false;
const report = (errors:boolean) => {
  errored = errors;
  dispatch('principal_updated', {
    error: errors,
    reason
  });
}

const changeStxAddress = async () => {
  errored = false;

  if (!stxAddress) {
    report(true);
    errored = false;
  } else if (format.test(stxAddress)) {
    reason = "please remove white space / special characters";
    report(true);
  } else {
    try {
      const decoded = decodeStacksAddress(stxAddress.split('.')[0]);
      if (network === 'testnet' && decoded[0] !== 26) {
        reason = mainReason;
        report(true);
        return;
      }
      if (network === 'mainnet' && decoded[0] !== 22) {
        reason = mainReason;
        report(true);
        return;
      }
      const conf:SbtcConfig = $sbtcConfig;
      conf.pegOutStxAddress = stxAddress;
      sbtcConfig.update(() => conf);
      report(false);
    } catch (err:any) {
      report(true);
    }
  }
}
</script>

<div class="row">
  <div class="col">
    <label for="transact-path" class="d-flex justify-content-between">
      <span>Stacks/Contract Principal:</span>
      <span class="pointer text-info" data-bs-toggle="tooltip-ftux" data-bs-placement="top" data-bs-custom-class="custom-tooltip" title="Your Stacks address. The equivalent amount of sBTC will be sent to this wallet"><PatchQuestion width={30} height={30}/></span>
    </label>
    <input type="text" id="from-address" class="form-control form-inline" autocomplete="off" bind:value={stxAddress} on:input={() => changeStxAddress()} />
    {#if errored && stxAddress && stxAddress.length > 0}<div class="text-danger">{reason}</div>{/if}
  </div>
</div>
<UserBalance showAddress={false}/>

<style>
</style>