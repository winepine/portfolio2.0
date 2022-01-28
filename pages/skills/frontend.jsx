import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import Tech from "../../components/Tech";
import { motion } from "framer-motion";
import Head from "next/head";
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionText = motion(Text);
const Frontend = () => {
  return (
    <MotionBox>
      <Head>
        <title>Frontend Skills</title>
        <link rel="icon" href="/logo.svg" type="image/icon type" />
      </Head>
      <Box
        overflow="hidden"
        zIndex="-1"
        position="absolute"
        pt="5rem"
        minHeight="95vh"
      >
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
              transition: { duration: 0.4, type: "spring", stiffness: 50 },
            }}
            exit={{
              opacity: 0,
              x: -200,
              transition: { duration: 0.3, type: "spring", stiffness: 50 },
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
              color={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
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
        <Box
          left={0}
          bottom="8px"
          w="100%"
          color={useColorModeValue("rgba(0,0,0,1)", "rgba(255,255,255,0.7)")}
          textAlign="center"
          // position="fixed"
        >
          <Text fontWeight={100}>© 2022 Basit Saeed. All Rights Reserved.</Text>
        </Box>
      </Box>
    </MotionBox>
  );
};
export default Frontend;
