import styles from './CardDescriptionDetail.module.css'

export default function CardDescriptionDetail () {
  return (
    <>
      <div className={styles.cardDetail} >
                <div className={styles.cardDetailLeft}></div>
                <div className={styles.cardDetailCenterLeft}></div>
                <div className={styles.cardDetailCenter}></div>
                <div className={styles.cardDetailCenterRight}></div>
                <div className={styles.cardDetailRight}></div>
              </div>
    </>
  )
}
