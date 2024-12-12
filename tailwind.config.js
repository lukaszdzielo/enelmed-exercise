/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./*.html"],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
				DEFAULT: '16px',
			},
		},
	},
	plugins: [],
}

