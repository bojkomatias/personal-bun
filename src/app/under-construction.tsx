import { button } from "@/components/ui/button";

export default function UnderConstruction() {
  return (
    <div class="grid place-items-center px-6 py-40 lg:px-8">
      <div class="text-center">
        <p class="text-sm font-semibold uppercase text-accent">
          Under Construction
        </p>
        <h1 class="max-w-lg">Page is currently on the making</h1>
        <p class="mt-6 text-muted-foreground">
          We'll having up and running soon, hopefully.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-3">
          <button
            hx-on:click="history.back()"
            class={button({ intent: "primary" })}
          >
            <i class="i-lucide-chevron-left h-4 w-4" /> Go back
          </button>
        </div>
      </div>
    </div>
  );
}
