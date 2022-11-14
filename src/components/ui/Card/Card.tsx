import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

import { ShipType } from '../../../types/Ship'

const Card: NextPage<ShipType> = ({ id, image, name, type }) => {
  return (
    <Link
      className="cursor-pointer"
      href={{
        pathname: `/${id}`,
        query: {
          name,
          image,
          type,
        },
      }}
      as={`/${id}`}
    >
      <a>
        <div className="h-[325px] flex flex-col rounded-lg shadow-md">
          <div className="relative h-full">
            <Image
              className="rounded-t-lg object-cover"
              src={image ?? '/images/no-image.png'}
              alt={name}
              layout="fill"
            />
          </div>
          <div className="flex flex-row justify-between items-center p-5">
            <div className="flex-1">
              <h2 className="font-list-title text-black">{name}</h2>
              <p className="font-list-subtitle text-blue-3 opacity-50">{type}</p>
            </div>
            <div className="bg-blue-1 rounded-full p-2 shadow-xs cursor-pointer">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
