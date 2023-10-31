import setup from "@/config/setup";
import Elysia from "elysia";
import settings from "./settings/route";
import blogs from "./blogs/route";

const dashboard = new Elysia({
  name: "dashboard",
  prefix: "/dashboard",
})
  .use(setup)
  .guard(
    {
      beforeHandle: ({ token, set }) => {
        if (!token) return (set.redirect = "/login");
      },
    },
    (app) => app.use(settings).use(blogs),
  );

export default dashboard;
