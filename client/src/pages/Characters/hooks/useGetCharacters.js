import { useQuery } from '@tanstack/react-query'

async function getCharacters () {
  const URL = 'http://localhost:8000/characters'

  return await fetch(`${URL}`).then(res => res.json()).then(response => console.log(response))
}

export function useGetCharacters () {
  return useQuery(['characters'], getCharacters)
}
