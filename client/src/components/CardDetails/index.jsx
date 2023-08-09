import styles from './CardDetails.module.css'
import CardDescriptionDetail from '../CardDescriptionDetail'

export default function CardDetails ({ props }) {
  const filmsStyles = props.films.length > 1 ? styles.detailsTextFilms : styles.detailsTextFilmsSingle

  return (
    <div className={styles.card} >
    <div className={styles.top} >
        <div >
          <img src={props.image} alt="Character image" className={styles.image}/>
        </div>

        <div className={styles.topRight} >

            <div className={styles.cardDecal} >
              <div className={styles.cardDecalLeft}></div>
              <div className={styles.cardDecalRight}></div>
            </div>

          <div className={styles.textContainer} >

            <div className={styles.titleContainer}>
              <p className={styles.textTitle} > {props.name} </p>
            </div>

            <div className={styles.descriptionContainer}>
              <p className={styles.textDescription} > {props.description} </p>
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
            <p className={styles.detailsText} > {props.height} </p>
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
            <p className={styles.detailsText} >{props.mass}</p>
          </div>
        </div>

        <div className={styles.divider} ></div>

        <div className={styles.detailsContainer} >
          <p>Hair Color</p>
          <div>
            <p className={styles.detailsText} > {props.hair_color} </p>
          </div>
        </div>

        <div className={styles.divider} ></div>

        <div className={styles.detailsContainer} >
          <p>Skin Color</p>
          <div>
            <p className={styles.detailsText} > {props.skin_color} </p>
          </div>
        </div>

        <div className={styles.divider} ></div>

        <div className={styles.detailsContainer} >
          <div>
          <p>Eye Color</p>
          </div>
          <div>
            <p className={styles.detailsText} >{props.eye_color} </p>
          </div>
        </div>

        <div className={styles.divider} ></div>

        <div className={styles.detailsContainer} >
          <div>
          <p>Birth Year</p>
          </div>
          <div>
            <p className={styles.detailsText} >{props.birth_year} </p>
          </div>
        </div>

        <div className={styles.divider} ></div>

        <div className={styles.detailsContainer} >
          <div>
          <p>Gender</p>
          </div>
          <div>
            <p className={styles.detailsText} >{props.gender} </p>
          </div>
        </div>

        <div className={styles.divider} ></div>

        <div className={styles.detailsContainer} >
          <div>
          <p>Homeworld</p>
          </div>
          <div>
              <p className={styles.detailsText} >{props.homeworld.name} </p>
          </div>
        </div>

        <div className={styles.divider} ></div>

        <div>
          <div className={styles.detailsContainer} >
          <p>Films</p>
          <div>
            { props.films.map(film => (
              <p className={filmsStyles} key={film._id} > {film.title} </p>
            )) }
          </div>
          </div>
        </div>

      </div>

      <div className={styles.lineBottom} ></div>
    </div>
  )
}
