import { Layout } from "@/app/layout";
import { BackButton } from "@/components/back-button";
import { db } from "@/db";
import { blog } from "@/db/schema/blog";
import { IntlDate } from "@/utils/formatters";
import { ParseHTML } from "@/utils/md-html";
import { eq } from "drizzle-orm";

export default async function BlogPage({ slug }: { slug: string }) {
  const [b] = await db.select().from(blog).where(eq(blog.slug, slug));
  return (
    <Layout>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/night-owl.min.css"
        />
      </head>
      <div class="float-left pl-2 lg:pl-10">
        <BackButton />
      </div>
      <div class="blog-prose pb-20">
        <div class="flex justify-end text-sm leading-5">
          {IntlDate.format(new Date(b.createdAt))}
          <br />
          {b.read}
        </div>
        <h1 class="drop-shadow">{b.title}</h1>
        <hr />
        {ParseHTML(b.content)}
      </div>
    </Layout>
  );
}
