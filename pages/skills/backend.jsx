import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import Tech from "../../components/Tech";
import { motion } from "framer-motion";
import Head from "next/head";
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionText = motion(Text);
const Backend = () => {
  return (
    <MotionBox>
      <Head>
        <title>Backend Skills</title>
        <link rel="icon" href="/logo.svg" type="image/icon type" />
      </Head>
      <Box
        zIndex="-1"
        overflow="hidden"
        position="absolute"
        pt="5rem"
        minHeight="95vh"
      >
        <Flex
          mt={{ base: "0", md: "10vh" }}
          flexDirection={{ base: "column", xl: "row-reverse" }}
        >
          <MotionFlex
            flex={1}
            flexDirection="column"
            justifyContent="center"
            flexWrap="wrap"
            initial={{ opacity: 0, x: 200 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, type: "spring", stiffness: 50 },
            }}
            exit={{
              opacity: 0,
              x: 200,
              transition: { duration: 0.3, type: "spring", stiffness: 50 },
            }}
          >
            <MotionText
              drag
              dragSnapToOrigin
              dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
              fontFamily="Bebas Neue, cursive"
              fontSize={{ base: "5rem", lg: "14vw" }}
              mr={{ base: "0", xl: "5vh" }}
              ml={{ base: "5vh", xl: "0" }}
              mt="5vh"
              fontWeight={800}
            >
              BACKEND
            </MotionText>
            <MotionText
              fontFamily="Bebas Neue, cursive"
              fontSize={{ base: "2rem", lg: "5vw" }}
              mr={{ base: "0", xl: "5vh" }}
              ml={{ base: "5vh", xl: "0" }}
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
            <Tech text="NodeJS" imgUrl="/node.png" />
            <Tech text="Express" imgUrl="/express.png" />
            <Tech text="MongoDB" imgUrl="/mongo.png" />
            <Tech text="Mongoose" imgUrl="/mongoose.jpg" />
            <Tech text="JSON Web Token" imgUrl="/jwt.png" />
          </MotionFlex>
        </Flex>
      </Box>
      <Box
        left={0}
        position="fixed"
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
export default Backend;
