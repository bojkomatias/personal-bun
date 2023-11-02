import setup from "@/config/setup";
import OAuth2 from "@/utils/oauth2";
import Elysia from "elysia";
import { UserNavigation } from "@/modules/auth/user-nav";
import LoginPage from "./page";
import { db } from "@/db";
import { user } from "@/db/schema/user";
import { eq } from "drizzle-orm";

const auth = new Elysia({ name: "auth" })
  .use(setup)
  .get("/login", () => <LoginPage />)
  .get("/auth/callback/google", async ({ query, setCookie, jwt, set }) => {
    const oauth_user = await OAuth2(query["code"] as string);

    // Check if user exists in DB
    let [u] = await db
      .select()
      .from(user)
      .where(eq(user.email, oauth_user.email));

    // If not create it
    if (!u) {
      [u] = await db
        .insert(user)
        .values({ ...oauth_user, image: oauth_user.picture })
        .returning();
    }

    // Set cookie
    setCookie(
      "auth",
      await jwt.sign({
        id: u.id.toString(),
        name: u.name,
        email: u.email,
        image: u.image,
        role: u.role,
      }),
      {
        httpOnly: true,
      },
    );

    set.redirect = "/dashboard/settings";
  })
  .get("/auth/navigation", ({ token }) => <UserNavigation user={token!} />, {
    beforeHandle: ({ token, set }) => {
      if (!token) {
        set.status = 401;
        return "Unauthorized";
      }
    },
  })
  .post("/auth/logout", ({ setCookie, set }) => {
    // Remove cookie not working
    setCookie("auth", "");
    set.redirect = "/";
  });

export default auth;
