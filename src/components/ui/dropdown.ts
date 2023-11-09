import { button } from "./button";
import { tv } from "tailwind-variants";

export const dropdown = tv({
  slots: {
    base: "group relative inline-block text-left",
    header: "px-3 py-2",
    content: [
      "pointer-events-none absolute z-10 hidden w-64 rounded-lg bg-card p-2 shadow-md shadow-muted/10 ring-1 ring-border group-aria-expanded:block",
    ],
    separator: "my-1 h-0 border-t border-border",
    item: [
      button({ intent: "ghost" }),
      "h-10 w-full justify-between font-normal text-muted-foreground",
    ],
  },
  variants: {
    position: {
      "top-left": { content: "left-0 mt-2 origin-top-left" },
      "top-right": { content: "right-0 mt-2 origin-top-right" },
      "right-top": { content: "right-full top-0 mr-1 origin-top-right" },
      "bottom-right": {
        content: "bottom-full right-0 origin-bottom-right",
      },
    },
  },
  defaultVariants: { position: "top-right" },
});
