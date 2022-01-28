import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Image,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const anims = {
  init: { opacity: 0 },
  anim: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};
export default function Projects() {
  const box2 = useRef(null);
  const scroll = (e) => {
    console.log(e);
  };
  useEffect(() => {
    if (box2 && box2.current) {
      box2.current.addEventListener("scroll", scroll);
      return () => box2.removeEventListener("scrolldown", scroll);
    }
  }, []);
  const box1 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  return (
    <Box className="container" position="relative">
      <Flex
        // onScroll={() => {
        //   console.log("hello");
        //   box2.current.scrollIntoView({ behavior: "smooth" });
        // }}
        border="solid green 1px"
        minHeight="100vh"
        pt="20vh"
        flexDirection="column"
        alignItems="center"
        overflow="hidden"
      >
        <MotionText
          initial="init"
          animate="anim"
          display={{ base: "none", md: "block" }}
          exit="exit"
          variants={anims}
          textAlign="center"
          fontSize={{ base: "sm", md: "2xl" }}
          fontFamily="Dancing Script, cursive"
          color="pink.500"
        >
          Do The Best You Can Until You Know Better. Then When You Know Better,
          Do Better.
        </MotionText>
        <MotionText
          textAlign="center"
          lineHeight={0.9}
          initial={{ opacity: 0, letterSpacing: "30px" }}
          animate={{
            opacity: 0.5,
            letterSpacing: "0px",
            transition: { delay: 0.5, duration: 1 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          fontSize={{ base: "25vw", md: "15vw" }}
          fontFamily="Bebas Neue"
          fontWeight={600}
        >
          SELECTED WORK
        </MotionText>
        <Flex>
          <MotionText
            initial="init"
            animate="anim"
            exit="exit"
            variants={anims}
            fontSize={{ base: "2xl", md: "7xl" }}
            fontFamily="Bebas Neue"
            fontWeight={600}
          >
            I Started My Developer
          </MotionText>
          <MotionText
            initial="init"
            animate="anim"
            exit="exit"
            variants={anims}
            fontSize={{ base: "2xl", md: "7xl" }}
            fontFamily="Bebas Neue"
            fontWeight={600}
            color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
          >
            &nbsp;Journey In 2019
          </MotionText>
        </Flex>
        <MotionFlex
          initial={{ y: -30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 2, duration: 1 },
          }}
          flexDirection="column"
          alignItems="center"
          onClick={() => {
            box2.current.scrollIntoView({ behavior: "smooth" });
          }}
          mt="20vh"
        >
          <Image
            src="/icons8-down-50.png"
            h={10}
            w={8}
            opacity="0.8"
            alt="Scroll-Icon"
          />
          <Text fontFamily="Poppins" fontWeight={200}>
            Scroll Down
          </Text>
        </MotionFlex>
      </Flex>
      {
        //----
      }
      <Flex
        ref={box2}
        border="solid yellow 1px"
        minHeight="100vh"
        pt="20vh"
        flexDirection="column"
        alignItems="center"
        overflow="hidden"
      ></Flex>
      {
        //----
      }
      <Flex
        border="solid skyblue 1px"
        minHeight="100vh"
        pt="20vh"
        flexDirection="column"
        alignItems="center"
        overflow="hidden"
      ></Flex>
      {
        //----
      }
      <Flex
        border="solid yellow 1px"
        minHeight="100vh"
        pt="20vh"
        flexDirection="column"
        alignItems="center"
        overflow="hidden"
      ></Flex>
    </Box>
  );
}
