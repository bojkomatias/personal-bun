import { DataTable, DataRows } from "@/components/data-table/data-table";
import { Action, Column, pageLimit } from "@/components/data-table/utils";

import { SelectBlog } from "@/db/schema/blog";

const columns: Column<SelectBlog>[] = [
  {
    accessor: "id",
    col: "w-12",
  },
  {
    accessor: "createdAt",
    hidden: true,
  },
  {
    accessor: "title",
    col: "w-1/3",
    disableHiding: true,
    sortable: true,
  },

  {
    accessor: "read",
  },
];
const actions: Action<SelectBlog>[] = [];

export const BlogTable = ({ children }: { children: any }) => {
  return (
    <DataTable
      columns={columns}
      search={{
        name: "search",
        "hx-get": "/dashboard/blog/q",
      }}
    >
      {children}
    </DataTable>
  );
};

export const BlogRows = ({
  blogs,
  next,
}: {
  blogs: SelectBlog[];
  next: GetRoutes;
}) => (
  <DataRows
    columns={columns}
    data={blogs}
    next={blogs.length < pageLimit ? undefined : next}
    actions={actions}
  />
);
