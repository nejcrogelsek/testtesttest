import { NextPage } from 'next'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

import { ShipType } from '../../../types/Ship'

const CardDetail: NextPage<ShipType> = ({ image, name, type }) => {
  return (
    <div className="h-[450px] flex flex-col rounded-b-[20px] shadow-base relative mb-9">
      <div className="bg-blue-1 rounded-full p-2 shadow-xs cursor-pointer absolute top-5 left-5">
        <FaArrowRight />
      </div>
      <div className="relative h-full">
        <Image className="object-cover" src={image || '/images/no-image.png'} alt={name} layout="fill" />
      </div>
      <div className="flex flex-col justify-center items-center p-5 pt-10">
        <h2 className="font-title text-black">{name}</h2>
        <p className="font-list-subtitle text-blue-3 opacity-50">{type}</p>
      </div>
    </div>
  )
}

export default CardDetail
