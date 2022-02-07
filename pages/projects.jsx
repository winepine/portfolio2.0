import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Image,
  UnorderedList,
  ListItem,
  Button,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Head from "next/head";
const MotionText = motion(Text);
const MotionImage = motion(Image);
const MotionFlex = motion(Flex);
const MotionDivider = motion(Divider);
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
        <MotionDivider
          initial={{ width: "0%" }}
          animate={{ width: "90%", transition: { duration: 0.5 } }}
          exit={{ width: "0%", transition: { duration: 0.5 } }}
          bg="pink.500"
          h="2px"
        />
        <MotionText
          initial="init"
          animate="anim"
          exit="exit"
          w="70vw"
          variants={anims}
          textAlign="center"
          color="pink.700"
          fontSize={{ base: "xl", md: "5xl" }}
          fontFamily="Bebas Neue"
          fontWeight={500}
        >
          Since then, I&lsquo;ve Developed a few Applications For Different
          Platforms And Learnt a lot along the way. Scroll To View Some of
          them...
        </MotionText>
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
          mt="10vh"
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
        minHeight="70vh"
        overflow="hidden"
        flexDirection={{ base: "column-reverse", md: "row" }}
        alignItems="center"
        justifyContent="space-around"
      >
        <MotionFlex
          flexDirection="column"
          viewport={{ once: true }}
          alignItems="center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          <Flex>
            <Text
              fontFamily="Bebas Neue"
              fontWeight={700}
              fontSize={{ base: "4xl", md: "8xl" }}
            >
              XAXIS
            </Text>
            <Text
              fontFamily="Bebas Neue"
              fontWeight={700}
              fontSize={{ base: "4xl", md: "8xl" }}
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
            fontSize={{ base: "2xl", md: "4xl" }}
            // color="pink.500"
          >
            C/Bash
          </Text>
          <UnorderedList w={{ base: "90vw", md: "45vw" }} fontFamily="Poppins">
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
            <a
              href="https://github.com/winepine/Xaxis-An-OS-Simulation"
              target="_blank"
              rel="noreferrer"
            >
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
            </a>
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
          src="/xaxis.png"
          alt="project img"
          // borderRadius="4%"
          opacity="0.9"
          objectFit="contain"
          w={{ base: "90vw", md: "30vw" }}
          height={{ base: "9%" }}
        />
      </Flex>
      {
        //----
      }
      <Flex
        minHeight="70vh"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
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
            src="/fyweb3.jpg"
            alt="project img"
            whileHover={{ scale: 1.3, zIndex: 2, opacity: 1 }}
            borderRadius="1%"
            opacity="0.9"
            objectFit="contain"
            w={{ base: "90vw", md: "30vw" }}
          />
          <Flex justifyContent="space-between">
            <MotionImage
              src="/fyweb.png"
              alt="project img"
              whileHover={{ scale: 1.3, zIndex: 2, opacity: 1 }}
              borderRadius="1%"
              opacity="0.9"
              objectFit="contain"
              mt="1vh"
              w={{ base: "20vw" }}
              display={{ base: "none", md: "block" }}
            />
            <MotionImage
              src="/fyweb2.png"
              alt="project img"
              whileHover={{ scale: 1.3, opacity: 1 }}
              borderRadius="1%"
              opacity="0.9"
              display={{ base: "none", md: "block" }}
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
          alignItems={{ base: "center", md: "left" }}
          flexDirection="column"
        >
          <Flex>
            <Text
              fontFamily="Bebas Neue"
              fontWeight={700}
              fontSize={{ base: "4xl", md: "8xl" }}
            >
              {" "}
              FYWEB
            </Text>
            <Text
              fontFamily="Bebas Neue"
              fontWeight={700}
              fontSize={{ base: "4xl", md: "8xl" }}
              color="pink.500"
            >
              {" "}
              &nbsp;Ecommerce Store
            </Text>
          </Flex>
          <Text color="pink.500" fontFamily="Poppins">
            Group Project
          </Text>
          <Text
            fontFamily="Bebas Neue"
            fontWeight={500}
            fontSize={{ base: "2xl", md: "4xl" }}
            // color="pink.500"
          >
            {" "}
            Express/MongoDB/React
          </Text>
          <UnorderedList w={{ base: "85vw", md: "40vw" }} fontFamily="Poppins">
            <ListItem>
              Built The Frontend Of Application Using ReactJS and MaterailUI.
              Added Smooth Transitions using React Spring.
            </ListItem>
            <ListItem>
              Used React Context Hooks For Application State Management.
            </ListItem>
            <ListItem>
              Concepts Used: React Hooks, Axios, API Requests (GET, POST,
              DELETE)
            </ListItem>
          </UnorderedList>
          <Flex mt="5vh">
            <a
              href="https://github.com/winepine/ecommercefrontend"
              target="_blank"
              rel="noreferrer"
            >
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
            </a>
          </Flex>
        </MotionFlex>
      </Flex>

      {
        //----
      }
      <Flex
        minHeight="80vh"
        overflow="hidden"
        justifyContent="space-around"
        flexDirection={{ base: "column-reverse", md: "row" }}
        flexWrap="wrap"
        alignItems="center"
      >
        <MotionFlex
          viewport={{ once: true }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          flexDirection="column"
          alignItems="center"
        >
          <Flex>
            <Text
              fontFamily="Bebas Neue"
              fontWeight={700}
              fontSize={{ base: "4xl", md: "8xl" }}
            >
              {" "}
              Sorting Algo
            </Text>
            <Text
              fontFamily="Bebas Neue"
              fontWeight={700}
              fontSize={{ base: "4xl", md: "8xl" }}
              color="pink.500"
            >
              {" "}
              &nbsp;Visualizer
            </Text>
          </Flex>
          <Text
            fontFamily="Bebas Neue"
            fontWeight={500}
            fontSize={{ base: "2xl", md: "4xl" }}
            // color="pink.500"
          >
            {" "}
            ReactJS
          </Text>
          <UnorderedList w={{ base: "90vw", md: "40vw" }} fontFamily="Poppins">
            <ListItem>
              Developed logic for visualization of sorting algorithms in React
              by using async functions and promises.
            </ListItem>
            <ListItem>
              Designed UI in a such a way that transitions feel smooth and give
              project a modern look and feel compared to other online
              visualization tools.
            </ListItem>
            <ListItem>Concepts Used: Classes, Async Await, Promises</ListItem>
          </UnorderedList>
          <Flex mt="5vh">
            <a
              href="https://github.com/winepine/sortingvisualizer"
              target="_blank"
              rel="noreferrer"
            >
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
            </a>
            <a
              href="https://winepine.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button bg="pink.500" ml="10px">
                View Live Demo
              </Button>
            </a>
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
          src="/sorting.png"
          alt="project img"
          whileHover={{ scale: 1.3 }}
          border="1px pink solid"
          borderRadius="1%"
          opacity="0.9"
          objectFit="contain"
          w={{ base: "90vw", md: "30vw" }}
          height={{ base: "9%" }}
        />
      </Flex>
      {
        //----
      }
      <Flex
        minHeight="80vh"
        overflow="hidden"
        justifyContent="space-around"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <MotionImage
          viewport={{ once: true }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          src="/hang.jpeg"
          alt="project img"
          borderRadius="1%"
          whileHover={{ scale: 1.3 }}
          opacity="0.9"
          objectFit="contain"
          w={{ base: "90vw", md: "30vw" }}
          height={{ base: "9%" }}
        />
        <MotionFlex
          viewport={{ once: true }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          flexDirection="column"
          alignItems="center"
        >
          <Flex>
            <Text
              fontFamily="Bebas Neue"
              fontWeight={700}
              fontSize={{ base: "4xl", md: "8xl" }}
            >
              HANGMAN
            </Text>
          </Flex>
          <Text
            fontFamily="Bebas Neue"
            fontWeight={500}
            fontSize={{ base: "2xl", md: "4xl" }}
            // color="pink.500"
          >
            {" "}
            Bash Script/GTK
          </Text>
          <UnorderedList w={{ base: "90vw", md: "35vw" }} fontFamily="Poppins">
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
            <a
              href="https://github.com/winepine/Hangman-In-Shell"
              target="_blank"
              rel="noreferrer"
            >
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
            </a>
          </Flex>
        </MotionFlex>
      </Flex>
      <Flex
        mt={{ base: "5vh" }}
        h="12vh"
        alignItems="center"
        flexDirection="column"
      >
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
// PNG != png
