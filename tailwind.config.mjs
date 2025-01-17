/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['"Red Hat Display"'],
		},
		colors: {
			white: "#fff",
			"cyan-600": "#4D96A9",
			"cyan-300": "#8FE3F9",
			"purple-600": "#855FB1",
			"purple-300": "#D9B8FF",
			"slate-900": "#28283D",
			"slate-600": "#87879D",
			"slate-300": "#D1D1DF",

		},
		extend: {
			backgroundImage: {
				'footer-mobile': "url('./src/assets/mobile/image-footer.jpg')",
				'footer-tablet': "url('./src/assets/tablet/image-footer.jpg')",
				'footer-desktop': "url('./src/assets/desktop/image-footer.jpg')",
			}
		},
	},
	plugins: [],
}
