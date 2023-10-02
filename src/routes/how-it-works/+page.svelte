<script lang="ts">
</script>

<svelte:head>
  <title>sBTC Bridge - How it works</title>
  <meta name="description" content="The bridge provides a non-custodial, permissionless way to move Bitcoin into and out of the Stacks Blockchain. Let's dive into the specifics of its functioning." />
</svelte:head>

<div class="mx-auto max-w-7xl px-6 py-6">
  <div class="my-8 w-full flex flex-col">
    <div class="flex flex-col w-full border-[0.5px] border-gray-700 rounded-lg p-10 overflow-hidden bg-gray-1000">

			<div class="space-y-8">
				<h1 class="text-4xl font-bold">How it works</h1>

				<div class="p-[1.2px] bg-[linear-gradient(126.12deg,rgba(237,105,60,0.5)11.8%,rgba(254,219,99,0.2)72.43%)] rounded-lg">
					<div
						class="relative flex items-center p-6 bg-[linear-gradient(126.12deg,rgba(0,0,0,0.95)21.1%,rgba(18,18,18,0.5)53.58%);] rounded-lg"
					>
						<div class="flex items-center gap-x-10">
							<svg class="w-44 h-auto shrink-0" viewBox="0 0 208 204" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g filter="url(#filter0_d_5215_9232)">
								<circle cx="108" cy="100" r="90" fill="url(#paint0_linear_5215_9232)"/>
								<circle cx="108" cy="100" r="89.5" stroke="#6A6A6A"/>
								</g>
								<g clip-path="url(#clip0_5215_9232)">
								<mask id="mask0_5215_9232" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="53" y="46" width="40" height="40">
								<path d="M53 46H93V86H53V46Z" fill="white"/>
								</mask>
								<g mask="url(#mask0_5215_9232)">
								<path d="M88.044 85.7264H57.978C56.7643 85.7232 55.6012 85.2397 54.743 84.3814C53.8847 83.5232 53.4012 82.3601 53.398 81.1464V51.0624C53.4017 49.8487 53.8858 48.6858 54.7444 47.8279C55.603 46.9701 56.7663 46.487 57.98 46.4844H88.06C89.2734 46.4875 90.4362 46.9708 91.2944 47.8286C92.1525 48.6864 92.6363 49.849 92.64 51.0624V81.1464C92.6295 82.3609 92.1411 83.5225 91.2806 84.3797C90.4201 85.2368 89.2586 85.7206 88.044 85.7264Z" fill="black"/>
								<mask id="mask1_5215_9232" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="53" y="46" width="36" height="36">
								<path d="M53.32 46.4238H88.094V81.1978H53.32V46.4238Z" fill="white"/>
								</mask>
								<g mask="url(#mask1_5215_9232)">
								<mask id="mask2_5215_9232" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="53" y="46" width="36" height="36">
								<path d="M69.842 58.6005H75.922L88.044 46.4805H57.978C56.7653 46.4836 55.6031 46.9664 54.7451 47.8233C53.887 48.6802 53.4028 49.8418 53.398 51.0545V81.1405L69.842 64.6785V58.6005Z" fill="white"/>
								</mask>
								<g mask="url(#mask2_5215_9232)">
								<path d="M53.4004 46.4766V81.1406H88.0444V46.4766H53.4004Z" fill="url(#paint1_linear_5215_9232)"/>
								</g>
								</g>
								<path d="M59.332 58.6967L59.864 57.6347C59.936 57.4327 60.138 57.3947 60.322 57.4887C60.322 57.4887 61.218 57.9647 62.116 57.9647C62.518 57.9647 62.794 57.7987 62.794 57.4687C62.794 57.1207 62.518 56.9027 61.474 56.4807C59.954 55.8947 59.24 55.0707 59.24 53.8807C59.24 52.6727 60.14 51.5547 62.152 51.5547C63.324 51.5547 64.166 51.8847 64.588 52.1587C64.77 52.2687 64.862 52.4887 64.77 52.6907L64.276 53.6967C64.184 53.8807 63.964 53.8987 63.8 53.8447C63.8 53.8447 62.902 53.4227 62.17 53.4227C61.694 53.4227 61.494 53.6227 61.494 53.8807C61.494 54.2287 61.842 54.3567 62.574 54.6487C64.094 55.2347 65.246 55.8947 65.246 57.4327C65.246 58.7327 64.094 59.8507 62.116 59.8507C60.816 59.8507 59.9 59.4287 59.496 59.1167C59.332 59.0087 59.24 58.8427 59.332 58.6967ZM66.82 56.2427C66.82 55.9507 67.06 55.6747 67.39 55.6747H74.22C77.772 55.6747 80.5 58.0547 80.5 61.1867C80.5 63.4767 78.614 65.2707 77.222 65.9287C78.798 66.4427 81.104 68.0527 81.104 70.7827C81.104 74.1147 78.248 76.5327 74.604 76.5327H67.39C67.2395 76.5322 67.0954 76.4721 66.989 76.3657C66.8825 76.2593 66.8225 76.1152 66.822 75.9647V56.2447L66.82 56.2427ZM73.854 64.4287C75.374 64.4287 76.416 63.2367 76.416 61.7547C76.416 60.2707 75.374 59.2267 73.854 59.2267H70.668V64.4467H73.854V64.4267V64.4287ZM74.274 73.0167C75.758 73.0167 76.948 71.8627 76.948 70.3067C76.948 68.8227 75.464 67.7067 73.908 67.7067H70.668V73.0167H74.274Z" fill="white"/>
								</g>
								</g>
								<g clip-path="url(#clip1_5215_9232)">
								<path d="M161.402 137.842C160.766 140.389 159.635 142.787 158.073 144.897C156.511 147.008 154.548 148.79 152.297 150.142C150.046 151.494 147.551 152.39 144.954 152.777C142.357 153.165 139.709 153.037 137.162 152.402C133.325 151.444 129.859 149.371 127.2 146.443C124.542 143.516 122.812 139.866 122.228 135.955C121.644 132.044 122.233 128.048 123.921 124.472C125.608 120.895 128.318 117.9 131.708 115.864C135.097 113.828 139.015 112.843 142.964 113.033C146.914 113.223 150.718 114.58 153.897 116.933C157.075 119.285 159.485 122.527 160.82 126.249C162.156 129.971 162.358 134.005 161.402 137.842Z" fill="#F7931A"/>
								<path d="M150.82 130.151C151.22 127.491 149.19 126.061 146.42 125.104L147.32 121.501L145.123 120.954L144.247 124.464C143.67 124.321 143.08 124.184 142.49 124.051L143.37 120.517L141.177 119.971L140.28 123.571L135.853 122.477L135.27 124.821C135.27 124.821 136.897 125.194 136.863 125.217C137.753 125.441 137.913 126.027 137.887 126.494L135.423 136.367C135.313 136.634 135.04 137.041 134.417 136.887C134.44 136.921 132.823 136.487 132.823 136.487L131.733 139.001L136.153 140.117L135.243 143.764L137.437 144.311L138.337 140.704C138.937 140.867 139.517 141.017 140.087 141.157L139.187 144.747L141.383 145.294L142.293 141.654C146.033 142.367 148.85 142.081 150.033 138.701C150.987 135.977 149.987 134.404 148.017 133.381C149.45 133.047 150.53 132.104 150.817 130.157H150.82V130.151ZM145.803 137.184C145.123 139.907 140.537 138.434 139.05 138.064L140.253 133.234C141.74 133.604 146.51 134.341 145.803 137.184ZM146.483 130.114C145.867 132.594 142.047 131.334 140.807 131.024L141.897 126.641C143.137 126.951 147.13 127.527 146.483 130.114Z" fill="white"/>
								</g>
								<path d="M105.736 135.001C106.289 135.001 106.736 134.553 106.736 134.001C106.736 133.448 106.289 133.001 105.736 133.001L105.736 135.001ZM74.4434 101.294C74.0529 100.903 73.4197 100.903 73.0292 101.294L66.6652 107.657C66.2747 108.048 66.2747 108.681 66.6652 109.072C67.0558 109.462 67.6889 109.462 68.0794 109.072L73.7363 103.415L79.3932 109.072C79.7837 109.462 80.4168 109.462 80.8074 109.072C81.1979 108.681 81.1979 108.048 80.8074 107.657L74.4434 101.294ZM105.736 133.001C101.006 133.001 96.9579 133.095 93.5009 133.185C90.0363 133.275 87.1865 133.36 84.8229 133.344C82.4534 133.329 80.6382 133.211 79.2335 132.916C77.8398 132.624 76.9266 132.171 76.2887 131.54C75.6512 130.909 75.1908 130.002 74.8884 128.612C74.5836 127.211 74.4553 125.396 74.4296 123.021C74.4039 120.652 74.4799 117.791 74.5632 114.31C74.6464 110.835 74.7363 106.763 74.7363 102.001H72.7363C72.7363 106.738 72.6469 110.791 72.5638 114.262C72.4809 117.725 72.4035 120.63 72.4297 123.042C72.4558 125.449 72.5846 127.43 72.9342 129.037C73.2862 130.655 73.8776 131.967 74.8816 132.961C75.8853 133.955 77.2032 134.534 78.8224 134.874C80.4307 135.211 82.4103 135.329 84.8097 135.344C87.215 135.36 90.1082 135.273 93.5528 135.184C97.0051 135.094 101.032 135.001 105.736 135.001L105.736 133.001Z" fill="#A5A5A5"/>
								<path d="M110 65.2006C109.448 65.2006 109 65.6483 109 66.2006C109 66.7528 109.448 67.2006 110 67.2006L110 65.2006ZM141.293 98.9077C141.683 99.2982 142.317 99.2982 142.707 98.9077L149.071 92.5437C149.462 92.1532 149.462 91.52 149.071 91.1295C148.681 90.739 148.047 90.739 147.657 91.1295L142 96.7863L136.343 91.1295C135.953 90.739 135.319 90.739 134.929 91.1295C134.538 91.52 134.538 92.1532 134.929 92.5437L141.293 98.9077ZM110 67.2006C114.73 67.2006 118.778 67.1065 122.235 67.0167C125.7 66.9266 128.55 66.8414 130.913 66.8569C133.283 66.8724 135.098 66.9898 136.503 67.2848C137.897 67.5776 138.81 68.03 139.448 68.6614C140.085 69.2925 140.545 70.1995 140.848 71.5892C141.153 72.9903 141.281 74.8056 141.307 77.1804C141.332 79.5491 141.256 82.4101 141.173 85.8916C141.09 89.3659 141 93.4381 141 98.2006H143C143 93.4631 143.089 89.4105 143.172 85.9395C143.255 82.4758 143.333 79.5712 143.307 77.1587C143.281 74.7523 143.152 72.7708 142.802 71.164C142.45 69.5459 141.859 68.2341 140.855 67.2401C139.851 66.2466 138.533 65.6677 136.914 65.3275C135.306 64.9897 133.326 64.8727 130.927 64.8569C128.521 64.8411 125.628 64.9278 122.183 65.0173C118.731 65.1071 114.704 65.2006 110 65.2006L110 67.2006Z" fill="#A5A5A5"/>
								<defs>
								<filter id="filter0_d_5215_9232" x="0" y="0" width="204" height="204" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix"/>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
								<feOffset dx="-6" dy="2"/>
								<feGaussianBlur stdDeviation="6"/>
								<feComposite in2="hardAlpha" operator="out"/>
								<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5215_9232"/>
								<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5215_9232" result="shape"/>
								</filter>
								<linearGradient id="paint0_linear_5215_9232" x1="18.0012" y1="100" x2="172.501" y2="212.762" gradientUnits="userSpaceOnUse">
								<stop/>
								<stop offset="0.427083" stop-color="#121212"/>
								</linearGradient>
								<linearGradient id="paint1_linear_5215_9232" x1="53.4004" y1="63.8026" x2="88.0444" y2="63.8026" gradientUnits="userSpaceOnUse">
								<stop stop-color="#ED693C"/>
								<stop offset="0.008" stop-color="#ED693C"/>
								<stop offset="0.016" stop-color="#ED6A3B"/>
								<stop offset="0.023" stop-color="#ED6B3B"/>
								<stop offset="0.031" stop-color="#ED6C3A"/>
								<stop offset="0.039" stop-color="#EE6D3A"/>
								<stop offset="0.047" stop-color="#EE6D3A"/>
								<stop offset="0.055" stop-color="#EE6E39"/>
								<stop offset="0.063" stop-color="#EE6F39"/>
								<stop offset="0.07" stop-color="#EE7038"/>
								<stop offset="0.078" stop-color="#EE7138"/>
								<stop offset="0.086" stop-color="#EE7237"/>
								<stop offset="0.094" stop-color="#EE7237"/>
								<stop offset="0.102" stop-color="#EF7337"/>
								<stop offset="0.109" stop-color="#EF7436"/>
								<stop offset="0.117" stop-color="#EF7536"/>
								<stop offset="0.125" stop-color="#EF7635"/>
								<stop offset="0.133" stop-color="#EF7635"/>
								<stop offset="0.141" stop-color="#EF7735"/>
								<stop offset="0.148" stop-color="#EF7834"/>
								<stop offset="0.156" stop-color="#F07934"/>
								<stop offset="0.164" stop-color="#F07A33"/>
								<stop offset="0.172" stop-color="#F07A33"/>
								<stop offset="0.18" stop-color="#F07B32"/>
								<stop offset="0.188" stop-color="#F07C32"/>
								<stop offset="0.195" stop-color="#F07D32"/>
								<stop offset="0.203" stop-color="#F07E31"/>
								<stop offset="0.211" stop-color="#F17E31"/>
								<stop offset="0.219" stop-color="#F17F30"/>
								<stop offset="0.227" stop-color="#F18030"/>
								<stop offset="0.234" stop-color="#F1812F"/>
								<stop offset="0.242" stop-color="#F1822F"/>
								<stop offset="0.25" stop-color="#F1822F"/>
								<stop offset="0.258" stop-color="#F1832E"/>
								<stop offset="0.266" stop-color="#F2842E"/>
								<stop offset="0.273" stop-color="#F2852D"/>
								<stop offset="0.281" stop-color="#F2862D"/>
								<stop offset="0.289" stop-color="#F2862C"/>
								<stop offset="0.297" stop-color="#F2872C"/>
								<stop offset="0.305" stop-color="#F2882C"/>
								<stop offset="0.313" stop-color="#F2892B"/>
								<stop offset="0.32" stop-color="#F38A2B"/>
								<stop offset="0.328" stop-color="#F38A2A"/>
								<stop offset="0.336" stop-color="#F38B2A"/>
								<stop offset="0.344" stop-color="#F38C2A"/>
								<stop offset="0.352" stop-color="#F38D29"/>
								<stop offset="0.359" stop-color="#F38E29"/>
								<stop offset="0.367" stop-color="#F38E28"/>
								<stop offset="0.375" stop-color="#F38F28"/>
								<stop offset="0.383" stop-color="#F49027"/>
								<stop offset="0.391" stop-color="#F49127"/>
								<stop offset="0.398" stop-color="#F49227"/>
								<stop offset="0.406" stop-color="#F49226"/>
								<stop offset="0.414" stop-color="#F49326"/>
								<stop offset="0.422" stop-color="#F49425"/>
								<stop offset="0.43" stop-color="#F49525"/>
								<stop offset="0.438" stop-color="#F59624"/>
								<stop offset="0.445" stop-color="#F59624"/>
								<stop offset="0.453" stop-color="#F59724"/>
								<stop offset="0.461" stop-color="#F59823"/>
								<stop offset="0.469" stop-color="#F59923"/>
								<stop offset="0.477" stop-color="#F59A22"/>
								<stop offset="0.484" stop-color="#F59A22"/>
								<stop offset="0.492" stop-color="#F69B21"/>
								<stop offset="0.5" stop-color="#F69C21"/>
								<stop offset="0.508" stop-color="#F69D21"/>
								<stop offset="0.516" stop-color="#F69E20"/>
								<stop offset="0.523" stop-color="#F69E20"/>
								<stop offset="0.531" stop-color="#F69F1F"/>
								<stop offset="0.539" stop-color="#F6A01F"/>
								<stop offset="0.547" stop-color="#F7A11F"/>
								<stop offset="0.555" stop-color="#F7A21E"/>
								<stop offset="0.563" stop-color="#F7A21E"/>
								<stop offset="0.57" stop-color="#F7A31D"/>
								<stop offset="0.578" stop-color="#F7A41D"/>
								<stop offset="0.586" stop-color="#F7A51C"/>
								<stop offset="0.594" stop-color="#F7A61C"/>
								<stop offset="0.602" stop-color="#F8A61C"/>
								<stop offset="0.609" stop-color="#F8A71B"/>
								<stop offset="0.617" stop-color="#F8A81B"/>
								<stop offset="0.625" stop-color="#F8A91A"/>
								<stop offset="0.633" stop-color="#F8AA1A"/>
								<stop offset="0.641" stop-color="#F8AA19"/>
								<stop offset="0.648" stop-color="#F8AB19"/>
								<stop offset="0.656" stop-color="#F8AC19"/>
								<stop offset="0.664" stop-color="#F9AD18"/>
								<stop offset="0.672" stop-color="#F9AE18"/>
								<stop offset="0.68" stop-color="#F9AE17"/>
								<stop offset="0.688" stop-color="#F9AF17"/>
								<stop offset="0.695" stop-color="#F9B016"/>
								<stop offset="0.703" stop-color="#F9B116"/>
								<stop offset="0.711" stop-color="#F9B216"/>
								<stop offset="0.719" stop-color="#FAB215"/>
								<stop offset="0.727" stop-color="#FAB315"/>
								<stop offset="0.734" stop-color="#FAB414"/>
								<stop offset="0.742" stop-color="#FAB514"/>
								<stop offset="0.75" stop-color="#FAB614"/>
								<stop offset="0.758" stop-color="#FAB613"/>
								<stop offset="0.766" stop-color="#FAB713"/>
								<stop offset="0.773" stop-color="#FBB812"/>
								<stop offset="0.781" stop-color="#FBB912"/>
								<stop offset="0.789" stop-color="#FBBA11"/>
								<stop offset="0.797" stop-color="#FBBA11"/>
								<stop offset="0.805" stop-color="#FBBB11"/>
								<stop offset="0.813" stop-color="#FBBC10"/>
								<stop offset="0.82" stop-color="#FBBD10"/>
								<stop offset="0.828" stop-color="#FCBE0F"/>
								<stop offset="0.836" stop-color="#FCBE0F"/>
								<stop offset="0.844" stop-color="#FCBF0E"/>
								<stop offset="0.852" stop-color="#FCC00E"/>
								<stop offset="0.859" stop-color="#FCC10E"/>
								<stop offset="0.867" stop-color="#FCC20D"/>
								<stop offset="0.875" stop-color="#FCC20D"/>
								<stop offset="0.883" stop-color="#FDC30C"/>
								<stop offset="0.891" stop-color="#FDC40C"/>
								<stop offset="0.898" stop-color="#FDC50B"/>
								<stop offset="0.906" stop-color="#FDC60B"/>
								<stop offset="0.938" stop-color="#FDC60B"/>
								<stop offset="1" stop-color="#FDC60B"/>
								</linearGradient>
								<clipPath id="clip0_5215_9232">
								<rect width="40" height="40" fill="white" transform="translate(53 46)"/>
								</clipPath>
								<clipPath id="clip1_5215_9232">
								<rect width="40" height="40" fill="white" transform="translate(122 113)"/>
								</clipPath>
								</defs>
								</svg>


								<div class="w-full sm:w-3/5">
									<h2 class="text-3xl font-bold">sBTC Bridge</h2>
									<p class="text-lg mt-4">The bridge provides a non-custodial, permissionless way to move Bitcoin into and out of the Stacks Blockchain.</p>
									<p class="text-lg mt-2">Let's dive into the specifics of its functioning.</p>
								</div>
							</div>


					</div>
				</div>
			</div>

		</div>
  </div>
</div>