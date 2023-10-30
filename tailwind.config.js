/** @type {import('tailwindcss').Config} */
const { withTV } = require('tailwind-variants/transformer')
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")


export default withTV({
  darkMode: 'class',
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Kumbh Sans', 'sans'], },
      fontSize: {
        xs: ['calc(var(--text-xs) * var(--font-size-offset))', 'calc(var(--line-ht) * var(--text-xs))'],
        sm: ['calc(var(--text-sm) * var(--font-size-offset))', 'calc(var(--line-ht) * var(--text-sm))'],
        base: ['calc(var(--text-base) * var(--font-size-offset))', 'calc(var(--line-ht) * var(--text-base))'],
        lg: ['calc(var(--text-lg) * var(--font-size-offset))', 'calc(var(--line-ht) * var(--text-lg))'],
        xl: ['calc(var(--text-xl) * var(--font-size-offset))', 'calc(var(--line-ht) * var(--text-xl))'],
        '2xl': ['calc(var(--text-2xl) * var(--font-size-offset))', 'calc(var(--line-ht) * var(--text-xl))'],
        '3xl': ['calc(var(--text-3xl) * var(--font-size-offset))', 'calc(var(--line-ht) * var(--text-xl))'],
        '4xl': ['calc(var(--text-4xl) * var(--font-size-offset))', 'calc(var(--line-ht) * var(--text-xl))'],
        '5xl': ['calc(var(--text-5xl) * var(--font-size-offset))', 'calc(var(--line-ht) * var(--text-3xl))'],
        '6xl': ['calc(var(--text-6xl) * var(--font-size-offset))', 'calc(var(--line-ht) * var(--text-3xl))'],
        '7xl': ['calc(var(--text-7xl) * var(--font-size-offset))', 'calc(var(--line-ht) * var(--text-4xl))'],

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
        md: "calc(var(--radius) - 3px)",
        sm: "calc(var(--radius) - 5px)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["lucide"]),
    }),
  ],
})