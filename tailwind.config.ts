import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-manrope)", ...fontFamily.sans],
        display: ["var(--font-geist)", "var(--font-ibm-plex)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      boxShadow: {
        brand: "0 20px 45px -20px rgba(37, 99, 235, 0.45)",
      },
    },
  },
  plugins: [typography(), forms()],
};

export default config;
