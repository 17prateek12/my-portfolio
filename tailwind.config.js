/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xl: { max: "1280px" },
      md: { max: "600px" },
      lg: { max: "1024px" },
      navmd: { max: "900px" },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
