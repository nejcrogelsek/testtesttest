export type ShowType = {
  id: string
  name: string
  image: { medium: string, original }
  summary: string
  genres: string[]
  status: string
  rating: { average: number }
  schedule: { days: string[] }
  network: {
    name: string
  }
}

export interface Shows {
  shows: ShowType[]
}
