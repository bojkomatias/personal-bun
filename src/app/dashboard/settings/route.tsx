import { InsertUser, userSchema } from "@/db/schema/user";
import Profile from "@/modules/settings/profile";
import setup from "@/config/setup";
import { getUserById, updateUserAttribute } from "@/services/user";
import Elysia, { t } from "elysia";
import SettingsPage from "./page";
import { DashboardLayout } from "../layout";

const settings = new Elysia({
  name: "settings",
  prefix: "/settings",
})
  .use(setup)
  .onBeforeHandle(({ request, set }) => {
    if (request.method === "GET") {
      // Change to false, indicating data is refreshed
      set.headers["settings"] = "false";
      // Set that the request varies if the headers has changed (on post / put)
      set.headers["Vary"] = "settings, hx-request";
      // Add cache control
      set.headers["Cache-Control"] = "public, max-age=300, must-revalidate";
    }
    if (request.method === "PATCH" || request.method === "POST") {
      // Change to true, indicating resource is modified
      set.headers["settings"] = "true";
    }
  })
  .get("/", async ({ token, headers, set }) => {
    const user = await getUserById(1);

    set.headers["Vary"] = "hx-target";
    return headers["hx-target"] === "dashboard-content" ? (
      <SettingsPage user={user} />
    ) : (
      <DashboardLayout token={token!}>
        <SettingsPage user={user} />
      </DashboardLayout>
    );
  })
  .get("/:id/:attr", ({ params: { id, attr }, query }) => (
    <Profile.Attribute
      id={id}
      attribute={attr as keyof InsertUser}
      value={query.value as string}
    />
  ))
  .get("/:id/:attr/edit", ({ params: { id, attr }, query }) => (
    <Profile.AttributeEdit
      id={id}
      attribute={attr as keyof InsertUser}
      value={query.value as string}
    />
  ))
  .patch(
    "/:id",
    async ({ params: { id }, body }) => {
      const [attr, value] = Object.entries(body).flat() as [
        attr: keyof InsertUser,
        value: string | number | null,
      ];
      const r = await updateUserAttribute(parseInt(id), attr, value);
      return <Profile.Attribute id={id} attribute={attr} value={r} />;
    },
    { body: t.Partial(userSchema) },
  );

export default settings;
