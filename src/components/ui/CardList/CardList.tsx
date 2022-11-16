import type { NextPage } from 'next'

import { Schedules } from '../../../types/Schedule'
import Card from '../Card/Card'

const CardList: NextPage<Schedules> = ({ schedules }) => {
  return (
    <div className="flex flex-col mb-12">
      <h2 className="font-title">Last Added Shows</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
        {schedules.map((schedule) => (
          <Card key={schedule.id} {...schedule} />
        ))}
      </ul>
    </div>
  )
}

export default CardList
