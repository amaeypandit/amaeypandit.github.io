import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        surface: "#1a1a1a",
        "surface-hover": "#242424",
        border: "#2a2a2a",
        "border-hover": "#007BFF",
        accent: "#007BFF",
        "accent-light": "#3B82F6",
        "accent-glow": "rgba(0, 123, 255, 0.2)",
        "text-primary": "#FAFAFA",
        "text-secondary": "#A1A1AA",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        glow: "0px 10px 30px rgba(0, 123, 255, 0.2)",
        "glow-lg": "0px 20px 50px rgba(0, 123, 255, 0.3)",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
