import type { Config } from "tailwindcss";
import daisyui from "daisyui";
const config: Config = {
  theme: {
    extend: {
      boxShadow: {
        'custom-glow': '0 0 20px #ffa125, 0 0 40px #ffa125, 0 0 80px #ffa125',
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [],
  },
};
export default config;
