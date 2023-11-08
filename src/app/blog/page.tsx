import { Layout } from "../layout";
import { BlogCard } from "@/modules/blog/blog-card";
import { db } from "@/db";
import { blog } from "@/db/schema/blog";

export default async function BlogsPage() {
  const blogs = await db.select().from(blog);

  return (
    <Layout>
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <h2>From the Blog</h2>
        <p>Learn how to grow your business with our expert advice.</p>
        <div class="mt-16 space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
          {blogs.map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
