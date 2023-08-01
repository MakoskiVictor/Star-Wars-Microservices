import styles from './DetailsCharacter.module.css'
import CardDetails from '../../components/CardDetails'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/constants'
import { Loader } from '../../components/Loader'
import { useParams } from 'react-router-dom'

export default function DetailsCharacter () {
  const { id } = useParams()

  const [character, setCharacter] = useState()
  /* const [error, setError] = useState(null) */
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    /* const abortController = new AbortController() */
    setLoading(true)
    fetch(`${BASE_URL}characters/${id}` /* { signal: abortController.signal } */)
      .then(res => res.json())
      .then(response => setCharacter(response.data))
      .catch(error => console.log(error))
      .finally(setLoading(false))

    /* return () => abortController.abort() */
  }, [id])
  console.log('IM CHARACTER', character)
  return (
    <div className={styles.details} >
      {
        loading && character !== undefined
          ? <Loader />
          : <CardDetails props={character} />

      }

    </div>
  )
}
