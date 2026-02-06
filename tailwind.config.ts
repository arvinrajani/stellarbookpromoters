import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        // Premium Book Brand Colors
        richBlack: "var(--rich-black)",
        graphiteGray: "var(--graphite-gray)",
        metallicGold: "var(--metallic-gold)",
        beige: "var(--beige)",
        offWhite: "var(--off-white)",
        // Legacy compatibility
        bg: "var(--bg)",
        surface: "var(--surface)",
        gold: "var(--gold)",
        goldHover: "var(--goldHover)",
        ink: "var(--ink)",
        text: "var(--text)",
        muted: "var(--muted)",
        borderGold: "var(--borderGold)"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      borderRadius: {
        xl: "16px"
      },
      boxShadow: {
        soft: "0 18px 40px rgba(11, 11, 11, 0.25)"
      },
      backgroundImage: {
        "gold-radial": "radial-gradient(circle at top, rgba(227,180,60,0.35), transparent 60%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
