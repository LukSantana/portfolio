interface NavbarItemsProps {
  title: string;
  to: string;
}

export const navbarItems: Array<NavbarItemsProps> = [
  {
    title: "About",
    to: "about",
  },
  {
    title: "Skills",
    to: "skills",
  },
  {
    title: "Projects",
    to: "projects",
  },
  {
    title: "Contact",
    to: "contact",
  },
];