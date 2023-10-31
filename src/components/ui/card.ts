import { tv } from "tailwind-variants";

export const card = tv({
  slots: {
    base: [
      "w-full rounded-xl bg-card text-card-foreground shadow-md shadow-muted/10",
      "relative after:absolute after:-inset-px after:-z-10 after:rounded-xl after:bg-gradient-to-br after:from-ring after:to-border after:to-50% after:opacity-60 hover:bg-card/90 hover:after:from-accent/40 hover:after:to-ring",
    ],
    title: "px-8 pt-8",
    description: "px-8 pt-2 text-sm leading-6 text-muted-foreground/70",
    content: "px-6 pt-4",
    footer: "flex items-center gap-2 p-8",
  },
  variants: { width: { contained: "max-w-lg" } },
});
