import { cx } from "@/utils/cx";

export const SearchBar = (props: JSX.HtmlInputTag) => {
  return (
    <div class={cx("group relative h-9", props.class)}>
      <input
        {...props}
        id="search"
        type="text"
        class={cx(
          "block h-full w-full rounded-lg border-0 bg-card py-1.5 pl-10 pr-14 text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground/60 hover:bg-muted/50 focus:bg-muted/50 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background",
          props.class,
        )}
      />
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center py-1.5 pl-3">
        <i class="i-lucide-search text-muted-foreground group-focus-within:text-foreground" />
      </div>
      <div class="absolute inset-y-0 right-0 flex py-1.5 pr-4">
        <kbd class="my-0.5 inline-flex items-center rounded-sm border border-border bg-card px-1.5 font-sans text-xs text-muted-foreground">
          ⌘K
        </kbd>
      </div>
    </div>
  );
};
