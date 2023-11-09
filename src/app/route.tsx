import Elysia from "elysia";
import setup from "@/config/setup";
import Page from "./page";
import NotFound from "./not-found";
import Docs from "./docs/page";

const page = new Elysia({
  name: "marketing",
})
  .use(setup)
  .guard(
    {
      beforeHandle: ({ set }) => {
        /** Uncomment the following if this plugins starts pushing-urls */
        set.headers["Vary"] = "hx-request";
        set.headers["Cache-Control"] =
          "public, max-age=900, must-revalidate, stale-while-revalidate=120";
      },
    },
    (app) =>
      app.get("/", () => {
        return <Page />;
      }),
  )
  .get("/docs", () => <Docs />)
  .get(
    "/sleeper",
    async () => await new Promise((resolve) => setTimeout(resolve, 2000)),
  )
  .onError(({ code, set }) => {
    if (code === "NOT_FOUND") {
      set.headers["Content-Type"] = "text/html";
      return <NotFound />;
    }
  });

export default page;
