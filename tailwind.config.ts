import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: "#FFF8E7",
          100: "#FFEDB8",
          200: "#FFD97A",
          300: "#FFC23D",
          400: "#FFAA00",
          500: "#E8950A",
          600: "#C47800",
          700: "#9A5C00",
          800: "#714200",
          900: "#4A2B00",
        },
        avocado: {
          50: "#F2F8EC",
          100: "#DAEDC4",
          200: "#BAD98C",
          300: "#96C250",
          400: "#74A82E",
          500: "#558B1A",
          600: "#3E6E0F",
          700: "#2B5208",
          800: "#1A3804",
          900: "#0C2001",
        },
        jasmine: {
          50: "#FFF5F0",
          100: "#FFE0D0",
          200: "#FFB899",
          300: "#FF8C5F",
          400: "#FF6633",
          500: "#E84A14",
          600: "#C23408",
          700: "#9A2304",
          800: "#721502",
          900: "#4A0A00",
        },
        peacock: {
          50: "#E8F7F5",
          100: "#B8E8E3",
          200: "#7DD4CC",
          300: "#3DBDB3",
          400: "#1AA69B",
          500: "#0D8880",
          600: "#076C66",
          700: "#03514C",
          800: "#013835",
          900: "#00201E",
        },
      },
      fontFamily: {
        display: ["'Yeseva One'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        sinhala: ["'Noto Serif Sinhala'", "serif"],
        tamil: ["'Noto Serif Tamil'", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "petal-float": "petalFloat 8s ease-in-out infinite",
        "flame-flicker": "flameFlicker 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,170,0,0.3)" },
          "50%": { boxShadow: "0 0 50px rgba(255,170,0,0.7)" },
        },
        petalFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(10deg)" },
        },
        flameFlicker: {
          "0%, 100%": { transform: "scaleY(1) skewX(0deg)", opacity: "1" },
          "33%": { transform: "scaleY(1.1) skewX(-3deg)", opacity: "0.9" },
          "66%": { transform: "scaleY(0.95) skewX(3deg)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
