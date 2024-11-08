/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-theme-color": "#fbfdf8",
        "section-bg-color": "#f2f4ef",
        "dark-text": "#0d1107",
        "medium-tone-text": "#484848",
        "light-text": "#828282",
        "primary-color": "#deff8a",
        "secondery-color": "#c3e289",
        "accent-color": "#ad9e00",
        "primary-button-background": "#66b65d",
        "primary-button-background-hover": "#599e51",
        "secondery-button-background": "#fff",
        "secondery-button-background-hover": "#eee",
      },
    },
  },
  plugins: [],
};
