/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'components/**/*.{vue,js,ts}',
		'layouts/**/*.vue',
		'pages/**/*.vue',
		'composables/**/*.{js,ts}',
		'plugins/**/*.{js,ts}',
		'App.{js,ts,vue}',
		'app.{js,ts,vue}',
		'Error.{js,ts,vue}',
		'error.{js,ts,vue}',
		'content/**/*.md',
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						'code::before': {
							content: '""',
						},
						'code::after': {
							content: '""',
						},
					},
				},
			},
			colors: {},
			fontFamily: {
				sans: ["'Inter'", 'sans-serif'],
			},
		},
	},
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
}