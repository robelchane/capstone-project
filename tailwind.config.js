/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		fontFamily: {
		  roboto: ["Roboto", "sans-serif"],
		},
		colors: {
		  "gray-900": "#1a202c",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  card: "hsl(var(--card))",
		  "card-foreground": "hsl(var(--card-foreground))",
		  popover: "hsl(var(--popover))",
		  "popover-foreground": "hsl(var(--popover-foreground))",
		  primary: "hsl(var(--primary))",
		  "primary-foreground": "hsl(var(--primary-foreground))",
		  secondary: "hsl(var(--secondary))",
		  "secondary-foreground": "hsl(var(--secondary-foreground))",
		  muted: "hsl(var(--muted))",
		  "muted-foreground": "hsl(var(--muted-foreground))",
		  accent: "hsl(var(--accent))",
		  "accent-foreground": "hsl(var(--accent-foreground))",
		  destructive: "hsl(var(--destructive))",
		  "destructive-foreground": "hsl(var(--destructive-foreground))",
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  chart1: "hsl(var(--chart-1))",
		  chart2: "hsl(var(--chart-2))",
		  chart3: "hsl(var(--chart-3))",
		  chart4: "hsl(var(--chart-4))",
		  chart5: "hsl(var(--chart-5))",
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  