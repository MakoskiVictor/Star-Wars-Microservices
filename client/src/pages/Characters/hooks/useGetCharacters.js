import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from '@/utils'

async function getCharacters () {
  return await fetch(`${BASE_URL}characters`).then(res => res.json()).then(response => response.data)
}

export function useGetCharacters () {
  return useQuery(['characters'], getCharacters)
}
