import styles from './CardDetails.module.css'
import CardDescriptionDetail from '../CardDescriptionDetail'

export default function CardDetails () {
  return (
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
        <div className={styles.detailsContainer} >
          <div>
            <p>Height</p>
          </div>
          <div>
            <p className={styles.detailsText} >172</p>
          </div>
          <div>

          </div>
        </div>

        <div className={styles.divider} ></div>

        <div className={styles.detailsContainer} >
          <div>
            <p>Mass</p>
          </div>
          <div>
            <p className={styles.detailsText} >77</p>
          </div>
        </div>

        <div className={styles.divider} ></div>

        <div className={styles.detailsContainer} >
          <p>Hair Color</p>
          <div>
            <p className={styles.detailsText} >blond</p>
          </div>
        </div>

        <div className={styles.divider} ></div>

        <div className={styles.detailsContainer} >
          <p>Skin Color</p>
          <div>
            <p className={styles.detailsText} >fair</p>
          </div>
        </div>

        <div className={styles.divider} ></div>

        <div className={styles.detailsContainer} >
          <div>
          <p>Eye Color</p>
          </div>
          <div>
            <p className={styles.detailsText} >blue</p>
          </div>
        </div>

        <div className={styles.divider} ></div>

        <div className={styles.detailsContainer} >
          <div>
          <p>Birth Year</p>
          </div>
          <div>
            <p className={styles.detailsText} >19BBY</p>
          </div>
        </div>

        <div className={styles.divider} ></div>

        <div className={styles.detailsContainer} >
          <div>
          <p>Gender</p>
          </div>
          <div>
            <p className={styles.detailsText} >male</p>
          </div>
        </div>

        <div className={styles.divider} ></div>

        <div className={styles.detailsContainer} >
          <div>
          <p>Homeworld</p>
          </div>
          <div>
            {/* <Link to={'/planets/:id'} > */}
              <p className={styles.detailsText} >Tatooine</p>
            {/* </Link> */}
          </div>
        </div>

        <div className={styles.divider} ></div>

        <div>
          <div className={styles.detailsContainer} >
          <p>Films</p>
          <div>
            {/* <Link to={'/films/:id'}>
              <p>A New Hope</p>
            </Link> */}
            <p className={styles.detailsTextFilms} >Revenge of the Sith, Revenge of the Sith, Revenge of the Sith, Revenge of the Sith, Revenge of the Sith, Revenge of the Sith, Revenge of the Sith</p>
          </div>
          </div>
        </div>

      </div>

      <div className={styles.lineBottom} ></div>
    </div>
  )
}
