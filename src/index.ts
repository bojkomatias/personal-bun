import { Elysia } from "elysia";
import staticPlugin from "@elysiajs/static";
import index from "./app/route";
import blog from "./app/blog/route";
import dashboard from "./app/dashboard/route";
import login from "./app/login/route";
import studies from "./app/studies/route";

const app = new Elysia()
  .use(staticPlugin())
  .use(index)
  .use(blog)
  .use(studies)
  .use(login)
  .use(dashboard)
  .get("/styles.css", () => Bun.file("./src/output.css"))
  .get("/init.js", () => Bun.file("./src/config/init.js"))
  .get("/defer.js", () => Bun.file("./src/config/defer.js"))
  .listen(3000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
