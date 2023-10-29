import { tv } from "tailwind-variants";

export const card = tv({
  slots: {
    base: [
      "w-full rounded-xl bg-card text-card-foreground shadow-md shadow-muted/10",
      "relative after:absolute after:-inset-px after:-z-10 after:rounded-xl after:bg-gradient-to-br after:from-ring after:to-border after:to-50% after:opacity-60 hover:bg-card/90 hover:after:from-accent/40 hover:after:to-ring",
    ],
    title: "px-6 pt-5 font-semibold leading-loose tracking-tight",
    description: " px-6 text-sm leading-5 text-muted-foreground/70",
    content: "p-6",
    footer: "flex items-center gap-2 p-6",
  },
  variants: { width: { contained: "max-w-lg" } },
});
