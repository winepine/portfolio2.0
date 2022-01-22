import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import React, { useEffect } from "react";
export default React.memo(function WithSubnavigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  useEffect(() => {
    console.log("rendered...");
  }, []);
  return (
    <Box position="fixed" minWidth="100vw">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"70px"}
        py={{ base: 2 }}
        px={{ base: 8 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -6 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          pl={3}
          flex={{ base: 2 }}
          justify={{ base: "center", md: "start" }}
        >
          <Text
            textAlign={{ base: "center", md: "left" }}
            fontFamily="'Poppins', sans-serif"
            color={useColorModeValue("gray.800", "white")}
          >
            Basit Saeed
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={0}
        ></Stack>
        <IconButton
          ml={{ base: "-10vw" }}
          onClick={toggleColorMode}
          icon={
            colorMode === "light" ? (
              <MoonIcon w={5} h={5} />
            ) : (
              <SunIcon w={5} h={5} />
            )
          }
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
});
