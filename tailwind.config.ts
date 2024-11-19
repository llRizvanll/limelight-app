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
      },
    },
  },
  plugins: [],
};

export default config;
