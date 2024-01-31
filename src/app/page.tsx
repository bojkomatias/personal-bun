import { Hero } from "@/modules/index/hero";
import { Layout } from "./layout";
import { Nav } from "@/modules/index/nav";
import { About } from "@/modules/index/about";
import { Projects } from "@/modules/index/projects";

export default function Page() {
  return (
    <Layout>
      <div class="flex gap-12">
        <div class="sticky top-24 h-fit">
          <Hero />
          <Nav />
        </div>
        <div>
          <About />
          <Projects />
        </div>
      </div>
    </Layout>
  );
}
