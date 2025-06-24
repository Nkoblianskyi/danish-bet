/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "xl-custom": "1400px",
        "hero-md": "1100px",
        "hero-lg": "1300px",
        "hero-xl": "1500px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Hi-Tech Color Scheme
        "tech-white": "#FFFFFF",
        "tech-black": "#000000",
        "tech-gold": "#FFD700",
        "tech-red": "#FF0000",
        "tech-silver": "#C0C0C0",
        "tech-gray": {
          50: "#F8F9FA",
          100: "#F1F3F4",
          200: "#E8EAED",
          300: "#DADCE0",
          400: "#BDC1C6",
          500: "#9AA0A6",
          600: "#80868B",
          700: "#5F6368",
          800: "#3C4043",
          900: "#202124",
        },
        // Neon accents for hi-tech feel
        "neon-gold": "#FFED4E",
        "neon-red": "#FF073A",
        "neon-blue": "#00D4FF",
        "neon-green": "#39FF14",
        // Danish flag colors
        "danish-red": "#C8102E", // Official Danish flag red
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(255, 215, 0, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)" },
        },
        "tech-scan": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "tech-scan": "tech-scan 2s ease-in-out infinite",
      },
      boxShadow: {
        "tech-soft": "0 2px 8px rgba(0, 0, 0, 0.1)",
        "tech-medium": "0 4px 16px rgba(0, 0, 0, 0.15)",
        "tech-strong": "0 8px 32px rgba(0, 0, 0, 0.2)",
        "tech-glow": "0 0 20px rgba(255, 215, 0, 0.3)",
        "tech-red-glow": "0 0 20px rgba(255, 0, 0, 0.3)",
        "tech-neon": "0 0 10px rgba(255, 215, 0, 0.5), inset 0 0 10px rgba(255, 215, 0, 0.1)",
      },
      backgroundImage: {
        "tech-gradient": "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
        "gold-gradient": "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
        "red-gradient": "linear-gradient(135deg, #FF0000 0%, #DC143C 100%)",
        "tech-grid":
          "linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        "tech-grid": "20px 20px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
