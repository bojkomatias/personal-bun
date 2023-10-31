import { Layout } from "@/app/layout";
import { BackButton } from "@/components/back-button";
import { getBlogBySlug } from "@/services/blog";
import { marked } from "marked";

export default async function BlogPage({ slug }: { slug: string }) {
  const blog = await getBlogBySlug(slug);
  return (
    <Layout>
      <div class="mx-auto flex max-w-3xl flex-col lg:max-w-5xl lg:flex-row">
        <div class="lg:mt-10 ">
          <BackButton />
        </div>
        <div class="mx-auto w-full max-w-3xl space-y-4 px-2 py-8 sm:px-4 lg:px-8">
          <h1>{blog.title}</h1>
          <p class="tabular-nums">{blog.createdAt}</p>
          <div>{marked.parse(blog.content)}</div>
        </div>
      </div>
    </Layout>
  );
}
