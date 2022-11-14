import '../styles/globals.css'

import ProgressBar from '@badrap/bar-of-progress'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { QueryClient, QueryClientProvider } from 'react-query'

const progress = new ProgressBar({
  size: 4,
  color: '#233869',
  className: 'z-50',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
