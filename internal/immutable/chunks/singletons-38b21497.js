import { B as writable } from './index-3bacd89c.js';

let assets = '';
let base = '';
let version = '';

/** @param {{ base: string, assets: string }} paths */
function set_paths(paths) {
	base = paths.base;
	assets = paths.assets || base;
}

/** @param {string} value */
function set_version(value) {
	version = value;
}

const SCROLL_KEY = 'sveltekit:scroll';
const INDEX_KEY = 'sveltekit:index';

const PRELOAD_PRIORITIES = /** @type {const} */ ({
	tap: 1,
	hover: 2,
	viewport: 3,
	eager: 4,
	off: -1
});

/* global "internal/version.json", 0 */

/** @param {HTMLDocument} doc */
function get_base_uri(doc) {
	let baseURI = doc.baseURI;

	if (!baseURI) {
		const baseTags = doc.getElementsByTagName('base');
		baseURI = baseTags.length ? baseTags[0].href : doc.URL;
	}

	return baseURI;
}

function scroll_state() {
	return {
		x: pageXOffset,
		y: pageYOffset
	};
}

/**
 * @template {LinkOptionName} T
 * @typedef {typeof valid_link_options[T][number]} ValidLinkOptions
 */

/**
 * @template {LinkOptionName} T
 * @param {Element} element
 * @param {T} name
 */
function link_option(element, name) {
	const value = /** @type {ValidLinkOptions<T> | null} */ (
		element.getAttribute(`data-sveltekit-${name}`)
	);

	return value;
}

const levels = {
	...PRELOAD_PRIORITIES,
	'': PRELOAD_PRIORITIES.hover
};

/**
 * @param {Element} element
 * @returns {Element | null}
 */
function parent_element(element) {
	let parent = element.assignedSlot ?? element.parentNode;

	// @ts-expect-error handle shadow roots
	if (parent?.nodeType === 11) parent = parent.host;

	return /** @type {Element} */ (parent);
}

/**
 * @param {Element} element
 * @param {Element} target
 */
function find_anchor(element, target) {
	while (element && element !== target) {
		if (element.nodeName.toUpperCase() === 'A' && element.hasAttribute('href')) {
			return /** @type {HTMLAnchorElement | SVGAElement} */ (element);
		}

		element = /** @type {Element} */ (parent_element(element));
	}
}

/**
 * @param {HTMLAnchorElement | SVGAElement} a
 * @param {string} base
 */
function get_link_info(a, base) {
	/** @type {URL | undefined} */
	let url;

	try {
		url = new URL(a instanceof SVGAElement ? a.href.baseVal : a.href, document.baseURI);
	} catch {}

	const has = {
		rel_external: (a.getAttribute('rel') || '').split(/\s+/).includes('external'),
		download: a.hasAttribute('download'),
		target: !!(a instanceof SVGAElement ? a.target.baseVal : a.target)
	};

	const external =
		!url || is_external_url(url, base) || has.rel_external || has.target || has.download;

	return { url, has, external };
}

/**
 * @param {HTMLFormElement | HTMLAnchorElement | SVGAElement} element
 */
function get_router_options(element) {
	/** @type {ValidLinkOptions<'noscroll'> | null} */
	let noscroll = null;

	/** @type {ValidLinkOptions<'preload-code'> | null} */
	let preload_code = null;

	/** @type {ValidLinkOptions<'preload-data'> | null} */
	let preload_data = null;

	/** @type {ValidLinkOptions<'reload'> | null} */
	let reload = null;

	/** @type {Element} */
	let el = element;

	while (el && el !== document.documentElement) {
		if (preload_code === null) preload_code = link_option(el, 'preload-code');
		if (preload_data === null) preload_data = link_option(el, 'preload-data');
		if (noscroll === null) noscroll = link_option(el, 'noscroll');
		if (reload === null) reload = link_option(el, 'reload');

		el = /** @type {Element} */ (parent_element(el));
	}

	return {
		preload_code: levels[preload_code ?? 'off'],
		preload_data: levels[preload_data ?? 'off'],
		noscroll: noscroll === 'off' ? false : noscroll === '' ? true : null,
		reload: reload === 'off' ? false : reload === '' ? true : null
	};
}

/** @param {any} value */
function notifiable_store(value) {
	const store = writable(value);
	let ready = true;

	function notify() {
		ready = true;
		store.update((val) => val);
	}

	/** @param {any} new_value */
	function set(new_value) {
		ready = false;
		store.set(new_value);
	}

	/** @param {(value: any) => void} run */
	function subscribe(run) {
		/** @type {any} */
		let old_value;
		return store.subscribe((new_value) => {
			if (old_value === undefined || (ready && new_value !== old_value)) {
				run((old_value = new_value));
			}
		});
	}

	return { notify, set, subscribe };
}

function create_updated_store() {
	const { set, subscribe } = writable(false);

	/** @type {NodeJS.Timeout} */
	let timeout;

	/** @type {() => Promise<boolean>} */
	async function check() {

		clearTimeout(timeout);

		const res = await fetch(`${assets}/${"internal/version.json"}`, {
			headers: {
				pragma: 'no-cache',
				'cache-control': 'no-cache'
			}
		});

		if (res.ok) {
			const data = await res.json();
			const updated = data.version !== version;

			if (updated) {
				set(true);
				clearTimeout(timeout);
			}

			return updated;
		} else {
			throw new Error(`Version check failed: ${res.status}`);
		}
	}

	return {
		subscribe,
		check
	};
}

/**
 * @param {URL} url
 * @param {string} base
 */
function is_external_url(url, base) {
	return url.origin !== location.origin || !url.pathname.startsWith(base);
}

/**
 * @param {{
 *   client: import('./types').Client;
 * }} opts
 */
function init(opts) {
	opts.client;
}

const stores = {
	url: notifiable_store({}),
	page: notifiable_store({}),
	navigating: writable(/** @type {import('types').Navigation | null} */ (null)),
	updated: create_updated_store()
};

export { INDEX_KEY as I, PRELOAD_PRIORITIES as P, SCROLL_KEY as S, get_link_info as a, get_router_options as b, scroll_state as c, set_paths as d, init as e, find_anchor as f, get_base_uri as g, set_version as h, is_external_url as i, stores as s };
