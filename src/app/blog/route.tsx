import Elysia from "elysia";
import BlogPage from "./page";

const blog = new Elysia({ name: "blog", prefix: "/blog" }).get("/", () => {
  return <BlogPage />;
});

export default blog;
