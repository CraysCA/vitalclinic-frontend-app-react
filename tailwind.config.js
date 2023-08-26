/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#000062',
				'dark-blue-2': '#0000ae',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
}
