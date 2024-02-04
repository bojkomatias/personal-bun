import { footerNavigation, siteConfig } from "@/config/site";
import { button } from "@/components/ui/button";
import { ThemePicker } from "@/components/theme-picker";
import { RadiusPicker } from "@/components/radius-picker";
import BaseTemplate from "./template";
import { PatternSquare } from "@/components/background-patterns";

/** Used to inject into other layouts */
export function Layout({ children }: { children?: any }) {
  return (
    <BaseTemplate>
      <PatternSquare />
      <div class="flex justify-end gap-2 px-4"></div>
      {/* <header class="z-20 flex h-12 items-center justify-center px-2">
        <nav
          id="layout-navigation"
          class={segment().base({ style: "none", static: true })}
          hx-on:click="htmx.takeClass(event.target,'tab-indicator')"
          hx-preserve
        >
          <a class={segment().item()} href={"/"} hx-boost="true" preload>
            Home
          </a>
          {siteNavigation.map(({ name, href }) => (
            <a class={segment().item()} href={href} hx-boost="true" preload>
              {name}
            </a>
          ))}
        </nav>
      </header> */}
      <main class="min-h-screen px-6 lg:px-8" id="main">
        {children}
      </main>
      <Footer />
    </BaseTemplate>
  );
}

const Footer = () => (
  <footer class="border-t border-border bg-muted px-2 py-8 sm:px-6 lg:px-16">
    <div class="flex flex-col items-center gap-6 py-2 sm:flex-row">
      <nav class="flex flex-auto gap-6">
        {footerNavigation.map(({ name, href }) => (
          <a
            href={href}
            preload
            class={button({
              intent: "link",
              class:
                "text-muted-foreground hover:text-accent hover:no-underline",
            })}
          >
            {name}
          </a>
        ))}
      </nav>

      <div class="relative z-20 h-12 w-24">
        <RadiusPicker />
        <ThemePicker />
      </div>
    </div>
    <p class="text-center font-light text-muted-foreground sm:text-left">
      Built by{" "}
      <a
        preload
        href={siteConfig.links.twitter}
        class={button({ intent: "link", class: "lowercase" })}
      >
        bojkomatias
      </a>
      .<br class="block sm:hidden" /> Source code available on{" "}
      <a
        href={siteConfig.links.github}
        preload
        class={button({ intent: "link" })}
      >
        Github
      </a>
    </p>
  </footer>
);
