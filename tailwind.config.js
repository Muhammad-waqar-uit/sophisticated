/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      fontSize: {
        // Improved typography scale for better readability and SEO
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],      // 14px
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],             // 16px - minimum for body text
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],     // 18px
        'xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.015em' }],     // 20px
        '2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.02em' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.025em' }],   // 30px
        '4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.03em' }],     // 36px
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.035em' }],       // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],     // 60px
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.045em' }],     // 72px
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.05em' }],          // 96px
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.055em' }],         // 128px
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
