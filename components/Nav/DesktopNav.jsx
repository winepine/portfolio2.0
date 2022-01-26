import {
  Box,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Flex,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import Router from "next/router";
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
        href: "/skills/all",
      },
      {
        label: "Web Frontend",
        subLabel: "Frontend technologies",
        href: "/skills/frontend",
      },
      {
        label: "Backend & DB",
        subLabel: "Databases & API",
        href: "/skills/backend",
      },
      {
        label: "Cloud",
        subLabel: "DevOps & Cloud",
        href: "/skills/dbnc",
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
    <Stack direction={"row"} spacing={8}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"auto"}>
            <PopoverTrigger>
              <Flex
                href={navItem.href ?? "#"}
                p={2}
                as={Button}
                bg="transparent"
                onClick={() => Router.replace(navItem.href ?? "#")}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  bg: "transparent",
                }}
              >
                {navItem.label}
              </Flex>
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
