import { Elysia, t } from "elysia";
import jwt from "@elysiajs/jwt";
import { html } from "@elysiajs/html";
import cookie from "@elysiajs/cookie";

if (Bun.env.JWT_SECRET === undefined)
  throw "Missing secret add JWT_SECRET to .env file";

if (Bun.env.DATABASE_URL === undefined)
  throw "Missing secret add DATABASE_URL to .env file";

if (Bun.env.DATABASE_AUTH_TOKEN === undefined)
  throw "Missing secret add DATABASE_AUTH_TOKEN to .env file";

if (Bun.env.GOOGLE_CLIENT_ID === undefined)
  throw "Missing secret add CLIENT_ID to .env file";

if (Bun.env.GOOGLE_CLIENT_SECRET === undefined)
  throw "Missing secret add CLIENT_SECRET to .env file";

/**
 * Can re-use the setup plugin, even if duplicated (used only for typing)
 * Elysia has plugin checksum allowing to de-duplicate plugins on runtime
 * Here is the stuff reusable throughout the app, JWT, Cookie, User decorator (pass user)
 */

const setup = new Elysia({ name: "setup" })
  .use(html())
  .use(cookie())
  .use(
    jwt({
      name: "jwt",
      secret: Bun.env.JWT_SECRET,
      schema: t.Object({
        id: t.String(),
        email: t.String(),
        image: t.Union([t.String(), t.Null()]),
        name: t.String(),
        role: t.Required(t.Union([t.Literal("client"), t.Literal("admin")])),
      }),
      exp: "7d",
    }),
  )
  .derive(async ({ jwt, cookie }) => {
    const u = await jwt.verify(cookie.auth);
    return { token: u ? u : null };
  });

export default setup;
