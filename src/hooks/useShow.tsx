import axios from 'axios'
import { useQuery } from 'react-query'

interface Props {
  onSuccess?: (response: any) => void
  onError?: (error: Error) => void
  id: string
}

const fetchShow = ({ queryKey }: { queryKey: any[] }) => {
  const id = queryKey[1]
  return axios.get(`https://api.tvmaze.com/shows/${id}`)
}

export const useShow = ({ onSuccess, onError, id }: Props) => {
  return useQuery(['super-hero', id], fetchShow, {
    onError,
    onSuccess,
  })
}
