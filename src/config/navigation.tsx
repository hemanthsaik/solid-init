type NavElement = {
  title: string;
  href: string;
  external?: boolean;
};

type NavCategory = {
  title: string;
  items: NavElement[];
};

type Config = {
  sidebarNav: NavElement[];
};

export const navConfig: Config = {
  sidebarNav: [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "Products",
      href: "/products",
    },
  ],
};
