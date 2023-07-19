import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from '@/utils'

async function getFilms () {
  return await fetch(`${BASE_URL}films`).then(res => res.json()).then(response => response.data)
}

export function useGetFilms () {
  return useQuery(['films'], getFilms)
}
