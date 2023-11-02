import { DashboardHeading } from "@/components/dashboard/heading";
import { DashboardContent } from "@/components/dashboard/wrapper";
import { blog } from "@/db/schema/blog";
import { dict } from "@/utils/dictionary";
import { db } from "@/db";

export async function Blogs() {
  const blogs = await db.select().from(blog);
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
