const BASE_URL = 'http://34.125.79.61:8000/'

export const getLinkById = (id) => {
  if (id === 'Get All Characters') {
    return `${BASE_URL}characters`
  }
  if (id === 'Get All Planets') {
    return `${BASE_URL}planets`
  }
  if (id === 'Get All Films') {
    return `${BASE_URL}films`
  }
  if (id === 'Get Character by ID') {
    return `${BASE_URL}characters/id`
  }
  if (id === 'Get Planet by ID') {
    return `${BASE_URL}planets/id`
  }
  if (id === 'Get Film by ID') {
    return `${BASE_URL}films/id`
  }
  if (id === 'Post Character') {
    return `${BASE_URL}characters`
  }
  if (id === 'Post Planet') {
    return `${BASE_URL}planets`
  }
  if (id === 'Post Film') {
    return `${BASE_URL}films`
  }
  if (id === 'Update Character') {
    return `${BASE_URL}characters`
  }
  if (id === 'Update Planet') {
    return `${BASE_URL}planets`
  }
  if (id === 'Update Film') {
    return `${BASE_URL}films`
  }
}

export const EXAMPLE_GET_ALL_CHARACTERS = `{
  "error": false,
  "data": {
  "_id": "1",
  "name": "Luke Skywalker",
  "image": "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796",
  "description": "Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest 
  Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, 
  discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the 
  famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the 
  Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would 
  be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": {
  "_id": "1",
  "name": "Tatooine"
  },
  "films": [
  {
  "_id": "1",
  "title": "A New Hope"
  },
  {
  "_id": "2",
  "title": "The Empire Strikes Back"
  },
  {
  "_id": "3",
  "title": "Return of the Jedi"
  },
  {
  "_id": "6",
  "title": "Revenge of the Sith"
  }
  ]
  }
  }`

export const EXAMPLE_POST_CHARACTERS =
` CHARACTERS

  name: String,
  image: String,
  description: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String
  
  PLANETS

  name: String,
  image: String,
  description: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String

  FILMS

  title: String,
  image: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date
  `
