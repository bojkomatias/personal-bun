import { siteConfig, siteNavigation } from "@/config/site";
import { button } from "@/components/ui/button";
import { ThemePicker } from "@/components/theme-picker";
import { FontSizePicker } from "@/components/font-size-picker";
import { RadiusPicker } from "@/components/radius-picker";
import BaseTemplate from "./template";
import { segment } from "@/components/ui/segment";

/** Used to inject into other layouts */
export function Layout({ children }: { children?: any }) {
  return (
    <BaseTemplate>
      <div class="flex justify-end gap-2 px-2 pt-2">
        <button
          class={button({ intent: "primary" })}
          hx-get="/dashboard/settings"
          hx-target="body"
          hx-push-url="true"
        >
          Dashboard
        </button>
      </div>
      <header class="flex h-12 items-center justify-center px-2">
        <nav
          class={segment().base({ style: "none", static: true })}
          _={segment()._indicator()}
        >
          {siteNavigation.map(({ name, href }) => (
            <a
              class={segment().item({ size: "base", style: "underline" })}
              href={href}
              hx-boost="true"
              _="init if window.location.pathname is equal to @href then add @aria-checked='true' end"
            >
              {name}
            </a>
          ))}
        </nav>
      </header>

      <main class="min-h-screen p-8">{children}</main>
      <Footer />
    </BaseTemplate>
  );
}

const Footer = () => (
  <footer class="border-t border-border bg-card">
    <div class="flex flex-col items-center gap-6 px-2 py-8 sm:flex-row sm:px-6 lg:px-16">
      <p class="flex-auto text-center text-sm leading-loose text-muted-foreground sm:text-left">
        Built by{" "}
        <a
          href={siteConfig.links.twitter}
          class={button({ intent: "link", class: "lowercase" })}
        >
          bojkomatias
        </a>
        .<br class="block sm:hidden" /> Source code available on{" "}
        <a href={siteConfig.links.github} class={button({ intent: "link" })}>
          Github
        </a>
      </p>
      <div class="relative h-12 w-40">
        <RadiusPicker />
        <FontSizePicker />
        <ThemePicker />
      </div>
    </div>
  </footer>
);
