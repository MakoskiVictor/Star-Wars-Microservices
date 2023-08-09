import { useGetCharacters } from './hooks'
import { Card } from '../../components/Card'
import { Loader } from '../../components/Loader'
import styles from './Characters.module.css'
import { Link } from 'react-router-dom'

export default function Characters () {
  const { data, isLoading } = useGetCharacters()

  if (isLoading) return <Loader/>
  return (
    <>
      <h2>Characters</h2>

      <div className={styles.characters}>
        { data.map(character => (
          <Link key={character._id} to={`/characters/${character._id}`} >
            <Card key={character._id} props={character} />
          </Link>
        )) }

      </div>
    </>
  )
}
