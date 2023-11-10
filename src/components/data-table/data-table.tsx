import { cx } from "@/utils/cx";
import { dropdown } from "@/components/ui/dropdown";
import { button } from "../ui/button";
import { SearchBar } from "../search-bar";
import { Action, Column } from "./utils";
import { dict } from "@/utils/dictionary";
import { table } from "@/components/ui/table";
import { ariaExpand } from "../ui/event-handlers";

export function DataTable<T>({
  children,
  columns,
  search,
}: {
  children: any;
  columns: Column<T>[];
  search?: {
    "hx-get": GetRoutes;
    name: string;
    placeholder?: string;
  };
}) {
  return (
    <>
      <div class="mb-2 flex gap-1.5 px-px">
        {search ? (
          <SearchBar
            {...search}
            hx-trigger="keyup changed delay:500ms, search"
            hx-target="next tbody"
            hx-swap="innerHTML"
            hx-include="this"
            class="flex-grow"
          />
        ) : null}
        <button class={button({ intent: "outline", size: "icon" })}>
          <i class="i-lucide-sliders" />
        </button>
        {/* Column Visibility */}
        <div
          class={dropdown().base()}
          aria-haspopup="true"
          hx-on:click={ariaExpand()}
        >
          <button class={button({ intent: "outline", size: "icon" })}>
            <i class="i-lucide-table-properties" />
          </button>
          <div class={dropdown().content()}>
            <div class={dropdown().header({ class: "text-sm font-semibold" })}>
              {dict.get("columns")}
            </div>
            <div class={dropdown().separator()} />

            {columns
              .filter((e) => !e.disableHiding)
              .map(({ accessor, header, hidden }) => (
                <button
                  hx-on:click={`htmx.find('#${String(
                    accessor,
                  )}').classList.toggle('hidden');
                  htmx.findAll('.${String(
                    accessor,
                  )}').forEach(e=> e.classList.toggle('hidden'));
                  `}
                  class={dropdown().item()}
                >
                  <span> {header ? header : dict.get(accessor)}</span>
                  <i class={cx("i-lucide-check", String(accessor))} />
                </button>
              ))}
          </div>
        </div>
      </div>
      <div class={table().wrapper()}>
        <table class={table().base()}>
          <colgroup>
            {columns.map(({ col, accessor, hidden }) => (
              <col id={String(accessor)} class={cx(col, hidden && "hidden")} />
            ))}
            <col class={"w-10"} />
          </colgroup>
          <thead class={table().head()}>
            <tr class={table().tr()}>
              {columns.map(({ accessor, header, sortable }) => (
                <th class={table().th({ class: String(accessor) })}>
                  {sortable ? (
                    <button
                      hx-get={search?.["hx-get"]}
                      hx-vals={`{ "orderBy": "${String(
                        accessor,
                      )}", "sort": "asc" }`}
                      hx-target="next tbody"
                      hx-swap="innerHTML"
                      class={button({ size: "xs" })}
                      hx-on:click={`if(this.getAttribute('hx-vals').includes('asc')){
                          this.setAttribute('hx-vals', '{ "orderBy": "${String(
                            accessor,
                          )}", "sort": "desc" }');
                        }
                        else {
                          this.setAttribute('hx-vals', '{ "orderBy": "${String(
                            accessor,
                          )}", "sort": "asc" }');
                        }`}
                    >
                      {header ? header : dict.get(accessor)}
                      <i class="i-lucide-chevrons-up-down" />
                    </button>
                  ) : (
                    <span>{header ? header : dict.get(accessor)}</span>
                  )}
                </th>
              ))}
              {/* Extra action column */}
              <th class={table().th({ class: "actions" })}>
                <span class="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody class={table().body()}>{children}</tbody>
        </table>
      </div>
    </>
  );
}

export function DataRows<T>({
  data,
  columns,
  actions,
  next,
}: {
  data: T[];
  columns: Column<T>[];
  actions: Action<T>[];
  next?: GetRoutes;
}) {
  return (
    <>
      {data.map((d) => (
        <tr class={table().tr()}>
          {columns.map(({ accessor, cell }) => (
            <td class={table().td({ class: String(accessor) })}>
              <script>
                if(htmx.find('#{accessor}').matches('.hidden')) htmx.findAll('.
                {accessor}').forEach(e {`=>`} e.classList.add('hidden'));
              </script>
              {cell ? cell(d) : d[accessor]}
            </td>
          ))}
          <td class={table().td({ class: "actions" })}>
            {actions.length > 0 ? (
              actions.length > 1 ? (
                <div
                  class={dropdown().base()}
                  aria-haspopup="true"
                  hx-on:click={ariaExpand()}
                >
                  <button class={button({ intent: "ghost", size: "icon-sm" })}>
                    <i class="i-lucide-more-horizontal" />
                  </button>
                  <div class={dropdown().content({ class: "w-32 min-w-fit" })}>
                    {actions.map(
                      (action) =>
                        action(d) && (
                          <button class={dropdown().item()} {...action(d)} />
                        ),
                    )}
                  </div>
                </div>
              ) : (
                <button class={button({ size: "xs" })} {...actions[0](d)} />
              )
            ) : null}
          </td>
        </tr>
      ))}
      {next ? (
        <tr
          hx-get={next}
          hx-swap="outerHTML"
          hx-target="this"
          hx-trigger="revealed"
        />
      ) : null}
    </>
  );
}
