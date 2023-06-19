
export const prerender = false;
export const ssr = false;

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    return { 
        sbtcContractData: 'unknown at present',
    };
}