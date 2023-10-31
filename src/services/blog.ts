import { db } from "@/db";
import { InsertBlog, blog } from "@/db/schema/blog";

export async function getBlogs() {
  return await db.select().from(blog);
}

export async function createBlog(data: InsertBlog) {
  const r = await db.insert(blog).values(data).returning({ id: blog.id });
  console.log(r[0]);
  return r[0].id;
}
