import Avatar from '@mui/material/Avatar'
import axios from 'axios'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { CastType } from '../../../types/Cast'
import { ShowType } from '../../../types/Show'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const fetchCrew = (id: string) => {
  console.log('IDDDDDDDDDDDDDDDDD:', id)
  return axios.get(`https://api.tvmaze.com/shows/${id}/cast`)
}
const CrewList: NextPage<ShowType> = (show) => {
  const { data, isLoading, isError, error } = useQuery(['crew', show.id], () => fetchCrew(show.id))
  const [crew, setCrew] = useState<CastType[]>([])

  useEffect(() => {
    if (data) {
      setCrew(data.data)
    }
  }, [data])

  if (isLoading) return <LoadingSpinner />
  if (isError && error instanceof Error) {
    alert(error.message)
  }

  return (
    <div className="mt-8 mb-8 w-full md:w-[48%]">
      <h2 className="font-title text-[20px]">Starring</h2>
      <ul className="flex flex-col">
        {crew.slice(0,4).map((c, index) => (
          <li
            key={index}
            className="md:h-[80px] md:border-b-2 md:border-b-black md:flex md:py-2 mb-2 w-[100%] flex justify-start items-center"
          >
            <Avatar className="!w-[62px] !h-[62px]" />
            <div className="ml-2 md:flex">
              <p className="font-bold text-sm min-w-[200px]">{c.person.name}</p>
              <p className="text-gray-600 text-sm md:ml-4">{c.character.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CrewList
