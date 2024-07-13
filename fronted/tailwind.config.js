/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "639px" },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
