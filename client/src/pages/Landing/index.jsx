import { Video } from './Video'
import styles from './Landing.module.css'
/* import starWars from '../../assets/Images/starWars.svg' */

export default function Landing () {
  return (
    <div className={styles.landing} >

      <div className={styles.imgTitleContainer} >

        <div className={styles.startBtn} > <div className={styles.start} >START</div> </div>
      </div>
        <img src="https://res.cloudinary.com/dl9pbe0eu/image/upload/v1692100179/1310579_vekigt.webp" alt="Star Wars Img" className={styles.wallpaper} />

      <div className={styles.bottom} >
        <Video />
      </div>

    </div>
  )
}
