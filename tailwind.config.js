/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        "brand-blue": "#2563EB",
        "brand-blue-tint": "#EFF4FE",
        ink: "#0F172A",
        "secondary-text": "#475569",
        border: "#E2E8F0",
      },
      borderRadius: {
        card: "16px",
      },
      spacing: {
        base: "8px",
        section: "140px",
        margin: "80px",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
