import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Image,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Head from "next/head";
const MotionText = motion(Text);
const MotionImage = motion(Image);
const MotionFlex = motion(Flex);
const anims = {
  init: { opacity: 0 },
  anim: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};
export default function Projects() {
  const top = useRef();
  return (
    <Box ref={top} className="container" position="relative">
      <Head>
        <title>My Work</title>
        <link rel="icon" href="/logo.svg" type="image/icon type" />
      </Head>
      <Flex
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
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 2,
              duration: 1,
              yoyo: Infinity,
            },
          }}
          flexDirection="column"
          alignItems="center"
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
        minHeight="80vh"
        pt="20vh"
        overflow="hidden"
        justifyContent="space-around"
      >
        <MotionFlex
          viewport={{ once: true }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          flexDirection="column"
        >
          <Flex>
            <Text fontFamily="Bebas Neue" fontWeight={700} fontSize="8xl">
              {" "}
              XAXIS
            </Text>
            <Text
              fontFamily="Bebas Neue"
              fontWeight={700}
              fontSize="8xl"
              color="pink.500"
            >
              {" "}
              &nbsp;OS Simulation
            </Text>
          </Flex>
          <Text color="pink.500" fontFamily="Poppins">
            Group Project
          </Text>
          <Text
            fontFamily="Bebas Neue"
            fontWeight={500}
            fontSize="4xl"
            // color="pink.500"
          >
            C/Bash
          </Text>
          <UnorderedList fontFamily="Poppins">
            <ListItem>
              Developed the entire backend for this project for ram and cores
              utilization using Linux commands.
            </ListItem>
            <ListItem>
              Used CPU scheduling algorithms for process scheduling and forks
              and threads for process creation
            </ListItem>
            <ListItem>
              Concepts Used: CPU Scheduling, threads, mutexes, semaphores,
              process creation, asynchronous threads
            </ListItem>
          </UnorderedList>
          <Flex mt="5vh">
            <Button>
              View On Github &nbsp;&nbsp;
              <svg
                height="32"
                opacity="0.7"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                data-view-component="true"
                className="octicon octicon-mark-github v-align-middle"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </Button>
          </Flex>
        </MotionFlex>
        <MotionImage
          viewport={{ once: true }}
          whileHover={{ scale: 1.3 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          src="/projects/xaxis.png"
          alt="project img"
          // borderRadius="4%"
          opacity="0.9"
          objectFit="contain"
          w={{ base: "30vw" }}
          height={{ base: "9%" }}
        />
      </Flex>
      {
        //----
      }
      <Flex
        minHeight="100vh"
        pt="20vh"
        overflow="hidden"
        justifyContent="space-around"
      >
        <MotionFlex
          viewport={{ once: true }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          flexDirection="column"
        >
          <MotionImage
            src="/projects/fyweb3.jpg"
            alt="project img"
            whileHover={{ scale: 1.3, zIndex: 2, opacity: 1 }}
            borderRadius="1%"
            opacity="0.9"
            objectFit="contain"
            w={{ base: "30vw" }}
            // height={{ base: "9%" }}
          />
          <Flex justifyContent="space-between">
            <MotionImage
              src="/projects/fyweb.png"
              alt="project img"
              whileHover={{ scale: 1.3, zIndex: 2, opacity: 1 }}
              borderRadius="1%"
              opacity="0.9"
              objectFit="contain"
              mt="1vh"
              w={{ base: "20vw" }}
              // height={{ base: "9%" }}
            />
            <MotionImage
              src="/projects/fyweb2.png"
              alt="project img"
              whileHover={{ scale: 1.3, opacity: 1 }}
              borderRadius="1%"
              opacity="0.9"
              objectFit="contain"
              mt="1vh"
              ml="1vw"
              w={{ base: "20vw" }}
              // height={{ base: "9%" }}
            />
          </Flex>
        </MotionFlex>
        <MotionFlex
          viewport={{ once: true }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          flexDirection="column"
        >
          <Flex>
            <Text fontFamily="Bebas Neue" fontWeight={700} fontSize="8xl">
              {" "}
              FYWEB
            </Text>
            <Text
              fontFamily="Bebas Neue"
              fontWeight={700}
              fontSize="8xl"
              color="pink.500"
            >
              {" "}
              &nbsp;Ecommerce Store
            </Text>
          </Flex>
          <Text
            fontFamily="Bebas Neue"
            fontWeight={500}
            fontSize="4xl"
            // color="pink.500"
          >
            {" "}
            Express/MongoDB/React
          </Text>
          <UnorderedList fontFamily="Poppins">
            <ListItem>
              Developed logic for visualization of sorting algorithms in React
              by using async functions and promises.
            </ListItem>
            <ListItem>
              Designed UI in a such a way that transitions feel smooth and gave
              project a modern look and feel.
            </ListItem>
            <ListItem>Concepts Used: Classes, Async Await, Promises</ListItem>
          </UnorderedList>
          <Flex mt="5vh">
            <Button>
              View On Github &nbsp;&nbsp;
              <svg
                height="32"
                opacity="0.7"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                data-view-component="true"
                className="octicon octicon-mark-github v-align-middle"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </Button>
          </Flex>
        </MotionFlex>
      </Flex>

      {
        //----
      }
      <Flex
        minHeight="90vh"
        pt="20vh"
        overflow="hidden"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        <MotionFlex
          viewport={{ once: true }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          flexDirection="column"
        >
          <Flex>
            <Text fontFamily="Bebas Neue" fontWeight={700} fontSize="8xl">
              {" "}
              Sorting Algo
            </Text>
            <Text
              fontFamily="Bebas Neue"
              fontWeight={700}
              fontSize="8xl"
              color="pink.500"
            >
              {" "}
              &nbsp;Visualizer
            </Text>
          </Flex>
          <Text
            fontFamily="Bebas Neue"
            fontWeight={500}
            fontSize="4xl"
            // color="pink.500"
          >
            {" "}
            ReactJS
          </Text>
          <UnorderedList fontFamily="Poppins">
            <ListItem>
              Developed logic for visualization of sorting algorithms in React
              by using async functions and promises.
            </ListItem>
            <ListItem>
              Designed UI in a such a way that transitions feel smooth and give
              project a modern look and feel
              <br /> compared to other online visualization tools.
            </ListItem>
            <ListItem>Concepts Used: Classes, Async Await, Promises</ListItem>
          </UnorderedList>
          <Flex mt="5vh">
            <Button>
              View On Github &nbsp;&nbsp;
              <svg
                height="32"
                opacity="0.7"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                data-view-component="true"
                className="octicon octicon-mark-github v-align-middle"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </Button>
            <Button bg="pink.500" ml="10px">
              View Live Demo
            </Button>
          </Flex>
        </MotionFlex>
        <MotionImage
          viewport={{ once: true }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          src="/projects/sorting.png"
          alt="project img"
          whileHover={{ scale: 1.3 }}
          border="1px pink solid"
          borderRadius="1%"
          opacity="0.9"
          objectFit="contain"
          w={{ base: "30vw" }}
          height={{ base: "9%" }}
        />
      </Flex>
      {
        //----
      }
      <Flex
        minHeight="90vh"
        pt="20vh"
        overflow="hidden"
        justifyContent="space-around"
      >
        <MotionImage
          viewport={{ once: true }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          src="/projects/hang.jpeg"
          alt="project img"
          borderRadius="1%"
          whileHover={{ scale: 1.3 }}
          opacity="0.9"
          objectFit="contain"
          w={{ base: "30vw" }}
          height={{ base: "9%" }}
        />
        <MotionFlex
          viewport={{ once: true }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          flexDirection="column"
        >
          <Flex>
            <Text fontFamily="Bebas Neue" fontWeight={700} fontSize="8xl">
              {" "}
              HANGMAN
            </Text>
          </Flex>
          <Text
            fontFamily="Bebas Neue"
            fontWeight={500}
            fontSize="4xl"
            // color="pink.500"
          >
            {" "}
            Bash Script/GTK
          </Text>
          <UnorderedList fontFamily="Poppins">
            <ListItem>
              Developed entire frontend from start to finish using a bash
              library called GTKDialog.
            </ListItem>
            <ListItem>
              Developed a logic to save project state on runtime using Linux
              files since GTK is stateless.
            </ListItem>
            <ListItem>
              Concepts Used: Linux File System, Shell Scripting, Terminal.
            </ListItem>
          </UnorderedList>
          <Flex mt="5vh">
            <Button>
              View On Github &nbsp;&nbsp;
              <svg
                height="32"
                opacity="0.7"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                data-view-component="true"
                className="octicon octicon-mark-github v-align-middle"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </Button>
          </Flex>
        </MotionFlex>
      </Flex>
      <Flex h="12vh" alignItems="center" flexDirection="column">
        <MotionImage
          onClick={() =>
            top.current.scrollIntoView({
              behavior: "smooth",
            })
          }
          whileInView={{ rotate: 180, transition: { duration: 0.5 } }}
          src="/icons8-down-50.png"
          h={10}
          w={8}
          opacity="0.8"
          alt="Scroll-Icon"
        />
        <Text fontFamily="Poppins" fontWeight={200}>
          Click To Scroll To Top
        </Text>
      </Flex>
      <Box
        left={0}
        mb={{ base: "0", lg: "1vh" }}
        w="100%"
        color={useColorModeValue("rgba(0,0,0,1)", "rgba(255,255,255,0.7)")}
        textAlign="center"
      >
        <Text fontWeight={100}>© 2022 Basit Saeed. All Rights Reserved.</Text>
      </Box>
    </Box>
  );
}
