import store from '../03-store'

const PROP_ACTIONS = '_actions'
const PROP_MUTATIONS = '_mutations'
// eslint-disable-next-line import/no-unused-modules
export const MONTHS = [
  { eng: 'Jan', rus: 'января' },
  { eng: 'Feb', rus: 'февраля' },
  { eng: 'Mar', rus: 'марта' },
  { eng: 'Apr', rus: 'апреля' },
  { eng: 'May', rus: 'мая' },
  { eng: 'Jun', rus: 'июня' },
  { eng: 'Jul', rus: 'июля' },
  { eng: 'Aug', rus: 'августа' },
  { eng: 'Sep', rus: 'сентября' },
  { eng: 'Oct', rus: 'октября' },
  { eng: 'Nov', rus: 'ноября' },
  { eng: 'Dec', rus: 'декабря' }
]

export async function loadInfoAboutMovie (id) {
  const movieDetails = await store[PROP_ACTIONS]['main/getMovieDetails'][0](id)
  store[PROP_MUTATIONS]['main/SET_MOVIE'][0](movieDetails)
  const casts = await store[PROP_ACTIONS]['main/getMovieActors'][0](id)
  let newCastsList = casts.filter(elem => elem.popularity > 25)
  if (newCastsList.length < 5) {
    newCastsList = casts.filter(elem => elem.popularity > 20)
  }
  if (newCastsList.length < 3) {
    newCastsList = casts.filter(elem => elem.popularity > 15)
  }
  store[PROP_MUTATIONS]['main/SET_ACTORS_LIST'][0](newCastsList)
  const similarMovies = await store[PROP_ACTIONS]['main/getSimilarMovies'][0](id)
  store[PROP_MUTATIONS]['main/SET_SIMILAR_MOVIES_LIST'][0](similarMovies.results)
  const reviews = await store[PROP_ACTIONS]['main/getMovieReviews'][0]({ movieId: id, page: 1 })
  store[PROP_MUTATIONS]['main/SET_MOVIE_REVIEWS_LIST'][0](reviews.results)
  const trailers = await store[PROP_ACTIONS]['main/getMovieTrailer'][0](id)
  store[PROP_MUTATIONS]['main/SET_MOVIE_TRAILERS_LIST'][0](trailers.results)
  return movieDetails
}
