import { siteConfig, siteNavigation } from "@/config/site";
import { BaseLayout } from "@/app/layout";
import { button } from "@/components/ui/button";

export default function Template({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <>
      <head>
        <title>{siteConfig.name}</title>
      </head>
      <BaseLayout>
        <header class="flex h-12 items-center justify-between px-2 pt-2">
          <div class="text-xs font-black">/bojkomatias</div>
          <nav class="space-x-2">
            {siteNavigation.map(({ name, href }) => (
              <a class={button({ intent: "link" })} href={href} hx-boost="true">
                {name}
              </a>
            ))}
          </nav>
          <button
            class={button({ intent: "primary" })}
            hx-get="/dashboard/settings"
            hx-target="body"
            hx-push-url="true"
          >
            Dashboard
          </button>
        </header>
        <main class="min-h-screen pb-8">{children}</main>
      </BaseLayout>
    </>
  );
}
