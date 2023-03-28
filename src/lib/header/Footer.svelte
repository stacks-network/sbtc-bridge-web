<script lang="ts">
import FooterLinks from './FooterLinks.svelte'
import logoWhite from '$lib/assets/logo-white.jpeg';
</script>
  
<div class="container-fluid footer" id="footer-section"> 
    <div class=" pt-5">
      <div class="row mx-5">
        <div class="px-0 col-4">
          <div class="">
            <a class="navbar-brand" href="/">
              <img src={logoWhite} alt="stacks ecosystem dao logo" width="198" height="auto"/>
            </a>
          </div>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-12">
              <FooterLinks />
            </div>
          </div>
        </div>
      </div>
      <div class=" mx-5 mt-5 d-flex justify-content-between copy">
        <div class=" mb-4">
            <div class="copywright">sBTC &copy; 2023</div>
        </div>
        <div class=" mb-4">
          <div class="copywright">For the &hearts; of crypto!</div>
        </div>
      </div>
    </div>
  </div>  
  <style>
  .copy {
    margin: 0 0px;
  }

  </style>