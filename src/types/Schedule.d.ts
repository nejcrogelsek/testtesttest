import { ShowType } from './Show'

export type ScheduleType = {
  id: string
  name: string
  image: string
  rating: { average: number }
  show: ShowType
}

export interface Schedules {
  schedules: ScheduleType[]
}
