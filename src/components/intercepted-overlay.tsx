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
      _={`on click go back end`}
    >
      <div
        class="fixed inset-12 rounded-xl bg-background p-3 pt-12 ring-1 ring-border"
        _="on click halt bubbling end"
      >
        <button
          class={button({ size: "icon-sm", class: "fixed right-16 top-16" })}
          _="on click go back"
        >
          <i class="i-lucide-x" />
        </button>
        <div class="h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
}
