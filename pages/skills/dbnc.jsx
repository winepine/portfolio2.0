import { Box, Text, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Router from "next/router";
const MotionBox = motion(Box);
export default function Cloud() {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text
          fontFamily="Bebas Neue, cursive"
          marginTop="40vh"
          fontSize={{ base: "3xl", md: "7xl" }}
          fontWeight={700}
          textAlign="center"
        >
          Haven&apos;t Tipped My Toe In This Paradigm
        </Text>
        <Button
          _hover={{ color: "pink.400", bg: "gray.700" }}
          bg={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
          w={{ base: "40vw", lg: "18vw" }}
          mt={{ base: "1rem" }}
          onClick={() => Router.push("/")}
        >
          Go Back
        </Button>
      </Flex>
    </MotionBox>
  );
}
