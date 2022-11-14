import { useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FaArrowLeft } from 'react-icons/fa'

import CardDetail from '../../components/ui/CardDetail/CardDetail'
import LoadingSpinner from '../../components/ui/LoadingSpinner/LoadingSpinner'
import { GET_SHIP_BY_ID } from '../../graphql/Ship'

const ShipDetail: NextPage = () => {
  const router = useRouter()
  const { id, name, image, type } = router.query

  const { error, data, loading } = useQuery(GET_SHIP_BY_ID, {
    variables: { id: id },
  })

  if (error) return <div>Error found</div>

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {loading && <LoadingSpinner />}
      <main className="w-full">
        <CardDetail
          id={id ?? data?.ship.id}
          image={image ?? data?.ship.image}
          name={name ?? data?.ship.name}
          type={type ?? data?.ship.type}
        />
        <div className="max-w-screen-2xl mx-auto w-full">
          <div className="mb-36 px-4">
            <div className="flex flex-row justify-start items-center">
              <div className="info-mission flex-row items-center mx-auto">
                <h2 className="font-playful">Basic info</h2>
                <div className="relative w-7 h-7 -mb-[14px] ml-[10px]">
                  <Image src="/images/arrow.svg" layout="fill" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="info-card">
                <h3 className="font-playful">Year built</h3>
                <p className="font-list-title">{data?.ship.year_built ?? '/'}</p>
              </div>
              <div className="info-card">
                <h3 className="font-playful">Weight</h3>
                <p className="font-list-title">{data?.ship.weight_kg ?? '/'}</p>
              </div>
              <div className="info-card">
                <h3 className="font-playful">Class</h3>
                <p className="font-list-title">{data?.ship.class ?? '/'}</p>
              </div>
              <div className="info-card">
                <h3 className="font-playful">Home port</h3>
                <p className="font-list-title">{data?.ship.home_port ?? '/'}</p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center">
              <div className="info-mission flex-row items-center mx-auto mb-7 mt-10">
                <h2 className="font-playful">Missions</h2>
                <div className="relative w-7 h-7 -mb-[14px] ml-[10px]">
                  <Image src="/images/arrow.svg" layout="fill" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center">
              {data?.ship.missions.map((mission: { flight: string; name: string }, index: number) => (
                <div key={index} className="info-mission">
                  <h3 className="font-list-title">{mission.name ?? '/'}</h3>
                  <p className="font-list-subtitle">Flight: {mission.flight ?? '/'}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-start items-center px-4">
            <div className="info-mission flex-row items-center mx-auto cursor-pointer" onClick={() => router.push('/')}>
              <div className="bg-blue-1 rounded-full p-2 shadow-xs cursor-pointer">
                <FaArrowLeft />
              </div>
              <p className="font-playful ml-[10px]">Back to the list</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ShipDetail
