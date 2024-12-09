/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      fontWeight: {
        xmd: "550",
        normal2: "450",
      },
    },
  },
  plugins: [],
};
