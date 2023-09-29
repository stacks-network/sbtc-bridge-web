<script lang="ts">
import ChevronDown from "$lib/components/shared/ChevronDown.svelte";
import ChevronUp from "$lib/components/shared/ChevronUp.svelte";

let componentKey = 0;

const toggleAnswer = (index:number) => {
	questions[index].hidden = !questions[index].hidden
}
let questions = [
	{
		hidden: true,
		question: 'What is the purpose of the sBTC bridge?',
		answer: 'The sBTB bridge supports a trustless two-way peg between BTC and sBTC. sBTC is a SIP-010 fungible token on the Stacks Blockchain that can be used in DeFi protocols, NFT marketplaces, governance and many more applications.'
	},
	{
		hidden: true,
		question: 'What is sBTC?',
		answer: 'sBTC is Bitcoin wrapped in a token on the Stacks Blockchain.'
	},
	{
		hidden: true,
		question: 'Why convert my Bitcoin to sBTC?',
		answer: 'sBTC is more flexible and cheaper to move around. It can be used in many different ways on the Stacks Blockchain such as DeFi protocols and NFT marketplaces.'
	},
	{
		hidden: true,
		question: 'Can I get Bitcoin back from my sBTC?',
		answer: 'Yes - this is a decentralised two way bridge between the Bitcoin and Stacks Blockchains.'
	},
	{
		hidden: true,
		question: 'Where can I find out more about the sBTC bridge?',
		answer: 'For more info about the sBTC Bridge, check <a class="text-faq-link" href="/faq">the FAQ page</a>.'
	}
]
</script>

<svelte:head>
  <title>sBTC Bridge - FAQ</title>
  <meta name="description" content="Frequently asked questions about the sBTC Bridge." />
</svelte:head>

<div class="mx-auto flex flex-col justify-center px-6 lg:px-8 py-12 w-full max-w-5xl">
	<div class="p-10 gap-6 items-start bg-gray-1000 border-[0.5px] border-gray-700 rounded-lg">
		<h1 class="text-4xl font-normal">Frequently Asked Questions</h1>
		<div class="space-y-8 divide-y divide-gray-700/50 mt-12">
			{#key componentKey}
				{#each questions as q, i}
					<div class="pt-4 flex-1">
						<div aria-hidden="true" class="flex items-start justify-between cursor-pointer text-2xl font-normal " on:keydown on:click={() => toggleAnswer(i)}>
							<p>{q.question}</p>
							{#if q.hidden}
								<button class="mt-1">
									<ChevronDown />
								</button>
							{:else}
								<button class="mt-1">
									<ChevronUp />
								</button>
							{/if}
						</div>
						{#if !q.hidden}
							<div id={'answer-' + i} class="sm:max-w-[80%] text-base font-light mt-6">{@html q.answer}</div>
						{/if}
					</div>
				{/each}
			{/key}
		</div>
	</div>
</div>
