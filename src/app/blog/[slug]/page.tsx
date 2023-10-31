import { Layout } from "@/app/layout";
import { BackButton } from "@/components/back-button";
import { getBlogBySlug } from "@/services/blog";
import { IntlDate } from "@/utils/formatters";
import { ParseHTML } from "@/utils/md-html";

export default async function BlogPage({ slug }: { slug: string }) {
  const blog = await getBlogBySlug(slug);
  return (
    <Layout>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/night-owl.min.css"
        />
      </head>

      <div class="blog-prose">
        <div class="flex justify-between">
          <BackButton />
          <span class="text-sm">
            15 min read - {IntlDate.format(new Date(blog.createdAt))}
          </span>
        </div>
        <h1 class="drop-shadow">{blog.title}</h1>
        <hr />
        {ParseHTML(blog.content)}
      </div>
    </Layout>
  );
}
