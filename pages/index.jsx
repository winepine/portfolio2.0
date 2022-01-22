import {
  Text,
  Button,
  Flex,
  Box,
  keyframes,
  usePrefersReducedMotion,
  useColorModeValue,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Head from "next/head";
import { motion } from "framer-motion";
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const Home = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => {
      if (active === 0) {
        setActive(1);
      } else if (active === 1) {
        setActive(2);
      } else if (active === 2) {
        setActive(0);
      }
    }, 4500);

    return () => clearTimeout(id);
  }, [active]);

  useEffect(() => {
    setActive(2);
  }, []);
  const { x } = useSpring({ config: { duration: 3500 }, x: active });
  // const animationProps = useSpring({
  //     anim1:p1[activeIndex]
  // })
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <Box overflow="hidden" minH="100vh">
        <Head>
          <title>Basit Saeed</title>
          <link rel="icon" href="/logo.svg" type="image/icon type" />
        </Head>
        <Box
          position="absolute"
          zIndex="-1"
          mt={{ base: "0", lg: "20vh" }}
          ml={{ base: "20%", lg: "35vw" }}
          display={{ base: "block  ", lg: "block" }}
        >
          <motion.div
            // initial={{ opacity: 0, y: 50, rotateX: 130 }}
            style={{ zIndex: "- 1" }}
            animate={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { delay: 0.5, duration: 1 },
            }}
          >
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="60vw"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
            >
              <g transform="translate(484.2636526841101 334.18650624138996)">
                <animated.path
                  d={x.to({
                    range: [0, 2],
                    output: [
                      "M119.2 -215.7C149.3 -189 165.2 -146.7 192.1 -108.2C219 -69.7 257 -34.8 238.2 -10.8C219.5 13.2 143.9 26.3 101 37.2C58.1 48 47.8 56.5 36.4 99.9C25 143.3 12.5 221.7 -17.8 252.5C-48.2 283.4 -96.3 266.9 -126.1 234C-155.8 201.2 -167.1 152.1 -189.7 110.4C-212.3 68.7 -246.1 34.3 -233.7 7.2C-221.3 -20 -162.6 -40 -134.7 -72.5C-106.8 -105 -109.6 -149.9 -92.3 -184.1C-75 -218.2 -37.5 -241.6 3.5 -247.7C44.5 -253.7 89 -242.5 119.2 -215.7",
                      "M109.8 -222.3C125.2 -181.2 108.9 -117.4 130.2 -76.5C151.4 -35.7 210.2 -17.8 218 4.5C225.8 26.8 182.6 53.7 158.4 89.3C134.1 125 128.8 169.4 105.6 168.5C82.3 167.6 41.2 121.3 -1 123C-43.2 124.8 -86.3 174.5 -101.3 170.7C-116.4 166.9 -103.2 109.4 -120.6 72.1C-138 34.7 -186 17.3 -212.9 -15.5C-239.7 -48.3 -245.4 -96.7 -218.8 -118.2C-192.3 -139.7 -133.4 -134.4 -91.5 -160.2C-49.7 -186 -24.8 -243 11.2 -262.4C47.2 -281.7 94.3 -263.4 109.8 -222.3",
                      "M116.3 -207.8C132.6 -192 115.2 -124.3 108.9 -81C102.6 -37.7 107.3 -18.8 114.8 4.3C122.3 27.5 132.6 55 135.3 92.1C138.1 129.2 133.3 175.9 109.5 174.8C85.7 173.7 42.8 124.9 0.2 124.6C-42.5 124.3 -85 172.6 -106.9 172.6C-128.9 172.6 -130.3 124.3 -133 87.5C-135.8 50.7 -139.9 25.3 -128.8 6.4C-117.7 -12.5 -91.3 -25 -75.2 -38.7C-59.1 -52.4 -53.3 -67.3 -42.5 -86.3C-31.7 -105.2 -15.8 -128.1 17.1 -157.7C50 -187.3 100 -223.5 116.3 -207.8",
                    ],
                  })}
                  fill="#E91E63"
                />
              </g>
            </svg>
          </motion.div>
        </Box>

        <Box minH="100vh">
          <Text
            textShadow={useColorModeValue(0, "2px 2px #000000")}
            fontSize={{ base: "5xl", lg: "8xl" }}
            textAlign={{ base: "center", lg: "left" }}
            pt={{ base: "25rem", lg: "18rem" }}
            ml={{ base: "0", lg: "12vw" }}
            fontFamily="Poppins"
            fontWeight="800"
          >
            BASIT SAEED
          </Text>
          {/* This TEXT Comp below is causing <div> inside <p> error */}
          <Text
            textShadow={{ base: "0", md: "1px 1px #000000" }}
            fontSize={{ base: "xl", lg: "5xl" }}
            textAlign={{ base: "center", lg: "left" }}
            ml={{ base: "0", lg: "12vw" }}
            fontFamily="Poppins"
            fontWeight="500"
          >
            <Typewriter
              options={{
                delay: "50",
                deleteSpeed: "30",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("I'm A Computer Scientist")
                  .pauseFor(1000)
                  .deleteChars(18)
                  .typeString("Software Developer")
                  .pauseFor(1000)
                  .deleteChars(18)
                  .typeString("Full Stack Developer")
                  .start();
              }}
            />
          </Text>
          <Flex direction={{ base: "column", lg: "row" }}>
            <Button
              _hover={{ color: "pink.400", bg: "gray.700" }}
              bg={useColorModeValue("rgba(233,30,99,0.8)", "pink.500")}
              ml={{ base: "4vw", lg: "12vw" }}
              w={{ base: "90vw", lg: "18vw" }}
              mt="2vh"
            >
              Learn More About Skills
            </Button>
            <Button
              bg={{
                base: "rgba(110,110,110,0.6)",
                lg: "rgba(110,110,110,0.2)",
              }}
              ml={{ base: "4vw", lg: "1vw" }}
              w={{ base: "90vw", lg: "15vw" }}
              mt="2vh"
            >
              Contact Me
            </Button>
          </Flex>
        </Box>
      </Box>
    </motion.div>
  );
};
export default Home;
