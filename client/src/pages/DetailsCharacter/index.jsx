import styles from './DetailsCharacter.module.css'
import CardDescriptionDetail from '../../components/CardDescriptionDetail'
import { Link } from 'react-router-dom'

export default function DetailsCharacter () {
  return (
    <div className={styles.details} >

      <div className={styles.card} >
        <div className={styles.top} >
            <div >
              <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796" alt="Character image" className={styles.image}/>
            </div>

            <div className={styles.topRight} >

                <div className={styles.cardDecal} >
                  <div className={styles.cardDecalLeft}></div>
                  <div className={styles.cardDecalRight}></div>
                </div>

              <div className={styles.textContainer} >

                <div className={styles.titleContainer}>
                  <p className={styles.textTitle} >Luke Skywalker</p>
                </div>

                <div className={styles.descriptionContainer}>
                  <p className={styles.textDescription} >Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.</p>
                </div>
              </div>

              <CardDescriptionDetail/>

            </div>
          </div>

          <div className={styles.bottom} >
            <div>
              <div>
                <p>Height</p>
              </div>
              <div>
                <p>172</p>
              </div>
              <div>

              </div>
            </div>

            <div className={styles.divider} ></div>

            <div>
              <div>
                <p>Mass</p>
              </div>
              <div>
                <p>77</p>
              </div>
            </div>

            <div className={styles.divider} ></div>

            <div>
              <p>Hair Color</p>
              <div>
                <p>blond</p>
              </div>
            </div>

            <div className={styles.divider} ></div>

            <div>
              <p>Skin Color</p>
              <div>
                <p>fair</p>
              </div>
            </div>

            <div className={styles.divider} ></div>

            <div>
              <div>
              <p>Eye Color</p>
              </div>
              <div>
                <p>blue</p>
              </div>
            </div>

            <div className={styles.divider} ></div>

            <div>
              <div>
              <p>Birth Year</p>
              </div>
              <div>
                <p>19BBY</p>
              </div>
            </div>

            <div className={styles.divider} ></div>

            <div>
              <div>
              <p>Gender</p>
              </div>
              <div>
                <p>male</p>
              </div>
            </div>

            <div className={styles.divider} ></div>

            <div>
              <div>
              <p>Homeworld</p>
              </div>
              <div>
                <Link to={'/planets/:id'} >
                  <p>Tatooine</p>
                </Link>
              </div>
            </div>

            <div className={styles.divider} ></div>

            <div>
              <div>

              </div>
              <p>Films</p>
              <div>
                <Link to={'/films/:id'}>
                  <p>A New Hope</p>
                </Link>
                <p>The Empire Strikes Back</p>
                <p>Return of the Jedi</p>
                <p>The Phantom Menace</p>
                <p>Attack of the Clones</p>
                <p>Revenge of the Sith</p>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}
