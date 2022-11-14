import Rating from '@mui/material/Rating'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import CrewList from '../../components/ui/CrewList/CrewList'
import LoadingSpinner from '../../components/ui/LoadingSpinner/LoadingSpinner'
import { useShow } from '../../hooks/useShow'
import { ShowType } from '../../types/Show'

const ShipDetail: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, isError, error } = useShow({ id: id as string })
  const [show, setShow] = useState<ShowType>()

  useEffect(() => {
    if (data) {
      setShow(data.data)
    }
    if (show) {
      document.getElementById('summary')!.innerHTML = show.summary
    }
  }, [data, show])

  if (isLoading) return <LoadingSpinner />
  if (isError && error instanceof Error) {
    alert(error.message)
  }

  return (
    <div>
      <article className="w-full bg-gray-200">
        <div className="max-w-screen-2xl mx-auto w-full px-4 py-10 pb-28 flex flex-col">
          <h1 className="font-title text-lg font-black mb-6">TV Bland</h1>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="w-full flex justify-center sm:w-[30%] xl:relative">
              <img
                className="xl:absolute xl:w-[390px] xl:top-0 xl:left-0"
                src={show?.image?.original ?? '/images/no-image.png'}
                alt={show?.name}
              />
            </div>
            <div className="w-full mt-8 sm:mt-0 flex flex-col justify-center sm:w-[65%]">
              <div className="flex justify-start items-center">
                {show?.rating && (
                  <Rating
                    className="!flex !text-base md:!text-[1.25rem] !text-gray-600"
                    name="read-only"
                    value={show.rating.average}
                    readOnly
                  />
                )}
                <span className="font-bold ml-4 block">{show?.rating.average} / 5</span>
              </div>
              <h1 className="leading-[1.1] text-[24px] font-bold my-4 md:text-[42px] lg:text-[48px]">{show?.name}</h1>
              <div id="summary"></div>
            </div>
          </div>
        </div>
      </article>
      <main className="max-w-screen-2xl mx-auto w-full flex flex-col md:flex-row md:justify-between px-4 pt-32 xl:pt-72">
        <div className="mt-8 w-full md:w-[48%]">
          <h2 className="font-title text-[20px]">Show Info</h2>
          <ul className="flex flex-wrap md:flex-nowrap md:flex-col">
            <li className="md:h-[80px] md:items-center md:border-b-2 md:border-b-black md:flex md:py-4 mb-8 md:mb-2 w-[45%] md:w-[100%] mr-[5%] md:mr-0">
              <p className="font-bold mr-[5rem] min-w-[100px]">Streamed on</p>
              <p className="text-gray-600">{show?.network.name}</p>
            </li>
            <li className="md:h-[80px] md:items-center md:border-b-2 md:border-b-black md:flex md:py-4 mb-8 md:mb-2 w-[45%] md:w-[100%]">
              <p className="font-bold  mr-[5rem] min-w-[100px]">Schedule</p>
              <p className="text-gray-600 flex flex-wrap">
                {show?.schedule.days.map((day, index) => (
                  <span className='mr-1 after:content-[","] after:last-of-type:content-[""]' key={index}>
                    {day}
                  </span>
                ))}
              </p>
            </li>
            <li className="md:h-[80px] md:items-center md:border-b-2 md:border-b-black md:flex md:py-4 mb-8 md:mb-2 w-[45%] md:w-[100%] mr-[5%] md:mr-0">
              <p className="font-bold  mr-[5rem] min-w-[100px]">Status</p>
              <p className="text-gray-600">{show?.status}</p>
            </li>
            <li className="md:h-[80px] md:items-center md:border-b-2 md:border-b-black md:flex md:py-4 mb-8 md:mb-2 w-[45%] md:w-[100%]">
              <p className="font-bold  mr-[5rem] min-w-[100px]">Genres</p>
              <p className="text-gray-600">
                {show?.genres.map((g, index) => (
                  <span className='mr-1 after:content-[","] after:last-of-type:content-[""]' key={index}>
                    {g}
                  </span>
                ))}
              </p>
            </li>
          </ul>
        </div>
        {show && <CrewList {...show} />}
      </main>
    </div>
  )
}

export default ShipDetail
