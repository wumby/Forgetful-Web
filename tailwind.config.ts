import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#070607",
        surface: "#1a1a1f",
        text: "#f4f1ec",
        muted: "#8a8a97",
        accent: "#d6ad7d",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl: "1.2rem",
      },
    },
  },
  plugins: [],
};

export default config;
