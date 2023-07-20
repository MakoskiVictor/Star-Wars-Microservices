import styles from './Card.module.css'

export default function Card ({ props }) {
  const filteredName = props.name ?? props.title
  const filteredCardStyles = props.name === undefined ? styles.card2 : styles.card
  const filteredImgStyles = props.name === undefined ? styles.img2 : styles.img

  return (
    <div className={ filteredCardStyles } >
      <p className={styles.title} >{filteredName}</p>

        <img src={props.image} alt="Image" className={filteredImgStyles } />

    </div>
  )
}
