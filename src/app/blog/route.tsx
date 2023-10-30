import Elysia from "elysia";
import BlogsPage from "./page";
import BlogPage from "./[slug]/page";

const blog = new Elysia({ name: "blog", prefix: "/blog" })
  .get("/", () => {
    return <BlogsPage />;
  })
  .get("/:slug", ({ params: { slug } }) => <BlogPage slug={slug} />);

export default blog;
