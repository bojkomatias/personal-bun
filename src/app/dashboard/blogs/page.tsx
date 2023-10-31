import { DashboardHeading } from "@/components/dashboard/heading";
import { DashboardContent } from "@/components/dashboard/wrapper";
import { SelectBlog } from "@/db/schema/blog";
import { dict } from "@/utils/dictionary";
import blogs from "./route";
import { getBlogs } from "@/services/blog";

export async function Blogs() {
  const blogs = await getBlogs();
  return (
    <>
      <DashboardHeading title={dict.get("settings")} />
      <DashboardContent>
        {blogs.map((blog) => (
          <div>{blog.title}</div>
        ))}
      </DashboardContent>
    </>
  );
}
