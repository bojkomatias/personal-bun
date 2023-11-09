import { DashboardHeading } from "@/components/dashboard/heading";
import { DashboardContent } from "@/components/dashboard/wrapper";
import { blog } from "@/db/schema/blog";
import { dict } from "@/utils/dictionary";
import { db } from "@/db";
import { BlogRows, BlogTable } from "@/modules/blog/blog-table";
import { nextURL } from "@/components/data-table/utils";

export async function Blogs() {
  const blogs = await db.select().from(blog);
  return (
    <>
      <DashboardHeading title={dict.get("settings")} />
      <DashboardContent>
        <BlogTable>
          <BlogRows blogs={blogs} next="/dashboard/blog/q" />
        </BlogTable>
      </DashboardContent>
    </>
  );
}
