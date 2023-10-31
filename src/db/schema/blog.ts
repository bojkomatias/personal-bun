import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-typebox";

export const blog = sqliteTable("blog", {
  id: integer("id").primaryKey().notNull(),
  slug: text("slug").unique().notNull(),
  title: text("title").unique().notNull(),
  read: text("read").notNull(),
  content: text("content").notNull(),
  createdAt: integer("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});

export type SelectBlog = typeof blog.$inferSelect; // return type when queried
export type InsertBlog = typeof blog.$inferInsert; // insert type

export const blogSchema = createInsertSchema(blog);
