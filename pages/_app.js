import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../components/theme";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/Nav/Nav";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@500;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Nav /> */}
      {/* <AnimatePresence>
        <motion.div
          key={router.route}
          initial="init"
          animate="pageanimate"
          exit="pageout"
          variants={{
            init: { opacity: 0, y: 100 },
            pageanimate: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.8 },
            },
            pageout: {
              opacity: 0,
              y: 100,
            },
          }}
        >
        </motion.div>
      </AnimatePresence> */}
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
/**
 * 
 * import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
 */
