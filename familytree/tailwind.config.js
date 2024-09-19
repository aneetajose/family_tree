/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "var(--primary-100)",
        "primary-80": "var(--primary-80)",
        "secondary-50": "var(--secondary-50)",
        "accent": "var(--accent)",
        "rectangle-shade": "var(--rectangle-shade)",
      },
      fontFamily: {
        "font-type": "var(--font-type)",
      },
    },
  },
  plugins: [],
};
