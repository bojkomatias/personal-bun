import { button } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { SelectBlog } from "@/db/schema/blog";
import { IntlDate } from "@/utils/formatters";
import { ParseHTML } from "@/utils/md-html";

export function BlogCard({ blog }: { blog: SelectBlog }) {
  return (
    <div class={card().base()}>
      <h2 class={card().title()}>{blog.title}</h2>
      <div class={card().description()}>
        15 min read - {IntlDate.format(new Date(blog.createdAt))}
      </div>

      <div class={card().content()}>
        <div class="blog-prose prose-sm line-clamp-3">
          <hr />
          {ParseHTML(blog.content)}
        </div>
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
