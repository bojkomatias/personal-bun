import { button } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { SelectBlog } from "@/db/schema/blog";
import { marked } from "marked";

export function BlogCard({ blog }: { blog: SelectBlog }) {
  return (
    <div class={card().base()}>
      <h3 class={card().title()}>{blog.title}</h3>
      <p class={card().description()}>{blog.createdAt}</p>
      <div class={card().content()}>
        <div class="line-clamp-5">
          {marked.parse(blog.content, { breaks: true })}
        </div>
      </div>
      <div class={card().footer()}>
        <a
          href={`/blog/${blog.slug}`}
          class={button({ intent: "background", class: "w-full" })}
        >
          Read More
        </a>
      </div>
    </div>
  );
}
