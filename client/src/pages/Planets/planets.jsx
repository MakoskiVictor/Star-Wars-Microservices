import { useGetPlanets } from './hooks'

export default function Planets () {
  const { data, isLoading } = useGetPlanets()

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <h2>Planets</h2>
      { data?.map(planets => (
        <div key={planets._id} >
          <p>{planets.name} </p>
          <img src={planets.image} alt="Planet image" />
        </div>
      )) }
    </>
  )
}
