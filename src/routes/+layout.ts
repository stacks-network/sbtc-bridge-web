import { fetchSbtcData } from "$lib/bridge_api";

export const prerender = false

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    try {
        const sbtcContractData = await fetchSbtcData();
        console.log('sbtcContractData: ', sbtcContractData)
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