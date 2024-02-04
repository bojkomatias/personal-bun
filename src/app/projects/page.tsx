import { badge } from "@/components/ui/badge";
import { Layout } from "../layout";
import { IntlDate } from "@/utils/formatters";

export default async function ProjectsPage() {
  return (
    <Layout>
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <h2>Projects</h2>
        <p>Learn how to grow your business with expert advice.</p>
        <div class="mt-16 space-y-32">{/* <ProjectCard /> */}</div>
      </div>
    </Layout>
  );
}

type ProjectCardType = {
  title: string;
  description: string;
  badge: string;
  image: string;
  date: Date;
};
export const ProjectCard = (props: ProjectCardType) => (
  <article class="relative isolate flex gap-8">
    <div class="relative aspect-square w-64 shrink-0">
      <img
        src={props.image}
        alt=""
        class="absolute inset-0 h-full w-full rounded-xl bg-card object-cover object-top"
      />
      <div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-border" />
    </div>
    <div>
      <div class="flex items-center gap-x-4 text-xs">
        <time datetime="2020-03-16" class="text-muted-foreground">
          {IntlDate.format(props.date)}
        </time>
        <span class={badge({ class: "capitalize" })}>{props.badge}</span>
      </div>
      <div class="group relative max-w-xl">
        <h3 class="mt-3 leading-tight text-foreground group-hover:text-primary">
          <a href="#">
            <span class="absolute inset-0"></span>
            {props.title}
          </a>
        </h3>
        <p class="mt-5 text-sm leading-6 text-muted-foreground">
          {props.description}
        </p>
      </div>
      <div class="mt-6 flex border-t border-border pt-6">
        <div class="relative flex items-center gap-x-4">
          <img
            src="/public/matute.webp"
            alt=""
            class="h-10 w-10 rounded-full bg-gray-50"
          />
          <div>
            <p class="font-semibold text-foreground">
              <a href="#">
                <span class="absolute inset-0"></span>Matías Bojko
              </a>
            </p>
            <p class="-mt-1 text-xs text-muted-foreground">
              Co-Founder / Senior Software Engineer
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
);
