import { Navigator } from '@/components/Navigator'
import { ROUTES } from '@/models'

export default function Films () {
  return (
    <>
      <h2>Films</h2>
      <Navigator pathNames={[ROUTES.HOME, ROUTES.CHARACTERS, ROUTES.PLANETS]} />
    </>
  )
}
