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
        href: "#",
      },
      {
        label: "Web Frontend",
        subLabel: "Frontend technologies",
        href: "/skills/frontend",
      },
      {
        label: "Web Backend",
        subLabel: "Backend technologies",
        href: "#",
      },
      {
        label: "Database & Cloud",
        subLabel: "Databases and deployment technologies",
        href: "#",
      },
    ],
  },
  {
    label: "Education & Certifications",
    href: "#",
  },
  {
    label: "Projects",
    href: "/",
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
