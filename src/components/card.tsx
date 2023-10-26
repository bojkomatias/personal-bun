import { tv } from "tailwind-variants";

export const card = tv({
  slots: {
    base: "w-full overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow",
    title: " px-6 pt-5 font-semibold leading-loose tracking-tight",
    description: " px-6 text-sm leading-5 text-muted-foreground/70",
    content: "p-6",
    footer: "flex items-center gap-2 p-6",
  },
  variants: { width: { contained: "max-w-lg" } },
});
