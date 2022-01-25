import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import Tech from "../../components/Tech";
import { motion } from "framer-motion";
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionText = motion(Text);
const container = {
  init: {
    opacity: 0,
  },
  anim: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const childanims = {
  init: {
    opacity: 0,
  },
  anim: {
    opacity: 1,
  },
};
const Frontend = () => {
  return (
    <MotionBox overflow="hidden">
      <Box pt="5rem" minHeight="95vh">
        <Flex
          mt={{ base: "0", md: "10vh" }}
          flexDirection={{ base: "column", xl: "row" }}
        >
          <MotionFlex
            flex={1}
            flexDirection="column"
            justifyContent="center"
            flexWrap="wrap"
            initial={{ opacity: 0, x: -200 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, type: "spring", stiffness: 50 },
            }}
            exit={{
              opacity: 0,
              x: -200,
              transition: { duration: 0.5, type: "spring", stiffness: 50 },
            }}
          >
            <MotionText
              drag
              dragSnapToOrigin
              dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
              fontFamily="Bebas Neue, cursive"
              fontSize={{ base: "5rem", lg: "14vw" }}
              ml="5vh"
              mt="5vh"
              fontWeight={800}
            >
              FRONTEND
            </MotionText>
            <MotionText
              fontFamily="Bebas Neue, cursive"
              fontSize={{ base: "2rem", lg: "5vw" }}
              ml="5vh"
              transform="translateY(-6vw)"
              fontWeight={400}
            >
              Technologies
            </MotionText>
          </MotionFlex>
          <Flex flex={1}></Flex>
          <MotionFlex
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                duration: 0.5,
                type: "spring",
                stiffness: 50,
              },
            }}
            exit={{
              opacity: 0,
              y: 100,
              transition: {
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                stiffness: 50,
              },
            }}
            flex={17}
            justifyContent="center"
            flexWrap="wrap"
          >
            <Tech text="HTML" imgUrl="/html.png" />
            <Tech text="CSS" imgUrl="/css.png" />
            <Tech text="JavaScript" imgUrl="/js.png" />
            <Tech text="ReactJS" imgUrl="/react.png" />
            <Tech text="Chakra UI" imgUrl="/chakra.png" />
            <Tech text="Redux" imgUrl="/Redux-01.svg" />
            <Tech text="NextJS" imgUrl="/next2js - Copy.png" />
            <Tech text="Framer motion" imgUrl="/framer.svg" />
            <Tech text="React Router" imgUrl="/router.jpg" />
            <Tech text="React Spring" imgUrl="/spring.png" />
          </MotionFlex>
        </Flex>
      </Box>
      <Box
        left={0}
        bottom="8px"
        w="100%"
        color={useColorModeValue("rgba(0,0,0,1)", "rgba(255,255,255,0.7)")}
        textAlign="center"
      >
        <Text fontWeight={100}>© 2022 Basit Saeed. All Rights Reserved.</Text>
      </Box>
    </MotionBox>
  );
};
export default Frontend;
