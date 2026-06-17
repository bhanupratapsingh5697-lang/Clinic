import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16232E",
        paper: "#FFFFFF",
        mist: "#F6FAFB",
        brand: {
          50: "#EAF4FB",
          100: "#D8ECF7",
          200: "#A9D4EC",
          400: "#3F8FC4",
          600: "#176FA8",
          700: "#0F5786",
          900: "#0B3A57",
        },
        leaf: {
          50: "#EBFAF1",
          100: "#D7F5E4",
          200: "#A9E8C6",
          400: "#5EC793",
          600: "#2EA86E",
          700: "#218257",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(11, 58, 87, 0.08)",
        card: "0 8px 30px -6px rgba(11, 58, 87, 0.12)",
        glass: "0 8px 32px 0 rgba(11, 58, 87, 0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulseSlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(11,58,87,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,58,87,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
