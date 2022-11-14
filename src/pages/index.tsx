import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import CardList from '../components/ui/CardList/CardList'
import LoadingSpinner from '../components/ui/LoadingSpinner/LoadingSpinner'
import { ScheduleType } from '../types/Schedule'

const fetchSchedules = async () => {
  const { data } = await axios.get('https://api.tvmaze.com/schedule')
  return data
}

const Home: NextPage = () => {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [schedules, setSchedules] = useState<ScheduleType[]>([])
  const { data, isLoading, isError, error, isFetching } = useQuery(['schedules', pageNumber], fetchSchedules)

  useEffect(() => {
    if (data?.length > 0) {
      setSchedules(data)
    }
  }, [data])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NEVERBLAND</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className="w-full bg-gray-200">
        <div className="max-w-screen-2xl mx-auto w-full px-4 py-10 pb-64">
          <h1 className="font-title text-lg font-black mb-6">TV Bland</h1>
          <p className="text-xl text-gray-600 mb-1">TV Show and web series database.</p>
          <p className="text-xl text-gray-600">
            Create personalised schedules. Episode quide, cast, crew and
            <br />
            character information.
          </p>
        </div>
      </article>
      <main className="relative max-w-screen-2xl mx-auto w-full px-4 py-10 pb-[33rem]">
        <div className="absolute -top-[10rem] left-4 right-4">
          {isError && error instanceof Error ? error.message : <CardList schedules={schedules} />}
        </div>
      </main>
    </div>
  )
}

export default Home
