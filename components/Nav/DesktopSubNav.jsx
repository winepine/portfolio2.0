import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Router from "next/router";
// import Link from "next/link";
const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Flex
      bg="transparent"
      role={"group"}
      as={Button}
      onClick={() => Router.replace(href)}
      display={"block"}
      p={3}
      size="9xl"
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"left"}>
        <Box>
          <Text
            textAlign="left"
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(10px)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Flex>
  );
};
export default DesktopSubNav;
