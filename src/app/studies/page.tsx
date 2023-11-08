import { badge } from "@/components/ui/badge";
import { Layout } from "../layout";
import { IntlDate } from "@/utils/formatters";

export default async function StudiesPage() {
  return (
    <Layout>
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <h2>Case Studies</h2>
        <p>Learn how to grow your business with our expert advice.</p>
        <div class="mt-16 space-y-32">
          <StudyCard />
        </div>
      </div>
    </Layout>
  );
}

const StudyCard = () => (
  <article class="relative isolate flex flex-col gap-8 lg:flex-row">
    <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
      <img
        src="/public/case-history.png"
        alt=""
        class="absolute inset-0 h-full w-full rounded-xl bg-card object-cover object-top"
      />
      <div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-border" />
    </div>
    <div>
      <div class="flex items-center gap-x-4 text-xs">
        <time datetime="2020-03-16" class="text-muted-foreground">
          {IntlDate.format(new Date())}
        </time>
        <span class={badge()}>Healthcare</span>
      </div>
      <div class="group relative max-w-xl">
        <h3 class="mt-3 leading-6 text-foreground group-hover:text-primary">
          <a href="#">
            <span class="absolute inset-0"></span>A simple way to manage your
            physician activities
          </a>
        </h3>
        <p class="mt-5 text-sm leading-6 text-muted-foreground">
          Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
          vitae illo. Non aliquid explicabo necessitatibus unde. Sed
          exercitationem placeat consectetur nulla deserunt vel iusto corrupti
          dicta laboris incididunt.
        </p>
      </div>
      <div class="mt-6 flex border-t border-border pt-6">
        <div class="relative flex items-center gap-x-4">
          <img
            src="/public/pelado.png"
            alt=""
            class="h-10 w-10 rounded-full bg-gray-50"
          />
          <div>
            <p class="font-semibold text-foreground">
              <a href="#">
                <span class="absolute inset-0"></span>Matías Bojko
              </a>
            </p>
            <p class="-mt-1 text-xs text-muted-foreground">Co-Founder / CTO</p>
          </div>
        </div>
      </div>
    </div>
  </article>
);
