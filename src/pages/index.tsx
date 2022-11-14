import type { NextPage } from 'next'
import Head from 'next/head'

import CardList from '../components/ui/CardList/CardList'
import apolloClient from '../config/ApolloClient'
import { GET_SHIPS } from '../graphql/Ship'
import { Ships } from '../types/Ship'

export async function getStaticProps() {
  const { data } = await apolloClient.query({
    query: GET_SHIPS,
  })

  return {
    props: {
      ships: data.ships,
    },
  }
}
const Home: NextPage<Ships> = ({ ships }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bird Buddy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-2xl mx-auto w-full px-6 py-10">
        <h1 className="font-title">Collections</h1>

        <CardList ships={ships} />
      </main>
    </div>
  )
}

export default Home
