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
        xs: "clamp(0.65rem, 0.08vw + 0.63rem, 0.71rem);",
        sm: "clamp(0.81rem, 0.15vw + 0.77rem, 0.92rem);",
        base: "clamp(1rem, 0.25vw + 0.94rem, 1.19rem);",
        lg: "clamp(1.24rem, 0.39vw + 1.14rem, 1.53rem);",
        xl: "clamp(1.54rem, 0.58vw + 1.39rem, 1.98rem);",
        "2xl": "clamp(1.91rem, 0.86vw + 1.69rem, 2.55rem);",
        "3xl": "clamp(2.36rem, 1.23vw + 2.06rem, 3.29rem);",
        "4xl": "clamp(2.93rem, 1.75vw + 2.49rem, 4.24rem);",
        "5xl": "clamp(3.64rem, 2.45vw + 3.02rem, 5.47rem);",
        "6xl": "clamp(4.51rem, 3.4vw + 3.66rem, 7.06rem);",
        "7xl": "clamp(5.59rem, 4.69vw + 4.42rem, 9.11rem);"
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
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["lucide"]),
    }),
  ],
})