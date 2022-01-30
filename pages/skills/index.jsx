import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  Divider,
  scroll,
} from "@chakra-ui/react";
import Frontend from "./frontend";
import Backend from "./backend";
import Head from "next/head";
import Tech from "../../components/Tech";
import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionDivider = motion(Divider);
export default function Skills() {
  const { scrollY } = useViewportScroll();
  return (
    <Box>
      <Head>
        <title>Skills</title>
        <link rel="icon" href="/logo.svg" type="image/icon type" />
      </Head>
      <Box overflow="hidden" position="relative" pt="5rem" minHeight="85vh">
        <Flex flexDirection="column" alignItems="center">
          <MotionFlex
            flex={1}
            justifyContent="center"
            flexWrap="wrap"
            mt="5vh"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0, 1],
              y: 0,
              transition: { duration: 0.3, type: "spring", stiffness: 50 },
            }}
            exit={{
              opacity: 0,
              y: 200,
              transition: { duration: 0.3, type: "spring", stiffness: 50 },
            }}
          >
            <MotionText
              fontFamily="Bebas Neue, cursive"
              fontSize={{ base: "4rem", lg: "5vw" }}
              fontWeight={800}
            >
              Tech I have
            </MotionText>
            <MotionText
              fontFamily="Bebas Neue, cursive"
              fontSize={{ base: "3rem", lg: "5vw" }}
              color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
              fontWeight={800}
            >
              &nbsp;Worked With
            </MotionText>
          </MotionFlex>
          <MotionFlex
            w={{ base: "100vw", md: "80vw" }}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.4,
                type: "spring",
                stiffness: 50,
              },
            }}
            exit={{
              opacity: 0,
              y: 100,
              transition: {
                duration: 0.3,
                delay: 0.1,
                type: "spring",
                stiffness: 50,
              },
            }}
            flex={17}
            justifyContent="center"
            flexWrap="wrap"
          >
            <Tech text="C++" imgUrl="/cpp.png" />
            <Tech text="Python" imgUrl="/python.png" />
            <Tech text="React JS" imgUrl="/react.png" />
            <Tech text="GitHub" imgUrl="/githubhd.png" />
            <Tech text="Bash" imgUrl="/bash.png" />
            <Tech text="JavaScript" imgUrl="/js.png" />
            <Tech text="VS Code" imgUrl="/vs.png" />
            <Tech text="NextJS" imgUrl="/next2js - Copy.png" />
            <Tech text="Ubuntu" imgUrl="/ubuntu_.png" />
            <Tech text="MongoDB" imgUrl="/mongo.png" />
            <Tech text="Chakra UI" imgUrl="/chakra.png" />
            <Tech text="Node JS" imgUrl="/node.png" />
            <Tech text="JSON Web Token" imgUrl="/jwt.png" />
          </MotionFlex>
        </Flex>
        <MotionDivider
          display={{ base: "none", md: "block" }}
          style={{ width: scrollY }}
          bg="pink.500"
          h="1vh"
        />
      </Box>
      <Frontend landing={false} />
      <MotionDivider
        display={{ base: "none", md: "block" }}
        style={{ width: scrollY }}
        bg="pink.500"
        h="1vh"
      />
      <Backend landing={false} />
      <Box
        left={0}
        bottom={{ base: "0", lg: "8px" }}
        w="100%"
        color={useColorModeValue("rgba(0,0,0,1)", "rgba(255,255,255,0.7)")}
        textAlign="center"
        position="relative"
      >
        <Text fontWeight={100}>© 2022 Basit Saeed. All Rights Reserved.</Text>
      </Box>
    </Box>
  );
}
