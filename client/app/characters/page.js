import { Navigator } from '@/components/Navigator'
import { ROUTES } from '@/models'

export default function Characters () {
  return (
    <>
      <h2>Characters</h2>
      <Navigator pathNames={[ROUTES.HOME, ROUTES.FILMS, ROUTES.PLANETS]} />
    </>
  )
}
