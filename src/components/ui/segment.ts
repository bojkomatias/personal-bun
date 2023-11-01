import { tv } from "tailwind-variants";
import { button } from "./button";

const base = tv({
  base: "group relative flex h-max w-max items-stretch gap-1 p-1",
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
  base: "relative hidden group-[.is-open]:flex aria-checked:flex",
  variants: {
    style: {
      muted: "aria-checked:bg-muted aria-checked:text-card-foreground",
      background: "aria-checked:bg-accent aria-checked:text-accent-foreground",
      underline:
        "after:invisible after:absolute after:inset-x-3 after:-bottom-1 after:h-0.5 after:rounded-lg after:bg-accent after:shadow after:shadow-accent/50 aria-checked:text-card-foreground aria-checked:after:visible",
    },
  },
  defaultVariants: { style: "background" },
});

const _indicator = () =>
  "on click if I do not match .is-open then add .is-open to me else if target is not me then add @aria-checked='false' to <button/> in me then tell target tell closest <button/> add @aria-checked='true' then remove .is-open from me";

const _value = (id: string) =>
  `init repeat for x in <button/> in me if value of #${id} is equal to value of x add @aria-checked='true' to x end end ${_indicator()} set value of #${id} to @value`;
// Hack to keep the same caller mechanism as tv library
export const segment = () =>
  Object.assign({}, { base, item, _indicator, _value });
