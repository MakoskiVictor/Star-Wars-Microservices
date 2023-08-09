import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from '@/utils'

async function getCharacter (id) {
  return await fetch(`${BASE_URL}characters/${id}`).then(res => res.json()).then(response => response.data)
}

export function useGetCharacterId (id) {
  return useQuery(['character'], () => getCharacter(id))
}
