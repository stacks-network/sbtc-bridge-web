<script lang="ts">
	import { Icon, ShieldCheck } from "svelte-hero-icons";
	import SwitchGraphic from '$lib/components/dashboard/shared/SwitchGraphic.svelte';


	let stepsDeposit = [
		{
			title: 'Deposit BTC',
			description: 'Enter the amount you want to deposit (within your Bitcoin balance in your Leather/Xverse wallet).',
			explanation: 'The bridge generates a custom transaction using your Stacks address and Bitcoin address. This transaction moves Bitcoin from your wallet to the sBTC wallet.'
		},
		{
			title: 'Sign & Send',
			description: 'Sign and send the transaction.',
			explanation: 'A Stacks node processes the transaction, instructing a Clarity contract to mint your sBTC. This step is fully decentralized and cannot be stopped in the final Nakamoto release.After processing, your sBTC will appear in your wallet and can be used across various services on the Stacks network.'
		},
	]

	let stepsWithdraw = [
		{
			title: 'Withdrawal Amount',
			description: 'Specify the amount of sBTC you want to withdraw (must not exceed your sBTC balance).'
		},
		{
			title: 'Return Address',
			description: 'Provide a signature to indicate where your Bitcoin should be returned (by default, your wallet\'s Bitcoin address).',
			explanation: 'The bridge generates a custom transaction that sends your withdrawal request to the Stacks network.'
		},
		{
			title: 'Sign & Broadcast',
			description: 'If you are satisfied with the transaction, sign and broadcast it.',
			explanation: 'Your transaction triggers a fulfilment process. Stacks signers approve the withdrawal from the sBTC wallet they control. Upon approval, your Bitcoin is returned to your wallet.'
		},
	]
</script>

<svelte:head>
  <title>sBTC Bridge - How it works</title>
  <meta name="description" content="The bridge provides a non-custodial, permissionless way to move Bitcoin into and out of the Stacks Blockchain. Let's dive into the specifics of its functioning." />
</svelte:head>

