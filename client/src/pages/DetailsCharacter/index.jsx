import styles from './DetailsCharacter.module.css'
import CardDetails from '../../components/CardDetails'
import { Loader } from '../../components/Loader'
import { useParams } from 'react-router-dom'
import { useGetCharacterId } from './hooks/useGetCharacterId'
import { useQuery } from '@tanstack/react-query'

export default function DetailsCharacter () {
  const { id } = useParams()

  const { isLoading, data, error } = useQuery({
    queryKey: ['character'],
    queryFn: useGetCharacterId(id)
  })

  if (isLoading) return <Loader/>
  if (error) return <p>Error: {error.message}</p>
  console.log('CHARACTERS ==>', data)
  console.log('ERROR ==>', error)
  return (
    <div className={styles.details} >
      {
       <CardDetails props={data} />
      }

    </div>
  )
}
