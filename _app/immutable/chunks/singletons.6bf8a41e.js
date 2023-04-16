var _a, _b;
import { w as writable } from "./index.4a7859de.js";
const base = ((_a = globalThis.__sveltekit_1j3h52u) == null ? void 0 : _a.base) ?? "";
((_b = globalThis.__sveltekit_1j3h52u) == null ? void 0 : _b.assets) ?? base;
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
const INDEX_KEY = "sveltekit:index";
const PRELOAD_PRIORITIES = (
  /** @type {const} */
  {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1
  }
);
function get_base_uri(doc) {
  let baseURI = doc.baseURI;
  if (!baseURI) {
    const baseTags = doc.getElementsByTagName("base");
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
const warned = /* @__PURE__ */ new WeakSet();
const valid_link_options = (
  /** @type {const} */
  {
    "preload-code": ["", "off", "tap", "hover", "viewport", "eager"],
    "preload-data": ["", "off", "tap", "hover"],
    keepfocus: ["", "off"],
    noscroll: ["", "off"],
    reload: ["", "off"],
    replacestate: ["", "off"]
  }
);
function link_option(element, name) {
  const value = (
    /** @type {ValidLinkOptions<T> | null} */
    element.getAttribute(`data-sveltekit-${name}`)
  );
  {
    validate_link_option(element, name, value);
  }
  return value;
}
function validate_link_option(element, name, value) {
  if (value === null)
    return;
  if (!warned.has(element) && !valid_link_options[name].includes(value)) {
    console.error(
      `Unexpected value for ${name} — should be one of ${valid_link_options[name].map((option) => JSON.stringify(option)).join(", ")}`,
      element
    );
    warned.add(element);
  }
}
const levels = {
  ...PRELOAD_PRIORITIES,
  "": PRELOAD_PRIORITIES.hover
};
function parent_element(element) {
  let parent = element.assignedSlot ?? element.parentNode;
  if ((parent == null ? void 0 : parent.nodeType) === 11)
    parent = parent.host;
  return (
    /** @type {Element} */
    parent
  );
}
function find_anchor(element, target) {
  while (element && element !== target) {
    if (element.nodeName.toUpperCase() === "A" && element.hasAttribute("href")) {
      return (
        /** @type {HTMLAnchorElement | SVGAElement} */
        element
      );
    }
    element = /** @type {Element} */
    parent_element(element);
  }
}
function get_link_info(a, base2) {
  let url;
  try {
    url = new URL(a instanceof SVGAElement ? a.href.baseVal : a.href, document.baseURI);
  } catch {
  }
  const target = a instanceof SVGAElement ? a.target.baseVal : a.target;
  const external = !url || !!target || is_external_url(url, base2) || (a.getAttribute("rel") || "").split(/\s+/).includes("external") || a.hasAttribute("download");
  return { url, external, target };
}
function get_router_options(element) {
  let keep_focus = null;
  let noscroll = null;
  let preload_code = null;
  let preload_data = null;
  let reload = null;
  let replace_state = null;
  let el = element;
  while (el && el !== document.documentElement) {
    if (preload_code === null)
      preload_code = link_option(el, "preload-code");
    if (preload_data === null)
      preload_data = link_option(el, "preload-data");
    if (keep_focus === null)
      keep_focus = link_option(el, "keepfocus");
    if (noscroll === null)
      noscroll = link_option(el, "noscroll");
    if (reload === null)
      reload = link_option(el, "reload");
    if (replace_state === null)
      replace_state = link_option(el, "replacestate");
    el = /** @type {Element} */
    parent_element(el);
  }
  return {
    preload_code: levels[preload_code ?? "off"],
    preload_data: levels[preload_data ?? "off"],
    keep_focus: keep_focus === "off" ? false : keep_focus === "" ? true : null,
    noscroll: noscroll === "off" ? false : noscroll === "" ? true : null,
    reload: reload === "off" ? false : reload === "" ? true : null,
    replace_state: replace_state === "off" ? false : replace_state === "" ? true : null
  };
}
function notifiable_store(value) {
  const store = writable(value);
  let ready = true;
  function notify() {
    ready = true;
    store.update((val) => val);
  }
  function set(new_value) {
    ready = false;
    store.set(new_value);
  }
  function subscribe(run) {
    let old_value;
    return store.subscribe((new_value) => {
      if (old_value === void 0 || ready && new_value !== old_value) {
        run(old_value = new_value);
      }
    });
  }
  return { notify, set, subscribe };
}
function create_updated_store() {
  const { set, subscribe } = writable(false);
  async function check() {
    return false;
  }
  return {
    subscribe,
    check
  };
}
function is_external_url(url, base2) {
  return url.origin !== location.origin || !url.pathname.startsWith(base2);
}
let client;
function init(opts) {
  client = opts.client;
}
const stores = {
  url: notifiable_store({}),
  page: notifiable_store({}),
  navigating: writable(
    /** @type {import('types').Navigation | null} */
    null
  ),
  updated: create_updated_store()
};
export {
  INDEX_KEY as I,
  PRELOAD_PRIORITIES as P,
  SCROLL_KEY as S,
  SNAPSHOT_KEY as a,
  get_link_info as b,
  get_router_options as c,
  scroll_state as d,
  base as e,
  find_anchor as f,
  get_base_uri as g,
  init as h,
  is_external_url as i,
  client as j,
  stores as s
};
