import { button } from "@/components/ui/button";

export function Home() {
  return (
    <div>
      <h4>Hi, I'm a systems engineer graduate from Argentina ⭑⭑⭑.</h4>
      <br />
      <p>
        Love building industry grade applications and exploring the vast world
        of software. I have a strong background in requirement analysis,
        defining composable applications with optimal behaviors, and designing
        systems.
      </p>
      <br />
      <p>
        My key focuses when developing are:
        <ul>
          <li>- High performance and optimization</li>
          <li>- User friendliness and accessibility</li>
          <li>- Readable and well documented codebase</li>
        </ul>
      </p>
      <br />
      <p>
        I also co-founded a software factory with two colleagues and had the
        pleasure to work with them in big projects for universities and global
        clients.{" "}
        <a href="https://pqlub.com" class={button({ intent: "link" })}>
          Learn more →
        </a>
      </p>

      <div class="my-6 space-x-4">
        <a href="#projects" class={button({ intent: "primary" })}>
          Check my projects ↓
        </a>
        <button class={button({ intent: "outline" })}>Check CV →</button>
      </div>
    </div>
  );
}
