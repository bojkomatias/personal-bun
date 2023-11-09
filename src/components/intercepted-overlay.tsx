import { button } from "./ui/button";

export function InterceptedOverlay({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div
      id="overlay"
      hx-swap-oob="true"
      class="fixed inset-0 z-10 bg-muted/5 backdrop-blur"
      hx-on:click="history.back()"
    >
      <div
        class="fixed inset-12 rounded-xl bg-background p-3 pt-12 ring-1 ring-border"
        hx-on:click="event.stopPropagation()"
      >
        <button
          class={button({ size: "icon-sm", class: "fixed right-16 top-16" })}
          hx-on:click="history.back()"
        >
          <i class="i-lucide-x" />
        </button>
        <div class="h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
}
