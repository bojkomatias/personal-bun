import { tv } from "tailwind-variants";
import { button } from "./button";

const base = tv({
  base: "group pointer-events-none relative flex h-max w-max items-stretch gap-1 p-1",
  variants: {
    vertical: { true: "flex-col" },
    static: { true: "is-open" },
    style: {
      none: "bg-transparent",
      card: "rounded-lg bg-card shadow",
      outline: "rounded-lg bg-background shadow ring-1 ring-inset ring-ring",
    },
  },
  defaultVariants: { style: "outline" },
});

const item = tv({
  extend: button,
  base: "relative hidden group-[.is-open]:flex group-aria-expanded:flex",
});

// Hack to keep the same caller mechanism as tv library
export const segment = () => Object.assign({}, { base, item });
