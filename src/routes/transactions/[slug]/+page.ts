import { findSbtcEventById } from '$lib/bridge_api';
import { setConfig } from '$lib/config';

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
    try {
        const net = url.searchParams.get('chain');
        setConfig(net||'testnet');
        const sbtcEvent = await findSbtcEventById(params.slug);
        return sbtcEvent;
    } catch (err) {
        console.log('LayoutLoad Error: ', err);
        return {
            error: 'unknown at present',
        };
    }
}