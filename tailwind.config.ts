import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: "#0B0B0B",
        "noir-doux": "#151312",
        or: "#D4AF37",
        "or-clair": "#E8CE73",
        "or-sombre": "#9C7F26",
        blanc: "#FFFFFF",
        creme: "#F8F4EC",
        bordeaux: "#7A0019",
        "bordeaux-sombre": "#4A0010",
        "bordeaux-clair": "#9C1F35",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(212,175,55,0.08) 1px, transparent 0)",
      },
      boxShadow: {
        gold: "0 0 40px rgba(212,175,55,0.25)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flicker: "flicker 3.5s ease-in-out infinite",
        rise: "rise 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
