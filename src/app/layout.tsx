import { siteConfig } from "@/config/site";
import { button } from "@/components/ui/button";
import Head from "./head";
import { ThemePicker } from "@/components/theme-picker";
import { FontSizePicker } from "@/components/font-size-picker";
import { RadiusPicker } from "@/components/radius-picker";

/** Used to inject into other layouts */
export function BaseLayout({ children }: { children?: any }) {
  return (
    <html
      lang="en"
      _="init send setTheme to me end
      on setTheme set @class to (localStorage.theme + ' ' + localStorage['theme-radius'] + ' ' + localStorage['theme-font-size'])"
    >
      <Head />
      <body
        class="w-screen overflow-x-hidden bg-background text-foreground antialiased"
        hx-boost="true"
        hx-ext="response-targets, preload, head-support"
        _="on click send close to .dropdown end
        on htmx:afterOnLoad tell <button/> remove @disabled"
        // Handles click outside for all menus
      >
        {/* Notifications fall all here! */}
        <div id="notification" />
        <div id="page-content" class="min-h-[100svh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
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
