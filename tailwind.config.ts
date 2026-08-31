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
        brand: {
          primary: "#0F172A", // Ultra-clean deep slate black
          "primary-hover": "#1E293B",
          "primary-light": "#F1F5F9",
          dark: "#0B0F19", // Deep obsidian
          "dark-subtle": "#111827",
          "dark-card": "#1F2937",
          surface: "#F8FAFC", // Clean, bright modern canvas
          "surface-muted": "#F1F5F9",
          card: "#FFFFFF",
          accent: "#059669", // Premium Emerald Green instead of red
          "accent-hover": "#047857",
          "accent-light": "#ECFDF5",
          emerald: "#10B981",
          gold: "#D97706",
          charcoal: "#334155",
          gray: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CBD5E1",
            400: "#94A3B8",
            500: "#64748B",
            600: "#475569",
            700: "#334155",
            800: "#1E293B",
            900: "#0F172A",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'clean': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'clean-lg': '0 10px 30px -5px rgba(15, 23, 42, 0.08)',
        'card': '0 2px 12px -2px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 20px 35px -8px rgba(15, 23, 42, 0.10)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
