import { useGetCharacters } from './hooks'
import { Card } from '../../components/Card'
import { Loader } from '../../components/Loader'
import styles from './Characters.module.css'

export default function Characters () {
  const { data, isLoading } = useGetCharacters()

  if (isLoading) return <Loader/>
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
