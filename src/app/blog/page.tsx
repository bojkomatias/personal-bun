import { card } from "@/components/ui/card";
import { Layout } from "../layout";
import { button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <Layout>
      <div class="flex justify-center gap-6">
        <div class={card({ width: "contained" }).base()}>
          <h2 class={card().title()}>Why I started blogging</h2>
          <div class={card().description()}>Matias Bojko - 15 min read</div>
          <div class={card().content()}>
            <BlogPost />
          </div>
          <div class={card().footer()}>
            <button class={button({ intent: "background", class: "w-full" })}>
              Read More
            </button>
          </div>
        </div>
        <div class={card({ width: "contained" }).base()}>
          <h2 class={card().title()}>Why I started blogging</h2>
          <div class={card().description()}>Matias Bojko - 15 min read</div>
          <div class={card().content()}>
            <BlogPost />
          </div>
          <div class={card().footer()}>
            <button class={button({ intent: "secondary", class: "w-full" })}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const BlogPost = () => (
  <div>
    <h4>The begging</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
      doloribus eos labore excepturi incidunt, neque nesciunt. Tempore quae
      nulla modi! Dolor pariatur quasi est commodi consequatur porro maiores sit
      expedita.
    </p>
    <ul>
      <li>Sape</li>
      <li>Sape</li>
    </ul>
  </div>
);
