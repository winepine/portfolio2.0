import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import theme from '../components/theme'
import Nav from "../components/Nav/Nav"
function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;800&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
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