<div class="py-6 mx-auto max-w-7xl md:px-6">
  <div class="flex flex-col w-full my-8">
    <div class="flex flex-col w-full border-[0.5px] border-gray-700 rounded-lg p-6 sm:p-10 overflow-hidden bg-gray-1000">

			<div class="space-y-8">
				<h1 class="text-3xl sm:text-4xl font-bold">How it works</h1>

				<div class="p-[1.2px] bg-[linear-gradient(126.12deg,rgba(237,105,60,0.5)11.8%,rgba(254,219,99,0.2)72.43%)] rounded-lg">
					<div
						class="relative flex items-center p-6 bg-[linear-gradient(126.12deg,rgba(0,0,0,0.95)21.1%,rgba(18,18,18,0.5)53.58%);] rounded-lg"
					>
						<div class="sm:flex sm:items-center gap-x-10">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" class="h-auto w-32 sm:w-44 shrink-0" viewBox="0 0 208 204">
								<g filter="url(#filter0_d_5215_9232)">
									<circle cx="108" cy="100" r="90" fill="url(#paint0_linear_5215_9232)"/>
									<circle cx="108" cy="100" r="89.5" stroke="#6A6A6A"/>
								</g>
								<g clip-path="url(#clip0_5215_9232)">
									<mask id="mask0_5215_9232" width="40" height="40" x="53" y="46" maskUnits="userSpaceOnUse" style="mask-type:luminance">
										<path fill="#fff" d="M53 46h40v40H53V46Z"/>
									</mask>
									<g mask="url(#mask0_5215_9232)">
										<path fill="#000" d="M88.044 85.726H57.978a4.592 4.592 0 0 1-4.58-4.58V51.062a4.592 4.592 0 0 1 4.582-4.578h30.08a4.592 4.592 0 0 1 4.58 4.578v30.084a4.62 4.62 0 0 1-4.596 4.58Z"/>
										<mask id="mask1_5215_9232" width="36" height="36" x="53" y="46" maskUnits="userSpaceOnUse" style="mask-type:luminance">
											<path fill="#fff" d="M53.32 46.424h34.774v34.774H53.32V46.424Z"/>
										</mask>
										<g mask="url(#mask1_5215_9232)">
											<mask id="mask2_5215_9232" width="36" height="36" x="53" y="46" maskUnits="userSpaceOnUse" style="mask-type:luminance">
												<path fill="#fff" d="M69.842 58.6h6.08l12.122-12.12H57.978a4.592 4.592 0 0 0-4.58 4.575V81.14l16.444-16.463V58.6Z"/>
											</mask>
											<g mask="url(#mask2_5215_9232)">
												<path fill="url(#paint1_linear_5215_9232)" d="M53.4 46.477V81.14h34.644V46.477H53.4Z"/>
											</g>
										</g>
										<path fill="#fff" d="m59.332 58.697.532-1.062c.072-.202.274-.24.458-.146 0 0 .896.476 1.794.476.402 0 .678-.166.678-.496 0-.348-.276-.566-1.32-.988-1.52-.586-2.234-1.41-2.234-2.6 0-1.208.9-2.326 2.912-2.326 1.172 0 2.014.33 2.436.604.182.11.274.33.182.532l-.494 1.006c-.092.184-.312.202-.476.148 0 0-.898-.422-1.63-.422-.476 0-.676.2-.676.458 0 .348.348.476 1.08.768 1.52.586 2.672 1.246 2.672 2.784 0 1.3-1.152 2.418-3.13 2.418-1.3 0-2.216-.422-2.62-.734-.164-.108-.256-.274-.164-.42Zm7.488-2.454c0-.292.24-.568.57-.568h6.83c3.552 0 6.28 2.38 6.28 5.512 0 2.29-1.886 4.084-3.278 4.742 1.576.514 3.882 2.124 3.882 4.854 0 3.332-2.856 5.75-6.5 5.75H67.39a.57.57 0 0 1-.568-.568v-19.72l-.002-.002Zm7.034 8.186c1.52 0 2.562-1.192 2.562-2.674 0-1.484-1.042-2.528-2.562-2.528h-3.186v5.22h3.186v-.02.002Zm.42 8.588c1.484 0 2.674-1.154 2.674-2.71 0-1.484-1.484-2.6-3.04-2.6h-3.24v5.31h3.606Z"/>
									</g>
								</g>
								<g clip-path="url(#clip1_5215_9232)">
									<path fill="#F7931A" d="M161.402 137.842a20.003 20.003 0 0 1-9.105 12.3 19.982 19.982 0 0 1-15.135 2.26 20 20 0 0 1-14.934-16.447 19.985 19.985 0 0 1 1.693-11.483 19.993 19.993 0 0 1 37.481 13.37Z"/>
									<path fill="#fff" d="M150.82 130.151c.4-2.66-1.63-4.09-4.4-5.047l.9-3.603-2.197-.547-.876 3.51a85.44 85.44 0 0 0-1.757-.413l.88-3.534-2.193-.546-.897 3.6-4.427-1.094-.583 2.344s1.627.373 1.593.396c.89.224 1.05.81 1.024 1.277l-2.464 9.873c-.11.267-.383.674-1.006.52.023.034-1.594-.4-1.594-.4l-1.09 2.514 4.42 1.116-.91 3.647 2.194.547.9-3.607c.6.163 1.18.313 1.75.453l-.9 3.59 2.196.547.91-3.64c3.74.713 6.557.427 7.74-2.953.954-2.724-.046-4.297-2.016-5.32 1.433-.334 2.513-1.277 2.8-3.224h.003v-.006Zm-5.017 7.033c-.68 2.723-5.266 1.25-6.753.88l1.203-4.83c1.487.37 6.257 1.107 5.55 3.95Zm.68-7.07c-.616 2.48-4.436 1.22-5.676.91l1.09-4.383c1.24.31 5.233.886 4.586 3.473Z"/>
								</g>
								<path fill="#A5A5A5" d="M105.736 135.001a1 1 0 1 0 0-2v2Zm-31.293-33.707a1 1 0 0 0-1.414 0l-6.364 6.363a1.001 1.001 0 0 0 1.414 1.415l5.657-5.657 5.657 5.657a1 1 0 0 0 1.414-1.415l-6.364-6.363Zm31.293 31.707c-4.73 0-8.778.094-12.235.184-3.465.09-6.315.175-8.678.159-2.37-.015-4.185-.133-5.59-.428-1.393-.292-2.306-.745-2.944-1.376-.638-.631-1.098-1.538-1.4-2.928-.305-1.401-.434-3.216-.46-5.591-.025-2.369.05-5.23.134-8.711.083-3.475.173-7.547.173-12.309h-2c0 4.737-.09 8.79-.172 12.261-.083 3.463-.16 6.368-.134 8.78.026 2.407.155 4.388.504 5.995.352 1.618.944 2.93 1.948 3.924 1.003.994 2.321 1.573 3.94 1.913 1.609.337 3.588.455 5.988.47 2.405.016 5.298-.071 8.743-.16 3.452-.09 7.479-.183 12.183-.183v-2ZM110 65.2a1 1 0 0 0 0 2v-2Zm31.293 33.708a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 1 0-1.414-1.415L142 96.786l-5.657-5.657a1 1 0 1 0-1.414 1.415l6.364 6.364ZM110 67.2c4.73 0 8.778-.094 12.235-.184 3.465-.09 6.315-.176 8.678-.16 2.37.015 4.185.133 5.59.428 1.394.293 2.307.745 2.945 1.376.637.632 1.097 1.538 1.4 2.928.305 1.401.433 3.217.459 5.591.025 2.37-.051 5.23-.134 8.712A496.613 496.613 0 0 0 141 98.2h2c0-4.738.089-8.79.172-12.261.083-3.464.161-6.369.135-8.781-.026-2.407-.155-4.388-.505-5.995-.352-1.618-.943-2.93-1.947-3.924-1.004-.993-2.322-1.572-3.941-1.912-1.608-.338-3.588-.455-5.987-.471-2.406-.016-5.299.07-8.744.16-3.452.09-7.479.184-12.183.184v2Z"/>
								<defs>
									<linearGradient id="paint0_linear_5215_9232" x1="18.001" x2="172.501" y1="100" y2="212.762" gradientUnits="userSpaceOnUse">
										<stop/>
										<stop offset=".427" stop-color="#121212"/>
									</linearGradient>
									<linearGradient id="paint1_linear_5215_9232" x1="53.4" x2="88.044" y1="63.803" y2="63.803" gradientUnits="userSpaceOnUse">
										<stop stop-color="#ED693C"/>
										<stop offset=".008" stop-color="#ED693C"/>
										<stop offset=".016" stop-color="#ED6A3B"/>
										<stop offset=".023" stop-color="#ED6B3B"/>
										<stop offset=".031" stop-color="#ED6C3A"/>
										<stop offset=".039" stop-color="#EE6D3A"/>
										<stop offset=".047" stop-color="#EE6D3A"/>
										<stop offset=".055" stop-color="#EE6E39"/>
										<stop offset=".063" stop-color="#EE6F39"/>
										<stop offset=".07" stop-color="#EE7038"/>
										<stop offset=".078" stop-color="#EE7138"/>
										<stop offset=".086" stop-color="#EE7237"/>
										<stop offset=".094" stop-color="#EE7237"/>
										<stop offset=".102" stop-color="#EF7337"/>
										<stop offset=".109" stop-color="#EF7436"/>
										<stop offset=".117" stop-color="#EF7536"/>
										<stop offset=".125" stop-color="#EF7635"/>
										<stop offset=".133" stop-color="#EF7635"/>
										<stop offset=".141" stop-color="#EF7735"/>
										<stop offset=".148" stop-color="#EF7834"/>
										<stop offset=".156" stop-color="#F07934"/>
										<stop offset=".164" stop-color="#F07A33"/>
										<stop offset=".172" stop-color="#F07A33"/>
										<stop offset=".18" stop-color="#F07B32"/>
										<stop offset=".188" stop-color="#F07C32"/>
										<stop offset=".195" stop-color="#F07D32"/>
										<stop offset=".203" stop-color="#F07E31"/>
										<stop offset=".211" stop-color="#F17E31"/>
										<stop offset=".219" stop-color="#F17F30"/>
										<stop offset=".227" stop-color="#F18030"/>
										<stop offset=".234" stop-color="#F1812F"/>
										<stop offset=".242" stop-color="#F1822F"/>
										<stop offset=".25" stop-color="#F1822F"/>
										<stop offset=".258" stop-color="#F1832E"/>
										<stop offset=".266" stop-color="#F2842E"/>
										<stop offset=".273" stop-color="#F2852D"/>
										<stop offset=".281" stop-color="#F2862D"/>
										<stop offset=".289" stop-color="#F2862C"/>
										<stop offset=".297" stop-color="#F2872C"/>
										<stop offset=".305" stop-color="#F2882C"/>
										<stop offset=".313" stop-color="#F2892B"/>
										<stop offset=".32" stop-color="#F38A2B"/>
										<stop offset=".328" stop-color="#F38A2A"/>
										<stop offset=".336" stop-color="#F38B2A"/>
										<stop offset=".344" stop-color="#F38C2A"/>
										<stop offset=".352" stop-color="#F38D29"/>
										<stop offset=".359" stop-color="#F38E29"/>
										<stop offset=".367" stop-color="#F38E28"/>
										<stop offset=".375" stop-color="#F38F28"/>
										<stop offset=".383" stop-color="#F49027"/>
										<stop offset=".391" stop-color="#F49127"/>
										<stop offset=".398" stop-color="#F49227"/>
										<stop offset=".406" stop-color="#F49226"/>
										<stop offset=".414" stop-color="#F49326"/>
										<stop offset=".422" stop-color="#F49425"/>
										<stop offset=".43" stop-color="#F49525"/>
										<stop offset=".438" stop-color="#F59624"/>
										<stop offset=".445" stop-color="#F59624"/>
										<stop offset=".453" stop-color="#F59724"/>
										<stop offset=".461" stop-color="#F59823"/>
										<stop offset=".469" stop-color="#F59923"/>
										<stop offset=".477" stop-color="#F59A22"/>
										<stop offset=".484" stop-color="#F59A22"/>
										<stop offset=".492" stop-color="#F69B21"/>
										<stop offset=".5" stop-color="#F69C21"/>
										<stop offset=".508" stop-color="#F69D21"/>
										<stop offset=".516" stop-color="#F69E20"/>
										<stop offset=".523" stop-color="#F69E20"/>
										<stop offset=".531" stop-color="#F69F1F"/>
										<stop offset=".539" stop-color="#F6A01F"/>
										<stop offset=".547" stop-color="#F7A11F"/>
										<stop offset=".555" stop-color="#F7A21E"/>
										<stop offset=".563" stop-color="#F7A21E"/>
										<stop offset=".57" stop-color="#F7A31D"/>
										<stop offset=".578" stop-color="#F7A41D"/>
										<stop offset=".586" stop-color="#F7A51C"/>
										<stop offset=".594" stop-color="#F7A61C"/>
										<stop offset=".602" stop-color="#F8A61C"/>
										<stop offset=".609" stop-color="#F8A71B"/>
										<stop offset=".617" stop-color="#F8A81B"/>
										<stop offset=".625" stop-color="#F8A91A"/>
										<stop offset=".633" stop-color="#F8AA1A"/>
										<stop offset=".641" stop-color="#F8AA19"/>
										<stop offset=".648" stop-color="#F8AB19"/>
										<stop offset=".656" stop-color="#F8AC19"/>
										<stop offset=".664" stop-color="#F9AD18"/>
										<stop offset=".672" stop-color="#F9AE18"/>
										<stop offset=".68" stop-color="#F9AE17"/>
										<stop offset=".688" stop-color="#F9AF17"/>
										<stop offset=".695" stop-color="#F9B016"/>
										<stop offset=".703" stop-color="#F9B116"/>
										<stop offset=".711" stop-color="#F9B216"/>
										<stop offset=".719" stop-color="#FAB215"/>
										<stop offset=".727" stop-color="#FAB315"/>
										<stop offset=".734" stop-color="#FAB414"/>
										<stop offset=".742" stop-color="#FAB514"/>
										<stop offset=".75" stop-color="#FAB614"/>
										<stop offset=".758" stop-color="#FAB613"/>
										<stop offset=".766" stop-color="#FAB713"/>
										<stop offset=".773" stop-color="#FBB812"/>
										<stop offset=".781" stop-color="#FBB912"/>
										<stop offset=".789" stop-color="#FBBA11"/>
										<stop offset=".797" stop-color="#FBBA11"/>
										<stop offset=".805" stop-color="#FBBB11"/>
										<stop offset=".813" stop-color="#FBBC10"/>
										<stop offset=".82" stop-color="#FBBD10"/>
										<stop offset=".828" stop-color="#FCBE0F"/>
										<stop offset=".836" stop-color="#FCBE0F"/>
										<stop offset=".844" stop-color="#FCBF0E"/>
										<stop offset=".852" stop-color="#FCC00E"/>
										<stop offset=".859" stop-color="#FCC10E"/>
										<stop offset=".867" stop-color="#FCC20D"/>
										<stop offset=".875" stop-color="#FCC20D"/>
										<stop offset=".883" stop-color="#FDC30C"/>
										<stop offset=".891" stop-color="#FDC40C"/>
										<stop offset=".898" stop-color="#FDC50B"/>
										<stop offset=".906" stop-color="#FDC60B"/>
										<stop offset=".938" stop-color="#FDC60B"/>
										<stop offset="1" stop-color="#FDC60B"/>
									</linearGradient>
									<clipPath id="clip0_5215_9232">
										<path fill="#fff" d="M53 46h40v40H53z"/>
									</clipPath>
									<clipPath id="clip1_5215_9232">
										<path fill="#fff" d="M122 113h40v40h-40z"/>
									</clipPath>
									<filter id="filter0_d_5215_9232" width="204" height="204" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
										<feOffset dx="-6" dy="2"/>
										<feGaussianBlur stdDeviation="6"/>
										<feComposite in2="hardAlpha" operator="out"/>
										<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
										<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5215_9232"/>
										<feBlend in="SourceGraphic" in2="effect1_dropShadow_5215_9232" result="shape"/>
									</filter>
								</defs>
							</svg>

							<div class="w-full sm:w-3/5">
								<h2 class="text-2xl sm:text-3xl font-bold">sBTC Bridge</h2>
								<p class="mt-4 text-lg">The bridge provides a non-custodial, permissionless way to move Bitcoin into and out of the Stacks Blockchain.</p>
								<p class="mt-2 text-lg">Let's dive into the specifics of its functioning.</p>
							</div>
						</div>
					</div>
				</div>

				<div class="bg-[linear-gradient(180deg,#A9E6D2_0%,rgba(169,230,210,0.00)100%)] p-[1.2px] rounded-lg">
					<div class="relative lg:flex lg:items-center lg:justify-between gap-10 px-6 sm:px-10 py-6 rounded-lg bg-black-01">
						<div>
							<div class="flex items-center">
								<Icon src={ShieldCheck} class="w-6 h-6 mr-2 shrink-0 text-success-400" aria-hidden="true" />
								<h3 class="text-xl font-bold">Requirements</h3>
							</div>
							<ul class="pl-4 mt-3 space-y-2 list-disc">
								<li>A wallet that supports both Bitcoin (BTC) and Stacks (STX);<br/>we recommend Leather or Xverse.</li>
								<li>Some BTC in your wallet. ✨</li>
							</ul>
						</div>
						<div class="lg:flex lg:items-center lg:gap-4 space-y-4 lg:space-y-0 mt-6 lg:mt-0">
							<a href="https://leather.io/install-extension" class="block flex-1 border-gray-900 border hover:border-gray-600 transition duration-1000 ease-in-out rounded-md px-12 py-4 bg-[linear-gradient(126deg,#121212_43.55%,#404040_81.39%,#E4DDD6_94.51%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50">
								<svg class="mx-auto w-32 h-auto" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M90.2321 14.5531C89.366 16.1704 88.0947 17.1632 87.113 17.1632C86.3625 17.1632 85.7853 16.5394 85.7853 15.0643C85.7853 12.7661 86.9404 9.19207 87.4886 7.31913H78.8841L78.0461 10.1848C76.7763 14.582 74.7833 17.1632 71.6361 17.1632C71.1738 17.1632 70.6255 17.078 70.3366 16.9076C72.7044 15.2339 75.1011 12.5675 75.1011 9.92925C75.1011 7.74514 73.4838 6.89387 72.0109 6.89387C67.3916 6.89387 64.0991 12.8513 65.3408 16.5957C64.5903 16.8513 63.8976 17.1632 63.0604 17.1632C62.2225 17.1632 61.7602 16.5957 61.9335 15.8296C62.1358 14.922 63.2908 11.8866 63.2908 10.2412C63.2908 8.22745 61.7024 6.86572 59.3064 6.86572C58.7574 6.86572 58.1513 7.00722 57.5446 7.23393L59.0752 1.92925H56.0717L52.491 14.2982C51.9428 16.2267 50.2973 17.1632 48.9393 17.1632C47.236 17.1632 46.6011 15.8296 47.0048 14.4968L48.2754 10.156H51.5383L52.3755 7.31913H49.0837L50.6433 1.92925H47.6405L43.742 15.3762C43.3671 16.6527 42.4714 17.1632 41.692 17.1632C40.4503 17.1632 40.0747 16.1704 40.3347 15.2628L42.6448 7.31913C41.8365 7.06427 40.6814 6.86572 39.7865 6.86572C34.6174 6.86572 29.7372 11.3762 29.7372 15.8296V15.8422C28.3547 16.7127 26.7507 17.1632 25.3482 17.1632C24.3666 17.1632 23.8183 17.078 23.3849 16.8513C25.8105 15.291 28.3229 12.6809 28.3229 9.92925C28.3229 7.74514 26.7055 6.89387 25.2327 6.89387C20.6414 6.89387 17.4364 12.709 18.5048 16.4253C17.4942 16.9365 16.5703 17.1913 15.5598 17.1913C13.9713 17.1913 12.4696 16.5394 11.3145 15.2339L12.7874 10.156C16.3681 9.8722 21.1038 6.97907 21.1038 3.43323C21.1038 1.22023 19.602 0 17.6965 0C14.3181 0 11.7768 3.20578 10.5929 7.31913C8.39844 7.06427 7.21451 4.73791 8.94743 1.92925H5.82833C3.8939 6.15595 5.85723 9.10687 9.78462 10.156L8.83185 13.4188C7.38788 12.5394 6.26174 12.1986 4.93335 12.1986C-1.44783 12.1986 -1.70788 20 4.55773 20C6.37732 20 8.5718 19.0635 9.72683 17.8159C11.3723 19.2339 12.9897 20 15.0686 20C16.657 20 18.2736 19.5458 19.9487 18.5812C21.0749 19.4895 22.5477 20 24.6555 20C26.5277 20 28.3999 19.6184 30.3277 18.2871C30.8989 19.2747 31.9413 20 33.6935 20C35.1664 20 36.7829 19.3762 37.9958 18.0426C38.8907 19.3191 40.248 20 41.6342 20C42.7892 20 43.9732 19.5458 44.9837 18.6383C45.792 19.4895 47.2649 20 48.8822 20C51.3938 20 54.1951 18.6953 55.1767 15.3191L56.3036 11.4043C56.6496 10.2412 57.5735 9.70254 58.6418 9.70254C59.5664 9.70254 60.0569 10.156 60.0569 10.9502C60.0569 12.426 58.7285 15.943 58.7285 17.1913C58.7285 19.291 60.1725 20 62.1069 20C63.3197 20 64.2725 19.9718 66.9871 18.7805C68.0843 19.5747 69.7883 20 71.7227 20C76.025 20 79.0285 17.1061 81.0786 10.156H83.6768C83.1863 11.7733 82.8396 13.5603 82.8396 15.1487C82.8396 17.8159 83.8213 20 86.8537 20C89.2215 20 92.5133 17.6455 93.3504 14.5531H90.2321ZM17.263 2.83682C17.812 2.83682 18.1869 3.14947 18.1869 3.60289C18.1869 5.10687 15.4731 7.03538 13.5957 7.31913C14.4625 4.36896 16.2236 2.83682 17.263 2.83682ZM4.7022 17.1632C2.24767 17.1632 2.44993 14.7805 4.90446 14.7805C5.9728 14.7805 6.80999 15.1206 7.82055 15.9718C7.12783 16.7379 5.79944 17.1632 4.7022 17.1632ZM24.3666 9.70254C24.9734 9.70254 25.3482 10.0715 25.3482 10.6672C25.3482 12.2556 23.2404 14.213 21.4505 15.2058C20.8148 13.3899 22.6344 9.70254 24.3666 9.70254ZM34.2136 17.1632C33.3179 17.1632 32.8852 16.5394 32.8852 15.631C32.8852 13.4469 35.2819 9.75884 38.9485 9.70254C37.6209 14.2693 36.7252 17.1632 34.2136 17.1632ZM71.1449 9.70254C71.7516 9.70254 72.1265 10.0715 72.1265 10.6672C72.1265 12.2556 69.9328 14.2982 68.2577 15.3191C67.5353 13.6173 69.3838 9.70254 71.1449 9.70254Z" fill="white"/>
									</svg>
									<p class="mt-6 text-sm text-center">
										Browser extension<br/>Desktop app
									</p>
								</a>
							<a href="https://www.xverse.app/download" class="block flex-1 border-gray-900 border hover:border-gray-600 transition duration-1000 ease-in-out rounded-md px-12 py-4 bg-[linear-gradient(126deg,#121212_43.38%,#404040_81.42%,#EE7A30_94.1%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50">
								<svg class="mx-auto w-32 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 16" fill="none">
									<path fill="#fff" d="M19.696 15.053 14.95 1.551c-.051-.153.05-.305.228-.305h3.3c.101 0 .177.076.228.152l2.208 7.082.634 2.208c0 .025.026.025.026.025.025 0 .025 0 .025-.025.127-.584.33-1.32.61-2.209l2.258-7.08c.026-.102.127-.153.229-.153h3.248c.153 0 .28.152.229.305l-4.797 13.502c-.026.101-.127.152-.229.152H19.9c-.102 0-.178-.05-.203-.152ZM35.71 15.637c-2.258 0-4.035-.686-5.33-2.082-1.294-1.396-1.928-3.172-1.928-5.355 0-2.157.634-3.858 1.929-5.254C31.675 1.526 33.325.84 35.355.84c2.208 0 3.909.761 5.102 2.284 1.167 1.498 1.776 3.452 1.802 5.914a.228.228 0 0 1-.229.228h-9.67c-.152 0-.254.127-.228.28.178.99.533 1.75 1.091 2.309.61.609 1.422.914 2.462.914 1.32 0 2.183-.533 2.64-1.6.025-.075.127-.126.203-.126h3.223c.152 0 .254.152.228.279-.304 1.193-.99 2.183-2.005 2.995-1.116.888-2.538 1.32-4.264 1.32Zm-.279-11.955c-1.726 0-2.792.914-3.198 2.742-.025.152.077.279.229.279h5.685c.127 0 .254-.127.228-.254-.101-.787-.38-1.421-.888-1.929-.533-.558-1.244-.838-2.056-.838ZM51.65 4.216a.228.228 0 0 1-.228.228h-3.757a.227.227 0 0 0-.228.228v10.33a.228.228 0 0 1-.228.229h-3.122a.228.228 0 0 1-.229-.229V5.688A4.446 4.446 0 0 1 48.3 1.246h3.096c.127 0 .229.102.229.229l.025 2.74ZM59.085 15.637c-2.03 0-3.604-.432-4.746-1.32-1.066-.838-1.523-1.954-1.675-3.376 0-.127.102-.254.228-.254h3.02c.102 0 .204.077.23.178.278 1.421 1.116 2.132 2.867 2.132.838 0 1.472-.152 1.929-.431.457-.305.685-.686.685-1.168 0-.178-.025-.355-.101-.482a1.227 1.227 0 0 0-.33-.406c-.152-.127-.305-.203-.406-.28-.127-.076-.33-.152-.61-.228a7.315 7.315 0 0 0-.685-.152 27.865 27.865 0 0 1-.812-.152c-.38-.077-.634-.102-.787-.153a18.675 18.675 0 0 1-1.878-.457 7.877 7.877 0 0 1-1.523-.685c-.532-.304-.939-.71-1.192-1.218-.28-.508-.407-1.142-.407-1.878 0-1.447.533-2.564 1.625-3.325 1.091-.761 2.436-1.168 4.111-1.168 1.828 0 3.25.407 4.29 1.244.964.787 1.396 1.827 1.573 3.147.026.127-.101.254-.228.254h-2.944c-.102 0-.203-.076-.229-.203-.203-1.244-.939-1.853-2.512-1.853-.762 0-1.346.127-1.777.406-.431.28-.66.66-.66 1.142 0 .153.026.305.102.457a.884.884 0 0 0 .33.356c.152.101.304.177.456.253.153.077.356.127.635.203.28.077.508.127.71.153.204.05.483.101.838.152.355.076.635.102.838.152.584.127 1.066.254 1.446.33.381.102.813.254 1.32.482.508.229.889.483 1.168.762.279.28.533.66.736 1.142.203.482.304 1.04.304 1.675 0 1.396-.558 2.487-1.65 3.3-1.065.862-2.512 1.269-4.289 1.269ZM73.452 15.637c-2.26 0-4.036-.686-5.33-2.082-1.295-1.396-1.93-3.172-1.93-5.355 0-2.157.635-3.858 1.93-5.254C69.416 1.526 71.066.84 73.096.84c2.208 0 3.909.761 5.102 2.284C79.365 4.622 79.974 6.576 80 9.038a.228.228 0 0 1-.229.228h-9.67c-.152 0-.253.127-.228.28.178.99.533 1.75 1.091 2.309.61.609 1.422.914 2.462.914 1.32 0 2.183-.533 2.64-1.6.025-.075.127-.126.203-.126h3.223c.152 0 .254.152.229.279-.305 1.193-.99 2.183-2.005 2.995-1.117.888-2.538 1.32-4.264 1.32Zm-.305-11.955c-1.726 0-2.792.914-3.198 2.742-.025.152.076.279.229.279h5.685c.127 0 .254-.127.228-.254-.101-.787-.38-1.421-.888-1.929-.508-.558-1.218-.838-2.056-.838ZM14.01 14.977v-2.538a.532.532 0 0 0-.102-.28L3.071 1.298a.382.382 0 0 0-.28-.102H.255a.227.227 0 0 0-.229.229v2.36c0 .102.051.203.102.28L4.01 7.945c.102.102.102.229 0 .33L.076 12.21c-.05.051-.076.102-.076.153v2.588c0 .127.102.229.228.229h4.264a.227.227 0 0 0 .229-.229V13.43c0-.051.025-.127.076-.153l2.106-2.106c.102-.102.229-.102.33 0l3.909 3.908a.382.382 0 0 0 .28.102h2.36c.126.025.228-.076.228-.203Z"/>
									<path fill="#EE7A30" d="M8.3 4.546h2.132c.127 0 .228.101.228.228v2.132c0 .203.254.304.38.152l2.92-2.919c.05-.05.076-.101.076-.152V1.424a.227.227 0 0 0-.229-.229H11.22c-.051 0-.127.026-.153.076L8.148 4.165c-.153.127-.051.38.152.38Z"/>
								</svg>
								<p class="mt-6 text-sm text-center">
									Browser extension<br/>Mobile app
								</p>
							</a>
						</div>
					</div>
				</div>

				<div class="md:grid md:grid-cols-2 md:gap-6 space-y-4 md:space-y-0">
					<div class="space-y-6 px-6 sm:px-10 space-y-8 divide-y divide-gray-400/30 py-6 bg-white/5 rounded-lg border border-primary-500/20 shadow-[0px_1px_6px_0px_rgba(254,219,99,0.20)]">
						<div>
							<div class="lg:flex lg:items-start lg:justify-between lg:gap-4 space-y-4 lg:space-y-0">
								<span class="inline-flex px-3 py-1 text-sm font-medium rounded-3xl bg-primary-01 text-gray-1000">Deposit timeline</span>
								<SwitchGraphic reverse={true} />
							</div>
							<h3 class="text-2xl font-bold mt-4 lg:mt-0">Deposit BTC, mint sBTC</h3>
						</div>
						<div>
							<div class="pt-8 space-y-8">
								{#each stepsDeposit as step, i}
									<div class="flex gap-4">
										<div class="w-2 rounded-md bg-primary-02 shrink-0"></div>
										<div class="flex-1">
											<div class="flex items-center justify-between flex-1 mb-4">
												<span class="font-medium text-transparent bg-clip-text bg-primary-02">Step {i+1}</span>
												<span class="inline-flex px-3 py-1 text-xs font-medium bg-gray-400 rounded-3xl text-gray-1000">{step.title}</span>
											</div>
											<p>{step.description}</p>
											<p class="mt-3 text-sm text-gray-300">{step.explanation}</p>
										</div>
									</div>
								{/each}
							</div>
						</div>
					</div>

					<div class="space-y-6 px-6 sm:px-10 space-y-8 divide-y divide-gray-400/30 py-6 bg-white/5 rounded-lg border border-blue-500/20 shadow-[0px_1px_6px_0px_rgba(173,188,246,0.20)]">
						<div>
							<div class="lg:flex lg:items-start lg:justify-between lg:gap-4 space-y-4 lg:space-y-0">
								<span class="inline-flex px-3 py-1 text-sm font-medium rounded-3xl bg-primary-03 text-gray-1000">Withdraw timeline</span>
								<SwitchGraphic reverse={false} />
							</div>
							<h3 class="text-2xl font-bold mt-4 sm:mt-0">Withdraw BTC, burn sBTC</h3>
						</div>
						<div>
							<div class="pt-8 space-y-6">
								{#each stepsWithdraw as step, i}
									<div class="flex gap-4">
										<div class="w-2 rounded-md bg-primary-03 shrink-0"></div>
										<div class="flex-1">
											<div class="flex items-center justify-between flex-1 mb-4">
												<span class="font-medium text-transparent bg-clip-text bg-primary-03">Step {i+1}</span>
												<span class="inline-flex px-3 py-1 text-xs font-medium bg-gray-400 rounded-3xl text-gray-1000">{step.title}</span>
											</div>
											<p>{step.description}</p>
											{#if step.explanation}
												<p class="mt-3 text-sm text-gray-300">{step.explanation}</p>
											{/if}
										</div>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</div>
