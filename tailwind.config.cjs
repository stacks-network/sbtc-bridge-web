/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      "white": "#ffffff",
      "black": "#000000",
      "gray": {
        "100": "#f9f9f9",
        "200": "#e9e9e9",
        "300": "#cdcdcd",
        "400": "#a5a5a5",
        "500": "#737373",
        "600": "#6a6a6a",
        "700": "#616161",
        "800": "#535353",
        "900": "#404040",
        "1000": "#121212"
      },
      "primary": {
        "100": "#fef9f7",
        "200": "#fce7e0",
        "300": "#f9c9b9",
        "400": "#f39f82",
        "500": "#ed693c",
        "600": "#da6137",
        "700": "#c75832",
        "800": "#ab4c2b",
        "900": "#853b22",
        "1000": "#5f2a18"
      },
      "yellow": {
        "100": "#fffdf5",
        "200": "#fff6d8",
        "300": "#feeaa7",
        "400": "#fedb63",
        "500": "#fdc60b",
        "600": "#e9b60a",
        "700": "#d5a609",
        "800": "#b68f08",
        "900": "#8e6f06",
        "1000": "#654f04"
      },
      "blue": {
        "100": "#fafbfe",
        "200": "#ebeefd",
        "300": "#d1dafa",
        "400": "#adbcf6",
        "500": "#7f97f1",
        "600": "#758bde",
        "700": "#6b7fca",
        "800": "#5b6dae",
        "900": "#475587",
        "1000": "#333c60"
      },
      "success": {
        "100": "#f5fcfa",
        "200": "#d9f4eb",
        "300": "#a9e6d2",
        "400": "#66d2ae",
        "500": "#10b981",
        "600": "#0faa77",
        "700": "#0d9b6c",
        "800": "#0c855d",
        "900": "#096848",
        "1000": "#064a34"
      },
      "warning": {
        "100": "#fff9f6",
        "200": "#fee9da",
        "300": "#fdcdab",
        "400": "#fba56a",
        "500": "#f97316",
        "600": "#e56a14",
        "700": "#d16112",
        "800": "#b35310",
        "900": "#8b400c",
        "1000": "#642e09"
      },
      "error": {
        "100": "#fef8f8",
        "200": "#fce1e1",
        "300": "#f9bcbc",
        "400": "#f58787",
        "500": "#ef4444",
        "600": "#dc3f3f",
        "700": "#c93939",
        "800": "#ac3131",
        "900": "#862626",
        "1000": "#601b1b"
      }
    },
    fontSize: {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem"
    },
    backgroundImage: {
      "primary-01": "linear-gradient(306.12deg, #ED693C 21.1%, #FDC60B 84.08%)",
      "primary-02": "linear-gradient(126.12deg, #ED693C 11.8%, #FEDB63 72.43%)",
      "primary-03": "linear-gradient(126.12deg, #D1DAFA 11.8%, #7F97F1 72.43%)",
      "primary-04": "linear-gradient(126.12deg, #333C60 11.8%, #7F97F1 72.43%)",
      "gray-01": "linear-gradient(126.12deg, #121212 44.07%, #404040 89.82%)",
      "black-01": "linear-gradient(126.12deg, #000000 21.1%, #121212 53.58%)"
    },
    extend: {
      fontFamily: {
        'sans': ['Circular Std', ...defaultTheme.fontFamily.sans],
      },
      "boxShadow": {
        "01": "-4px -4px 12px -2px rgba(249,115,22,0.6), 4px 4px 12px -2px rgba(253,198,11,0.6)",
        "02": "4px 4px 12px -2px rgba(117,139,222,0.6), -4px -4px 12px -2px rgba(91,109,174,0.6)"
      },
    },
  }
}