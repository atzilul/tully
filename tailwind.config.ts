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
        cream: "#FAF6F0",
        terracotta: "#C4704A",
        olive: "#6B7A4E",
        charcoal: "#2C2420",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Heebo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
