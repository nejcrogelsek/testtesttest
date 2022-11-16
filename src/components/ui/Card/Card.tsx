import Rating from '@mui/material/Rating'
import { NextPage } from 'next'
import Link from 'next/link'

import { ScheduleType } from '../../../types/Schedule'

const Card: NextPage<ScheduleType> = ({ name, show }) => {
  return (
    <li className='flex flex-col rounded-lg shadow-md max-w-[210px]'>
      <Link
        className="cursor-pointer h-full"
        href={{
          pathname: `/${show.id}`,
        }}
        as={`/${show.id}`}
      >
        <a className='h-full'>
          <div className="h-full flex flex-col rounded-lg shadow-md">
            <div className="relative h-full">
              <img
                className="rounded-t-lg object-cover"
                src={show.image.medium ?? '/images/no-image.png'}
                alt={name}
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
    </li>
  )
}

export default Card
