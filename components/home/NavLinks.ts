type NavLinkT = {
  url: string;
  label: string;
};

const homePageNavLinks: NavLinkT[] = [
  {
    url: "/login",
    label: "Log in",
  },
  {
    url: "/dashboard",
    label: "Dashboard",
  },
  {
    url: "/latest",
    label: "Latest Repairs",
  },
  {
    url: "/repairform",
    label: "Create Repair",
  },
  {
    url: "/search",
    label: "Search",
  },
  {
    url: "/login",
    label: "Sign up",
  },
];

const navMenu: NavLinkT[] = [
  {
    label: "Dashboard",
    url: "/dashboard",
  },
  {
    label: "Latest Reports",
    url: "/latest",
  },
  {
    label: "Create Report",
    url: "/repairform",
  },
];

const profileMenu: NavLinkT[] = [
  {
    label: "Profile",
    url: "/profile",
  },
  {
    label: "Settings",
    url: "#",
  },
  {
    label: "Logout",
    url: "/logout",
  },
];

export { navMenu, profileMenu, homePageNavLinks };
