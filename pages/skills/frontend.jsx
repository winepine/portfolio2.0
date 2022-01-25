import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import Tech from "../../components/Tech";
import { motion } from "framer-motion";
const MotioxFlex = motion(Flex);
const MotioxBox = motion(Box);
const MotioxText = motion(Text);
const Frontend = () => {
  return (
    <MotioxBox
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1 },
      }}
      exit={{ opacity: 0 }}
    >
      <Box pt="5rem" minHeight="95vh">
        <Flex
          mt={{ base: "0", md: "10vh" }}
          flexDirection={{ base: "column", xl: "row" }}
        >
          <MotioxFlex
            flex={13}
            flexDirection="column"
            justifyContent="center"
            flexWrap="wrap"
          >
            <MotioxText
              fontFamily="Bebas Neue, cursive"
              fontSize={{ base: "5rem", lg: "14vw" }}
              ml="5vh"
              mt="5vh"
              fontWeight={800}
            >
              FRONTEND
            </MotioxText>
            <Text
              fontFamily="Bebas Neue, cursive"
              fontSize={{ base: "2rem", lg: "5vw" }}
              ml="5vh"
              transform="translateY(-6vw)"
              fontWeight={400}
            >
              Technologies
            </Text>
          </MotioxFlex>
          <Flex flex={1}></Flex>
          <Flex flex={17} justifyContent="center" flexWrap="wrap">
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
          </Flex>
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
    </MotioxBox>
  );
};
export default Frontend;
