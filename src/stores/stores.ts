import { persisted } from 'svelte-local-storage-store'
import type { SbtcConfig } from '$types/sbtc_config';
import { defaultSbtcConfig } from '$types/sbtc_config';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const sbtcConfig = persisted('sbtcConfig', defaultSbtcConfig as SbtcConfig);
