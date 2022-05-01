import Head from 'next/head'
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { SidebarDrawerProvider } from '../contexts/sidebarDrawer'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>João Mello</title>
      </Head>
      
      <ChakraProvider>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
