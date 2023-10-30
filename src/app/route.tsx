import Elysia from "elysia";
import setup from "@/config/setup";
import Page from "./page";
import BaseTemplate from "./template";
import { button } from "@/components/ui/button";
import NotFound from "./not-found";

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
      app
        .get("/", () => {
          return <Page />;
        })
        .post("/", ({ body }) => console.log(body)),
  )
  .get("/not-found", () => (
    <BaseTemplate>
      <div class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
          <p class="text-base font-semibold text-primary">404</p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Page not found
          </h1>
          <p class="mt-6 text-base leading-7 text-muted-foreground">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/" hx-boost="true" class={button({ intent: "primary" })}>
              Go back home
            </a>
            <a href="#" class={button()}>
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </BaseTemplate>
  ))
  .onError(({ error, code, set }) => {
    if (code === "NOT_FOUND") {
      set.headers["Content-Type"] = "text/html";
      return <NotFound />;
    }
  });

export default page;
