import { fetchPeginById } from '$lib/bridge_api';
import { setConfig } from '$lib/config';

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
    try {
        const net = url.searchParams.get('net');
        if (net === 'testnet') setConfig(net);
        const peginRequest = await fetchPeginById(params.slug);
        return peginRequest;
    } catch (err) {
        console.log('LayoutLoad Error: ', err);
        return {
            error: 'unknown at present',
        };
    }
}