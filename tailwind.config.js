/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./*.html"],
	theme: {
		extend: {},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '16px',
				md: '32px',
			},
		},
	},
	plugins: [],
}

