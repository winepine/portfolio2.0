import { motion, useCycle } from "framer-motion";
import {
  Text,
  Box,
  Flex,
  Button,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
// ------
const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionImage = motion(Image);
const MotionText = motion(Text);
const container = {
  init: {
    opacity: 0,
  },
  anim: { opacity: 1, transition: { duration: 0.3 } },
  leave: { opacity: 0, transition: { duration: 0.3 } },
};
const childanims = {
  init: {
    y: "100%",
  },
  anim: {
    y: "0%",
    transition: { duration: 0.4 },
  },
  leave: { y: "100%", transition: { duration: 0.4 } },
};
const childanimsAlt = {
  init: {
    y: "-100%",
  },
  anim: {
    y: "0%",
    transition: { duration: 0.5 },
  },
  leave: { y: "-100%", transition: { duration: 0.5 } },
};
// Default Export
const About = () => {
  const [hasCopied, setCopied] = useState(false);
  const [copied, cycleCopied] = useCycle("Click To Copy", "Email Copied!");
  const [text, cycleText] = useCycle(copied, "Email : basitsaeed1@gmail.com");
  useEffect(cycleText, [copied]);
  const buttonbg = useColorModeValue("rgba(233,30,99,0.8)", "pink.500");
  // ------
  return (
    <MotionBox variants={container} initial="init" animate="anim" exit="leave">
      <Flex
        position="fixed"
        zIndex={-1}
        w="100vw"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        overflow="hidden"
      >
        <Flex overflow="hidden">
          <MotionText
            variants={childanims}
            fontFamily="Bebas Neue, cursive"
            marginTop={{ base: "16vh", md: "20vh" }}
            fontWeight={700}
            fontSize={{ base: "5xl", md: "9xl" }}
            display="inline-block"
          >
            About
          </MotionText>
          <MotionText
            display="inline-block"
            variants={childanims}
            fontFamily="Bebas Neue, cursive"
            marginTop={{ base: "16vh", md: "20vh" }}
            fontWeight={700}
            fontSize={{ base: "5xl", md: "9xl" }}
            color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
          >
            Me
          </MotionText>
        </Flex>
        <MotionText
          variants={childanims}
          display="inline-block"
          w={{ base: "20rem", md: "40rem" }}
          textAlign="center"
          opacity="0.8"
          fontFamily="Poppins"
        >
          I&apos;m a 3rd Year Computer Science Student practicing frontend
          design and building apps with React and NextJS since 2020. Currently
          Working on my backend skills.
        </MotionText>
        <MotionText
          display="inline"
          variants={childanimsAlt}
          w={{ base: "20rem", md: "40rem" }}
          textAlign="center"
          marginTop="5vh"
          fontFamily="Poppins"
          color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
        >
          Open To Work For React/NextJS Roles
        </MotionText>
        <Flex>
          <a
            href="https://github.com/winepine"
            target="_blank"
            rel="noreferrer"
          >
            <MotionImage
              whileHover={{ scale: 1.1, opacity: 1 }}
              width="80px"
              opacity="0.8"
              src="/git.svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/basit-saeed/"
            target="_blank"
            rel="noreferrer"
          >
            <MotionImage
              whileHover={{ scale: 1.1, opacity: 1 }}
              width="80px"
              opacity="0.8"
              src="/in.svg"
            />
          </a>
        </Flex>
        <MotionButton
          onHoverStart={!hasCopied && cycleText}
          onHoverEnd={!hasCopied && cycleText}
          onClick={() => {
            if (!hasCopied) {
              navigator.clipboard.writeText("basitsaeed1@gmail.com");
              cycleText();
              setCopied(!hasCopied);
              cycleCopied();
            }
          }}
          _hover={!hasCopied && { color: "pink.400", bg: "gray.700" }}
          color={!hasCopied ? "rgba(255,255,255,0.9)" : "pink.400"}
          bg={!hasCopied ? buttonbg : "gray.700"}
          w={{ base: "90vw", lg: "25rem" }}
          mt="2vh"
        >
          {text}
        </MotionButton>
        <MotionText
          variants={childanims}
          opacity="0.8"
          marginTop="5vh"
          textAlign="center"
          w="90vw"
          fontSize={{ base: "sm", md: "lg" }}
          fontWeight={400}
          fontFamily="Poppins"
        >
          Website Built With NextJS · ChakraUI · Framer Motion · Vercel
        </MotionText>
      </Flex>
      <Box
        left={0}
        bottom={{ base: "0", lg: "8px" }}
        w="100%"
        color={useColorModeValue("rgba(0,0,0,1)", "rgba(255,255,255,0.7)")}
        textAlign="center"
        position="fixed"
      >
        <Text fontWeight={100}>© 2022 Basit Saeed. All Rights Reserved.</Text>
      </Box>
    </MotionBox>
  );
};
export default About;
