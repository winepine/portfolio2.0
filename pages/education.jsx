import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Divider,
  Badge,
  Tag,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionDivider = motion(Divider);
import Head from "next/head";
const anims = {
  init: {
    y: "100%",
    opacity: 0,
  },
  anim: {
    y: "0%",
    opacity: [0, 0, 1],
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: "100%",
    opacity: [1, 0, 0],
    transition: {
      duration: 0.5,
    },
  },
};
export default function Education() {
  return (
    <Box position="relative" zIndex="-1">
      <Head>
        <title>Education</title>
        <link rel="icon" href="/logo.svg" type="image/icon type" />
      </Head>
      <MotionBox pt="15vh" overflow="hidden">
        <Flex ml="5vw" flexDirection="column">
          <Flex justifyContent="left" flexDirection="row">
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "4xl", md: "6xl" }}
            >
              Work&nbsp;
            </MotionText>
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "4xl", md: "6xl" }}
              color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
            >
              Experience
            </MotionText>
          </Flex>
          <Flex
            // mt="5vh"
            justifyContent="left"
            flexDirection={{ base: "row", md: "row" }}
          >
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "2xl", md: "4xl" }}
            >
              TEACHING ASSISTANT&nbsp;
            </MotionText>
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "2xl", md: "4xl" }}
              color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
            >
              AT NUCES&nbsp;
              <Tag
                initial="init"
                animate="anim"
                exit="exit"
                variants={anims}
                colorScheme="pink"
                // fontFamily="Bebas Neue"
                fontSize={{ base: "xl", md: "3xl" }}
              >
                Aug 2021 - Present
              </Tag>
            </MotionText>
          </Flex>
          <MotionDivider
            initial={{ width: "0%" }}
            animate={{ width: "90%", transition: { duration: 0.5 } }}
            exit={{ width: "0%", transition: { duration: 0.5 } }}
            bg="pink.500"
            h="1vh"
          />
          <Flex mt="5vh" justifyContent="left" flexDirection="row">
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "4xl", md: "6xl" }}
              color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
            >
              EDUCATION
            </MotionText>
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "4xl", md: "6xl" }}
            >
              &nbsp;&amp; Certifications
            </MotionText>
          </Flex>
          <Flex
            // mt="5vh"
            justifyContent="left"
            flexDirection={{ base: "row", md: "row" }}
          >
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "2xl", md: "4xl" }}
            >
              CS50 Web Programming&nbsp;
            </MotionText>
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "2xl", md: "4xl" }}
              color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
            >
              By HARVARD&nbsp;
              <Tag
                initial="init"
                animate="anim"
                exit="exit"
                variants={anims}
                colorScheme="pink"
                // fontFamily="Bebas Neue"
                fontSize={{ base: "xl", md: "3xl" }}
              >
                2020
              </Tag>
            </MotionText>
          </Flex>
          <MotionDivider
            display={{ base: "none", md: "block" }}
            mb="1vh"
            initial={{ width: "0%" }}
            animate={{ width: "40%", transition: { duration: 0.5 } }}
            exit={{ width: "0%", transition: { duration: 0.5 } }}
            bg="pink.500"
            h="2px"
          />
          <Flex
            justifyContent="left"
            flexDirection={{ base: "row", md: "row" }}
          >
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "2xl", md: "4xl" }}
            >
              Intermediate SQL&nbsp;
            </MotionText>
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "2xl", md: "4xl" }}
              color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
            >
              BY DataCamp&nbsp;
              <Tag
                initial="init"
                animate="anim"
                exit="exit"
                variants={anims}
                colorScheme="pink"
                // fontFamily="Bebas Neue"
                fontSize={{ base: "xl", md: "3xl" }}
              >
                2021
              </Tag>
            </MotionText>
          </Flex>
          <MotionDivider
            display={{ base: "none", md: "block" }}
            initial={{ width: "0%" }}
            mb="1vh"
            animate={{ width: "40%", transition: { duration: 0.5 } }}
            exit={{ width: "0%", transition: { duration: 0.5 } }}
            bg="pink.500"
            h="2px"
          />
          <Flex
            justifyContent="left"
            flexDirection={{ base: "row", md: "row" }}
          >
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "2xl", md: "4xl" }}
            >
              BACHELORS&nbsp;
            </MotionText>
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "2xl", md: "4xl" }}
              color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
            >
              COMPUTER SCIENCE&nbsp;
              <Tag
                initial="init"
                animate="anim"
                exit="exit"
                variants={anims}
                colorScheme="pink"
                // fontFamily="Bebas Neue"
                fontSize={{ base: "xl", md: "3xl" }}
              >
                2019-2023
              </Tag>
            </MotionText>
          </Flex>
          <MotionText
            initial="init"
            animate="anim"
            exit="exit"
            variants={anims}
            fontFamily="Bebas Neue"
            color="pink"
            lineHeight="4vh"
            fontSize={{ base: "xl", md: "4xl" }}
          >
            INSTITUTE: National University Of Computer And Emerging Sciences
          </MotionText>
          <Box w="95%">
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              color={useColorModeValue(
                "rgba(0,0,0,0.8)",
                "rgba(250,250,250,0.5)"
              )}
              lineHeight="4vh"
              fontSize={{ base: "2xl", md: "4xl" }}
            >
              Relevant Coursework: OOP, Data Structures &amp; Algorithms,
              Operating Systems, Database Management Systems, Computer Networks,
              Software Design &amp; Analysis, Computer Oragnization &amp;
              Assembly Language, Theory Of Automata, Web Programming
            </MotionText>
          </Box>
          <MotionText
            initial="init"
            animate="anim"
            exit="exit"
            variants={anims}
            fontFamily="Bebas Neue"
            color="pink"
            lineHeight="5vh"
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            CGPA:3.42
          </MotionText>
        </Flex>
      </MotionBox>
      <Box
        left={0}
        bottom={{ base: "0", lg: "8px" }}
        w="100%"
        color={useColorModeValue("rgba(0,0,0,1)", "rgba(255,255,255,0.7)")}
        textAlign="center"
        mt="2vh"
        // position="fixed"
      >
        <Text fontWeight={100}>© 2022 Basit Saeed. All Rights Reserved.</Text>
      </Box>
    </Box>
  );
}
