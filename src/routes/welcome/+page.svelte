<script lang="ts">
import { CONFIG } from '$lib/config';
import { goto } from "$app/navigation";
import { sbtcConfig } from '$stores/stores';
import { explorerTxUrl } from '$lib/utils'
import type { SbtcConfig } from '$types/sbtc_config'
import chevUp from '$lib/assets/box-w-chev.png';
import chevDown from '$lib/assets/box-d-chev.png';

const start = (pegin:boolean) => {
	const conf:SbtcConfig = $sbtcConfig;
	conf.pegIn = pegin;
	sbtcConfig.set(conf);
	(pegin) ? goto('/deposit') : goto('/withdraw');
}
</script>
  
<div class="centered md:columns-2 sm:columns-1 mx-auto">
    <div class="box box-d pointer" on:keydown on:click={() => start(true)}>
        <div class="title">Welcome!</div>
        <div class="absolute">
            <div class="title">Deposit</div>
            <div class="subtitle">BTC to sBTC</div>
            <div class="chevron"><img class="" src={chevDown} alt="Deposit" /></div>
        </div>
    </div>
</div>

<style>
.title {
    position: absolute;
    width: 168px;
    height: 40px;
    left: 0px;
    top: 0px;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 40px;
    color: #FFFFFF;
}

.centered {
    align-content: center;
    text-align: center;
    text-align: -webkit-center;
}
.box {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 40px;
    width: 680px;
    height: 460px;
    background: #121212;
    border: 0.5px solid #616161;
    border-radius: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
}
</style>
