/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			blur: {
				"3xl": "2px", // Very large blur
				"4xl": "30px", // Extra-extra large blur for more dramatic effect
				"5px": "5px", // Specific pixel-based blur
				"10px": "10px", // Another specific pixel-based blur
			},
			scale: {
				102: "1.02", // Example custom scale
				110: "1.10",
				120: "1.20", // Add more as needed
		},
		},

	},
	plugins: [],
}
