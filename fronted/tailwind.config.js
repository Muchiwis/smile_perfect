/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/lib/esm/**/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
 plugins: [
        require('flowbite/plugin')
    ]
}

