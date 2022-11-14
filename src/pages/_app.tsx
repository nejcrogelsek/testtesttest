import '../styles/globals.css'

import { ApolloProvider } from '@apollo/client'
import ProgressBar from '@badrap/bar-of-progress'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'

import apolloClient from '../config/ApolloClient'

const progress = new ProgressBar({
  size: 4,
  color: '#233869',
  className: 'z-50',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
