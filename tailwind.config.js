/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    animation: {
      "animate-bounce": "bounce 0.8s linear infinite",
      "spin-slow": "spin 6s linear infinite",
      "bounce-slow": "bounce 8s linear infinite",
      "bounce-moderate": "bounce 3s linear infinite",
      "spin-super-slow": "spin 15s linear infinite",
      "spin-10": "spin 10s linear infinite",
      "spin-15": "spin 15s linear infinite",
      "marqueer2l": "marquee2r 25s linear infinite",
      'marqueenew': 'marqueenew 30s linear infinite',
    },
    screens: {
      xl: { max: "1280px" },
      sm: { max: "600px" },
      lg: { max: "1024px" },
      navsm: { max: "900px" },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
