import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../chakra/theme'
// import Layout from '../components/Layout/Layout'
export default function App({ Component, pageProps }: AppProps) {
  return (

    <ChakraProvider theme={theme}>

      <Component {...pageProps} />

    </ChakraProvider>
  )
}
