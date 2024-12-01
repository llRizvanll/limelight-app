import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue': '#010FAD',
        'light-silver': '#f8f8fa',  
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],  // Add Lato font here
        "playfair-display": [ 'Playfair Display', 'serif']
      },
      screens: {
        '2xl': '1920px', // Custom breakpoint for screens larger than 1920px
      },
      boxShadow: {
        'custom': '0px 2px 6px 0px #e3e3e7', // Equivalent to #00000012 (which is rgba(0, 0, 0, 0.07))
      },
    },
  },
  plugins: [],
};

export default config;
