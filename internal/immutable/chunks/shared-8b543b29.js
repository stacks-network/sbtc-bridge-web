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

export { set_version as a, assets as b, base as c, set_paths as s, version as v };
