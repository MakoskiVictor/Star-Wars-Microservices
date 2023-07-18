import { Navigator } from '@/components/Navigator'
import { ROUTES } from '@/models'

export default function Planets () {
  return (
    <>
      <h2>Planets</h2>
      <Navigator pathNames={[ROUTES.HOME, ROUTES.CHARACTERS, ROUTES.FILMS]} />
    </>
  )
}
