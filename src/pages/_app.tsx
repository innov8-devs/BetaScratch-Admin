import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/global/Layout'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apollo-client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
