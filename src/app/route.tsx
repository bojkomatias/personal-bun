import Elysia from "elysia";
import Template from "@/app/template";
import setup from "@/config/setup";
import { checkbox, input, label } from "@/components/input";
import Storybook from "@/components/__storybook";

const marketingPage = new Elysia({
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
      app
        .get("/", async () => {
          return (
            <Template>
              <Storybook />
            </Template>
          );
        })
        .post("/", ({ body }) => console.log(body)),
  );

export default marketingPage;
