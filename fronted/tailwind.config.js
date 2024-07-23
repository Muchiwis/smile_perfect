const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "640px" },
      },
    },
    colors: {
      verdeBase: {
        DEFAULT: "#31B3B5",
        50: "#B3EAEA",
        100: "#A3E5E6",
        200: "#83DCDD",
        300: "#63D3D5",
        400: "#43CACC",
        500: "#31B3B5",
        600: "#258789",
        700: "#195C5D",
        800: "#0D3031",
        900: "#010404",
        950: "#000000",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
