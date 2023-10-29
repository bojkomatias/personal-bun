import { tv } from "tailwind-variants";

export const tooltip = tv({
  base: "group pointer-events-none relative",
  slots: {
    tip: [
      "absolute z-30 scale-50 whitespace-nowrap rounded-md px-3 py-0.5 text-sm font-medium opacity-0 shadow backdrop-blur transition delay-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-75",
    ],
  },
  variants: {
    position: {
      top: {
        tip: "bottom-full left-1/2 mb-1 origin-bottom -translate-x-1/2",
      },
      bottom: {
        tip: "left-1/2 top-full mt-1 origin-top -translate-x-1/2",
      },
      left: {
        tip: "left-full top-1/2 ml-1 origin-left -translate-y-1/2",
      },
      right: {
        tip: "right-full top-1/2 mr-1 origin-right -translate-y-1/2",
      },
    },
    intent: {
      regular: { tip: "bg-muted/80 text-card-foreground" },
      accent: { tip: "bg-accent/80 text-accent-foreground" },
      secondary: { tip: "bg-secondary/80 text-secondary-foreground" },
      primary: { tip: "bg-primary/80 text-primary-foreground" },
    },
  },
  defaultVariants: { position: "top", intent: "regular" },
});
