import { button } from "@/components/ui/button";

export function Nav() {
  return (
    <nav class="mx-auto my-6 flex max-w-4xl flex-row items-start gap-6 pb-20 lg:mx-0 lg:max-w-lg lg:flex-col lg:justify-start">
      <a href="#main" class={button({ intent: "link" })}>
        Home
      </a>
      <a href="#projects" class={button({ intent: "link" })}>
        Projects
      </a>
      <a href="/blog" class={button({ intent: "link" })}>
        Blog
      </a>
      <span class="flex-grow" />
      <button
        class={button({ intent: "ghost", class: "-ml-4" })}
        hx-get="/dashboard/settings"
        hx-target="body"
        hx-push-url="true"
        preload
      >
        Log In →
      </button>
    </nav>
  );
}
