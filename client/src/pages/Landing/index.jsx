import trailer from '../../assets/Video/trailer.webm'
import styles from './Landing.module.css'

export default function Landing () {
  return (
    <main className={styles.landing}>
      <section className={styles.section} >
        <h1>Star Wars Microservices</h1>
        <div className={styles.videoContainer}>
          <video src={trailer} autoPlay muted loop className={styles.video}></video>
        </div>
      </section>
    </main>
  )
}
