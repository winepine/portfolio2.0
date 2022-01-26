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
const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionImage = motion(Image);
const About = () => {
  const [hasCopied, setCopied] = useState(false);
  const [copied, cycleCopied] = useCycle("Click To Copy", "Email Copied!");
  const [text, cycleText] = useCycle(copied, "Email : basitsaeed1@gmail.com");
  useEffect(cycleText, [copied]);
  const buttonbg = useColorModeValue("rgba(233,30,99,0.8)", "pink.500");
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Flex
        position="fixed"
        zIndex={-1}
        w="100vw"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Flex>
          <Text
            fontFamily="Bebas Neue, cursive"
            marginTop={{ base: "16vh", md: "20vh" }}
            fontWeight={700}
            fontSize={{ base: "5xl", md: "9xl" }}
          >
            About
          </Text>
          <Text
            fontFamily="Bebas Neue, cursive"
            marginTop={{ base: "16vh", md: "20vh" }}
            fontWeight={700}
            fontSize={{ base: "5xl", md: "9xl" }}
            color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
          >
            Me
          </Text>
        </Flex>
        <Text
          w={{ base: "20rem", md: "40rem" }}
          textAlign="center"
          opacity="0.8"
          fontFamily="Poppins"
        >
          I&apos;m a 3rd Year Computer Science Student practicing frontend
          design and building apps with React and NextJS since 2020. Currently
          Working on my backend skills.
        </Text>
        <Text
          w={{ base: "20rem", md: "40rem" }}
          textAlign="center"
          marginTop="5vh"
          fontFamily="Poppins"
          color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
        >
          Open To Work For React/NextJS Roles
        </Text>
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
        <Text
          opacity="0.8"
          marginTop="5vh"
          textAlign="center"
          w="90vw"
          fontSize={{ base: "sm", md: "lg" }}
          fontWeight={400}
          fontFamily="Poppins"
        >
          Website Built With NextJS · ChakraUI · Framer Motion · Vercel
        </Text>
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
/**
 * 
 * import React from "react";
import { motion } from "framer-motion";

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2"
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "100%",
      color: "#0055FF",
      transition: { duration: 0.2 }
    },
    visible: {
      y: "0%",
      color: "#FF0088",
      transition: { duration: 0.3 }
    }
  };
  const Tag = tagMap[props.type];

  return (
    <Tag>
      <span
        style={{
          overflow: "hidden",
          display: "inline-block"
        }}
      >
        <motion.span
          style={{ overflow: "hidden", display: "inline-block" }}
          variants={item}
        >
          {props.text}
        </motion.span>
      </span>
    </Tag>
  );
};

export default AnimatedCharacters;
------------
 const placeholderText = [
    { type: "heading1", text: "FramerMotion" },
    {
      type: "heading2",
      text: "Animating responsive text!"
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.5
      }
    }
  };
 */
