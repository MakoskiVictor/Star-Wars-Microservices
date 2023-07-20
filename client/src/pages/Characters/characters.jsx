import { useGetCharacters } from './hooks'
import { Card } from '../../components/Card'

export default function Characteres () {
  const { data, isLoading } = useGetCharacters()

  if (isLoading) return <div>Loading...</div>
  return (
    <>
      <h2>Characteres</h2>
      { data.map(character => (
        <Card key={character._id} props={character} />
      )) }
    </>
  )
}
