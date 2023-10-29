export const siteConfig = {
  name: "Matías Bojko",
  description: "A software engineer personal page and dashboard",
  keywords:
    "software, engineer, tech, dashboard, blog, ui, development, enterprise, freelance, projects",
  author: "Matías Bojko Slekis",
  url: "http://localhost:3000",
  ogImage: "",
  links: {
    github: "https://github.com/bojkomatias/donde-comer-en-la-villa",
    twitter: "https://twitter.com/bojko_matias",
  },
};

type Navigation = {
  name: string;
  href: GetRoutes;
  icon?: string;
};

export const siteNavigation: Navigation[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];
