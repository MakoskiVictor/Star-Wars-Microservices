import styles from './DetailsCharacter.module.css'
import CardDescriptionDetail from '../../components/CardDescriptionDetail'

export default function DetailsCharacter () {
  return (
    <div className={styles.details} >

      <div className={styles.card} >
        <div className={styles.top} >
            <div >
              <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796" alt="Character image" className={styles.image}/>
            </div>

            <div className={styles.topRight} >

              <div className={styles.textContainer} >
                <p>Luke Skywalker</p>
                <p>Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.</p>
              </div>

              <CardDescriptionDetail/>

            </div>
          </div>
          {/* <div>
            <p>Height</p>
            <p>mass</p>
            <p>hair color</p>
            <p>skin_color</p>
            <p>eye_color</p>
            <p>birth_year</p>
            <p>gender</p>
            <p>homeworld</p>
            <p>films</p>
          </div> */}
        </div>
    </div>
  )
}
