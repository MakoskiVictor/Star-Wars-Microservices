import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from '@/utils'

async function getPlanets () {
  return await fetch(`${BASE_URL}planets`).then(res => res.json()).then(response => response.data)
}

export function useGetPlanets () {
  return useQuery(['planets'], getPlanets)
}
