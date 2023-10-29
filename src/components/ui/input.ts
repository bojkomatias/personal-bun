import { tv } from "tailwind-variants";

export const input = tv({
  base: [
    "peer block w-full rounded-md border-0 bg-background py-1.5 pl-4 text-sm text-foreground ring-1 ring-inset ring-ring focus:ring-accent",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  variants: {
    type: {
      number: "text-right tabular-nums",
    },
    size: {
      sm: "py-0.5 text-xs",
      lg: "py-2 text-base font-medium",
    },
  },
});

export const checkbox = tv({
  base: "-mt-1 h-5 w-5 rounded-sm border-ring bg-background text-primary bg-blend-difference focus:ring-1 focus:ring-accent focus:ring-offset-background",
});

export const label = tv({ base: ["select-none text-sm font-medium"] });
