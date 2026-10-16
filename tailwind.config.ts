import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      colors: {
        agency: {
          purple: "#6236FF",
          "purple-hover": "#5127E6",
          "purple-light": "#F0EDFF",
          black: "#0D0D11",
          charcoal: "#131318",
          surface: "#1A1A22",
          card: "#1F1F2A",
          cream: "#F9F8F5",
          border: "rgba(255, 255, 255, 0.08)",
          "border-light": "rgba(0, 0, 0, 0.08)",
          emerald: "#10B981",
          yellow: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "fluid-hero": "clamp(2.5rem, 5vw, 4.75rem)",
        "fluid-h2": "clamp(2rem, 3.5vw, 3.25rem)",
        "fluid-h3": "clamp(1.5rem, 2.5vw, 2.25rem)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        shimmer: "shimmer 2.5s infinite",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
