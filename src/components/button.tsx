import { tv } from "tailwind-variants";

export const button = tv(
  {
    base: "group inline-flex cursor-default items-center justify-center gap-1.5 whitespace-nowrap rounded-md font-semibold text-card-foreground outline-offset-2 outline-border transition-colors focus:outline active:opacity-80 disabled:pointer-events-none disabled:opacity-50",
    variants: {
      intent: {
        primary:
          "bg-primary text-primary-foreground outline-primary hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground outline-secondary hover:bg-secondary/90",
        accent:
          "bg-accent text-accent-foreground outline-accent hover:bg-accent/90",
        outline:
          "bg-transparent ring-1 ring-inset ring-border hover:bg-muted hover:ring-ring focus:outline-none",
        ghost: "bg-transparent hover:bg-muted focus:outline-none",
        link: "!p-0 font-medium decoration-accent decoration-2  underline-offset-4 !outline-none hover:underline focus-visible:underline",
        destructive:
          "bg-destructive text-destructive-foreground outline-destructive hover:bg-destructive/90",
        hover:
          "hover:bg-transparent hover:text-accent-foreground focus:outline-none",
      },
      size: {
        xs: "h-6 px-2 text-xs",
        sm: "h-7 px-2.5 text-xs",
        base: "h-9 px-4 text-sm",
        lg: "h-11 rounded-lg px-5 text-base",
        icon: "h-9 w-9 p-0",
        "icon-xs": "h-6 w-6 p-0",
      },
    },
    defaultVariants: { intent: "ghost", size: "base" },
  },
  {
    responsiveVariants: ["sm", "md", "lg"],
  },
);
