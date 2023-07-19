import { useGetFilms } from './hooks/useGetFilms'

export default function Films () {
  const { data, isLoading } = useGetFilms()
  if (isLoading) return <div>Loading...</div>
  return (
    <>
      <h2>Films</h2>
      { data?.map(films => (
        <div key={films._id} >
          <p>{films.title} </p>
          <img src={films.image} alt="Movie image" />
        </div>
      )) }
    </>
  )
}
