import { useGetPlanets } from './hooks'
import { Card } from '../../components/Card'
import { Loader } from '../../components/Loader'
import styles from './Planets.module.css'

export default function Planets () {
  const { data, isLoading } = useGetPlanets()

  if (isLoading) return <Loader/>

  return (
    <>
      <h2>Planets</h2>

      <div className={styles.planets}>
          { data?.map(planets => (
          <Card key={planets._id} props={planets} />
          )) }
      </div>
    </>
  )
}
