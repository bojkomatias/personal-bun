import { button } from "@/components/ui/button";

export function Nav() {
  return (
    <nav class="m-6 flex max-w-lg flex-col gap-6">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#blog">Blog</a>
      <button
        class={button({ intent: "primary" })}
        hx-get="/dashboard/settings"
        hx-target="body"
        hx-push-url="true"
        preload
      >
        Log In
      </button>
    </nav>
  );
}
