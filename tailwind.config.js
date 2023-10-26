/** @type {import('tailwindcss').Config} */
const { withTV } = require('tailwind-variants/transformer')
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

export default withTV({
  darkMode: 'class',
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Red Hat Display', 'sans'], },
      fontSize: {
        xs: ['calc(var(--text-xs) + var(--font-size-offset))', 'calc(var(--line-ht) * (var(--text-xs) + var(--font-size-offset)))'],
        sm: ['calc(var(--text-sm) + var(--font-size-offset))', 'calc(var(--line-ht) * (var(--text-sm) + var(--font-size-offset)))'],
        base: ['calc(var(--text-base) + var(--font-size-offset))', 'calc(var(--line-ht) * (var(--text-base) + var(--font-size-offset)))'],
        lg: ['calc(var(--text-lg) + var(--font-size-offset))', 'calc(var(--line-ht) * (var(--text-lg) + var(--font-size-offset)))'],
      },
      colors: {
        border: "hsl(var(--border) / 0.1)",
        ring: "hsl(var(--ring) / 0.2)",
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
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 6px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["lucide"]),
    }),
  ],
})