<script lang="ts">
import stx_eco_discord from '$lib/assets/png-assets/stx_eco_discord.png';
import stx_eco_twitter from '$lib/assets/png-assets/stx_eco_twitter.png';
import stx_eco_github from '$lib/assets/png-assets/stx_eco_github.png';
let webWalletLink = 'https://www.hiro.so/wallet/install-web'
let stacksOrg = 'https://stacks.org'
</script>
  
<div class="row">
  <div class="col-md-2 col-sm-6 hideme">
    <p>Standards</p>
    <div class="demo-div">
      <a href="https://github.com/stacksgov/sips/blob/main/sips/sip-000/sip-000-stacks-improvement-proposal-process.md" target="_blank" rel="noreferrer">SIP Process</a>
    </div>
    <div class="demo-div">
      <a href="https://github.com/stacksgov/sips/pulls" target="_blank" rel="noreferrer">SIP Requests</a>
    </div>
    <div class="demo-div">
      <a href="https://discord.com/channels/621759717756370964/1001471092302544936" target="_blank" rel="noreferrer">SIP News</a>
    </div>
  </div>
  <div class="col-md-2 col-sm-6 hideme">
    <p>Code</p>
    <div class="demo-div">
      <a href="https://github.com/Clarity-Innovation-Lab" target="_blank" rel="noreferrer">Clarity Lab</a>
    </div>
    <div class="demo-div">
      <a href="https://github.com/Clarity-Innovation-Lab/ecosystem-dao/issues" target="_blank" rel="noreferrer">Raise Issues</a>
    </div>
    <div class="demo-div">
      <a href="https://github.com/Clarity-Innovation-Lab/ecosystem-dao" target="_blank" rel="noreferrer">Ecosystem DAO</a>
    </div>
  </div>
  <!--
  <div class="col-md-2 col-sm-6 hideme">
    <p>Videos</p>
    <div class="demo-div">
      <a target="_blank" href="https://www.youtube.com/watch?v=fbq6L3PrKWE" rel="noreferrer">Stacks</a>
    </div>
    <div class="demo-div">
      <a target="_blank" href="https://www.youtube.com/watch?v=OAVwd6SNJVU&t=717s" rel="noreferrer">Clarity</a>
    </div>
    <div class="demo-div">
      <a target="_blank" href="https://www.youtube.com/watch?v=NG081fD-PoI" rel="noreferrer">PoX</a>
    </div>
  </div>
  -->
  <div class="col-md-2 col-sm-6 hideme">
    <p>Partners</p>
    <div class="demo-div">
      <a class="" href={stacksOrg} target="_blank" rel="noreferrer">Foundation</a>
    </div>
    <div class="demo-div">
      <a class="" href={webWalletLink} target="_blank" rel="noreferrer">Hiro Wallet</a>
    </div>
    <div class="demo-div">
      <a class="" href="https://www.trustmachines.co/" target="_blank" rel="noreferrer">Trust Machines</a>
    </div>
  </div>
  <div class="col-md-2 col-sm-6 hideme">
    <p>Contact</p>
    <div class="demo-div">
      <a href="https://discord.com/channels/621759717756370964/971037457661444156" target="_blank" rel="noreferrer">Discord</a>
    </div>
    <div class="demo-div mt-3">
      <a href="https://tmurl.net/sbtc" target="_blank" class="btn btn-info rounded mt-5 text-warning" style="border-radius: 20px!important;">Get Involved?</a>
    </div>
  </div>
  <div class="col-md-2 col-sm-12 ">
    <div class="text-center">
      <div class="mb-0">
        <a class="mx-0" href="https://discord.com/channels/621759717756370964/971037457661444156" target="_blank" rel="noreferrer"><img src={stx_eco_discord} alt="discord ecosystem dao logo" width="39" height="auto"/></a>
        <a class="mx-0" href="https://mobile.twitter.com/radicleart" target="_blank" rel="noreferrer"><img src={stx_eco_twitter} alt="twitter ecosystem dao logo" width="39" height="auto"/></a>
      </div>
      <div style="position: relative; left: 2px;"><a class="" href="https://github.com/Clarity-Innovation-Lab/ecosystem-dao" target="_blank" rel="noreferrer"><img src={stx_eco_github} alt="github ecosystem dao logo" width="39" height="auto"/></a></div>
    </div>
  </div>

</div>

<style>
a {
  color: #EDEDED;
  font-size: 1.0rem;
}
p {
  font-size: 1.3rem;
  color: #fff;
  text-transform: lowercase;
}

</style>