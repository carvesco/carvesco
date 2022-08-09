/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'main-black': '#2c2e3b',
				'dark-blue': '#072c94',
				'light-blue': '#0b4abd',
				'dark-pink': '#b16eb5',
				'light-pink': '#de41cd',
				'main-grey': '#93c8c4',
				'vinotinto': '#a6043a'
			}
		}
	},
	plugins: []
};
