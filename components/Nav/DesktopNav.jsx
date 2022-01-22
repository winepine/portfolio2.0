import {
  Box,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import DesktopSubNav from "./DesktopSubNav";
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
        href: "#",
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
const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
export default DesktopNav;
