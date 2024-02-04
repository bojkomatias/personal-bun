import { Hero } from "@/app/hero";
import { Layout } from "./layout";
import { Nav } from "@/app/nav";
import { Home } from "@/app/about";
import { ProjectCard } from "./projects/page";

export default function Page() {
  return (
    <Layout>
      <div class="gap-12 lg:flex">
        <div class="top-24 h-fit lg:sticky">
          <Hero />
          <Nav />
        </div>
        <div class="space-y-96 py-24">
          <Home />
          <SelectedProjects />
        </div>
      </div>
    </Layout>
  );
}

const SelectedProjects = () => (
  <div class="space-y-24">
    <h2>
      <a id="projects" href="#projects">
        Selected Projects
      </a>
    </h2>

    <ProjectCard
      title="An I+D platform for a River Plate university"
      description="Lorem blah blah"
      badge="research & development"
      image="/public/uap-vid.png"
      date={new Date("04/09/2023")}
    />
    <ProjectCard
      title="A proper way to manage your physician activities"
      description="Lorem blah blah"
      badge="healthcare"
      image="/public/case-history.png"
      date={new Date("12/03/2019")}
    />
  </div>
);
