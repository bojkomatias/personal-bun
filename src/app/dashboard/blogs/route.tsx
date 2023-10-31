import Elysia, { t } from "elysia";
import { ParseHTML } from "@/utils/md-html";
import NewBlogPage from "./new/page";
import setup from "@/config/setup";
import { Blogs } from "./page";
import { DashboardLayout } from "../layout";
import { blogSchema } from "@/db/schema/blog";
import { createBlog } from "@/services/blog";
import { Notification } from "@/components/notification";

const blogs = new Elysia({ name: "dashboard-blogs", prefix: "/blog" })
  .use(setup)
  .get("/", async ({ set, headers, token }) => {
    set.headers["Vary"] = "hx-target";
    return headers["hx-target"] === "dashboard-content" ? (
      <Blogs />
    ) : (
      <DashboardLayout token={token!}>
        <Blogs />
      </DashboardLayout>
    );
  })
  .post(
    "/",
    async ({ body, set }) => {
      console.log(body);
      const res = await createBlog(body);
      if (!res)
        return (
          <Notification
            isError
            title="Error"
            description="Something went wrong creating new blog"
          />
        );

      return (
        <Notification
          title="Blog created"
          description="A new blog entry was set in the database"
        />
      );
    },
    {
      transform: ({ body }) => {
        body.slug = body.title.toLowerCase().split(" ").join("-");
      },
      body: blogSchema,
    },
  )
  .get("/new", async ({ headers, token }) => {
    return headers["hx-request"] ? (
      <NewBlogPage />
    ) : (
      <DashboardLayout token={token!}>
        <NewBlogPage />
      </DashboardLayout>
    );
  });

export default blogs;
