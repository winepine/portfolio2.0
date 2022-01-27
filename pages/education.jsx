import { Box, Text, Flex, useColorModeValue, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionDivider = motion(Divider);
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
    <Box>
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
              No Prior Work&nbsp;
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
          <MotionDivider
            initial={{ width: "0%" }}
            animate={{ width: "90%", transition: { duration: 0.5 } }}
            exit={{ width: "0%", transition: { duration: 0.5 } }}
            bg="pink.500"
            h="1vh"
          />
          <Flex justifyContent="left" flexDirection="row">
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "4xl", md: "6xl" }}
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
              color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
            >
              _
            </MotionText>
          </Flex>
          <Flex
            mt="5vh"
            justifyContent="left"
            flexDirection={{ base: "column", md: "row" }}
          >
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "4xl", md: "4xl" }}
            >
              BS&nbsp;
            </MotionText>
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "4xl", md: "4xl" }}
              color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
            >
              COMPUTER SCIENCE
            </MotionText>
            <MotionText
              initial="init"
              animate="anim"
              exit="exit"
              variants={anims}
              fontFamily="Bebas Neue"
              fontSize={{ base: "4xl", md: "4xl" }}
            >
              &nbsp;[2019-2023]
            </MotionText>
          </Flex>
        </Flex>
      </MotionBox>
    </Box>
  );
}
