export const siteConfig = {
  name: "Matías Bojko",
  description: "A software engineer personal page and dashboard",
  keywords:
    "software, engineer, tech, dashboard, blog, ui, development, enterprise, freelance, projects",
  author: "Matías Bojko Slekis",
  url: "https://matiasbojko.com",
  ogImage: "",
  links: {
    github: "https://github.com/bojkomatias/personal-bun",
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
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Studies",
    href: "/studies",
  },
  {
    name: "Docs",
    href: "/docs",
  },
];

export const footerNavigation: Navigation[] = [
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Docs",
    href: "/docs",
  },
  {
    name: "Terms",
    href: "/terms",
  },
];
