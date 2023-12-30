/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"BG": "#1f1f1f",
				"Text": "#f8f8ff",
				"LinkBG": "#404040"
			},
		},
	},
	plugins: [],
}
