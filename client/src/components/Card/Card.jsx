import styles from './Card.module.css'

export default function Card ({ props }) {
  const name = props.name ?? props.title
  return (
    <div className={styles.card} >
      <p className={styles.title} >{name}</p>

        <img src={props.image} alt="Image" className={styles.img} />

    </div>
  )
}
