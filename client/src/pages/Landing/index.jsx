import trailer from '../../assets/Video/trailer.webm'
import styles from './Landing.module.css'
import cellWars from '../../assets/Images/cellWars.webp'

export default function Landing () {
  return (
    <main className={styles.landing}>
      <section className={styles.section} >
        <div className={styles.title} >
          <h1>Star Wars Microservices</h1>
        </div>
        <div className={styles.videoContainer}>
          <video src={trailer} autoPlay muted loop className={styles.video}></video>
        </div>
        {/* <div className={styles.celImgContainer}> */}
          <img src={cellWars} alt="Star Wars Img" className={styles.celImg} />
        {/* </div> */}
        <div className={styles.start} >
          <a href='/characters' className={styles.link} >Characters</a>
        </div>
      </section>
    </main>
  )
}
