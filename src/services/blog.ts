import { db } from "@/db";
import { InsertBlog, blog } from "@/db/schema/blog";
import { eq } from "drizzle-orm";

export async function getBlogs() {
  return await db.select().from(blog);
}

export async function getBlogById(id: number) {
  const r = await db.select().from(blog).where(eq(blog.id, id));
  return r[0];
}

export async function getBlogBySlug(slug: string) {
  const r = await db.select().from(blog).where(eq(blog.slug, slug));
  return r[0];
}

export async function createBlog(data: InsertBlog) {
  const r = await db.insert(blog).values(data).returning({ id: blog.id });
  console.log(r[0]);
  return r[0].id;
}
