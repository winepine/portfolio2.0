import { Stack, useColorModeValue } from "@chakra-ui/react";
import MobileNavItem from "./MobileNavItem";
const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Skills",
    children: [
      {
        label: "All Technologies",
        subLabel: "Languages/Tools/Technologies",
        href: "/skills",
      },
      {
        label: "Web Frontend",
        subLabel: "Frontend technologies",
        href: "/skills/frontend",
      },
      {
        label: "Backend & Database",
        subLabel: "Backend technologies",
        href: "/skills/backend",
      },
      {
        label: "Cloud",
        subLabel: "Databases and deployment technologies",
        href: "/skills/dbnc",
      },
    ],
  },
  {
    label: "Experience & Education",
    href: "/education",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "About",
    href: "/about",
  },
];
const MobileNav = ({ ToggleHam }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem ToggleHam={ToggleHam} key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
export default MobileNav;
