import { button } from "@/components/ui/button";
import BaseTemplate from "./template";

export default function NotFound() {
  return (
    <BaseTemplate>
      <div class="grid place-items-center px-6 py-40 lg:px-8">
        <div class="text-center">
          <p class="text-base font-semibold text-primary">404</p>
          <h1>Page not found</h1>
          <p class="mt-6 text-muted-foreground">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-3">
            <a href="/" hx-boost="true" class={button({ intent: "primary" })}>
              Go back home
            </a>
            <a href="#" class={button()}>
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </BaseTemplate>
  );
}
