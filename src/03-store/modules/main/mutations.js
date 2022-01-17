import lodash from 'lodash'

import * as types from './mutation-types'

export default {
  [types.SET_MOVIE_PAGE] (state, payload) {
    state.moviesPage = lodash.cloneDeep(payload)
  },
  [types.SET_LATEST_MOVIE_PAGE] (state, payload) {
    state.latestMoviesPage = lodash.cloneDeep(payload)
  },
  [types.SET_MOVIE] (state, payload) {
    state.movie = lodash.cloneDeep(payload)
  },
  [types.SET_SEARCH_MOVIE_LIST] (state, payload) {
    state.searchMovieList = lodash.cloneDeep(payload)
  },
  [types.SET_ACTORS_LIST] (state, payload) {
    state.actorsList = lodash.cloneDeep(payload)
  },
  [types.SET_SIMILAR_MOVIES_LIST] (state, payload) {
    state.similarMoviesList = lodash.cloneDeep(payload)
  },
  [types.SET_MOVIE_REVIEWS_LIST] (state, payload) {
    state.movieReviewsList = lodash.cloneDeep(payload)
  },
  [types.SET_MOVIE_TRAILERS_LIST] (state, payload) {
    state.movieTrailersList = lodash.cloneDeep(payload)
  }
}
