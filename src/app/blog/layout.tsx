import { BaseLayout } from "@/app/layout";
import { button } from "@/components/button";
import { blogNavigation } from "@/config/blog";

export default function BlogLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <BaseLayout>
      <header class="flex h-12 items-center justify-between px-2 pt-2">
        <div class="text-xs font-black">/bojkomatias</div>
        <nav class="space-x-2">
          {blogNavigation.map(({ name, href }) => (
            <button
              class={button({ intent: "link" })}
              hx-get={href}
              hx-target="body"
              hx-push-url="true"
            >
              {name}
            </button>
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
  );
}
