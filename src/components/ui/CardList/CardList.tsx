import type { NextPage } from 'next'

import { Ships } from '../../../types/Ship'
import Card from '../Card/Card'

const CardList: NextPage<Ships> = ({ ships }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {ships.map((ship) => (
        <Card key={ship.id} {...ship} />
      ))}
    </div>
  )
}

export default CardList
