<script lang="ts">
import ChevronDown from "$lib/components/shared/ChevronDown.svelte";
import ChevronUp from "$lib/components/shared/ChevronUp.svelte";

let componentKey = 0;

const toggleAnswer = (index:number) => {
    questions[index].hidden = !questions[index].hidden
}
const toggleAll = () => {
    questions.map((q) => q.hidden = (componentKey % 2) === 1)
    componentKey++;
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
        answer: 'For more info about the sBTC Bridge, check <a class="text-faq-link" href="/faq">the FAQ page.</a>'
    }
]
</script>
<div class="border border-gray-700 rounded-lg md:w-3/4 sm:w-5/6 my-20">
    <div class="p-5">
        <div class="mb-14 cursor-pointer flex text-2xl font-normal">
            <h1 class="grow " on:keydown on:click={() => toggleAll()}>Frequently Asked Questions</h1>
            <span class="" on:keydown on:click={() => toggleAll()}>
            {#if componentKey % 2 === 0}
                <ChevronDown />
            {:else}
                <ChevronUp />
            {/if}
            </span>
        </div>
        {#key componentKey}
        {#each questions as q, i}
            <div class="border-b border-b-gray-700 mb-10 pb-8">
                <div class="cursor-pointer flex text-1xl font-normal " on:keydown on:click={() => toggleAnswer(i)}>
                    <span class="grow">{q.question}</span>
                    <span class="">
                        {#if q.hidden}
                            <ChevronDown />
                        {:else}
                            <ChevronUp />
                        {/if}
                    </span>
                </div>
                {#if !q.hidden}
                <div id={'answer-' + i} class="text-sm font-light mt-6">{@html q.answer}</div>
                {/if}
            </div>
        {/each}
        {/key}
    </div>
</div>
