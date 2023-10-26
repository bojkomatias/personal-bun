import setup from "@/config/setup";
import Elysia from "elysia";
import settings from "./settings/route";

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
    (app) => app.use(settings),
  );

export default dashboard;
