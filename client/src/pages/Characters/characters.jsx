import { useGetCharacters } from './hooks'

export default function Characteres () {
  const { data, isLoading } = useGetCharacters()

  if (isLoading) return <div>Loading...</div>
  return (
    <>
      <h2>Characteres</h2>
      { data.map(character => (
        <div key={character._id}>
          <p>Name: {character.name}</p>
          <img src={character.image} alt="Character image" />
        </div>
      )) }
    </>
  )
}
