import { fetchSbtcData } from "$lib/bridge_api";

export const prerender = false;
export const ssr = false;

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    try {
        const sbtcContractData = await fetchSbtcData();
        return { 
            sbtcContractData: JSON.parse(sbtcContractData),
        };
    } catch (err) {
        console.log('LayoutLoad Error: ', err);
        return { 
            sbtcContractData: 'unknown at present',
        };
    }
}