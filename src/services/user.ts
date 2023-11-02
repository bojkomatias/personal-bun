import { db } from "@/db";
import { InsertUser, SelectUser, user } from "@/db/schema/user";
import { QuerySearchParams, pageLimit } from "@/components/data-table/utils";
import { asc, desc, eq, getTableColumns, like, or } from "drizzle-orm";

// Only reusable complex queries

/** Paginated, Search, Filtered user query  */
export async function getUsers({
  page,
  search,
  orderBy,
  sort,
}: QuerySearchParams<SelectUser>) {
  const columns = getTableColumns(user);

  return await db
    .select(columns)
    .from(user)
    .where(
      search
        ? or(like(user.name, `%${search}%`), like(user.email, `%${search}%`))
        : undefined,
    )
    .orderBy(
      orderBy
        ? sort === "asc"
          ? asc(user[orderBy])
          : desc(user[orderBy])
        : desc(user.createdAt),
    )
    .limit(pageLimit)
    .offset(page ? page * pageLimit : 0);
}
