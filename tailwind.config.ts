import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        accent: "hsl(var(--accent))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(195, 161, 97, 0.18)"
      },
      backgroundImage: {
        "champagne-grid":
          "linear-gradient(rgba(195,161,97,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(195,161,97,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
