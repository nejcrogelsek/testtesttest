import Rating from '@mui/material/Rating'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ScheduleType } from '../../../types/Schedule'

const Card: NextPage<ScheduleType> = ({ id, name, show }) => {
  return (
    <Link
      className="cursor-pointer"
      href={{
        pathname: `/${show.id}`,
      }}
      as={`/${show.id}`}
    >
      <a>
        <div className="h-[325px] flex flex-col rounded-lg shadow-md">
          <div className="relative h-full">
            <Image
              className="rounded-t-lg object-cover"
              src={show.image.medium ?? '/images/no-image.png'}
              alt={name}
              layout="fill"
            />
          </div>
          <div className="flex flex-row justify-between items-center p-2 sm:p-4 md:p-5">
            <div className="flex-1">
              <Rating className="!hidden sm:!flex !text-base" name="read-only" value={show.rating.average} readOnly />
              <h3 className="font-list-title text-sm md:text-base text-black mt-1">{name}</h3>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
