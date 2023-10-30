import { BackButton } from "@/components/back-button";
import { button } from "@/components/ui/button";
import { card } from "@/components/ui/card";

const google = new URL("auth", "https://accounts.google.com/o/oauth2/v2/");
google.searchParams.set(
  "redirect_uri",
  "http://localhost:3000/auth/callback/google/",
);
google.searchParams.set("response_type", "code");
google.searchParams.set("scope", "profile email");
google.searchParams.set("client_id", Bun.env.GOOGLE_CLIENT_ID!);

export const AuthForm = () => {
  return (
    <div class="mx-auto mt-48 max-w-xl">
      <BackButton />
      <div class={card().base()}>
        <h3 class={card().title()}>Welcome!</h3>
        <p class={card().description()}>
          If you have an on going project login to keep track
        </p>

        <div class={card().content()}>
          <a
            href={google.href}
            class={button({
              intent: "primary",
              class:
                "w-full bg-foreground text-muted hover:bg-foreground hover:text-background",
            })}
          >
            <img
              src="/public/google-svg.svg"
              class="-ml-4 mr-4 h-5 w-5 rounded-full"
            />
            Continue with Google
          </a>
          <div class="my-8 h-0 border-t border-border" />
          <div class="px-2 text-sm">
            By clicking "Continue with Google", you agree to our{" "}
            <a href="/" class={button({ intent: "link" })}>
              Terms of Service↗
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};
