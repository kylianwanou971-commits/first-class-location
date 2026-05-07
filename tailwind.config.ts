import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        gold: "#C9A84C",
        "gold-light": "#E2C97E",
        "gold-dark": "#9a7c35",
        surface: "#111111",
        "surface-2": "#1A1A1A",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 30px rgba(201,168,76,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(201,168,76,0.6)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
