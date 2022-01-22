import {
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  useColorModeValue,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Router from "next/router";
const MobileNavItem = ({ label, children, href, ToggleHam }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Button}
        onClick={() => {
          if (href) {
            ToggleHam();
            Router.replace(href);
          }
        }}
        // href={href ?? '#'}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Flex
                py={2}
                as={Button}
                w="100%"
                key={child.label}
                bg="transparent"
                onClick={() => {
                  if (child.href) {
                    ToggleHam();
                    Router.replace(child.href);
                  }
                }}
                justify={"space-between"}
                align={"center"}
                _hover={{
                  textDecoration: "none",
                  bg: "transparent",
                }}
              >
                <Text fontWeight={600}>{child.label}</Text>
              </Flex>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
export default MobileNavItem;
