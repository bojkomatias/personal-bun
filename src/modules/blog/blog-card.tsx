import { button } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { SelectBlog } from "@/db/schema/blog";
import { IntlDate } from "@/utils/formatters";
import { ParseHTML } from "@/utils/md-html";

export function BlogCard({ blog }: { blog: SelectBlog }) {
  return (
    <div class={card().base()}>
      <div class={card().content({ class: "group relative pt-0" })}>
        <a href={`/blog/${blog.slug}`} hx-boost="true" preload>
          <span class="absolute inset-0" />
        </a>
        <div class="blog-prose line-clamp-6 group-hover:prose-headings:text-primary">
          <h2 class="drop-shadow">{blog.title}</h2>
          {ParseHTML(blog.content)}
        </div>
      </div>

      <div class="mt-6 flex items-center justify-between px-8">
        <div class="relative flex items-center gap-x-4">
          <img
            src="/public/matute.webp"
            alt=""
            class="h-10 w-10 rounded-full bg-gray-50"
          />
          <div>
            <p class="font-semibold text-foreground">Matías Bojko</p>
            <p class="-mt-1 text-xs text-muted-foreground">
              {IntlDate.format(new Date(blog.createdAt))}
            </p>
          </div>
        </div>

        <span class="text-sm">{blog.read}</span>
      </div>
      <div class={card().footer()}>
        <a
          href={`/blog/${blog.slug}`}
          hx-boost="true"
          preload
          class={button({ intent: "background", class: "w-full" })}
        >
          Read More
        </a>
      </div>
    </div>
  );
}
