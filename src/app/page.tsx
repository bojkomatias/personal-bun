import { button } from "@/components/ui/button";
import { Layout } from "./layout";

export default function Page() {
  return (
    <Layout>
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 class="mt-10 max-w-lg">
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
      <div class="relative isolate -z-10 bg-foreground">
        <div class="overflow-hidden">
          <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 class="text-4xl font-extrabold tracking-tight text-background sm:text-6xl">
                  We’re changing the way people connect.
                </h1>
                <p class="relative mt-6 text-lg leading-8 text-muted sm:max-w-md lg:max-w-none">
                  Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
                  quis cupidatat mollit aute velit. Et labore commodo nulla
                  aliqua proident mollit ullamco exercitation tempor. Sint
                  aliqua anim nulla sunt mollit id pariatur in voluptate cillum.
                  Eu voluptate tempor esse minim amet fugiat veniam occaecat
                  aliqua.
                </p>
              </div>
              <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-accent object-cover shadow-lg shadow-muted-foreground"
                    />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-ring"></div>
                  </div>
                </div>
                <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-accent object-cover shadow-lg shadow-muted-foreground"
                    />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-ring"></div>
                  </div>
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-accent object-cover shadow-lg shadow-muted-foreground"
                    />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-ring"></div>
                  </div>
                </div>
                <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-accent object-cover shadow-lg shadow-muted-foreground"
                    />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-ring"></div>
                  </div>
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-accent object-cover shadow-lg shadow-muted-foreground"
                    />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-ring"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
