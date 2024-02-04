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
        <div class="-mt-16 space-y-32 pb-24 md:-mt-10 md:space-y-48 lg:mt-32 lg:space-y-96">
          <Home />
          <SelectedProjects />
        </div>
      </div>
    </Layout>
  );
}

const SelectedProjects = () => (
  <div>
    <h2 class="mb-12">
      <a id="projects" href="#projects">
        Selected Projects
      </a>
    </h2>
    <div class="space-y-24">
      <ProjectCard
        title="I+D platform for River Plate university"
        description="Researchers and professionals experts can publish papers and evaluate others. University assigns scholarship students to help field work, and funds approved researches. The platform allows for all of this to be track and saved, researchers, protocols, evaluations, budgeting, etc."
        badge="research & development"
        image="/public/uap-vid.png"
        date={new Date("04/09/2023")}
      />
      <ProjectCard
        title="A proper way to manage your physician activities"
        description="Allows the personal physician to take diligent note of the consultation, keep track of patients and each case."
        badge="healthcare"
        image="/public/case-history.png"
        date={new Date("12/03/2019")}
      />
    </div>
  </div>
);
