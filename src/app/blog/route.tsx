import Elysia from "elysia";
import BlogLayout from "./layout";

const blog = new Elysia({ name: "blog", prefix: "/blog" }).get(
  "/",
  async () => {
    return (
      <BlogLayout>
        <div class="rounded-lg border border-border">BLOG!</div>
      </BlogLayout>
    );
  },
);

export default blog;
