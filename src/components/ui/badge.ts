import { tv } from "tailwind-variants";

export const badge = tv({
  base: "inline-flex items-center whitespace-nowrap rounded-lg border-border px-2.5 text-xs font-medium leading-loose transition-colors focus:outline-none",
  variants: {
    intent: {
      primary: "bg-primary text-primary-foreground shadow hover:bg-primary/80",
      muted: "bg-muted/30 text-card-foreground hover:bg-muted",
      destructive:
        "bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
    },
  },
  defaultVariants: { intent: "muted" },
});
