import { writable } from 'svelte/store';
import { persisted } from 'svelte-local-storage-store'
import type { SbtcConfig } from '$types/sbtc_config';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const threads = writable([]);
export const sbtcConfig = persisted('sbtcConfig', { 
    network: 'mainnet', 
    feeInfo: {
        high_fee_per_kb: 48783,
        low_fee_per_kb:  20000,
        medium_fee_per_kb: 30998,
    },
    feeCalc: {
        pegInFeeCalc: {
            feeToApply: 20000,
        },
        pegOutFeeCalc: {
            feeToApply: 20000,
        }
    },
    pegIn: true 
} as SbtcConfig)