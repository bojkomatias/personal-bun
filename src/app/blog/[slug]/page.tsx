import { Layout } from "@/app/layout";
import { BackButton } from "@/components/back-button";

export default async function BlogPage({ slug }: { slug: string }) {
  return (
    <Layout>
      <div class="mx-auto max-w-5xl py-8">
        <BackButton />
        <h1>Why I started blogging</h1>
        <h4>Matias Bojko - 15 min read</h4>

        <h3>The begging</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          adipisci aliquam aperiam ratione eum eius omnis obcaecati vero non rem
          a iure, esse molestias. Repellendus, quo! Ab libero quis ducimus?
        </p>
      </div>
    </Layout>
  );
}
