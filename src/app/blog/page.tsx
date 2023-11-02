import { Layout } from "../layout";
import { BlogCard } from "@/modules/blog/blog-card";
import { db } from "@/db";
import { blog } from "@/db/schema/blog";

export default async function BlogsPage() {
  const blogs = await db.select().from(blog);

  return (
    <Layout>
      <div class="mx-auto max-w-5xl gap-6 py-8 sm:grid sm:grid-cols-2">
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </Layout>
  );
}
