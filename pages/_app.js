import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../components/theme";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import "../styles/globals.css";
function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
