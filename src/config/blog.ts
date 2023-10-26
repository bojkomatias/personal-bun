type Navigation = {
  name: string;
  href: GetRoutes;
  icon?: string;
};

export const blogNavigation: Navigation[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Featured",
    href: "/blog",
  },
];
