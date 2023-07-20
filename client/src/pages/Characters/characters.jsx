import { useGetCharacters } from './hooks'
import { Card } from '../../components/Card'
import styles from './Characters.module.css'

export default function Characteres () {
  const { data, isLoading } = useGetCharacters()

  if (isLoading) return <div>Loading...</div>
  return (
    <>
      <h2>Characters</h2>

      <div className={styles.characters}>
        { data.map(character => (
          <Card key={character._id} props={character} />
        )) }

      </div>
    </>
  )
}
