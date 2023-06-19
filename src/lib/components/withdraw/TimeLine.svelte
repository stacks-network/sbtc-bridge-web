<script lang="ts">
  import { onMount } from 'svelte';
  
  export let timeLineStatus = 1;
  
  onMount(async () => {
  })
  
  
  </script>
  
  <div class="flex w-full border border-gray-700 rounded-lg items-center text-sm">
    <div class="flex w-1/3 ps-3 align-baseline items-center">
      <div class="flex grow align-baseline items-center ps-1">
          <div class={(timeLineStatus === 1) ? 'ellipse-on' : 'ellipse-off'}></div>
          <div class="ps-2 ">Amount</div>
      </div>
      <div class="">
        <div class="vector1"><svg width="21" height="64" viewBox="0 0 21 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.666504 -1.6001L20.6665 31.9999L0.666504 65.5999" stroke="#ADBCF6" stroke-width="0.5" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="flex w-1/3 ps-3 align-baseline  items-center">
      <div class="flex grow align-baseline items-center ps-1">
        <div class={(timeLineStatus === 2) ? 'ellipse-on' : 'ellipse-off'}></div>
        <div class="ps-2 ">Send</div>
      </div>
      <div class="">
        <div class="vector1"><svg width="21" height="64" viewBox="0 0 21 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.666504 -1.6001L20.6665 31.9999L0.666504 65.5999" stroke="#ADBCF6" stroke-width="0.5" stroke-linejoin="round"/>
          </svg>
        </div>  
      </div>
    </div>
    <div class="flex w-1/3 ps-3 align-baseline  items-center">
      <div class="flex grow align-baseline items-center ps-1">
        <div class={(timeLineStatus === 3) ? 'ellipse-on' : 'ellipse-off'}></div>
        <div class="ps-2 ">Confirm</div>
      </div>
    </div>
  </div>
  <style>
  .ellipse-on {
    /* Ellipse 7 */
    width: 8px;
    height: 8px;
    /* Secondary/Blue/500 */
    background: #7F97F1;
    box-shadow: 0px 0px 4px #121212, 0px 0px 4px 4px #475587;
  }
  .ellipse-off {
    /* Ellipse 7 */
    width: 8px;
    height: 8px;
    /* Secondary/Blue/500 */
    background: #fff;
  }
  </style>