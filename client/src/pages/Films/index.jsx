import { useGetFilms } from './hooks'
import { Card } from '../../components/Card'
import { Loader } from '../../components/Loader'
import styles from './Films.module.css'

export default function Films () {
  const { data, isLoading } = useGetFilms()
  if (isLoading) return <Loader/>
  return (
    <>
      <h2>Films</h2>

      <div className={styles.films}>
        { data?.map(films => (
          <Card key={films._id} props={films} />
        )) }
      </div>
    </>
  )
}
