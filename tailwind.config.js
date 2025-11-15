/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        ink: "#f0f0f0",
        "ink-muted": "#d0d0d0",
        bg: "#050607",
        "bg-elevated": "#050607", // same deep black, no blue cast
        accent: "#b3ff00",        // your neon green
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
