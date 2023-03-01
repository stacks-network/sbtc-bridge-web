import { fetchSbtcData, fetchCurrentFeeRates } from "$lib/bridge_api";

export const prerender = false

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    try {
        const feeInfo = await fetchCurrentFeeRates();
        const sbtcContractData = await fetchSbtcData();
        console.log('feeInfo: ', feeInfo)
        console.log('sbtcContractData: ', sbtcContractData)
        return { 
            sbtcContractData,
            feeInfo
        };
    } catch (err) {
        console.log('LayoutLoad Error: ', err);
        return { 
            sbtcContractData: 'unknown at present',
            feeInfo: {
                low_fee_per_kb: 20000,
                medium_fee_per_kb: 35000,
                high_fee_per_kb: 50000
            }
        };
    }
}