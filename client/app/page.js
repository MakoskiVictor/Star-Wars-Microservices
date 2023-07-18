import styles from './page.module.css'
import { Navigator } from '@/components/Navigator'
import { ROUTES } from '@/models'

export default function Home () {
  return (
    <main className={styles.main}>
      <h1>Star Wars</h1>
      <Navigator pathNames={[ROUTES.CHARACTERS, ROUTES.FILMS, ROUTES.PLANETS]} />
    </main>
  )
}
