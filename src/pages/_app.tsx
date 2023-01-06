import Head from 'next/head'
import type { AppProps } from 'next/app'

import { appWithTranslation } from 'next-i18next';
import { AllContextsProvider } from '../contexts'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>João Mello</title>
      </Head>
      
      <AllContextsProvider>
        <Component {...pageProps} />
      </AllContextsProvider>
    </>
  )
}

export default appWithTranslation(MyApp);
