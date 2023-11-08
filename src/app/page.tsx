import { button } from "@/components/ui/button";
import { Layout } from "./layout";

export default function Page() {
  return (
    <Layout>
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 class="mt-10 max-w-lg drop-shadow">
            A{" "}
            <span class="relative -z-10 inline-block drop-shadow-md before:absolute before:-inset-1 before:block before:rotate-3 before:-skew-x-6 before:-skew-y-6 before:bg-accent">
              <span class="relative font-black text-accent-foreground">
                better
              </span>
            </span>{" "}
            way to ship your{" "}
            <span class="relative -z-10 inline-block drop-shadow-md before:absolute before:-inset-1 before:block before:rotate-3 before:-skew-x-6 before:-skew-y-6 before:bg-accent">
              <span class="relative font-black text-accent-foreground">
                projects
              </span>
            </span>{" "}
          </h1>
          <h4 class="mt-6 font-light text-muted-foreground">
            As a{" "}
            <b class="text-foreground drop-shadow-sm">
              software & systems engineer
            </b>{" "}
            I focus on building industry grade software. Welcome to my spot. I
            invite you to explore my projects and learn a bit about my work. And
            of course, don't hesitate to reach out.
          </h4>
          <div class="mt-10 flex items-center gap-x-6">
            <a href="#" class={button({ intent: "primary" })}>
              Get started
            </a>
            <a href="#" class={button()}>
              Learn more{" "}
              <span aria-hidden="true" class="mt-0.5">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <div class="rounded-xl bg-card py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl sm:text-center">
            <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About me
            </h2>
            <p class="mt-6 text-lg leading-8 text-muted-foreground">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20"
          >
            <li class="flex flex-col gap-6 xl:flex-row">
              <img
                class="aspect-auto w-52 flex-none rounded-xl object-cover object-left"
                src="/public/matute.webp"
                alt=""
              />
              <div class="flex-auto">
                <h3 class="text-lg font-semibold leading-8 tracking-tight text-foreground">
                  Matías Bojko
                </h3>
                <p class="text-base leading-7 text-muted-foreground">
                  Senior Software Engineer
                </p>
                <p class="mt-6 text-base leading-7 text-muted-foreground">
                  Quia illum aut in beatae. Possimus dolores aliquid accusantium
                  aut in ut non assumenda. Enim iusto molestias aut deleniti eos
                  aliquid magnam molestiae. At et non possimus ab. Magni labore
                  molestiae nulla qui.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-background py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="text-center">
              <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Trusted by creators worldwide
              </h2>
              <p class="mt-4 text-lg leading-8 text-muted-foreground">
                Lorem ipsum dolor sit amet consect adipisicing possimus.
              </p>
            </div>
            <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div class="flex flex-col bg-muted p-8">
                <dt class="text-sm font-semibold leading-6 text-muted-foreground">
                  Clients on the platform
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-foreground">
                  80+
                </dd>
              </div>
              <div class="flex flex-col bg-muted p-8">
                <dt class="text-sm font-semibold leading-6 text-muted-foreground">
                  Flat platform fee
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-foreground">
                  3%
                </dd>
              </div>
              <div class="flex flex-col bg-muted p-8">
                <dt class="text-sm font-semibold leading-6 text-muted-foreground">
                  Uptime guarantee
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-foreground">
                  99.9%
                </dd>
              </div>
              <div class="flex flex-col bg-muted p-8">
                <dt class="text-sm font-semibold leading-6 text-muted-foreground">
                  Raised in projects
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-foreground">
                  $70k
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}
