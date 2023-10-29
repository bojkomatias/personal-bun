import { tv } from "tailwind-variants";
import { button } from "./button";

const base = tv({
  base: "group relative flex h-max w-max items-stretch gap-1 p-1",
  variants: {
    vertical: { true: "flex-col" },
    static: { true: "is-static" },
    style: {
      none: "bg-background",
      underline:
        "bg-background after:absolute after:inset-x-2 after:bottom-0 after:h-0.5 after:rounded-lg after:bg-border",
      card: "rounded-lg bg-card shadow",
      outline: "rounded-lg bg-background shadow ring-1 ring-inset ring-ring",
    },
  },
  defaultVariants: { style: "outline" },
});

const item = tv({
  extend: button,
  base: "relative hidden group-hover:flex group-[.is-static]:flex aria-checked:flex",
  variants: {
    style: {
      background: "aria-checked:bg-accent aria-checked:text-accent-foreground",
      underline:
        "after:invisible after:absolute after:inset-x-1 after:-bottom-1 after:h-0.5 after:rounded-lg after:bg-accent after:shadow after:shadow-accent/50 aria-checked:after:visible",
    },
  },
  defaultVariants: { style: "background" },
});

const _indicator = () =>
  "on click if target is me halt else add @aria-checked='false' to <button/> in me then tell target tell closest <button/> add @aria-checked='true'";

const _value = (id: string) =>
  `init repeat for x in <button/> in me if value of #${id} is equal to value of x add @aria-checked='true' to x end end ${_indicator()} set value of #${id} to @value`;
// Hack to keep the same caller mechanism as tv library
export const segment = () =>
  Object.assign({}, { base, item, _indicator, _value });
