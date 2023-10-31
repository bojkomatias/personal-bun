import { Layout } from "../layout";
import { getBlogs } from "@/services/blog";
import { BlogCard } from "@/modules/blog/blog-card";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <Layout>
      <div class="mx-auto grid max-w-5xl gap-6 py-8 sm:grid-cols-2">
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </Layout>
  );
}
